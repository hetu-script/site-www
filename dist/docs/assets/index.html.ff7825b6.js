import{f as n}from"./app.41bb288d.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u8BED\u6CD5\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5\u5206\u6790" aria-hidden="true">#</a> \u8BED\u6CD5\u5206\u6790</h1><p>\u6CB3\u56FE\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5355\u72EC\u7684\u5DE5\u5177\u7C7B Analyzer\uFF0C\u53EF\u4EE5\u5728\u4E0D\u8FD0\u884C\u4EE3\u7801\u7684\u524D\u63D0\u4E0B\u5206\u6790\u6CB3\u56FE\u811A\u672C\u7684\u9519\u8BEF\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF1A</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:hetu_script/analyzer.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> hetu <span class="token operator">=</span> <span class="token class-name">HTAnalyzer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  hetu<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">final</span> result <span class="token operator">=</span> hetu<span class="token punctuation">.</span><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">r&#39;&#39;&#39;
    var i = &#39;Hello, world!&#39;
  &#39;&#39;&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>errors<span class="token punctuation">.</span>isNotEmpty<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Analyzer found </span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">result<span class="token punctuation">.</span>errors<span class="token punctuation">.</span>length</span><span class="token punctuation">}</span></span><span class="token string"> problems:&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">final</span> err <span class="token keyword">in</span> result<span class="token punctuation">.</span>errors<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Analyzer found 0 problem.&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Unkown error occurred during analysis.&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,3);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};
