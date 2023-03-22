import{_ as p,M as c,p as l,q as i,R as n,N as e,V as t,t as a,a1 as o}from"./framework-5866ffd3.js";const r={},u=o(`<h1 id="dart-api-参考" tabindex="-1"><a class="header-anchor" href="#dart-api-参考" aria-hidden="true">#</a> Dart API 参考</h1><h2 id="hetu-类" tabindex="-1"><a class="header-anchor" href="#hetu-类" aria-hidden="true">#</a> Hetu 类</h2><p>Hetu 是一个集合了多个不同的编程语言工具（sourceContext, lexicon, parser, bundler, analyzer, compiler and interpreter）的默认实现的工具类。</p><p>对于大部分普通用户，可以完全通过 Hetu 对象来使用脚本功能。Hetu 提供的函数接口，实际上是在调用 compiler 或者 interpreter 等底层的对象的方法。</p><h3 id="hetuconfig" tabindex="-1"><a class="header-anchor" href="#hetuconfig" aria-hidden="true">#</a> HetuConfig</h3><p>HetuConfig 是一个配置环境的数据类。具体参数如下：</p><h4 id="normalizeimportpath" tabindex="-1"><a class="header-anchor" href="#normalizeimportpath" aria-hidden="true">#</a> normalizeImportPath</h4><p>默认值 <code>true</code>.</p><p>如果打开这个选项，sourceContext 将会记录某个代码文件的绝对路径，而非相对路径。并且你也可以在引入其他文件时使用相对路径。</p><p>例如，我们将 sourceContext 的根目录设置为 &#39;scripts/&#39;。然后在 &#39;scripts/main/&#39; 目录下的某个代码文件之内，我们使用如下代码引入一个上层文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// &#39;scripts/test/test.ht&#39;
import &#39;../main.ht&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>此时 sourceContext 将会自动将相对路径 &#39;../main.ht&#39; 转化为硬盘上的绝对路径 &#39;x:xxx/xxx/scripts/main.ht&#39; 或者 flutter assets 目录中的路径：&#39;scripts/main.ht&#39;。然后使用绝对路径来获取该文件。</p><p>但此种方式并非适用于一切情况，例如你在开发时没有使用 HTFileSystemResourceContext 和 HTAssetResourceContext，而是完全手动管理代码文件。你可以关闭这个配置选项。此时所有的 import 语句都将会使用绝对路径。</p><h4 id="explicitendofstatement" tabindex="-1"><a class="header-anchor" href="#explicitendofstatement" aria-hidden="true">#</a> explicitEndOfStatement</h4><p>默认值 <code>false</code>.</p><p>如果打开这个选项，你必须在所有语句结束的位置手动写上 &#39;;&#39;，否则将会得到一个语法错误。</p><h4 id="dostaticanalysis-experimental-feature" tabindex="-1"><a class="header-anchor" href="#dostaticanalysis-experimental-feature" aria-hidden="true">#</a> doStaticAnalysis (<em>experimental feature</em>)</h4><p>默认值 <code>false</code>.</p><p>是否要在编译为字节码之前进行静态分析。</p><p><strong>注意！！！</strong> 静态分析工具（HTAnalyzer）目前仍在开发中，因此除非你是想要为本项目贡献代码，否则 <strong>不要</strong> 打开这个选项。</p><h4 id="computeconstantexpression-experimental-feature" tabindex="-1"><a class="header-anchor" href="#computeconstantexpression-experimental-feature" aria-hidden="true">#</a> computeConstantExpression (<em>experimental feature</em>)</h4><p>默认值 <code>false</code>.</p><p>是否要在编译为字节码之前为常量表达式求值。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">6</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token number">7</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> b <span class="token operator">*</span> c <span class="token comment">// 如果打开选项，这里的 a 也将会是常量，并且提前计算出来。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意！！！</strong> 常量计算功能目前仍在开发中，因此除非你是想要为本项目贡献代码，否则 <strong>不要</strong> 打开这个选项。</p><h4 id="removelineinfo" tabindex="-1"><a class="header-anchor" href="#removelineinfo" aria-hidden="true">#</a> removeLineInfo</h4><p>默认值 <code>false</code>.</p><p>是否要在编译为字节码时去掉行列号信息。这样可以缩减字节码的大小。但如果出现错误时，可能难以找到具体问题所在的位置。</p><h4 id="removeassertion" tabindex="-1"><a class="header-anchor" href="#removeassertion" aria-hidden="true">#</a> removeAssertion</h4><p>默认值 <code>false</code>.</p><p>是否要在编译为字节码时去掉 assert 语句。这样可以缩减字节码的大小。</p><p>通常情况下， assert 语句所包含的表达式，在正确运行的程序中，永远为真。</p><p>不建议在可能出现预计之外的错误时使用 assert，例如文件或者网络处理时。</p><h4 id="removedocumentation" tabindex="-1"><a class="header-anchor" href="#removedocumentation" aria-hidden="true">#</a> removeDocumentation</h4><p>默认值 <code>false</code>.</p><p>是否要在编译为字节码时去掉文档注释。这样可以缩减字节码的大小。</p><p>文档注释指以 <code>///</code> 或者 <code>/** */</code> 形式书写的注释。</p><p>在运行时，你可以通过 <code>help()</code> 语句（可以通过 Hetu 类，也可以直接在脚本内部使用同名全局函数。）获取某个函数或者类的文档注释。</p><h4 id="showdartstacktrace" tabindex="-1"><a class="header-anchor" href="#showdartstacktrace" aria-hidden="true">#</a> showDartStackTrace</h4><p>默认值 <code>false</code>.</p><p>是否在遇到错误时显示 Dart 的堆栈信息。</p><h4 id="showhetustacktrace" tabindex="-1"><a class="header-anchor" href="#showhetustacktrace" aria-hidden="true">#</a> showHetuStackTrace</h4><p>默认值 <code>false</code>.</p><p>是否在遇到错误时显示河图函数调用的堆栈信息。</p><h4 id="stacktracedisplaycountlimit" tabindex="-1"><a class="header-anchor" href="#stacktracedisplaycountlimit" aria-hidden="true">#</a> stackTraceDisplayCountLimit,</h4><p>默认值 <code>5</code>.</p><p>堆栈信息显示时的最大数量。</p><h4 id="processerror" tabindex="-1"><a class="header-anchor" href="#processerror" aria-hidden="true">#</a> processError</h4><p>默认值 <code>true</code>.</p><p>决定脚本运行时是否在遇到错误时为错误补充一些信息，例如正在执行的行列号等。</p><h4 id="allowvariableshadowing" tabindex="-1"><a class="header-anchor" href="#allowvariableshadowing" aria-hidden="true">#</a> allowVariableShadowing</h4><p>默认值 <code>true</code>.</p>`,52),d=n("h4",{id:"allowimplicitvariabledeclaration",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#allowimplicitvariabledeclaration","aria-hidden":"true"},"#"),a(" allowImplicitVariableDeclaration")],-1),k=n("p",null,[a("默认值 "),n("code",null,"false"),a(".")],-1),m=n("h4",{id:"allowimplicitnulltozeroconversion",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#allowimplicitnulltozeroconversion","aria-hidden":"true"},"#"),a(" allowImplicitNullToZeroConversion")],-1),h=n("p",null,[a("默认值 "),n("code",null,"false"),a(".")],-1),v=n("h4",{id:"allowimplicitemptyvaluetofalseconversion",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#allowimplicitemptyvaluetofalseconversion","aria-hidden":"true"},"#"),a(" allowImplicitEmptyValueToFalseConversion")],-1),g=n("p",null,[a("默认值 "),n("code",null,"false"),a(".")],-1),b=o(`<h4 id="checktypeannotationatruntime" tabindex="-1"><a class="header-anchor" href="#checktypeannotationatruntime" aria-hidden="true">#</a> checkTypeAnnotationAtRuntime</h4><p>默认值 <code>false</code>.</p><p>如果打开这个选项，脚本解释器将会在运行时检查类型声明中的类型是否存在。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token comment">// 如果打开了这个选项，并且不存在 ClassA 对应的类型，这里将会报错</span>
<span class="token keyword">var</span> a<span class="token punctuation">:</span> <span class="token class-name">ClassA</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="resolveexternalfunctionsdynamically" tabindex="-1"><a class="header-anchor" href="#resolveexternalfunctionsdynamically" aria-hidden="true">#</a> resolveExternalFunctionsDynamically</h4><p>默认值 <code>false</code>.</p><p>如果关闭这个选项，脚本中定义的外部函数将会 <strong>记住</strong> 所对应的外部 Dart 函数。之后就算你重新绑定，也不会改变了。</p><p>如果打开这个选项，将意味着每一次你调用脚本中外部函数时，都会向运行时查询该外部函数。这样会略微损失一些效率。</p><h4 id="printperformancestatistics" tabindex="-1"><a class="header-anchor" href="#printperformancestatistics" aria-hidden="true">#</a> printPerformanceStatistics</h4><p>默认值 <code>false</code>.</p><p>是否要在标准输出流中显示河图的运行效能信息。典型的输出如下，包含了解析、打包、编译、运行等步骤的耗时：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hetu: 36ms	to parse	[$script_e99c23d0: var globalVar = 0;...]
hetu: 2ms	to bundle	[$script_e99c23d0: var globalVar = 0;...]
hetu: 28ms	to compile	[$script_e99c23d0: var globalVar = 0;...]
hetu: 8ms	to load module	$script_e99c23d0: var globalVar = 0;... (compiled at 2023-03-22 06:53:35 UTC with hetu@0.4.3)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sourcecontext" tabindex="-1"><a class="header-anchor" href="#sourcecontext" aria-hidden="true">#</a> sourceContext</h3><p>如果你需要处理某个平台上的代码文件。你可以在 Hetu 对象的构造函数中传入一个 sourceContext 对象。</p><p>下面是一个处理本地磁盘上的代码文件的例子：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:hetu_script/hetu_script.dart&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:hetu_script_dev_tools/hetu_script_dev_tools.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> sourceContext <span class="token operator">=</span> <span class="token class-name">HTFileSystemResourceContext</span><span class="token punctuation">(</span>root<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;../../script/&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">final</span> hetu <span class="token operator">=</span> <span class="token class-name">Hetu</span><span class="token punctuation">(</span>sourceContext<span class="token punctuation">:</span> sourceContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
  hetu<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// you don&#39;t need to write the full path of the file here,</span>
  <span class="token comment">// which means the file name without the \`root\` you specified in the sourceContext.</span>
  <span class="token comment">// the sourceContext will know the full path and get it for you.</span>
  <span class="token keyword">final</span> result <span class="token operator">=</span> hetu<span class="token punctuation">.</span><span class="token function">evalFile</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;import_test2.ht&#39;</span></span><span class="token punctuation">,</span> invoke<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;main&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样你就可以在代码中使用 import 语句，并正确的获取该外部代码文件了。</p><p>如果你安装了 <strong>hetu_script_dev_tools</strong> 或者 <strong>hetu_script_flutter</strong>，将会有各自对应的代码空间类的具体实现来管理你磁盘上，或者 Flutter 程序中的资源文件。</p><p>默认情况下的代码空间实现是 <strong>HTOverlayContext</strong> ，这个实现不会主动读取文件，而需要通过下面这些接口来手动保存和更新代码文件：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">addResource</span><span class="token punctuation">(</span><span class="token class-name">String</span> fullName<span class="token punctuation">,</span> <span class="token class-name">HTSource</span> resource<span class="token punctuation">)</span>

<span class="token keyword">void</span> <span class="token function">removeResource</span><span class="token punctuation">(</span><span class="token class-name">String</span> fullName<span class="token punctuation">)</span>

<span class="token keyword">void</span> <span class="token function">updateResource</span><span class="token punctuation">(</span><span class="token class-name">String</span> fullName<span class="token punctuation">,</span> <span class="token class-name">HTSource</span> resource<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),f=o(`<h3 id="hetu-类提供的-api" tabindex="-1"><a class="header-anchor" href="#hetu-类提供的-api" aria-hidden="true">#</a> Hetu 类提供的 api</h3><h4 id="init" tabindex="-1"><a class="header-anchor" href="#init" aria-hidden="true">#</a> init()</h4><p>这个方法会初始化河图脚本内置的一些 Dart 类的绑定。用户也可以向这个方法传入参数来同时初始化一些自定义绑定。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  bool useDefaultModuleAndBinding <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token class-name">HTLocale</span><span class="token operator">?</span> locale<span class="token punctuation">,</span>
  <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Function</span><span class="token punctuation">&gt;</span></span> externalFunctions <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">HTExternalFunctionTypedef</span><span class="token punctuation">&gt;</span></span> externalFunctionTypedef <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HTExternalClass</span><span class="token punctuation">&gt;</span></span> externalClasses <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HTExternalTypeReflection</span><span class="token punctuation">&gt;</span></span> externalTypeReflections <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><strong>useDefaultModuleAndBinding</strong>: 如果这个参数为 true，河图将会载入一些默认的 Dart 对象的绑定。例如 print 函数，以及 Dart 中的字符串、数组的内置方法等等。如果这个参数为 false，你就只能将河图当作一个计算器来使用，进行一些纯表达式的计算，诸如 &#39;5 * 8 + 2&#39; 之类。而不能使用 &#39;(3.14).truncate()&#39; 之类的方法。</p></li><li><p><strong>externalFunctions</strong>: 载入一些 Dart 函数，用以在脚本中调用。效果等同于在 <strong>init()</strong> 执行完毕后，手动调用 <strong>bindExternalFunction()</strong>.</p></li><li><p><strong>externalFunctionTypedef</strong>: 载入一些 Dart 的函数定义，以及对应的解绑函数。之后可以便捷的将一个脚本函数解析为 Dart 函数，以用于 Dart 的对象的构造函数等需要 Dart Lambda 的场合。。效果等同于在 <strong>init()</strong> 执行完毕后，手动调用 <strong>bindExternalFunctionType</strong>.</p></li><li><p><strong>externalClasses</strong>: 载入一些 Dart 类的绑定定义。之后可以在脚本中直接获得一个 Dart 对象，或者调用某个 Dart 对象的函数。 效果等同于在 <strong>init()</strong> 执行完毕后，手动调用 <strong>bindExternalClass</strong>.</p></li></ul><h4 id="eval-evalfile" tabindex="-1"><a class="header-anchor" href="#eval-evalfile" aria-hidden="true">#</a> eval(), evalFile()</h4><p>解释一个字符串形式的代码文件。使用这个方法会在内部经历完整的 parse, analyze, compile 的过程，最终以字节码形式保存在内存中。后续调用以字节码形式执行。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">dynamic</span> <span class="token function">eval</span><span class="token punctuation">(</span><span class="token class-name">String</span> content<span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token class-name">String</span><span class="token operator">?</span> file<span class="token punctuation">,</span>
    <span class="token class-name">String</span><span class="token operator">?</span> module<span class="token punctuation">,</span>
    bool globallyImport <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token class-name">HTResourceType</span> type <span class="token operator">=</span> <span class="token class-name">HTResourceType</span><span class="token punctuation">.</span>hetuLiteralCode<span class="token punctuation">,</span>
    <span class="token class-name">String</span><span class="token operator">?</span> invoke<span class="token punctuation">,</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">dynamic</span><span class="token punctuation">&gt;</span></span> positionalArgs <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token keyword">dynamic</span><span class="token punctuation">&gt;</span></span> namedArgs <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HTType</span><span class="token punctuation">&gt;</span></span> typeArgs <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),x=n("li",null,[n("strong",null,"content"),a(": Dart 字符串形式的代码文件内容。")],-1),y=n("li",null,[n("strong",null,"file"),a(": 文件名。如果其他代码文件使用了 import，将会参考这个名字。如果忽略，将会以字符串的头部内容加上 Hash 生成。")],-1),_=n("li",null,[n("strong",null,"module"),a(": 模块名。整个代码文件编译后的字节码整体称作一个模块。")],-1),w=n("li",null,[n("strong",null,"globallyImport"),a(": 是否将这个模块的内容直接导入到全局命名空间。这样做可以让其他模块以后无需导入即可使用这个代码文件的内容。")],-1),H=n("strong",null,"type",-1),T=n("strong",null,"代码文件类型",-1),C=n("li",null,[n("strong",null,"invoke"),a(": 在解析完毕后，直接执行这个代码文件中的一个函数。函数的参数用 "),n("strong",null,"positionalArgs"),a(" 和 "),n("strong",null,"namedArgs"),a(" 传递。效果等同于在 "),n("strong",null,"eval()"),a(" 执行过后，再手动调用 "),n("strong",null,"invoke()"),a("。")],-1),S=n("h4",{id:"compile-compilefile-loadbytecode",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#compile-compilefile-loadbytecode","aria-hidden":"true"},"#"),a(" compile(), compileFile(), loadBytecode()")],-1),D=n("p",null,[a("这一对方法可以用于需要更高运行效率的场合。"),n("strong",null,"compile()"),a(" 将一个代码文件编码为字节码。随后可以在另外的场合获取这段字节码然后调用 "),n("strong",null,"loadBytecode()"),a(" 执行。在执行时，将无需再进行 parse, analyze, compile 的过程。")],-1),A=n("strong",null,"命令行工具",-1),F=o(`<h2 id="interact-with-the-script-fetch-assign-invoke" tabindex="-1"><a class="header-anchor" href="#interact-with-the-script-fetch-assign-invoke" aria-hidden="true">#</a> Interact with the script, fetch(), assign(), invoke()</h2><p>要在 Dart 代码中修改脚本内定义的变量，或者调用脚本函数，最简单的方法当然是直接使用 <code>eval</code>，例如：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code>hetu<span class="token punctuation">.</span><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;a = 5&#39;</span></span><span class="token punctuation">)</span>
hetu<span class="token punctuation">.</span><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;someScriptFunction()&#39;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但这种方法在你无法完全控制传入的字符串内容时具有隐患。例如你想要执行来自网络或者来自用户的代码时，有可能会发生一些对全局命名空间的污染，或者破坏。</p><p>因此我们提供了一些专用接口：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">dynamic</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token class-name">String</span> id<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token class-name">String</span><span class="token operator">?</span> module<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">void</span> <span class="token function">assign</span><span class="token punctuation">(</span><span class="token class-name">String</span> id<span class="token punctuation">,</span> <span class="token keyword">dynamic</span> value<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token class-name">String</span><span class="token operator">?</span> module<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">dynamic</span> <span class="token function">invoke</span><span class="token punctuation">(</span>
    <span class="token class-name">String</span> func<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span><span class="token operator">?</span> namespace<span class="token punctuation">,</span>
    <span class="token class-name">String</span><span class="token operator">?</span> module<span class="token punctuation">,</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">dynamic</span><span class="token punctuation">&gt;</span></span> positionalArgs <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token keyword">dynamic</span><span class="token punctuation">&gt;</span></span> namedArgs <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HTType</span><span class="token punctuation">&gt;</span></span> typeArgs <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>fetch</strong> 和 <strong>invoke</strong> 可以用来定义或者获取变量。</p><p><strong>invoke</strong> 可以用来调用某个脚本函数。</p><p>类似的，也有一些方法存在与脚本的 <strong>HTClass</strong>，<strong>HTInstance</strong>, <strong>HTFunction</strong> 等对象上。如果你将这些脚本中的对象直接传回了 Dart 代码，就可以使用这些对象上的 <strong>invoke</strong> 或者 <strong>call</strong> 来调用脚本函数。</p>`,9);function z(E,R){const s=c("RouterLink");return l(),i("div",null,[u,n("p",null,[e(s,{to:"/zh-Hans/grammar/strict_mode/#variable-shadowing"},{default:t(()=>[a("参考")]),_:1})]),d,k,n("p",null,[e(s,{to:"/zh-Hans/grammar/strict_mode/#implicit-variable-declaration"},{default:t(()=>[a("参考")]),_:1})]),m,h,n("p",null,[e(s,{to:"/zh-Hans/grammar/strict_mode/#zero-value"},{default:t(()=>[a("参考")]),_:1})]),v,g,n("p",null,[e(s,{to:"/zh-Hans/grammar/strict_mode/#truth-value"},{default:t(()=>[a("参考")]),_:1})]),b,n("p",null,[e(s,{to:"/zh-Hans/guide/package/"},{default:t(()=>[a("参考")]),_:1})]),f,n("ul",null,[x,y,_,w,n("li",null,[H,a(": "),e(s,{to:"/zh-Hans/guide/package/#%E8%B5%84%E6%BA%90%E7%B1%BB%E5%9E%8B"},{default:t(()=>[T]),_:1}),a("。决定了解释器的行为模式")]),C]),S,D,n("p",null,[a("可以参考 hetu_script_dev_tools 包提供的"),e(s,{to:"/zh-Hans/guide/command_line_tool/#compile"},{default:t(()=>[A]),_:1}),a("中附带的编译功能。")]),F])}const L=p(r,[["render",z],["__file","index.html.vue"]]);export{L as default};