import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as t}from"./app-Dezzdk4T.js";const p="/assets/%E7%95%8C%E9%9D%A2%E5%9B%BE-Cpe3Msd3.png",o={},e=t('<h1 id="练手项目-通讯录管理系统" tabindex="-1"><a class="header-anchor" href="#练手项目-通讯录管理系统"><span>练手项目：通讯录管理系统</span></a></h1><h2 id="_1-项目效果" tabindex="-1"><a class="header-anchor" href="#_1-项目效果"><span>1.项目效果</span></a></h2><figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h2 id="_2-项目要求" tabindex="-1"><a class="header-anchor" href="#_2-项目要求"><span>2.项目要求</span></a></h2><p><strong>技术要求：包含C语言所有常用基础知识和文件系统</strong></p><p><strong>通讯录系统功能：<br> 1.添加联系人：向通讯录中添加联系人，信息包括（姓名、性别、年龄、联系方式、住址）最多记录1000人<br> 2.删除联系人：按照用户需求进行删除指定联系人<br> 3.修改联系人：按照用户需求重新修改指定联系人<br> 4.查询联系人：按照用户需求查看指定联系人信息<br> 5.显示通讯录：显示通讯录中所有联系人信息<br> 6.排序通讯录：按照用户需求排序联系人<br> 0.退出系统： 退出当前使用的通讯录</strong></p><hr><h2 id="_3-项目代码" tabindex="-1"><a class="header-anchor" href="#_3-项目代码"><span>3.项目代码</span></a></h2><h3 id="_3-1-contact-h头文件" tabindex="-1"><a class="header-anchor" href="#_3-1-contact-h头文件"><span>3.1 contact.h头文件</span></a></h3><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">//  Author：JimBo (1353429820@qq.com)</span>
<span class="token comment">//  Filename：Contact.h</span>
<span class="token comment">//  Date：2024/1/14</span>
<span class="token comment">//  Description：implement basic functions of the address book</span>
<span class="token comment">//  Copyrights（c）JimBo. All rights reserved</span>

<span class="token comment">//头文件</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">once</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;string.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;assert.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;errno.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;unistd.h&gt;</span></span>

<span class="token comment">//通讯录结构体成员最大值宏</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MAX_NAME</span> <span class="token expression"><span class="token number">16</span>  </span><span class="token comment">//名字     特殊情况：这人名字有8位(1个汉字=2字节)</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MAX_SEX</span> <span class="token expression"><span class="token number">5</span>    </span><span class="token comment">//性别     特殊情况：填的未知</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MAX_TEL</span> <span class="token expression"><span class="token number">16</span>   </span><span class="token comment">//电话号码 特殊情况：加地域号4位</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MAX_ADD</span> <span class="token expression"><span class="token number">50</span>   </span><span class="token comment">//地址     特殊情况：地址有25位</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MAX_ARR</span> <span class="token expression"><span class="token number">16</span>   </span><span class="token comment">//联系人地址</span></span>

<span class="token comment">//通讯录功能界面选择</span>
<span class="token keyword">enum</span> <span class="token class-name">Option</span>
<span class="token punctuation">{</span>
	EXIT<span class="token punctuation">,</span>       <span class="token comment">//退出通讯录 0</span>
	ADD<span class="token punctuation">,</span>        <span class="token comment">//添加联系人 1</span>
	DEL<span class="token punctuation">,</span>        <span class="token comment">//删除联系人 2</span>
	MODIFY<span class="token punctuation">,</span>     <span class="token comment">//修改联系人 3</span>
	SEARCH<span class="token punctuation">,</span>     <span class="token comment">//查找联系人 4</span>
	SORT<span class="token punctuation">,</span>       <span class="token comment">//排序通讯录 5</span>
	PRINT       <span class="token comment">//显示通讯录 6</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//通讯录联系人基本信息结构体</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">ContactInfo</span>
<span class="token punctuation">{</span>
	<span class="token keyword">char</span> name<span class="token punctuation">[</span>MAX_NAME<span class="token punctuation">]</span><span class="token punctuation">;</span>    <span class="token comment">//联系人姓名</span>
	<span class="token keyword">int</span> age<span class="token punctuation">;</span>                <span class="token comment">//联系人年龄</span>
	<span class="token keyword">char</span> sex<span class="token punctuation">[</span>MAX_SEX<span class="token punctuation">]</span><span class="token punctuation">;</span>      <span class="token comment">//联系人性别</span>
	<span class="token keyword">char</span> telephone<span class="token punctuation">[</span>MAX_TEL<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//联系人电话</span>
	<span class="token keyword">char</span> address<span class="token punctuation">[</span>MAX_ADD<span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">//联系人地址</span>
<span class="token punctuation">}</span>ContactInfo<span class="token punctuation">;</span>

<span class="token comment">//通讯录结构体</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">Contact</span>
<span class="token punctuation">{</span>
	ContactInfo<span class="token operator">*</span> data<span class="token punctuation">;</span>  <span class="token comment">//联系人信息结构体</span>
	<span class="token keyword">int</span> size<span class="token punctuation">;</span>           <span class="token comment">//通讯录大小</span>
	<span class="token keyword">int</span> capacity<span class="token punctuation">;</span>       <span class="token comment">//通讯录容量</span>
<span class="token punctuation">}</span>Contact<span class="token punctuation">;</span>


<span class="token comment">//通讯录功能函数</span>

<span class="token comment">/*
 *  函数名：ContactSave
 *  函数功能：保存通讯录文件
 *  参数说明：psl指向Contact结构体的指针
 *  返回值：无
*/</span>
<span class="token keyword">void</span> <span class="token function">ContactSave</span><span class="token punctuation">(</span>Contact<span class="token operator">*</span> psl<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">/*
 *  函数名：ContactLoad
 *  函数功能：加载通讯录文件
 *  参数说明：psl指向Contact结构体的指针
 *  返回值：无
*/</span>
<span class="token keyword">void</span> <span class="token function">ContactLoad</span><span class="token punctuation">(</span>Contact<span class="token operator">*</span> psl<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">/*
 *  函数名：ContactInit
 *  函数功能：初始化通讯录文件
 *  参数说明：psl指向Contact结构体的指针
 *  返回值：无
*/</span>
<span class="token keyword">void</span> <span class="token function">ContactInit</span><span class="token punctuation">(</span>Contact<span class="token operator">*</span> psl<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">/*
 *  函数名：ContactDestroy
 *  函数功能：销毁通讯录文件
 *  参数说明：psl指向Contact结构体的指针
 *  返回值：无
*/</span>
<span class="token keyword">void</span> <span class="token function">ContactDestroy</span><span class="token punctuation">(</span>Contact<span class="token operator">*</span> psl<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">/*
 *  函数名：ContactCheck
 *  函数功能：检查通讯录容量
 *  参数说明：psl指向Contact结构体的指针
 *  返回值：无
*/</span>
<span class="token keyword">void</span> <span class="token function">ContactCheck</span><span class="token punctuation">(</span>Contact<span class="token operator">*</span> psl<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">/*
 *  函数名：ContactAdd
 *  函数功能：添加联系人
 *  参数说明：psl指向Contact结构体的指针
 *  返回值：无
*/</span>
<span class="token keyword">void</span> <span class="token function">ContactAdd</span><span class="token punctuation">(</span>Contact<span class="token operator">*</span> psl<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">/*
 *  函数名：ContactDelete
 *  函数功能：删除联系人
 *  参数说明：psl指向Contact结构体的指针
 *  返回值：无
*/</span>
<span class="token keyword">void</span> <span class="token function">ContactDelete</span><span class="token punctuation">(</span>Contact<span class="token operator">*</span> psl<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">/*
 *  函数名：ContactModify
 *  函数功能：修改联系人
 *  参数说明：psl指向Contact结构体的指针
 *  返回值：无
*/</span>
<span class="token keyword">void</span> <span class="token function">ContactModify</span><span class="token punctuation">(</span>Contact<span class="token operator">*</span> psl<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">/*
 *  函数名：ContactFind
 *  函数功能：查询联系人的下标
 *  参数说明：psl指向Contact结构体的指针、name存储要查找的联系人名
 *  返回值：int
*/</span>
<span class="token keyword">int</span> <span class="token function">ContactFind</span><span class="token punctuation">(</span>Contact<span class="token operator">*</span> psl<span class="token punctuation">,</span><span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*
 *  函数名：ContactSearch
 *  函数功能：查询联系人
 *  参数说明：psl指向Contact结构体的指针
 *  返回值：无
*/</span>
<span class="token keyword">void</span> <span class="token function">ContactSearch</span><span class="token punctuation">(</span>Contact<span class="token operator">*</span> psl<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">/*
 *  函数名：ContactSort
 *  函数功能：升序排序联系人
 *  参数说明：psl指向Contact结构体的指针
 *  返回值：无
*/</span>
<span class="token keyword">void</span> <span class="token function">ContactSort</span><span class="token punctuation">(</span>Contact<span class="token operator">*</span> psl<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">/*
 *  函数名：ContactPrint
 *  函数功能：显示全部通讯录联系人
 *  参数说明：psl指向Contact结构体的指针
 *  返回值：无
*/</span>
<span class="token keyword">void</span> <span class="token function">ContactPrint</span><span class="token punctuation">(</span><span class="token keyword">const</span> Contact<span class="token operator">*</span> psl<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">/*
 *  函数名：ContactMenu
 *  函数功能：显示通讯录功能界面
 *  参数说明：无
 *  返回值：无
*/</span>
<span class="token keyword">void</span> <span class="token function">ContactMenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">/*
 *  函数名：ContactMenu
 *  函数功能：实现姓氏升序排序
 *  参数说明：psl指向Contact结构体的指针
 *  返回值：无
*/</span>
<span class="token keyword">void</span> <span class="token function">ContactSortUp</span><span class="token punctuation">(</span>Contact<span class="token operator">*</span> psl<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">//函数功能实现</span>
<span class="token keyword">void</span> <span class="token function">ContactSave</span><span class="token punctuation">(</span>Contact<span class="token operator">*</span> psl<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">//打开文件</span>
	FILE<span class="token operator">*</span> pf<span class="token operator">=</span><span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;contact.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;wb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//wb：二进制可写</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>pf<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;保存文件失败：%s\\n&quot;</span><span class="token punctuation">,</span><span class="token function">strerror</span><span class="token punctuation">(</span>errno<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//写文件</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>psl<span class="token operator">-&gt;</span>size<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">fwrite</span><span class="token punctuation">(</span>psl<span class="token operator">-&gt;</span>data<span class="token operator">+</span>i<span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>ContactInfo<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span>pf<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//关闭文件</span>
	<span class="token function">fclose</span><span class="token punctuation">(</span>pf<span class="token punctuation">)</span><span class="token punctuation">;</span>
	pf<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">void</span> <span class="token function">ContactLoad</span><span class="token punctuation">(</span>Contact<span class="token operator">*</span> psl<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">//打开文件</span>
	FILE<span class="token operator">*</span> pf<span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string">&quot;contact.txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;rb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//二进制可读</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>pf<span class="token operator">==</span><span class="token constant">NULL</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;加载文件失败：%s\\n&quot;</span><span class="token punctuation">,</span><span class="token function">strerror</span><span class="token punctuation">(</span>errno<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//读取文件</span>
	ContactInfo buf<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token comment">//这里{0}有也可以，没有也可以。起一个初始化作用</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token function">fread</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>buf<span class="token punctuation">,</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>ContactInfo<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span>pf<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">ContactCheck</span><span class="token punctuation">(</span>psl<span class="token punctuation">)</span><span class="token punctuation">;</span>
		psl<span class="token operator">-&gt;</span>data<span class="token punctuation">[</span>psl<span class="token operator">-&gt;</span>size<span class="token punctuation">]</span><span class="token operator">=</span>buf<span class="token punctuation">;</span>
		psl<span class="token operator">-&gt;</span>size<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">fclose</span><span class="token punctuation">(</span>pf<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">void</span> <span class="token function">ContactInit</span><span class="token punctuation">(</span>Contact<span class="token operator">*</span> psl<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">assert</span><span class="token punctuation">(</span>psl<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//这里不用检查扩容函数，因为初始化的时候我们就设定了capacity的大小</span>
	ContactInfo<span class="token operator">*</span> tmp<span class="token operator">=</span><span class="token punctuation">(</span>ContactInfo<span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>ContactInfo<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>tmp<span class="token operator">!=</span><span class="token constant">NULL</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		psl<span class="token operator">-&gt;</span>data<span class="token operator">=</span>tmp<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">else</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;开辟空间失败：%s\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">strerror</span><span class="token punctuation">(</span>errno<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	psl<span class="token operator">-&gt;</span>size<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	psl<span class="token operator">-&gt;</span>capacity<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token comment">//加载文件信息</span>
	<span class="token function">ContactLoad</span><span class="token punctuation">(</span>psl<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">void</span> <span class="token function">ContactDestroy</span><span class="token punctuation">(</span>Contact<span class="token operator">*</span> psl<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">assert</span><span class="token punctuation">(</span>psl<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">free</span><span class="token punctuation">(</span>psl<span class="token operator">-&gt;</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
	psl<span class="token operator">-&gt;</span>data<span class="token operator">=</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
	psl<span class="token operator">-&gt;</span>size<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	psl<span class="token operator">-&gt;</span>capacity<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">void</span> <span class="token function">ContactCheck</span><span class="token punctuation">(</span>Contact<span class="token operator">*</span> psl<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">assert</span><span class="token punctuation">(</span>psl<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>psl<span class="token operator">-&gt;</span>size<span class="token operator">==</span>psl<span class="token operator">-&gt;</span>capacity<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token comment">//增加容量</span>
		ContactInfo<span class="token operator">*</span> tmp<span class="token operator">=</span><span class="token punctuation">(</span>Contact<span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">realloc</span><span class="token punctuation">(</span>psl<span class="token operator">-&gt;</span>data<span class="token punctuation">,</span><span class="token punctuation">(</span>psl<span class="token operator">-&gt;</span>capacity<span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>ContactInfo<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>tmp<span class="token operator">!=</span><span class="token constant">NULL</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			psl<span class="token operator">-&gt;</span>data<span class="token operator">=</span>tmp<span class="token punctuation">;</span>
			psl<span class="token operator">-&gt;</span>capacity<span class="token operator">+=</span><span class="token number">2</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">void</span> <span class="token function">ContactAdd</span><span class="token punctuation">(</span>Contact<span class="token operator">*</span> psl<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">assert</span><span class="token punctuation">(</span>psl<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">ContactCheck</span><span class="token punctuation">(</span>psl<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入名字:&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span>psl<span class="token operator">-&gt;</span>data<span class="token punctuation">[</span>psl<span class="token operator">-&gt;</span>size<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//size代表最后一位元素，由于下标从0开始，所有size位置没存元素</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入年龄:&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>psl<span class="token operator">-&gt;</span>data<span class="token punctuation">[</span>psl<span class="token operator">-&gt;</span>size<span class="token punctuation">]</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//数组名表示首元素地址，可以不加&amp;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入性别:&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span>psl<span class="token operator">-&gt;</span>data<span class="token punctuation">[</span>psl<span class="token operator">-&gt;</span>size<span class="token punctuation">]</span><span class="token punctuation">.</span>sex<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入电话:&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span>psl<span class="token operator">-&gt;</span>data<span class="token punctuation">[</span>psl<span class="token operator">-&gt;</span>size<span class="token punctuation">]</span><span class="token punctuation">.</span>telephone<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入地址:&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span>psl<span class="token operator">-&gt;</span>data<span class="token punctuation">[</span>psl<span class="token operator">-&gt;</span>size<span class="token punctuation">]</span><span class="token punctuation">.</span>address<span class="token punctuation">)</span><span class="token punctuation">;</span>
	psl<span class="token operator">-&gt;</span>size<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;添加联系人成功!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">void</span> <span class="token function">ContactDelete</span><span class="token punctuation">(</span>Contact<span class="token operator">*</span> psl<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">assert</span><span class="token punctuation">(</span>psl<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>psl<span class="token operator">-&gt;</span>size<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;通讯录为空，无法删除!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入要删除的联系人名字:&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">char</span> tmp<span class="token punctuation">[</span>MAX_ARR<span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token comment">//这里一定要用字符数组并且给大小，否则会出现数组越界问题！这个BUG我改了几个小时！！！</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//查找指定联系人</span>
	<span class="token keyword">int</span> pos<span class="token operator">=</span> <span class="token function">ContactFind</span><span class="token punctuation">(</span>psl<span class="token punctuation">,</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//pos是元素的下标</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>pos<span class="token operator">==</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;联系人不存在!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">else</span>
	<span class="token punctuation">{</span>
		<span class="token comment">//删除</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> pos<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> psl<span class="token operator">-&gt;</span>size<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			psl<span class="token operator">-&gt;</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>psl<span class="token operator">-&gt;</span>data<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//联系人信息结构体整体赋值</span>
		<span class="token punctuation">}</span>
		psl<span class="token operator">-&gt;</span>size<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;删除联系人成功!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">void</span> <span class="token function">ContactModify</span><span class="token punctuation">(</span>Contact<span class="token operator">*</span> psl<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">assert</span><span class="token punctuation">(</span>psl<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入要修改的联系人名字:&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">char</span> tmp<span class="token punctuation">[</span>MAX_ARR<span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//这里接收失败，tmp=NULL</span>
	<span class="token keyword">int</span> pos<span class="token operator">=</span> <span class="token function">ContactFind</span><span class="token punctuation">(</span>psl<span class="token punctuation">,</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>pos<span class="token operator">==</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;联系人不存在!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">else</span>
	<span class="token punctuation">{</span>
		<span class="token comment">//修改联系人</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入修改后的年龄:&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>psl<span class="token operator">-&gt;</span>data<span class="token punctuation">[</span>pos<span class="token punctuation">]</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//数组名表示首元素地址，可以不加&amp;</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入修改后的性别:&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span> psl<span class="token operator">-&gt;</span>data<span class="token punctuation">[</span>pos<span class="token punctuation">]</span><span class="token punctuation">.</span>sex<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入修改后的电话:&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span> psl<span class="token operator">-&gt;</span>data<span class="token punctuation">[</span>pos<span class="token punctuation">]</span><span class="token punctuation">.</span>telephone<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入修改后的地址:&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span> psl<span class="token operator">-&gt;</span>data<span class="token punctuation">[</span>pos<span class="token punctuation">]</span><span class="token punctuation">.</span>address<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;修改联系人成功!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">int</span> <span class="token function">ContactFind</span><span class="token punctuation">(</span>Contact<span class="token operator">*</span> psl<span class="token punctuation">,</span><span class="token keyword">char</span><span class="token operator">*</span> arr<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">assert</span><span class="token punctuation">(</span>psl <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>psl<span class="token operator">-&gt;</span>size<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">strcmp</span><span class="token punctuation">(</span>psl<span class="token operator">-&gt;</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span>arr<span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token keyword">return</span> i<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//没找到返回-1</span>
<span class="token punctuation">}</span>


<span class="token keyword">void</span> <span class="token function">ContactSearch</span><span class="token punctuation">(</span>Contact<span class="token operator">*</span> psl<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">assert</span><span class="token punctuation">(</span>psl<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入要查找的联系人名字:&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">char</span> tmp<span class="token punctuation">[</span>MAX_ARR<span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> pos<span class="token operator">=</span> <span class="token function">ContactFind</span><span class="token punctuation">(</span>psl<span class="token punctuation">,</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>pos<span class="token operator">==</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;不存在联系人!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">else</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;找到了联系人，它的信息如下：\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%-10s\\t%-5d\\t%-5s\\t%-14s\\t%-20s\\n&quot;</span><span class="token punctuation">,</span>
			psl<span class="token operator">-&gt;</span>data<span class="token punctuation">[</span>pos<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> psl<span class="token operator">-&gt;</span>data<span class="token punctuation">[</span>pos<span class="token punctuation">]</span><span class="token punctuation">.</span>age<span class="token punctuation">,</span> psl<span class="token operator">-&gt;</span>data<span class="token punctuation">[</span>pos<span class="token punctuation">]</span><span class="token punctuation">.</span>sex<span class="token punctuation">,</span> psl<span class="token operator">-&gt;</span>data<span class="token punctuation">[</span>pos<span class="token punctuation">]</span><span class="token punctuation">.</span>telephone<span class="token punctuation">,</span> psl<span class="token operator">-&gt;</span>data<span class="token punctuation">[</span>pos<span class="token punctuation">]</span><span class="token punctuation">.</span>address<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">void</span> <span class="token function">ContactSort</span><span class="token punctuation">(</span>Contact<span class="token operator">*</span> psl<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">assert</span><span class="token punctuation">(</span>psl<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>psl<span class="token operator">-&gt;</span>size<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;通讯录为空，无需排序!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">else</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;通讯录即将按照联系人姓氏升序进行排序！\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;排序中...\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//睡2s假装处理排序</span>
		<span class="token comment">//姓氏升序排序</span>
		<span class="token function">ContactSortUp</span><span class="token punctuation">(</span>psl<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;排序完成!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">void</span> <span class="token function">ContactPrint</span><span class="token punctuation">(</span><span class="token keyword">const</span> Contact<span class="token operator">*</span> psl<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">assert</span><span class="token punctuation">(</span>psl<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%-10s\\t%-5s\\t%-5s\\t%-14s\\t%-20s\\n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;名字&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;年龄&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;性别&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;电话&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;地址&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> psl<span class="token operator">-&gt;</span>size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%-10s\\t%-5d\\t%-5s\\t%-14s\\t%-20s\\n&quot;</span><span class="token punctuation">,</span>
			psl<span class="token operator">-&gt;</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> psl<span class="token operator">-&gt;</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>age<span class="token punctuation">,</span> psl<span class="token operator">-&gt;</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>sex<span class="token punctuation">,</span> psl<span class="token operator">-&gt;</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>telephone<span class="token punctuation">,</span> psl<span class="token operator">-&gt;</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>address<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">void</span> <span class="token function">ContactSortUp</span><span class="token punctuation">(</span>Contact<span class="token operator">*</span> psl<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>psl<span class="token operator">-&gt;</span>size<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>psl<span class="token operator">-&gt;</span>size<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token operator">++</span>j<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">strcmp</span><span class="token punctuation">(</span>psl<span class="token operator">-&gt;</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span>psl<span class="token operator">-&gt;</span>data<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token comment">//前面的比后面的字母大，则交换</span>
			<span class="token punctuation">{</span>
				ContactInfo  tmp<span class="token punctuation">;</span>
				tmp<span class="token operator">=</span>psl<span class="token operator">-&gt;</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
				psl<span class="token operator">-&gt;</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>psl<span class="token operator">-&gt;</span>data<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
				psl<span class="token operator">-&gt;</span>data<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span>tmp<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">void</span> <span class="token function">ContactMenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;----------------通讯录系统-----------------\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;**************1.添加联系人*****************\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;**************2.删除联系人*****************\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;**************3.修改联系人*****************\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;**************4.查询联系人*****************\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;**************5.排序通讯录*****************\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;**************6.显示通讯录*****************\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;**************0.退出通讯录*****************\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;******************************************\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_3-2-main-c源文件" tabindex="-1"><a class="header-anchor" href="#_3-2-main-c源文件"><span>3.2 main.c源文件</span></a></h3><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">//  Author：JimBo (1353429820@qq.com)</span>
<span class="token comment">//  Filename：main.c</span>
<span class="token comment">//  Date：2024/1/14</span>
<span class="token comment">//  Description：implement the main function of the address book</span>
<span class="token comment">//  Copyrights（c）JimBo. All rights reserved</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&quot;Contact.h&quot;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> input<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	Contact con<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token comment">//初始化通讯录，不初始化也行，反正后也要初始化</span>

	<span class="token comment">//初始化通讯录</span>
	<span class="token function">ContactInit</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>con<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">//界面循环：do...while实现</span>
	<span class="token keyword">do</span>
	<span class="token punctuation">{</span>
		<span class="token function">ContactMenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请选选择功能:&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>input<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">switch</span> <span class="token punctuation">(</span>input<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
		<span class="token keyword">case</span> ADD<span class="token operator">:</span>
			<span class="token function">ContactAdd</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>con<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token keyword">case</span> DEL<span class="token operator">:</span>
			<span class="token function">ContactDelete</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>con<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token keyword">case</span> MODIFY<span class="token operator">:</span>
			<span class="token function">ContactModify</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>con<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token keyword">case</span> SEARCH<span class="token operator">:</span>
			<span class="token function">ContactSearch</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>con<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token keyword">case</span> SORT<span class="token operator">:</span>
			<span class="token function">ContactSort</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>con<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token keyword">case</span> PRINT<span class="token operator">:</span>
			<span class="token function">ContactPrint</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>con<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token keyword">case</span> EXIT<span class="token operator">:</span>
			<span class="token comment">//保存信息到文件</span>
			<span class="token function">ContactSave</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>con<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">ContactDestroy</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>con<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;已退出，感谢使用通讯录系统!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token keyword">default</span><span class="token operator">:</span>
			<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;选择错误，请重新选择功能!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token keyword">while</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),c=[e];function i(l,u){return s(),a("div",null,c)}const d=n(o,[["render",i],["__file","练手项目：通讯录管理系统.html.vue"]]),v=JSON.parse('{"path":"/%E7%BC%96%E7%A8%8B%E5%AD%A6%E4%B9%A0/1.C%E8%AF%AD%E8%A8%80/%E7%BB%83%E6%89%8B%E9%A1%B9%E7%9B%AE%EF%BC%9A%E9%80%9A%E8%AE%AF%E5%BD%95%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F.html","title":"练手项目：通讯录管理系统","lang":"zh-CN","frontmatter":{"date":"2024-01-14T00:00:00.000Z","order":15,"description":"练手项目：通讯录管理系统 1.项目效果 2.项目要求 技术要求：包含C语言所有常用基础知识和文件系统 通讯录系统功能： 1.添加联系人：向通讯录中添加联系人，信息包括（姓名、性别、年龄、联系方式、住址）最多记录1000人 2.删除联系人：按照用户需求进行删除指定联系人 3.修改联系人：按照用户需求重新修改指定联系人 4.查询联系人：按照用户需求查看指定...","head":[["meta",{"property":"og:url","content":"https://github.com/jimbo-master/%E7%BC%96%E7%A8%8B%E5%AD%A6%E4%B9%A0/1.C%E8%AF%AD%E8%A8%80/%E7%BB%83%E6%89%8B%E9%A1%B9%E7%9B%AE%EF%BC%9A%E9%80%9A%E8%AE%AF%E5%BD%95%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F.html"}],["meta",{"property":"og:site_name","content":"JimBoの学习妙妙屋"}],["meta",{"property":"og:title","content":"练手项目：通讯录管理系统"}],["meta",{"property":"og:description","content":"练手项目：通讯录管理系统 1.项目效果 2.项目要求 技术要求：包含C语言所有常用基础知识和文件系统 通讯录系统功能： 1.添加联系人：向通讯录中添加联系人，信息包括（姓名、性别、年龄、联系方式、住址）最多记录1000人 2.删除联系人：按照用户需求进行删除指定联系人 3.修改联系人：按照用户需求重新修改指定联系人 4.查询联系人：按照用户需求查看指定..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"JimBo"}],["meta",{"property":"article:published_time","content":"2024-01-14T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"练手项目：通讯录管理系统\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-14T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"JimBo\\",\\"url\\":\\"https://github.com/jimbo-master\\"}]}"]]},"headers":[{"level":2,"title":"1.项目效果","slug":"_1-项目效果","link":"#_1-项目效果","children":[]},{"level":2,"title":"2.项目要求","slug":"_2-项目要求","link":"#_2-项目要求","children":[]},{"level":2,"title":"3.项目代码","slug":"_3-项目代码","link":"#_3-项目代码","children":[{"level":3,"title":"3.1 contact.h头文件","slug":"_3-1-contact-h头文件","link":"#_3-1-contact-h头文件","children":[]},{"level":3,"title":"3.2 main.c源文件","slug":"_3-2-main-c源文件","link":"#_3-2-main-c源文件","children":[]}]}],"git":{},"readingTime":{"minutes":7.92,"words":2375},"filePathRelative":"编程学习/1.C语言/练手项目：通讯录管理系统.md","localizedDate":"2024年1月14日","autoDesc":true,"excerpt":"\\n<h2>1.项目效果</h2>\\n<figure><figcaption></figcaption></figure>\\n<hr>\\n<h2>2.项目要求</h2>\\n<p><strong>技术要求：包含C语言所有常用基础知识和文件系统</strong></p>\\n<p><strong>通讯录系统功能：<br>\\n1.添加联系人：向通讯录中添加联系人，信息包括（姓名、性别、年龄、联系方式、住址）最多记录1000人<br>\\n2.删除联系人：按照用户需求进行删除指定联系人<br>\\n3.修改联系人：按照用户需求重新修改指定联系人<br>\\n4.查询联系人：按照用户需求查看指定联系人信息<br>\\n5.显示通讯录：显示通讯录中所有联系人信息<br>\\n6.排序通讯录：按照用户需求排序联系人<br>\\n0.退出系统：  退出当前使用的通讯录</strong></p>"}');export{d as comp,v as data};
