import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as t}from"./app-Dezzdk4T.js";const p="/assets/%E5%86%85%E5%AD%98%E5%9C%B0%E5%9D%80-DCCUP_r-.png",e="/assets/%E5%86%85%E5%AD%98%E5%88%86%E9%85%8D-BNRKV5N-.png",o="/assets/%E4%BB%80%E4%B9%88%E6%98%AF%E6%8C%87%E9%92%88-CQL3CyS8.png",c="/assets/%E5%8F%96%E5%9D%80%E8%BF%90%E7%AE%97%E7%AC%A6-BKkLNCaq.png",i="/assets/%E5%86%85%E5%AD%98%E7%A4%BA%E6%84%8F%E5%9B%BE-Ba1noZJf.png",l="/assets/%E6%8C%87%E9%92%88%E8%87%AA%E5%A2%9E%E8%87%AA%E5%87%8F-4JeVios9.png",u="/assets/%E5%90%8C%E7%B1%BB%E5%9E%8B%E6%8C%87%E9%92%88%E7%9B%B8%E5%87%8F-B_U7aWYA.png",r="/assets/%E6%8C%87%E9%92%88%E7%9A%84%E6%AF%94%E8%BE%83%E8%BF%90%E7%AE%97-vhz7c1RJ.png",d="/assets/%E6%95%B0%E7%BB%84%E6%8C%87%E9%92%88-Ag098KGq.png",k="/assets/%E6%8C%87%E9%92%88%E6%95%B0%E7%BB%84-CmLtal7A.png",v="/assets/%E6%95%B0%E7%BB%84%E6%8C%87%E9%92%882-CQYiFw4p.png",m="/assets/%E5%AD%97%E7%AC%A6%E6%8C%87%E9%92%88-B7VY_qF1.png",b="/assets/%E5%AD%97%E7%AC%A6%E6%8C%87%E9%92%882-prIvBVDK.png",g="/assets/%E4%BC%A0%E5%9C%B0%E5%9D%80%E7%BB%99%E5%87%BD%E6%95%B0-BhRNxQPc.png",f="/assets/%E4%BC%A0%E6%95%B0%E7%BB%84%E7%BB%99%E5%87%BD%E6%95%B0-B1GAqIPz.png",q="/assets/%E5%A4%9A%E7%BA%A7%E6%8C%87%E9%92%88-DX--ETxH.png",y="/assets/%E5%A4%9A%E7%BA%A7%E6%8C%87%E9%92%88%E6%A1%88%E4%BE%8B-CQ1Ywjdu.png",h="/assets/%E6%8C%87%E9%92%88%E7%9A%84%E6%8F%8F%E8%BF%B0-CASMkNG1.png",E={},w=t('<h1 id="第九章-指针" tabindex="-1"><a class="header-anchor" href="#第九章-指针"><span>第九章：指针</span></a></h1><h2 id="_1-指针的理解" tabindex="-1"><a class="header-anchor" href="#_1-指针的理解"><span>1.指针的理解</span></a></h2><p><strong>（1）变量的访问方式</strong></p><blockquote><p><strong>内存是电脑上特别重要的存储器，计算机中程序的运行都是在内存中进行的 ，为了有效的使用内存，就把内存划分成一个个小的内存单元，每个内存单元通常占用1个字节</strong></p></blockquote><p><strong>变量在内存中分配空间，不同类型的变量占用不同大小的空间，那如何访问内存中的变量数据呢？有两种方式：</strong></p><blockquote><p><strong>直接访问，直接使用变量名进行的访问，以前的程序中都是采用这种方式</strong><br><br><strong>间接访问，通过指针来实现</strong></p></blockquote><p><strong>（2）内存地址</strong></p><blockquote><p><strong>为了能够有效地访问到每个内存单元，就给内存单元进行了编号，这些编号被称为内存地址，因为每个内存单元都有地址，所以变量也是有地址的</strong></p></blockquote><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>假设有 int 型变量 num，其在内存中会占用4个字节，也就是占用4个内存单元，第一个内存单元的地址即是变量 num 的地址。如图；</strong></p></blockquote><figure><img src="'+e+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>在32位系统中，内存地址通常是32位二进制数字，即4个字节，这允许寻址2^32（大约 4GB）个内存位置</strong><br><br><strong>在64位系统中，内存地址通常是64位二进制数字，即8个字节，这允许寻址2^64个内存位置，这个数量相当大，远远超过了通常需要的内存大小</strong></p></blockquote><p><strong>（3）什么是指针</strong></p><blockquote><p><strong>如果一个变量专门用来存放内存地址，则它称为指针变量，通常简称为指针。我们可以通过指针间接访问内存中另一个数据</strong></p></blockquote><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>如图，指针里面存储的是变量 num 的地址，我们可以说该指针指向变量 num，通过该指针可以间接访问变量 num</strong></p></blockquote><p><strong>（4）指针的定义</strong></p><blockquote><p><strong>一般格式：数据类型 * 指针变量名 [=初始地址值];</strong><br><br> *<strong>的放置位置：靠近数据类型，放左边，一行定义一个指针，防止出问题</strong></p></blockquote><blockquote><p><strong>数据类型是指针所指向的地址处的数据类型，如 int、char、float 等</strong><br><br><strong>符号 * 用于通知系统，这里定义的是一个指针变量，通常跟在类型关键字的后面，表示指针指向的是什么类型的值。比如，char * 表示一个指向字符的指针，float * 表示一个指向浮点数的指针</strong></p></blockquote><p><strong>（5）取址运算符和取值运算符</strong></p><blockquote><p><strong>取址运算符，使用 &amp; 符号表示，作用是取出变量的内存地址。如果要格式化输出地址，需使用格式占位符 %p</strong><br><br><strong>取值运算符，使用 * 符号表示，作用是取出指针指向的内存地址处的数据值，也称为解引用运算符或间接引用运算符</strong></p></blockquote><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>（6）指针的大小</strong></p><blockquote><p><strong>指针大小一般为：4/8字节。指针大小只与地址线有关</strong></p></blockquote><hr><h2 id="_2-指针的运算" tabindex="-1"><a class="header-anchor" href="#_2-指针的运算"><span>2.指针的运算</span></a></h2><p><strong>（1）指针加减整数</strong></p><blockquote><p><strong>指针与整数的加减运算，表示指针所指向的内存地址的移动（加，向后移动；减，向前移动），指针移动多少，与指针指向的数据类型有关，数据类型占据多少个字节，每单位就移动多少个字节，比如一个 int 类型指针，+1 向后移动 4 个字节，-2 向前移动 8 个字节</strong><br><br><strong>由于数组的元素在内存中连续存储的，我们通过数组元素来演示指针加减整数的情况</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 创建数组</span>
    <span class="token keyword">int</span> nums<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 创建指针并指向数组第一个元素的地址</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>ptr <span class="token operator">=</span> <span class="token operator">&amp;</span>nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 打印指针的值和指向的值</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ptr=%p, *ptr=%d \\n&quot;</span><span class="token punctuation">,</span> ptr<span class="token punctuation">,</span> <span class="token operator">*</span>ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 指针加3, 指针指向int类型，每个占4个字节，此时指针会向后移动12个字节</span>
    ptr <span class="token operator">+=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ptr=%p, *ptr=%d \\n&quot;</span><span class="token punctuation">,</span> ptr<span class="token punctuation">,</span> <span class="token operator">*</span>ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 指针-2，此时指针会向前移动8个字节</span>
    ptr <span class="token operator">-=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ptr=%p, *ptr=%d \\n&quot;</span><span class="token punctuation">,</span> ptr<span class="token punctuation">,</span> <span class="token operator">*</span>ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*
        ptr=000000000061FE00, *ptr=10 
        ptr=000000000061FE0C, *ptr=40 
        ptr=000000000061FE04, *ptr=20
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>（2）指针自增自减</strong></p><blockquote><p><strong>指针自增、自减本质上就是指针加减整数，自增地址后移，自减地址前移。下面我们利用指针的自增自减实现数组的遍历，代码如下：</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 创建数组，元素都是short类型，占据2个字节</span>
    <span class="token keyword">short</span> nums<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">//  定义常量记录数组长度</span>
    <span class="token keyword">const</span> <span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

    <span class="token comment">// 利用指针自增遍历数组元素</span>
    <span class="token comment">// 创建指针并指向数组第一个元素的地址</span>
    <span class="token keyword">short</span> <span class="token operator">*</span>ptr <span class="token operator">=</span> <span class="token operator">&amp;</span>nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 循环</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;元素索引：%d, 元素地址：%p, 元素值：%d \\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> ptr<span class="token punctuation">,</span> <span class="token operator">*</span>ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        ptr<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 指针自增</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 利用指针自减再次遍历数组</span>
    <span class="token comment">// 此时指针超出数组界限，需先自减一次</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        ptr<span class="token operator">--</span><span class="token punctuation">;</span> <span class="token comment">// 指针自减</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;元素索引：%d, 元素地址：%p, 元素值：%d \\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> ptr<span class="token punctuation">,</span> <span class="token operator">*</span>ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
        元素索引：0, 元素地址：0000000e1efffe02, 元素值：10 
        元素索引：1, 元素地址：0000000e1efffe04, 元素值：20
        元素索引：2, 元素地址：0000000e1efffe06, 元素值：30 
        元素索引：3, 元素地址：0000000e1efffe08, 元素值：40
        元素索引：4, 元素地址：0000000e1efffe0a, 元素值：50

        元素索引：4, 元素地址：0000000e1efffe0a, 元素值：50 
        元素索引：3, 元素地址：0000000e1efffe08, 元素值：40
        元素索引：2, 元素地址：0000000e1efffe06, 元素值：30
        元素索引：1, 元素地址：0000000e1efffe04, 元素值：20
        元素索引：0, 元素地址：0000000e1efffe02, 元素值：10
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>（3）同类型指针相减</strong></p><blockquote><p><strong>相同类型的指针可以进行减法运算，返回它们之间的距离，即相隔多少个数据单位。高位地址减去低位地址，返回的是正值；低位地址减去高位地址，返回的是负值</strong><br><br><strong>同类型指针相减的结果是一个 ptrdiff_t 类型数据，ptrdiff_t 类型是一个带符号的整数，格式输出中对应的格式占位符是 %td，相关案例如下：</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 创建数组</span>
    <span class="token keyword">int</span> nums<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 创建指针并指向数组第一个元素的地址</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>ptr1 <span class="token operator">=</span> <span class="token operator">&amp;</span>nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 创建指针并指向数组第四个元素的地址</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>ptr2 <span class="token operator">=</span> <span class="token operator">&amp;</span>nums<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ptr2-ptr1=%td \\n&quot;</span><span class="token punctuation">,</span> ptr2 <span class="token operator">-</span> ptr1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ptr2-ptr1=3</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ptr1-ptr2=%td \\n&quot;</span><span class="token punctuation">,</span> ptr1 <span class="token operator">-</span> ptr2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ptr1-ptr2=-3</span>

    <span class="token comment">// 再创建两个指针进行相减</span>
    <span class="token keyword">double</span> d1 <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">;</span>
    <span class="token keyword">double</span> d2 <span class="token operator">=</span> <span class="token number">2.0</span><span class="token punctuation">;</span>
    <span class="token keyword">double</span> <span class="token operator">*</span>p1 <span class="token operator">=</span> <span class="token operator">&amp;</span>d1<span class="token punctuation">,</span> <span class="token operator">*</span>p2 <span class="token operator">=</span> <span class="token operator">&amp;</span>d2<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;p1-p2=%td \\n&quot;</span><span class="token punctuation">,</span> p1 <span class="token operator">-</span> p2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// p1-p2=1</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;p2-p1=%td \\n&quot;</span><span class="token punctuation">,</span> p2 <span class="token operator">-</span> p1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// p2-p1=-1</span>

    <span class="token comment">/*
        ptr2-ptr1=3 
        ptr1-ptr2=-3 
        p1-p2=1
        p2-p1=-1
        内存示意
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>（4）指针的比较运算</strong></p><blockquote><p><strong>指针之间可以进行比较运算，如 ==、&lt;、 &lt;= 、 &gt;、 &gt;=，比较的是各自指向的内存地址的大小，返回值是 int 类型整数 1 （true）或 0 （false）。案例演示如下：</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 创建数组</span>
    <span class="token keyword">int</span> nums<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">double</span> n <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">;</span>

    <span class="token comment">// 创建指针并指向数组第一个元素的地址</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>ptr1 <span class="token operator">=</span> <span class="token operator">&amp;</span>nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 创建指针并指向数组第四个元素的地址</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>ptr2 <span class="token operator">=</span> <span class="token operator">&amp;</span>nums<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 创建指针也向数组第一个元素的地址</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>ptr3 <span class="token operator">=</span> <span class="token operator">&amp;</span>nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 创建指针指向变量n的地址</span>
    <span class="token keyword">double</span> <span class="token operator">*</span>ptr4 <span class="token operator">=</span> <span class="token operator">&amp;</span>n<span class="token punctuation">;</span>

    <span class="token comment">// 输出指针指向的地址</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ptr1=%p\\n&quot;</span><span class="token punctuation">,</span> ptr1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ptr2=%p\\n&quot;</span><span class="token punctuation">,</span> ptr2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ptr3=%p\\n&quot;</span><span class="token punctuation">,</span> ptr3<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ptr4=%p\\n\\n&quot;</span><span class="token punctuation">,</span> ptr4<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 进行比较</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ptr1&gt;ptr2: %d \\n&quot;</span><span class="token punctuation">,</span> ptr1 <span class="token operator">&gt;</span> ptr2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ptr1&lt;ptr2: %d \\n&quot;</span><span class="token punctuation">,</span> ptr1 <span class="token operator">&lt;</span> ptr2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ptr1==ptr3: %d \\n&quot;</span><span class="token punctuation">,</span> ptr1 <span class="token operator">==</span> ptr3<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ptr4&gt;ptr1: %d \\n&quot;</span><span class="token punctuation">,</span> ptr4 <span class="token operator">&gt;</span> ptr1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 由于是不同类型的指针进行比较，所以会有一个警告</span>

    <span class="token comment">/*
        ptr1=000000d4385ffd10
        ptr2=000000d4385ffd1c
        ptr3=000000d4385ffd10
        ptr4=000000d4385ffd08

        ptr1&gt;ptr2: 0
        ptr1&lt;ptr2: 1
        ptr1==ptr3: 1
        ptr4&gt;ptr1: 0
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h2 id="_3-指针和数组" tabindex="-1"><a class="header-anchor" href="#_3-指针和数组"><span>3.指针和数组</span></a></h2><p><strong>（1）数组名</strong></p><blockquote><p><strong>数组名在大多数情况下会被隐式地转换为指向数组第一个元素的指针，在特定情况下数组名可以被视为一个指针，具有一些指针的特性</strong></p></blockquote><p><strong>但是，数组名与真正的指针是不同的，主要有以下几点区别</strong></p><blockquote><p><strong>使用 sizeof 运算符，数组名得到的是整个数组的大小；指针得到的是本身的大小</strong><br><br><strong>数组名不能进行自增、自减运算</strong><br><br><strong>数组名的指向不可更改</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 创建数组</span>
    <span class="token keyword">int</span> nums<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// 创建指针指向数组的第一个元素</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>ptr <span class="token operator">=</span> <span class="token operator">&amp;</span>nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 数组名中存储了第一个元素的地址</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%p, %d \\n&quot;</span><span class="token punctuation">,</span> nums<span class="token punctuation">,</span> <span class="token operator">*</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%p, %d \\n&quot;</span><span class="token punctuation">,</span> ptr<span class="token punctuation">,</span> <span class="token operator">*</span>ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>   
    <span class="token comment">// nums 和 ptr 比较</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums <span class="token operator">==</span> ptr<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;nums 和 ptr 相等 \\n\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;nums 和 ptr 不相等 \\n\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 数组名与真正的指针存在差别</span>
    <span class="token comment">// 1. sizeof 运算符返回的是整个数组的大小，而指针返回的是本身的大小</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%zu, %zu \\n&quot;</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span> nums<span class="token punctuation">,</span> <span class="token keyword">sizeof</span> ptr<span class="token punctuation">)</span><span class="token punctuation">;</span> 

    <span class="token comment">// 2. 数组名不能进行自增、自减运算</span>
    <span class="token comment">// nums ++;    // 报错</span>
    ptr<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 地址指向下一个元素</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%p, %d \\n&quot;</span><span class="token punctuation">,</span> ptr<span class="token punctuation">,</span> <span class="token operator">*</span>ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 3. 数组名的指向不可修改</span>
    <span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token comment">// nums = &amp;n;  // 报错</span>
    ptr <span class="token operator">=</span> <span class="token operator">&amp;</span>n<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%p, %d \\n&quot;</span><span class="token punctuation">,</span> ptr<span class="token punctuation">,</span> <span class="token operator">*</span>ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*
        0000000cdb5ffe60, 10 
        0000000cdb5ffe60, 10
        nums 和 ptr 相等

        20, 8
        0000000cdb5ffe64, 20
        0000000cdb5ffe5c, 100
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>（2）指针数组</strong><br><strong>指针数组（Pointer Array）是一个数组，其中的每个元素都是指针</strong></p><blockquote><p><strong>语法规则：数据类型 * 指针数组名[长度];</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 创建三个变量</span>
    <span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> num2 <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">,</span> num3 <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>

    <span class="token comment">// 创建一个长度为3的指针数组</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>ptrArr<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 指针数组的每个元素指向不同的整数</span>
    ptrArr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">&amp;</span>num1<span class="token punctuation">;</span>
    ptrArr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">&amp;</span>num2<span class="token punctuation">;</span>
    ptrArr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">&amp;</span>num3<span class="token punctuation">;</span>

    <span class="token comment">// 遍历指针数组</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d, %p, %d \\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> ptrArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">*</span>ptrArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
        0, 0000009c22fff898, 10 
        1, 0000009c22fff894, 20
        2, 0000009c22fff890, 30
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>（3）数组指针</strong><br><strong>数组指针（Array Pointer）是一个指针，它指向一个数组。注意，数组指针指向的是整个数组的地址而不是第一个元素的地址，虽然二者值是相同的，但在运算中会表现出不同</strong></p><blockquote><p><strong>语法规则：数据类型 ( * 数组指针名)[长度];</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 创建整数数组</span>
    <span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 创建指针指向数组arr  &amp;arr表示整个数组的地址</span>
    <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token operator">*</span>ptr<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">&amp;</span>arr<span class="token punctuation">;</span>
    <span class="token comment">// int (*ptr)[5] = arr;    // 会有警告, arr 的类是 int *,  ptr 类型是 int (*)[5]</span>

    <span class="token comment">// 二者值是相同的</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;arr=%p \\n&quot;</span><span class="token punctuation">,</span> arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ptr=%p \\n\\n&quot;</span><span class="token punctuation">,</span> ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 数组指针指向的是数组的地址，而不是第一个元素的地址</span>
    <span class="token comment">// 数组指针+1会向后移动4*5=20个字节；数组+1会向后移动4个字节</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;arr+1=%p \\n&quot;</span><span class="token punctuation">,</span> arr <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ptr+1=%p \\n\\n&quot;</span><span class="token punctuation">,</span> ptr <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 使用数组指针遍历数组</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d \\n&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token operator">*</span>ptr<span class="token punctuation">)</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
        arr=000000f6d35ff9c0 
        ptr=000000f6d35ff9c0

        arr+1=000000f6d35ff9c4
        ptr+1=000000f6d35ff9d4

        10
        20
        30
        40
        50
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>数组指针和数组名的区别：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>①指向不同：数组名指向元素首地址，数组指针指向数组的地址
②类型不同：上面案例中，arr 的类型是 int[5],；ptr 的类型是 int(*)[5]
③可变性：数组名通常是不可变的；数组指针是可变的，你可以将它指向不同的数组
④初始化：数组名不需要显式初始化，它会自动指向数组的首元素；数组指针需要显式初始化，指定它将指向的数组
⑤访问元素：数组名访问数组元素不需要解引用；数组指针通常需要解引用才能访问数组元素
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（4）字符指针</strong><br><strong>字符指针变量（简称字符指针）是C语言中的一种指针类型，它用于指向字符或字符串（字符数组），通常用于处理字符串（字符数组）</strong></p><blockquote><p><strong>用字符指针指向一个字符串：char * pStr= &quot;hello tom&quot;;</strong></p></blockquote><blockquote><p><strong>C语言对字符串&quot; hello tom&quot;是按字符数组处理的，在内存中开辟了一个字符数组用来存放字符串，程序在定义字符串指针pStr时只是把字符串首地址（即存放字符串的字符数组的首地址）赋给pStr</strong></p></blockquote><figure><img src="`+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>字符数组名和字符指针表示字符串的区别:</strong></p><blockquote><p><strong>对字符数组只能对各个元素赋值，不能对字符数组名重新赋值</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">char</span> str<span class="token punctuation">[</span><span class="token number">14</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
str<span class="token operator">=</span><span class="token string">&quot; hello tom&quot;</span><span class="token punctuation">;</span> <span class="token comment">//错误</span>
str<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;i&#39;</span><span class="token punctuation">;</span> <span class="token comment">//ok</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>字符指针是可变的，允许使用下面方法重新赋值，指向新的字符串</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">char</span> <span class="token operator">*</span>a <span class="token operator">=</span> <span class="token string">&quot;hello tom&quot;</span><span class="token punctuation">;</span> 
a <span class="token operator">=</span> <span class="token string">&quot;tom&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h2 id="_4-指针和函数" tabindex="-1"><a class="header-anchor" href="#_4-指针和函数"><span>4.指针和函数</span></a></h2><p><strong>（1）传递指针给函数</strong><br><strong>当函数的形参类型是指针类型时，使用该函数时，需要传递指针、地址或者数组给该形参</strong></p><blockquote><p><strong>传地址或指针给函数</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token comment">// 函数原型</span>
<span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>ptr <span class="token operator">=</span> <span class="token operator">&amp;</span>num<span class="token punctuation">;</span>

    <span class="token comment">// 调用函数,传地址</span>
    <span class="token function">func</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;num = %d\\n&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 调用函数,传指针</span>
    <span class="token function">func</span><span class="token punctuation">(</span>ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;num = %d\\n&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*
        num = 101
        num = 102
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 函数声明</span>
<span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token operator">*</span>p <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>（2）传数组给函数</strong><br><strong>数组名本身就代表数组首地址，因此传数组的本质就是传地址</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token comment">/* 函数声明 */</span>
<span class="token keyword">double</span> <span class="token function">getAverage</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>arr<span class="token punctuation">,</span> <span class="token keyword">int</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">/* 带有 5 个元素的整型数组  */</span>
    <span class="token keyword">int</span> balance<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">double</span> avg<span class="token punctuation">;</span>

    <span class="token comment">/* 传递一个指向数组的指针作为参数 */</span>
    avg <span class="token operator">=</span> <span class="token function">getAverage</span><span class="token punctuation">(</span>balance<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/* 输出返回值  */</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Average value is: %f\\n&quot;</span><span class="token punctuation">,</span> avg<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token comment">/*
        arr存放的地址:000000f47adff850 
        arr存放的地址:000000f47adff854
        arr存放的地址:000000f47adff858
        arr存放的地址:000000f47adff85c
        arr存放的地址:000000f47adff860
        Average value is: 214.400000
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 函数定义</span>
<span class="token keyword">double</span> <span class="token function">getAverage</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>arr<span class="token punctuation">,</span> <span class="token keyword">int</span> size<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">double</span> avg<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        sum <span class="token operator">+=</span> <span class="token operator">*</span>arr<span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;arr存放的地址:%p \\n&quot;</span><span class="token punctuation">,</span> arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        arr<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    avg <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">double</span><span class="token punctuation">)</span>sum <span class="token operator">/</span> size<span class="token punctuation">;</span>
    
    <span class="token keyword">return</span> avg<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h2 id="_5-多级指针-指向指针的指针" tabindex="-1"><a class="header-anchor" href="#_5-多级指针-指向指针的指针"><span>5.多级指针(指向指针的指针)</span></a></h2><p><strong>（1）多级指针基本介绍</strong><br><strong>指向指针的指针是一种多级间接寻址的形式，或者说是一个指针链。通常，一个指针包含一个变量的地址。当我们定义一个指向指针的指针时，第一个指针包含了第二个指针的地址，第二个指针指向包含实际值的位置</strong><br><img src="'+q+`" alt="" loading="lazy"></p><p><strong>（2）多级指针的定义与使用</strong></p><blockquote><p><strong>声明多级指针时，需要使用多个星号来表示指针的级别</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token operator">*</span>ptr<span class="token punctuation">;</span>       <span class="token comment">// 一级指针</span>
<span class="token keyword">int</span> <span class="token operator">*</span><span class="token operator">*</span>pptr<span class="token punctuation">;</span>     <span class="token comment">// 二级指针</span>
<span class="token keyword">int</span> <span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>ppptr<span class="token punctuation">;</span>   <span class="token comment">// 三级指针</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>初始化多级指针时，你需要逐级给指针赋值，确保每个级别的指针指向正确的目标</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">int</span> var<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token operator">*</span>ptr <span class="token operator">=</span> <span class="token operator">&amp;</span>var<span class="token punctuation">;</span>        <span class="token comment">// 一级指针指向 var</span>
<span class="token keyword">int</span> <span class="token operator">*</span><span class="token operator">*</span>pptr <span class="token operator">=</span> <span class="token operator">&amp;</span>ptr<span class="token punctuation">;</span>      <span class="token comment">// 二级指针指向 ptr</span>
<span class="token keyword">int</span> <span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>ppptr <span class="token operator">=</span> <span class="token operator">&amp;</span>pptr<span class="token punctuation">;</span>   <span class="token comment">// 三级指针指向 pptr</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>解引用多级指针时，需要根据指针的级别使用适当数量的星号解引用操作</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Value of var: %d\\n&quot;</span><span class="token punctuation">,</span> var<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Value of ptr: %d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">// 解引用一次</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Value of pptr: %d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span><span class="token operator">*</span>pptr<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 解引用两次</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Value of ppptr: %d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>ppptr<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 解引用三次</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>使用案例：</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> var<span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>ptr<span class="token punctuation">;</span>     <span class="token comment">// 一级指针</span>
    <span class="token keyword">int</span> <span class="token operator">*</span><span class="token operator">*</span>pptr<span class="token punctuation">;</span>   <span class="token comment">// 二级指针</span>
    <span class="token keyword">int</span> <span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>ppptr<span class="token punctuation">;</span> <span class="token comment">// 三级指针</span>

    var <span class="token operator">=</span> <span class="token number">3000</span><span class="token punctuation">;</span>
    ptr <span class="token operator">=</span> <span class="token operator">&amp;</span>var<span class="token punctuation">;</span>    <span class="token comment">// var 变量的地址赋给 ptr</span>
    pptr <span class="token operator">=</span> <span class="token operator">&amp;</span>ptr<span class="token punctuation">;</span>   <span class="token comment">// 表示将 ptr 存放的地址，赋给 pptr</span>
    ppptr <span class="token operator">=</span> <span class="token operator">&amp;</span>pptr<span class="token punctuation">;</span> <span class="token comment">// 表示将 pptr 存放的地址，赋给 ppptr</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;var\`s address is %p \\nvar\`s value is %d \\n\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>var<span class="token punctuation">,</span> var<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ptr\`s adddress is %p \\nptr\`s value is %p \\n*ptr=%d \\n\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>ptr<span class="token punctuation">,</span> ptr<span class="token punctuation">,</span> <span class="token operator">*</span>ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;pptr\`s address is %p \\npptr\`s value is %p \\n*pptr=%p \\n**pptr=%d \\n\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>pptr<span class="token punctuation">,</span> pptr<span class="token punctuation">,</span> <span class="token operator">*</span>pptr<span class="token punctuation">,</span> <span class="token operator">*</span><span class="token operator">*</span>pptr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ppptr\`s address is %p \\nppptr\`s value is %p \\n*ppptr=%p \\n**ppptr=%p \\n***ppptr=%d \\n\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>ppptr<span class="token punctuation">,</span> ppptr<span class="token punctuation">,</span> <span class="token operator">*</span>ppptr<span class="token punctuation">,</span> <span class="token operator">*</span><span class="token operator">*</span>ppptr<span class="token punctuation">,</span> <span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>ppptr<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*
        var\`s address is 0000000cffbffdec 
        var\`s value is 3000

        ptr\`s adddress is 0000000cffbffde0
        ptr\`s value is 0000000cffbffdec
        *ptr=3000

        pptr\`s address is 0000000cffbffdd8
        pptr\`s value is 0000000cffbffde0
        *pptr=0000000cffbffdec
        **pptr=3000

        ppptr\`s address is 0000000cffbffdd0 
        ppptr\`s value is 0000000cffbffdd8
        *ppptr=0000000cffbffde0
        **ppptr=0000000cffbffdec
        ***ppptr=3000
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+y+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h2 id="_7-空指针" tabindex="-1"><a class="header-anchor" href="#_7-空指针"><span>7.空指针</span></a></h2><p><strong>赋为NULL 值的指针被称为空指针，NULL 是一个定义在标准库 &lt;stdio.h&gt;中的值为零的宏常量</strong></p><p><strong>声明指针变量的时候，如果没有确切的地址赋值，为指针变量赋一个NULL 值是好的编程习惯</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">34</span><span class="token punctuation">;</span>
    p <span class="token operator">=</span> <span class="token operator">&amp;</span>num<span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;p=%p\\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*p=%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*
        p=000000000061FE14
        *p=34
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_8-野指针" tabindex="-1"><a class="header-anchor" href="#_8-野指针"><span>8.野指针</span></a></h2><p><strong>（1）什么是野指针</strong></p><blockquote><p><strong>野指针就是指针指向的位置是不可知（随机性，不正确，没有明确限制的）</strong></p></blockquote><p><strong>（2）野指针的成因</strong></p><blockquote><p><strong>指针使用前未初始化</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">//指针变量在定义时如果未初始化，其值是随机的，此时操作指针就是去访问一个不确定的地址，所以结果是不可知的。此时p就为野指针</span>
<span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//在没有给指针变量显式初始化的情况下，一系列的操作(包括修改指向内存的数据的值)也是错误的</span>
<span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token punctuation">;</span>
<span class="token operator">*</span>p <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>指针越界访问</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">//当 p += 4之后，此时 *p 访问的内存空间不在数组有效范围内，此时 *p 就属于非法访问内存空间，p为野指针</span>
<span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token number">40</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token operator">*</span>p <span class="token operator">=</span> arr<span class="token punctuation">;</span>
p <span class="token operator">+=</span> <span class="token number">4</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 此时 *p 即为越界访问</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>指针指向已释放的空间</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">//调用test()函数将返回值赋给p，test函数的返回值是局部变量a的地址，函数调用结束局部变量会被销毁，其所占用的内存空间会被释放，p 指向的是已经释放的内存空间，所以 p 是野指针</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token operator">*</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>a<span class="token punctuation">;</span> <span class="token comment">//&amp;a=0x0012ff40</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（3）如何避免野指针</strong></p><blockquote><p><strong>指针初始化如果没有确切的地址赋值，为指针变量赋一个 NULL 值是好的编程习惯</strong><br><br><strong>小心指针越界</strong><br><br><strong>避免返回指向局部变量的指针</strong><br><br><strong>指针使用之前检查指针是否为 NULL</strong></p></blockquote><hr><h2 id="_9-指针的描述" tabindex="-1"><a class="header-anchor" href="#_9-指针的描述"><span>9.指针的描述</span></a></h2><figure><img src="`+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',113),_=[w];function A(B,x){return s(),a("div",null,_)}const D=n(E,[["render",A],["__file","第九章：指针.html.vue"]]),F=JSON.parse('{"path":"/%E7%BC%96%E7%A8%8B%E5%AD%A6%E4%B9%A0/1.C%E8%AF%AD%E8%A8%80/%E7%AC%AC%E4%B9%9D%E7%AB%A0%EF%BC%9A%E6%8C%87%E9%92%88.html","title":"第九章：指针","lang":"zh-CN","frontmatter":{"date":"2024-01-09T00:00:00.000Z","order":10,"description":"第九章：指针 1.指针的理解 （1）变量的访问方式 内存是电脑上特别重要的存储器，计算机中程序的运行都是在内存中进行的 ，为了有效的使用内存，就把内存划分成一个个小的内存单元，每个内存单元通常占用1个字节 变量在内存中分配空间，不同类型的变量占用不同大小的空间，那如何访问内存中的变量数据呢？有两种方式： 直接访问，直接使用变量名进行的访问，以前的程序中...","head":[["meta",{"property":"og:url","content":"https://github.com/jimbo-master/%E7%BC%96%E7%A8%8B%E5%AD%A6%E4%B9%A0/1.C%E8%AF%AD%E8%A8%80/%E7%AC%AC%E4%B9%9D%E7%AB%A0%EF%BC%9A%E6%8C%87%E9%92%88.html"}],["meta",{"property":"og:site_name","content":"JimBoの学习妙妙屋"}],["meta",{"property":"og:title","content":"第九章：指针"}],["meta",{"property":"og:description","content":"第九章：指针 1.指针的理解 （1）变量的访问方式 内存是电脑上特别重要的存储器，计算机中程序的运行都是在内存中进行的 ，为了有效的使用内存，就把内存划分成一个个小的内存单元，每个内存单元通常占用1个字节 变量在内存中分配空间，不同类型的变量占用不同大小的空间，那如何访问内存中的变量数据呢？有两种方式： 直接访问，直接使用变量名进行的访问，以前的程序中..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"JimBo"}],["meta",{"property":"article:published_time","content":"2024-01-09T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第九章：指针\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-09T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"JimBo\\",\\"url\\":\\"https://github.com/jimbo-master\\"}]}"]]},"headers":[{"level":2,"title":"1.指针的理解","slug":"_1-指针的理解","link":"#_1-指针的理解","children":[]},{"level":2,"title":"2.指针的运算","slug":"_2-指针的运算","link":"#_2-指针的运算","children":[]},{"level":2,"title":"3.指针和数组","slug":"_3-指针和数组","link":"#_3-指针和数组","children":[]},{"level":2,"title":"4.指针和函数","slug":"_4-指针和函数","link":"#_4-指针和函数","children":[]},{"level":2,"title":"5.多级指针(指向指针的指针)","slug":"_5-多级指针-指向指针的指针","link":"#_5-多级指针-指向指针的指针","children":[]},{"level":2,"title":"7.空指针","slug":"_7-空指针","link":"#_7-空指针","children":[]},{"level":2,"title":"8.野指针","slug":"_8-野指针","link":"#_8-野指针","children":[]},{"level":2,"title":"9.指针的描述","slug":"_9-指针的描述","link":"#_9-指针的描述","children":[]}],"git":{},"readingTime":{"minutes":16.13,"words":4840},"filePathRelative":"编程学习/1.C语言/第九章：指针.md","localizedDate":"2024年1月9日","autoDesc":true,"excerpt":"\\n<h2>1.指针的理解</h2>\\n<p><strong>（1）变量的访问方式</strong></p>\\n<blockquote>\\n<p><strong>内存是电脑上特别重要的存储器，计算机中程序的运行都是在内存中进行的 ，为了有效的使用内存，就把内存划分成一个个小的内存单元，每个内存单元通常占用1个字节</strong></p>\\n</blockquote>\\n<p><strong>变量在内存中分配空间，不同类型的变量占用不同大小的空间，那如何访问内存中的变量数据呢？有两种方式：</strong></p>\\n<blockquote>\\n<p><strong>直接访问，直接使用变量名进行的访问，以前的程序中都是采用这种方式</strong><br><br>\\n<strong>间接访问，通过指针来实现</strong></p>\\n</blockquote>"}');export{D as comp,F as data};
