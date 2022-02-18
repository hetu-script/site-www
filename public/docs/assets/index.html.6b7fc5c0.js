import{f as n}from"./app.d9a87ace.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B" aria-hidden="true">#</a> \u7C7B\u578B</h1><p><strong>\u6CE8\u610F: \u6CB3\u56FE\u7684\u7C7B\u578B\u7CFB\u7EDF\u7684\u5B9E\u73B0\u76EE\u524D\u5E76\u4E0D\u5B8C\u6574\uFF0C\u76EE\u524D\u53EA\u8D77\u5230\u6CE8\u89E3\u7684\u4F5C\u7528\uFF0C\u5E76\u4E0D\u80FD\u63D0\u4F9B\u9759\u6001\u5206\u6790\u7B49\u5E2E\u52A9\u3002</strong></p><h2 id="\u7C7B\u578B\u5B57\u9762\u91CF" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u5B57\u9762\u91CF" aria-hidden="true">#</a> \u7C7B\u578B\u5B57\u9762\u91CF</h2><p>\u7C7B\u578B\u672C\u8EAB\u5728\u6CB3\u56FE\u4E2D\u4E5F\u662F\u4E00\u4E2A\u4E00\u7B49\u516C\u6C11\uFF0C\u53EF\u4EE5\u4F5C\u4E3A\u8868\u8FBE\u5F0F\u7684\u503C\u4F20\u9012\u3002</p><h2 id="\u7C7B\u578B\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u58F0\u660E" aria-hidden="true">#</a> \u7C7B\u578B\u58F0\u660E</h2><p>\u7C7B\u578B\u58F0\u660E\u4EE5 type \u4F5C\u4E3A\u5173\u952E\u5B57\uFF0C\u7528\u6CD5\u7C7B\u4F3C\u53D8\u91CF\u58F0\u660E\uFF0C\u4F46\u7C7B\u578B\u58F0\u660E\u5FC5\u987B\u63D0\u4F9B\u4E00\u4E2A\u521D\u59CB\u5316\u503C\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">PType</span> <span class="token operator">=</span> Person
<span class="token keyword">type</span> <span class="token class-name">funcTypedef</span> <span class="token operator">=</span> <span class="token function">fun</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> num
<span class="token keyword">type</span> <span class="token class-name">structTypedef</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> str<span class="token punctuation">,</span>
  age<span class="token operator">:</span> num<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="typeof" tabindex="-1"><a class="header-anchor" href="#typeof" aria-hidden="true">#</a> typeof</h2><p>\u4F7F\u7528 <strong>typeof</strong> \u5173\u952E\u5B57\u53EF\u4EE5\u5728\u8FD0\u884C\u65F6\u52A8\u6001\u83B7\u53D6\u67D0\u4E2A\u503C\u5BF9\u5E94\u7684\u7C7B\u578B\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>fun main <span class="token punctuation">{</span>
  <span class="token comment">// decalre a function typedef</span>
  <span class="token keyword">type</span> <span class="token class-name">funcTypedef</span> <span class="token operator">=</span> <span class="token function">fun</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> num
  <span class="token comment">// assign a function to a value of a certain function type</span>
  <span class="token class-name"><span class="token keyword">var</span></span> numparse<span class="token operator">:</span> funcTypedef <span class="token operator">=</span> <span class="token function">fun</span><span class="token punctuation">(</span>value<span class="token operator">:</span> str<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> num <span class="token punctuation">{</span> <span class="token keyword">return</span> num<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">}</span>
  <span class="token comment">// get a value&#39;s runtime type and return it from a function</span>
  <span class="token keyword">var</span> getType <span class="token operator">=</span> fun <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">typeof</span> numparse <span class="token punctuation">}</span>
  <span class="token keyword">var</span> funcTypedef2 <span class="token operator">=</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// use this new type</span>
  <span class="token keyword">var</span> strlength<span class="token operator">:</span> funcTypedef2 <span class="token operator">=</span> <span class="token function">fun</span><span class="token punctuation">(</span>value<span class="token operator">:</span> str<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> num <span class="token punctuation">{</span> <span class="token keyword">return</span> value<span class="token punctuation">.</span>length <span class="token punctuation">}</span>
  <span class="token comment">// expected output: 11</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token function">strlength</span><span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u7C7B\u578B\u672C\u8EAB\u7684\u7C7B\u578B\u6C38\u8FDC\u662F &#39;type&#39;\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">functype</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span><span class="token builtin">any</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> functype<span class="token punctuation">)</span> <span class="token comment">// type</span>
<span class="token operator">&gt;&gt;&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,12);function e(t,o){return p}var l=s(a,[["render",e]]);export{l as default};
