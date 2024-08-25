import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as p,c as o,a as n,d as i,w as c,b as s,e as l}from"./app-Dezzdk4T.js";const u="/assets/%E7%AE%97%E6%9C%AF%E8%BF%90%E7%AE%97%E7%AC%A6-DqqMgmnm.png",r="/assets/%E5%85%B3%E7%B3%BB%E8%BF%90%E7%AE%97%E7%AC%A6-D6FpoY52.png",d="/assets/%E9%80%BB%E8%BE%91%E8%BF%90%E7%AE%97%E7%AC%A6-TjVpscIb.png",k="/assets/%E8%B5%8B%E5%80%BC%E8%BF%90%E7%AE%97%E7%AC%A6-BT2WYUXj.png",v="/assets/%E4%BD%8D%E8%BF%90%E7%AE%97%E7%AC%A6-DXyKNsyy.png",m="/assets/%E8%AE%A1%E7%AE%97%E8%BF%87%E7%A8%8B-CYNQDwmM.png",b="/assets/%E8%AE%A1%E7%AE%97%E8%BF%87%E7%A8%8B2-Bz45bD7V.png",g="/assets/%E8%AE%A1%E7%AE%97%E8%BF%87%E7%A8%8B3-V3UlyEpI.png",h={},f=s('<h1 id="第五章-运算符" tabindex="-1"><a class="header-anchor" href="#第五章-运算符"><span>第五章：运算符</span></a></h1><h2 id="_1-运算符基础" tabindex="-1"><a class="header-anchor" href="#_1-运算符基础"><span>1.运算符基础</span></a></h2><blockquote><p><strong>运算符：是一种特殊的符号，用以用于数据的运算、赋值和比较等</strong><br><br><strong>表达式：是一组运算数、运算符的组合，表达式一定具有值，一个变量或一个常量就是一个表达式，变量、常量与运算符也可以组成复杂一些的表达式</strong></p></blockquote><p><strong>运算符分类：</strong></p><blockquote><p><strong>按操作数个数分类：<br> ①一元运算符（一目运算符）<br> ②二元运算符（二目运算符）<br> ③三元运算符（三目运算符）</strong><br><br><strong>按功能分类：<br> ①算术运算符<br> ②赋值运算符<br> ③关系运算符<br> ④逻辑运算符<br> ⑤位运算符</strong></p></blockquote><hr><h2 id="_2-算术运算符" tabindex="-1"><a class="header-anchor" href="#_2-算术运算符"><span>2.算术运算符</span></a></h2><p><strong>算术运算符是对数值类型的变量进行运算的，在C程序中使用的非常多</strong><br><img src="'+u+`" alt="" loading="lazy"></p><blockquote><p><strong>①%操作符只能用于整数，余数正负只看被除数的正负</strong><br><strong>②/操作符，两个操作数都是整数执行整数除法，有浮点数执行浮点数除法</strong></p></blockquote><p><strong>（1）正号和负号</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> x1 <span class="token operator">=</span> <span class="token operator">-</span>x<span class="token punctuation">,</span> x2 <span class="token operator">=</span> <span class="token operator">+</span>x<span class="token punctuation">;</span>

    <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">67</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> y1 <span class="token operator">=</span> <span class="token operator">-</span>y<span class="token punctuation">,</span> y2 <span class="token operator">=</span> <span class="token operator">+</span>y<span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;x1=%d, x2=%d \\n&quot;</span><span class="token punctuation">,</span> x1<span class="token punctuation">,</span> x2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;y1=%d, y2=%d \\n&quot;</span><span class="token punctuation">,</span> y1<span class="token punctuation">,</span> y2<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*
        x1=-12, x2=12 
        y1=67, y2=-67
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（2）加、减、乘、除</strong></p><blockquote><p><strong>注意：整数之间做除法时，结果只保留整数部分而舍弃小数部分</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token number">2.5</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> a <span class="token operator">*</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">double</span> b <span class="token operator">=</span> <span class="token number">6</span> <span class="token operator">/</span> <span class="token number">4</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%f\\n&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 1.000000</span>

    <span class="token keyword">double</span> c <span class="token operator">=</span> <span class="token number">6.0</span> <span class="token operator">/</span> <span class="token number">4</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%f\\n&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 1.500000</span>

    <span class="token comment">/*
        49
        1.000000
        1.500000
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（3）取模</strong></p><blockquote><p><strong>注意：运算结果的符号与被模数也就是第一个操作数相同</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> res1 <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">%</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> res1<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> res2 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">10</span> <span class="token operator">%</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> res2<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> res3 <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">%</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> res3<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> res4 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">10</span> <span class="token operator">%</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> res4<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*
        1
        -1
        1
        -1
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（4）自增和自减</strong></p><blockquote><p><strong>自增、自减运算符可以写在操作数的前面也可以写在操作数后面，不论前面还是后面，对操作数的副作用是一致的</strong><br><br><strong>++i：先自增，再使用i；--i：先自减，再使用i</strong><br><strong>i++：先使用，再自增；i--：先使用i，再自减</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> i1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> i2 <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> i1<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 10</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> i1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 11</span>

    i <span class="token operator">=</span> <span class="token operator">++</span>i1<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 12</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> i1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 12</span>

    i <span class="token operator">=</span> i2<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 20</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> i2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 19</span>

    i <span class="token operator">=</span> <span class="token operator">--</span>i2<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 18</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> i2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 18</span>

    <span class="token comment">/*
        10
        11
        12
        12
        20
        19
        18
        18
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_3-关系运算符" tabindex="-1"><a class="header-anchor" href="#_3-关系运算符"><span>3.关系运算符</span></a></h2><figure><img src="`+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>关系运算符返回值是布尔类型bool值，即true(1)、false(0)</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a&gt;b的值：%d \\n&quot;</span><span class="token punctuation">,</span> a <span class="token operator">&gt;</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a&gt;=b的值：%d \\n&quot;</span><span class="token punctuation">,</span> a <span class="token operator">&gt;=</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a&lt;b的值：%d \\n&quot;</span><span class="token punctuation">,</span> a <span class="token operator">&lt;</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a&lt;=b的值：%d \\n&quot;</span><span class="token punctuation">,</span> a <span class="token operator">&lt;=</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a==b的值：%d \\n&quot;</span><span class="token punctuation">,</span> a <span class="token operator">==</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a!=b的值：%d \\n&quot;</span><span class="token punctuation">,</span> a <span class="token operator">!=</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*
        a&gt;b的值：1 
        a&gt;=b的值：1 
        a&lt;b的值：0z
        a&lt;=b的值：0
        a==b的值：0
        a!=b的值：1
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_4-逻辑运算符" tabindex="-1"><a class="header-anchor" href="#_4-逻辑运算符"><span>4.逻辑运算符</span></a></h2><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>注意：逻辑操作符关注的是真假，位操作符关注的是二进制</strong><br><br><strong>C语言中：0为假，非0为真</strong><br><br><strong>逻辑与(&amp;&amp;)：两个操作数都为真，那么表达式的值为真，否则为假</strong><br><br><strong>逻辑或(||)：只要有一个操作数为真，表达式的值就为真；两个操作数都为假，表达式的值为假</strong><br><br><strong>逻辑非(！)：操作数状态取反作为表达式的值</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">double</span> score <span class="token operator">=</span> <span class="token number">70</span><span class="token punctuation">;</span> <span class="token comment">// 成绩</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>score <span class="token operator">&gt;=</span> <span class="token number">60</span> <span class="token operator">&amp;&amp;</span> score <span class="token operator">&lt;=</span> <span class="token number">80</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ok1 \\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ok2 \\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//ok1</span>
    
    
    <span class="token keyword">int</span> res <span class="token operator">=</span> score <span class="token operator">&gt;</span> <span class="token number">99</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;hello, tom \\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>res<span class="token punctuation">)</span>
    <span class="token punctuation">{</span> 
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;hello,jack \\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//hello,jack</span>

    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>

    <span class="token comment">// 短路现象</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&lt;</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">++</span>b <span class="token operator">&gt;</span> <span class="token number">99</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ok100&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;b=%d\\n&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>    
    <span class="token comment">//b=99</span>

    <span class="token comment">//短路现象</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&gt;</span> <span class="token number">5</span> <span class="token operator">||</span> b<span class="token operator">++</span> <span class="token operator">&gt;</span> <span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span> 
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ok100 \\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//ok100</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_5-赋值运算符" tabindex="-1"><a class="header-anchor" href="#_5-赋值运算符"><span>5.赋值运算符</span></a></h2><figure><img src="`+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>赋值运算符的第一个操作数（左值）必须是变量的形式，第二个操作数可以是任何形式的表达式</strong><br><br><strong>赋值运算符的副作用针对第一个操作数</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>

    c <span class="token operator">+=</span> <span class="token number">3</span><span class="token punctuation">;</span>   <span class="token comment">// 等价于 c = c + 3;   计算后c的值变为33</span>
    c <span class="token operator">+=</span> b<span class="token punctuation">;</span>   <span class="token comment">// 等价于 c = c + b;   计算后c的值变为53</span>
    a <span class="token operator">+=</span> <span class="token number">1.7</span><span class="token punctuation">;</span> <span class="token comment">// 等价于 a = a + 1.7  计算后a的值变为11</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a=%d b=%d c=%d&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//a=11 b=20 c=53</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_6-位运算符" tabindex="-1"><a class="header-anchor" href="#_6-位运算符"><span>6.位运算符</span></a></h2><figure><img src="`+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>操作数进行位运算的时候，以它的补码形式进行运算</strong></p></blockquote><p><strong>（1）按位与、按位或、按位异或</strong></p><blockquote><p><strong>使用口诀：同真为真，同假为假，相同为假</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">17</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">12</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a&amp;b=%d\\n&quot;</span><span class="token punctuation">,</span> a <span class="token operator">&amp;</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a&amp;b=16</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a|b=%d\\n&quot;</span><span class="token punctuation">,</span> a <span class="token operator">|</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a|b=-11</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a^b=%d\\n&quot;</span><span class="token punctuation">,</span> a <span class="token operator">^</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a^b=-27</span>

    <span class="token comment">/*
        a&amp;b=16
        a|b=-11
        a^b=-27
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>计算过程分析：</strong><br><img src="`+m+`" alt="" loading="lazy"></p><p><strong>（2）按位取反</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">17</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">12</span><span class="token punctuation">;</span>

    <span class="token comment">// 按位非</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;~a=%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">~</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;~b=%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">~</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> 

    <span class="token comment">/*
        ~a=-18
        ~b=11
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>计算过程分析：</strong><br><img src="`+b+`" alt="" loading="lazy"></p><p><strong>（3）按位左移、按位右移</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>左移操作符(&lt;&lt;)：左边抛弃，右边补0
右移操作符(&gt;&gt;)：右边抛弃，左边补符号位
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">17</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">12</span><span class="token punctuation">;</span>

    <span class="token comment">// 按位左移</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a&lt;&lt;2=%d\\n&quot;</span><span class="token punctuation">,</span> a <span class="token operator">&lt;&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a&lt;&lt;2=68</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;b&lt;&lt;2=%d\\n&quot;</span><span class="token punctuation">,</span> b <span class="token operator">&lt;&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// b&lt;&lt;2=-48</span>

    <span class="token comment">// 按位右移</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a&gt;&gt;3=%d\\n&quot;</span><span class="token punctuation">,</span> a <span class="token operator">&gt;&gt;</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a&gt;&gt;3=2</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;b&gt;&gt;3=%d\\n&quot;</span><span class="token punctuation">,</span> b <span class="token operator">&gt;&gt;</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// b&gt;&gt;3=-2</span>

    <span class="token comment">/*
        a&lt;&lt;2=68
        b&lt;&lt;2=-48
        a&gt;&gt;3=2
        b&gt;&gt;3=-2
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>计算过程分析：</strong><br><img src="`+g+`" alt="" loading="lazy"></p><hr><h2 id="_7-三目运算符" tabindex="-1"><a class="header-anchor" href="#_7-三目运算符"><span>7.三目运算符</span></a></h2><blockquote><p><strong>基本语法：条件表达式? 表达式1: 表达式2；</strong><br><br><strong>（1）如果条件表达式为非0（真），整个表达式的值是表达式1；<br> （2）如果条件表达式为0（假），整个表达式的值是表达式2；</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> res <span class="token operator">=</span> a <span class="token operator">&gt;</span> b <span class="token operator">?</span> a<span class="token operator">++</span> <span class="token operator">:</span> b<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> n1 <span class="token operator">=</span> a <span class="token operator">&gt;</span> b <span class="token operator">?</span> <span class="token number">1.1</span> <span class="token operator">:</span> <span class="token number">1.2</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a=%d \\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;b=%d \\n&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;res=%d \\n&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*
        a=10 
        b=98 
        res=99
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_8-逗号表达式" tabindex="-1"><a class="header-anchor" href="#_8-逗号表达式"><span>8.逗号表达式</span></a></h2>`,56),q=n("p",null,[n("strong",null,"逗号表达式形式：expr1, expr2, ..., exprN"),n("br")],-1),y=n("strong",null,"赋值语句中的逗号表达式：int num = 1, b=2, c=3;",-1),_=n("br",null,null,-1),E=n("br",null,null,-1),w=n("strong",null,"函数调用中同时传递多个参数：function(arg1, arg2, arg3);",-1),A=n("br",null,null,-1),x=n("br",null,null,-1),B=s(`<h2 id="_9-运算符优先级" tabindex="-1"><a class="header-anchor" href="#_9-运算符优先级"><span>9.运算符优先级</span></a></h2><blockquote><p><strong>很复杂，详细了解建议查文档，记住最重要的就行了。一般用小括号来保证优先级</strong></p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>运算符优先级总结：
（1）不要过多的依赖运算的优先级来控制表达式的执行顺序，这样可读性太差，尽量使用小括号来控制表达式的执行顺序
（2）不要把一个表达式写得过于复杂，如果一个表达式过于复杂，则把它分成几步来完成
（3）总体上：一元运算符 &gt; 算术运算符 &gt; 关系运算符 &gt; 逻辑运算符 &gt; 三元运算符 &gt; 赋值运算符
（4）特殊记忆：() &gt; [] &gt; ++ -- &gt; * &gt; + -    用于判断数组指针与指针数组
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function C(F,z){const a=e("font");return p(),o("div",null,[f,n("blockquote",null,[q,n("p",null,[y,_,E,w,A,x,n("strong",null,[i(a,{color:"red"},{default:c(()=>[l("使用注意：逗号表达式，从左往右执行，结果为最后一个表达式的值")]),_:1})])])]),B])}const j=t(h,[["render",C],["__file","第五章：运算符.html.vue"]]),T=JSON.parse('{"path":"/%E7%BC%96%E7%A8%8B%E5%AD%A6%E4%B9%A0/1.C%E8%AF%AD%E8%A8%80/%E7%AC%AC%E4%BA%94%E7%AB%A0%EF%BC%9A%E8%BF%90%E7%AE%97%E7%AC%A6.html","title":"第五章：运算符","lang":"zh-CN","frontmatter":{"date":"2024-01-05T00:00:00.000Z","order":6,"description":"第五章：运算符 1.运算符基础 运算符：是一种特殊的符号，用以用于数据的运算、赋值和比较等 表达式：是一组运算数、运算符的组合，表达式一定具有值，一个变量或一个常量就是一个表达式，变量、常量与运算符也可以组成复杂一些的表达式 运算符分类： 按操作数个数分类： ①一元运算符（一目运算符） ②二元运算符（二目运算符） ③三元运算符（三目运算符） 按功能分类...","head":[["meta",{"property":"og:url","content":"https://github.com/jimbo-master/%E7%BC%96%E7%A8%8B%E5%AD%A6%E4%B9%A0/1.C%E8%AF%AD%E8%A8%80/%E7%AC%AC%E4%BA%94%E7%AB%A0%EF%BC%9A%E8%BF%90%E7%AE%97%E7%AC%A6.html"}],["meta",{"property":"og:site_name","content":"JimBoの学习妙妙屋"}],["meta",{"property":"og:title","content":"第五章：运算符"}],["meta",{"property":"og:description","content":"第五章：运算符 1.运算符基础 运算符：是一种特殊的符号，用以用于数据的运算、赋值和比较等 表达式：是一组运算数、运算符的组合，表达式一定具有值，一个变量或一个常量就是一个表达式，变量、常量与运算符也可以组成复杂一些的表达式 运算符分类： 按操作数个数分类： ①一元运算符（一目运算符） ②二元运算符（二目运算符） ③三元运算符（三目运算符） 按功能分类..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"JimBo"}],["meta",{"property":"article:published_time","content":"2024-01-05T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第五章：运算符\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-05T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"JimBo\\",\\"url\\":\\"https://github.com/jimbo-master\\"}]}"]]},"headers":[{"level":2,"title":"1.运算符基础","slug":"_1-运算符基础","link":"#_1-运算符基础","children":[]},{"level":2,"title":"2.算术运算符","slug":"_2-算术运算符","link":"#_2-算术运算符","children":[]},{"level":2,"title":"3.关系运算符","slug":"_3-关系运算符","link":"#_3-关系运算符","children":[]},{"level":2,"title":"4.逻辑运算符","slug":"_4-逻辑运算符","link":"#_4-逻辑运算符","children":[]},{"level":2,"title":"5.赋值运算符","slug":"_5-赋值运算符","link":"#_5-赋值运算符","children":[]},{"level":2,"title":"6.位运算符","slug":"_6-位运算符","link":"#_6-位运算符","children":[]},{"level":2,"title":"7.三目运算符","slug":"_7-三目运算符","link":"#_7-三目运算符","children":[]},{"level":2,"title":"8.逗号表达式","slug":"_8-逗号表达式","link":"#_8-逗号表达式","children":[]},{"level":2,"title":"9.运算符优先级","slug":"_9-运算符优先级","link":"#_9-运算符优先级","children":[]}],"git":{},"readingTime":{"minutes":6.31,"words":1894},"filePathRelative":"编程学习/1.C语言/第五章：运算符.md","localizedDate":"2024年1月5日","autoDesc":true,"excerpt":"\\n<h2>1.运算符基础</h2>\\n<blockquote>\\n<p><strong>运算符：是一种特殊的符号，用以用于数据的运算、赋值和比较等</strong><br><br>\\n<strong>表达式：是一组运算数、运算符的组合，表达式一定具有值，一个变量或一个常量就是一个表达式，变量、常量与运算符也可以组成复杂一些的表达式</strong></p>\\n</blockquote>\\n<p><strong>运算符分类：</strong></p>\\n<blockquote>\\n<p><strong>按操作数个数分类：<br>\\n①一元运算符（一目运算符）<br>\\n②二元运算符（二目运算符）<br>\\n③三元运算符（三目运算符）</strong><br><br>\\n<strong>按功能分类：<br>\\n①算术运算符<br>\\n②赋值运算符<br>\\n③关系运算符<br>\\n④逻辑运算符<br>\\n⑤位运算符</strong></p>\\n</blockquote>"}');export{j as comp,T as data};
