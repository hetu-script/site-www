import{d as a}from"./app.e80a62a0.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=a(`<h1 id="variable" tabindex="-1"><a class="header-anchor" href="#variable" aria-hidden="true">#</a> Variable</h1><p>Variable is declared with &#39;var&#39;, &#39;final&#39;, &#39;late&#39;. The type annotation and initialize expression is optional.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">var</span> person<span class="token punctuation">;</span>
<span class="token keyword">var</span> fineStructureConstant<span class="token punctuation">:</span> num <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token number">137</span><span class="token punctuation">;</span>
<span class="token keyword">final</span> isTimeTravelSuccessful<span class="token punctuation">:</span> bool <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">final</span> skill<span class="token punctuation">:</span> <span class="token class-name">List</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;attack&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;defense&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>String literal can have interpolation the same to Javascript:</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">&#39;dragon&#39;</span>
<span class="token comment">// print: To kill the dragon, you have to wait 42 years.</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;To kill the \${a}, you have to wait \${6*7} years.&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>A little difference from Dart is that you have to write a curly brackets even if you have only one identifier.</p><h2 id="late-finalize" tabindex="-1"><a class="header-anchor" href="#late-finalize" aria-hidden="true">#</a> Late finalize</h2><p>You can declare a immutable symbol while not assign it with a value immediately by using keyword <strong>late</strong>.</p><p>It will become immutable after the first assignment.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>late a
<span class="token comment">// print(a) // Error: [a] is not initialized yet.</span>
a <span class="token operator">=</span> <span class="token number">42</span>
<span class="token function">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token comment">// a = &#39;dragon&#39; // Error: [a] is immutable.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="const" tabindex="-1"><a class="header-anchor" href="#const" aria-hidden="true">#</a> Const</h2><p>You can declare a const int/float/string value by keyword &#39;const&#39;.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">const</span> pi <span class="token operator">=</span> <span class="token number">3.1415926</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>You cannot declare a const expressions or functions for now. They are still WIP.</strong></p><h2 id="shadowing" tabindex="-1"><a class="header-anchor" href="#shadowing" aria-hidden="true">#</a> Shadowing</h2><p>It is possible to shadow a variable by defining another variable with the same name.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">42</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">&#39;yay!&#39;</span> <span class="token comment">/// not an error, this is another variable</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> Delete</h2><p>It is possible to delete a variable using &#39;delete&#39; keyword.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">42</span>
delete a
<span class="token function">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// error: a is undefined!</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,20);function t(r,p){return e}var i=n(s,[["render",t]]);export{i as default};