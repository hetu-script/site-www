import{_ as n,p as a,q as s,a1 as t}from"./framework-5866ffd3.js";const e={},p=t(`<h1 id="function" tabindex="-1"><a class="header-anchor" href="#function" aria-hidden="true">#</a> Function</h1><p>Function is declared with <strong>fun</strong>, <strong>get</strong>, <strong>set</strong>, <strong>construct</strong>. The parameter list, return type and function body are all optional. For functions with no parameters, the empty brackets are also optional.</p><p>For a literal function expression, the function name is also optional if there&#39;s no type arguments and dart function typedef.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>fun <span class="token function">doubleIt</span><span class="token punctuation">(</span>n<span class="token operator">:</span> num<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> num <span class="token punctuation">{</span>
  <span class="token keyword">return</span> n <span class="token operator">*</span> <span class="token number">2</span>
<span class="token punctuation">}</span>

fun main <span class="token punctuation">{</span>
  <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token function">doubleIt</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span> <span class="token comment">// expect 14</span>
  <span class="token function">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For functions declared with <strong>fun</strong>, when no return type is provided in declaration, it will have a return type of <strong>any</strong>. And it will return the last expression&#39;s value if you didn&#39;t write return statement within the definition body.</p><p>Functions can be nested, and nested functions can have names.</p><p>Return type is marked by a single arrow (&#39;-&gt;&#39;) after the parameters brackets.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>fun <span class="token function">closure</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">42</span>
  fun nested <span class="token punctuation">{</span>
    i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token keyword">return</span><span class="token punctuation">(</span><span class="token function">func</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> nested
<span class="token punctuation">}</span>

fun main <span class="token punctuation">{</span>
  <span class="token keyword">var</span> func <span class="token operator">=</span> <span class="token function">closure</span><span class="token punctuation">(</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> n <span class="token operator">*</span> n <span class="token punctuation">)</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// print: 1849</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// print: 1936</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Function are first class in Hetu script, you can pass them as arguments, return value and store/rebind them to variables.</p><h2 id="single-line-function-body" tabindex="-1"><a class="header-anchor" href="#single-line-function-body" aria-hidden="true">#</a> Single line function body</h2><p>Just like in Dart, you can write a single line expression after &#39;=&gt;&#39; as function body.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">var</span> func <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> x <span class="token operator">*</span> x
<span class="token keyword">final</span> sq <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">// sq = 16</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="optional-parameter" tabindex="-1"><a class="header-anchor" href="#optional-parameter" aria-hidden="true">#</a> Optional parameter</h2><p>You can use positional parameter or named parameter in your parameter declarations, and you can give them default values.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>fun <span class="token function">posParam</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> <span class="token punctuation">[</span>b <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">*</span> b
<span class="token punctuation">}</span>

final r1 <span class="token operator">=</span> <span class="token function">posParam</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token comment">// r1 = 42</span>

fun <span class="token function">namedParam</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">*</span> b
<span class="token punctuation">}</span>

final r2 <span class="token operator">=</span> <span class="token function">namedParam</span><span class="token punctuation">(</span>b<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">// r2 = 30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="variadic-parameter" tabindex="-1"><a class="header-anchor" href="#variadic-parameter" aria-hidden="true">#</a> Variadic parameter</h2><p>In function declaration&#39;s parameters. &#39;...&#39; means you can pass as many positional arguments as you wish.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>external fun <span class="token function">print</span><span class="token punctuation">(</span><span class="token operator">...</span> args<span class="token operator">:</span> any<span class="token punctuation">)</span>

<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;world!&#39;</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">)</span> <span class="token comment">// okay!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="omit-parameter" tabindex="-1"><a class="header-anchor" href="#omit-parameter" aria-hidden="true">#</a> Omit parameter</h2><p>In function declaration&#39;s parameters. &#39;_&#39; means you won&#39;t use this positional parameter in this implementation of a function type. This is useful in functional programming.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>fun <span class="token function">test1</span><span class="token punctuation">(</span><span class="token parameter">expect<span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token punctuation">[</span>arg<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;running test1 with \${arg}: expect \${expect}, value \${value}&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

fun <span class="token function">test2</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token punctuation">[</span>_<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

fun <span class="token function">run</span><span class="token punctuation">(</span><span class="token parameter">expect<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">test1</span><span class="token punctuation">(</span>expect<span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token string">&#39;test1&#39;</span><span class="token punctuation">)</span>
  <span class="token function">test2</span><span class="token punctuation">(</span>expect<span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token string">&#39;test2&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="return-value" tabindex="-1"><a class="header-anchor" href="#return-value" aria-hidden="true">#</a> Return value</h2><p>If there&#39;s a return statement is the function body, it will return the value of the expression after the keyword.</p><p>If there&#39;s no return type declaration nor return statement in the actual function body. Functions will inexplicitly return the last expression&#39;s value as its return value.</p><h2 id="literal-function-sometimes-called-function-expression-anonymous-function-closure-or-lambda" tabindex="-1"><a class="header-anchor" href="#literal-function-sometimes-called-function-expression-anonymous-function-closure-or-lambda" aria-hidden="true">#</a> Literal function (sometimes called function expression, anonymous function, closure or lambda)</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>fun <span class="token function">closure</span><span class="token punctuation">(</span><span class="token parameter">func</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">42</span>
  fun <span class="token function">nested</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token function">func</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> nested
<span class="token punctuation">}</span>

<span class="token keyword">var</span> func <span class="token operator">=</span> <span class="token function">closure</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> n <span class="token operator">*</span> n <span class="token punctuation">)</span>
<span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A literal function can have no keyword, in this situation, the parameter brackets are not omittable even if it&#39;s empty. The following way to define a function is all okay and they are the same to the compiler.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">final</span> func0 <span class="token operator">=</span> fun meaning <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">42</span> <span class="token punctuation">}</span>
<span class="token keyword">final</span> func1 <span class="token operator">=</span> fun <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">42</span> <span class="token punctuation">}</span>
<span class="token keyword">final</span> func2 <span class="token operator">=</span> fun <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">42</span>
<span class="token keyword">final</span> func3 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token number">42</span> <span class="token punctuation">}</span>
<span class="token keyword">final</span> func4 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">42</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="immediately-run-literal-function" tabindex="-1"><a class="header-anchor" href="#immediately-run-literal-function" aria-hidden="true">#</a> Immediately run literal function</h2><p>Literal function is an expression, hence it has value, so just like in Javascript, you can immediately call it after the definition:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">Future</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token number">42</span> <span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token number">41</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The above output should be 41 then 42, because although the 42 is print in the first call, it happens later because it is wrapped in a future.</p><h2 id="bind-a-literal-function-to-a-struct" tabindex="-1"><a class="header-anchor" href="#bind-a-literal-function-to-a-struct" aria-hidden="true">#</a> Bind a literal function to a struct</h2><p>You can bind a literal function (and only a literal function) onto a literal struct object and get a new function.</p><p>This is useful when you want to seperate data and logic, and still want the function to be able to have &#39;this&#39; keyword.</p><p>Notice that this method won&#39;t modify the function itself. It will give you a new function instead.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">final</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;nobody&#39;</span></span>
<span class="token punctuation">}</span>
<span class="token keyword">final</span> func <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;foobar&#39;</span></span>
<span class="token punctuation">}</span>
<span class="token keyword">final</span> newfunc <span class="token operator">=</span>func<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token function">newfunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// &#39;foobar&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="apply-a-literal-function-to-a-struct" tabindex="-1"><a class="header-anchor" href="#apply-a-literal-function-to-a-struct" aria-hidden="true">#</a> Apply a literal function to a struct</h2><p>You can apply a literal function (and only a literal function) onto a literal struct object and get the function call result, as if the function is the member of that object.</p><p>Apply is a one time action and will neither modify the function nor generate a new one.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">final</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;nobody&#39;</span></span>
<span class="token punctuation">}</span>
<span class="token keyword">final</span> greeting <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Hi! I\\&#39;m </span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token keyword">this</span><span class="token punctuation">.</span>name</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
greeting<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41),o=[p];function i(c,l){return a(),s("div",null,o)}const r=n(e,[["render",i],["__file","index.html.vue"]]);export{r as default};
