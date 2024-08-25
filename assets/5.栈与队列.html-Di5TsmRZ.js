import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as e}from"./app-Dezzdk4T.js";const t="/assets/%E6%A0%88%E7%9A%84%E5%90%8E%E8%BF%9B%E5%85%88%E5%87%BA-Dy1Dw9sZ.png",p="/assets/%E6%A0%88%E7%9A%84%E5%AE%9E%E7%8E%B0-C5c-iPIg.png",o="/assets/%E6%A0%88%E7%9A%84%E5%AE%9E%E7%8E%B02-Bz2PReBh.png",c="/assets/%E9%98%9F%E5%88%97%E7%9A%84%E5%85%88%E8%BF%9B%E5%85%88%E5%87%BA-CrL21Vd2.png",i="/assets/%E9%98%9F%E5%88%97%E7%9A%84%E5%AE%9E%E7%8E%B0-CKlkA0OJ.png",l="/assets/%E9%98%9F%E5%88%97%E7%9A%84%E5%AE%9E%E7%8E%B02-BroveEjg.png",u="/assets/%E5%8F%8C%E5%90%91%E9%98%9F%E5%88%97-B06BaOqt.png",r="/assets/%E5%8F%8C%E5%90%91%E9%98%9F%E5%88%97%E7%9A%84%E9%93%BE%E5%BC%8F%E5%AE%9E%E7%8E%B0-CI6bLs5h.png",k="/assets/%E5%8F%8C%E5%90%91%E9%98%9F%E5%88%97%E7%9A%84%E9%A1%BA%E5%BA%8F%E5%AE%9E%E7%8E%B0-DASPZtUp.png",d={},v=e('<h1 id="第五章-栈与队列" tabindex="-1"><a class="header-anchor" href="#第五章-栈与队列"><span>第五章：栈与队列</span></a></h1><h2 id="_1-栈" tabindex="-1"><a class="header-anchor" href="#_1-栈"><span>1.栈</span></a></h2><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>栈（stack）是一种遵循后进先出逻辑的线性数据结构</strong></p><p><strong>我们把堆叠元素的顶部称为“栈顶”，底部称为“栈底”。将把元素添加到栈顶的操作叫作“入栈”，删除栈顶元素的操作叫作“出栈”</strong></p><hr><h3 id="_1-1-栈的链式实现" tabindex="-1"><a class="header-anchor" href="#_1-1-栈的链式实现"><span>1.1 栈的链式实现</span></a></h3><figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>使用链表实现栈时，我们可以将链表的头节点视为栈顶，尾节点视为栈底</strong></p><p><strong>对于入栈操作，我们只需将元素插入链表头部，这种节点插入方法被称为“头插法”。而对于出栈操作，只需将头节点从链表中删除即可</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">/* 基于链表实现的栈 */</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> 
<span class="token punctuation">{</span>
    ListNode <span class="token operator">*</span>top<span class="token punctuation">;</span> <span class="token comment">// 将头节点作为栈顶</span>
    <span class="token keyword">int</span> size<span class="token punctuation">;</span>      <span class="token comment">// 栈的长度</span>
<span class="token punctuation">}</span> LinkedListStack<span class="token punctuation">;</span>

<span class="token comment">/* 构造函数 */</span>
LinkedListStack <span class="token operator">*</span><span class="token function">newLinkedListStack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    LinkedListStack <span class="token operator">*</span>s <span class="token operator">=</span> <span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>LinkedListStack<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    s<span class="token operator">-&gt;</span>top <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    s<span class="token operator">-&gt;</span>size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 析构函数 */</span>
<span class="token keyword">void</span> <span class="token function">delLinkedListStack</span><span class="token punctuation">(</span>LinkedListStack <span class="token operator">*</span>s<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>s<span class="token operator">-&gt;</span>top<span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        ListNode <span class="token operator">*</span>n <span class="token operator">=</span> s<span class="token operator">-&gt;</span>top<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token function">free</span><span class="token punctuation">(</span>s<span class="token operator">-&gt;</span>top<span class="token punctuation">)</span><span class="token punctuation">;</span>
        s<span class="token operator">-&gt;</span>top <span class="token operator">=</span> n<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">free</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 获取栈的长度 */</span>
<span class="token keyword">int</span> <span class="token function">size</span><span class="token punctuation">(</span>LinkedListStack <span class="token operator">*</span>s<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> s<span class="token operator">-&gt;</span>size<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 判断栈是否为空 */</span>
bool <span class="token function">isEmpty</span><span class="token punctuation">(</span>LinkedListStack <span class="token operator">*</span>s<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">size</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 入栈 */</span>
<span class="token keyword">void</span> <span class="token function">push</span><span class="token punctuation">(</span>LinkedListStack <span class="token operator">*</span>s<span class="token punctuation">,</span> <span class="token keyword">int</span> num<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    ListNode <span class="token operator">*</span>node <span class="token operator">=</span> <span class="token punctuation">(</span>ListNode <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>ListNode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    node<span class="token operator">-&gt;</span>next <span class="token operator">=</span> s<span class="token operator">-&gt;</span>top<span class="token punctuation">;</span> <span class="token comment">// 更新新加节点指针域</span>
    node<span class="token operator">-&gt;</span>val <span class="token operator">=</span> num<span class="token punctuation">;</span>     <span class="token comment">// 更新新加节点数据域</span>
    s<span class="token operator">-&gt;</span>top <span class="token operator">=</span> node<span class="token punctuation">;</span>       <span class="token comment">// 更新栈顶</span>
    s<span class="token operator">-&gt;</span>size<span class="token operator">++</span><span class="token punctuation">;</span>           <span class="token comment">// 更新栈大小</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 访问栈顶元素 */</span>
<span class="token keyword">int</span> <span class="token function">peek</span><span class="token punctuation">(</span>LinkedListStack <span class="token operator">*</span>s<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token operator">-&gt;</span>size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;栈为空\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> INT_MAX<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> s<span class="token operator">-&gt;</span>top<span class="token operator">-&gt;</span>val<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 出栈 */</span>
<span class="token keyword">int</span> <span class="token function">pop</span><span class="token punctuation">(</span>LinkedListStack <span class="token operator">*</span>s<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> val <span class="token operator">=</span> <span class="token function">peek</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    ListNode <span class="token operator">*</span>tmp <span class="token operator">=</span> s<span class="token operator">-&gt;</span>top<span class="token punctuation">;</span>
    s<span class="token operator">-&gt;</span>top <span class="token operator">=</span> s<span class="token operator">-&gt;</span>top<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token comment">// 释放内存</span>
    <span class="token function">free</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    s<span class="token operator">-&gt;</span>size<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> val<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_1-2-栈的顺序实现" tabindex="-1"><a class="header-anchor" href="#_1-2-栈的顺序实现"><span>1.2 栈的顺序实现</span></a></h3><figure><img src="`+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>使用数组实现栈时，我们可以将数组的尾部作为栈顶。如上图所示，入栈与出栈操作分别对应在数组尾部添加元素与删除元素，时间复杂度都为 O(1)</strong></p><p><strong>由于入栈的元素可能会源源不断地增加，因此我们可以使用动态数组，这样就无须自行处理数组扩容问题</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">/* 基于数组实现的栈 */</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>data<span class="token punctuation">;</span>
    <span class="token keyword">int</span> size<span class="token punctuation">;</span>
<span class="token punctuation">}</span> ArrayStack<span class="token punctuation">;</span>

<span class="token comment">/* 构造函数 */</span>
ArrayStack <span class="token operator">*</span><span class="token function">newArrayStack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    ArrayStack <span class="token operator">*</span>stack <span class="token operator">=</span> <span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>ArrayStack<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 初始化一个大容量，避免扩容</span>
    stack<span class="token operator">-&gt;</span>data <span class="token operator">=</span> <span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">*</span> MAX_SIZE<span class="token punctuation">)</span><span class="token punctuation">;</span>
    stack<span class="token operator">-&gt;</span>size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> stack<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 析构函数 */</span>
<span class="token keyword">void</span> <span class="token function">delArrayStack</span><span class="token punctuation">(</span>ArrayStack <span class="token operator">*</span>stack<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token function">free</span><span class="token punctuation">(</span>stack<span class="token operator">-&gt;</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">free</span><span class="token punctuation">(</span>stack<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 获取栈的长度 */</span>
<span class="token keyword">int</span> <span class="token function">size</span><span class="token punctuation">(</span>ArrayStack <span class="token operator">*</span>stack<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> stack<span class="token operator">-&gt;</span>size<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 判断栈是否为空 */</span>
bool <span class="token function">isEmpty</span><span class="token punctuation">(</span>ArrayStack <span class="token operator">*</span>stack<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> stack<span class="token operator">-&gt;</span>size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 入栈 */</span>
<span class="token keyword">void</span> <span class="token function">push</span><span class="token punctuation">(</span>ArrayStack <span class="token operator">*</span>stack<span class="token punctuation">,</span> <span class="token keyword">int</span> num<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token operator">-&gt;</span>size <span class="token operator">==</span> MAX_SIZE<span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;栈已满\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    stack<span class="token operator">-&gt;</span>data<span class="token punctuation">[</span>stack<span class="token operator">-&gt;</span>size<span class="token punctuation">]</span> <span class="token operator">=</span> num<span class="token punctuation">;</span>
    stack<span class="token operator">-&gt;</span>size<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 访问栈顶元素 */</span>
<span class="token keyword">int</span> <span class="token function">peek</span><span class="token punctuation">(</span>ArrayStack <span class="token operator">*</span>stack<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token operator">-&gt;</span>size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;栈为空\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> INT_MAX<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> stack<span class="token operator">-&gt;</span>data<span class="token punctuation">[</span>stack<span class="token operator">-&gt;</span>size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 出栈 */</span>
<span class="token keyword">int</span> <span class="token function">pop</span><span class="token punctuation">(</span>ArrayStack <span class="token operator">*</span>stack<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> val <span class="token operator">=</span> <span class="token function">peek</span><span class="token punctuation">(</span>stack<span class="token punctuation">)</span><span class="token punctuation">;</span>
    stack<span class="token operator">-&gt;</span>size<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> val<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_1-3-栈的两种实现对比" tabindex="-1"><a class="header-anchor" href="#_1-3-栈的两种实现对比"><span>1.3 栈的两种实现对比</span></a></h3><p><strong>支持操作：</strong></p><blockquote><p><strong>两种实现都支持栈定义中的各项操作。数组实现额外支持随机访问，但这已超出了栈的定义范畴，因此一般不会用到</strong></p></blockquote><p><strong>时间效率：</strong></p><blockquote><p><strong>在基于数组的实现中，入栈和出栈操作都在预先分配好的连续内存中进行，具有很好的缓存本地性，因此效率较高。然而，如果入栈时超出数组容量，会触发扩容机制，导致该次入栈操作的时间复杂度变为O（n）</strong><br><br><strong>在基于链表的实现中，链表的扩容非常灵活，不存在上述数组扩容时效率降低的问题。但是，入栈操作需要初始化节点对象并修改指针，因此效率相对较低。不过，如果入栈元素本身就是节点对象，那么可以省去初始化步骤，从而提高效率</strong></p></blockquote><p><strong>我们可以得出以下结论：</strong></p><ul><li><strong>基于数组实现的栈在触发扩容时效率会降低，但由于扩容是低频操作，因此平均效率更高</strong></li><li><strong>基于链表实现的栈可以提供更加稳定的效率表现</strong></li></ul><p><strong>空间效率：</strong></p><blockquote><p><strong>在初始化列表时，系统会为列表分配“初始容量”，该容量可能超出实际需求；并且，扩容机制通常是按照特定倍率（例如 2 倍）进行扩容的，扩容后的容量也可能超出实际需求。因此，基于数组实现的栈可能造成一定的空间浪费</strong><br><br><strong>然而，由于链表节点需要额外存储指针，因此链表节点占用的空间相对较大</strong><br><br><strong>综上，我们不能简单地确定哪种实现更加节省内存，需要针对具体情况进行分析</strong></p></blockquote><hr><h2 id="_2-队列" tabindex="-1"><a class="header-anchor" href="#_2-队列"><span>2.队列</span></a></h2><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>队列（queue）是一种遵循先进先出规则的线性数据结构。顾名思义，队列模拟了排队现象，即新来的人不断加入队列尾部，而位于队列头部的人逐个离开</strong></p><p><strong>我们将队列头部称为“队首”，尾部称为“队尾”，将把元素加入队尾的操作称为“入队”，删除队首元素的操作称为“出队”</strong></p><hr><h3 id="_2-1-队列的链式实现" tabindex="-1"><a class="header-anchor" href="#_2-1-队列的链式实现"><span>2.1 队列的链式实现</span></a></h3><figure><img src="'+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>我们可以将链表的“头节点”和“尾节点”分别视为“队首”和“队尾”，规定队尾仅可添加节点，队首仅可删除节点</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">/* 基于链表实现的队列 */</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> 
<span class="token punctuation">{</span>
    ListNode <span class="token operator">*</span>front<span class="token punctuation">,</span> <span class="token operator">*</span>rear<span class="token punctuation">;</span>
    <span class="token keyword">int</span> queSize<span class="token punctuation">;</span>
<span class="token punctuation">}</span> LinkedListQueue<span class="token punctuation">;</span>

<span class="token comment">/* 构造函数 */</span>
LinkedListQueue <span class="token operator">*</span><span class="token function">newLinkedListQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    LinkedListQueue <span class="token operator">*</span>queue <span class="token operator">=</span> <span class="token punctuation">(</span>LinkedListQueue <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>LinkedListQueue<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    queue<span class="token operator">-&gt;</span>front <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    queue<span class="token operator">-&gt;</span>rear <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    queue<span class="token operator">-&gt;</span>queSize <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> queue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 析构函数 */</span>
<span class="token keyword">void</span> <span class="token function">delLinkedListQueue</span><span class="token punctuation">(</span>LinkedListQueue <span class="token operator">*</span>queue<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token comment">// 释放所有节点</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token operator">-&gt;</span>front <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        ListNode <span class="token operator">*</span>tmp <span class="token operator">=</span> queue<span class="token operator">-&gt;</span>front<span class="token punctuation">;</span>
        queue<span class="token operator">-&gt;</span>front <span class="token operator">=</span> queue<span class="token operator">-&gt;</span>front<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token function">free</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 释放 queue 结构体</span>
    <span class="token function">free</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 获取队列的长度 */</span>
<span class="token keyword">int</span> <span class="token function">size</span><span class="token punctuation">(</span>LinkedListQueue <span class="token operator">*</span>queue<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> queue<span class="token operator">-&gt;</span>queSize<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 判断队列是否为空 */</span>
bool <span class="token function">empty</span><span class="token punctuation">(</span>LinkedListQueue <span class="token operator">*</span>queue<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token function">size</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 入队 */</span>
<span class="token keyword">void</span> <span class="token function">push</span><span class="token punctuation">(</span>LinkedListQueue <span class="token operator">*</span>queue<span class="token punctuation">,</span> <span class="token keyword">int</span> num<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token comment">// 尾节点处添加 node</span>
    ListNode <span class="token operator">*</span>node <span class="token operator">=</span> <span class="token function">newListNode</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 如果队列为空，则令头、尾节点都指向该节点</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>queue<span class="token operator">-&gt;</span>front <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        queue<span class="token operator">-&gt;</span>front <span class="token operator">=</span> node<span class="token punctuation">;</span>
        queue<span class="token operator">-&gt;</span>rear <span class="token operator">=</span> node<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果队列不为空，则将该节点添加到尾节点后</span>
    <span class="token keyword">else</span> 
    <span class="token punctuation">{</span>
        queue<span class="token operator">-&gt;</span>rear<span class="token operator">-&gt;</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span>
        queue<span class="token operator">-&gt;</span>rear <span class="token operator">=</span> node<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    queue<span class="token operator">-&gt;</span>queSize<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 访问队首元素 */</span>
<span class="token keyword">int</span> <span class="token function">peek</span><span class="token punctuation">(</span>LinkedListQueue <span class="token operator">*</span>queue<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token function">assert</span><span class="token punctuation">(</span><span class="token function">size</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> queue<span class="token operator">-&gt;</span>front<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> queue<span class="token operator">-&gt;</span>front<span class="token operator">-&gt;</span>val<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 出队 */</span>
<span class="token keyword">int</span> <span class="token function">pop</span><span class="token punctuation">(</span>LinkedListQueue <span class="token operator">*</span>queue<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token function">peek</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    ListNode <span class="token operator">*</span>tmp <span class="token operator">=</span> queue<span class="token operator">-&gt;</span>front<span class="token punctuation">;</span>
    queue<span class="token operator">-&gt;</span>front <span class="token operator">=</span> queue<span class="token operator">-&gt;</span>front<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token function">free</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    queue<span class="token operator">-&gt;</span>queSize<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> num<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 打印队列 */</span>
<span class="token keyword">void</span> <span class="token function">printLinkedListQueue</span><span class="token punctuation">(</span>LinkedListQueue <span class="token operator">*</span>queue<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>arr <span class="token operator">=</span> <span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">*</span> queue<span class="token operator">-&gt;</span>queSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 拷贝链表中的数据到数组</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    ListNode <span class="token operator">*</span>node<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> node <span class="token operator">=</span> queue<span class="token operator">-&gt;</span>front<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> queue<span class="token operator">-&gt;</span>queSize<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> node<span class="token operator">-&gt;</span>val<span class="token punctuation">;</span>
        node <span class="token operator">=</span> node<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printArray</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> queue<span class="token operator">-&gt;</span>queSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">free</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_2-2-队列的顺序实现" tabindex="-1"><a class="header-anchor" href="#_2-2-队列的顺序实现"><span>2.2 队列的顺序实现</span></a></h3><p><strong>在数组中删除首元素的时间复杂度为O（n），这会导致出队操作效率较低。然而，我们可以采用以下巧妙方法来避免这个问题</strong></p><p><strong>我们可以使用一个变量 front 指向队首元素的索引，并维护一个变量 size 用于记录队列长度。定义 rear = front + size ，这个公式计算出的 rear 指向队尾元素之后的下一个位置</strong></p><p><strong>基于此设计，数组中包含元素的有效区间为 [front, rear - 1]，各种操作的实现方法如下图所示：</strong></p><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><strong>入队操作：将输入元素赋值给 rear 索引处，并将 size 增加 1</strong></li><li><strong>出队操作：只需将 front 增加 1 ，并将 size 减少 1</strong></li><li><strong>可以看到，入队和出队操作都只需进行一次操作，时间复杂度均为O（1）</strong></li></ul><p><strong>你可能会发现一个问题：在不断进行入队和出队的过程中，front 和 rear 都在向右移动，当它们到达数组尾部时就无法继续移动了。为了解决此问题，我们可以将数组视为首尾相接的“环形数组”</strong></p><p><strong>对于环形数组，我们需要让 front 或 rear 在越过数组尾部时，直接回到数组头部继续遍历。这种周期性规律可以通过“取余操作”来实现，如下代码：</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">/* 基于环形数组实现的队列 */</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>nums<span class="token punctuation">;</span>       <span class="token comment">// 用于存储队列元素的数组</span>
    <span class="token keyword">int</span> front<span class="token punctuation">;</span>       <span class="token comment">// 队首指针，指向队首元素</span>
    <span class="token keyword">int</span> queSize<span class="token punctuation">;</span>     <span class="token comment">// 尾指针，指向队尾 + 1</span>
    <span class="token keyword">int</span> queCapacity<span class="token punctuation">;</span> <span class="token comment">// 队列容量</span>
<span class="token punctuation">}</span> ArrayQueue<span class="token punctuation">;</span>

<span class="token comment">/* 构造函数 */</span>
ArrayQueue <span class="token operator">*</span><span class="token function">newArrayQueue</span><span class="token punctuation">(</span><span class="token keyword">int</span> capacity<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    ArrayQueue <span class="token operator">*</span>queue <span class="token operator">=</span> <span class="token punctuation">(</span>ArrayQueue <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>ArrayQueue<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 初始化数组</span>
    queue<span class="token operator">-&gt;</span>queCapacity <span class="token operator">=</span> capacity<span class="token punctuation">;</span>
    queue<span class="token operator">-&gt;</span>nums <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">*</span> queue<span class="token operator">-&gt;</span>queCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    queue<span class="token operator">-&gt;</span>front <span class="token operator">=</span> queue<span class="token operator">-&gt;</span>queSize <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> queue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 析构函数 */</span>
<span class="token keyword">void</span> <span class="token function">delArrayQueue</span><span class="token punctuation">(</span>ArrayQueue <span class="token operator">*</span>queue<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token function">free</span><span class="token punctuation">(</span>queue<span class="token operator">-&gt;</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">free</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 获取队列的容量 */</span>
<span class="token keyword">int</span> <span class="token function">capacity</span><span class="token punctuation">(</span>ArrayQueue <span class="token operator">*</span>queue<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> queue<span class="token operator">-&gt;</span>queCapacity<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 获取队列的长度 */</span>
<span class="token keyword">int</span> <span class="token function">size</span><span class="token punctuation">(</span>ArrayQueue <span class="token operator">*</span>queue<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> queue<span class="token operator">-&gt;</span>queSize<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 判断队列是否为空 */</span>
bool <span class="token function">empty</span><span class="token punctuation">(</span>ArrayQueue <span class="token operator">*</span>queue<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> queue<span class="token operator">-&gt;</span>queSize <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 访问队首元素 */</span>
<span class="token keyword">int</span> <span class="token function">peek</span><span class="token punctuation">(</span>ArrayQueue <span class="token operator">*</span>queue<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token function">assert</span><span class="token punctuation">(</span><span class="token function">size</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> queue<span class="token operator">-&gt;</span>nums<span class="token punctuation">[</span>queue<span class="token operator">-&gt;</span>front<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 入队 */</span>
<span class="token keyword">void</span> <span class="token function">push</span><span class="token punctuation">(</span>ArrayQueue <span class="token operator">*</span>queue<span class="token punctuation">,</span> <span class="token keyword">int</span> num<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">size</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token function">capacity</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;队列已满\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 计算队尾指针，指向队尾索引 + 1</span>
    <span class="token comment">// 通过取余操作实现 rear 越过数组尾部后回到头部</span>
    <span class="token keyword">int</span> rear <span class="token operator">=</span> <span class="token punctuation">(</span>queue<span class="token operator">-&gt;</span>front <span class="token operator">+</span> queue<span class="token operator">-&gt;</span>queSize<span class="token punctuation">)</span> <span class="token operator">%</span> queue<span class="token operator">-&gt;</span>queCapacity<span class="token punctuation">;</span>
    <span class="token comment">// 将 num 添加至队尾</span>
    queue<span class="token operator">-&gt;</span>nums<span class="token punctuation">[</span>rear<span class="token punctuation">]</span> <span class="token operator">=</span> num<span class="token punctuation">;</span>
    queue<span class="token operator">-&gt;</span>queSize<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 出队 */</span>
<span class="token keyword">int</span> <span class="token function">pop</span><span class="token punctuation">(</span>ArrayQueue <span class="token operator">*</span>queue<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token function">peek</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 队首指针向后移动一位，若越过尾部，则返回到数组头部</span>
    queue<span class="token operator">-&gt;</span>front <span class="token operator">=</span> <span class="token punctuation">(</span>queue<span class="token operator">-&gt;</span>front <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> queue<span class="token operator">-&gt;</span>queCapacity<span class="token punctuation">;</span>
    queue<span class="token operator">-&gt;</span>queSize<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> num<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_3-双向队列" tabindex="-1"><a class="header-anchor" href="#_3-双向队列"><span>3.双向队列</span></a></h2><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>在队列中，我们仅能删除头部元素或在尾部添加元素。如上图所示，双向队列（double-ended queue）提供了更高的灵活性，允许在头部和尾部执行元素的添加或删除操作</strong></p><hr><h3 id="_3-1-双向队列的链式实现" tabindex="-1"><a class="header-anchor" href="#_3-1-双向队列的链式实现"><span>3.1 双向队列的链式实现</span></a></h3><figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>对于双向队列而言，头部和尾部都可以执行入队和出队操作。换句话说，双向队列需要实现另一个对称方向的操作。为此，我们采用“双向链表”作为双向队列的底层数据结构</strong></p><p><strong>我们将双向链表的头节点和尾节点视为双向队列的队首和队尾，同时实现在两端添加和删除节点的功能</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">/* 双向链表节点 */</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">DoublyListNode</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> val<span class="token punctuation">;</span>                     <span class="token comment">// 节点值</span>
    <span class="token keyword">struct</span> <span class="token class-name">DoublyListNode</span> <span class="token operator">*</span>next<span class="token punctuation">;</span> <span class="token comment">// 后继节点</span>
    <span class="token keyword">struct</span> <span class="token class-name">DoublyListNode</span> <span class="token operator">*</span>prev<span class="token punctuation">;</span> <span class="token comment">// 前驱节点</span>
<span class="token punctuation">}</span> DoublyListNode<span class="token punctuation">;</span>

<span class="token comment">/* 构造函数 */</span>
DoublyListNode <span class="token operator">*</span><span class="token function">newDoublyListNode</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    DoublyListNode <span class="token operator">*</span>new <span class="token operator">=</span> <span class="token punctuation">(</span>DoublyListNode <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>DoublyListNode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    new<span class="token operator">-&gt;</span>val <span class="token operator">=</span> num<span class="token punctuation">;</span>
    new<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    new<span class="token operator">-&gt;</span>prev <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> new<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 析构函数 */</span>
<span class="token keyword">void</span> <span class="token function">delDoublyListNode</span><span class="token punctuation">(</span>DoublyListNode <span class="token operator">*</span>node<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token function">free</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 基于双向链表实现的双向队列 */</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> 
<span class="token punctuation">{</span>
    DoublyListNode <span class="token operator">*</span>front<span class="token punctuation">,</span> <span class="token operator">*</span>rear<span class="token punctuation">;</span> <span class="token comment">// 头节点 front ，尾节点 rear</span>
    <span class="token keyword">int</span> queSize<span class="token punctuation">;</span>                  <span class="token comment">// 双向队列的长度</span>
<span class="token punctuation">}</span> LinkedListDeque<span class="token punctuation">;</span>

<span class="token comment">/* 构造函数 */</span>
LinkedListDeque <span class="token operator">*</span><span class="token function">newLinkedListDeque</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    LinkedListDeque <span class="token operator">*</span>deque <span class="token operator">=</span> <span class="token punctuation">(</span>LinkedListDeque <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>LinkedListDeque<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    deque<span class="token operator">-&gt;</span>front <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    deque<span class="token operator">-&gt;</span>rear <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    deque<span class="token operator">-&gt;</span>queSize <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> deque<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 析构函数 */</span>
<span class="token keyword">void</span> <span class="token function">delLinkedListdeque</span><span class="token punctuation">(</span>LinkedListDeque <span class="token operator">*</span>deque<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token comment">// 释放所有节点</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> deque<span class="token operator">-&gt;</span>queSize <span class="token operator">&amp;&amp;</span> deque<span class="token operator">-&gt;</span>front <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        DoublyListNode <span class="token operator">*</span>tmp <span class="token operator">=</span> deque<span class="token operator">-&gt;</span>front<span class="token punctuation">;</span>
        deque<span class="token operator">-&gt;</span>front <span class="token operator">=</span> deque<span class="token operator">-&gt;</span>front<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token function">free</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 释放 deque 结构体</span>
    <span class="token function">free</span><span class="token punctuation">(</span>deque<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 获取队列的长度 */</span>
<span class="token keyword">int</span> <span class="token function">size</span><span class="token punctuation">(</span>LinkedListDeque <span class="token operator">*</span>deque<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> deque<span class="token operator">-&gt;</span>queSize<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 判断队列是否为空 */</span>
bool <span class="token function">empty</span><span class="token punctuation">(</span>LinkedListDeque <span class="token operator">*</span>deque<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token function">size</span><span class="token punctuation">(</span>deque<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 入队 */</span>
<span class="token keyword">void</span> <span class="token function">push</span><span class="token punctuation">(</span>LinkedListDeque <span class="token operator">*</span>deque<span class="token punctuation">,</span> <span class="token keyword">int</span> num<span class="token punctuation">,</span> bool isFront<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    DoublyListNode <span class="token operator">*</span>node <span class="token operator">=</span> <span class="token function">newDoublyListNode</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 若链表为空，则令 front 和 rear 都指向node</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">empty</span><span class="token punctuation">(</span>deque<span class="token punctuation">)</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        deque<span class="token operator">-&gt;</span>front <span class="token operator">=</span> deque<span class="token operator">-&gt;</span>rear <span class="token operator">=</span> node<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 队首入队操作</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>isFront<span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token comment">// 将 node 添加至链表头部</span>
        deque<span class="token operator">-&gt;</span>front<span class="token operator">-&gt;</span>prev <span class="token operator">=</span> node<span class="token punctuation">;</span>
        node<span class="token operator">-&gt;</span>next <span class="token operator">=</span> deque<span class="token operator">-&gt;</span>front<span class="token punctuation">;</span>
        deque<span class="token operator">-&gt;</span>front <span class="token operator">=</span> node<span class="token punctuation">;</span> <span class="token comment">// 更新头节点</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 队尾入队操作</span>
    <span class="token keyword">else</span> 
    <span class="token punctuation">{</span>
        <span class="token comment">// 将 node 添加至链表尾部</span>
        deque<span class="token operator">-&gt;</span>rear<span class="token operator">-&gt;</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span>
        node<span class="token operator">-&gt;</span>prev <span class="token operator">=</span> deque<span class="token operator">-&gt;</span>rear<span class="token punctuation">;</span>
        deque<span class="token operator">-&gt;</span>rear <span class="token operator">=</span> node<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    deque<span class="token operator">-&gt;</span>queSize<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 更新队列长度</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 队首入队 */</span>
<span class="token keyword">void</span> <span class="token function">pushFirst</span><span class="token punctuation">(</span>LinkedListDeque <span class="token operator">*</span>deque<span class="token punctuation">,</span> <span class="token keyword">int</span> num<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token function">push</span><span class="token punctuation">(</span>deque<span class="token punctuation">,</span> num<span class="token punctuation">,</span> true<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 队尾入队 */</span>
<span class="token keyword">void</span> <span class="token function">pushLast</span><span class="token punctuation">(</span>LinkedListDeque <span class="token operator">*</span>deque<span class="token punctuation">,</span> <span class="token keyword">int</span> num<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token function">push</span><span class="token punctuation">(</span>deque<span class="token punctuation">,</span> num<span class="token punctuation">,</span> false<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 访问队首元素 */</span>
<span class="token keyword">int</span> <span class="token function">peekFirst</span><span class="token punctuation">(</span>LinkedListDeque <span class="token operator">*</span>deque<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token function">assert</span><span class="token punctuation">(</span><span class="token function">size</span><span class="token punctuation">(</span>deque<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> deque<span class="token operator">-&gt;</span>front<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> deque<span class="token operator">-&gt;</span>front<span class="token operator">-&gt;</span>val<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 访问队尾元素 */</span>
<span class="token keyword">int</span> <span class="token function">peekLast</span><span class="token punctuation">(</span>LinkedListDeque <span class="token operator">*</span>deque<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token function">assert</span><span class="token punctuation">(</span><span class="token function">size</span><span class="token punctuation">(</span>deque<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> deque<span class="token operator">-&gt;</span>rear<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> deque<span class="token operator">-&gt;</span>rear<span class="token operator">-&gt;</span>val<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 出队 */</span>
<span class="token keyword">int</span> <span class="token function">pop</span><span class="token punctuation">(</span>LinkedListDeque <span class="token operator">*</span>deque<span class="token punctuation">,</span> bool isFront<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">empty</span><span class="token punctuation">(</span>deque<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> val<span class="token punctuation">;</span>
    <span class="token comment">// 队首出队操作</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isFront<span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        val <span class="token operator">=</span> <span class="token function">peekFirst</span><span class="token punctuation">(</span>deque<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 暂存头节点值</span>
        DoublyListNode <span class="token operator">*</span>fNext <span class="token operator">=</span> deque<span class="token operator">-&gt;</span>front<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>fNext<span class="token punctuation">)</span> 
        <span class="token punctuation">{</span>
            fNext<span class="token operator">-&gt;</span>prev <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
            deque<span class="token operator">-&gt;</span>front<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">delDoublyListNode</span><span class="token punctuation">(</span>deque<span class="token operator">-&gt;</span>front<span class="token punctuation">)</span><span class="token punctuation">;</span>
        deque<span class="token operator">-&gt;</span>front <span class="token operator">=</span> fNext<span class="token punctuation">;</span> <span class="token comment">// 更新头节点</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 队尾出队操作</span>
    <span class="token keyword">else</span> 
    <span class="token punctuation">{</span>
        val <span class="token operator">=</span> <span class="token function">peekLast</span><span class="token punctuation">(</span>deque<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 暂存尾节点值</span>
        DoublyListNode <span class="token operator">*</span>rPrev <span class="token operator">=</span> deque<span class="token operator">-&gt;</span>rear<span class="token operator">-&gt;</span>prev<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>rPrev<span class="token punctuation">)</span> 
        <span class="token punctuation">{</span>
            rPrev<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
            deque<span class="token operator">-&gt;</span>rear<span class="token operator">-&gt;</span>prev <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">delDoublyListNode</span><span class="token punctuation">(</span>deque<span class="token operator">-&gt;</span>rear<span class="token punctuation">)</span><span class="token punctuation">;</span>
        deque<span class="token operator">-&gt;</span>rear <span class="token operator">=</span> rPrev<span class="token punctuation">;</span> <span class="token comment">// 更新尾节点</span>
    <span class="token punctuation">}</span>
    deque<span class="token operator">-&gt;</span>queSize<span class="token operator">--</span><span class="token punctuation">;</span> <span class="token comment">// 更新队列长度</span>
    <span class="token keyword">return</span> val<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 队首出队 */</span>
<span class="token keyword">int</span> <span class="token function">popFirst</span><span class="token punctuation">(</span>LinkedListDeque <span class="token operator">*</span>deque<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">pop</span><span class="token punctuation">(</span>deque<span class="token punctuation">,</span> true<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 队尾出队 */</span>
<span class="token keyword">int</span> <span class="token function">popLast</span><span class="token punctuation">(</span>LinkedListDeque <span class="token operator">*</span>deque<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">pop</span><span class="token punctuation">(</span>deque<span class="token punctuation">,</span> false<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 打印队列 */</span>
<span class="token keyword">void</span> <span class="token function">printLinkedListDeque</span><span class="token punctuation">(</span>LinkedListDeque <span class="token operator">*</span>deque<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>arr <span class="token operator">=</span> <span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">*</span> deque<span class="token operator">-&gt;</span>queSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 拷贝链表中的数据到数组</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    DoublyListNode <span class="token operator">*</span>node<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> node <span class="token operator">=</span> deque<span class="token operator">-&gt;</span>front<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> deque<span class="token operator">-&gt;</span>queSize<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> node<span class="token operator">-&gt;</span>val<span class="token punctuation">;</span>
        node <span class="token operator">=</span> node<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printArray</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> deque<span class="token operator">-&gt;</span>queSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">free</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_3-2-双向队列的顺序实现" tabindex="-1"><a class="header-anchor" href="#_3-2-双向队列的顺序实现"><span>3.2 双向队列的顺序实现</span></a></h3><figure><img src="`+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>与基于数组实现队列类似，我们也可以使用环形数组来实现双向队列</strong></p><p><strong>在队列的实现基础上，仅需增加“队首入队”和“队尾出队”的方法：</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">/* 基于环形数组实现的双向队列 */</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> <span class="token operator">*</span>nums<span class="token punctuation">;</span>       <span class="token comment">// 用于存储队列元素的数组</span>
    <span class="token keyword">int</span> front<span class="token punctuation">;</span>       <span class="token comment">// 队首指针，指向队首元素</span>
    <span class="token keyword">int</span> queSize<span class="token punctuation">;</span>     <span class="token comment">// 尾指针，指向队尾 + 1</span>
    <span class="token keyword">int</span> queCapacity<span class="token punctuation">;</span> <span class="token comment">// 队列容量</span>
<span class="token punctuation">}</span> ArrayDeque<span class="token punctuation">;</span>

<span class="token comment">/* 构造函数 */</span>
ArrayDeque <span class="token operator">*</span><span class="token function">newArrayDeque</span><span class="token punctuation">(</span><span class="token keyword">int</span> capacity<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    ArrayDeque <span class="token operator">*</span>deque <span class="token operator">=</span> <span class="token punctuation">(</span>ArrayDeque <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span>ArrayDeque<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 初始化数组</span>
    deque<span class="token operator">-&gt;</span>queCapacity <span class="token operator">=</span> capacity<span class="token punctuation">;</span>
    deque<span class="token operator">-&gt;</span>nums <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">*</span> deque<span class="token operator">-&gt;</span>queCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    deque<span class="token operator">-&gt;</span>front <span class="token operator">=</span> deque<span class="token operator">-&gt;</span>queSize <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> deque<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 析构函数 */</span>
<span class="token keyword">void</span> <span class="token function">delArrayDeque</span><span class="token punctuation">(</span>ArrayDeque <span class="token operator">*</span>deque<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token function">free</span><span class="token punctuation">(</span>deque<span class="token operator">-&gt;</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">free</span><span class="token punctuation">(</span>deque<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 获取双向队列的容量 */</span>
<span class="token keyword">int</span> <span class="token function">capacity</span><span class="token punctuation">(</span>ArrayDeque <span class="token operator">*</span>deque<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> deque<span class="token operator">-&gt;</span>queCapacity<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 获取双向队列的长度 */</span>
<span class="token keyword">int</span> <span class="token function">size</span><span class="token punctuation">(</span>ArrayDeque <span class="token operator">*</span>deque<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> deque<span class="token operator">-&gt;</span>queSize<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 判断双向队列是否为空 */</span>
bool <span class="token function">empty</span><span class="token punctuation">(</span>ArrayDeque <span class="token operator">*</span>deque<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> deque<span class="token operator">-&gt;</span>queSize <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 计算环形数组索引 */</span>
<span class="token keyword">int</span> <span class="token function">dequeIndex</span><span class="token punctuation">(</span>ArrayDeque <span class="token operator">*</span>deque<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token comment">// 通过取余操作实现数组首尾相连</span>
    <span class="token comment">// 当 i 越过数组尾部时，回到头部</span>
    <span class="token comment">// 当 i 越过数组头部后，回到尾部</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token function">capacity</span><span class="token punctuation">(</span>deque<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token function">capacity</span><span class="token punctuation">(</span>deque<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 队首入队 */</span>
<span class="token keyword">void</span> <span class="token function">pushFirst</span><span class="token punctuation">(</span>ArrayDeque <span class="token operator">*</span>deque<span class="token punctuation">,</span> <span class="token keyword">int</span> num<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>deque<span class="token operator">-&gt;</span>queSize <span class="token operator">==</span> <span class="token function">capacity</span><span class="token punctuation">(</span>deque<span class="token punctuation">)</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;双向队列已满\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 队首指针向左移动一位</span>
    <span class="token comment">// 通过取余操作实现 front 越过数组头部回到尾部</span>
    deque<span class="token operator">-&gt;</span>front <span class="token operator">=</span> <span class="token function">dequeIndex</span><span class="token punctuation">(</span>deque<span class="token punctuation">,</span> deque<span class="token operator">-&gt;</span>front <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 将 num 添加到队首</span>
    deque<span class="token operator">-&gt;</span>nums<span class="token punctuation">[</span>deque<span class="token operator">-&gt;</span>front<span class="token punctuation">]</span> <span class="token operator">=</span> num<span class="token punctuation">;</span>
    deque<span class="token operator">-&gt;</span>queSize<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 队尾入队 */</span>
<span class="token keyword">void</span> <span class="token function">pushLast</span><span class="token punctuation">(</span>ArrayDeque <span class="token operator">*</span>deque<span class="token punctuation">,</span> <span class="token keyword">int</span> num<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>deque<span class="token operator">-&gt;</span>queSize <span class="token operator">==</span> <span class="token function">capacity</span><span class="token punctuation">(</span>deque<span class="token punctuation">)</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;双向队列已满\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 计算队尾指针，指向队尾索引 + 1</span>
    <span class="token keyword">int</span> rear <span class="token operator">=</span> <span class="token function">dequeIndex</span><span class="token punctuation">(</span>deque<span class="token punctuation">,</span> deque<span class="token operator">-&gt;</span>front <span class="token operator">+</span> deque<span class="token operator">-&gt;</span>queSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 将 num 添加至队尾</span>
    deque<span class="token operator">-&gt;</span>nums<span class="token punctuation">[</span>rear<span class="token punctuation">]</span> <span class="token operator">=</span> num<span class="token punctuation">;</span>
    deque<span class="token operator">-&gt;</span>queSize<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 访问队首元素 */</span>
<span class="token keyword">int</span> <span class="token function">peekFirst</span><span class="token punctuation">(</span>ArrayDeque <span class="token operator">*</span>deque<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token comment">// 访问异常：双向队列为空</span>
    <span class="token function">assert</span><span class="token punctuation">(</span><span class="token function">empty</span><span class="token punctuation">(</span>deque<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> deque<span class="token operator">-&gt;</span>nums<span class="token punctuation">[</span>deque<span class="token operator">-&gt;</span>front<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 访问队尾元素 */</span>
<span class="token keyword">int</span> <span class="token function">peekLast</span><span class="token punctuation">(</span>ArrayDeque <span class="token operator">*</span>deque<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token comment">// 访问异常：双向队列为空</span>
    <span class="token function">assert</span><span class="token punctuation">(</span><span class="token function">empty</span><span class="token punctuation">(</span>deque<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> last <span class="token operator">=</span> <span class="token function">dequeIndex</span><span class="token punctuation">(</span>deque<span class="token punctuation">,</span> deque<span class="token operator">-&gt;</span>front <span class="token operator">+</span> deque<span class="token operator">-&gt;</span>queSize <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> deque<span class="token operator">-&gt;</span>nums<span class="token punctuation">[</span>last<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 队首出队 */</span>
<span class="token keyword">int</span> <span class="token function">popFirst</span><span class="token punctuation">(</span>ArrayDeque <span class="token operator">*</span>deque<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token function">peekFirst</span><span class="token punctuation">(</span>deque<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 队首指针向后移动一位</span>
    deque<span class="token operator">-&gt;</span>front <span class="token operator">=</span> <span class="token function">dequeIndex</span><span class="token punctuation">(</span>deque<span class="token punctuation">,</span> deque<span class="token operator">-&gt;</span>front <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    deque<span class="token operator">-&gt;</span>queSize<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> num<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 队尾出队 */</span>
<span class="token keyword">int</span> <span class="token function">popLast</span><span class="token punctuation">(</span>ArrayDeque <span class="token operator">*</span>deque<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token function">peekLast</span><span class="token punctuation">(</span>deque<span class="token punctuation">)</span><span class="token punctuation">;</span>
    deque<span class="token operator">-&gt;</span>queSize<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> num<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,63),m=[v];function b(g,f){return s(),a("div",null,m)}const w=n(d,[["render",b],["__file","5.栈与队列.html.vue"]]),L=JSON.parse('{"path":"/%E7%AE%97%E6%B3%95%E5%AD%A6%E4%B9%A0/1.%E7%AE%97%E6%B3%95%E7%9F%A5%E8%AF%86/5.%E6%A0%88%E4%B8%8E%E9%98%9F%E5%88%97.html","title":"第五章：栈与队列","lang":"zh-CN","frontmatter":{"date":"2024-03-05T00:00:00.000Z","order":5,"description":"第五章：栈与队列 1.栈 栈（stack）是一种遵循后进先出逻辑的线性数据结构 我们把堆叠元素的顶部称为“栈顶”，底部称为“栈底”。将把元素添加到栈顶的操作叫作“入栈”，删除栈顶元素的操作叫作“出栈” 1.1 栈的链式实现 使用链表实现栈时，我们可以将链表的头节点视为栈顶，尾节点视为栈底 对于入栈操作，我们只需将元素插入链表头部，这种节点插入方法被称为...","head":[["meta",{"property":"og:url","content":"https://github.com/jimbo-master/%E7%AE%97%E6%B3%95%E5%AD%A6%E4%B9%A0/1.%E7%AE%97%E6%B3%95%E7%9F%A5%E8%AF%86/5.%E6%A0%88%E4%B8%8E%E9%98%9F%E5%88%97.html"}],["meta",{"property":"og:site_name","content":"JimBoの学习妙妙屋"}],["meta",{"property":"og:title","content":"第五章：栈与队列"}],["meta",{"property":"og:description","content":"第五章：栈与队列 1.栈 栈（stack）是一种遵循后进先出逻辑的线性数据结构 我们把堆叠元素的顶部称为“栈顶”，底部称为“栈底”。将把元素添加到栈顶的操作叫作“入栈”，删除栈顶元素的操作叫作“出栈” 1.1 栈的链式实现 使用链表实现栈时，我们可以将链表的头节点视为栈顶，尾节点视为栈底 对于入栈操作，我们只需将元素插入链表头部，这种节点插入方法被称为..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"JimBo"}],["meta",{"property":"article:published_time","content":"2024-03-05T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第五章：栈与队列\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-05T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"JimBo\\",\\"url\\":\\"https://github.com/jimbo-master\\"}]}"]]},"headers":[{"level":2,"title":"1.栈","slug":"_1-栈","link":"#_1-栈","children":[{"level":3,"title":"1.1 栈的链式实现","slug":"_1-1-栈的链式实现","link":"#_1-1-栈的链式实现","children":[]},{"level":3,"title":"1.2 栈的顺序实现","slug":"_1-2-栈的顺序实现","link":"#_1-2-栈的顺序实现","children":[]},{"level":3,"title":"1.3 栈的两种实现对比","slug":"_1-3-栈的两种实现对比","link":"#_1-3-栈的两种实现对比","children":[]}]},{"level":2,"title":"2.队列","slug":"_2-队列","link":"#_2-队列","children":[{"level":3,"title":"2.1 队列的链式实现","slug":"_2-1-队列的链式实现","link":"#_2-1-队列的链式实现","children":[]},{"level":3,"title":"2.2 队列的顺序实现","slug":"_2-2-队列的顺序实现","link":"#_2-2-队列的顺序实现","children":[]}]},{"level":2,"title":"3.双向队列","slug":"_3-双向队列","link":"#_3-双向队列","children":[{"level":3,"title":"3.1 双向队列的链式实现","slug":"_3-1-双向队列的链式实现","link":"#_3-1-双向队列的链式实现","children":[]},{"level":3,"title":"3.2 双向队列的顺序实现","slug":"_3-2-双向队列的顺序实现","link":"#_3-2-双向队列的顺序实现","children":[]}]}],"git":{},"readingTime":{"minutes":12.64,"words":3792},"filePathRelative":"算法学习/1.算法知识/5.栈与队列.md","localizedDate":"2024年3月5日","autoDesc":true,"excerpt":"\\n<h2>1.栈</h2>\\n<figure><figcaption></figcaption></figure>\\n<p><strong>栈（stack）是一种遵循后进先出逻辑的线性数据结构</strong></p>\\n<p><strong>我们把堆叠元素的顶部称为“栈顶”，底部称为“栈底”。将把元素添加到栈顶的操作叫作“入栈”，删除栈顶元素的操作叫作“出栈”</strong></p>\\n<hr>\\n<h3>1.1 栈的链式实现</h3>\\n<figure><figcaption></figcaption></figure>\\n<p><strong>使用链表实现栈时，我们可以将链表的头节点视为栈顶，尾节点视为栈底</strong></p>"}');export{w as comp,L as data};
