import{_ as p,M as c,p as o,q as r,R as e,t as n,N as t,V as i,a1 as a}from"./framework-3f81730e.js";const l={},d=a('<h1 id="语法概要" tabindex="-1"><a class="header-anchor" href="#语法概要" aria-hidden="true">#</a> 语法概要</h1><p>河图的语法类似 typescript/kotlin/swift 等现代语言，通常只需要了解一些关键点即可直接上手使用：</p><h2 id="声明以关键字开头" tabindex="-1"><a class="header-anchor" href="#声明以关键字开头" aria-hidden="true">#</a> 声明以关键字开头</h2><p>河图中所有的声明都以关键字开头。例如：</p><p><strong>var, final, const, fun, construct, get, set, class, type</strong></p><h2 id="分号可选" tabindex="-1"><a class="header-anchor" href="#分号可选" aria-hidden="true">#</a> 分号可选</h2><p>河图中的分号是可选的。大多数时候编译器和解释器会自动分清语句的间隔。</p><h2 id="类型注解" tabindex="-1"><a class="header-anchor" href="#类型注解" aria-hidden="true">#</a> 类型注解</h2><p>类型注解是可选的，以冒号形式写在标识符后面。</p><h2 id="模式匹配" tabindex="-1"><a class="header-anchor" href="#模式匹配" aria-hidden="true">#</a> 模式匹配</h2>',10),u=a(`<h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2><p>普通注释：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// This is a comment.</span>
<span class="token comment">/* These are multi-line comments:
another line.*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文档注释：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/// This is a documentation comment</span>
fun <span class="token function">myFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> int <span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="私有标识符" tabindex="-1"><a class="header-anchor" href="#私有标识符" aria-hidden="true">#</a> 私有标识符</h2><p>以 &#39;_&#39; 开头的标识符作为私有标识符。只能在其声明的命名空间才可以访问。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> _name
  construct <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    _name <span class="token operator">=</span> name
  <span class="token punctuation">}</span>
  fun greeting <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Hi, I\\&#39;m &#39;</span></span><span class="token punctuation">,</span> _name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">final</span> p <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;jimmy&#39;</span></span><span class="token punctuation">)</span>
<span class="token comment">// print(p._name) // Error!</span>
p<span class="token punctuation">.</span><span class="token function">greeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="表达式和语句" tabindex="-1"><a class="header-anchor" href="#表达式和语句" aria-hidden="true">#</a> 表达式和语句</h2><p>河图中，所有语句都是表达式，因此也具有值。</p><p>例如变量声明和变量赋值，都会返回变量的值。对于下面的代码</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">=</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),m=a(`<h1 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块" aria-hidden="true">#</a> 代码块</h1><p>河图中的代码块会返回最后一个表达式的值：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>fun <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> x <span class="token operator">=</span> n <span class="token operator">*</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述函数的返回值就是 n * 2</p>`,4);function v(h,k){const s=c("RouterLink");return o(),r("div",null,[d,e("p",null,[n("河图没有使用 switch，而是使用 "),t(s,{to:"/zh-Hans/grammar/control_flow/#when"},{default:i(()=>[n("when 语句")]),_:1}),n(" 进行简单的模式匹配。")]),u,e("p",null,[n("如果 a 的值可以"),t(s,{to:"/zh-Hans/grammar/strict_mode/#%E5%B8%83%E5%B0%94%E5%80%BC"},{default:i(()=>[n("隐式转换")]),_:1}),n("为真，则 if 表达式将会执行。")]),m])}const g=p(l,[["render",v],["__file","D:/_dev/hetu-script/docs/docs/.vuepress/.temp/pages/zh-Hans/grammar/index.html.vue"]]);export{g as default};
