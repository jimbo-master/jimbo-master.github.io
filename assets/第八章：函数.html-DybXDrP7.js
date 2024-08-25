import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as t}from"./app-Dezzdk4T.js";const p="/assets/%E4%BB%80%E4%B9%88%E6%98%AF%E5%87%BD%E6%95%B0-Bj4wcC62.png",e="/assets/%E5%A3%B0%E6%98%8E%E5%87%BD%E6%95%B0%E8%AF%AD%E6%B3%95-Do40yOEH.png",c="/assets/%E8%BF%90%E8%A1%8C%E7%BB%93%E6%9E%9C-BytQCJ0g.png",o="/assets/%E4%BD%9C%E7%94%A8%E5%9F%9F%E5%92%8C%E5%86%85%E5%AD%98-DZaNXme3.png",i="/assets/%E5%86%85%E5%AD%98%E5%88%86%E6%9E%90-DdQSEdiG.png",l="/assets/%E9%80%92%E5%BD%92%E5%87%BD%E6%95%B0-CEdAincw.png",u="/assets/time%E5%A4%B4%E6%96%87%E4%BB%B6-D85ddqCF.png",r="/assets/math%E5%A4%B4%E6%96%87%E4%BB%B6-CoPam4Wd.png",d={},k=t('<h1 id="第八章-函数" tabindex="-1"><a class="header-anchor" href="#第八章-函数"><span>第八章：函数</span></a></h1><h2 id="_1-函数基本概念" tabindex="-1"><a class="header-anchor" href="#_1-函数基本概念"><span>1.函数基本概念</span></a></h2><p><strong>（1）什么是函数</strong></p><blockquote><p><strong>函数是一种可重复使用的代码块，用于执行特定的任务或操作</strong><br><br><strong>函数允许我们将代码逻辑组织成独立的单元，从而提高了代码的可读性、可维护性和重用性</strong><br><br><strong>一个C程序可以由一个或多个源文件构成（C文件扩展名是“.c”），一个源文件是一个编译单位。一个源文件可以由若干个函数构成，函数之间可以相互调用。也就是说，<mark>函数是C程序基本的组成单位</mark></strong><br><br><strong>注意：C程序中的所有函数都是互相独立的，一个函数并不从属于另一个函数，即<mark>函数不能嵌套声明</mark></strong></p></blockquote><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>（2）函数的功能</strong></p><blockquote><p><strong>封装功能，将一个完整的功能封装成函数，提高代码的结构化和复用性</strong><br><br><strong>代码模块化，将程序按照功能拆分成若干模块单元,有助于降低复杂度</strong><br><br><strong>增强可维护性，如果需要修改某项功能，只需要调整对应的函数代码</strong><br><br><strong>隔离细节，通过函数调用可以隐藏实现细节，只关心输入输出</strong></p></blockquote><p><strong>（3）函数的分类</strong><br><strong>C语言中，从使用的角度，函数可以分类两类：库函数、自定义函数</strong></p><blockquote><p><strong>库函数，也称为标准函数，是由C系统提供的，用户不必自己定义，可直接使用它们，一般用#include&lt;...&gt;</strong><br><br><strong>自定义函数，解决具体需求而自己定义的函数，需先定义再使用，一般用#include&quot;...&quot;</strong></p></blockquote><hr><h2 id="_2-函数基本语法" tabindex="-1"><a class="header-anchor" href="#_2-函数基本语法"><span>2.函数基本语法</span></a></h2><p><strong>（1）声明函数语法</strong><br><img src="'+e+`" alt="" loading="lazy"></p><blockquote><p><strong>函数名：函数被调用时使用的名字，函数名要符合标识符规范</strong><br><br><strong>函数体：函数中所包含的代码块，用于实现函数的具体功能和操作</strong><br><br><strong>参数：用于接收调用函数时传递进来的值</strong><br><br><strong>返回值：函数执行完毕后，从函数传回到调用点的值，返回值的类型要与函数名</strong><br><br><strong>前面的返回类型对应，如果没有返回值，返回类型可以写 void</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token comment">// 声明函数</span>
<span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;hello func\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实现两个数字相减</span>
<span class="token keyword">int</span> <span class="token function">minus</span><span class="token punctuation">(</span><span class="token keyword">int</span> m<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> m <span class="token operator">-</span> n<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 取两个数字中的最大值</span>
<span class="token keyword">int</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> c<span class="token punctuation">;</span>
    c <span class="token operator">=</span> a <span class="token operator">&gt;</span> b <span class="token operator">?</span> a <span class="token operator">:</span> b<span class="token punctuation">;</span>
    <span class="token keyword">return</span> c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 主函数</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（2）调用函数</strong></p><blockquote><p><strong>函数名后面加上圆括号即是函数的调用，参数写在小括号中，函数每调用一次，函数体语句都会执行一遍</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token comment">// 声明函数</span>
<span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;hello func\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实现两个数字相减</span>
<span class="token keyword">int</span> <span class="token function">minus</span><span class="token punctuation">(</span><span class="token keyword">int</span> m<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> m <span class="token operator">-</span> n<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 取两个数字中的最大值</span>
<span class="token keyword">int</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> c<span class="token punctuation">;</span>
    c <span class="token operator">=</span> a <span class="token operator">&gt;</span> b <span class="token operator">?</span> a <span class="token operator">:</span> b<span class="token punctuation">;</span>
    <span class="token keyword">return</span> c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 主函数</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 函数的调用</span>
    <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;17-90的结果：%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">minus</span><span class="token punctuation">(</span><span class="token number">17</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;21-180的结果：%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">minus</span><span class="token punctuation">(</span><span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">180</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;12和16之间较大的是：%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;45和31之间较大的是：%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token number">45</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*
        hello func
        hello func
        17-90的结果：-73
        21-180的结果：-159
        12和16之间较大的是：16
        45和31之间较大的是：45
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（3）函数的返回值</strong></p><blockquote><p><strong>函数调用后数能得到一个确定的值，这就是函数的返回值，返回值常常是一个计算的结果，或是用来作为判断函数执行状态的标记</strong></p></blockquote><p><strong>函数返回值分为以下三种情况：</strong></p><blockquote><p><strong>无返回值类型：针对函数无返回值或明确不需返回值的情况，使用void（即空类型）表示</strong><br><br><strong>有返回值类型：指明具体的类型，比如，int、float、char等。需要在函数体内与return语句搭配使用</strong><br><br><strong>如果返回值类型不是void，但函数中没有return语句，则函数会返回一个不确定的值</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token comment">// 无返回值</span>
<span class="token keyword">void</span> <span class="token function">fun01</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;fun01\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 有明确的返回值</span>
<span class="token keyword">double</span> <span class="token function">fun02</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">3.14</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 函数返回一个不确定的值</span>
<span class="token keyword">int</span> <span class="token function">fun03</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token number">10</span> <span class="token operator">+</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 返回类型与return的值类型不一致，可能造成精度损失</span>
<span class="token keyword">int</span> <span class="token function">fun04</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">20.89</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">fun01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%f \\n&quot;</span><span class="token punctuation">,</span> <span class="token function">fun02</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d \\n&quot;</span><span class="token punctuation">,</span> <span class="token function">fun03</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回一个不确定的值</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d \\n&quot;</span><span class="token punctuation">,</span> <span class="token function">fun04</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回值有精度损失</span>

    <span class="token comment">/*
        fun01
        3.140000 
        10
        20
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（4）函数的参数</strong><br><strong>函数的参数分为形参与实参：</strong></p><blockquote><p><strong>形参：在定义函数时，函数名后面括号()中声明的变量称为形式参数，简称形参</strong><br><br><strong>实参： 在调用函数时，函数名后面括号()中的使用的常量、变量、表达式称为实际参数，简称实参</strong><br><br><strong>参数作用域：形参的改变不影响实参，形参出了作用域就销毁了，需要传形参的地址与实参建立真正的变量联系</strong><br><br><strong>注意：实参的数量要与形参的数量一致，否则报错</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token comment">// x 和 y 即为形参</span>
<span class="token keyword">int</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 3 和 5 即为实参</span>
    <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d \\n&quot;</span><span class="token punctuation">,</span> sum<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 8;</span>

    <span class="token comment">// 如果实参数量如形参不一致 会报错</span>
    <span class="token comment">// func(100, 299, 300);</span>
    <span class="token comment">// func(100);</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_3-主函数与函数原型" tabindex="-1"><a class="header-anchor" href="#_3-主函数与函数原型"><span>3.主函数与函数原型</span></a></h2><p><strong>（1）主函数的作用：</strong></p><blockquote><p><strong>主函数是程序的入口函数，即所有的程序一定要包含一个主函数，程序总是从这个函数开始执行，如果没有该函数，程序就无法启动</strong><br><br><strong>主函数中可以调用其它函数，但其它函数不能反过来调用主函数，主函数也不能调用自己</strong></p></blockquote><p><strong>（2）主函数的返回值：</strong></p><blockquote><p><strong>C语言约定，主函数返回值0表示运行成功，如果返回其它非零整数，就表示运行失败。默认情况下，如果主函数里面省略return 0 这一行，编译器会自动加上，即 main() 的默认返回值为0。但是为了保持统一的代码风格，不建议省略</strong></p></blockquote><p><strong>（3）主函数的参数：</strong></p><blockquote><p><strong>主函数的声明中可以带有两个参数，格式如下：</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 函数体</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>其中，形参argc，全称是argument count，表示传给程序的参数个数，其值至少是1；而argv，全称是argument value，argv[]是一个指针数组，我们可以暂时将 argv 理解为是一个数组，数组的每个元素都是字符串</strong><br><br><strong>通过这种方式可以通过命令行的方式执行源代码，并接收指定的字符串传给参数argv</strong></p></blockquote><blockquote><p><strong>我们创建一个名为 demo.c 的源文件，代码如下：</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;argc = %d\\n&quot;</span><span class="token punctuation">,</span> argc<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 函数体</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> argc<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s\\n&quot;</span><span class="token punctuation">,</span> argv<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>在 demo.c 所在的目录下打开命令行工具，使用 gcc 命令进行编译，如下所示：</strong></p></blockquote><figure><img src="`+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>（4）函数原型</strong></p><blockquote><p><strong>默认情况下，函数必须先声明，后使用。由于程序总是先运行main() 函数，导致所有其它函数都必须在main() 函数之前声明</strong><br><br><strong>如果想将函数声明写在后面，可以在程序开头处给出函数原型。函数原型，就是提前告诉编译器，每个函数的返回类型和参数类型。其它信息都不需要，也不用包括函数体，具体的函数实现可以后面再补上</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token comment">// 使用函数原型进行声明</span>
<span class="token keyword">int</span> <span class="token function">twice</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 主函数</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">twice</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//200</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 函数定义</span>
<span class="token keyword">int</span> <span class="token function">twice</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">2</span> <span class="token operator">*</span> num<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_4-函数作用域" tabindex="-1"><a class="header-anchor" href="#_4-函数作用域"><span>4.函数作用域</span></a></h2><p><strong>（1）函数作用域的概念</strong></p><blockquote><p><strong>作用域用于确定在代码中某个标识符（如变量、标识符常量、数组等）的可见性和访问范围，它决定了在程序的哪些部分可以引用或访问该标识符</strong><br><br><strong>作用域可以分为全局作用域、局部作用域、块级作用域</strong><br><br><strong>同一个作用域中不能声明同名的标识符</strong></p></blockquote><p><strong>（2）全局作用域</strong></p><blockquote><p><strong>在函数和代码块（分支语句、循环语句等）以外定义的变量、标识符常量、数组等具有全局作用域，在程序的任何地方都可以被访问，通常称它们为全局变量、全局常量、全局数组等</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token comment">// 全局变量</span>
<span class="token keyword">double</span> money <span class="token operator">=</span> <span class="token number">1.1</span><span class="token punctuation">;</span>

<span class="token comment">// 全局常量</span>
<span class="token keyword">const</span> <span class="token keyword">double</span> PI <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>

<span class="token comment">// 全局数组</span>
<span class="token keyword">char</span> msg<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 全局函数</span>
<span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;func 函数中使用全局数据：\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;money=%.2f \\n&quot;</span><span class="token punctuation">,</span> money<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;PI=%.2f \\n&quot;</span><span class="token punctuation">,</span> PI<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;msg=%s \\n&quot;</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    money <span class="token operator">+=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 主函数</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 调用 func()</span>
    <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;主函数中使用全局数据：\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;money=%.2f \\n&quot;</span><span class="token punctuation">,</span> money<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;PI=%.2f \\n&quot;</span><span class="token punctuation">,</span> PI<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;msg=%s \\n&quot;</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   
    <span class="token comment">// 调用 func()</span>
    <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*
        func 函数中使用全局数据：
        money=1.10 
        PI=3.14
        msg=Hello World

        主函数中使用全局数据：
        money=101.10
        PI=3.14
        msg=Hello World

        func 函数中使用全局数据：
        money=101.10
        PI=3.14
        msg=Hello World
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>对于全局变量，如果没有显式指定初始值，它们将自动初始化为零值</strong><br><br><strong>对于全局数组，如果没有显式初始化它们，它们的元素将自动初始化为零值，字符数组，将初始化为空字符 \\0</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token comment">// 定义全局变量不进行初始化赋值</span>
<span class="token keyword">int</span> a<span class="token punctuation">;</span>    <span class="token comment">// 自动初始化为0</span>
<span class="token keyword">double</span> b<span class="token punctuation">;</span> <span class="token comment">// 自动初始化为0.0</span>
<span class="token keyword">char</span> c<span class="token punctuation">;</span>   <span class="token comment">// 自动初始化为空字符 \\0</span>

<span class="token comment">// 定义全局数组不进行初始化</span>
<span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">// 所有元素自动初始化为0</span>
<span class="token keyword">char</span> msg<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 所有元素自动初始化为空字符 \\0</span>

<span class="token comment">// 主函数</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 输出全局变量</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a=%d \\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a=0</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;b=%f \\n&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// b=0.000000</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;c=%c \\n&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// c=</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 计算数组长度</span>
    <span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token keyword">sizeof</span> arr <span class="token operator">/</span> <span class="token keyword">sizeof</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 遍历数组 arr</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d &quot;</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;字符数组：%s&quot;</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 字符数组：</span>

    <span class="token comment">/*
        a=0 
        b=0.000000
        c=

        0 0 0 0 0

        字符数组：
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（3）局部作用域</strong></p><blockquote><p><strong>在函数内定义的变量、标识符常量、数组等具有局部作用域，只有在该函数内部才能被访问，通常称它们为局部变量、局部常量、局部数组等。需要注意的是，函数的形参也是局部变量</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 局部变量</span>
    <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
    <span class="token comment">// 局部常量</span>
    <span class="token keyword">const</span> <span class="token keyword">double</span> PI <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>
    <span class="token comment">// 局部数组</span>
    <span class="token keyword">int</span> nums<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;(a+b+nums[0])*PI=%f \\n&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>a <span class="token operator">+</span> b <span class="token operator">+</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">*</span> PI<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 调用函数 add</span>
    <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// (a + b + nums[0]) * PI =  408.200000</span>

    <span class="token comment">// add 函数外部使用局部变量</span>
    <span class="token comment">// printf(&quot;%d \\n&quot;, a);  // 报错 &#39;a&#39; undeclared</span>
    <span class="token comment">// printf(&quot;%d \\n&quot;, b);  //报错 &#39;b&#39; undeclared</span>
    <span class="token comment">// printf(&quot;%f \\n&quot;, PI);  // 报错 &#39;PI&#39; undeclared</span>
    <span class="token comment">// printf(&quot;%d \\n&quot;, nums[0]);  // 报错 &#39;nums&#39; undeclared</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>如果局部作用域中定义了与全局作用域中同名的标识符，优先使用本作用域中定义的数据，相关代码示例如下：</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token comment">// 全局变量</span>
<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">;</span>
    a <span class="token operator">+=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    b <span class="token operator">+=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;函数 add 内部： a=%d, b=%d \\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token comment">// 调用函数 add</span>
    <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 函数 add 内部： a=310, b=210</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;函数 add 外部： a=%d, b=%d \\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 函数 add 外部： a=100, b=210</span>

    <span class="token comment">/*
        函数 add 内部： a=310, b=210 
        函数 add 外部： a=100, b=210
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>与全局变量和全局数组不同，局部变量和局部数组如果没有显式初始化，它们的初始值是机器垃圾值，即系统之前分配给这块空间的值。所以不对局部变量、局部数组初始化是不安全且强烈不建议的</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 定义局部变量不进行初始化赋值</span>
    <span class="token keyword">int</span> a<span class="token punctuation">;</span>
    <span class="token comment">// 定义局部数组不进行初始化</span>
    <span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 输出局部变量</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a=%d \\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 计算数组长度</span>
    <span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token keyword">sizeof</span> arr <span class="token operator">/</span> <span class="token keyword">sizeof</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 遍历数组 arr</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d &quot;</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
        a=16 
        130611760 130611760 130611760 130611760 130611760
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（4）块级作用域</strong></p><blockquote><p><strong>块级作用域是C99标准引入的概念，在代码块（分支语句、循环语句等）中定义的变量、标识符常量、数组等具有块级作用域，只有在该代码块内部才能被访问，代码块通常具有花括号 {} 结构</strong><br><br><strong>这些被称为块级变量、块级常量、块级数组等，同时也可以被称为局部变量、局部常量、局部数组，且与函数中的局部变量、局部常量、局部数组具有相同的特性</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 该代码块中具有块级作用域</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 块级变量</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        <span class="token comment">// 块级常量</span>
        <span class="token keyword">const</span> <span class="token keyword">double</span> PI <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>

        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a*PI=%f \\n&quot;</span><span class="token punctuation">,</span> a <span class="token operator">*</span> PI<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 分支语句体具有块级作用域</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 局部数组</span>
        <span class="token keyword">int</span> nums<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %d %d \\n&quot;</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 循环语句中的标记变量i是块级变量</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d &quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// printf(&quot;%d \\n&quot;, a);  // 报错 &#39;a&#39; undeclared</span>
    <span class="token comment">// printf(&quot;%f \\n&quot;, PI);  // 报错 &#39;PI&#39; undeclared</span>
    <span class="token comment">// printf(&quot;%d \\n&quot;, nums[0]);  // 报错 &#39;nums&#39; undeclared</span>
    <span class="token comment">// printf(&quot;%d \\n&quot;, i);  // 报错 &#39;i&#39; undeclared</span>

    <span class="token comment">/*
        a*PI=62.800000 
        10 20 30 
        0 1 2 3 4
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（5）作用域和内存</strong><br><img src="`+o+'" alt="" loading="lazy"></p><blockquote><p><strong>栈区域：局部变量、局部数组等通常存储在栈（Stack）区，这些局部数据的内存分配和释放是自动管理的，它们的生命周期受限于其定义的函数或块级作用域，当函数返回或块级作用域结束时，这些变量的内存会被自动释放</strong><br><br><strong>函数每调用一次就创建一次局部数据，调用结束就销毁；下次调用再创建新的局部数据</strong></p></blockquote><blockquote><p><strong>全局静态区域：全局变量、全局数组等存储在全局静态区，这些全局的数据在程序的整个生命周期内都存在，它们在程序启动时被分配，在程序结束时才被释放</strong></p></blockquote><figure><img src="'+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_5-static关键字" tabindex="-1"><a class="header-anchor" href="#_5-static关键字"><span>5.static关键字</span></a></h2><blockquote><p><strong>static关键字可以声明静态变量和静态函数，以控制变量和函数的作用范围和生存周期</strong></p></blockquote><p><strong>（1）静态局部变量</strong><br><strong>使用static关键字修饰的局部变量，称为静态局部变量，静态局部变量与全局变量一样存储在内存中的全局静态区。静态局部变量具有如下特点：</strong></p><blockquote><p><strong><mark>静态局部变量只在函数第一次调用时初始化一次</mark>并将生命周期延长到整个程序的执行期间</strong><br><br><strong>静态局部变量如果声明时没有初始赋值，系统会自动初始化为零，同全局变量的初始化规则一致</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">void</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> a<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;n=%d, a=%d \\n&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    n<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;n++=%d \\n&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;    \\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">fn_static</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> a<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;static n=%d, a=%d\\n&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    n<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;static n++=%d \\n&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;    \\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">fn_static</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">fn_static</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*
        n=10, a=16
        n++=11 

        static n=10, a=0
        static n++=11

        n=10, a=0
        n++=11

        static n=11, a=0
        static n++=12
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（2）静态全局变量</strong></p><blockquote><p><strong>使用 static 关键字修饰的全局变量称为静态全局变量</strong><br><br><strong>普通全局变量对整个工程可见，其他文件中，使用extern外部声明后，可以直接使用。静态全局变量仅对当前文件可见，其他文件不可访问，其他文件中可以定义与其同名的变量，两者互不影响</strong><br><br><strong>静态全局变量对需要编译多个源代码文件的程序，能够有效地降低源文件之间的耦合，避免不同文件同名变量的冲突</strong><br><br><strong>此外static关键字还可以修饰函数（静态函数）、全局数组、全局常量等，功能作用与静态全局变量一致</strong></p></blockquote><p><strong>下面演示一个静态全局变量的案例，创建两个源文件，分别命名为file01.c和 file02.c，源文件代码如下：</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">//file01.c</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> num01 <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token keyword">static</span> <span class="token keyword">int</span> num02 <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token keyword">double</span> PI01 <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>
<span class="token keyword">static</span> <span class="token keyword">const</span> <span class="token keyword">double</span> PI02 <span class="token operator">=</span> <span class="token number">3.15</span><span class="token punctuation">;</span>

<span class="token keyword">char</span> msg01<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Hello msg01&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">static</span> <span class="token keyword">char</span> msg02<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Hello msg02&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">fn01</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;function fn01 \\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">fn02</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;function fn01 \\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">//file02.c</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token comment">// 外部声明 file02.c 中定义的全局变量</span>
<span class="token keyword">extern</span> <span class="token keyword">int</span> num01<span class="token punctuation">;</span>
<span class="token keyword">extern</span> <span class="token keyword">const</span> <span class="token keyword">double</span> PI01<span class="token punctuation">;</span>
<span class="token keyword">extern</span> <span class="token keyword">char</span> msg01<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">extern</span> <span class="token keyword">void</span> <span class="token function">fn01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 外部声明 file01.c 中定义的静态全局变量会报错</span>
<span class="token keyword">extern</span> <span class="token keyword">int</span> num02<span class="token punctuation">;</span>
<span class="token keyword">extern</span> <span class="token keyword">const</span> <span class="token keyword">double</span> PI02<span class="token punctuation">;</span>
<span class="token keyword">extern</span> <span class="token keyword">char</span> msg02<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">extern</span> <span class="token keyword">void</span> <span class="token function">fn02</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 使用 file02.c 中定义的数据</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d \\n&quot;</span><span class="token punctuation">,</span> num01<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%f \\n&quot;</span><span class="token punctuation">,</span> PI01<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s \\n&quot;</span><span class="token punctuation">,</span> msg01<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">fn01</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 报错 无法获取 file01.c 中定义的全局变量</span>
    <span class="token comment">// printf(&quot;%d \\n&quot;, num02);</span>
    <span class="token comment">// printf(&quot;%d \\n&quot;, PI02);</span>
    <span class="token comment">// printf(&quot;%s \\n&quot;, msg02);</span>
    <span class="token comment">// fn02();</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_6-递归函数" tabindex="-1"><a class="header-anchor" href="#_6-递归函数"><span>6.递归函数</span></a></h2><p><strong>一个函数在函数体内又调用了本身，我们称为递归调用，这样的函数就是递归函数</strong></p><p><strong>递归函数成功执行需满足以下两个条件：</strong></p><blockquote><p><strong>必须有一个明显的结束条件</strong><br><strong>必须有一个趋近于结束条件的趋势</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">test</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 调用函数</span>
    <span class="token function">test</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*
        3
        2
        1
        1
        2
        3
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h2 id="_7-常用系统函数" tabindex="-1"><a class="header-anchor" href="#_7-常用系统函数"><span>7.常用系统函数</span></a></h2><p><strong>（1）格式化输入输出函数：</strong><br><strong>#include&lt;stdio.h&gt;中的函数：</strong></p><blockquote><p><strong>sprintf()：用于将格式化数据写入字符串。相比于 printf()，多了一个参数，第一个参数是要写入的字符串，后面参数与 printf() 一致。简单地讲，sprintf() 是将内容写入字符串而不是输出</strong><br><br><strong>sscanf()：用于从一个字符串中按照指定的格式提取数据。相比于 scanf()，多了一个参数，第一个参数是要提取数据的字符串，后面参数与 scanf() 一致。简单地讲，sscanf() 是从字符串中提取数据而不是从用户输入提取数据</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// -------------    sprintf 的使用   ---------------</span>
    <span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
    <span class="token keyword">double</span> score <span class="token operator">=</span> <span class="token number">65.5</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">;</span>

    <span class="token keyword">char</span> outputString<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 字符数组，用于存储格式化后的字符串</span>

    <span class="token comment">// 使用 sprintf 将数据格式化为字符串</span>
    <span class="token function">sprintf</span><span class="token punctuation">(</span>outputString<span class="token punctuation">,</span> <span class="token string">&quot;我叫%s,今年%d岁,成绩%.2f分&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> score<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 输出格式化后的字符串</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s\\n&quot;</span><span class="token punctuation">,</span> outputString<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// -------------    sscanf 的使用    ---------------</span>
    <span class="token keyword">char</span> inputString<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;张三成绩:44,孙悟空成绩:65.5,张飞成绩:89&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">float</span> score1<span class="token punctuation">,</span> score2<span class="token punctuation">,</span> score3<span class="token punctuation">;</span>

    <span class="token comment">// 使用 sscanf 从字符串中提取数据</span>
    <span class="token function">sscanf</span><span class="token punctuation">(</span>inputString<span class="token punctuation">,</span> <span class="token string">&quot;张三成绩:%f,孙悟空成绩:%f,张飞成绩:%f&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>score1<span class="token punctuation">,</span> <span class="token operator">&amp;</span>score2<span class="token punctuation">,</span> <span class="token operator">&amp;</span>score3<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 输出提取的数据</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;score1=%.2f, score2=%.2f, score3=%.2f&quot;</span><span class="token punctuation">,</span> score1<span class="token punctuation">,</span> score2<span class="token punctuation">,</span> score3<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*
        我叫张三,今年12岁,成绩65.50分
        score1=44.00, score2=65.50, score3=89.00
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（2）日期时间相关函数</strong><br><strong>#include&lt;time.h&gt;头文件中的函数：</strong><br><img src="`+u+`" alt="" loading="lazy"></p><blockquote><p><strong>time_t 是C语言用于表示时间值的数据类型，它通常是一个整数类型（int 或 long 或 long long），用于存储时间戳</strong><br><br><strong>时间戳是指从1970年1月1日（通常称为UNIX纪元）零时零分零秒（UTC时间）起至某一特定时刻所经过的秒数</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;time.h&gt;</span> <span class="token comment">//该头文件中，声明和日期和时间相关的函数</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// time() 获取当前的时间</span>
    <span class="token class-name">time_t</span> curr_time<span class="token punctuation">;</span>
    <span class="token function">time</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>curr_time<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;当前时间戳：%lld \\n&quot;</span><span class="token punctuation">,</span> curr_time<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// ctime() 将时间值转为字符串</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;当前时间字符串：%s \\n&quot;</span><span class="token punctuation">,</span> <span class="token function">ctime</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>curr_time<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*
        当前时间戳：1697221633 
        当前时间字符串：Sat Oct 14 02:27:13 2023
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>接下来，我们使用 difftime() 函数来统计程序的执行时间，代码如下：</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;time.h&gt;</span> <span class="token comment">// 该头文件中，声明和日期和时间相关的函数</span></span>

<span class="token keyword">int</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            sum <span class="token operator">+=</span> j<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">time_t</span> <span class="token class-name">start_t</span><span class="token punctuation">,</span> <span class="token class-name">end_t</span><span class="token punctuation">;</span>
    <span class="token class-name">time_t</span> <span class="token class-name">diff_t</span><span class="token punctuation">;</span> <span class="token comment">// 存放时间差</span>

    <span class="token function">time</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token class-name">start_t</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 得到起始时间</span>
    <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">//  运行 fn 函数，看看执行花费时间</span>
    <span class="token function">time</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token class-name">end_t</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 函数执行结束后得到时间</span>

    <span class="token comment">// 计算两个时间值的差</span>
    <span class="token class-name">diff_t</span> <span class="token operator">=</span> <span class="token function">difftime</span><span class="token punctuation">(</span><span class="token class-name">end_t</span><span class="token punctuation">,</span> <span class="token class-name">start_t</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;执行 fn() 函数耗用了 %lld 秒&quot;</span><span class="token punctuation">,</span> <span class="token class-name">diff_t</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//执行 fn() 函数耗用了 2 秒</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（3）数学相关函数</strong><br><strong>#include&lt;math.h&gt;头文件中函数：</strong><br><img src="`+r+`" alt="" loading="lazy"></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;math.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;2的绝对值：%.0f, -12.34的绝对值：%.2f \\n&quot;</span><span class="token punctuation">,</span> <span class="token function">fabs</span><span class="token punctuation">(</span><span class="token number">2.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">fabs</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">12.34</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;10的平方根：%f \\n&quot;</span><span class="token punctuation">,</span> <span class="token function">sqrt</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;8的立方根：%.f \\n&quot;</span><span class="token punctuation">,</span> <span class="token function">cbrt</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;3的12次方：%.f \\n&quot;</span><span class="token punctuation">,</span> <span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;12.31向上取整：%.f，-12.31向上取整：%.f \\n&quot;</span><span class="token punctuation">,</span> <span class="token function">ceil</span><span class="token punctuation">(</span><span class="token number">12.31</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">ceil</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">12.31</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;12.51向下取整：%.f，-12.51向下取整：%.f \\n&quot;</span><span class="token punctuation">,</span> <span class="token function">floor</span><span class="token punctuation">(</span><span class="token number">12.51</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">floor</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">12.51</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;12.51四舍五入：%.f，-12.51四舍五入：%.f \\n&quot;</span><span class="token punctuation">,</span> <span class="token function">round</span><span class="token punctuation">(</span><span class="token number">12.51</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">round</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">12.51</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;12.51截断小数：%.f，-12.51截断小数：%.f \\n&quot;</span><span class="token punctuation">,</span> <span class="token function">trunc</span><span class="token punctuation">(</span><span class="token number">12.51</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">trunc</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">12.51</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*
        2的绝对值：2, -12.34的绝对值：12.34 
        10的平方根：3.162278
        8的立方方根：2
        3的12次方：531441
        12.31向上取整：13，-12.31向上取整：-12
        12.51向下取整：12，-12.51向下取整：-13
        12.51四舍五入：13，-12.51四舍五入：-13 
        12.51截断小数：12，-12.51截断小数：-12
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-常用字符串函数" tabindex="-1"><a class="header-anchor" href="#_8-常用字符串函数"><span>8.常用字符串函数</span></a></h2><p><strong>常用字符串函数汇总：</strong></p><table><thead><tr><th>函数名</th><th>函数原型</th><th>函数功能</th></tr></thead><tbody><tr><td>strlen</td><td>size_t strlen(const char *str)</td><td>求字符串长度</td></tr><tr><td>strnlen</td><td>size_t strnlen(const char *str, size_t maxlen)</td><td>长度可控求字符串长度</td></tr><tr><td>strcpy</td><td>char *strcpy( char *str1, char *str2)</td><td>拷贝字符串</td></tr><tr><td>strncpy</td><td>char *strncpy(char *str1, char *str2, size_t n)</td><td>长度可控拷贝字符串</td></tr><tr><td>strcat</td><td>char *strcat(char *str1, char *str2)</td><td>追加字符串</td></tr><tr><td>strncat</td><td>char *strncat(char *str1, char *str2, int n)</td><td>长度可控追加字符串</td></tr><tr><td>strcmp</td><td>int strcmp(const char *str1, const char *str2)</td><td>比较字符串</td></tr><tr><td>strstr</td><td>char *strstr(char *str, char *srch_term)</td><td>查找字符串</td></tr><tr><td>strtok</td><td>char *strtok(char *dest, const char *delim)</td><td>切割字符串</td></tr><tr><td>strerror</td><td>char *strerror(int errnum)</td><td>错误信号报告</td></tr><tr><td>atoi</td><td>int atoi(const char *string)</td><td>字符串转整数</td></tr></tbody></table><p><strong>sizeof和strlen的区别</strong></p><blockquote><p><strong>sizeof是一个操作符，所有类型都可以使用，只关注空间大小，包含\\0。sizeof()里的计算式不执行</strong><br><br><strong>strlen是一个库函数，只用于字符串，返回\\0前的元素个数</strong></p></blockquote><p><strong>字符串函数的例子：</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">char</span> str1<span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> str2<span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;World&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> str3<span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// strlen - 计算字符串的长度</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Length of str1: %d\\n&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token function">strlen</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// strnlen - 计算字符串的长度，但限制最大长度</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Length of str2 up to 5 characters: %d\\n&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token function">strnlen</span><span class="token punctuation">(</span>str2<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// strcpy - 复制字符串</span>
    <span class="token function">strcpy</span><span class="token punctuation">(</span>str3<span class="token punctuation">,</span> str1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;str3 after strcpy: %s\\n&quot;</span><span class="token punctuation">,</span> str3<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// strncpy - 复制字符串，但限制最大长度</span>
    <span class="token function">strncpy</span><span class="token punctuation">(</span>str3<span class="token punctuation">,</span> str2<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    str3<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;\\0&#39;</span><span class="token punctuation">;</span> <span class="token comment">// Ensure null-terminated string</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;str3 after strncpy: %s\\n&quot;</span><span class="token punctuation">,</span> str3<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// strcat - 将一个字符串附加到另一个字符串</span>
    <span class="token function">strcat</span><span class="token punctuation">(</span>str1<span class="token punctuation">,</span> str2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;str1 after strcat: %s\\n&quot;</span><span class="token punctuation">,</span> str1<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// strncat - 将一个字符串附加到另一个字符串，但限制最大长度</span>
    <span class="token function">strncat</span><span class="token punctuation">(</span>str1<span class="token punctuation">,</span> <span class="token string">&quot;!!!&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;str1 after strncat: %s\\n&quot;</span><span class="token punctuation">,</span> str1<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// strcmp - 比较两个字符串</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Comparison of str1 and str2: %d\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">strcmp</span><span class="token punctuation">(</span>str1<span class="token punctuation">,</span> str2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// strstr - 在一个字符串中查找另一个字符串</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>ptr <span class="token operator">=</span> <span class="token function">strstr</span><span class="token punctuation">(</span>str1<span class="token punctuation">,</span> <span class="token string">&quot;Wo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ptr <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Found &#39;Wo&#39; in str1 at position: %ld\\n&quot;</span><span class="token punctuation">,</span> ptr <span class="token operator">-</span> str1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;&#39;Wo&#39; not found in str1\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// strtok - 分解字符串为子字符串</span>
    <span class="token keyword">char</span> sentence<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;This is a sentence.&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>token <span class="token operator">=</span> <span class="token function">strtok</span><span class="token punctuation">(</span>sentence<span class="token punctuation">,</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>token <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s\\n&quot;</span><span class="token punctuation">,</span> token<span class="token punctuation">)</span><span class="token punctuation">;</span>
        token <span class="token operator">=</span> <span class="token function">strtok</span><span class="token punctuation">(</span><span class="token constant">NULL</span><span class="token punctuation">,</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// strerror - 返回错误码对应的描述字符串</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Error message for error code 2: %s\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">strerror</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// atoi - 将字符串转换为整数</span>
    <span class="token keyword">char</span> str1<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token function">atoi</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;num1: %d\\n&quot;</span><span class="token punctuation">,</span> num1<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_9-常用字符函数" tabindex="-1"><a class="header-anchor" href="#_9-常用字符函数"><span>9.常用字符函数</span></a></h2><p><strong>常用字符函数汇总：</strong></p><table><thead><tr><th>函数名</th><th>函数原型</th><th>函数功能</th></tr></thead><tbody><tr><td>tolower</td><td>int tolower(int ch)</td><td>大写字符转小写</td></tr><tr><td>toupper</td><td>int toupper(int ch)</td><td>小写字符转大写</td></tr><tr><td>islower</td><td>int islower(int ch)</td><td>判断是否为小写</td></tr><tr><td>isupper</td><td>int isupper(int ch)</td><td>判断是否为大写</td></tr><tr><td>isalpha</td><td>int isalpha(int ch)</td><td>判断是否为字母</td></tr><tr><td>isdigit</td><td>int isdigit(int ch)</td><td>判断是否为数字</td></tr><tr><td>isspace</td><td>int isspace(int ch)</td><td>判断是否为空白符</td></tr></tbody></table><blockquote><p><strong>空白符指：空格(&#39;&#39;)、换页(&#39;\\f&#39;)、换行(&#39;\\n&#39;)、回车(&#39;\\r&#39;)、水平制表符(&#39;\\t&#39;)、垂直制表符(&#39;\\v&#39;)</strong></p></blockquote><p><strong>字符函数的例子：</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;ctype.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">char</span> ch <span class="token operator">=</span> <span class="token char">&#39;A&#39;</span><span class="token punctuation">;</span>

    <span class="token comment">// tolower - 将字符转换为小写</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Lowercase of %c: %c\\n&quot;</span><span class="token punctuation">,</span> ch<span class="token punctuation">,</span> <span class="token function">tolower</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// toupper - 将字符转换为大写</span>
    ch <span class="token operator">=</span> <span class="token char">&#39;b&#39;</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Uppercase of %c: %c\\n&quot;</span><span class="token punctuation">,</span> ch<span class="token punctuation">,</span> <span class="token function">toupper</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// islower - 检查字符是否为小写字母</span>
    ch <span class="token operator">=</span> <span class="token char">&#39;c&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">islower</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%c is a lowercase letter.\\n&quot;</span><span class="token punctuation">,</span> ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%c is not a lowercase letter.\\n&quot;</span><span class="token punctuation">,</span> ch<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// isupper - 检查字符是否为大写字母</span>
    ch <span class="token operator">=</span> <span class="token char">&#39;D&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isupper</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%c is an uppercase letter.\\n&quot;</span><span class="token punctuation">,</span> ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%c is not an uppercase letter.\\n&quot;</span><span class="token punctuation">,</span> ch<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// isalpha - 检查字符是否为字母</span>
    ch <span class="token operator">=</span> <span class="token char">&#39;5&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isalpha</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%c is an alphabet character.\\n&quot;</span><span class="token punctuation">,</span> ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%c is not an alphabet character.\\n&quot;</span><span class="token punctuation">,</span> ch<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// isdigit - 检查字符是否为数字</span>
    ch <span class="token operator">=</span> <span class="token char">&#39;9&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isdigit</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%c is a digit.\\n&quot;</span><span class="token punctuation">,</span> ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%c is not a digit.\\n&quot;</span><span class="token punctuation">,</span> ch<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// isspace - 检查字符是否为空格字符</span>
    ch <span class="token operator">=</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isspace</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%c is a whitespace character.\\n&quot;</span><span class="token punctuation">,</span> ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%c is not a whitespace character.\\n&quot;</span><span class="token punctuation">,</span> ch<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_10-常用内存操作函数" tabindex="-1"><a class="header-anchor" href="#_10-常用内存操作函数"><span>10.常用内存操作函数</span></a></h2><p><strong>常用内存操作函数汇总：</strong></p><table><thead><tr><th>函数名</th><th>函数原型</th><th>函数功能</th></tr></thead><tbody><tr><td>memcpy</td><td>void *memcpy(void *dest, const void *src, size_t num)</td><td>拷贝内存数据</td></tr><tr><td>memmove</td><td>void *memmove(void *dest, const void *src, size_t num)</td><td>移动内存数据</td></tr><tr><td>memset</td><td>void *memset(void *dest, int ch, size_t num)</td><td>设置指定字符</td></tr><tr><td>memcmp</td><td>int memcmp(const void *dest, const void *src, size_t num)</td><td>比较内存内容</td></tr></tbody></table><p><strong>内存操作函数的例子：</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">char</span> src<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Hello, world!&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> dest<span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    
    <span class="token comment">// memcpy - 将源内存中的数据复制到目标内存中</span>
    <span class="token function">memcpy</span><span class="token punctuation">(</span>dest<span class="token punctuation">,</span> src<span class="token punctuation">,</span> <span class="token function">strlen</span><span class="token punctuation">(</span>src<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;After memcpy: %s\\n&quot;</span><span class="token punctuation">,</span> dest<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// memmove - 将内存块中的数据移动到另一个内存块中，即使它们重叠</span>
    <span class="token function">memmove</span><span class="token punctuation">(</span>dest <span class="token operator">+</span> <span class="token number">7</span><span class="token punctuation">,</span> dest<span class="token punctuation">,</span> <span class="token function">strlen</span><span class="token punctuation">(</span>dest<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;After memmove: %s\\n&quot;</span><span class="token punctuation">,</span> dest<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// memset - 将内存块的前几个字节设置为指定的值</span>
    <span class="token function">memset</span><span class="token punctuation">(</span>dest<span class="token punctuation">,</span> <span class="token char">&#39;-&#39;</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;After memset: %s\\n&quot;</span><span class="token punctuation">,</span> dest<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// memcmp - 比较两个内存块的前几个字节是否相等</span>
    <span class="token keyword">char</span> cmp1<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Hello!&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> cmp2<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Hello!&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">memcmp</span><span class="token punctuation">(</span>cmp1<span class="token punctuation">,</span> cmp2<span class="token punctuation">,</span> <span class="token function">strlen</span><span class="token punctuation">(</span>cmp1<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;memcmp: cmp1 and cmp2 are equal\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;memcmp: cmp1 and cmp2 are not equal\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,114),v=[k];function m(b,g){return s(),a("div",null,v)}const y=n(d,[["render",m],["__file","第八章：函数.html.vue"]]),q=JSON.parse('{"path":"/%E7%BC%96%E7%A8%8B%E5%AD%A6%E4%B9%A0/1.C%E8%AF%AD%E8%A8%80/%E7%AC%AC%E5%85%AB%E7%AB%A0%EF%BC%9A%E5%87%BD%E6%95%B0.html","title":"第八章：函数","lang":"zh-CN","frontmatter":{"date":"2024-01-08T00:00:00.000Z","order":9,"description":"第八章：函数 1.函数基本概念 （1）什么是函数 函数是一种可重复使用的代码块，用于执行特定的任务或操作 函数允许我们将代码逻辑组织成独立的单元，从而提高了代码的可读性、可维护性和重用性 一个C程序可以由一个或多个源文件构成（C文件扩展名是“.c”），一个源文件是一个编译单位。一个源文件可以由若干个函数构成，函数之间可以相互调用。也就是说，函数是C程序...","head":[["meta",{"property":"og:url","content":"https://github.com/jimbo-master/%E7%BC%96%E7%A8%8B%E5%AD%A6%E4%B9%A0/1.C%E8%AF%AD%E8%A8%80/%E7%AC%AC%E5%85%AB%E7%AB%A0%EF%BC%9A%E5%87%BD%E6%95%B0.html"}],["meta",{"property":"og:site_name","content":"JimBoの学习妙妙屋"}],["meta",{"property":"og:title","content":"第八章：函数"}],["meta",{"property":"og:description","content":"第八章：函数 1.函数基本概念 （1）什么是函数 函数是一种可重复使用的代码块，用于执行特定的任务或操作 函数允许我们将代码逻辑组织成独立的单元，从而提高了代码的可读性、可维护性和重用性 一个C程序可以由一个或多个源文件构成（C文件扩展名是“.c”），一个源文件是一个编译单位。一个源文件可以由若干个函数构成，函数之间可以相互调用。也就是说，函数是C程序..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"JimBo"}],["meta",{"property":"article:published_time","content":"2024-01-08T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第八章：函数\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-08T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"JimBo\\",\\"url\\":\\"https://github.com/jimbo-master\\"}]}"]]},"headers":[{"level":2,"title":"1.函数基本概念","slug":"_1-函数基本概念","link":"#_1-函数基本概念","children":[]},{"level":2,"title":"2.函数基本语法","slug":"_2-函数基本语法","link":"#_2-函数基本语法","children":[]},{"level":2,"title":"3.主函数与函数原型","slug":"_3-主函数与函数原型","link":"#_3-主函数与函数原型","children":[]},{"level":2,"title":"4.函数作用域","slug":"_4-函数作用域","link":"#_4-函数作用域","children":[]},{"level":2,"title":"5.static关键字","slug":"_5-static关键字","link":"#_5-static关键字","children":[]},{"level":2,"title":"6.递归函数","slug":"_6-递归函数","link":"#_6-递归函数","children":[]},{"level":2,"title":"7.常用系统函数","slug":"_7-常用系统函数","link":"#_7-常用系统函数","children":[]},{"level":2,"title":"8.常用字符串函数","slug":"_8-常用字符串函数","link":"#_8-常用字符串函数","children":[]},{"level":2,"title":"9.常用字符函数","slug":"_9-常用字符函数","link":"#_9-常用字符函数","children":[]},{"level":2,"title":"10.常用内存操作函数","slug":"_10-常用内存操作函数","link":"#_10-常用内存操作函数","children":[]}],"git":{},"readingTime":{"minutes":22.27,"words":6680},"filePathRelative":"编程学习/1.C语言/第八章：函数.md","localizedDate":"2024年1月8日","autoDesc":true,"excerpt":"\\n<h2>1.函数基本概念</h2>\\n<p><strong>（1）什么是函数</strong></p>\\n<blockquote>\\n<p><strong>函数是一种可重复使用的代码块，用于执行特定的任务或操作</strong><br><br>\\n<strong>函数允许我们将代码逻辑组织成独立的单元，从而提高了代码的可读性、可维护性和重用性</strong><br><br>\\n<strong>一个C程序可以由一个或多个源文件构成（C文件扩展名是“.c”），一个源文件是一个编译单位。一个源文件可以由若干个函数构成，函数之间可以相互调用。也就是说，<mark>函数是C程序基本的组成单位</mark></strong><br><br>\\n<strong>注意：C程序中的所有函数都是互相独立的，一个函数并不从属于另一个函数，即<mark>函数不能嵌套声明</mark></strong></p>\\n</blockquote>"}');export{y as comp,q as data};
