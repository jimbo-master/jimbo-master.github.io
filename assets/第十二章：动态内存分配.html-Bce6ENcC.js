import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as t}from"./app-Dezzdk4T.js";const p="/assets/%E5%8A%A8%E6%80%81%E5%86%85%E5%AD%98%E5%88%86%E9%85%8D-jkWq54XS.png",e="/assets/malloc%E5%87%BD%E6%95%B0-CT7_CAtC.png",o="/assets/calloc%E5%87%BD%E6%95%B0-BZ73ETiD.png",i="/assets/realloc%E5%87%BD%E6%95%B0-DZ9Lydqv.png",c="/assets/%E5%86%85%E5%AD%98%E5%88%86%E6%9E%90%E6%A1%88%E4%BE%8B-Do-dVEeb.png",l={},u=t('<h1 id="第十二章-动态内存分配" tabindex="-1"><a class="header-anchor" href="#第十二章-动态内存分配"><span>第十二章：动态内存分配</span></a></h1><h2 id="_1-c程序动态内存分配" tabindex="-1"><a class="header-anchor" href="#_1-c程序动态内存分配"><span>1.C程序动态内存分配</span></a></h2><p><strong>动态内存分配：是指根据需要向系统申请所需大小的空间，由于未在声明部分定义其为变量或者数组，不能通过变量名或者数组名来引用这些数据，只能通过指针来引用</strong></p><figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h2 id="_2-void指针-无类型指针" tabindex="-1"><a class="header-anchor" href="#_2-void指针-无类型指针"><span>2.void指针(无类型指针)</span></a></h2><p><strong>（1）void指针介绍</strong></p><blockquote><p><strong>C99允许定义一个类型为void的指针变量，它可以指向任何类型的数据</strong></p></blockquote><p><strong>（2）void指针作用</strong></p><blockquote><p><strong>指针变量必须有类型，否则编译器无法知道如何解读内存块保存的二进制数据。但是，有时候向系统请求内存的时候，还不确定会有什么类型的数据写入内存，需要要先获得内存块，稍后再确定写入的数据类型</strong><br><br><strong>这种情况下就可以使用 void 指针，它只有内存块的地址信息，没有类型信息，等到使用该块内存的时候，再向编译器补充说明，里面的数据类型是什么</strong></p></blockquote><p><strong>（3）void指针特点</strong></p><blockquote><p><strong>void 指针与其他所有类型指针之间是互相转换关系，任一类型的指针都可以转为 void 指针，而 void 指针也可以转为任一类型的指针</strong><br><br><strong>由于不知道 void 指针指向什么类型的值，所以不能用 * 运算符取出它指向的值（解引用）</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>
    <span class="token keyword">double</span> pi <span class="token operator">=</span> <span class="token number">3.14159</span><span class="token punctuation">;</span>

    <span class="token comment">// int 指针转为 void 指针</span>
    <span class="token keyword">void</span> <span class="token operator">*</span>viPtr <span class="token operator">=</span> <span class="token operator">&amp;</span>num<span class="token punctuation">;</span>  <span class="token comment">// 隐式类型转换</span>

    <span class="token comment">// double 指针转为 void 指针</span>
    <span class="token keyword">void</span> <span class="token operator">*</span>vdPtr <span class="token operator">=</span> <span class="token operator">&amp;</span>pi<span class="token punctuation">;</span>   <span class="token comment">// 隐式类型转换</span>

    <span class="token comment">// void 指针转换为 int 指针并解引用</span>
    <span class="token comment">// int *intPtr = viPtr;    // 隐式类型转换</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>intPtr <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span>viPtr<span class="token punctuation">;</span>    <span class="token comment">// 显示类型转换</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;整数值：%d \\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>intPtr<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// void 指针转换为 double 指针并解引用</span>
    <span class="token comment">// double *doublePtr = vdPtr;  // 隐式类型转换</span>
    <span class="token keyword">double</span> <span class="token operator">*</span>doublePtr <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">double</span> <span class="token operator">*</span><span class="token punctuation">)</span>vdPtr<span class="token punctuation">;</span> <span class="token comment">// 显式类型转换</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;浮点数：%f \\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>doublePtr<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// void 指针不能解引用 会报错</span>
    <span class="token comment">// printf(&quot;%d&quot;, *viPtr);</span>
    <span class="token comment">// printf(&quot;%d&quot;, *vdPtr);</span>

    <span class="token comment">/*
        整数值：42 
        浮点数：3.141590
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（4）特别注意</strong></p><blockquote><p><strong>其他类型指针赋给 void指针，使用隐式转换即可，因为 void 指针不包含指向的数据类型的信息，通常是安全的</strong><br><br><strong>void 指针赋给其他类型指针，建议使用显式类型转换，这样更加安全，如果使用隐式类型转换，有些编译器会触发警告</strong></p></blockquote><hr><h2 id="_3-内存分配相关函数" tabindex="-1"><a class="header-anchor" href="#_3-内存分配相关函数"><span>3.内存分配相关函数</span></a></h2><blockquote><p><strong>头文件 &lt;stdlib.h&gt; 声明了四个关于内存动态分配的函数：malloc、calloc、realloc、free</strong></p></blockquote><p><strong>（1）malloc函数</strong><br><strong>malloc() 函数用于分配一块连续的内存空间</strong></p><blockquote><p><strong>函数原型：void * malloc(size_t size);</strong><br><br><strong>返回值说明：如果内存分配成功，返回一个void指针，指向新分配内存块的地址；如果分配失败（例如内存不足），返回一个空指针（NULL）</strong><br><br><strong>参数说明：size是要分配的内存块的大小，以字节为单位</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token punctuation">;</span>
    p <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 判断是否分配成功</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;内存分配失败\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 退出程序</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 使用解引用赋值并输出</span>
    <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token number">120</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;p指向的地址：%p \\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;p指向的值：%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*
        p指向的地址：00000053575ff838
        p指向的值：120
    */</span>

    <span class="token comment">// 释放分配的内存</span>
    <span class="token function">free</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+e+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>（2）calloc函数</strong><br><strong>calloc() 函数用于分配内存并将其初始化为零，它在分配内存块时会自动将内存中的每个字节都设置为零</strong></p><blockquote><p><strong>函数原型：void * calloc(size_t numElements, size_t sizeOfElement);</strong><br><br><strong>返回值说明：如果内存分配成功，返回一个 void 指针，指向新分配内存块的地址；如果分配失败（例如内存不足），返回一个空指针（NULL）</strong><br><br><strong>参数说明：numElements是要分配的元素的数量，sizeOfElement是每个元素的大小（以字节为单位）</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token punctuation">;</span>    <span class="token comment">// 定义整型指针</span>
    <span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// 定义数组长度</span>

    <span class="token comment">// 动态分配内存，将地址赋给指针p</span>
    p <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">calloc</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 判断是否分配成功</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;内存分配失败\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 退出程序</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 输出数组的元素的值</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;p[%d]=%d \\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
        p[0]=0 
        p[1]=0
        p[2]=0
        p[3]=0
        p[4]=0
    */</span>

    <span class="token comment">// 释放分配的内存</span>
    <span class="token function">free</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>（3）reallco函数</strong><br><strong>realloc() 函数用于重新分配malloc() 或calloc() 函数所获得的内存块的大小</strong></p><blockquote><p><strong>函数原型：void * realloc(void * ptr, size_t size);</strong><br><br><strong>返回值说明：返回一个指向重新分配内存块的指针。如果内存重新分配成功，返回的指针可能与原始指针相同，也可能不同；如果内存分配失败，返回返回一个空指针（NULL）。如果在原内存块上进行缩减，通常返回的原先的地址</strong><br><br><strong>参数说明：ptr是要重新分配的内存块的指针，size是新的内存块的大小（以字节为单位）</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">//说明：_msize()函数，该函数可以获取指定内存块的大小，头文件为#include&lt;malloc.h&gt;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;malloc.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 声明指针</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>b<span class="token punctuation">;</span>

    <span class="token comment">// 分配内存</span>
    b <span class="token operator">=</span> <span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;b=%p, size:%zu \\n&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">,</span> <span class="token function">_msize</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 调整内存大小</span>
    b <span class="token operator">=</span> <span class="token function">realloc</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;b=%p, size:%zu \\n&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">,</span> <span class="token function">_msize</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 再次调整内存大小</span>
    b <span class="token operator">=</span> <span class="token function">realloc</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;b=%p, size:%zu \\n&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">,</span> <span class="token function">_msize</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*
        b=000001f5fc3f4770, size:400 
        b=000001f5fc3f47d0, size:8000
        b=000001f5fc3f47d0, size:800
    */</span>

    <span class="token comment">// 释放内存</span>
    <span class="token function">free</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>（4）free函数</strong></p><blockquote><p><strong>如果动态分配的内存空间没有被正确释放，这种情况称为内存泄漏，内存泄漏会导致系统中的可用内存逐渐减少，直到耗尽系统可用的内存资源</strong><br><br><strong>free() 函数用于释放动态分配的内存，以便将内存返回给操作系统，防止内存泄漏</strong></p></blockquote><blockquote><p><strong>函数原型：void free(void * ptr);</strong><br><br><strong>返回值说明：没有有返回值</strong><br><br><strong>参数说明：ptr是指向要释放的内存块的指针，ptr必须是malloc() 或calloc() 动态分配的内存块地址</strong></p></blockquote><blockquote><p><strong>注意:</strong><br><strong>分配的内存块一旦释放，就不应该再次操作已经释放的地址，也不应该再次使用 free() 对该地址释放第二次</strong><br><br><strong>如果忘记调用free()函数，会导致无法访问未回收的内存块，构成内存泄漏</strong></p></blockquote><p><strong>（5）内存分配案例</strong></p><blockquote><p><strong>动态创建数组，输入5个学生的成绩，再定义一个函数检测成绩低于60分的，输出不合格的成绩</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token comment">// 函数原型声明</span>
<span class="token keyword">void</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>   
    <span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token punctuation">;</span>
    <span class="token comment">// 在堆区开辟一个 5 * 4 的空间</span>
    p <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入5个成绩：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> p <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">check</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">free</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 销毁 堆区 p 指向的空间</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 函数定义</span>
<span class="token keyword">void</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n不及格的成绩有: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">60</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot; %d &quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h2 id="_4-内存分配基本原则" tabindex="-1"><a class="header-anchor" href="#_4-内存分配基本原则"><span>4.内存分配基本原则</span></a></h2><p><strong>（1）避免分配大量的小内存块：分配堆上的内存有一些系统开销，所以分配许多小的内存块比分配几个大内存块的系统开销大</strong></p><p><strong>（2）仅在需要时分配内存：只要使用完堆上的内存块，就需要及时释放它，否则可能出现内存泄漏</strong></p><p><strong>（3）总是确保释放已分配的内存：在编写分配内存的代码时，就要确定好在代码的什么地方释放内存</strong></p>',43),r=[u];function d(k,v){return s(),a("div",null,r)}const g=n(l,[["render",d],["__file","第十二章：动态内存分配.html.vue"]]),f=JSON.parse('{"path":"/%E7%BC%96%E7%A8%8B%E5%AD%A6%E4%B9%A0/1.C%E8%AF%AD%E8%A8%80/%E7%AC%AC%E5%8D%81%E4%BA%8C%E7%AB%A0%EF%BC%9A%E5%8A%A8%E6%80%81%E5%86%85%E5%AD%98%E5%88%86%E9%85%8D.html","title":"第十二章：动态内存分配","lang":"zh-CN","frontmatter":{"date":"2024-01-12T00:00:00.000Z","order":13,"description":"第十二章：动态内存分配 1.C程序动态内存分配 动态内存分配：是指根据需要向系统申请所需大小的空间，由于未在声明部分定义其为变量或者数组，不能通过变量名或者数组名来引用这些数据，只能通过指针来引用 2.void指针(无类型指针) （1）void指针介绍 C99允许定义一个类型为void的指针变量，它可以指向任何类型的数据 （2）void指针作用 指针变...","head":[["meta",{"property":"og:url","content":"https://github.com/jimbo-master/%E7%BC%96%E7%A8%8B%E5%AD%A6%E4%B9%A0/1.C%E8%AF%AD%E8%A8%80/%E7%AC%AC%E5%8D%81%E4%BA%8C%E7%AB%A0%EF%BC%9A%E5%8A%A8%E6%80%81%E5%86%85%E5%AD%98%E5%88%86%E9%85%8D.html"}],["meta",{"property":"og:site_name","content":"JimBoの学习妙妙屋"}],["meta",{"property":"og:title","content":"第十二章：动态内存分配"}],["meta",{"property":"og:description","content":"第十二章：动态内存分配 1.C程序动态内存分配 动态内存分配：是指根据需要向系统申请所需大小的空间，由于未在声明部分定义其为变量或者数组，不能通过变量名或者数组名来引用这些数据，只能通过指针来引用 2.void指针(无类型指针) （1）void指针介绍 C99允许定义一个类型为void的指针变量，它可以指向任何类型的数据 （2）void指针作用 指针变..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"JimBo"}],["meta",{"property":"article:published_time","content":"2024-01-12T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第十二章：动态内存分配\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-12T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"JimBo\\",\\"url\\":\\"https://github.com/jimbo-master\\"}]}"]]},"headers":[{"level":2,"title":"1.C程序动态内存分配","slug":"_1-c程序动态内存分配","link":"#_1-c程序动态内存分配","children":[]},{"level":2,"title":"2.void指针(无类型指针)","slug":"_2-void指针-无类型指针","link":"#_2-void指针-无类型指针","children":[]},{"level":2,"title":"3.内存分配相关函数","slug":"_3-内存分配相关函数","link":"#_3-内存分配相关函数","children":[]},{"level":2,"title":"4.内存分配基本原则","slug":"_4-内存分配基本原则","link":"#_4-内存分配基本原则","children":[]}],"git":{},"readingTime":{"minutes":6.83,"words":2048},"filePathRelative":"编程学习/1.C语言/第十二章：动态内存分配.md","localizedDate":"2024年1月12日","autoDesc":true,"excerpt":"\\n<h2>1.C程序动态内存分配</h2>\\n<p><strong>动态内存分配：是指根据需要向系统申请所需大小的空间，由于未在声明部分定义其为变量或者数组，不能通过变量名或者数组名来引用这些数据，只能通过指针来引用</strong></p>\\n<figure><figcaption></figcaption></figure>\\n<hr>\\n<h2>2.void指针(无类型指针)</h2>\\n<p><strong>（1）void指针介绍</strong></p>\\n<blockquote>\\n<p><strong>C99允许定义一个类型为void的指针变量，它可以指向任何类型的数据</strong></p>\\n</blockquote>"}');export{g as comp,f as data};
