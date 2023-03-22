<<<<<<< HEAD:public/docs/assets/index.html-dc2c9bc2.js
import{_ as n,p as s,q as a,a1 as t}from"./framework-5866ffd3.js";const p={},e=t(`<h1 id="语法分析" tabindex="-1"><a class="header-anchor" href="#语法分析" aria-hidden="true">#</a> 语法分析</h1><p><strong>注意: 河图的类型系统相关工具并不完整，并不建议在生产中使用 Analyzer 或者打开 HetuConfig 上的 doStaticAnalysis 和 computeConstantExpression 开关。</strong></p><p>河图提供了一个单独的工具类 Analyzer，可以在不运行代码的前提下分析河图脚本的错误。下面是一个简单的例子：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:hetu_script/analyzer.dart&#39;</span></span><span class="token punctuation">;</span>
=======
import{_ as n,p as s,q as a,a1 as t}from"./framework-3f81730e.js";const p={},e=t(`<h1 id="语法分析" tabindex="-1"><a class="header-anchor" href="#语法分析" aria-hidden="true">#</a> 语法分析</h1><p><strong>注意: 河图的类型系统相关工具并不完整，并不建议在生产中使用 Analyzer 或者打开 HetuConfig 上的 doStaticAnalysis 和 computeConstantExpression 开关。</strong></p><p>河图提供了一个单独的工具类 Analyzer，可以在不运行代码的前提下分析河图脚本的错误。下面是一个简单的例子：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:hetu_script/analyzer.dart&#39;</span></span><span class="token punctuation">;</span>
>>>>>>> dee888921332bf6f89741e1a04f7c3d00bf5850c:dist/docs/assets/index.html-2ab876df.js

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

<<<<<<< HEAD:public/docs/assets/index.html-dc2c9bc2.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","index.html.vue"]]);export{r as default};
=======
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","D:/_dev/hetu-script/docs/docs/.vuepress/.temp/pages/zh-Hans/guide/analyzer/index.html.vue"]]);export{r as default};
>>>>>>> dee888921332bf6f89741e1a04f7c3d00bf5850c:dist/docs/assets/index.html-2ab876df.js