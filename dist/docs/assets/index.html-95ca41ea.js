import{_ as e,M as t,p,q as o,R as n,t as a,N as c,V as r,a1 as l}from"./framework-3f81730e.js";const i={},d=l(`<h1 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h1><p>变量声明以 <strong>var, final, late, const</strong> 开头，类型注解和初始化值表达式是可选的。除了 var 之外的声明，都无法修改它的值。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">var</span> person
<span class="token keyword">var</span> fineStructureConstant<span class="token punctuation">:</span> num <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token number">137</span>
<span class="token keyword">final</span> isTimeTravelSuccessful<span class="token punctuation">:</span> bool <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">final</span> skill<span class="token punctuation">:</span> <span class="token class-name">List</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&#39;attack&#39;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;defense&#39;</span></span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常量" tabindex="-1"><a class="header-anchor" href="#常量" aria-hidden="true">#</a> 常量</h2><p>对于数字和字符串字面量，可以使用 const 声明来获得一个常量。此种类型的常量将会在编译前求值，因此在运行时会稍微提高效率。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">const</span> pi <span class="token operator">=</span> <span class="token number">3.1415926</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认情况下，不支持表达式的运算，即便表达式中的标识符也是常量。因此一个 const 声明的初始化值如果是表达式，则等同于 final 声明。因为表达式的值在运行时才会运算出来。</p><p>这个功能可以在河图 0.4.0 以上的版本中通过编译选项打开。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// 默认情况下等同于 final pi2 = 3.1415926 * 2</span>
<span class="token keyword">const</span> pi2 <span class="token operator">=</span> <span class="token number">3.1415926</span> <span class="token operator">*</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="延迟赋值" tabindex="-1"><a class="header-anchor" href="#延迟赋值" aria-hidden="true">#</a> 延迟赋值</h2><p>对于 var 和 final，在没有初始化时直接使用这个标识符，将会得到 null 值。</p><p>你可以使用 late 来禁止访问一个未初始化的常量。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>late a
<span class="token comment">// print(a) // Error: [a] is not initialized yet.</span>
a <span class="token operator">=</span> <span class="token number">42</span>
<span class="token function">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
a <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;dragon&#39;</span></span> <span class="token comment">// Error: [a] is immutable.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h2><p>你可以通过 delete 关键字来删除一个变量声明。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">42</span>
delete a
<span class="token function">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// error: a is undefined!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但你不能删除一个 class 上的成员。</p><h2 id="解构声明" tabindex="-1"><a class="header-anchor" href="#解构声明" aria-hidden="true">#</a> 解构声明</h2><p>在河图中，为了表达清晰的目的，<strong>你不能像 C++/Java 那样在一个声明中写多个标识符</strong>。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">var</span> a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token comment">// error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但你可以使用类似 Javascript/Kotlin 的结构声明。这种声明必须提供一个 Iterable 或者一个 struct/Map 作为初始化值。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// a = 1, b = 2, c = 3</span>
<span class="token keyword">var</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">7</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// x = 6, y = 7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当你解构声明的值来自数组时，你可以使用 &#39;_&#39; 关键字，忽略某个位置的变量。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token punctuation">[</span>_<span class="token punctuation">,</span> _<span class="token punctuation">,</span> z<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// z = 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,24),u=n("strong",null,"ResourceType.hetuScript",-1);function k(v,m){const s=t("RouterLink");return p(),o("div",null,[d,n("p",null,[a("注意：解构声明不可以"),c(s,{to:"/zh-Hans/guide/implementation_detail/#%E5%BB%B6%E8%BF%9F%E5%88%9D%E5%A7%8B%E5%8C%96"},{default:r(()=>[a("延迟初始化")]),_:1}),a("，因此只能在函数体或者 "),u,a(" 类型的代码文件中使用。")])])}const h=e(i,[["render",k],["__file","D:/_dev/hetu-script/docs/docs/.vuepress/.temp/pages/zh-Hans/grammar/variable/index.html.vue"]]);export{h as default};
