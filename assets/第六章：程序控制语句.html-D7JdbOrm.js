import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as t}from"./app-Dezzdk4T.js";const e="/assets/%E9%A1%BA%E5%BA%8F%E6%8E%A7%E5%88%B6-sNQtZ5_n.png",p="/assets/%E5%8D%95%E5%90%91%E5%88%86%E6%94%AF-CwuJy7tp.png",i="/assets/%E5%8F%8C%E5%90%91%E5%88%86%E6%94%AF-cUozW_l8.png",c="/assets/%E5%A4%9A%E9%A1%B9%E5%88%86%E6%94%AF-BzyQ6vhB.png",o="/assets/while%E5%BE%AA%E7%8E%AF-tGu6_sJW.png",l="/assets/dowhile%E5%BE%AA%E7%8E%AF-BFF0VQug.png",u="/assets/for%E5%BE%AA%E7%8E%AF-BcPGpDop.png",r="/assets/break-CB-QQXbV.png",d="/assets/continue-BsQdoXfG.png",k="/assets/goto-bDbtT4HD.png",v={},m=t('<h1 id="第六章-程序控制语句" tabindex="-1"><a class="header-anchor" href="#第六章-程序控制语句"><span>第六章：程序控制语句</span></a></h1><p><strong>主要有三大流程控制语句：顺序控制、分支控制、循环控制语句</strong><br><strong>非主要控制语句：跳转控制语句</strong></p><h2 id="_1-顺序控制语句" tabindex="-1"><a class="header-anchor" href="#_1-顺序控制语句"><span>1.顺序控制语句</span></a></h2><p><strong>程序从上到下逐行地执行，表达式语句都是顺序执行的。并且上一行对某个变量的修改对下一行会产生影响</strong><br><img src="'+e+`" alt="" loading="lazy"></p><hr><h2 id="_2-分支控制语句" tabindex="-1"><a class="header-anchor" href="#_2-分支控制语句"><span>2.分支控制语句</span></a></h2><p><strong>（1）单向分支</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>条件表达式<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    执行代码块；
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>当条件表达式为真（非0时，就会执行代码块语句，条件表达式为假（0）时，不会执行代码块</strong></p></blockquote><figure><img src="`+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">//输入年龄，如果是未成年，则提示 “未成年人请在家长陪同下访问!</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入年龄&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 根据age的值来处理</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">&lt;</span> <span class="token number">18</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;未成年人请在家长陪同下访问！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;欢迎继续访问！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（2）双向分支</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>条件表达式<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    执行代码块<span class="token number">1</span>；
<span class="token punctuation">}</span>
<span class="token keyword">else</span>
<span class="token punctuation">{</span>
    执行代码块<span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>当条件表达式成立（为真），执行代码块1，否则执行代码块2</strong></p></blockquote><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">//输入年龄，如果大于18岁，则输出 “你年龄大于18，要对自己的行为负责!”，否则，输出”你的年龄不大这次放过你了</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入年龄&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">&gt;</span> <span class="token number">18</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n你年龄大于18，要对自己的行为负责!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n你的年龄不大，这次放过你了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（3）多向分支：else if</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">//当条件表达式1成立时，即执行代码块1，如果表达式1不成立，才去判断表达式2是否成立，如果表达式2成立，就执行代码块2，以此类推如果所有的表达式都不成立，则执行else 的代码块</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>条件表达式<span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    执行代码块<span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>条件表达式<span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    执行代码块<span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> 
<span class="token keyword">else</span>
<span class="token punctuation">{</span>
    执行代码块n<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">//张三参加考试，他和父亲达成协议，如果成绩不到 60 分没有任何奖励；如果成绩 60分（含）到80分，奖励一个肉夹馍；如果成绩80分（含）到90分，奖励一个 ipad；如果成绩90分及以上，奖励一部华为mate60 pro</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 定义变量记录成绩</span>
    <span class="token keyword">double</span> score<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入你的成绩：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%lf&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>score<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 根据成绩进行判断</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>score <span class="token operator">&lt;</span> <span class="token number">60</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;你的成绩不及格，没有任何奖励！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>score <span class="token operator">&lt;</span> <span class="token number">80</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;奖励你一个肉夹馍&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>score <span class="token operator">&lt;</span> <span class="token number">90</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;奖励你一个ipad&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>score <span class="token operator">&gt;=</span> <span class="token number">90</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;奖励你一部华为 mate60 pro,遥遥领先！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;输入无效！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（4）多向分支：switch</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">switch</span> <span class="token punctuation">(</span>表达式<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">case</span> 常量值<span class="token number">1</span><span class="token operator">:</span>
       语句块<span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> 常量值<span class="token number">2</span><span class="token operator">:</span>
       语句块<span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
   … <span class="token keyword">case</span> 常量值n<span class="token operator">:</span>
        语句块n<span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
       语句块n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明：</strong><br><strong>switch后面表达式的值必须是一个整型（char、short, int, long等）或枚举类型</strong><br><br><strong>case后面的值必须是常量，而不能是变量</strong><br><br><strong>default是可选的，当没有匹配的case时，执行default</strong><br><br><strong>break语句可以使程序跳出switch语句块，如果没有break，会执行下一个case 语句块，直到遇到break或者执行到switch结尾，这个现象称为穿透</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">char</span> c<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入一个字符(a,b,c,d)：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%c&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">switch</span> <span class="token punctuation">(</span>c<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token char">&#39;a&#39;</span><span class="token operator">:</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;今天星期一, 猴子穿新衣&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token char">&#39;b&#39;</span><span class="token operator">:</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;今天星期二, 猴子当小二&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token char">&#39;c&#39;</span><span class="token operator">:</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;今天星期三, 猴子爬雪山&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token char">&#39;d&#39;</span><span class="token operator">:</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;今天星期四, 猴子有急事&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;没有匹配到任何值~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;switch 结束~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（5）switch和if else if的比较</strong></p><blockquote><p><strong>如果判断条件是判等，而且符合整型、枚举类型，虽然两个语句都可以使用，建议使用swtich语句</strong><br><br><strong>如果判断条件是区间判断，大小判断等，使用if else if，注意使用最短路径，也就是先判断不合适的</strong><br><br><strong>一般来说都不用switch，嵌套太深了，各功能模块都是抽离出来适用的</strong></p></blockquote><p><strong>（6）嵌套分支</strong></p><blockquote><p><strong>嵌套分支是指，在一个分支结构中又嵌套了另一个分支结构，里面的分支的结构称为内层分支，外面的分支结构称为外层分支。嵌套分支层数不宜过多，建议最多不要超过3层</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
        <span class="token keyword">case</span> …
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 获取用户输入的油号和油量</span>
    <span class="token keyword">int</span> oilN<span class="token punctuation">,</span> oilL<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入油号：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>oilN<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入油量：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>oilL<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 定义变量记录价格</span>
    <span class="token keyword">double</span> price<span class="token punctuation">;</span>

    <span class="token comment">// 嵌套分支</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>oilN<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">92</span><span class="token operator">:</span>
        price <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>oilL <span class="token operator">&gt;=</span> <span class="token number">40</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            price <span class="token operator">=</span> <span class="token number">3.5</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;您本次加油需支付：%.2f&quot;</span><span class="token punctuation">,</span> price <span class="token operator">*</span> oilL<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">95</span><span class="token operator">:</span>
        price <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>oilL <span class="token operator">&gt;=</span> <span class="token number">40</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            price <span class="token operator">=</span> <span class="token number">4.5</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;您本次加油需支付：%.2f&quot;</span><span class="token punctuation">,</span> price <span class="token operator">*</span> oilL<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;本加油站没有您所需油号！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_3-循环控制语句" tabindex="-1"><a class="header-anchor" href="#_3-循环控制语句"><span>3.循环控制语句</span></a></h2><p><strong>（1）while循环</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">while</span> <span class="token punctuation">(</span>循环条件表达式<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    循环体语句<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>当循环条件表达式成立，就执行循环体语句，直到条件不成立停止循环<br> 为避免死循环，循环条件表达式不能永远成立，且随着循环次数增加，应该越来越趋向于不成立</strong></p></blockquote><figure><img src="`+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token comment">//输出10次 &quot;我第n天吃了n个韭菜馅的包子</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 输出10次 &quot;我第n天吃了n个韭菜馅的包子&quot;</span>
    <span class="token comment">// 定义循环变量</span>
    <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// 开始循环</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;我第%d天吃了%d个韭菜馅的包子 \\n&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 循环标记变量变化</span>
        num<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;循环结束后循环变量的值：%d&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（2）do...while循环</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">do</span>
<span class="token punctuation">{</span>
    循环体语句；
<span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>循环条件表达式<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>do…while循环是先执行再判断，但只有第一次循环语句的执行没有经过判断，以后的每一次仍然先经过判断</strong><br><br><strong>注意：while后面的分号不能省略</strong></p></blockquote><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 输出10次 &quot;我第n天吃了n个韭菜馅的包子&quot;</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">do</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;我第%d天吃了%d个韭菜馅的包子 \\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        i<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;循环结束后循环变量的值：%i&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（3）for循环</strong></p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">for</span> <span class="token punctuation">(</span>循环变量初始化<span class="token punctuation">;</span> 循环条件表达式<span class="token punctuation">;</span> 循环变量变化<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    循环语句<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>循环变量初化只执行一次，且循环开始前就执行</strong><br><br><strong>循环条件表达式每次循环都执行，同while循环一样，每次先判断后执行循环体语句</strong><br><br><strong>循环标记变量变化每次循环都执行，在大括号中循环体语句之后执行</strong></p></blockquote><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 输出10次 &quot;我第n天吃了n个韭菜馅的包子&quot;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;我第%d天吃了%d个韭菜馅的包子 \\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（4）多重循环</strong></p><blockquote><p><strong>将一个循环放在另一个循环体内，就形成了嵌套循环， 其中，for、while、do…while均可以作为外层循环和内层循环，建议一般使用两层，最多不要超过3层，如果嵌套循环过多，会造成可读性降低</strong><br><br><strong>如果外层循环次数为m次，内层为n次，则内层循环体实际上需要执行m*n次</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 输入列数和行数</span>
    <span class="token keyword">int</span> rows<span class="token punctuation">,</span> cols<span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入行数：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>rows<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;请输入列数：&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>cols<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 循环</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> rows<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> cols<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;[%d,%d]  &quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//假如输入：4行，7列</span>
    <span class="token comment">/*
        [0,0]  [0,1]  [0,2]  [0,3]  [0,4]  [0,5]  [0,6]
        [1,0]  [1,1]  [1,2]  [1,3]  [1,4]  [1,5]  [1,6]
        [2,0]  [2,1]  [2,2]  [2,3]  [2,4]  [2,5]  [2,6]
        [3,0]  [3,1]  [3,2]  [3,3]  [3,4]  [3,5]  [3,6]
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_4-跳转控制语句" tabindex="-1"><a class="header-anchor" href="#_4-跳转控制语句"><span>4.跳转控制语句</span></a></h2><p><strong>（1）break</strong></p><blockquote><p><strong>break语句用于终止某个语句块的执行，用在switch语句或者循环语句中</strong></p></blockquote><figure><img src="`+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d \\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
        0 
        1 
        2
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（2）continue</strong></p><blockquote><p><strong>continue语句用于结束本次循环，继续执行下一次循环</strong></p></blockquote><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">continue</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d \\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/*
        0 
        1 
        2
        4
        5
        6
        7
        8
        9
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（3）goto语句</strong></p><blockquote><p><strong>goto语句是一种跳转语句，它允许程序控制流程在代码中跳转到带有标签（label）的语句处，标签（label）的名称可以自行设置，需要满足标识符规范</strong><br><br><strong>我们在开发中不建议使用goto语句，但我们需要掌握 goto 语句的执行流程，以能够看懂其他开发者的代码中可能出现的 goto 语句</strong></p></blockquote><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">goto</span> 标签名  <span class="token comment">// 跳转到指定的标签（label）处</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
标签名<span class="token operator">:</span>      <span class="token comment">// 定义一个标签（label）</span>
语句<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意：goto 后面如果引用了没有定义的标签，编译器会报错！</strong></p></blockquote><figure><img src="`+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;start \\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">goto</span> label1<span class="token punctuation">;</span> <span class="token comment">// label1是标签名</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ok1 \\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ok2 \\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
label1<span class="token operator">:</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ok3 \\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;ok4 \\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*
        start 
        ok3
        ok4
    */</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,66),b=[m];function g(f,y){return s(),a("div",null,b)}const q=n(v,[["render",g],["__file","第六章：程序控制语句.html.vue"]]),_=JSON.parse('{"path":"/%E7%BC%96%E7%A8%8B%E5%AD%A6%E4%B9%A0/1.C%E8%AF%AD%E8%A8%80/%E7%AC%AC%E5%85%AD%E7%AB%A0%EF%BC%9A%E7%A8%8B%E5%BA%8F%E6%8E%A7%E5%88%B6%E8%AF%AD%E5%8F%A5.html","title":"第六章：程序控制语句","lang":"zh-CN","frontmatter":{"date":"2024-01-06T00:00:00.000Z","order":7,"description":"第六章：程序控制语句 主要有三大流程控制语句：顺序控制、分支控制、循环控制语句 非主要控制语句：跳转控制语句 1.顺序控制语句 程序从上到下逐行地执行，表达式语句都是顺序执行的。并且上一行对某个变量的修改对下一行会产生影响 2.分支控制语句 （1）单向分支 当条件表达式为真（非0时，就会执行代码块语句，条件表达式为假（0）时，不会执行代码块 （2）双向...","head":[["meta",{"property":"og:url","content":"https://github.com/jimbo-master/%E7%BC%96%E7%A8%8B%E5%AD%A6%E4%B9%A0/1.C%E8%AF%AD%E8%A8%80/%E7%AC%AC%E5%85%AD%E7%AB%A0%EF%BC%9A%E7%A8%8B%E5%BA%8F%E6%8E%A7%E5%88%B6%E8%AF%AD%E5%8F%A5.html"}],["meta",{"property":"og:site_name","content":"JimBoの学习妙妙屋"}],["meta",{"property":"og:title","content":"第六章：程序控制语句"}],["meta",{"property":"og:description","content":"第六章：程序控制语句 主要有三大流程控制语句：顺序控制、分支控制、循环控制语句 非主要控制语句：跳转控制语句 1.顺序控制语句 程序从上到下逐行地执行，表达式语句都是顺序执行的。并且上一行对某个变量的修改对下一行会产生影响 2.分支控制语句 （1）单向分支 当条件表达式为真（非0时，就会执行代码块语句，条件表达式为假（0）时，不会执行代码块 （2）双向..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"JimBo"}],["meta",{"property":"article:published_time","content":"2024-01-06T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第六章：程序控制语句\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-06T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"JimBo\\",\\"url\\":\\"https://github.com/jimbo-master\\"}]}"]]},"headers":[{"level":2,"title":"1.顺序控制语句","slug":"_1-顺序控制语句","link":"#_1-顺序控制语句","children":[]},{"level":2,"title":"2.分支控制语句","slug":"_2-分支控制语句","link":"#_2-分支控制语句","children":[]},{"level":2,"title":"3.循环控制语句","slug":"_3-循环控制语句","link":"#_3-循环控制语句","children":[]},{"level":2,"title":"4.跳转控制语句","slug":"_4-跳转控制语句","link":"#_4-跳转控制语句","children":[]}],"git":{},"readingTime":{"minutes":8.21,"words":2463},"filePathRelative":"编程学习/1.C语言/第六章：程序控制语句.md","localizedDate":"2024年1月6日","autoDesc":true,"excerpt":"\\n<p><strong>主要有三大流程控制语句：顺序控制、分支控制、循环控制语句</strong><br>\\n<strong>非主要控制语句：跳转控制语句</strong></p>\\n<h2>1.顺序控制语句</h2>\\n<p><strong>程序从上到下逐行地执行，表达式语句都是顺序执行的。并且上一行对某个变量的修改对下一行会产生影响</strong><br>\\n</p>\\n<hr>\\n<h2>2.分支控制语句</h2>\\n<p><strong>（1）单向分支</strong></p>\\n<div class=\\"language-c\\" data-ext=\\"c\\" data-title=\\"c\\"><pre class=\\"language-c\\"><code><span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>条件表达式<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">{</span>\\n    执行代码块；\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>"}');export{q as comp,_ as data};
