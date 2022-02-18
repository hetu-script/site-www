import{r as o,o as l,c as r,b as s,e as a,w as c,F as i,d as n,f as e}from"./app.d9a87ace.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const k={},d=s("h1",{id:"\u7B80\u4ECB",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u7B80\u4ECB","aria-hidden":"true"},"#"),n(" \u7B80\u4ECB")],-1),b=s("p",null,"\u6CB3\u56FE\u662F\u4E00\u4E2A\u4E13\u4E3A Flutter \u6253\u9020\u7684\u8F7B\u91CF\u578B\u5D4C\u5165\u5F0F\u811A\u672C\u8BED\u8A00\u3002\u5B83\u7528\u7EAF Dart \u5199\u6210\uFF0C\u56E0\u6B64\u53EF\u4EE5\u975E\u5E38\u8F7B\u6613\u7684\u5D4C\u5165 Flutter APP\uFF0C\u548C\u4F60\u7684\u73B0\u6709\u4EE3\u7801\u4EA4\u4E92\u3002\u5F00\u53D1\u8FD9\u4E2A\u8BED\u8A00\u7684\u4E3B\u8981\u76EE\u7684\u662F\u4E3A\u4E86\u5B9E\u73B0 APP \u52A8\u6001\u5E03\u5C40\u3001\u5BF9\u5DF2\u7ECF\u53D1\u5E03\u7684\u7A0B\u5E8F\u8FDB\u884C\u8F7B\u91CF\u7EA7\u70ED\u66F4\u65B0\u3001\u4EE5\u53CA\u6E38\u620F\u7A0B\u5E8F\u7684\u811A\u672C\u6846\u67B6\u7B49\u7B49\u5728 FLutter \u4E2D\u53D7\u9650\u5236\u7684\u8BED\u8A00\u80FD\u529B\u3002",-1),h=n("\u76EE\u524D\u5DF2\u7ECF\u6709\u4E00\u4E9B\u6846\u67B6\u4E3A\u4E86\u76F8\u4F3C\u7684\u76EE\u7684\u800C\u5B58\u5728\uFF0C\u4F8B\u5982\u53EF\u4EE5\u52A8\u6001\u8C03\u7528 Lua \u8BED\u8A00\u7684"),_={href:"https://pub.dev/packages/lua_dardo",target:"_blank",rel:"noopener noreferrer"},m=n("Lua Dardo"),g=n("\uFF0C\u53EF\u4EE5\u6839\u636E Json \u751F\u6210\u754C\u9762\u7684"),f={href:"https://fair.58.com/zh/",target:"_blank",rel:"noopener noreferrer"},v=n("Flutter Fair"),x=n("\uFF0C\u7B49\u7B49\u3002\u8FD8\u6709\u4E00\u4E9B\u5982 "),w={href:"https://openkraken.com/",target:"_blank",rel:"noopener noreferrer"},y=n("Kraken"),F=n(" \u548C "),V={href:"https://github.com/tencent/mxflutter",target:"_blank",rel:"noopener noreferrer"},D=n("MXFlutter"),H=n(" \u7B49\u65B9\u6848\u8BD5\u56FE\u5B8C\u5168\u5C06 Flutter APP \u524D\u7AEF\u5316\u3002\u8FD9\u4E9B\u65B9\u6848\u5927\u591A\u90FD\u6781\u4E3A\u7B28\u91CD\uFF08\u4F9D\u6258\u4E8E V8 \u7B49 Javascript \u5F15\u64CE\uFF09\u3002\u5E76\u4E14\u9700\u8981\u5F00\u53D1\u8005\u7EF4\u62A4\u4E00\u6574\u5957\u80F6\u6C34\u65B9\u6848\u6765\u8FBE\u5230\u76EE\u7684\u3002"),L=e(`<p>\u800C\u6CB3\u56FE\u811A\u672C\u8BED\u8A00\u7684\u76EE\u7684\u5219\u662F\u4E3A\u4E86\u4EE5\u6700\u5C0F\u4EE3\u4EF7\u5B9E\u73B0\u7C7B\u4F3C\u7684\u76EE\u7684\uFF1A\u53EA\u9700\u8981\u5BFC\u5165\u4E00\u4E2A\u5E93 + \u4E00\u884C\u4EE3\u7801\u5373\u53EF\u52A8\u6001\u5316\u3002</p><h2 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a> \u5FEB\u901F\u4E0A\u624B</h2><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u5728 Dart \u7A0B\u5E8F\u4E2D\u89E3\u6790\u4E00\u6BB5\u811A\u672C\u8BED\u8A00\u7684\u4F8B\u5B50\uFF1A</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:hetu_script/hetu_script.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> hetu <span class="token operator">=</span> <span class="token class-name">Hetu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  hetu<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  hetu<span class="token punctuation">.</span><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">r&#39;&#39;&#39;
    var ht = {
      name: &#39;Hetu&#39;,
      greeting: () {
        print(&#39;Hi! I\\&#39;m&#39;, this.name)
      }
    }
    ht.greeting()
  &#39;&#39;&#39;</span></span><span class="token punctuation">,</span> isModule<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,4),P=n("\u53EF\u4EE5\u770B\u5230\uFF0C\u6CB3\u56FE\u5C3D\u7BA1\u662F\u4E00\u4E2A\u65B0\u8BED\u8A00\uFF0C\u4F46\u5B83\u7684"),J=n("\u8BED\u6CD5"),N=n("\u7C7B\u4F3C typescript/kotlin/swift \u7B49\u73B0\u4EE3\u8BED\u8A00\uFF0C\u4E00\u76EE\u4E86\u7136\uFF0C\u53EA\u9700\u8981\u51E0\u5206\u949F\u4E86\u89E3\u4E0B\u4E00\u4E9B\u5173\u952E\u533A\u522B\u5C31\u53EF\u4EE5\u5F00\u59CB\u5199\u4EE3\u7801\u4E86\uFF1A"),z=e('<ul><li><p>\u8BED\u53E5\u672B\u5C3E\u7684\u5206\u53F7\u53EF\u5199\u53EF\u4E0D\u5199\u3002</p></li><li><p>\u51FD\u6570\u58F0\u660E\u7C7B\u4F3C Kotlin\uFF0C\u9700\u8981\u4EE5\u5173\u952E\u5B57\u5F00\u5934\uFF0C\u51FD\u6570\u5173\u952E\u5B57\u6839\u636E\u529F\u80FD\u4E0D\u540C\uFF0C\u5305\u62EC\uFF1A<strong>fun, get, set, construct</strong> \u7B49\u7B49\u3002</p></li><li><p>\u8BED\u6CD5\u65E2\u652F\u6301\u4F20\u7EDF C++/Java \u7684\u4EE5 class \u4E3A\u57FA\u7840\u7684\u9762\u5411\u5BF9\u8C61\uFF0C\u4E5F\u652F\u6301 Javascript \u7684\u4EE5\u539F\u578B\u94FE\u4E3A\u57FA\u7840\u7684\u9762\u5411\u5BF9\u8C61\uFF0C\u4E5F\u652F\u6301\u5404\u79CD\u51FD\u6570\u5F0F\u5199\u6CD5\uFF0C\u7528\u6237\u53EF\u4EE5\u6839\u636E\u9700\u6C42\u4EFB\u9009\u98CE\u683C\u3002</p></li><li><p>\u652F\u6301\u5728\u5173\u952E\u5B57\u58F0\u660E\u540E\u52A0\u4E0A\u7C7B\u578B\u6CE8\u89E3\uFF08\u9759\u6001\u7C7B\u578B\u5206\u6790\u8FD8\u5728\u5F00\u53D1\u4E2D\uFF0C\u76EE\u524D\u5C1A\u672A\u5B9E\u73B0\uFF09\u3002</p></li></ul><h2 id="\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u7ED1\u5B9A" aria-hidden="true">#</a> \u7ED1\u5B9A</h2>',2),A=n("\u6CB3\u56FE\u548C Dart \u7684\u4EA4\u4E92"),B=n("\u7B80\u5355\u5230\u4EE4\u4EBA\u53D1\u6307\u3002\u5927\u591A\u6570\u65F6\u5019\u4F60\u90FD\u53EF\u4EE5\u76F4\u63A5\u5411\u811A\u672C\u4E2D\u4F20\u9012 Dart \u7684\u6570\u503C\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u811A\u672C\u4F20\u56DE\u7684\u5BF9\u8C61\u3002"),C=e(`<p>\u4E0B\u9762\u7684\u4EE3\u7801\u5C55\u793A\u4E86\u4E00\u4E2A\u5728 Dart \u4E2D\u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570\uFF0C\u7136\u540E\u5728\u811A\u672C\u4E2D\u8C03\u7528\uFF0C\u7136\u540E\u518D\u5728 Dart \u4E2D\u8BFB\u53D6\u8FD4\u56DE\u503C\u7684\u4F8B\u5B50\uFF1A</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:hetu_script/hetu_script.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> hetu <span class="token operator">=</span> <span class="token class-name">Hetu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  hetu<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>externalFunctions<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token string-literal"><span class="token string">&#39;hello&#39;</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token string-literal"><span class="token string">&#39;greetings&#39;</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&#39;greetings from Dart!&#39;</span></span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> hetuValue <span class="token operator">=</span> hetu<span class="token punctuation">.</span><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">r&#39;&#39;&#39;
      external fun hello
      var dartValue = hello()
      dartValue[&#39;reply&#39;] = &#39;Hi, this is Hetu.&#39;
      dartValue // the script will return the value of it&#39;s last expression
      &#39;&#39;&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;hetu value: </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">hetuValue</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,2);function E(I,K){const t=o("ExternalLinkIcon"),p=o("RouterLink");return l(),r(i,null,[d,b,s("p",null,[h,s("a",_,[m,a(t)]),g,s("a",f,[v,a(t)]),x,s("a",w,[y,a(t)]),F,s("a",V,[D,a(t)]),H]),L,s("p",null,[P,a(p,{to:"/zh-Hans/guide/syntax/"},{default:c(()=>[J]),_:1}),N]),z,s("p",null,[a(p,{to:"/zh-Hans/guide/binding/"},{default:c(()=>[A]),_:1}),B]),C],64)}var S=u(k,[["render",E]]);export{S as default};
