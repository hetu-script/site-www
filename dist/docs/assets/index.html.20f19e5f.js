import{r as e,o as t,c as o,b as s,e as c,F as r,f as a,d as n}from"./app.fb854eb5.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=a(`<h1 id="\u8BED\u8A00\u5B9E\u73B0\u7EC6\u8282" tabindex="-1"><a class="header-anchor" href="#\u8BED\u8A00\u5B9E\u73B0\u7EC6\u8282" aria-hidden="true">#</a> \u8BED\u8A00\u5B9E\u73B0\u7EC6\u8282</h1><p>\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\uFF0C\u4F60\u65E0\u987B\u5177\u4F53\u4E86\u89E3\u6CB3\u56FE\u7684\u89E3\u91CA\u5668\u548C\u7F16\u8BD1\u5668\u7B49\u5DE5\u5177\u662F\u5982\u4F55\u5B9E\u73B0\u7684\u3002\u4F46\u5982\u679C\u4F60\u9047\u5230\u4E86\u4E00\u4E9B\u8BBE\u8BA1\u5B9E\u73B0\u5E95\u5C42\u7684\u95EE\u9898\uFF0C\u53EF\u4EE5\u53C2\u8003\u8FD9\u91CC\u7684\u4E00\u4E9B\u4ECB\u7ECD\u3002</p><h2 id="\u5EF6\u8FDF\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#\u5EF6\u8FDF\u521D\u59CB\u5316" aria-hidden="true">#</a> \u5EF6\u8FDF\u521D\u59CB\u5316</h2><p>\u5BF9\u4E8E <strong>ResourceType.hetuModule</strong> \u7C7B\u578B\u7684\u4EE3\u7801\u6587\u4EF6\uFF0C\u9876\u5C42\u53D8\u91CF\u58F0\u660E\uFF0C\u4EE5\u53CA\u7C7B\u4E2D\u7684\u6210\u5458\u53D8\u91CF\u6210\u540D\uFF0C\u5176\u521D\u59CB\u5316\u503C\u5E76\u4E0D\u4F1A\u5728\u4E00\u5F00\u59CB\u5C31\u8FD0\u7B97\u51FA\u6765\u3002\u800C\u662F\u5728\u7B2C\u4E00\u6B21\u8C03\u7528\u524D\u624D\u4F1A\u8FD0\u7B97\u3002\u8FD9\u6837\u662F\u4E3A\u4E86\u89E3\u51B3\u5FAA\u73AF\u5BFC\u5165\u7684\u95EE\u9898\u3002</p><h2 id="\u679A\u4E3E" tabindex="-1"><a class="header-anchor" href="#\u679A\u4E3E" aria-hidden="true">#</a> \u679A\u4E3E</h2><p>\u679A\u4E3E\u503C\u5728\u7F16\u8BD1\u65F6\u4F1A\u88AB\u7F16\u8BD1\u6210\u666E\u901A\u7684 class\u3002\u56E0\u6B64\u6240\u6709\u7684\u679A\u4E3E\u503C\u672C\u8D28\u4E0A\u90FD\u662F\u666E\u901A\u5BF9\u8C61\u3002</p><p>\u4F8B\u5982\uFF0C\u4E0B\u9762\u8FD9\u4E2A\u679A\u4E3E\u58F0\u660E\uFF1A</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">enum</span> <span class="token class-name">Country</span> <span class="token punctuation">{</span>
  kHungary<span class="token punctuation">,</span>
  kJapan<span class="token punctuation">,</span>
  kIndia<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4F1A\u88AB\u7F16\u8BD1\u6210\uFF1A</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">Country</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> _name<span class="token punctuation">;</span>
  construct <span class="token function">_</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    _name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  fun toString <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string-literal"><span class="token string">&#39;Country.</span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">_name</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span>
  <span class="token keyword">static</span> <span class="token keyword">final</span> kHungary <span class="token operator">=</span> <span class="token class-name">Country</span><span class="token punctuation">.</span><span class="token function">_</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;kHungary&#39;</span></span><span class="token punctuation">)</span>
  <span class="token keyword">static</span> <span class="token keyword">final</span> kJapan <span class="token operator">=</span> <span class="token class-name">Country</span><span class="token punctuation">.</span><span class="token function">_</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;kJapan&#39;</span></span><span class="token punctuation">)</span>
  <span class="token keyword">static</span> <span class="token keyword">final</span> kIndia <span class="token operator">=</span> <span class="token class-name">Country</span><span class="token punctuation">.</span><span class="token function">_</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;kIndia&#39;</span></span><span class="token punctuation">)</span>
  <span class="token keyword">static</span> <span class="token keyword">final</span> values <span class="token operator">=</span> <span class="token punctuation">[</span>kHungary<span class="token punctuation">,</span> kJapan<span class="token punctuation">,</span> kIndia<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u4F46\u679A\u4E3E\u503C\u5728\u58F0\u660E\u65F6\u4E5F\u53EF\u4EE5\u52A0 external \u5173\u952E\u5B57\uFF0C\u8FD9\u8868\u660E\u8FD9\u662F\u4E00\u4E2A Dart \u4E2D\u7684\u679A\u4E3E\u503C\u3002</p><h2 id="\u81EA\u52A8\u5206\u53F7\u63D2\u5165" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u5206\u53F7\u63D2\u5165" aria-hidden="true">#</a> \u81EA\u52A8\u5206\u53F7\u63D2\u5165</h2>`,12),k=n("\u81EA\u52A8\u5206\u53F7\u63D2\u5165\uFF08Automatic semicolon insertion\uFF0C\u7F29\u5199 ASI\uFF09\u662F\u4E00\u4E2A\u5E38\u89C1\u7684\u7A0B\u5E8F\u8BED\u8A00\u6280\u672F\u3002\u4E3B\u8981\u7528\u4E8E\u90A3\u4E9B\u53EF\u4EE5\u7701\u7565\u5206\u53F7\uFF0C\u540C\u65F6\u53C8\u5141\u8BB8\u591A\u884C\u8BED\u53E5\u7684\u7F16\u7A0B\u8BED\u8A00\u4E2D\u3002\u8981\u4E86\u89E3\u66F4\u591A\uFF0C\u53EF\u4EE5\u53C2\u8003"),d={href:"https://en.wikibooks.org/wiki/JavaScript/Automatic_semicolon_insertion",target:"_blank",rel:"noopener noreferrer"},m=n("\u8FD9\u4E2A\u9875\u9762"),b=n("\u3002"),g=a(`<p>\u4F7F\u7528\u81EA\u52A8\u5206\u53F7\u63D2\u5165\u6280\u672F\u7684\u76EE\u7684\u662F\u4E3A\u4E86\u907F\u514D\u51FA\u73B0\u591A\u91CD\u8BED\u4E49\uFF0C\u4E5F\u5C31\u662F\u7F16\u8BD1\u5668\u5BF9\u8BED\u53E5\u7684\u7406\u89E3\u53EF\u80FD\u548C\u7528\u6237\u60F3\u8981\u8FBE\u5230\u7684\u6548\u679C\u4E0D\u540C\u3002</p><p>\u4F8B\u5982\u4E0B\u9762\u7684\u4EE3\u7801\u4E2D\uFF0Cjavascript \u4F1A\u5728 return \u5173\u952E\u5B57\u540E\u63D2\u5165\u5206\u53F7\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isReady<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token comment">// a semicolon will always be inserted here automatically by Javascript engine</span>
  <span class="token punctuation">{</span>
    <span class="token comment">// fields</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// some codes</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5982\u679C\u8FD9\u91CC\u6CA1\u6709\u5206\u53F7\uFF0C\u5219\u4F1A\u6709\u4E24\u79CD\u4E0D\u540C\u7406\u89E3\uFF1A</p><p>1\uFF0C\u5982\u679C if \u5224\u65AD\u4E3A\u771F\uFF0C\u51FD\u6570\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u5BF9\u8C61\u5B57\u9762\u91CF\u3002</p><p>2\uFF0C\u5982\u679C if \u5224\u65AD\u4E3A\u771F\uFF0C\u51FD\u6570\u5728\u8FD9\u91CC\u76F4\u63A5\u8FD4\u56DE\u7A7A\u503C\u3002\u5426\u5219\uFF0C\u7EE7\u7EED\u6267\u884C\u4E0B\u9762\u7684\u8BED\u53E5\u3002</p><p>\u7C7B\u4F3C\u7684\u591A\u91CD\u8BED\u4E49\u8FD8\u4F1A\u53D1\u751F\u5728\u5706\u62EC\u53F7\u5F00\u5934\u7684\u6BB5\u843D\u4E2D\u3002\u56E0\u4E3A\u6709\u5706\u62EC\u53F7\u9664\u4E86\u7528\u6765\u4F5C\u4E3A\u8868\u8FBE\u5F0F\u5206\u7EC4\uFF0C\u4E5F\u6709\u628A\u524D\u9762\u7684\u8868\u8FBE\u5F0F\u5F53\u505A\u51FD\u6570\u76F4\u63A5\u6267\u884C\u7684\u610F\u601D\u3002</p><p>\u5728 Javascript \u4E2D\uFF0C\u53EA\u8981\u4F60\u8FDB\u884C\u4E86\u6362\u884C\uFF0C\u591A\u6570\u60C5\u51B5\u4E0B\u90FD\u4F1A\u81EA\u52A8\u63D2\u5165\u4E00\u4E2A\u5206\u53F7\u3002\u5728\u6CB3\u56FE\u4E2D\uFF0C\u89C4\u5219\u5219\u7565\u6709\u53D8\u5316\u3002</p><p>\u6211\u4EEC\u53EA\u4F1A\u5728\u4EE5\u4E0B\u9762\u8FD9\u4E9B token \u5F00\u5934\u7684\u4E00\u884C\u7684<strong>\u4E0A\u4E00\u884C</strong>\u672B\u5C3E\u52A0\u5165\u5206\u53F7\uFF1A</p><p>&#39;{&#39;, &#39;(&#39;, &#39;[&#39;, &#39;++&#39;, &#39;--&#39;</p><p>\u4F46\u5982\u679C<strong>\u4E0A\u4E00\u884C</strong>\u662F\u4E00\u4E2A<strong>\u672A\u7ED3\u675F</strong>\u8BED\u53E5\uFF0C\u5219\u4E0D\u4F1A\u52A0\u5165\u5206\u53F7\u3002</p><p>\u672A\u7ED3\u675F\u8BED\u53E5\u7684\u610F\u601D\u662F\u4EE5\u4E0B\u9762\u8FD9\u4E9B token \u7ED3\u5C3E\u7684\u884C\uFF1A</p><p>&#39;!&#39;, &#39;*&#39;, &#39;/&#39;, &#39;%&#39;, &#39;+&#39;, &#39;-&#39;, &#39;&lt;&#39;, &#39;&lt;=&#39;, &#39;&gt;&#39;, &#39;&gt;=&#39;, &#39;=&#39;, &#39;!=&#39;, &#39;??&#39;, &#39;&amp;&amp;&#39;, &#39;||&#39;, &#39;=&#39;, &#39;+=&#39;, &#39;-=&#39;, &#39;*=&#39;, &#39;/=&#39;, &#39;??=&#39;, &#39;.&#39;, &#39;(&#39;, &#39;{&#39;, &#39;[&#39;, &#39;,&#39;, &#39;:&#39;, &#39;-&gt;&#39;, &#39;=&gt;&#39;.</p><p>\u9664\u6B64\u4E4B\u5916\uFF0C\u5BF9\u4E8E return \u5173\u952E\u5B57\u3002\u5982\u679C\u540E\u9762\u662F\u65B0\u7684\u4E00\u884C\uFF0C\u5219\u6211\u4EEC\u4E00\u5B9A\u4F1A\u63D2\u5165\u4E00\u4E2A\u5206\u53F7\u3002</p><p>\u56E0\u6B64\u5982\u679C\u4F60\u60F3\u8981 return \u4E00\u4E2A\u5BF9\u8C61\u5B57\u9762\u91CF\uFF0C\u9700\u8981\u5176\u5DE6\u8FB9\u7684\u82B1\u62EC\u53F7\u5199\u5728 return \u7684\u540C\u4E00\u884C\u3002</p><p>\u7C7B\u4F3C\u7684\uFF0C\u9700\u8981\u5C06\u51FD\u6570\u5B9A\u4E49\u7684\u5DE6\u8FB9\u7684\u82B1\u62EC\u53F7\u5199\u5728\u51FD\u6570\u540D\u5B57\u6216\u8005\u51FD\u6570\u53C2\u6570\u7684\u540C\u4E00\u884C\u3002</p><h2 id="\u5FAA\u73AF\u5BFC\u5165" tabindex="-1"><a class="header-anchor" href="#\u5FAA\u73AF\u5BFC\u5165" aria-hidden="true">#</a> \u5FAA\u73AF\u5BFC\u5165</h2><p>\u5FAA\u73AF\u5BFC\u5165\u7684\u610F\u601D\u662F\uFF0C\u5BF9\u4E8E\u4EE3\u7801\u6587\u4EF6 A \u548C B\uFF0C\u5728 A \u4E2D\u5305\u542B\u4E86 &#39;import B&#39;\u7684\u58F0\u660E\uFF0C\u540C\u65F6\u5728 B \u4E2D\u5305\u542B\u4E86 &#39;import A&#39;\u7684\u58F0\u660E\u3002</p><p>\u5982\u679C\u4E00\u4E2A\u4EE3\u7801\u6587\u4EF6\u662F <strong>ResourceType.hetuModule</strong> \u7C7B\u578B\uFF0C\u89E3\u91CA\u5668\u4F1A\u81EA\u52A8\u5904\u7406\u5FAA\u73AF\u5F15\u5165\u95EE\u9898\u3002\u4F46\u5982\u679C\u4EE3\u7801\u6587\u4EF6\u7684\u7C7B\u578B\u662F <strong>ResourceType.hetuScript</strong>\uFF0C\u5FAA\u73AF\u5F15\u7528\u4F1A\u9020\u6210 stack overflow \u9519\u8BEF\uFF0C\u56E0\u6B64\u4F60\u9700\u8981\u81EA\u884C\u5C0F\u5FC3\u5904\u7406\u8FD9\u4E2A\u95EE\u9898\u3002</p><h2 id="for-in-\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#for-in-\u5FAA\u73AF" aria-hidden="true">#</a> for...in \u5FAA\u73AF</h2><p>\u6CB3\u56FE\u4E2D\u7684 for...in \u5FAA\u73AF\u662F\u4E00\u79CD\u5229\u7528 iterator \u5B9E\u73B0\u7684\u8BED\u6CD5\u7CD6\u3002</p><p>\u5982\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token keyword">in</span> <span class="token function">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5B9E\u9645\u4E0A\u5C06\u4F1A\u88AB\u7F16\u8BD1\u6210\u7C7B\u4F3C\u4E0B\u9762\u7684\u5F62\u5F0F\uFF1A</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">final</span> __iter0 <span class="token operator">=</span> <span class="token function">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span>iterator
<span class="token keyword">while</span> <span class="token punctuation">(</span>__iter0<span class="token punctuation">.</span><span class="token function">moveNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> i <span class="token operator">=</span> __iter0<span class="token punctuation">.</span>current
  <span class="token function">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>iterator \u76F8\u5173\u63A5\u53E3\u4F7F\u7528\u4E86 Dart \u4E2D\u7684 api\uFF0C\u4F46\u56E0\u4E3A\u672C\u8EAB\u5728\u811A\u672C\u4E2D\u5B9E\u73B0\uFF0C\u56E0\u6B64\u5E76\u4E0D\u4E00\u5B9A\u9700\u8981\u8FD9\u662F\u4E00\u4E2A Dart \u7684\u5217\u8868 iterator\uFF0C\u4F60\u53EF\u4EE5\u81EA\u884C\u5728\u811A\u672C\u4E2D\u5B9A\u4E49\u4E00\u4E2A\u5305\u542B\u6210\u5458 <strong>iterator</strong> \u7684\u5BF9\u8C61\uFF0C\u7136\u540E\u8FD9\u4E2A <strong>iterator</strong> \u672C\u8EAB\u53C8\u5305\u542B\u4E00\u4E2A\u53EB\u505A <strong>moveNext()</strong> \u7684\u65B9\u6CD5\uFF0C\u90A3\u4E48\u5C31\u53EF\u4EE5\u652F\u6301\u8FD9\u79CD\u5FAA\u73AF\u7684\u8BED\u6CD5\u3002</p><h2 id="\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305" aria-hidden="true">#</a> \u95ED\u5305</h2><p>\u5728\u6CB3\u56FE\u4E2D\uFF0C\u6BCF\u4E00\u4E2A\u51FD\u6570\u5728\u6BCF\u6B21\u6267\u884C\u65F6\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u547D\u540D\u7A7A\u95F4\u3002\u540C\u65F6\u8FD9\u4E9B\u547D\u540D\u7A7A\u95F4\u53EF\u4EE5\u8BBF\u95EE\u4E0A\u5C42\u547D\u540D\u7A7A\u95F4\u3002\u8FD9\u6837\u5C31\u4F1A\u8BA9\u51FD\u6570\u95ED\u5305\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE\u548C\u4FEE\u6539\u5916\u90E8\u5B9A\u4E49\u7684\u53D8\u91CF\u3002</p><p>\u8FD9\u7C7B\u4F3C\u4E8E Javascript\uFF0C\u662F\u4E00\u79CD\u52A8\u6001\u5316\u3001\u8FD0\u884C\u65F6\u7684\u5B9E\u73B0\u65B9\u5F0F\u3002\u800C\u533A\u522B\u4E8E C++/Rust \u4E2D\u7684\u8BED\u6CD5\u610F\u4E49\u4E0A\u7684\u95ED\u5305\uFF08lexical closure\uFF09\uFF0C\u540E\u8005\u4F7F\u7528 move \u4EE5\u53CA\u6309\u503C\u4F20\u9012\u53C2\u6570\u7B49\u529F\u80FD\u5B9E\u73B0\u3002</p>`,29);function h(f,_){const p=e("ExternalLinkIcon");return t(),o(r,null,[u,s("p",null,[k,s("a",d,[m,c(p)]),b]),g],64)}var w=l(i,[["render",h]]);export{w as default};