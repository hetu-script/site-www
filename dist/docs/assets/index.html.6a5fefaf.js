import{f as n}from"./app.41bb288d.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},t=n(`<h1 id="syntax-and-operators" tabindex="-1"><a class="header-anchor" href="#syntax-and-operators" aria-hidden="true">#</a> Syntax and operators</h1><h2 id="spread-syntax" tabindex="-1"><a class="header-anchor" href="#spread-syntax" aria-hidden="true">#</a> Spread syntax</h2><p>You can use spread syntax (&#39;...&#39;) in three places:</p><h3 id="function-call-argument" tabindex="-1"><a class="header-anchor" href="#function-call-argument" aria-hidden="true">#</a> Function call argument</h3><p>In function call&#39;s arguments. This means to &#39;spread&#39; the list object here to fill in the positional argument list.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>fun <span class="token function">someFunc</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
<span class="token function">someFunc</span><span class="token punctuation">(</span><span class="token operator">...</span>list<span class="token punctuation">)</span> <span class="token comment">// same to &#39;someFunc(5, 6)&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="list-literal" tabindex="-1"><a class="header-anchor" href="#list-literal" aria-hidden="true">#</a> List literal</h3><p>In list literal&#39;s value list, This means to &#39;spread&#39; the list object here to fill in the items.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> ht <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">...</span>list<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// same to [1, 2, 3, 4, 5, 6]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="struct-literal" tabindex="-1"><a class="header-anchor" href="#struct-literal" aria-hidden="true">#</a> Struct literal</h3><p>In struct literal&#39;s value list, This means to &#39;spread&#39; the struct object here to fill in the field.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">familyName</span><span class="token operator">:</span> <span class="token string">&#39;Hord&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;Luk&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> job <span class="token operator">=</span> <span class="token string">&#39;wood cutter&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>name<span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// same to:</span>
<span class="token comment">// {</span>
<span class="token comment">//   familyName: &#39;Hord&#39;,</span>
<span class="token comment">//   firstName: &#39;Luk&#39;,</span>
<span class="token comment">//   age: 23,</span>
<span class="token comment">//   job: &#39;wood cutter&#39;</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="null-check-syntax" tabindex="-1"><a class="header-anchor" href="#null-check-syntax" aria-hidden="true">#</a> Null check syntax</h2><p>The script is not planning to introduce null safety. However, there are some syntax to help do null check:</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">var</span> a <span class="token comment">// a is null</span>
<span class="token comment">// Nullable member get:</span>
<span class="token keyword">final</span> value <span class="token operator">=</span> a<span class="token operator">?</span><span class="token punctuation">.</span>value <span class="token comment">// value is null and we won&#39;t get errors</span>
<span class="token keyword">final</span> result <span class="token operator">=</span> a<span class="token operator">?</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// nullabla function call</span>
<span class="token comment">// If null then get another value</span>
<span class="token keyword">final</span> text <span class="token operator">=</span> a <span class="token operator">?</span><span class="token operator">?</span> <span class="token string-literal"><span class="token string">&#39;hi!&#39;</span></span> <span class="token comment">// text is &#39;hi!&#39;</span>
<span class="token comment">// If null then assign</span>
a <span class="token operator">?</span><span class="token operator">?</span><span class="token operator">=</span> <span class="token number">42</span>
<span class="token function">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// a is 42 now</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>The nullable check will pass to next unary postfix operator like a chain:</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">var</span> a <span class="token comment">// a is null</span>
<span class="token keyword">final</span> value <span class="token operator">=</span> a<span class="token operator">?</span><span class="token punctuation">.</span>collection<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// value is null and we won&#39;t get errors</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="new" tabindex="-1"><a class="header-anchor" href="#new" aria-hidden="true">#</a> new</h2><p>new is a explicit way to call a constructor. Its difference from normal function call is that you can omit the brackets if there&#39;s none arguments.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>struct <span class="token class-name">P</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;Jimmy&#39;</span></span>
<span class="token punctuation">}</span>
<span class="token keyword">final</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">P</span>
<span class="token function">print</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="operator-precedence" tabindex="-1"><a class="header-anchor" href="#operator-precedence" aria-hidden="true">#</a> Operator precedence</h2><p>Operators in Hetu is a subset of Dart:</p><table><thead><tr><th style="text-align:left;">Description</th><th style="text-align:left;">Operator</th><th style="text-align:center;">Associativity</th><th style="text-align:center;">Precedence</th></tr></thead><tbody><tr><td style="text-align:left;">Unary postfix</td><td style="text-align:left;">e., e?., e++, e--, e1[e2], e()</td><td style="text-align:center;">None</td><td style="text-align:center;">16</td></tr><tr><td style="text-align:left;">Unary prefix</td><td style="text-align:left;">-e, !e, ++e, --e</td><td style="text-align:center;">None</td><td style="text-align:center;">15</td></tr><tr><td style="text-align:left;">Multiplicative</td><td style="text-align:left;">*, /, ~/, %</td><td style="text-align:center;">Left</td><td style="text-align:center;">14</td></tr><tr><td style="text-align:left;">Additive</td><td style="text-align:left;">+,</td><td style="text-align:center;">Left</td><td style="text-align:center;">13</td></tr><tr><td style="text-align:left;">Relational</td><td style="text-align:left;">&lt;, &gt;, &lt;=, &gt;=, as, is, is!, in, in!</td><td style="text-align:center;">None</td><td style="text-align:center;">8</td></tr><tr><td style="text-align:left;">Equality</td><td style="text-align:left;">==, !=</td><td style="text-align:center;">None</td><td style="text-align:center;">7</td></tr><tr><td style="text-align:left;">Logical AND</td><td style="text-align:left;">&amp;&amp;</td><td style="text-align:center;">Left</td><td style="text-align:center;">6</td></tr><tr><td style="text-align:left;">Logical Or</td><td style="text-align:left;">||</td><td style="text-align:center;">Left</td><td style="text-align:center;">5</td></tr><tr><td style="text-align:left;">If null</td><td style="text-align:left;">??</td><td style="text-align:center;">Left</td><td style="text-align:center;">4</td></tr><tr><td style="text-align:left;">Conditional</td><td style="text-align:left;">e1 ? e2 : e3</td><td style="text-align:center;">Right</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:left;">Assignment</td><td style="text-align:left;">=, *=, /=, ~/=, +=, -=, ??=</td><td style="text-align:center;">Right</td><td style="text-align:center;">1</td></tr></tbody></table>`,23);function e(p,l){return t}var c=a(s,[["render",e]]);export{c as default};
