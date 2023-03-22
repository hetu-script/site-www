import{_ as n,p as s,q as a,a1 as e}from"./framework-3f81730e.js";const t={},o=e(`<h2 id="import" tabindex="-1"><a class="header-anchor" href="#import" aria-hidden="true">#</a> Import</h2><p>Use import statement to import from another source file.</p><p>You can specify a list to limit the symbols imported.</p><p>You can set an aliases for the imported namespace.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;game.ht&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> hello<span class="token punctuation">,</span> calculator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;hello.ht&#39;</span> <span class="token keyword">as</span> h

fun main <span class="token punctuation">{</span>
  h<span class="token punctuation">.</span><span class="token function">greeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You have to specify the extention part (.ht or .json) of the path.</p><p>You can use relative key such as &#39;../../filename.ht&#39; in the path string (this also applies to export &amp; require).</p><h2 id="export" tabindex="-1"><a class="header-anchor" href="#export" aria-hidden="true">#</a> Export</h2><p>Use export in a source to specify the symbols you wish to let other source access when they import from you.</p><p>You can either export another source, or export the symbols within this source.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token punctuation">{</span>
  hello<span class="token punctuation">,</span>
  calculator<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token string">&#39;game.ht&#39;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> hello <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;hello.ht&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Use export with a string literal as path, <strong>you will first import the source by that path, then export it. So you can use those symbols of that source just like normal import statement.</strong></p><p>You cannot export symbols of imported namespaces without specify its path.</p><p>If no path is provided, there must be a &#39;{}&#39; list to indicate the symbols that you wish to export from this namespace.</p><p>By default, every top level symbol will be exported, if you do not have any kind of export statement.</p><h2 id="require" tabindex="-1"><a class="header-anchor" href="#require" aria-hidden="true">#</a> require</h2><p>After 0.4.0, you can dynamically import a source, use <code>require</code> keyword in your functions or script.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">final</span> sourceContext <span class="token operator">=</span> <span class="token class-name">HTOverlayContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> hetu <span class="token operator">=</span> <span class="token class-name">Hetu</span><span class="token punctuation">(</span>
  config<span class="token punctuation">:</span> <span class="token class-name">HetuConfig</span><span class="token punctuation">(</span>
    normalizeImportPath<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
  sourceContext<span class="token punctuation">:</span> sourceContext<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
hetu<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">final</span> source1 <span class="token operator">=</span> <span class="token class-name">HTSource</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">r&#39;&#39;&#39;
    var name = &#39;Richard Byson&#39;
    var age = 42
&#39;&#39;&#39;</span></span><span class="token punctuation">,</span> fullName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;source1.ht&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sourceContext<span class="token punctuation">.</span><span class="token function">addResource</span><span class="token punctuation">(</span>source1<span class="token punctuation">.</span>fullName<span class="token punctuation">,</span> source1<span class="token punctuation">)</span><span class="token punctuation">;</span>
hetu<span class="token punctuation">.</span><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">r&#39;&#39;&#39;
    final { name, age } = require(&#39;source1.ht&#39;);
    print(name, age)
&#39;&#39;&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You have to use it in the form of a variable declaration, otherwise the importing won&#39;t have any effect. This is to say, you have to explicitly list all symbols that you wish to import, or to give a alias name to the imported namespace when using this statement.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;source1.ht&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// this won&#39;t have any effect!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Because the file is loaded dynamically rather than statically before compile, you have to ensure that the source is loaded in the sourceContext before running the script contains the require keyword.</p>`,21),p=[o];function i(c,l){return s(),a("div",null,p)}const u=n(t,[["render",i],["__file","D:/_dev/hetu-script/docs/docs/.vuepress/.temp/pages/en-US/grammar/import/index.html.vue"]]);export{u as default};
