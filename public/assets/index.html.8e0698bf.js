import{r as e,o as t,c as o,a as p,b as r,w as c,F as i,d as s,e as n}from"./app.12b41512.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const u={},d=s('<h1 id="module" tabindex="-1"><a class="header-anchor" href="#module" aria-hidden="true">#</a> Module</h1><p>Hetu script codes are a batch of <strong>HTSource</strong> files. If a source contains import statement, the parser will try to fetch another source content by the import path through the <strong>HTResourceContext</strong>. The default <strong>HTResourceContext</strong> provided by the Interpreter is <strong>HTOverlayContext</strong>, it will not handle physical files and you need to manually add String content into the context for modules to import from.</p><h2 id="resource-type" tabindex="-1"><a class="header-anchor" href="#resource-type" aria-hidden="true">#</a> Resource type</h2><p>Hetu script file have 3 way to interpret, controlled by the <strong>ResourceType type</strong> parameter in the eval method of the Interpreter class or the extension of the source file.</p><ul><li><p>For <strong>ResourceType.hetuScript</strong>, the source file is organized like a Javascript, Python and Lua file. It has its own namespace. It may contain any expression and control statement that is allowed in a function body (including nested function and class declaration). And every expression is immediately evaluated.</p></li><li><p>When <strong>ResourceType</strong> is not provided in interpreter&#39;s &#39;eval&#39; method, interpreter will evaluate the string provided as <strong>ResourceType.hetuLiteralCode</strong>. Other than the code has no namespace. It is the same to <strong>ResourceType.hetuScript</strong>.</p></li><li><p>For <strong>ResourceType.hetuModule</strong>, the source file is organized like a C++, Java or Dart app. It only contains import statement and declarations(variable, function and class). The top level variables are lazily initialized (initialize when first used).</p></li></ul><p>When using evalFile method on the interpreter, the source type is inferred from the extension of the file name: &#39;*.hts&#39; is <strong>ResourceType.hetuScript</strong>, and &#39;*.ht&#39; is <strong>ResourceType.hetuModule</strong>.</p><h2 id="recursive-import" tabindex="-1"><a class="header-anchor" href="#recursive-import" aria-hidden="true">#</a> Recursive import</h2><p>For <strong>ResourceType.hetuModule</strong>, recursive import (i.e. A import from B in the meantime, B import from A) is allowed. However, for <strong>ResourceType.hetuScript</strong>, recursive import would cause stack overflow errors. <strong>You have to manually avoid recursive import in &#39;*.hts&#39; files.</strong></p><h2 id="import-a-pre-compiled-binary-module" tabindex="-1"><a class="header-anchor" href="#import-a-pre-compiled-binary-module" aria-hidden="true">#</a> Import a pre-compiled binary module</h2>',9),m=n("You can "),k=n("pre-compiled a hetu script package"),h=n(" into a binary module for better performance. If you have a such module. You can import it by using special prefix in import path:"),b=s(`<div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string">&#39;module:calculate&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">final</span> result <span class="token operator">=</span> <span class="token function">calculate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>However, to do so, you have to load the bytecode before you can import it in your script. This is a example to pre-load a pre-compiled binary file:</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string">&#39;dart:io&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">&#39;package:hetu_script/hetu_script.dart&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;package:hetu_script_dev_tools/hetu_script_dev_tools.dart&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> sourceContext <span class="token operator">=</span> <span class="token class-name">HTFileSystemResourceContext</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token string">&#39;example/script/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">final</span> hetu <span class="token operator">=</span> <span class="token class-name">Hetu</span><span class="token punctuation">(</span>sourceContext<span class="token punctuation">:</span> sourceContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
  hetu<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">final</span> binaryFile <span class="token operator">=</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&#39;example/script/module.out&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">final</span> bytes <span class="token operator">=</span> binaryFile<span class="token punctuation">.</span><span class="token function">readAsBytesSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  hetu<span class="token punctuation">.</span><span class="token function">loadBytecode</span><span class="token punctuation">(</span>bytes<span class="token punctuation">:</span> bytes<span class="token punctuation">,</span> moduleName<span class="token punctuation">:</span> <span class="token string">&#39;calculate&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  hetu<span class="token punctuation">.</span><span class="token function">evalFile</span><span class="token punctuation">(</span><span class="token string">&#39;import_binary_module.hts&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="import-a-json-file" tabindex="-1"><a class="header-anchor" href="#import-a-json-file" aria-hidden="true">#</a> Import a JSON file</h2><p>Sometimes we need to import a non-hetu source in your code. For example, if you imported a JSON file, you will get a HTStruct object from it. Because the syntax of a JSON is fully compatible with Hetu&#39;s struct object.</p><p>To do so, there are some extra work to be done. You have to tell the <strong>HTResourceContext</strong> to includes JSON files in the beginning. And you have to give the imported JSON a alias name in your namespace.</p><p>Example code (dart part):</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string">&#39;package:hetu_script/hetu_script.dart&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;package:hetu_script_dev_tools/hetu_script_dev_tools.dart&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token string">&#39;example/script&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">final</span> sourceContext <span class="token operator">=</span> <span class="token class-name">HTFileSystemResourceContext</span><span class="token punctuation">(</span>
      root<span class="token punctuation">:</span> root<span class="token punctuation">,</span>
      expressionModuleExtensions<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">HTResource</span><span class="token punctuation">.</span>json<span class="token punctuation">,</span> <span class="token class-name">HTResource</span><span class="token punctuation">.</span>jsonWithComments<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">final</span> hetu <span class="token operator">=</span> <span class="token class-name">Hetu</span><span class="token punctuation">(</span>sourceContext<span class="token punctuation">:</span> sourceContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
  hetu<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  hetu<span class="token punctuation">.</span><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;&#39;
    import &#39;values.json&#39; as json
    print(json)
  &#39;&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,8);function y(g,f){const a=e("RouterLink");return t(),o(i,null,[d,p("p",null,[m,r(a,{to:"/docs/en-US/command_line_tool/#compile"},{default:c(()=>[k]),_:1}),h]),b],64)}var x=l(u,[["render",y]]);export{x as default};
