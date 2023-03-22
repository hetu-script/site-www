import{_ as e,M as t,p,q as i,R as o,t as n,N as l,V as c,a1 as s}from"./framework-5866ffd3.js";const r={},u=s(`<h2 id="hetu-script" tabindex="-1"><a class="header-anchor" href="#hetu-script" aria-hidden="true">#</a> hetu_script</h2><p>Input this command in your terminal under the project folder to add the package to your project.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dart pub add hetu_script
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Or use flutter version command:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>flutter pub add hetu_script
flutter pub add hetu_script_flutter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hetu-script-dev-tools" tabindex="-1"><a class="header-anchor" href="#hetu-script-dev-tools" aria-hidden="true">#</a> hetu_script_dev_tools</h2><p>To import from another source file on your physical disk. Install the package &#39;hetu_script_dev_tools&#39;.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dart pub add hetu_script_dev_tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then use the helper class <strong>HTFileSystemResourceContext</strong> provided by this package, to replace the default one:</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:hetu_script/hetu_script.dart&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:hetu_script_dev_tools/hetu_script_dev_tools.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> sourceContext <span class="token operator">=</span> <span class="token class-name">HTFileSystemResourceContext</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;../../script/&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">final</span> hetu <span class="token operator">=</span> <span class="token class-name">Hetu</span><span class="token punctuation">(</span>sourceContext<span class="token punctuation">:</span> sourceContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
  hetu<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">final</span> result <span class="token operator">=</span> hetu<span class="token punctuation">.</span><span class="token function">evalFile</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;import_test1.ht&#39;</span></span><span class="token punctuation">,</span> invoke<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;main&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>content in &#39;import_test1.ht&#39;:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;hello.ht&#39;</span> <span class="token keyword">as</span> h

fun main <span class="token punctuation">{</span>
  <span class="token keyword">return</span> h<span class="token punctuation">.</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>content in &#39;hello.ht&#39;:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>fun hello <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;Hello, world!&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),d=s(`<h2 id="hetu-script-flutter" tabindex="-1"><a class="header-anchor" href="#hetu-script-flutter" aria-hidden="true">#</a> hetu_script_flutter</h2><p>This package is for loading a script file from flutter assets.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dart pub add hetu_script_flutter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The default folder is &#39;scripts/&#39;, directly under your project root.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">assets</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> scripts/main.ht
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Use the helper class <strong>HTAssetResourceContext</strong> provided by this package, to replace the default one:</p><p>Then use the new method on Hetu class: <strong>initFlutter</strong> to init, instead the old method. The scripts you added in your pubspec.yaml will be pre-loaded. Note that this is an async function.</p><p>Then you can load a asset script file directly by <strong>evalFile</strong> method, you can omit the root in the path:</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">final</span> sourceContext <span class="token operator">=</span> <span class="token class-name">HTAssetResourceContext</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;scripts/&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">final</span> hetu <span class="token operator">=</span> <span class="token class-name">Hetu</span><span class="token punctuation">(</span>sourceContext<span class="token punctuation">:</span> sourceContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> hetu<span class="token punctuation">.</span><span class="token function">initFlutter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">final</span> result <span class="token operator">=</span> hetu<span class="token punctuation">.</span><span class="token function">evalFile</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;main.ht&#39;</span></span><span class="token punctuation">,</span> invoke<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;main&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function k(v,h){const a=t("RouterLink");return p(),i("div",null,[u,o("p",null,[n("This package also provided a "),l(a,{to:"/en-US/guide/command_line_tool/#REPL"},{default:c(()=>[n("REPL tool")]),_:1}),n(" for quick testing.")]),d])}const g=e(r,[["render",k],["__file","index.html.vue"]]);export{g as default};
