import{d as n}from"./app.10f2113a.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="private-members" tabindex="-1"><a class="header-anchor" href="#private-members" aria-hidden="true">#</a> Private members</h1><p>You can specify a private member of a class/namespace/source by making its name starts with &#39;_&#39;.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> _name
  construct <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    _name <span class="token operator">=</span> name
  <span class="token punctuation">}</span>
  fun greeting <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;Hi, I\\&#39;m &#39;</span><span class="token punctuation">,</span> _name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">final</span> p <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;jimmy&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// print(p._name) // Error!</span>
p<span class="token punctuation">.</span><span class="token function">greeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,3);function p(t,c){return e}var l=s(a,[["render",p]]);export{l as default};
