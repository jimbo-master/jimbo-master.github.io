import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as c,c as i,a as n,e as s,d as e,w as t,b as o}from"./app-Dezzdk4T.js";const r="/assets/printf%E7%9A%84%E8%A7%84%E5%88%99-Cch-0FZM.png",u="/assets/scanf%E7%9A%84%E8%A7%84%E5%88%99-3rjZOmab.png",d={},k=o(`<h1 id="第三章-变量和常量" tabindex="-1"><a class="header-anchor" href="#第三章-变量和常量"><span>第三章：变量和常量</span></a></h1><h2 id="_1-变量" tabindex="-1"><a class="header-anchor" href="#_1-变量"><span>1.变量</span></a></h2><h3 id="_1-1-变量的概念" tabindex="-1"><a class="header-anchor" href="#_1-1-变量的概念"><span>1.1 变量的概念</span></a></h3><p><strong>（1）变量是内存中的一个存储区域，该区域的数据可以在同一类型范围内不断变化</strong><br><strong>（2）通过变量名，可以引用这块内存区域，获取里面存储的值</strong><br><strong>（3）变量的构成包含三个要素：数据类型、变量名、存储的值</strong></p><hr><h3 id="_1-2-变量的声明和使用" tabindex="-1"><a class="header-anchor" href="#_1-2-变量的声明和使用"><span>1.2 变量的声明和使用</span></a></h3><p><strong>（1）变量必须先声明，后使用<br> （2）可以先声明变量再赋值，也可以在声明变量的同时进行赋值<br> （3）变量的值可以在同一类型范围内不断变化</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 声明一个整型变量，取名为 a</span>
    <span class="token keyword">int</span> a<span class="token punctuation">;</span>
    <span class="token comment">// 对变量 a 进行赋值</span>
    a <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>

    <span class="token comment">// 声明一个整型变量，取名为 b，并直接赋值</span>
    <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>
    <span class="token comment">// 修改变量 b 的值， 将变量 a 的值赋值给 b</span>
    b <span class="token operator">=</span> a<span class="token punctuation">;</span>

    <span class="token comment">// 同时声明多个整型变量并赋值</span>
    <span class="token keyword">int</span> c1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> c2 <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">,</span> c3 <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>

    <span class="token comment">//不推荐一行声明多个变量，建议分开声明，这是一种不好的代码风格</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_1-3-输出变量" tabindex="-1"><a class="header-anchor" href="#_1-3-输出变量"><span>1.3 输出变量</span></a></h3><p><strong>printf 的标准含义是格式化输出文本，printf 名称来源于 &quot;print formatted&quot;（格式化打印）的缩写，标准语法规则如下：</strong><br><img src="`+r+`" alt="" loading="lazy"></p><blockquote><p><strong>（1）格式化字符串是用双引号括起来的一个字符串，里面包括格式占位符和普通字符</strong><br><strong>（2）格式占位符，也叫格式声明符，由“%”和格式字符组成，作用是将输出的数据转换为指定的格式后输出，这里“%d”表示整数，更多的格式占位符后续会进行讲解</strong><br><strong>（3）输出列表是程序需要输出的一些数据，可以是常量、变量或表达式，与格式占位符一一对应</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 声明一个整型变量，取名为 a</span>
    <span class="token keyword">int</span> a<span class="token punctuation">;</span>
    <span class="token comment">// 对变量 a 进行赋值</span>
    a <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>

    <span class="token comment">// 声明一个整型变量，取名为 b，并直接赋值</span>
    <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>
    <span class="token comment">// 输出变量的值</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a=%d \\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 使用输出语句，把变量a 值输出， %d 表示输出的形式为整数</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;b=%d \\n&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 使用输出语句，把变量b 值输出， %d 表示输出的形式为整数</span>

    <span class="token comment">// 修改变量 b 的值， 将变量 a 的值赋值给 b</span>
    b <span class="token operator">=</span> a<span class="token punctuation">;</span>
    <span class="token comment">// 输出变量的值</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;b=%d \\n&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 使用输出语句，把变量b 值输出， %d 表示输出的形式为整数</span>

    <span class="token comment">// 同时声明多个整型变量并赋值</span>
    <span class="token keyword">int</span> c1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> c2 <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">,</span> c3 <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %d %d&quot;</span><span class="token punctuation">,</span> c1<span class="token punctuation">,</span> c2<span class="token punctuation">,</span> c3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10 20 30</span>

    <span class="token comment">/*
        输出结果：
            a=100
            b=200
            b=100
            10 20 30
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_1-4-输入赋值变量" tabindex="-1"><a class="header-anchor" href="#_1-4-输入赋值变量"><span>1.4 输入赋值变量</span></a></h3><p><strong>scanf主要用于从标准输入（通常是键盘）读取数据并将其存储到指定的变量中（变量需要提前声明），同printf一样，位于头文件 &lt;stdio.h&gt; 中</strong><br><img src="`+u+`" alt="" loading="lazy"></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> num<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Please Input A Number: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 从标准输入读取整数，并将其存储到变量 num 中</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Your Number Is: %d\\n&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> num1<span class="token punctuation">,</span> num2<span class="token punctuation">,</span> num3<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;PLeaase Input Three Number: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %d %d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>num1<span class="token punctuation">,</span> <span class="token operator">&amp;</span>num2<span class="token punctuation">,</span> <span class="token operator">&amp;</span>num3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 从标准输入读取3个整数，使用空格分隔，并将分别将其存储到变量 num1、num2、num31 中</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Numbers: %d, %d, %d&quot;</span><span class="token punctuation">,</span> num1<span class="token punctuation">,</span> num2<span class="token punctuation">,</span> num3<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>需要注意的是，scanf中，变量名前面需要添加 &amp; 符号，该符号称为取地址符，没有它就没法正确读取值。与printf相同，scanf也可以通过不同格式占位符为不同类型的变量获取值</strong></p></blockquote><hr><h2 id="_2-常量" tabindex="-1"><a class="header-anchor" href="#_2-常量"><span>2.常量</span></a></h2><p><strong>程序运行时，其值不能改变的量，即为常量</strong></p><h3 id="_2-1-常量的分类" tabindex="-1"><a class="header-anchor" href="#_2-1-常量的分类"><span>2.1 常量的分类</span></a></h3><p><strong>（1）字面量常量，直接使用的常量，不需要定义或声明，包括整数常量、浮点数常量、字符常量<br> （2）标识符常量，使用标识符作为常量名，包括 #define 定义的标识符常量和const 关键字定义的标识符常量以及枚举常量</strong></p><hr><h3 id="_2-2-常量的定义" tabindex="-1"><a class="header-anchor" href="#_2-2-常量的定义"><span>2.2 常量的定义</span></a></h3><p><strong>常量的定义方法主要有：①使用#define定义常量、②使用const关键字</strong></p><p><strong>（1）使用#define定义常量：</strong></p>`,27),m=n("strong",null,[s("#define 来定义常量，也叫作宏定义，就是用一个标识符来表示一个常量值，如果在后面的代码中出现了该标识符，那么"),n("mark",null,"编译"),s("时就全部替换成指定的常量值，即用宏体替换所有宏名，简称宏替换")],-1),v=n("br",null,null,-1),b=n("br",null,null,-1),h=n("br",null,null,-1),g=n("strong",null,"注意：不要用分号结尾，分号会成为常量值的一部分，会出现;;这种情况。#define必须写在main函数外面",-1),_=o(`<div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">PI</span> <span class="token expression"><span class="token number">3.14</span> </span><span class="token comment">// 定义常量 PI，常量值 3.14</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">double</span> area<span class="token punctuation">;</span>
    <span class="token keyword">double</span> r <span class="token operator">=</span> <span class="token number">1.2</span><span class="token punctuation">;</span>
    area <span class="token operator">=</span> PI <span class="token operator">*</span> r <span class="token operator">*</span> r<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;面积 : %.2f&quot;</span><span class="token punctuation">,</span> area<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//面积：4.52</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（2）const关键字</strong></p>`,2),f=n("strong",null,[s("跟使用 #define定义宏常量相比，const定义的常量有详细的数据类型，而且会在"),n("mark",null,"编译阶段"),s("进行安全检查，在运行时才完成替换，所以会更加安全和方便")],-1),y=n("br",null,null,-1),x=n("br",null,null,-1),E=o(`<div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">const</span> <span class="token keyword">double</span> PI <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span> <span class="token comment">// const 定义常量时，需要加分号</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">double</span> area<span class="token punctuation">;</span>
    <span class="token keyword">double</span> r <span class="token operator">=</span> <span class="token number">1.2</span><span class="token punctuation">;</span>
    area <span class="token operator">=</span> PI <span class="token operator">*</span> r <span class="token operator">*</span> r<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;面积 : %.2f&quot;</span><span class="token punctuation">,</span> area<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//面积：4.52</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（3）#define和const定义常量的区别</strong></p><blockquote><p><strong>1.执行时机：#define是预处理指令，在编译之前执行；const是关键字，在编译过程中执行</strong><br><strong>2.类型检查：#define定义常量不用指定类型，不进行类型检查，只是简单地文本替换；const定义常量需指定数据类型，会进行类型检查，类型安全性更强</strong></p></blockquote><hr><h2 id="_3-标识符" tabindex="-1"><a class="header-anchor" href="#_3-标识符"><span>3.标识符</span></a></h2><p><strong>C语言中变量、函数、数组名、结构体等要素命名时使用的字符序列，称为标识符</strong></p><h3 id="_3-1-标识符命名规范" tabindex="-1"><a class="header-anchor" href="#_3-1-标识符命名规范"><span>3.1 标识符命名规范</span></a></h3>`,7),q=n("br",null,null,-1),w=n("br",null,null,-1),A=n("br",null,null,-1),B=n("br",null,null,-1),C=n("br",null,null,-1),F=o(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>合法标识符举例：
    a、BOOK_sun、MAX_SIZE、Mouse、student23、Football、FOOTBALL、max、_add、num_1、sum_of_numbers

非法标识符举例：
    $zj、3sum、ab#cd、23student、Foot-baii、s.com、b＆c、j**p、book-1、tax rate、don&#39;t
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_3-2-规范命名风格" tabindex="-1"><a class="header-anchor" href="#_3-2-规范命名风格"><span>3.2 规范命名风格</span></a></h3><blockquote><p><strong>（1）为了提高阅读性，使用有意义的单词，见名知意，如：sum，name，max，year等<br> （2）使用下划线连接多个单词组成的标识符，如：max_classes_per_student<br> （3）多个单词组成的标识符，除了使用下划线连接，也可以使用小驼峰命名法，除第一个单词外，后续单词的首字母大写，如 myVariableName、maxClassesPerStudent<br> （4）不要出现仅靠大小写区分不同的标识符，如：name、Name容易混淆<br> （5）系统内部使用了一些下划线开头的标识符，比如，C99标准添加的类型 <code>_Bool</code>，为防止冲突，建议开发者尽量避免使用下划线开头的标识符</strong></p></blockquote><hr><h3 id="_3-3-关键字" tabindex="-1"><a class="header-anchor" href="#_3-3-关键字"><span>3.3 关键字</span></a></h3><p><strong>关键字是一些具有特殊含义的保留单词</strong></p><table><thead><tr><th>类型</th><th>具体关键字</th></tr></thead><tbody><tr><td>控制语句关键字(12)个</td><td>break, case, continue, default, do, else, for, goto, if, return, switch, while</td></tr><tr><td>数据类型关键字(12)个</td><td>char, enum, double, long, float, int, short, signed, struct, unsigned, union, void</td></tr><tr><td>存储类型关键字(4)个</td><td>auto, extern, register, static</td></tr><tr><td>其他关键字(4)个</td><td>const, sizeof, typedef, volatile</td></tr></tbody></table><p><strong>C99标准增加了5个关键字：inline、restrict、_Bool、_Complex和_Imaginary<br> C11标准增加了7个关键字：_Alignas、_Alignof、_Atomic、_Static_assert、_Noreturn、_Thread_local和_Generic。</strong></p>`,9);function N(P,I){const a=l("font");return c(),i("div",null,[k,n("blockquote",null,[n("p",null,[m,v,b,n("strong",null,[s("#define定义常量的格式："),e(a,{color:"red"},{default:t(()=>[s("#define 常量名 常量值")]),_:1})]),h,g])]),_,n("blockquote",null,[n("p",null,[f,y,x,n("strong",null,[s("const定义常量的格式："),e(a,{color:"red"},{default:t(()=>[s("const 数据类型 常量名 = 常量值")]),_:1})]),s(";")])]),E,n("blockquote",null,[n("p",null,[n("strong",null,[s("强制规范"),q,s(" （1）只能由大小写"),e(a,{color:"red"},{default:t(()=>[s("英文字母、数字、下划线")]),_:1}),s("组成"),w,s(" （2）"),e(a,{color:"red"},{default:t(()=>[s("不能以数字开头")]),_:1}),A,s(" （3）"),e(a,{color:"red"},{default:t(()=>[s("不可以是关键字")]),_:1}),B,s(" （4）"),e(a,{color:"red"},{default:t(()=>[s("标识符具有长度限制")]),_:1}),s("，不同编译器和平台会有所不同，一般限制在63个字符内"),C,s(" （5）"),e(a,{color:"red"},{default:t(()=>[s("严格区分大小写字母")]),_:1}),s("。比如：Hello、hello是不同的标识符")])])]),F])}const j=p(d,[["render",N],["__file","第三章：变量和常量.html.vue"]]),D=JSON.parse('{"path":"/%E7%BC%96%E7%A8%8B%E5%AD%A6%E4%B9%A0/1.C%E8%AF%AD%E8%A8%80/%E7%AC%AC%E4%B8%89%E7%AB%A0%EF%BC%9A%E5%8F%98%E9%87%8F%E5%92%8C%E5%B8%B8%E9%87%8F.html","title":"第三章：变量和常量","lang":"zh-CN","frontmatter":{"date":"2024-01-03T00:00:00.000Z","order":4,"description":"第三章：变量和常量 1.变量 1.1 变量的概念 （1）变量是内存中的一个存储区域，该区域的数据可以在同一类型范围内不断变化 （2）通过变量名，可以引用这块内存区域，获取里面存储的值 （3）变量的构成包含三个要素：数据类型、变量名、存储的值 1.2 变量的声明和使用 （1）变量必须先声明，后使用 （2）可以先声明变量再赋值，也可以在声明变量的同时进行赋...","head":[["meta",{"property":"og:url","content":"https://github.com/jimbo-master/%E7%BC%96%E7%A8%8B%E5%AD%A6%E4%B9%A0/1.C%E8%AF%AD%E8%A8%80/%E7%AC%AC%E4%B8%89%E7%AB%A0%EF%BC%9A%E5%8F%98%E9%87%8F%E5%92%8C%E5%B8%B8%E9%87%8F.html"}],["meta",{"property":"og:site_name","content":"JimBoの学习妙妙屋"}],["meta",{"property":"og:title","content":"第三章：变量和常量"}],["meta",{"property":"og:description","content":"第三章：变量和常量 1.变量 1.1 变量的概念 （1）变量是内存中的一个存储区域，该区域的数据可以在同一类型范围内不断变化 （2）通过变量名，可以引用这块内存区域，获取里面存储的值 （3）变量的构成包含三个要素：数据类型、变量名、存储的值 1.2 变量的声明和使用 （1）变量必须先声明，后使用 （2）可以先声明变量再赋值，也可以在声明变量的同时进行赋..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"JimBo"}],["meta",{"property":"article:published_time","content":"2024-01-03T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第三章：变量和常量\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-03T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"JimBo\\",\\"url\\":\\"https://github.com/jimbo-master\\"}]}"]]},"headers":[{"level":2,"title":"1.变量","slug":"_1-变量","link":"#_1-变量","children":[{"level":3,"title":"1.1 变量的概念","slug":"_1-1-变量的概念","link":"#_1-1-变量的概念","children":[]},{"level":3,"title":"1.2 变量的声明和使用","slug":"_1-2-变量的声明和使用","link":"#_1-2-变量的声明和使用","children":[]},{"level":3,"title":"1.3 输出变量","slug":"_1-3-输出变量","link":"#_1-3-输出变量","children":[]},{"level":3,"title":"1.4 输入赋值变量","slug":"_1-4-输入赋值变量","link":"#_1-4-输入赋值变量","children":[]}]},{"level":2,"title":"2.常量","slug":"_2-常量","link":"#_2-常量","children":[{"level":3,"title":"2.1 常量的分类","slug":"_2-1-常量的分类","link":"#_2-1-常量的分类","children":[]},{"level":3,"title":"2.2 常量的定义","slug":"_2-2-常量的定义","link":"#_2-2-常量的定义","children":[]}]},{"level":2,"title":"3.标识符","slug":"_3-标识符","link":"#_3-标识符","children":[{"level":3,"title":"3.1 标识符命名规范","slug":"_3-1-标识符命名规范","link":"#_3-1-标识符命名规范","children":[]},{"level":3,"title":"3.2 规范命名风格","slug":"_3-2-规范命名风格","link":"#_3-2-规范命名风格","children":[]},{"level":3,"title":"3.3 关键字","slug":"_3-3-关键字","link":"#_3-3-关键字","children":[]}]}],"git":{},"readingTime":{"minutes":6.71,"words":2013},"filePathRelative":"编程学习/1.C语言/第三章：变量和常量.md","localizedDate":"2024年1月3日","autoDesc":true,"excerpt":"\\n<h2>1.变量</h2>\\n<h3>1.1 变量的概念</h3>\\n<p><strong>（1）变量是内存中的一个存储区域，该区域的数据可以在同一类型范围内不断变化</strong><br>\\n<strong>（2）通过变量名，可以引用这块内存区域，获取里面存储的值</strong><br>\\n<strong>（3）变量的构成包含三个要素：数据类型、变量名、存储的值</strong></p>\\n<hr>\\n<h3>1.2 变量的声明和使用</h3>\\n<p><strong>（1）变量必须先声明，后使用<br>\\n（2）可以先声明变量再赋值，也可以在声明变量的同时进行赋值<br>\\n（3）变量的值可以在同一类型范围内不断变化</strong></p>"}');export{j as comp,D as data};
