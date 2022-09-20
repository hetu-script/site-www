import{r as o,o as l,c,b as n,e,w as t,F as r,f as p,d as s}from"./app.c1f9bf1f.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const u={},k=p(`<h1 id="dart-api-\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#dart-api-\u53C2\u8003" aria-hidden="true">#</a> Dart API \u53C2\u8003</h1><h2 id="\u6CB3\u56FE\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u6CB3\u56FE\u7C7B" aria-hidden="true">#</a> \u6CB3\u56FE\u7C7B</h2><p>Hetu \u662F\u4E00\u4E2A\u96C6\u5408\u4E86\u591A\u4E2A\u4E0D\u540C\u7684\u7F16\u7A0B\u8BED\u8A00\u5DE5\u5177\uFF08sourceContext, lexicon, parser, bundler, analyzer, compiler and interpreter\uFF09\u7684\u9ED8\u8BA4\u5B9E\u73B0\u7684\u5DE5\u5177\u7C7B\u3002\u5BF9\u4E8E\u666E\u901A\u7528\u6237\uFF0C\u53EF\u4EE5\u76F4\u63A5\u521B\u5EFA\u4E00\u4E2A Hetu \u5BF9\u8C61\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u5F00\u59CB\u4F7F\u7528\u811A\u672C\u529F\u80FD\u4E86\u3002\u4E0B\u9762\u4ECB\u7ECD\u7684\u4E00\u4E9B\u51FD\u6570\u63A5\u53E3\uFF0C\u5B9E\u9645\u4E0A\u5206\u522B\u5B9A\u4E49\u5728 compiler \u6216\u8005 interpreter \u4E0A\uFF0C\u4F46\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 Hetu \u7C7B\u6765\u65B9\u4FBF\u7684\u7EDF\u4E00\u8BBF\u95EE\u3002</p><h3 id="init" tabindex="-1"><a class="header-anchor" href="#init" aria-hidden="true">#</a> init()</h3><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  bool useDefaultModuleAndBinding <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token class-name">HTLocale</span><span class="token operator">?</span> locale<span class="token punctuation">,</span>
  <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Function</span><span class="token punctuation">&gt;</span></span> externalFunctions <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">HTExternalFunctionTypedef</span><span class="token punctuation">&gt;</span></span> externalFunctionTypedef <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HTExternalClass</span><span class="token punctuation">&gt;</span></span> externalClasses <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HTExternalTypeReflection</span><span class="token punctuation">&gt;</span></span> externalTypeReflections <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u8FD9\u4E2A\u65B9\u6CD5\u4F1A\u521D\u59CB\u5316\u6CB3\u56FE\u811A\u672C\u5185\u7F6E\u7684\u4E00\u4E9B Dart \u7C7B\u7684\u7ED1\u5B9A\u3002\u7528\u6237\u4E5F\u53EF\u4EE5\u5411\u8FD9\u4E2A\u65B9\u6CD5\u4F20\u5165\u53C2\u6570\u6765\u540C\u65F6\u521D\u59CB\u5316\u4E00\u4E9B\u81EA\u5B9A\u4E49\u7ED1\u5B9A\u3002</p><ul><li><p><strong>externalFunctions</strong>: \u8F7D\u5165\u4E00\u4E9B Dart \u51FD\u6570\uFF0C\u7528\u4EE5\u5728\u811A\u672C\u4E2D\u8C03\u7528\u3002\u6548\u679C\u7B49\u540C\u4E8E\u5728 <strong>init()</strong> \u6267\u884C\u5B8C\u6BD5\u540E\uFF0C\u624B\u52A8\u8C03\u7528 <strong>bindExternalFunction()</strong>.</p></li><li><p><strong>externalFunctionTypedef</strong>: \u8F7D\u5165\u4E00\u4E9B Dart \u7684\u51FD\u6570\u5B9A\u4E49\uFF0C\u4EE5\u53CA\u5BF9\u5E94\u7684\u89E3\u7ED1\u51FD\u6570\u3002\u4E4B\u540E\u53EF\u4EE5\u4FBF\u6377\u7684\u5C06\u4E00\u4E2A\u811A\u672C\u51FD\u6570\u89E3\u6790\u4E3A Dart \u51FD\u6570\uFF0C\u4EE5\u7528\u4E8E Dart \u7684\u5BF9\u8C61\u7684\u6784\u9020\u51FD\u6570\u7B49\u9700\u8981 Dart Lambda \u7684\u573A\u5408\u3002\u3002\u6548\u679C\u7B49\u540C\u4E8E\u5728 <strong>init()</strong> \u6267\u884C\u5B8C\u6BD5\u540E\uFF0C\u624B\u52A8\u8C03\u7528 <strong>bindExternalFunctionType</strong>.</p></li><li><p><strong>externalClasses</strong>: \u8F7D\u5165\u4E00\u4E9B Dart \u7C7B\u7684\u7ED1\u5B9A\u5B9A\u4E49\u3002\u4E4B\u540E\u53EF\u4EE5\u5728\u811A\u672C\u4E2D\u76F4\u63A5\u83B7\u5F97\u4E00\u4E2A Dart \u5BF9\u8C61\uFF0C\u6216\u8005\u8C03\u7528\u67D0\u4E2A Dart \u5BF9\u8C61\u7684\u51FD\u6570\u3002 \u6548\u679C\u7B49\u540C\u4E8E\u5728 <strong>init()</strong> \u6267\u884C\u5B8C\u6BD5\u540E\uFF0C\u624B\u52A8\u8C03\u7528 <strong>bindExternalClass</strong>.</p></li></ul><h3 id="eval-evalfile" tabindex="-1"><a class="header-anchor" href="#eval-evalfile" aria-hidden="true">#</a> eval(), evalFile()</h3><p>\u89E3\u91CA\u4E00\u4E2A\u5B57\u7B26\u4E32\u5F62\u5F0F\u7684\u4EE3\u7801\u6587\u4EF6\u3002\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5\u4F1A\u5728\u5185\u90E8\u7ECF\u5386\u5B8C\u6574\u7684 parse, analyze, compile \u7684\u8FC7\u7A0B\uFF0C\u6700\u7EC8\u4EE5\u5B57\u8282\u7801\u5F62\u5F0F\u4FDD\u5B58\u5728\u5185\u5B58\u4E2D\u3002\u540E\u7EED\u8C03\u7528\u4EE5\u5B57\u8282\u7801\u5F62\u5F0F\u6267\u884C\u3002</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">dynamic</span> <span class="token function">eval</span><span class="token punctuation">(</span><span class="token class-name">String</span> content<span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token class-name">String</span><span class="token operator">?</span> fileName<span class="token punctuation">,</span>
    <span class="token class-name">String</span><span class="token operator">?</span> moduleName<span class="token punctuation">,</span>
    bool globallyImport <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token class-name">HTResourceType</span> type <span class="token operator">=</span> <span class="token class-name">HTResourceType</span><span class="token punctuation">.</span>hetuLiteralCode<span class="token punctuation">,</span>
    <span class="token class-name">String</span><span class="token operator">?</span> invokeFunc<span class="token punctuation">,</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">dynamic</span><span class="token punctuation">&gt;</span></span> positionalArgs <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token keyword">dynamic</span><span class="token punctuation">&gt;</span></span> namedArgs <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HTType</span><span class="token punctuation">&gt;</span></span> typeArgs <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,10),d=n("li",null,[n("strong",null,"content"),s(": Dart \u5B57\u7B26\u4E32\u5F62\u5F0F\u7684\u4EE3\u7801\u6587\u4EF6\u5185\u5BB9\u3002")],-1),m=n("li",null,[n("strong",null,"fileName"),s(": \u6587\u4EF6\u540D\u3002\u5982\u679C\u5176\u4ED6\u4EE3\u7801\u6587\u4EF6\u4F7F\u7528\u4E86 import\uFF0C\u5C06\u4F1A\u53C2\u8003\u8FD9\u4E2A\u540D\u5B57\u3002\u5982\u679C\u5FFD\u7565\uFF0C\u5C06\u4F1A\u4EE5\u5B57\u7B26\u4E32\u7684\u5934\u90E8\u5185\u5BB9\u52A0\u4E0A Hash \u751F\u6210\u3002")],-1),g=n("li",null,[n("strong",null,"moduleName"),s(": \u6A21\u5757\u540D\u3002\u6574\u4E2A\u4EE3\u7801\u6587\u4EF6\u7F16\u8BD1\u540E\u7684\u5B57\u8282\u7801\u6574\u4F53\u79F0\u4F5C\u4E00\u4E2A\u6A21\u5757\u3002")],-1),b=n("li",null,[n("strong",null,"globallyImport"),s(": \u662F\u5426\u5C06\u8FD9\u4E2A\u6A21\u5757\u7684\u5185\u5BB9\u76F4\u63A5\u5BFC\u5165\u5230\u5168\u5C40\u547D\u540D\u7A7A\u95F4\u3002\u8FD9\u6837\u505A\u53EF\u4EE5\u8BA9\u5176\u4ED6\u6A21\u5757\u4EE5\u540E\u65E0\u9700\u5BFC\u5165\u5373\u53EF\u4F7F\u7528\u8FD9\u4E2A\u4EE3\u7801\u6587\u4EF6\u7684\u5185\u5BB9\u3002")],-1),h=n("strong",null,"type",-1),_=s(": "),f=n("strong",null,"\u4EE3\u7801\u6587\u4EF6\u7C7B\u578B",-1),y=s("\u3002\u51B3\u5B9A\u4E86\u89E3\u91CA\u5668\u7684\u884C\u4E3A\u6A21\u5F0F"),v=n("li",null,[n("strong",null,"invokeFunc"),s(": \u5728\u89E3\u6790\u5B8C\u6BD5\u540E\uFF0C\u76F4\u63A5\u6267\u884C\u8FD9\u4E2A\u4EE3\u7801\u6587\u4EF6\u4E2D\u7684\u4E00\u4E2A\u51FD\u6570\u3002\u51FD\u6570\u7684\u53C2\u6570\u7528 "),n("strong",null,"positionalArgs"),s(" \u548C "),n("strong",null,"namedArgs"),s(" \u4F20\u9012\u3002\u6548\u679C\u7B49\u540C\u4E8E\u5728 "),n("strong",null,"eval()"),s(" \u6267\u884C\u8FC7\u540E\uFF0C\u518D\u624B\u52A8\u8C03\u7528 "),n("strong",null,"invoke()"),s("\u3002")],-1),x=n("h3",{id:"compile-compilefile-loadbytecode",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#compile-compilefile-loadbytecode","aria-hidden":"true"},"#"),s(" compile(), compileFile(), loadBytecode()")],-1),T=n("p",null,[s("\u8FD9\u4E00\u5BF9\u65B9\u6CD5\u53EF\u4EE5\u7528\u4E8E\u9700\u8981\u66F4\u9AD8\u8FD0\u884C\u6548\u7387\u7684\u573A\u5408\u3002"),n("strong",null,"compile()"),s(" \u5C06\u4E00\u4E2A\u4EE3\u7801\u6587\u4EF6\u7F16\u7801\u4E3A\u5B57\u8282\u7801\u3002\u968F\u540E\u53EF\u4EE5\u5728\u53E6\u5916\u7684\u573A\u5408\u83B7\u53D6\u8FD9\u6BB5\u5B57\u8282\u7801\u7136\u540E\u8C03\u7528 "),n("strong",null,"loadBytecode()"),s(" \u6267\u884C\u3002\u5728\u6267\u884C\u65F6\uFF0C\u5C06\u65E0\u9700\u518D\u8FDB\u884C parse, analyze, compile \u7684\u8FC7\u7A0B\u3002")],-1),H=s("\u53EF\u4EE5\u53C2\u8003 hetu_script_dev_tools \u5305\u63D0\u4F9B\u7684"),w=n("strong",null,"\u547D\u4EE4\u884C\u5DE5\u5177",-1),F=s("\u4E2D\u9644\u5E26\u7684\u7F16\u8BD1\u529F\u80FD\u3002"),D=p(`<h3 id="invoke" tabindex="-1"><a class="header-anchor" href="#invoke" aria-hidden="true">#</a> invoke()</h3><p>\u5728\u89E3\u91CA\u5668\u5BF9\u8C61\u4E0A\u7528\u8FD9\u4E2A\u65B9\u6CD5\u6765\u8C03\u7528\u67D0\u4E2A\u4EE3\u7801\u6587\u4EF6\u4E2D\u5B9A\u4E49\u7684\u51FD\u6570\u3002\u7C7B\u4F3C\u7684\uFF0C\u4E5F\u6709\u4E00\u4E9B\u5176\u4ED6\u7684\u8C03\u7528\u5B58\u5728\u4E0E\u811A\u672C\u7684 <strong>HTClass</strong>\uFF0C<strong>HTInstance</strong>, <strong>HTFunction</strong> \u7B49\u5BF9\u8C61\u4E0A\u3002\u5982\u679C\u4F60\u5C06\u8FD9\u4E9B\u811A\u672C\u4E2D\u7684\u5BF9\u8C61\u76F4\u63A5\u4F20\u56DE\u4E86 Dart \u4EE3\u7801\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A\u63A5\u53E3\u6765\u8C03\u7528\u811A\u672C\u51FD\u6570\u3002</p><h2 id="\u4EE3\u7801\u7A7A\u95F4" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u7A7A\u95F4" aria-hidden="true">#</a> \u4EE3\u7801\u7A7A\u95F4</h2><p><strong>HTResourceContext</strong> \u662F\u89E3\u91CA\u5668\u4FDD\u5B58\u548C\u7BA1\u7406\u4EE3\u7801\u6587\u4EF6\u7684\u62BD\u8C61\u5DE5\u5177\u7C7B\u3002\u5982\u679C\u4F60\u5B89\u88C5\u4E86 <strong>hetu_script_dev_tools</strong> \u6216\u8005 <strong>hetu_script_flutter</strong>\uFF0C\u5C06\u4F1A\u6709\u5404\u81EA\u5BF9\u5E94\u7684\u4EE3\u7801\u7A7A\u95F4\u7C7B\u7684\u5177\u4F53\u5B9E\u73B0\u6765\u7BA1\u7406\u4F60\u78C1\u76D8\u4E0A\uFF0C\u6216\u8005 Flutter \u7A0B\u5E8F\u4E2D\u7684\u8D44\u6E90\u6587\u4EF6\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u7684\u4EE3\u7801\u7A7A\u95F4\u5B9E\u73B0\u662F <strong>HTOverlayContext</strong> \uFF0C\u8FD9\u4E2A\u5B9E\u73B0\u4E0D\u4F1A\u4E3B\u52A8\u8BFB\u53D6\u6587\u4EF6\uFF0C\u800C\u9700\u8981\u901A\u8FC7\u4E0B\u9762\u8FD9\u4E9B\u63A5\u53E3\u6765\u624B\u52A8\u4FDD\u5B58\u548C\u66F4\u65B0\u4EE3\u7801\u6587\u4EF6\uFF1A</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">addResource</span><span class="token punctuation">(</span><span class="token class-name">String</span> fullName<span class="token punctuation">,</span> <span class="token class-name">HTSource</span> resource<span class="token punctuation">)</span>

<span class="token keyword">void</span> <span class="token function">removeResource</span><span class="token punctuation">(</span><span class="token class-name">String</span> fullName<span class="token punctuation">)</span>

<span class="token keyword">void</span> <span class="token function">updateResource</span><span class="token punctuation">(</span><span class="token class-name">String</span> fullName<span class="token punctuation">,</span> <span class="token class-name">HTSource</span> resource<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,5);function S(B,E){const a=o("RouterLink");return l(),c(r,null,[k,n("ul",null,[d,m,g,b,n("li",null,[h,_,e(a,{to:"/zh-Hans/guide/package/#%E8%B5%84%E6%BA%90%E7%B1%BB%E5%9E%8B"},{default:t(()=>[f]),_:1}),y]),v]),x,T,n("p",null,[H,e(a,{to:"/zh-Hans/guide/command_line_tool/#compile"},{default:t(()=>[w]),_:1}),F]),D],64)}var R=i(u,[["render",S]]);export{R as default};
