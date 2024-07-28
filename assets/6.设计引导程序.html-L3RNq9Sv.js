import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as e}from"./app-Yuwr1-ZM.js";const l="/assets/%E7%A8%8B%E5%BA%8F%E5%AE%9E%E7%8E%B0-B6eSXco8.png",t="/assets/51%E7%82%B9%E7%81%AF%E6%B1%87%E7%BC%96%E6%96%87%E4%BB%B6-CaW4XP0r.png",i={},p=e('<h1 id="第六章-设计引导程序" tabindex="-1"><a class="header-anchor" href="#第六章-设计引导程序"><span>第六章：设计引导程序</span></a></h1><p><strong>现代计算机的开机通常要经历一个复杂且精心设计的过程，这个过程叫做引导。引导是计算机启动和运行操作系统的初始步骤，它确保了系统能够正确地加载和执行所需的程序。引导过程随CPU架构不同而不同，我们平常接触最多的是x86架构的引导，而后面的课程我们主要涉及单片机以及ARM架构的引导</strong></p><hr><h2 id="_1-引导流程设计" tabindex="-1"><a class="header-anchor" href="#_1-引导流程设计"><span>1.引导流程设计</span></a></h2><p><strong>目前我们的计算机总共有三块存储：</strong></p><ul><li><strong>iRom：CPU内部很小的一块存储，只读</strong></li><li><strong>内存：无法持久化保存数据，只有上电之后才能由程序修改</strong></li><li><strong>硬盘：存放我们的自定义代码和数据</strong></li></ul><p><strong>CPU在上电之后首先会去执行iRom的代码，这一段代码应该是写死在CPU内部不能修改的，所以这一段代码的主要作用应该是引导CPU去执行我们的自定义代码。而我们的自定义代码存放在硬盘上，直接执行效率很低，需要将硬盘里面的数据加载到内存执行。所以CPU的iRom代码应主要功能应该是：</strong></p><ul><li><strong>将硬盘中的程序拷贝到内存</strong></li><li><strong>跳转到内存地址接着执行</strong></li></ul><p><strong>但这里存在一个问题：我们的程序长度是不固定的，但iRom只能加载固定长度的数据到内存。为了容纳更长的程序，这个固定长度只能预先设计的非常大；但这样又会造成引导效率太低。所以为了解决这个问题，我们做这样一个约定：iRom只加载一段固定长度的短程序并执行，这段短程序再负责加载更长的我们的自定义程序。由于这段短程序我们可以自定义，就不存在之前的问题了。所以最终的设计如下：</strong></p><ul><li><strong>iRom负责将硬盘前32个寻址长度的程序加载到内存并跳转</strong></li><li><strong>硬盘前32个寻址长度负责加载自定义程序并跳转</strong></li><li><strong>最终执行自定义程序</strong></li></ul><p><strong>而硬盘前32个寻址地址存放的程序，我们就称之为引导程序，而这32个寻址地址，我们称之为引导区</strong></p><hr><h2 id="_2-程序实现" tabindex="-1"><a class="header-anchor" href="#_2-程序实现"><span>2.程序实现</span></a></h2><figure><img src="'+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-1-irom的实现" tabindex="-1"><a class="header-anchor" href="#_2-1-irom的实现"><span>2.1 iRom的实现</span></a></h3><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">// 向寄存器b写0</span>
<span class="token number">0</span>	ld_ib		<span class="token number">0</span>
<span class="token comment">// 下两句话是将16地址的指令（jmp 10）拷贝到511地址，根据我们前面做的映射，511地址实际上指向内存空间</span>
<span class="token number">1</span>	ld_a		<span class="token number">16</span>
<span class="token number">2</span>	save_a		<span class="token number">511</span>
<span class="token comment">// 下面三句话是将14地址的指令（ld_a 512）加上寄存器b后拷贝到509</span>
<span class="token number">3</span>	ld_a		<span class="token number">14</span>
<span class="token number">4</span>	add			<span class="token number">0</span>
<span class="token number">5</span>	save_a		<span class="token number">509</span>
<span class="token comment">// 下面三句话是将15地址的指令（save_a 256）加上寄存器b后拷贝到510</span>
<span class="token number">6</span>	ld_a		<span class="token number">15</span>
<span class="token number">7</span>	add			<span class="token number">0</span>
<span class="token number">8</span>	save_a		<span class="token number">510</span>
<span class="token comment">// 跳转到509。截止现在509、510、511有三条指令（ld_a 512、save_a 256、jmp 10）合起来表示将512地址的内容拷贝到256，并跳转到10地址继续执行</span>
<span class="token number">9</span>	jmp			<span class="token number">509</span>
<span class="token comment">// 从511跳转回来后给b累加1，拷贝下一个地址（从513拷贝到257）。如果b等于32，则结束循环</span>
<span class="token number">10</span>	add_ib		<span class="token number">1</span>
<span class="token number">11</span>	cmp_b		<span class="token number">32</span> （所以只能循环<span class="token number">0</span><span class="token operator">-</span><span class="token number">31</span>，<span class="token number">32</span>次，比较后的结果会存储在比较寄存器）
<span class="token number">12</span>	jne			<span class="token number">3</span>
<span class="token comment">// 执行到这里说明相等了，证明32条内存的指令已经都拷贝到了内存中。</span>
跳转到内存中的<span class="token number">256</span>地址继续执行
<span class="token number">13</span>	jmp			<span class="token number">256</span>
<span class="token comment">// 指令模板，以下三行不会执行</span>
<span class="token number">14</span>	ld_a		<span class="token number">512</span>
<span class="token number">15</span>	save_a		<span class="token number">256</span>
<span class="token number">16</span>	jmp			<span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>上面的程序可以实现将地址512-543（硬盘）的内容拷贝到地址256-287（内存），并跳转到256（内存）继续执行，而根据主线地址映射，512-543是硬盘的头32地址，256-287是内存的头32地址，所以这一段程序可以将硬盘的程序拷贝到内存并执行</strong></p><p><strong>将这段代码翻译为二进制：</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code>v2<span class="token punctuation">.</span><span class="token number">0</span> raw
<span class="token number">5000</span>
<span class="token number">810</span>
<span class="token number">19ff</span>
<span class="token number">80</span>e
<span class="token number">2800</span>
<span class="token number">19f</span>d
<span class="token number">80f</span>
<span class="token number">2800</span>
<span class="token number">19f</span>e
a9fd
<span class="token number">6001</span>
a020
b803
a900
a00
<span class="token number">1900</span>
a80a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>保存为“CPU内置iROM.hex”，并加载到CPU内置的iRom上</strong></p><hr><h3 id="_2-2-硬盘代码" tabindex="-1"><a class="header-anchor" href="#_2-2-硬盘代码"><span>2.2 硬盘代码</span></a></h3><p><strong>硬盘511-543之间的代码，已经被上面的引导程序拷贝到了内存中，即便我们硬盘当前只有17条指令，也就是只有511-528是实际有效的拷贝。但引导程序仍然会将511-543之间的程序全部拷贝过去。因为CPU中的引导程序是不可修改的</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token number">0</span>	ld_ib		<span class="token number">0</span>
<span class="token number">1</span>	ld_a		<span class="token number">272</span>
<span class="token number">2</span>	save_a		<span class="token number">511</span>
<span class="token number">3</span>	ld_a		<span class="token number">270</span>
<span class="token number">4</span>	add			<span class="token number">0</span>
<span class="token number">5</span>	save_a		<span class="token number">509</span>
<span class="token number">6</span>	ld_a		<span class="token number">271</span>
<span class="token number">7</span>	add			<span class="token number">0</span>
<span class="token number">8</span>	save_a		<span class="token number">510</span>
<span class="token number">9</span>	jmp			<span class="token number">509</span>
<span class="token number">10</span>	add_ib		<span class="token number">1</span>
<span class="token number">11</span>	cmp_b		<span class="token number">25</span>
<span class="token number">12</span>	jne			<span class="token number">259</span>
<span class="token number">13</span>	jmp			<span class="token number">288</span>
<span class="token number">14</span>	ld_a		<span class="token number">544</span>
<span class="token number">15</span>	save_a		<span class="token number">288</span>
<span class="token number">16</span>	jmp			<span class="token number">266</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>这段代码的内容和上面的iRom内容类似，主要作用是将硬盘544-568地址之间的程序拷贝到内存288-312地址并执行，由于这一段代码我们可以自定义，拷贝的长度是和程序相关的</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token number">32</span>	ld_ia		<span class="token number">72</span>                  H
<span class="token number">33</span>	save_a		<span class="token number">768</span>
<span class="token number">34</span>	ld_ia		<span class="token number">101</span>                 e
<span class="token number">35</span>	save_a		<span class="token number">768</span>
<span class="token number">36</span>	ld_ia		<span class="token number">108</span>                 l
<span class="token number">37</span>	save_a		<span class="token number">768</span>
<span class="token number">38</span>	ld_ia		<span class="token number">108</span>                 l
<span class="token number">39</span>	save_a		<span class="token number">768</span>
<span class="token number">40</span>	ld_ia		<span class="token number">111</span>                 o
<span class="token number">41</span>	save_a		<span class="token number">768</span>
<span class="token number">42</span>	ld_ia		<span class="token number">32</span>                  空格
<span class="token number">43</span>	save_a		<span class="token number">768</span>
<span class="token number">44</span>	ld_ia		<span class="token number">119</span>                 w
<span class="token number">45</span>	save_a		<span class="token number">768</span>
<span class="token number">46</span>	ld_ia		<span class="token number">111</span>                 o
<span class="token number">47</span>	save_a		<span class="token number">768</span>
<span class="token number">48</span>	ld_ia		<span class="token number">114</span>                 r
<span class="token number">49</span>	save_a		<span class="token number">768</span>
<span class="token number">50</span>	ld_ia		<span class="token number">108</span>                 l
<span class="token number">51</span>	save_a		<span class="token number">768</span>
<span class="token number">52</span>	ld_ia		<span class="token number">100</span>                 d
<span class="token number">53</span>	save_a		<span class="token number">768</span>
<span class="token number">54</span>	ld_ia		<span class="token number">33</span>                  <span class="token operator">!</span>
<span class="token number">55</span>	save_a		<span class="token number">768</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>这段代码主要就是将一个个数字存到768地址。根据总线地址映射，这个地址实际上是终端的数据输入结构，换句话说我们每次保存的数据，在下个时钟周期就会在终端显示出来</strong></p><p><strong>将这段代码翻译成二进制文件：</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code>v2<span class="token punctuation">.</span><span class="token number">0</span> raw
<span class="token number">5000</span>
<span class="token number">0910</span>
<span class="token number">19FF</span>
<span class="token number">090</span>E
<span class="token number">2800</span>
<span class="token number">19F</span>D
<span class="token number">090F</span>
<span class="token number">2800</span>
<span class="token number">19F</span>E
A9FD
<span class="token number">6001</span>
A019
B903
A920
<span class="token number">0</span>A20
<span class="token number">1920</span>
A90A
<span class="token number">15</span><span class="token operator">*</span><span class="token number">0</span>
<span class="token number">4848</span>
<span class="token number">1</span>b00
<span class="token number">4865</span>
<span class="token number">1</span>b00
<span class="token number">486</span>c
<span class="token number">1</span>b00
<span class="token number">486</span>c
<span class="token number">1</span>b00
<span class="token number">486f</span>
<span class="token number">1</span>b00
<span class="token number">4820</span>
<span class="token number">1</span>b00
<span class="token number">4877</span>
<span class="token number">1</span>b00
<span class="token number">486f</span>
<span class="token number">1</span>b00
<span class="token number">4872</span>
<span class="token number">1</span>b00
<span class="token number">486</span>c
<span class="token number">1</span>b00
<span class="token number">4864</span>
<span class="token number">1</span>b00
<span class="token number">4821</span>
<span class="token number">1</span>b00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>将上面的内容保存为“外置引导 + 程序.hex”，并加载到外置EEPROM里面</strong></p><hr><h3 id="_2-3-执行代码" tabindex="-1"><a class="header-anchor" href="#_2-3-执行代码"><span>2.3 执行代码</span></a></h3><p><strong>将时钟频率设置为50，开启仿真，在仿真的过程中，右键点击RAM并监视RAM内容的变化。可以看到RAM的地址内部不断有数据被拷贝进来并执行。最后会在终端上显示“Hello world！”</strong></p><hr><h2 id="_3-单片机引导流程" tabindex="-1"><a class="header-anchor" href="#_3-单片机引导流程"><span>3.单片机引导流程</span></a></h2><p><strong>单片机引导流程要比一般x86计算机简单。我们可以把单片机视为ROM和RAM都内置在CPU中，只暴露一些输入输出总线接口和外部通信的设备。那么引导过程其实就相当于在ROM上直接执行程序，只有需要用到RAM时才会向RAM中写入数据，并不需要向一般PC引导过程一样需要多步跳转。以我们马上就要学习的51单片机为例，我们来看一下单片机的引导程序</strong></p><p><strong>来看如下代码：</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;REG52.h&gt;</span></span>

sbit led <span class="token operator">=</span> P1<span class="token operator">^</span><span class="token number">0</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	led <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>这是一个简单的51单片机点灯程序。至于这个程序为什么能够点灯，我们这里不去关心，我们着重要看的是，单片机从上电到执行到我们的main函数，都经历了哪些过程。当我们开启单片机的调试程序。将程序编译，并开启调试模式，可以看到我们程序编译完成以后的汇编文件如下：</strong></p><figure><img src="`+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>可以看到我们的mian函数的指令地址是0x000F，而第一条指令0x0000的作用是跳转到0x0003，从0x0003到0x000C这一段代码其实是51单片机的固定初始化流程，当这段代码执行完毕后，最后一句0x000C的代码就是跳转到0x000F，而0x000F就是我们的main函数入口了。这就是51单片机的引导过程了，可以看到由于单片机的结构简单，它的引导过程甚至没有我们设计的CPU复杂</strong></p>',41),r=[p];function c(d,o){return s(),a("div",null,r)}const b=n(i,[["render",c],["__file","6.设计引导程序.html.vue"]]),v=JSON.parse('{"path":"/%E5%B5%8C%E5%85%A5%E5%BC%8F%E5%AD%A6%E4%B9%A0/2.%E6%95%B0%E5%AD%97%E7%94%B5%E8%B7%AF%E5%9F%BA%E7%A1%80/6.%E8%AE%BE%E8%AE%A1%E5%BC%95%E5%AF%BC%E7%A8%8B%E5%BA%8F.html","title":"第六章：设计引导程序","lang":"zh-CN","frontmatter":{"date":"2024-06-21T00:00:00.000Z","order":6,"description":"第六章：设计引导程序 现代计算机的开机通常要经历一个复杂且精心设计的过程，这个过程叫做引导。引导是计算机启动和运行操作系统的初始步骤，它确保了系统能够正确地加载和执行所需的程序。引导过程随CPU架构不同而不同，我们平常接触最多的是x86架构的引导，而后面的课程我们主要涉及单片机以及ARM架构的引导 1.引导流程设计 目前我们的计算机总共有三块存储： i...","head":[["meta",{"property":"og:url","content":"https://github.com/jimbo-master/%E5%B5%8C%E5%85%A5%E5%BC%8F%E5%AD%A6%E4%B9%A0/2.%E6%95%B0%E5%AD%97%E7%94%B5%E8%B7%AF%E5%9F%BA%E7%A1%80/6.%E8%AE%BE%E8%AE%A1%E5%BC%95%E5%AF%BC%E7%A8%8B%E5%BA%8F.html"}],["meta",{"property":"og:site_name","content":"JimBoの学习妙妙屋"}],["meta",{"property":"og:title","content":"第六章：设计引导程序"}],["meta",{"property":"og:description","content":"第六章：设计引导程序 现代计算机的开机通常要经历一个复杂且精心设计的过程，这个过程叫做引导。引导是计算机启动和运行操作系统的初始步骤，它确保了系统能够正确地加载和执行所需的程序。引导过程随CPU架构不同而不同，我们平常接触最多的是x86架构的引导，而后面的课程我们主要涉及单片机以及ARM架构的引导 1.引导流程设计 目前我们的计算机总共有三块存储： i..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"JimBo"}],["meta",{"property":"article:published_time","content":"2024-06-21T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第六章：设计引导程序\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-06-21T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"JimBo\\",\\"url\\":\\"https://github.com/jimbo-master\\"}]}"]]},"headers":[{"level":2,"title":"1.引导流程设计","slug":"_1-引导流程设计","link":"#_1-引导流程设计","children":[]},{"level":2,"title":"2.程序实现","slug":"_2-程序实现","link":"#_2-程序实现","children":[{"level":3,"title":"2.1 iRom的实现","slug":"_2-1-irom的实现","link":"#_2-1-irom的实现","children":[]},{"level":3,"title":"2.2 硬盘代码","slug":"_2-2-硬盘代码","link":"#_2-2-硬盘代码","children":[]},{"level":3,"title":"2.3 执行代码","slug":"_2-3-执行代码","link":"#_2-3-执行代码","children":[]}]},{"level":2,"title":"3.单片机引导流程","slug":"_3-单片机引导流程","link":"#_3-单片机引导流程","children":[]}],"git":{},"readingTime":{"minutes":6.93,"words":2079},"filePathRelative":"嵌入式学习/2.数字电路基础/6.设计引导程序.md","localizedDate":"2024年6月21日","autoDesc":true,"excerpt":"\\n<p><strong>现代计算机的开机通常要经历一个复杂且精心设计的过程，这个过程叫做引导。引导是计算机启动和运行操作系统的初始步骤，它确保了系统能够正确地加载和执行所需的程序。引导过程随CPU架构不同而不同，我们平常接触最多的是x86架构的引导，而后面的课程我们主要涉及单片机以及ARM架构的引导</strong></p>\\n<hr>\\n<h2>1.引导流程设计</h2>\\n<p><strong>目前我们的计算机总共有三块存储：</strong></p>\\n<ul>\\n<li><strong>iRom：CPU内部很小的一块存储，只读</strong></li>\\n<li><strong>内存：无法持久化保存数据，只有上电之后才能由程序修改</strong></li>\\n<li><strong>硬盘：存放我们的自定义代码和数据</strong></li>\\n</ul>"}');export{b as comp,v as data};
