import{_ as e,p as a,q as n,a1 as s}from"./framework-5866ffd3.js";const t={},r=s(`<h1 id="error-exception" tabindex="-1"><a class="header-anchor" href="#error-exception" aria-hidden="true">#</a> Error &amp; exception</h1><p>You can manually throw a dart exception within the script using the <strong>assert</strong> or <strong>throw</strong> keyword.</p><h2 id="assert" tabindex="-1"><a class="header-anchor" href="#assert" aria-hidden="true">#</a> assert</h2><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">assert</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Will throw an &#39;assertion failed&#39; error. And the error message will contain the source code text in the parentheses to let you know why this happened.</p><p>The expression within the parentheses must be a boolean value.</p><h2 id="throw" tabindex="-1"><a class="header-anchor" href="#throw" aria-hidden="true">#</a> throw</h2><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">42</span>
<span class="token keyword">throw</span> <span class="token string-literal"><span class="token string">&#39;i is </span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">i</span><span class="token punctuation">}</span></span><span class="token string">!&#39;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Will throw an &#39;script throws&#39; error. And the error message will contain the toString() value of the expression after the keyword.</p><p>You have to provided a expression after the throw, although the value of that expression might be null.</p><h2 id="error-handling" tabindex="-1"><a class="header-anchor" href="#error-handling" aria-hidden="true">#</a> Error handling</h2><p>The script doesn&#39;t support &#39;try...catch&#39; functionality. It&#39;s not recommended to try to handle error within the script.</p>`,12),o=[r];function i(p,d){return a(),n("div",null,o)}const c=e(t,[["render",i],["__file","index.html.vue"]]);export{c as default};
