import{_ as c,M as s,p as i,q as l,R as a,t as n,N as e,V as r,a1 as t}from"./framework-5866ffd3.js";const u={},d=t(`<h1 id="类型系统" tabindex="-1"><a class="header-anchor" href="#类型系统" aria-hidden="true">#</a> 类型系统</h1><p><strong>注意: 河图的类型系统的实现目前并不完整，目前只起到注解的作用，并不能提供静态分析等帮助。</strong></p><h2 id="类型作为值" tabindex="-1"><a class="header-anchor" href="#类型作为值" aria-hidden="true">#</a> 类型作为值</h2><p>类型本身在河图中也是一个一等公民，可以作为表达式的值传递。</p><p>如果你想要在值表达式中获取一个类型的值，你必须使用 <code>type</code> 关键字：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>fun <span class="token function">checkType</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">when</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">type</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;a structural type&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// the function won&#39;t match here</span>
    <span class="token comment">// you have to use the exact type value here for match</span>
    <span class="token function">type</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token builtin">any</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;a function type&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型声明" tabindex="-1"><a class="header-anchor" href="#类型声明" aria-hidden="true">#</a> 类型声明</h2><p>类型声明以 <code>type</code> 作为关键字，用法类似变量声明，但类型声明必须提供一个初始化值。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">PType</span> <span class="token operator">=</span> Person
<span class="token keyword">type</span> <span class="token class-name">FuncTypedef</span> <span class="token operator">=</span> <span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> num
<span class="token keyword">type</span> <span class="token class-name">StructTypedef</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> str<span class="token punctuation">,</span>
  age<span class="token operator">:</span> num<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>河图中目前包括四种类型：</p><h3 id="内置类型" tabindex="-1"><a class="header-anchor" href="#内置类型" aria-hidden="true">#</a> 内置类型</h3><p>这些类型通常都是关键字：</p><h4 id="any" tabindex="-1"><a class="header-anchor" href="#any" aria-hidden="true">#</a> any</h4><p>等同于 Dart 中的 dynamic，任何值都可以赋值给一个 any 类型。</p><p><strong>void, never &amp; unknown 这三个关键字代表了其他的一些内置类型，但他们需要在静态类型检查阶段发挥作用，因此在目前版本中尚未被完全支持。</strong></p><h3 id="标称类型-nominal-type" tabindex="-1"><a class="header-anchor" href="#标称类型-nominal-type" aria-hidden="true">#</a> 标称类型（nominal type）</h3><p>class 关键字声明的类的名字，被称作标称类型：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="结构类型-structural-type" tabindex="-1"><a class="header-anchor" href="#结构类型-structural-type" aria-hidden="true">#</a> 结构类型（structural type）</h3>`,19),k={href:"https://zh.wikipedia.org/wiki/%E9%B8%AD%E5%AD%90%E7%B1%BB%E5%9E%8B",target:"_blank",rel:"noopener noreferrer"},v=t(`<p>它的语法类似于 struct 字面量，但在键名冒号后面跟着的一定是一个类型，而不是表达式。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">StructTypedef</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> str<span class="token punctuation">;</span>
  age<span class="token operator">:</span> num<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数类型" tabindex="-1"><a class="header-anchor" href="#函数类型" aria-hidden="true">#</a> 函数类型</h3><p>函数类型的写法类似函数声明，但它不能像函数声明一样省略某些部分。</p><p>它一定要包含一个圆括号括起来的参数列表（但可以为空），以及一个单箭头后面的返回值类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">FuncTypedef</span> <span class="token operator">=</span> <span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> num
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用-is-在运行时动态检查类型" tabindex="-1"><a class="header-anchor" href="#使用-is-在运行时动态检查类型" aria-hidden="true">#</a> 使用 is 在运行时动态检查类型</h2><p>使用 <strong>is</strong> 关键字可以在运行时动态检查某个值对应的类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>fun <span class="token function">doSomething</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token keyword">is</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;A String!&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token keyword">is</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;A Number!&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;Unknown type!&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-typeof-在运行时动态获取类型" tabindex="-1"><a class="header-anchor" href="#使用-typeof-在运行时动态获取类型" aria-hidden="true">#</a> 使用 typeof 在运行时动态获取类型</h2><p>使用 <strong>typeof</strong> 关键字可以在运行时动态获取某个值对应的类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>fun main <span class="token punctuation">{</span>
  <span class="token comment">// decalre a function typedef</span>
  <span class="token keyword">type</span> <span class="token class-name">FuncTypedef</span> <span class="token operator">=</span> <span class="token function">fun</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> num
  <span class="token comment">// assign a function to a value of a certain function type</span>
  <span class="token class-name"><span class="token keyword">var</span></span> numparse<span class="token operator">:</span> FuncTypedef <span class="token operator">=</span> <span class="token function">fun</span><span class="token punctuation">(</span>value<span class="token operator">:</span> str<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> num <span class="token punctuation">{</span> <span class="token keyword">return</span> num<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">}</span>
  <span class="token comment">// get a value&#39;s runtime type and return it from a function</span>
  <span class="token keyword">var</span> getType <span class="token operator">=</span> fun <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">typeof</span> numparse <span class="token punctuation">}</span>
  <span class="token keyword">var</span> FuncTypedef2 <span class="token operator">=</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// use this new type</span>
  <span class="token keyword">var</span> strlength<span class="token operator">:</span> FuncTypedef2 <span class="token operator">=</span> <span class="token function">fun</span><span class="token punctuation">(</span>value<span class="token operator">:</span> str<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> num <span class="token punctuation">{</span> <span class="token keyword">return</span> value<span class="token punctuation">.</span>length <span class="token punctuation">}</span>
  <span class="token comment">// expected output: 11</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token function">strlength</span><span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类型本身的类型永远是 &#39;type&#39;。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Functype</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token builtin">any</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> functype<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// type</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function m(y,h){const p=s("ExternalLinkIcon"),o=s("RouterLink");return i(),l("div",null,[d,a("p",null,[n("结构类型是一种"),a("a",k,[n("鸭子类型"),e(p)]),n("的实现. 和 "),e(o,{to:"/zh-Hans/grammar/struct/"},{default:r(()=>[n("struct")]),_:1}),n(" 配合使用。")]),v])}const f=c(u,[["render",m],["__file","index.html.vue"]]);export{f as default};
