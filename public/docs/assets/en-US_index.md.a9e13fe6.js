import{o as n,c as a,a as s}from"./app.470af3c8.js";const t='{"title":"Hetu Script Language","description":"","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction"},{"level":2,"title":"Quick start","slug":"quick-start"},{"level":2,"title":"Binding","slug":"binding"},{"level":2,"title":"Command line tool","slug":"command-line-tool"}],"relativePath":"en-US/index.md","lastUpdated":1617597477589}',e={},p=s('<h1 id="hetu-script-language"><a class="header-anchor" href="#hetu-script-language" aria-hidden="true">#</a> Hetu Script Language</h1><h2 id="introduction"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Hetu is a lightweight script language purely written in Dart for embedding in Flutter apps. The main goal is to enable Flutter app have hotfix and scripting ability.</p><p>Check <a href="./syntax/#script-style">this page</a> for more information about Hetu&#39;s syntax.</p><p>We did not choose to use another existing language to achieve the goal. Because we want to keep the language simple, and keep it away from interference of other language&#39;s complex implementation and their irrelative-to-Flutter eco-system, and make the debug process pain-free and remain in Dart realms.</p><p>It takes very little time to bind almost anything in Dart/Flutter into Hetu and use similar grammar to write your app. And to communicate with classes &amp; functions in Dart is very easy.</p><h2 id="quick-start"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> Quick start</h2><p>Hetu&#39;s grammar is close to typescript/kotlin/swift and other modern languages, need very little time to get familar with.</p><ul><li>Optional semicolon.</li><li>Function is declared with &#39;fun, get, set, construct&#39;.</li><li>Optional type annotation. Variable declared with &#39;let, const&#39; will infer its type from its initializer expression.</li></ul><p>In your Dart code, you can interpret a script file:</p><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;package:hetu_script/hetu_script.dart&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> hetu <span class="token operator">=</span> <span class="token function">Hetu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">await</span> hetu<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">await</span> hetu<span class="token punctuation">.</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;hello.ht&#39;</span><span class="token punctuation">,</span> invokeFunc<span class="token operator">:</span> <span class="token string">&#39;main&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>While [<a href="http://hello.ht" target="_blank" rel="noopener noreferrer">hello.ht</a>] is the script file written in Hetu, here is an example:</p><div class="language-typescript"><pre><code><span class="token comment">// Define a class.</span>\n<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> name<span class="token operator">:</span> str\n  <span class="token function">construct</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name\n  <span class="token punctuation">}</span>\n  fun greeting <span class="token operator">=&gt;</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;Hi! I\\&#39;m&#39;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// This is where the script starts executing.</span>\nfun main <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> ht <span class="token operator">=</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token string">&#39;Hetu&#39;</span><span class="token punctuation">)</span>\n  ht<span class="token punctuation">.</span><span class="token function">greeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="binding"><a class="header-anchor" href="#binding" aria-hidden="true">#</a> Binding</h2><p>Hetu script is purely written in Dart, so passing object to and from script is extremely easy.</p><p>Check <a href="./binding/#function">this page</a> for more information about how to bind external classes, functions, enums and how to passing object and functions between Dart and script.</p><div class="language-dart"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;package:hetu_script/hetu_script.dart&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> hetu <span class="token operator">=</span> <span class="token function">Hetu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">await</span> hetu<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>externalFunctions<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&#39;hello&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token string">&#39;greeting&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">await</span> hetu<span class="token punctuation">.</span><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">r&#39;&#39;&#39;\n      external fun hello\n      fun main {\n        var dartValue = hello()\n        print(&#39;dart value:&#39;, dartValue)\n        dartValue[&#39;foo&#39;] = &#39;bar&#39;\n        return dartValue\n      }&#39;&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">var</span> hetuValue <span class="token operator">=</span> hetu<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token string">&#39;main&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;hetu value: $hetuValue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="command-line-tool"><a class="header-anchor" href="#command-line-tool" aria-hidden="true">#</a> Command line tool</h2><p>Hetu has a command line REPL tool for testing. You can activate by the following command:</p><div class="language-"><pre><code>dart pub global activate hetu_script\n</code></pre></div><p>Then you can use the following command in any directory on your computer. (If you are facing any problems, please check this official document about <a href="https://dart.dev/tools/pub/cmd/pub-global" target="_blank" rel="noopener noreferrer">pub global activate</a>)</p><div class="language-"><pre><code>\nhetu [file_name] [invoke_func]\n\n</code></pre></div><p>If [file_name] is provided, evaluate the file in [function] mode.</p><p>If [invoke_func] is provided, evaluate the file in [module] mode and call a certain function with given name.</p><p>If no option is provided, enter REPL mode.</p><p>In REPL mode, everything you entered will be evaluated and print out immediately.</p><div class="language-typescript"><pre><code><span class="token operator">&gt;&gt;&gt;</span><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">42</span>\n<span class="token number">42</span>\n</code></pre></div><p>If you want to write multiple line in REPL mode, use &#39;\\&#39; to end a line.</p><div class="language-typescript"><pre><code><span class="token operator">&gt;&gt;&gt;</span>fun hello <span class="token punctuation">{</span>\\\n<span class="token keyword">return</span> <span class="token number">6</span> <span class="token operator">*</span> <span class="token number">7</span><span class="token punctuation">}</span> <span class="token comment">// press enter</span>\n<span class="token keyword">function</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token comment">// repl will print out the eval result</span>\n<span class="token operator">&gt;&gt;&gt;</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token number">42</span> <span class="token comment">// repl will print out the eval result</span>\n<span class="token operator">&gt;&gt;&gt;</span>\n</code></pre></div>',29);e.render=function(s,t,e,o,c,i){return n(),a("div",null,[p])};export default e;export{t as __pageData};