import{_ as n,c as a,o as s,a as t}from"./app.2a03e7aa.js";const g='{"title":"Introduction - Hetu Script Language","description":"","frontmatter":{"title":"Introduction - Hetu Script Language"},"headers":[{"level":2,"title":"Quick start","slug":"quick-start"},{"level":2,"title":"Binding","slug":"binding"},{"level":2,"title":"VScode extension","slug":"vscode-extension"}],"relativePath":"docs/en-US/index.md","lastUpdated":1638785845344}',e={},p=t(`__VP_STATIC_START__<h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h1><p>Hetu is a lightweight script language purely written in Dart for embedding in Flutter apps. The main goal is to enable Flutter apps to have hotfix and scripting ability.</p><p>We did not choose to use another existing language to achieve the goal. Because we want to keep it away from interference of other language&#39;s complex implementation and their irrelative-to-Flutter eco-system. This will keep this language simple and focus on what we actually need.</p><h2 id="quick-start" tabindex="-1">Quick start <a class="header-anchor" href="#quick-start" aria-hidden="true">#</a></h2><p>Below is an example to eval a string literal of Hetu code in Dart.</p><div class="language-dart"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;package:hetu_script/hetu_script.dart&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> hetu <span class="token operator">=</span> <span class="token class-name">Hetu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  hetu<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  hetu<span class="token punctuation">.</span><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">r&#39;&#39;&#39;
    fun main {
      var ht = {
        name: &#39;Hetu&#39;,
        greeting: () {
          print(&#39;Hi! I\\&#39;m&#39;, this.name)
        }
      }
      ht.greeting()
    }
  &#39;&#39;&#39;</span><span class="token punctuation">,</span> invokeFunc<span class="token punctuation">:</span> <span class="token string">&#39;main&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Hetu&#39;s <a href="./syntax/">grammar</a> is close to typescript/kotlin/swift and other modern languages.</p><ul><li>Semicolon is optional.</li><li>Function starts with a keyword like &#39;fun, get, set, construct&#39;.</li><li>Support both class based OOP and prototype based OOP, and also functional programming. You can choose whatever style you want.</li><li>Type annotation is optional. Variable declared will infer its type from its initializer expression. (The static analysis is still WIP.)</li></ul><h2 id="binding" tabindex="-1">Binding <a class="header-anchor" href="#binding" aria-hidden="true">#</a></h2><p><a href="./binding/">Communicating with Dart</a> is very easy. You can directly pass common value types from and to script.</p><p>Below is an example to pass a Map to script, modify it in script and get it back:</p><div class="language-dart"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;package:hetu_script/hetu_script.dart&#39;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> hetu <span class="token operator">=</span> <span class="token class-name">Hetu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  hetu<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>externalFunctions<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;hello&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token string">&#39;greeting&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  hetu<span class="token punctuation">.</span><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">r&#39;&#39;&#39;
      external fun hello
      fun main {
        var dartValue = hello()
        print(&#39;dart value:&#39;, dartValue)
        dartValue[&#39;foo&#39;] = &#39;bar&#39;
        return dartValue
      }&#39;&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> hetuValue <span class="token operator">=</span> hetu<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token string">&#39;main&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;hetu value: $hetuValue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="vscode-extension" tabindex="-1">VScode extension <a class="header-anchor" href="#vscode-extension" aria-hidden="true">#</a></h2><p>If you are using VSCode as your editor, you can download <a href="https://marketplace.visualstudio.com/items?itemName=hetu-script.hetuscript" target="_blank" rel="noopener noreferrer">this extension</a> to get basic highlight and snippets features.</p>__VP_STATIC_END__`,14),o=[p];function i(c,u,l,r,k,d){return s(),a("div",null,o)}var m=n(e,[["render",i]]);export{g as __pageData,m as default};
