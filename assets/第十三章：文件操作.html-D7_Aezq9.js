import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as t}from"./app-Dezzdk4T.js";const p="/assets/%E6%95%B0%E6%8D%AE%E6%B5%81-DuJPbkQs.png",e="/assets/%E8%BE%93%E5%85%A5%E6%B5%81%E8%BE%93%E5%87%BA%E6%B5%81-C0KpvbUG.png",o="/assets/%E6%A0%87%E5%87%86%E6%96%87%E4%BB%B6-CEhBQjCT.png",c="/assets/mode%E5%80%BC-DRn6tEHs.png",i={},l=t('<h1 id="第十三章-文件操作" tabindex="-1"><a class="header-anchor" href="#第十三章-文件操作"><span>第十三章：文件操作</span></a></h1><h2 id="_1-文件基本介绍" tabindex="-1"><a class="header-anchor" href="#_1-文件基本介绍"><span>1.文件基本介绍</span></a></h2><p><strong>文件，对我们并不陌生，文件是数据源（保存数据的地方）的一种，比如大家经常使用的word文档，txt文件，excel文件...都是文件。文件最主要的作用就是保存数据，它既可以保存一张图片，也可以保持视频，声音...</strong></p><p><strong>C程序中，文件中数据的输入/输出操作以“流”的方式进行，可以看做是一种数据的流动</strong></p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入流（Input Stream）：数据从数据源（例如文件、键盘等）到程序（内存）的传输路径</strong></p><p><strong>输出流（Output Stream）：数据从程序（内存）到数据源（例如文件、屏幕等）的传输路径</strong></p></blockquote><figure><img src="'+e+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h2 id="_2-c语言的输入与输出" tabindex="-1"><a class="header-anchor" href="#_2-c语言的输入与输出"><span>2.C语言的输入与输出</span></a></h2><p><strong>（1）标准文件</strong></p><blockquote><p><strong>C 语言把所有的设备都当作文件，所以设备（比如显示器）被处理的方式与文件相同。以下三个文件会在程序执行时自动打开，以便访问键盘和屏幕</strong></p></blockquote><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>（2）scanf和printf函数</strong></p><blockquote><p><strong>C语言中的I/O （输入/输出）通常使用printf()和scanf()两个函数，scanf()函数从标准输入流stdin读取输入，printf()函数把输出写入到标准输出流stdout。这两个函数我们在前面的案例中已经大量使用</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code>​#include <span class="token operator">&lt;</span>stdio<span class="token punctuation">.</span>h<span class="token operator">&gt;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 定义变量</span>
    <span class="token keyword">char</span> str<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>

    <span class="token comment">// 获取输入</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Please Input A String And A Number :&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s %d&quot;</span><span class="token punctuation">,</span> str<span class="token punctuation">,</span> <span class="token operator">&amp;</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 输出到屏幕终端</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;You entered: %s %d &quot;</span><span class="token punctuation">,</span> str<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（3）getchar和putchar函数</strong></p><blockquote><p><strong>getchar()：用于从标准输入流（通常是键盘输入）读取一个字符。这个函数在同一个时间内只会读取一个单一的字符</strong><br><br><strong>函数原型：int getchar(void);</strong><br><br><strong>返回值说明：返回一个整数值，表示读取的字符</strong></p></blockquote><blockquote><p><strong>putchar()：用于将一个字符写入到标准输出流（通常是屏幕）。这个函数在同一个时间内只会输出一个单一的字符</strong><br><br><strong>函数原型：int putchar(int character);</strong><br><br><strong>返回值说明：返回一个整数值，是写入的字符的ASCII码值</strong><br><br><strong>参数说明：character是要写入的字符的ASCII码值</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span> </span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span> <span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> c<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span> <span class="token string">&quot;Enter a value :&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    c <span class="token operator">=</span> <span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token function">printf</span><span class="token punctuation">(</span> <span class="token string">&quot;\\nYou entered: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">putchar</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（4）gets和puts函数</strong></p><blockquote><p><strong>gets()：用于从标准输入流（通常是键盘）读取一行文本，并将其存储在一个字符数组中（gets() 的参数），直到遇到换行符为止</strong><br><br><strong>函数原型：char * gets(char * str);</strong><br><br><strong>返回值说明：返回一个指向存储在 str 中的字符串的指针</strong><br><br><strong>参数说明：字符数组（字符串）的指针，用于存储读取的输入数据</strong></p></blockquote><blockquote><p><strong>puts()：用于将字符串输出到标准输出流（通常是屏幕），并自动添加换行符。它接受一个字符串作为参数，然后将其显示在屏幕上</strong><br><br><strong>函数原型：int puts(const char * str);</strong><br><br><strong>返回值说明：返回成功写入的字符数，如果写入失败或出现错误，它会返回 特殊值EOF（（EOF 是一个定义在 stdio.h 头文件中的常量，值通常为 -1））</strong><br><br><strong>参数说明：str 是要输出的字符串</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">char</span> str<span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Enter a line of text :&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">gets</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;You entered: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// printf(&quot;%s&quot;, str);</span>
    <span class="token function">puts</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_3-c语言的文件读写" tabindex="-1"><a class="header-anchor" href="#_3-c语言的文件读写"><span>3.C语言的文件读写</span></a></h2><p><strong>文件，无论是文本文件还是二进制文件，都以一系列字节的形式存在，C语言提供了一系列函数处理存储设备上的文件</strong></p><p><strong>（1）打开文件</strong></p><blockquote><p><strong>使用fopen( ) 函数来创建一个新的文件或者打开一个已有的文件。该函数位于标准库的 stdio.h 头文件中</strong><br><br><strong>函数原型：FILE * fopen( const char * filename, const char * mode );</strong><br><br><strong>返回值说明：返回一个指向 FILE 结构的指针，该结构表示文件流，可以使用这个指针来进行文件的读取和写入操作。如果打开文件失败，返回一个空指针（NULL）</strong><br><br><strong>参数说明：filename是一个以字符串形式指定的文件名，表示要打开的文件的名称，可以包括文件路径和文件名。mode 是一个以字符串形式指定的打开模式，表示打开文件的方式，可以是以下值之一：</strong></p></blockquote><figure><img src="`+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>（2）关闭文件</strong></p><blockquote><p><strong>文件读写完毕后，一定要关闭文件，使用fclose( ) 函数可以关闭文件。该函数位于标准库的 stdio.h 头文件中</strong><br><br><strong>函数原型：int fclose(FILE * stream);</strong><br><br><strong>返回值说明：返回一个整数值，通常为零（0），表示关闭操作成功。如果关闭失败，它返回特殊值EOF （EOF 是一个定义在 stdio.h 头文件中的常量，值通常为 -1）</strong><br><br><strong>参数说明：stream是一个指向 FILE 结构的指针，表示要关闭的文件流</strong></p></blockquote><p><strong>（3）写入文件</strong></p><blockquote><p><strong>①fputc() 函数用于逐字符写入文件。位于标准库的stdio.h 头文件中</strong><br><br><strong>函数原型：int fputc(int character, FILE * stream);</strong><br><br><strong>返回值说明：返回一个整数值，通常是写入的字符的ASCII码值。如果写入成功，返回的值与输入的 character 值相同；如果写入失败，它返回特殊值 EOF</strong><br><br><strong>参数说明：character是要写入的字符，通常以整数形式表示，即字符的ASCII码值。stream是一个指向 FILE 结构的指针，表示要写入字符的文件流</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// FILE *file = fopen(&quot;output.txt&quot;, &quot;w&quot;); // 从头写入</span>
    FILE <span class="token operator">*</span>file <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;output.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 追加写入</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>file <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 使用 fputc 写入一个字符</span>
        <span class="token keyword">char</span> ch <span class="token operator">=</span> <span class="token char">&#39;A&#39;</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> result1 <span class="token operator">=</span> <span class="token function">fputc</span><span class="token punctuation">(</span>ch<span class="token punctuation">,</span> file<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>result1 <span class="token operator">!=</span> <span class="token constant">EOF</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;成功使用 fputc 写入字符 &#39;%c&#39;，返回值：%d。\\n&quot;</span><span class="token punctuation">,</span> ch<span class="token punctuation">,</span> result1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span>
        <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;使用 fputc 写入字符时出现错误。\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 关闭文件</span>
        <span class="token function">fclose</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;打开文件时出现错误。\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>②fputs() 函数用于将字符串写入文件。位于标准库的stdio.h 头文件中</strong><br><br><strong>函数原型：int fputs(const char * str, FILE * stream);</strong><br><br><strong>返回值说明：返回一个整数值，如果写入成功，则返回非负整数（通常是成功写入的字符数，具体取决于编译器），否则返回特殊值 EOF</strong><br><br><strong>参数说明：str是要写入的字符串，通常以 const char * 指针的形式传递。stream是指向输出流的指针，通常是文件指针</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    FILE <span class="token operator">*</span>file <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;output.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;w&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 从头写入</span>
    <span class="token comment">// FILE *file = fopen(&quot;output.txt&quot;, &quot;a&quot;); // 追加写入</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>file <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 使用 fputs 写入一个字符串</span>
        <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>text <span class="token operator">=</span> <span class="token string">&quot;fputs: Hello Shangguigu\\n&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> result2 <span class="token operator">=</span> <span class="token function">fputs</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> file<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>result2 <span class="token operator">!=</span> <span class="token constant">EOF</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;成功使用 fputs 写入字符串，返回值：%d。\\n&quot;</span><span class="token punctuation">,</span> result2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span>
        <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;使用 fputs 写入字符串时出现错误。\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 关闭文件</span>
        <span class="token function">fclose</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;打开文件时出现错误。\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>③fprintf() 函数用于格式化写入文件。位于标准库的stdio.h 头文件中</strong><br><br><strong>函数原型：int fprintf(FILE * stream, const char * format, ...);</strong><br><br><strong>返回值说明：返回一个整数值，如果写入成功，则返回非负整数（通常是成功写入的字符数，具体取决于编译器），否则返回特殊值 EOF</strong><br><br><strong>参数说明：stream是一个指向 FILE 结构的指针，表示要写入的文件流。format是一个格式化字符串，类似于 printf() 函数中的格式化字符串。...表示可变数量的参数，根据格式化字符串中的格式占位符对应</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    FILE <span class="token operator">*</span>file <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;output.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;w&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 从头写入</span>
    <span class="token comment">// FILE *file = fopen(&quot;output.txt&quot;, &quot;a&quot;); // 追加写入</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>file <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 使用 fputs 写入一个字符串</span>
        <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>text <span class="token operator">=</span> <span class="token string">&quot;fprintf: %s is studying in Shangguigu\\n&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">char</span> <span class="token operator">*</span>name <span class="token operator">=</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> result3 <span class="token operator">=</span> <span class="token function">fprintf</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> text<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>result3 <span class="token operator">!=</span> <span class="token constant">EOF</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;成功使用 fprintf 写入字符串，返回值：%d。\\n&quot;</span><span class="token punctuation">,</span> result3<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span>
        <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;使用 fprintf 写入字符串时出现错误。\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 关闭文件</span>
        <span class="token function">fclose</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;打开文件时出现错误。\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>三种打开方式对比参考代码：</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token comment">// FILE *file = fopen(&quot;output.txt&quot;, &quot;w&quot;); // 从头写入</span>
    FILE <span class="token operator">*</span>file <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;output.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 追加写入</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>file <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 使用 fputc 写入一个字符</span>
        <span class="token keyword">char</span> ch <span class="token operator">=</span> <span class="token char">&#39;A&#39;</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> result1 <span class="token operator">=</span> <span class="token function">fputc</span><span class="token punctuation">(</span>ch<span class="token punctuation">,</span> file<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>result1 <span class="token operator">!=</span> <span class="token constant">EOF</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;成功使用 fputc 写入字符 &#39;%c&#39;，返回值：%d。\\n&quot;</span><span class="token punctuation">,</span> ch<span class="token punctuation">,</span> result1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;使用 fputc 写入字符时出现错误。\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 使用 fputs 写入一个字符串</span>
        <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>text <span class="token operator">=</span> <span class="token string">&quot;fputs: Hello Shangguigu\\n&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> result2 <span class="token operator">=</span> <span class="token function">fputs</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> file<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>result2 <span class="token operator">!=</span> <span class="token constant">EOF</span><span class="token punctuation">)</span> 
        <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;成功使用 fputs 写入字符串，返回值：%d。\\n&quot;</span><span class="token punctuation">,</span> result2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;使用 fputs 写入字符串时出现错误。\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 使用 fprintf 写入格式化数据</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>
        <span class="token keyword">float</span> pi <span class="token operator">=</span> <span class="token number">3.14159</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>formattedText <span class="token operator">=</span> <span class="token string">&quot;fprintf: %d %.2f\\n&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> result3 <span class="token operator">=</span> <span class="token function">fprintf</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> formattedText<span class="token punctuation">,</span> num<span class="token punctuation">,</span> pi<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>result3 <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;成功使用 fprintf 写入格式化数据，返回值：%d。\\n&quot;</span><span class="token punctuation">,</span> result3<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;使用 fprintf 写入格式化数据时出现错误。\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token function">fclose</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 关闭文件</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;打开文件时出现错误。\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（4）读取文件</strong></p><blockquote><p><strong>①fgetc() 函数用于从文件中逐字符读取。位于标准库的stdio.h 头文件中</strong><br><br><strong>函数原型：int fgetc(FILE * stream);</strong><br><br><strong>返回值说明：如果读取成功，它返回所读取字符的ASCII码值（0-255之间的整数），如果到达文件结束或发生错误，它返回特殊值 EOF</strong><br><br><strong>参数说明：stream是一个指向 FILE 结构的指针，表示要写入字符的文件流</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    FILE <span class="token operator">*</span>file <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;output.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打开文件以供读取</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>file <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">int</span> ch<span class="token punctuation">;</span> <span class="token comment">// 用于存储读取的字符</span>

        <span class="token comment">// 使用 fgetc 逐字符读取文件</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>ch <span class="token operator">=</span> <span class="token function">fgetc</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token constant">EOF</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%c&quot;</span><span class="token punctuation">,</span> ch<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将字符显示在屏幕上</span>
        <span class="token punctuation">}</span>

        <span class="token function">fclose</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 关闭文件</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Error opening the file.\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>②fgets() 函数从文件中逐行读取，遇到换行符即读取结束，读取的内容中包含换行符。该函数位于标准库的stdio.h 头文件中</strong><br><br><strong>函数原型：char * fgets(char * str, int num, FILE * stream);</strong><br><br><strong>返回值说明：如果读取成功，它返回指向 str 的指针；如果到达文件结束或发生错误，它返回一个空指针（NULL）</strong><br><br><strong>参数说明：str是一个指向字符数组的指针，用于存储读取的字符串。num是要读取的最大字符数（包括字符串终止符 \\0），通常是str的长度。stream是一个文件流，通常是标准输入流（stdin）或其他文件流，用于指定从哪里读取数据</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    FILE <span class="token operator">*</span>file <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;output.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打开文件以供读取</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>file <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">char</span> buffer<span class="token punctuation">[</span><span class="token number">256</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 用于存储读取的字符串</span>

        <span class="token comment">// 使用 fgets 逐行读取文件</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token function">fgets</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">,</span> file<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span> buffer<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将读取的字符串显示在屏幕上</span>
        <span class="token punctuation">}</span>

        <span class="token function">fclose</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 关闭文件</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Error opening the file.\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>③fscanf() 函数用于从文件中解析数据并存储到变量中，使用空白字符（空格、制表符、换行符等）分隔内容赋值给不同的变量。该函数位于标准库的stdio.h 头文件中</strong><br><br><strong>函数原型：int fscanf(FILE * stream, const char * format, ...);</strong><br><br><strong>返回值说明：返回成功读取和分配的参数数目，如果没有成功读取任何参数，它返回 0；如果读取过程中发生错误，它返回特殊值 EOF</strong><br><br><strong>参数说明：stream是一个指向 FILE 结构的指针，表示要从中读取数据的文件流。format是一个格式化字符串，类似于 printf() 函数中的格式化字符串。... 表示可变数量的参数，根据格式化字符串中的格式指定要存储数据的变量</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    FILE <span class="token operator">*</span>file <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;example.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打开文件以供读取</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>file <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 变量</span>
        <span class="token keyword">char</span> msg1<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span> msg2<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span> msg3<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> num<span class="token punctuation">;</span>

        <span class="token comment">// 读取</span>
        <span class="token function">fscanf</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> <span class="token string">&quot;%s %s %s %d&quot;</span><span class="token punctuation">,</span> msg1<span class="token punctuation">,</span> msg2<span class="token punctuation">,</span> msg3<span class="token punctuation">,</span> <span class="token operator">&amp;</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 输出</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s\\n%s\\n%s\\n%d&quot;</span><span class="token punctuation">,</span> msg1<span class="token punctuation">,</span> msg2<span class="token punctuation">,</span> msg3<span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 关闭文件</span>
        <span class="token function">fclose</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;打开文件时出现错误。\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（5）二进制读写文件</strong></p><blockquote><p><strong>fread：用于二进制读，函数原型：size_t fread(void * buffer, size_t size_t, size_t count, FILE * stream)</strong><br><br><strong>说明：buffer是指向要读取的数组中首个对象的指针，size是每个对象的字节大小，count是要读取的对象数，stream是读取来源的输入流</strong></p></blockquote><blockquote><p><strong>fwrite：用于二进制写，函数原型：size_t fwrite(const void * buffer, size_t size_t, size_t count, FILE * stream)</strong></p></blockquote><p><strong>函数的例子：</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">BUFFER_SIZE</span> <span class="token expression"><span class="token number">1024</span></span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    FILE <span class="token operator">*</span>input_file<span class="token punctuation">,</span> <span class="token operator">*</span>output_file<span class="token punctuation">;</span>
    <span class="token keyword">char</span> buffer<span class="token punctuation">[</span>BUFFER_SIZE<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token class-name">size_t</span> bytes_read<span class="token punctuation">;</span>

    <span class="token comment">// 打开输入文件（读取模式）</span>
    input_file <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;input.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;rb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>input_file <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">perror</span><span class="token punctuation">(</span><span class="token string">&quot;Error opening input file&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> EXIT_FAILURE<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 打开输出文件（写入模式）</span>
    output_file <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;output.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;wb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>output_file <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">perror</span><span class="token punctuation">(</span><span class="token string">&quot;Error opening output file&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">fclose</span><span class="token punctuation">(</span>input_file<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> EXIT_FAILURE<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 从输入文件中读取数据，并写入到输出文件中</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>bytes_read <span class="token operator">=</span> <span class="token function">fread</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> BUFFER_SIZE<span class="token punctuation">,</span> input_file<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">fwrite</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> bytes_read<span class="token punctuation">,</span> output_file<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 关闭文件</span>
    <span class="token function">fclose</span><span class="token punctuation">(</span>input_file<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">fclose</span><span class="token punctuation">(</span>output_file<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;File copied successfully.\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（6）文件的随机访问函数</strong></p><blockquote><p><strong>fseek：根据文件指针的位置和偏移量来定位文件指针。函数原型：int fseek(FILE * stream, long offset, int origin)</strong><br><br><strong>说明：stream是指向FILE对象的指针；offset是相对origin的偏移量，以字节为单位；origin表示开始添加偏移offset的位置，取值为：SEEK_SET、SEEK_CUR、SEEK_END</strong><br><br><strong>SEEK_SET：从文件起始位置开始计算偏移量；SEEK_CUR：从文件当前位置开始计算偏移量；SEEK_END：从文件末尾位置开始计算偏移量</strong></p></blockquote><blockquote><p><strong>ftell：返回文件指针相对于起始位置的偏移量。函数原型：long ftell(FILE * stream)</strong></p></blockquote><blockquote><p><strong>rewind：让文件指针的位置返回文件的起始位置。函数原型：void rewind(FILE * stream)</strong></p></blockquote><p><strong>函数的例子：</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    FILE <span class="token operator">*</span>file<span class="token punctuation">;</span>
    <span class="token keyword">long</span> size<span class="token punctuation">;</span>
    <span class="token keyword">int</span> ch<span class="token punctuation">;</span>

    <span class="token comment">// 打开文件</span>
    file <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;example.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>file <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">perror</span><span class="token punctuation">(</span><span class="token string">&quot;Error opening file&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 获取文件大小</span>
    <span class="token function">fseek</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token constant">SEEK_END</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 定位到文件末尾</span>
    size <span class="token operator">=</span> <span class="token function">ftell</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">// 获取当前文件指针位置，即文件大小</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;File size: %ld bytes\\n&quot;</span><span class="token punctuation">,</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 将文件指针重新定位到文件开头</span>
    <span class="token function">rewind</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 逐字符读取并输出文件内容</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;File content:\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>ch <span class="token operator">=</span> <span class="token function">fgetc</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token constant">EOF</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">putchar</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 关闭文件</span>
    <span class="token function">fclose</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（7）文件读取结束判断函数</strong></p><blockquote><p><strong>feof：用于判断文件读取是否结束，这个函数容易被错误使用</strong><br><br><strong>文本文件读取判断结束：判断返回值是否为EOF（getc）、或者NULL（gets）</strong><br><br><strong>二进制文本的读取判断结束：判断返回值是否小于实际要读的个数</strong><br><br><strong>EOF是一个宏，底层定义为：#define EOF (-1)</strong></p></blockquote><blockquote><p><strong>牢记：在文本读取过程中，不能使用feof函数的返回值直接判断文本是否结束，而是当文件读取结束时，判断是读取失败结束还是遇到文件结束</strong></p></blockquote><blockquote><p><strong>比如：fgetc判断是否为EOF、fgets判断返回值是否为NULL</strong></p></blockquote>`,62),u=[l];function r(k,d){return s(),a("div",null,u)}const b=n(i,[["render",r],["__file","第十三章：文件操作.html.vue"]]),g=JSON.parse('{"path":"/%E7%BC%96%E7%A8%8B%E5%AD%A6%E4%B9%A0/1.C%E8%AF%AD%E8%A8%80/%E7%AC%AC%E5%8D%81%E4%B8%89%E7%AB%A0%EF%BC%9A%E6%96%87%E4%BB%B6%E6%93%8D%E4%BD%9C.html","title":"第十三章：文件操作","lang":"zh-CN","frontmatter":{"date":"2024-01-13T00:00:00.000Z","order":14,"description":"第十三章：文件操作 1.文件基本介绍 文件，对我们并不陌生，文件是数据源（保存数据的地方）的一种，比如大家经常使用的word文档，txt文件，excel文件...都是文件。文件最主要的作用就是保存数据，它既可以保存一张图片，也可以保持视频，声音... C程序中，文件中数据的输入/输出操作以“流”的方式进行，可以看做是一种数据的流动 输入流（Input ...","head":[["meta",{"property":"og:url","content":"https://github.com/jimbo-master/%E7%BC%96%E7%A8%8B%E5%AD%A6%E4%B9%A0/1.C%E8%AF%AD%E8%A8%80/%E7%AC%AC%E5%8D%81%E4%B8%89%E7%AB%A0%EF%BC%9A%E6%96%87%E4%BB%B6%E6%93%8D%E4%BD%9C.html"}],["meta",{"property":"og:site_name","content":"JimBoの学习妙妙屋"}],["meta",{"property":"og:title","content":"第十三章：文件操作"}],["meta",{"property":"og:description","content":"第十三章：文件操作 1.文件基本介绍 文件，对我们并不陌生，文件是数据源（保存数据的地方）的一种，比如大家经常使用的word文档，txt文件，excel文件...都是文件。文件最主要的作用就是保存数据，它既可以保存一张图片，也可以保持视频，声音... C程序中，文件中数据的输入/输出操作以“流”的方式进行，可以看做是一种数据的流动 输入流（Input ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"JimBo"}],["meta",{"property":"article:published_time","content":"2024-01-13T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第十三章：文件操作\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-13T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"JimBo\\",\\"url\\":\\"https://github.com/jimbo-master\\"}]}"]]},"headers":[{"level":2,"title":"1.文件基本介绍","slug":"_1-文件基本介绍","link":"#_1-文件基本介绍","children":[]},{"level":2,"title":"2.C语言的输入与输出","slug":"_2-c语言的输入与输出","link":"#_2-c语言的输入与输出","children":[]},{"level":2,"title":"3.C语言的文件读写","slug":"_3-c语言的文件读写","link":"#_3-c语言的文件读写","children":[]}],"git":{},"readingTime":{"minutes":12.74,"words":3821},"filePathRelative":"编程学习/1.C语言/第十三章：文件操作.md","localizedDate":"2024年1月13日","autoDesc":true,"excerpt":"\\n<h2>1.文件基本介绍</h2>\\n<p><strong>文件，对我们并不陌生，文件是数据源（保存数据的地方）的一种，比如大家经常使用的word文档，txt文件，excel文件...都是文件。文件最主要的作用就是保存数据，它既可以保存一张图片，也可以保持视频，声音...</strong></p>\\n<p><strong>C程序中，文件中数据的输入/输出操作以“流”的方式进行，可以看做是一种数据的流动</strong></p>\\n<figure><figcaption></figcaption></figure>\\n<blockquote>\\n<p><strong>输入流（Input Stream）：数据从数据源（例如文件、键盘等）到程序（内存）的传输路径</strong></p>\\n<p><strong>输出流（Output Stream）：数据从程序（内存）到数据源（例如文件、屏幕等）的传输路径</strong></p>\\n</blockquote>"}');export{b as comp,g as data};
