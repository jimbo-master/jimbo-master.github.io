import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as c,c as i,a as n,d as a,w as e,b as l,e as t}from"./app-Dezzdk4T.js";const u="/assets/%E4%BB%80%E4%B9%88%E6%98%AF%E7%BB%93%E6%9E%84%E4%BD%93-n3FnY6mC.png",r="/assets/%E5%8C%BA%E5%88%86%E7%BB%93%E6%9E%84%E4%BD%93-DHlqyEdV.png",d="/assets/%E5%85%B1%E7%94%A8%E4%BD%93%E5%86%85%E5%AD%98%E5%88%86%E6%9E%90-Bu7Xd54P.png",k={},v=l(`<h1 id="第十一章-自定义数据类型" tabindex="-1"><a class="header-anchor" href="#第十一章-自定义数据类型"><span>第十一章：自定义数据类型</span></a></h1><h2 id="_1-枚举" tabindex="-1"><a class="header-anchor" href="#_1-枚举"><span>1.枚举</span></a></h2><p><strong>（1）什么是枚举</strong></p><blockquote><p><strong>枚举（Enumeration）是C语言中的一种用户自定义数据类型，用于定义一组相关的常量。枚举使我们可以为这些常量分配有意义的名字，从而提高代码的可读性和可维护性</strong><br><br><strong>如果我们定义一个变量，用来表示一周中的一天，该变量的值只能从七个有效值中选择，枚举可以帮助我们限制变量的有效值</strong></p></blockquote><p><strong>（2）如何定义枚举</strong></p><blockquote><p><strong>枚举使用 enum 关键字来定义，枚举名称和枚举元素名称都是标识符，定义一个枚举就是定义了一种枚举数据类型，语法如下：</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">enum</span> 枚举名称 
<span class="token punctuation">{</span>
    枚举元素<span class="token number">1</span><span class="token punctuation">,</span>
    枚举元素<span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    枚举元素N
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>枚举元素也称为枚举成员或枚举常量，具有如下特点：</strong></p><blockquote><p><strong>枚举元素的值必须在同一枚举中是唯一的</strong><br><br><strong>枚举元素的值必须是整数类型，通常是int</strong><br><br><strong>如果没有为枚举元素指定值，编译器会自动为它们分配值，从0开始，依次递增</strong><br><br><strong>定义枚举的时候也可以为枚举元素自定义值，需保证唯一性和整型类型</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">// 定义枚举类型,表示星期一到星期天，枚举元素的值自动分配，从0到6。</span>
<span class="token keyword">enum</span> <span class="token class-name">Weekday</span>
<span class="token punctuation">{</span>
    MONDAY<span class="token punctuation">,</span>
    TUESDAY<span class="token punctuation">,</span>
    WEDNESDAY<span class="token punctuation">,</span>
    THURSDAY<span class="token punctuation">,</span>
    FRIDAY<span class="token punctuation">,</span>
    SATURDAY<span class="token punctuation">,</span>
    SUNDAY
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 定义枚举类型，表示北京地区一年四季的平均温度</span>
<span class="token keyword">enum</span> <span class="token class-name">Season</span> 
<span class="token punctuation">{</span>
    SPRING <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">,</span>
    SUMMER <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">,</span>
    AUTUMN <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">,</span>
    WINTER <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">5</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（3）枚举变量</strong><br><strong>什么是枚举变量</strong></p><blockquote><p><strong>定义变量时指定类型是我们所定义的枚举类型，该变量称为枚举变量。枚举变量的值应该是枚举类型中的枚举常量中的一个，不能是其他值</strong></p></blockquote><p><strong>定义枚举变量的语法：</strong></p><blockquote><p><strong>第一种：先定义枚举类型，再定义枚举变量</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">// 定义枚举类型</span>
<span class="token keyword">enum</span> <span class="token class-name">DAY</span> 
<span class="token punctuation">{</span>
    MON <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> 
    TUE<span class="token punctuation">,</span> 
    WED<span class="token punctuation">,</span> 
    THU<span class="token punctuation">,</span> 
    FRI<span class="token punctuation">,</span> 
    SAT<span class="token punctuation">,</span> 
    SUN
<span class="token punctuation">}</span><span class="token punctuation">;</span> 
<span class="token comment">// 使用枚举类型定义枚举变量</span>
<span class="token keyword">enum</span> <span class="token class-name">DAY</span> day<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>第二种：定义枚举类型的同时声明枚举变量</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">enum</span> <span class="token class-name">DAY</span> 
<span class="token punctuation">{</span>
    MON <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> 
    TUE<span class="token punctuation">,</span> 
    WED<span class="token punctuation">,</span> 
    THU<span class="token punctuation">,</span> 
    FRI<span class="token punctuation">,</span> 
    SAT<span class="token punctuation">,</span> 
    SUN
<span class="token punctuation">}</span> day<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>第三种：定义枚举类型的同时声明枚举变量，且省略枚举名称</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">enum</span> 
<span class="token punctuation">{</span>
    MON <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> 
    TUE<span class="token punctuation">,</span> 
    WED<span class="token punctuation">,</span> 
    THU<span class="token punctuation">,</span> 
    FRI<span class="token punctuation">,</span> 
    SAT<span class="token punctuation">,</span> 
    SUN
<span class="token punctuation">}</span> day<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_2-结构体" tabindex="-1"><a class="header-anchor" href="#_2-结构体"><span>2.结构体</span></a></h2><p><strong>（1）什么是结构体</strong></p><blockquote><p><strong>C语言提供了struct关键字，允许自定义复合数据类型，将不同类型的值组合在一起，这种类型称为结构体（structure）类型</strong><br><br><strong>C语言没有其他语言的对象（object）和类（class）的概念，struct 结构很大程度上提供了对象和类的功能</strong></p></blockquote><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>（2）声明结构体</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>struct 结构体名
{ 
    数据类型1 成员名1;   
    数据类型2 成员名2; 
    ……
    数据类型n 成员名n;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">// 定义结构体：学生</span>
<span class="token keyword">struct</span> <span class="token class-name">Student</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> id<span class="token punctuation">;</span>           <span class="token comment">// 学号</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>          <span class="token comment">// 年龄</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">;</span>       <span class="token comment">// 姓名</span>
    <span class="token keyword">char</span> gender<span class="token punctuation">;</span>      <span class="token comment">// 性别</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>address<span class="token punctuation">;</span>    <span class="token comment">// 家庭住址</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（3）声明结构体变量</strong><br><strong>方式一：先定义结构体，然后再创建结构体变量</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">// 定义结构体</span>
<span class="token keyword">struct</span> <span class="token class-name">Student</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> id<span class="token punctuation">;</span>           <span class="token comment">// 学号</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>          <span class="token comment">// 年龄</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">;</span>       <span class="token comment">// 姓名</span>
    <span class="token keyword">char</span> gender<span class="token punctuation">;</span>      <span class="token comment">// 性别</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>address<span class="token punctuation">;</span>    <span class="token comment">// 家庭住址</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 定义结构体变量</span>
<span class="token keyword">struct</span> <span class="token class-name">Student</span> stu1<span class="token punctuation">,</span>stu2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方式二：在定义结构体的同时定义结构体变量</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">// 定义结构体的同时定义 stu1和 stu2 两个变量</span>
<span class="token keyword">struct</span> <span class="token class-name">Student</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> id<span class="token punctuation">;</span>           <span class="token comment">// 学号</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>          <span class="token comment">// 年龄</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">;</span>       <span class="token comment">// 姓名</span>
    <span class="token keyword">char</span> gender<span class="token punctuation">;</span>      <span class="token comment">// 性别</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>address<span class="token punctuation">;</span>    <span class="token comment">// 家庭住址</span>
<span class="token punctuation">}</span> stu1<span class="token punctuation">,</span> stu2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方式三：在定义时也可以不给出结构体名</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">// 不给出结构体的名字</span>
<span class="token keyword">struct</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> id<span class="token punctuation">;</span>           <span class="token comment">// 学号</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>          <span class="token comment">// 年龄</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">;</span>       <span class="token comment">// 姓名</span>
    <span class="token keyword">char</span> gender<span class="token punctuation">;</span>      <span class="token comment">// 性别</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>address<span class="token punctuation">;</span>    <span class="token comment">// 家庭住址</span>
<span class="token punctuation">}</span> stu1<span class="token punctuation">,</span> stu2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：在C语言中，结构体（struct）和结构体变量是两个不同的概念</strong></p><blockquote><p><strong>结构体是一种自定义的数据类型，像一种模板，定义了数据的格式</strong><br><br><strong>结构体变量是根据结构体类型创建的变量，代表了一个具体的对象，用于存储数据</strong></p></blockquote><p><strong>（4）成员的获取和赋值</strong></p><blockquote><p><strong>成员是结构体的一个组成部分，一般是基本数据类型、也可以是数组、指针、结构体等。结构体的成员也可以称为属性</strong><br><br><strong>结构体和数组类似，也是一组数据的集合，结构体使用点号 . 获取单个成员，可以进行赋值和取值</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 声明结构体以及结构体变量,并给结构体成员赋值</span>
    <span class="token keyword">struct</span> <span class="token class-name">Student</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">int</span> id<span class="token punctuation">;</span>        <span class="token comment">// 学号</span>
        <span class="token keyword">int</span> age<span class="token punctuation">;</span>       <span class="token comment">// 年龄</span>
        <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">;</span>    <span class="token comment">// 姓名</span>
        <span class="token keyword">char</span> gender<span class="token punctuation">;</span>   <span class="token comment">// 性别</span>
        <span class="token keyword">char</span> <span class="token operator">*</span>address<span class="token punctuation">;</span> <span class="token comment">// 家庭住址</span>
    <span class="token punctuation">}</span> stu1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1002</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token string">&quot;Jim Liu&quot;</span><span class="token punctuation">,</span> <span class="token char">&#39;f&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;Songjiang Shanghai&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> stu2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1003</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token string">&quot;Tom Chen&quot;</span><span class="token punctuation">,</span> <span class="token char">&#39;m&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;Baoan Shenzhen&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 获取成员的值</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;id: %d \\n&quot;</span><span class="token punctuation">,</span> stu1<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;name: %s \\n&quot;</span><span class="token punctuation">,</span> stu1<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;age: %d \\n&quot;</span><span class="token punctuation">,</span> stu1<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;gender: %c \\n&quot;</span><span class="token punctuation">,</span> stu1<span class="token punctuation">.</span>gender<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;address: %s \\n \\n&quot;</span><span class="token punctuation">,</span> stu1<span class="token punctuation">.</span>address<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;id: %d \\n&quot;</span><span class="token punctuation">,</span> stu2<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;name: %s \\n&quot;</span><span class="token punctuation">,</span> stu2<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;age: %d \\n&quot;</span><span class="token punctuation">,</span> stu2<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;gender: %c \\n&quot;</span><span class="token punctuation">,</span> stu2<span class="token punctuation">.</span>gender<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;address: %s \\n&quot;</span><span class="token punctuation">,</span> stu2<span class="token punctuation">.</span>address<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token comment">/*
        id: 1002 
        name: Jim Liu
        age: 19
        gender: f
        address: Songjiang Shanghai

        id: 1003
        name: Tom Chen
        age: 16
        gender: m
        address: Baoan Shenzhen
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（5）结构体指针</strong></p><p><strong>①结构体指针介绍</strong>：</p><blockquote><p><strong>结构体指针是指向结构体的指针变量，允许间接访问和操作结构体的成员，它提供了一种方便的方式来处理结构体数据</strong></p></blockquote><blockquote><p><strong>声明结构体指针的语法格式：struct 结构体名 * 结构体指针变量名;</strong></p></blockquote><p><strong>②声明结构体指针</strong></p><blockquote><p><strong>通常需要先定义一个结构体变量，再创建结构体指针，并取结构体变量的地址作为结构体指针的值</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">// 声明结构体</span>
<span class="token keyword">struct</span> <span class="token class-name">Student</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> id<span class="token punctuation">;</span>        <span class="token comment">// 学号</span>
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>       <span class="token comment">// 年龄</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">;</span>    <span class="token comment">// 姓名</span>
    <span class="token keyword">char</span> gender<span class="token punctuation">;</span>   <span class="token comment">// 性别</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>address<span class="token punctuation">;</span> <span class="token comment">// 家庭住址</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 声明结构体变量</span>
<span class="token keyword">struct</span> <span class="token class-name">Student</span> stu<span class="token punctuation">;</span>
<span class="token comment">// 声明结构体指针并初始化</span>
<span class="token keyword">struct</span> <span class="token class-name">Student</span> <span class="token operator">*</span>ptr <span class="token operator">=</span> <span class="token operator">&amp;</span>stu<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>③通过结构体指针访问成员</strong></p><blockquote><p><strong>结构体指针可以通过“-&gt;” 操作符访问结构体的成员</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>   
    <span class="token comment">// 结构体</span>
    <span class="token keyword">struct</span> <span class="token class-name">Student</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">;</span>
        <span class="token keyword">int</span> age<span class="token punctuation">;</span>
        <span class="token keyword">char</span> gender<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 结构体变量</span>
    <span class="token keyword">struct</span> <span class="token class-name">Student</span> s <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token char">&#39;M&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// 通过结构体变量访问成员</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;name=%s,age=%d,gender=%c \\n&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span>name<span class="token punctuation">,</span> s<span class="token punctuation">.</span>age<span class="token punctuation">,</span> s<span class="token punctuation">.</span>gender<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 声明结构体指针</span>
    <span class="token keyword">struct</span> <span class="token class-name">Student</span> <span class="token operator">*</span>ps <span class="token operator">=</span> <span class="token operator">&amp;</span>s<span class="token punctuation">;</span>

    <span class="token comment">// 结构体指针通过解引用访问成员</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;name=%s,age=%d,gender=%c\\n&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token operator">*</span>ps<span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token operator">*</span>ps<span class="token punctuation">)</span><span class="token punctuation">.</span>age<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token operator">*</span>ps<span class="token punctuation">)</span><span class="token punctuation">.</span>gender<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 结构体指针使用-&gt;访问成员</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;name=%s,age=%d,gender=%c\\n&quot;</span><span class="token punctuation">,</span> ps<span class="token operator">-&gt;</span>name<span class="token punctuation">,</span> ps<span class="token operator">-&gt;</span>age<span class="token punctuation">,</span> ps<span class="token operator">-&gt;</span>gender<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token comment">/*
        name=张三,age=20,gender=M 
        name=张三,age=20,gender=M
        name=张三,age=20,gender=M
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结：如果指针变量p指向一个结构体变量stu，以下3种用法等价</strong></p><blockquote><p><strong>指针用-&gt;，变量用.</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code>stu<span class="token punctuation">.</span>成员名

<span class="token punctuation">(</span><span class="token operator">*</span>p<span class="token punctuation">)</span><span class="token punctuation">.</span>成员名

p<span class="token operator">-&gt;</span>成员名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（6）区分结构体、结构体变量、结构体成员</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">int</span> num1<span class="token punctuation">;</span>        <span class="token comment">// int 是数据类型, 而num1是一个具体的int变量</span>
<span class="token keyword">struct</span> <span class="token class-name">Car</span> car1<span class="token punctuation">;</span> <span class="token comment">// Car 是结构体数据类型，而car1是一个Car变量</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h2 id="_3-共用体" tabindex="-1"><a class="header-anchor" href="#_3-共用体"><span>3.共用体</span></a></h2><p><strong>（1）什么是共用体</strong></p><blockquote><p><strong>有时需要一种数据结构，不同的场合表示不同的数据类型。比如，如果只用一种数据结构表示学生的“成绩”，这种结构就需要有时是整数（80、90），有时是字符（&#39;A&#39;、&#39;B&#39;），有时是浮点数（80.5、60.5）</strong><br><br><strong>C语言提供了共用体类型（Union 结构），用来自定义可以灵活变更的数据结构。它内部可以包含各种属性，但同一时间只能有一个属性，因为所有属性都保存在同一个内存地址，后面写入的属性会覆盖前面的属性。这样做的最大好处是节省空间</strong></p></blockquote><p><strong>共用体”与“结构体”的定义形式相似，但它们的含义是不同的</strong></p><blockquote><p><strong>结构体变量所占内存长度，可以认为是各成员占的内存长度的叠加；每个成员分别占有其自己的内存单元</strong><br><br><strong>共用体变量所占的内存长度等于最长的成员的长度；几个成员共用一个内存区</strong></p></blockquote><p><strong>（2）声明共用体</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>union 共用体类型名称
{
    数据类型 成员名1;
    数据类型 成员名2;
    …
    数据类型 成员名n;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">//union命令定义了一个包含三个属性的数据类型data。虽然包含三个属性，但是同一时间只能取到一个属性。最后赋值的属性，就是可以取到值的那个属性</span>
<span class="token keyword">union</span> data
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> m<span class="token punctuation">;</span>
    <span class="token keyword">float</span> x<span class="token punctuation">;</span>
    <span class="token keyword">char</span> c<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（3）声明共用体变量</strong><br><strong>方式一：先定义共用体类型，再定义共用体变量</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">// 声明共用体类型</span>
<span class="token keyword">union</span> data 
<span class="token punctuation">{</span>
    <span class="token keyword">short</span> m<span class="token punctuation">;</span>
    <span class="token keyword">float</span> x<span class="token punctuation">;</span>
    <span class="token keyword">char</span> c<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 声明共用体变量</span>
<span class="token keyword">union</span> data a<span class="token punctuation">,</span> b<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方式二：定义共用体类型的同时定义共用体变量</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">union</span> data 
<span class="token punctuation">{</span>
    <span class="token keyword">short</span> m<span class="token punctuation">;</span>
    <span class="token keyword">float</span> x<span class="token punctuation">;</span>
    <span class="token keyword">char</span> c<span class="token punctuation">;</span>
<span class="token punctuation">}</span> a<span class="token punctuation">,</span> b<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方式三：在定义时也可以不给出共用体名</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">union</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">short</span> m<span class="token punctuation">;</span>
    <span class="token keyword">float</span> x<span class="token punctuation">;</span>
    <span class="token keyword">char</span> c<span class="token punctuation">;</span>
<span class="token punctuation">}</span> a<span class="token punctuation">,</span> b<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（4）共用体内存分析</strong></p><blockquote><p><strong>由上面方式二中共用体变量a为例，它由3个成员组成，分别是m、x和c，系统会按照最长的成员为它分配内存，由于成员x的长度最长，它占4个字节，所以共用体变量a的内存空间也为4个字节</strong></p></blockquote><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>（5）成员的获取和赋值</strong></p><blockquote><p><strong>同结构体一样，共用体也使用点号.获取单个成员，可以进行赋值和取值</strong></p></blockquote><p><strong>方式一：声明共用体变量，再赋值</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">union</span> data a<span class="token punctuation">;</span>
a<span class="token punctuation">.</span>c <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方式二：声明共用体变量的同时，给任一成员赋值</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">union</span> data a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">.</span>c <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>方式三：声明共用体变量的同时，给首成员赋值</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">//方式三不指定成员名，所以只能为第一个成员进行赋值</span>
<span class="token keyword">union</span> data a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_4-typedef" tabindex="-1"><a class="header-anchor" href="#_4-typedef"><span>4.typedef</span></a></h2><p><strong>（1）typedef介绍</strong></p><blockquote><p><strong>C语言允许为一个数据类型起一个新的别名，就像给人起“绰号”一样</strong></p></blockquote><p><strong>起别名的目的不是为了提高程序运行效率，而是为了编码方便。例如，有一个结构体的名字是 student，定义一个结构体变量stu1，代码如下：</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">student</span> stu1<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>struct 看起来就是多余的，但不写又会报错。如果为 struct student起了一个别名 Student，书写起来就简单了：</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code>Student stu1<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>这种写法更加简练，意义也非常明确，不管是在标准头文件中还是以后的编程实践中，都会大量使用这种别名</strong></p></blockquote><p><strong>（2）typedef的应用场景</strong></p><p><strong>①为某个基本类型起别名</strong></p><blockquote><p><strong>typedef 命令用来为某个类型起别名</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">typedef</span> 类型名 别名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>习惯上，常把用typedef声明的类型名的第1个字母用大写表示，以便与系统提供的标准类型标识符相区别</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">int</span> Integer<span class="token punctuation">;</span>  <span class="token comment">//用Integer作为int类型别名，作用与int相同</span>
Integer a<span class="token punctuation">,</span> b<span class="token punctuation">;</span>
a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">unsigned</span> <span class="token keyword">char</span> Byte<span class="token punctuation">;</span>  <span class="token comment">//为类型 unsign char 起别名 Byte</span>
Byte c <span class="token operator">=</span> <span class="token char">&#39;z&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意：使用 typedef 可以为基本类型一次起多个别名</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">int</span> chocolate<span class="token punctuation">,</span> doughnut<span class="token punctuation">,</span> mushroom<span class="token punctuation">;</span> <span class="token comment">//一次性为 int 类型起了三个别名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>②为结构体、共用体起别名</strong></p><blockquote><p><strong>为 struct、union等命令定义的复杂数据结构创建别名，从而便于引用</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">//下例中，自定义数据类型时，同时使用typedef命令，为struct Treenode起了一个别名 Tree</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">Treenode</span>
<span class="token punctuation">{</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">;</span>
    <span class="token keyword">int</span> legs<span class="token punctuation">;</span>
    <span class="token keyword">int</span> speed<span class="token punctuation">;</span>
<span class="token punctuation">}</span> Tree<span class="token punctuation">;</span>

<span class="token comment">//下例中，union命令定义了一个包含三个属性的数据类型，typedef 命令为它起别名为Quantity</span>
<span class="token keyword">typedef</span> <span class="token keyword">union</span>
<span class="token punctuation">{</span>
    <span class="token keyword">short</span> count<span class="token punctuation">;</span>
    <span class="token keyword">float</span> weight<span class="token punctuation">;</span>
    <span class="token keyword">float</span> volume<span class="token punctuation">;</span>
<span class="token punctuation">}</span> Quantity<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>③为指针取别名</strong></p><blockquote><p><strong>typedef可以为指针起别名</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">//下例中，intptr是int*的别名。不过，使用的时候要小心，这样不容易看出来，变量 x 是一个指针类型</span>
<span class="token keyword">typedef</span> <span class="token keyword">int</span> <span class="token operator">*</span>intptr<span class="token punctuation">;</span>
<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
intptr x <span class="token operator">=</span> <span class="token operator">&amp;</span>a<span class="token punctuation">;</span>

<span class="token comment">//为字符指针起别名为 String，以后使用String声明变量时，就可以轻易辨别该变量是字符串</span>
<span class="token keyword">typedef</span> <span class="token keyword">char</span> <span class="token operator">*</span>String<span class="token punctuation">;</span>
<span class="token keyword">char</span> <span class="token operator">*</span>str1 <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>  <span class="token comment">// 之前的写法</span>
String str2 <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 现在的写法</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>④为数组类型起别名</strong></p><blockquote><p><strong>typedef也可以用来为数组类型起别名</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">// 举例1 给int[5] 取别名 fiveInts</span>
<span class="token keyword">typedef</span> <span class="token keyword">int</span> fiveInts<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  
fiveInts x <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 相当于 int x[5] = {11, 22, 33, 44, 55};</span>

<span class="token comment">// 举例2 给 int[100] 取别名 Num</span>
<span class="token keyword">typedef</span> <span class="token keyword">int</span> Num<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 声明Num为整型数组类型名</span>
Num a<span class="token punctuation">;</span>                <span class="token comment">// 相当于 int a[100];</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>使用 typedef 为数组指针取别名</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">// 为 int (*)[5] 取别名为 IntArrayPointer</span>
<span class="token keyword">typedef</span> <span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>IntArrayPointer<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  
<span class="token comment">// 定义数组</span>
<span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 使用别名定义数组指针</span>
IntArrayPointer ptr <span class="token operator">=</span> <span class="token operator">&amp;</span>arr<span class="token punctuation">;</span>  <span class="token comment">// 使用别名指向数组</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_5-位段" tabindex="-1"><a class="header-anchor" href="#_5-位段"><span>5.位段</span></a></h2><blockquote><p><strong>位段概念：位段是一种以位为单位定义结构体或联合体成员变量所占的空间</strong><br><br><strong>位段结构：含有位段的结构体或联合体成为位段结构</strong><br><br><strong>位段优点：既能节约空间，又方便使用</strong><br><br><strong>位段形式：变量类型 变量名 : 位段数。比如：int a:3;表示使用3bit存储a变量</strong><br><br><strong>位段用途：用于网络发包时节约空间</strong></p></blockquote><hr><h2 id="_6-内存对齐规则" tabindex="-1"><a class="header-anchor" href="#_6-内存对齐规则"><span>6.内存对齐规则</span></a></h2>`,113),m=n("br",null,null,-1),b=n("br",null,null,-1),g=n("br",null,null,-1),y=n("br",null,null,-1);function h(w,q){const s=o("font");return c(),i("div",null,[v,n("p",null,[n("strong",null,[a(s,{color:"red"},{default:e(()=>[t("结构体第一个成员，存放在结构体变量开始位置的0偏移处，从第二个变量开始，都要对齐到对齐数的整数倍地址处")]),_:1})])]),n("p",null,[n("strong",null,[a(s,{color:"red"},{default:e(()=>[t("windows和Linux下默认对齐数：windows默认对齐数为8，linux没有默认对齐数")]),_:1})])]),n("blockquote",null,[n("p",null,[n("strong",null,[a(s,{color:"red"},{default:e(()=>[t("对齐数：成员自身大小与默认对齐数的较小值")]),_:1})]),m,b,n("strong",null,[a(s,{color:"red"},{default:e(()=>[t("最大对齐数：所有成员对齐数的最大值")]),_:1})]),g,y,n("strong",null,[a(s,{color:"red"},{default:e(()=>[t("结构体总大小：最大对齐数的整数倍")]),_:1})])])]),n("p",null,[n("strong",null,[a(s,{color:"red"},{default:e(()=>[t("内存对齐意义：拿空间换时间，解决平台问题和性能问题")]),_:1})])])])}const _=p(k,[["render",h],["__file","第十一章：自定义数据类型.html.vue"]]),x=JSON.parse('{"path":"/%E7%BC%96%E7%A8%8B%E5%AD%A6%E4%B9%A0/1.C%E8%AF%AD%E8%A8%80/%E7%AC%AC%E5%8D%81%E4%B8%80%E7%AB%A0%EF%BC%9A%E8%87%AA%E5%AE%9A%E4%B9%89%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html","title":"第十一章：自定义数据类型","lang":"zh-CN","frontmatter":{"date":"2024-01-11T00:00:00.000Z","order":12,"description":"第十一章：自定义数据类型 1.枚举 （1）什么是枚举 枚举（Enumeration）是C语言中的一种用户自定义数据类型，用于定义一组相关的常量。枚举使我们可以为这些常量分配有意义的名字，从而提高代码的可读性和可维护性 如果我们定义一个变量，用来表示一周中的一天，该变量的值只能从七个有效值中选择，枚举可以帮助我们限制变量的有效值 （2）如何定义枚举 枚举...","head":[["meta",{"property":"og:url","content":"https://github.com/jimbo-master/%E7%BC%96%E7%A8%8B%E5%AD%A6%E4%B9%A0/1.C%E8%AF%AD%E8%A8%80/%E7%AC%AC%E5%8D%81%E4%B8%80%E7%AB%A0%EF%BC%9A%E8%87%AA%E5%AE%9A%E4%B9%89%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"JimBoの学习妙妙屋"}],["meta",{"property":"og:title","content":"第十一章：自定义数据类型"}],["meta",{"property":"og:description","content":"第十一章：自定义数据类型 1.枚举 （1）什么是枚举 枚举（Enumeration）是C语言中的一种用户自定义数据类型，用于定义一组相关的常量。枚举使我们可以为这些常量分配有意义的名字，从而提高代码的可读性和可维护性 如果我们定义一个变量，用来表示一周中的一天，该变量的值只能从七个有效值中选择，枚举可以帮助我们限制变量的有效值 （2）如何定义枚举 枚举..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"JimBo"}],["meta",{"property":"article:published_time","content":"2024-01-11T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第十一章：自定义数据类型\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-11T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"JimBo\\",\\"url\\":\\"https://github.com/jimbo-master\\"}]}"]]},"headers":[{"level":2,"title":"1.枚举","slug":"_1-枚举","link":"#_1-枚举","children":[]},{"level":2,"title":"2.结构体","slug":"_2-结构体","link":"#_2-结构体","children":[]},{"level":2,"title":"3.共用体","slug":"_3-共用体","link":"#_3-共用体","children":[]},{"level":2,"title":"4.typedef","slug":"_4-typedef","link":"#_4-typedef","children":[]},{"level":2,"title":"5.位段","slug":"_5-位段","link":"#_5-位段","children":[]},{"level":2,"title":"6.内存对齐规则","slug":"_6-内存对齐规则","link":"#_6-内存对齐规则","children":[]}],"git":{},"readingTime":{"minutes":12.07,"words":3621},"filePathRelative":"编程学习/1.C语言/第十一章：自定义数据类型.md","localizedDate":"2024年1月11日","autoDesc":true,"excerpt":"\\n<h2>1.枚举</h2>\\n<p><strong>（1）什么是枚举</strong></p>\\n<blockquote>\\n<p><strong>枚举（Enumeration）是C语言中的一种用户自定义数据类型，用于定义一组相关的常量。枚举使我们可以为这些常量分配有意义的名字，从而提高代码的可读性和可维护性</strong><br><br>\\n<strong>如果我们定义一个变量，用来表示一周中的一天，该变量的值只能从七个有效值中选择，枚举可以帮助我们限制变量的有效值</strong></p>\\n</blockquote>\\n<p><strong>（2）如何定义枚举</strong></p>\\n<blockquote>\\n<p><strong>枚举使用 enum 关键字来定义，枚举名称和枚举元素名称都是标识符，定义一个枚举就是定义了一种枚举数据类型，语法如下：</strong></p>\\n</blockquote>"}');export{_ as comp,x as data};
