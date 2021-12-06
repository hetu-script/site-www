import{_ as n,c as a,o as s,a as t}from"./app.609e1861.js";const f='{"title":"Advanced topics - Hetu Script Language","description":"","frontmatter":{"title":"Advanced topics - Hetu Script Language"},"headers":[{"level":2,"title":"Future","slug":"future"}],"relativePath":"en-US/advanced/index.md","lastUpdated":1638781637660}',e={},p=t(`__VP_STATIC_START__<h1 id="advanced-topics" tabindex="-1">Advanced topics <a class="header-anchor" href="#advanced-topics" aria-hidden="true">#</a></h1><h2 id="future" tabindex="-1">Future <a class="header-anchor" href="#future" aria-hidden="true">#</a></h2><p>The script is single threaded and all functions are sync. We do not support making futures within the script, and not planning to do so.</p><p>However, it is possible for an external function to return a Future value.</p><p>To make things easy, we added a simple wrapper for Dart&#39;s Future object. You can use the &#39;then&#39; method to do something when the Dart Future is completed.</p><p>Example:</p><div class="language-dart"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;package:hetu_script/hetu_script.dart&#39;</span><span class="token punctuation">;</span>

<span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">&gt;</span></span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Imagine that this function is fetching user info from another service or database.</span>
  <span class="token keyword">return</span> <span class="token class-name">Future</span><span class="token punctuation">.</span><span class="token function">delayed</span><span class="token punctuation">(</span>
      <span class="token keyword">const</span> <span class="token class-name">Duration</span><span class="token punctuation">(</span>seconds<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;Hello world after 2 seconds!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> hetu <span class="token operator">=</span> <span class="token class-name">Hetu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  hetu<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>externalFunctions<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">&#39;fetch&#39;</span><span class="token punctuation">:</span> fetch<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  hetu<span class="token punctuation">.</span><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">r&#39;&#39;&#39;
      external fun fetch
      final future = fetch()
      future.then((value) {
        print(&#39;future completed!&#39;)
      })
  &#39;&#39;&#39;</span><span class="token punctuation">,</span> isScript<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>__VP_STATIC_END__`,7),o=[p];function c(u,i,l,r,k,d){return s(),a("div",null,o)}var _=n(e,[["render",c]]);export{f as __pageData,_ as default};
