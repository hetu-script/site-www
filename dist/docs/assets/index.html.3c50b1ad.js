import{f as e}from"./app.41bb288d.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const n={},s=e(`<h1 id="error-exception" tabindex="-1"><a class="header-anchor" href="#error-exception" aria-hidden="true">#</a> Error &amp; exception</h1><p>You can manually throw a dart exception within the script using the <strong>assert</strong> or <strong>throw</strong> keyword.</p><h2 id="assert" tabindex="-1"><a class="header-anchor" href="#assert" aria-hidden="true">#</a> assert</h2><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">assert</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Will throw an &#39;assertion failed&#39; error. And the error message will contain the source code text in the parentheses to let you know why this happened.</p><p>The expression within the parentheses must be a boolean value.</p><h2 id="throw" tabindex="-1"><a class="header-anchor" href="#throw" aria-hidden="true">#</a> throw</h2><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">42</span>
<span class="token keyword">throw</span> <span class="token string-literal"><span class="token string">&#39;i is </span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">i</span><span class="token punctuation">}</span></span><span class="token string">!&#39;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Will throw an &#39;script throws&#39; error. And the error message will contain the toString() value of the expression after the keyword.</p><p>You have to provided a expression after the throw, although the value of that expression might be null.</p><h2 id="error-handling" tabindex="-1"><a class="header-anchor" href="#error-handling" aria-hidden="true">#</a> Error handling</h2><p>The script doesn&#39;t support &#39;try...catch&#39; functionality. It&#39;s not recommended to try to handle error within the script.</p>`,12);function r(t,o){return s}var c=a(n,[["render",r]]);export{c as default};
