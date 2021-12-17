"use strict";(self.webpackChunkhetu_docs=self.webpackChunkhetu_docs||[]).push([[793],{3588:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-107d0641",path:"/docs/en-US/common_api/",title:"Common API",lang:"en-US",frontmatter:{title:"Common API"},excerpt:"",headers:[{level:2,title:"Interpreter",slug:"interpreter",children:[{level:3,title:"init()",slug:"init",children:[]},{level:3,title:"eval()",slug:"eval",children:[]},{level:3,title:"compile(), loadBytecode()",slug:"compile-loadbytecode",children:[]}]},{level:2,title:"Invoke a method on Hetu object",slug:"invoke-a-method-on-hetu-object",children:[]},{level:2,title:"ResourceContext",slug:"resourcecontext",children:[]}],filePathRelative:"docs/en-US/common_api/README.md",git:{updatedTime:1639713062e3,contributors:[{name:"邵燃",email:"chengfubeiming@gmail.com",commits:2}]}}},920:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});const e=(0,a(7975).uE)('<h1 id="common-api" tabindex="-1"><a class="header-anchor" href="#common-api" aria-hidden="true">#</a> Common API</h1><h2 id="interpreter" tabindex="-1"><a class="header-anchor" href="#interpreter" aria-hidden="true">#</a> Interpreter</h2><p>The most common class you will be using is the Interpreter, it is named as &#39;Hetu&#39; in this library.</p><h3 id="init" tabindex="-1"><a class="header-anchor" href="#init" aria-hidden="true">#</a> init()</h3><p>This method is a convenient way to load some shared modules together before you can use them.</p><ul><li><strong>includes</strong>: Hetu source in String literal form. You can also use <strong>eval</strong> methods to load them later.</li><li><strong>externalFunctions</strong>: Dart functions to be binded with a external function declaration in Hetu. You can also use <strong>bindExternalFunction</strong> methods to load them later.</li><li><strong>HTExternalFunctionTypedef</strong>: Dart typedefs to be used when a Hetu function want to be converted to a Dart function when evaluated. You can also use <strong>bindExternalFunctionType</strong> methods to load them later.</li><li><strong>HTExternalClass</strong>: Dart class bindings to be used by Hetu to get class definitions. You can also use <strong>bindExternalClass</strong> methods to load them later.</li></ul><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> includes <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Function</span><span class="token punctuation">&gt;</span></span> externalFunctions <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">HTExternalFunctionTypedef</span><span class="token punctuation">&gt;</span></span> externalFunctionTypedef <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HTExternalClass</span><span class="token punctuation">&gt;</span></span> externalClasses <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="eval" tabindex="-1"><a class="header-anchor" href="#eval" aria-hidden="true">#</a> eval()</h3><p>To parse, analyze, compile and load a Hetu source from a String literal.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">dynamic</span> <span class="token function">eval</span><span class="token punctuation">(</span><span class="token class-name">String</span> content<span class="token punctuation">,</span>\n    <span class="token punctuation">{</span><span class="token class-name">String</span><span class="token operator">?</span> filename<span class="token punctuation">,</span>\n    <span class="token class-name">String</span><span class="token operator">?</span> moduleName<span class="token punctuation">,</span>\n    bool globallyImport <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    bool isModule <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    bool isStrictMode <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token class-name">String</span><span class="token operator">?</span> invokeFunc<span class="token punctuation">,</span>\n    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">dynamic</span><span class="token punctuation">&gt;</span></span> positionalArgs <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token keyword">dynamic</span><span class="token punctuation">&gt;</span></span> namedArgs <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HTType</span><span class="token punctuation">&gt;</span></span> typeArgs <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    bool errorHandled <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li><strong>content</strong>: Hetu source as String literal.</li><li><strong>filename</strong>: The name of this <strong>HTModule</strong>, it will be used when other module try to import from it.</li><li><strong>globallyImport</strong>: Whether you want the content of this source is visible to <strong>global</strong> namespace. It&#39;s a quicker way to let other modules to use without import statement.</li><li><strong>isModule</strong>: Whether let the interpreter evaluate this source as a module. For more information, check <strong>source type</strong>(../module/index.md#Source-type).</li><li><strong>isStrictMode</strong>: If strict mode is true, the condition expression used by if/while/do/ternery must be a boolean value. Otherwise there will be inexplicit type conversion.</li><li><strong>invokeFunc</strong>: Invoke a function immediately after evaluation. The function&#39;s name and parameter can be of any form. The arguments of this function call are provided by <strong>positionalArgs</strong> and <strong>namedArgs</strong>. You can also use the separate method <strong>invoke</strong> to do the same thing.</li></ul><h3 id="compile-loadbytecode" tabindex="-1"><a class="header-anchor" href="#compile-loadbytecode" aria-hidden="true">#</a> compile(), loadBytecode()</h3><p>These methods is useful if you wish for more efficient runtime of the script. You can compile a source into bytecode. And run it at another time so that the interpreter will skip the parsing, analyzing and compiling process.</p><h2 id="invoke-a-method-on-hetu-object" tabindex="-1"><a class="header-anchor" href="#invoke-a-method-on-hetu-object" aria-hidden="true">#</a> Invoke a method on Hetu object</h2><p>Besides the <strong>invoke</strong> method on interpreter, you can also use the same named methods on <strong>HTClass</strong> and <strong>HTInstance</strong> and <strong>call</strong> on <strong>HTFunction</strong>, if you have those object passed from script into the Dart.</p><h2 id="resourcecontext" tabindex="-1"><a class="header-anchor" href="#resourcecontext" aria-hidden="true">#</a> ResourceContext</h2><p>If you installed &#39;hetu_script_dev_tools&#39; or &#39;hetu_script_flutter&#39;, they will handle the source context for you so you won&#39;t need to add the source file into the context manually. However if you cannot use these packages(for example if your code are on web browser), you can use methods below on <strong>HTOverlayContext</strong> to manage sources.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">addResource</span><span class="token punctuation">(</span><span class="token class-name">String</span> fullName<span class="token punctuation">,</span> <span class="token class-name">HTSource</span> resource<span class="token punctuation">)</span>\n\n<span class="token keyword">void</span> <span class="token function">removeResource</span><span class="token punctuation">(</span><span class="token class-name">String</span> fullName<span class="token punctuation">)</span>\n\n<span class="token keyword">void</span> <span class="token function">updateResource</span><span class="token punctuation">(</span><span class="token class-name">String</span> fullName<span class="token punctuation">,</span> <span class="token class-name">HTSource</span> resource<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',18),t={},o=(0,a(5261).Z)(t,[["render",function(n,s){return e}]])},5261:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);