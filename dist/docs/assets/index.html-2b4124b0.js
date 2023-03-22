import{_ as l,M as c,p,q as i,R as n,t as s,N as e,V as t,a1 as o}from"./framework-3f81730e.js";const r={},u=o(`<h1 id="api-for-use-in-dart" tabindex="-1"><a class="header-anchor" href="#api-for-use-in-dart" aria-hidden="true">#</a> API for use in Dart</h1><h2 id="hetu-helper-class" tabindex="-1"><a class="header-anchor" href="#hetu-helper-class" aria-hidden="true">#</a> Hetu helper class</h2><p>Hetu is a wrapper class that integreted sourceContext, lexicon, parser, bundler, analyzer, compiler and interpreter&#39;s default implementation. For normal users, you can just create an instance of Hetu, and use the method on it.</p><p>In fact, Hetu will call method with same name on compiler or interpreter separately.</p><h3 id="init" tabindex="-1"><a class="header-anchor" href="#init" aria-hidden="true">#</a> init()</h3><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  bool useDefaultModuleAndBinding <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token class-name">HTLocale</span><span class="token operator">?</span> locale<span class="token punctuation">,</span>
  <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Function</span><span class="token punctuation">&gt;</span></span> externalFunctions <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">HTExternalFunctionTypedef</span><span class="token punctuation">&gt;</span></span> externalFunctionTypedef <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HTExternalClass</span><span class="token punctuation">&gt;</span></span> externalClasses <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HTExternalTypeReflection</span><span class="token punctuation">&gt;</span></span> externalTypeReflections <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A convenient way to load some shared modules all together when Hetu initted.</p><ul><li><p><strong>externalFunctions</strong>: Dart functions to be binded with a external function declaration in Hetu. You can also use <strong>bindExternalFunction</strong> methods to load them later.</p></li><li><p><strong>HTExternalFunctionTypedef</strong>: Dart typedefs to be used when a Hetu function want to be converted to a Dart function when evaluated. You can also use <strong>bindExternalFunctionType</strong> methods to load them later.</p></li><li><p><strong>HTExternalClass</strong>: Dart class bindings to be used by Hetu to get class definitions. You can also use <strong>bindExternalClass</strong> methods to load them later.</p></li></ul><h3 id="eval-evalfile" tabindex="-1"><a class="header-anchor" href="#eval-evalfile" aria-hidden="true">#</a> eval(), evalFile()</h3><p>To parse, analyze, compile and load a Hetu source from a String literal. The script functions will be compiled into bytecode form, and won&#39;t need to be parsed again on later execution.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">dynamic</span> <span class="token function">eval</span><span class="token punctuation">(</span><span class="token class-name">String</span> content<span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token class-name">String</span><span class="token operator">?</span> fileName<span class="token punctuation">,</span>
    <span class="token class-name">String</span><span class="token operator">?</span> moduleName<span class="token punctuation">,</span>
    bool globallyImport <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token class-name">HTResourceType</span> type <span class="token operator">=</span> <span class="token class-name">HTResourceType</span><span class="token punctuation">.</span>hetuLiteralCode<span class="token punctuation">,</span>
    <span class="token class-name">String</span><span class="token operator">?</span> invokeFunc<span class="token punctuation">,</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">dynamic</span><span class="token punctuation">&gt;</span></span> positionalArgs <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token keyword">dynamic</span><span class="token punctuation">&gt;</span></span> namedArgs <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HTType</span><span class="token punctuation">&gt;</span></span> typeArgs <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),d=n("li",null,[n("strong",null,"content"),s(": Hetu source as String literal.")],-1),k=n("li",null,[n("strong",null,"fileName"),s(": The name of this source, it will be used when other source try to import from it.")],-1),m=n("li",null,[n("strong",null,"moduleName"),s(": The name of the compiled bytecode module.")],-1),h=n("li",null,[n("strong",null,"globallyImport"),s(": Whether you want the content of this source is visible to "),n("strong",null,"global"),s(" namespace. It's a quicker way to let other modules to use without import statement.")],-1),g=n("strong",null,"type",-1),v=n("strong",null,"source type",-1),f=n("li",null,[n("strong",null,"invokeFunc"),s(": Invoke a function immediately after evaluation. The function's name and parameter can be of any form. The arguments of this function call are provided by "),n("strong",null,"positionalArgs"),s(" and "),n("strong",null,"namedArgs"),s(". You can also use the separate method "),n("strong",null,"invoke"),s(" to do the same thing.")],-1),b=n("h3",{id:"compile-compilefile-loadbytecode",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#compile-compilefile-loadbytecode","aria-hidden":"true"},"#"),s(" compile(), compileFile(), loadBytecode()")],-1),y=n("p",null,"These methods is useful if you want a more efficient runtime for the script. You can compile a source into bytecode. And run it at another time so that the interpreter will skip the parsing, analyzing and compiling process.",-1),_=n("strong",null,"command line tool",-1),w=o(`<h2 id="invoke-a-method-on-hetu-object" tabindex="-1"><a class="header-anchor" href="#invoke-a-method-on-hetu-object" aria-hidden="true">#</a> Invoke a method on Hetu object</h2><p>Besides the <strong>invoke</strong> method on interpreter, you can also use the same named methods on <strong>HTClass</strong> and <strong>HTInstance</strong> and <strong>call</strong> on <strong>HTFunction</strong>, if you have those object passed from script into the Dart.</p><h2 id="resourcecontext" tabindex="-1"><a class="header-anchor" href="#resourcecontext" aria-hidden="true">#</a> ResourceContext</h2><p>If you installed &#39;hetu_script_dev_tools&#39; or &#39;hetu_script_flutter&#39;, they will handle the source context for you so you won&#39;t need to add the source file into the context manually. However if you cannot use these packages(for example if your code are running on web browser), you can use methods below on <strong>HTOverlayContext</strong> to manage sources.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">addResource</span><span class="token punctuation">(</span><span class="token class-name">String</span> fullName<span class="token punctuation">,</span> <span class="token class-name">HTSource</span> resource<span class="token punctuation">)</span>

<span class="token keyword">void</span> <span class="token function">removeResource</span><span class="token punctuation">(</span><span class="token class-name">String</span> fullName<span class="token punctuation">)</span>

<span class="token keyword">void</span> <span class="token function">updateResource</span><span class="token punctuation">(</span><span class="token class-name">String</span> fullName<span class="token punctuation">,</span> <span class="token class-name">HTSource</span> resource<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function x(T,H){const a=c("RouterLink");return p(),i("div",null,[u,n("ul",null,[d,k,m,h,n("li",null,[g,s(": How the interpreter evaluate this source. For more information, check "),e(a,{to:"/en-US/guide/package/#resource-type"},{default:t(()=>[v]),_:1}),s(".")]),f]),b,y,n("p",null,[s("If you would like to compile and store the result as physical files. You can check "),e(a,{to:"/en-US/guide/command_line_tool/#compile"},{default:t(()=>[_]),_:1}),s(" in the hetu_script_dev_tools package.")]),w])}const F=l(r,[["render",x],["__file","D:/_dev/hetu-script/docs/docs/.vuepress/.temp/pages/en-US/api_reference/dart/index.html.vue"]]);export{F as default};
