"use strict";(self.webpackChunkhetu_docs=self.webpackChunkhetu_docs||[]).push([[927],{4504:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-e124b34a",path:"/docs/en-US/module/",title:"Module import & export",lang:"en-US",frontmatter:{title:"Module import & export"},excerpt:"",headers:[{level:2,title:"Import",slug:"import",children:[]},{level:2,title:"Export",slug:"export",children:[]},{level:2,title:"Resource type",slug:"resource-type",children:[]}],filePathRelative:"docs/en-US/module/README.md",git:{updatedTime:1639593263e3,contributors:[{name:"hythloday@live.com",email:"hythloday@live.com",commits:1},{name:"邵燃",email:"chengfubeiming@gmail.com",commits:1}]}}},8273:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});const e=(0,a(6710).uE)('<h2 id="import" tabindex="-1"><a class="header-anchor" href="#import" aria-hidden="true">#</a> Import</h2><p>Use import statement to import from another script file.</p><ul><li>You can specify a list to limit the symbols imported.</li><li>You can set aliases for the imported symbols as well as the namespace as a whole.</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;game.ht&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> hello <span class="token keyword">as</span> greeting<span class="token punctuation">,</span> calculator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;hello.ht&#39;</span> <span class="token keyword">as</span> h\n\nfun main <span class="token punctuation">{</span>\n  h<span class="token punctuation">.</span><span class="token function">greeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="export" tabindex="-1"><a class="header-anchor" href="#export" aria-hidden="true">#</a> Export</h2><p>Use export in a source to specify the symbols you wish to let other source access when they import from you.</p><ul><li>If there&#39;s no path provided, exported the symbols from the source contains this statement.</li><li>You can give a path after the export keyword, to export other source&#39;s content.</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token punctuation">{</span>\n  hello<span class="token punctuation">,</span>\n  calculator<span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token string">&#39;game.ht&#39;</span>\n<span class="token keyword">export</span> <span class="token punctuation">{</span> hello <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;hello.ht&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>If you have at least one export statement, nomatter it&#39;s a export + &#39;path&#39; form or export { namelist } form, you wont&#39; inexplicitly export any of the members.</p><p>Otherwise, every top level symbol will be exported by default.</p><h1 id="module" tabindex="-1"><a class="header-anchor" href="#module" aria-hidden="true">#</a> Module</h1><p>Hetu script codes are a batch of <strong>HTSource</strong> files. If a source contains import statement, the parser will try to fetch another source content by the import path through the <strong>HTResourceContext</strong>. The default <strong>HTResourceContext</strong> provided by the Interpreter is <strong>HTOverlayContext</strong>, it will not handle physical files and you need to manually add String content into the context for modules to import from.</p><h2 id="resource-type" tabindex="-1"><a class="header-anchor" href="#resource-type" aria-hidden="true">#</a> Resource type</h2><p>Hetu script file have two different way to interpret, controlled by the <strong>isScript</strong> parameter in the eval method of the Interpreter class and the extension of the source file.</p><ul><li>When <strong>isScript</strong> is not provided or set to false, or the file is of extension &#39;*.ht&#39;, interpreter will evaluate the source as <strong>ResourceType.hetuModule</strong>. This kind of source file is organized like a C++, Java or Dart app. It only contains import statement and declarations(variable, function and class). The top level variables are lazily initialized (initialize when first used).</li><li>When <strong>isScript</strong> is true, or the file is of extension &#39;*.hts&#39;, interpreter will evaluate the source as <strong>ResourceType.hetuScript</strong>. This kind of source file is organized like a Javascript, Python and Lua file. It may contain any expression and control statement that is allowed in a function body (including nested function and class declaration). And every expression is immediately evaluated.</li></ul><p>It&#39;s possible to import a non-hetu source in your code. For example, it&#39;s possible to directly import a JSON format file. You will get a HTStruct object from it. Because the syntax of a JSON is fully compatible with Hetu&#39;s struct object.</p><p>However, to do so, there are some extra work to be done. You have to tell the <strong>HTResourceContext</strong> to includes JSON files in the beginning.</p><p>And you must give the imported JSON a alias name in your namespace.</p><p>Example code (dart part):</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string">&#39;package:hetu_script/hetu_script.dart&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;package:hetu_script_dev_tools/hetu_script_dev_tools.dart&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token string">&#39;example/script&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> filterConfig <span class="token operator">=</span> <span class="token class-name">HTFilterConfig</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token keyword">extension</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token class-name">HTResource</span><span class="token punctuation">.</span>hetuModule<span class="token punctuation">,</span>\n    <span class="token class-name">HTResource</span><span class="token punctuation">.</span>hetuScript<span class="token punctuation">,</span>\n    <span class="token class-name">HTResource</span><span class="token punctuation">.</span>json<span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">final</span> sourceContext <span class="token operator">=</span> <span class="token class-name">HTFileSystemSourceContext</span><span class="token punctuation">(</span>\n      root<span class="token punctuation">:</span> root<span class="token punctuation">,</span>\n      includedFilter<span class="token punctuation">:</span> <span class="token punctuation">[</span>filterConfig<span class="token punctuation">]</span><span class="token punctuation">,</span>\n      expressionModuleExtensions<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">HTResource</span><span class="token punctuation">.</span>json<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">final</span> hetu <span class="token operator">=</span> <span class="token class-name">Hetu</span><span class="token punctuation">(</span>sourceContext<span class="token punctuation">:</span> sourceContext<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  hetu<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  hetu<span class="token punctuation">.</span><span class="token function">evalFile</span><span class="token punctuation">(</span><span class="token string">&#39;json.hts&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>script code:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;values.json&#39;</span> <span class="token keyword">as</span> json\n\n<span class="token function">print</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',22),t={},o=(0,a(8161).Z)(t,[["render",function(n,s){return e}]])},8161:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);