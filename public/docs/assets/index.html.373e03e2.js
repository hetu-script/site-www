import{r as p,o as t,c as o,b as n,e as r,w as c,F as l,f as s,d as a}from"./app.d9a87ace.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const u={},d=s(`<h1 id="\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a> \u53D8\u91CF</h1><p>\u53D8\u91CF\u58F0\u660E\u4EE5 <strong>var, final, late, const</strong> \u5F00\u5934\uFF0C\u7C7B\u578B\u6CE8\u89E3\u548C\u521D\u59CB\u5316\u503C\u8868\u8FBE\u5F0F\u662F\u53EF\u9009\u7684\u3002\u9664\u4E86 var \u4E4B\u5916\u7684\u58F0\u660E\uFF0C\u90FD\u65E0\u6CD5\u4FEE\u6539\u5B83\u7684\u503C\u3002</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">var</span> person
<span class="token keyword">var</span> fineStructureConstant<span class="token punctuation">:</span> num <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token number">137</span>
<span class="token keyword">final</span> isTimeTravelSuccessful<span class="token punctuation">:</span> bool <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">final</span> skill<span class="token punctuation">:</span> <span class="token class-name">List</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&#39;attack&#39;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;defense&#39;</span></span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u5E38\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5E38\u91CF" aria-hidden="true">#</a> \u5E38\u91CF</h2><p>\u5BF9\u4E8E\u6570\u5B57\u548C\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 const \u58F0\u660E\u6765\u83B7\u5F97\u4E00\u4E2A\u5E38\u91CF\u3002\u6B64\u79CD\u7C7B\u578B\u7684\u5E38\u91CF\u5C06\u4F1A\u5728\u7F16\u8BD1\u524D\u6C42\u503C\uFF0C\u56E0\u6B64\u5728\u8FD0\u884C\u65F6\u4F1A\u7A0D\u5FAE\u63D0\u9AD8\u6548\u7387\u3002</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">const</span> pi <span class="token operator">=</span> <span class="token number">3.1415926</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u652F\u6301\u8868\u8FBE\u5F0F\u7684\u8FD0\u7B97\uFF0C\u5373\u4FBF\u8868\u8FBE\u5F0F\u4E2D\u7684\u6807\u8BC6\u7B26\u4E5F\u662F\u5E38\u91CF\u3002\u8FD9\u4E2A\u529F\u80FD\u53EF\u4EE5\u5728\u6CB3\u56FE 0.4.0 \u4EE5\u4E0A\u7684\u7248\u672C\u4E2D\u901A\u8FC7\u7F16\u8BD1\u9009\u9879\u6253\u5F00\u3002</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">const</span> pi2 <span class="token operator">=</span> <span class="token number">3.1415926</span> <span class="token operator">*</span> <span class="token number">2</span> <span class="token comment">// error!</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u5EF6\u8FDF\u8D4B\u503C" tabindex="-1"><a class="header-anchor" href="#\u5EF6\u8FDF\u8D4B\u503C" aria-hidden="true">#</a> \u5EF6\u8FDF\u8D4B\u503C</h2><p>\u5BF9\u4E8E var \u548C final\uFF0C\u5728\u6CA1\u6709\u521D\u59CB\u5316\u65F6\u76F4\u63A5\u4F7F\u7528\u8FD9\u4E2A\u6807\u8BC6\u7B26\uFF0C\u5C06\u4F1A\u5F97\u5230 null \u503C\u3002</p><p>\u4F60\u53EF\u4EE5\u4F7F\u7528 late \u6765\u7981\u6B62\u8BBF\u95EE\u4E00\u4E2A\u672A\u521D\u59CB\u5316\u7684\u5E38\u91CF\u3002</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>late a
<span class="token comment">// print(a) // Error: [a] is not initialized yet.</span>
a <span class="token operator">=</span> <span class="token number">42</span>
<span class="token function">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
a <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;dragon&#39;</span></span> <span class="token comment">// Error: [a] is immutable.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u53D8\u91CF\u540D\u8986\u76D6" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u540D\u8986\u76D6" aria-hidden="true">#</a> \u53D8\u91CF\u540D\u8986\u76D6</h2><p>\u4F60\u53EF\u4EE5\u5728\u540C\u4E00\u4E2A\u51FD\u6570\u7684\u547D\u540D\u7A7A\u95F4\u4E2D\u58F0\u660E\u4E00\u4E2A\u76F8\u540C\u540D\u5B57\u7684\u53D8\u91CF\uFF0C\u6765\u8986\u76D6\u4E4B\u524D\u7684\u58F0\u660E\u3002</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">42</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;yay!&#39;</span></span> <span class="token comment">/// not an error, this is another variable</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664" aria-hidden="true">#</a> \u5220\u9664</h2><p>\u4F60\u53EF\u4EE5\u901A\u8FC7 delete \u5173\u952E\u5B57\u6765\u5220\u9664\u4E00\u4E2A\u53D8\u91CF\u58F0\u660E\u3002</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">42</span>
delete a
<span class="token function">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// error: a is undefined!</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4F46\u4F60\u4E0D\u80FD\u5220\u9664\u4E00\u4E2A class \u4E0A\u7684\u6210\u5458\u3002</p><h2 id="\u89E3\u6784\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6784\u58F0\u660E" aria-hidden="true">#</a> \u89E3\u6784\u58F0\u660E</h2><p>\u5728\u6CB3\u56FE\u4E2D\uFF0C\u4E3A\u4E86\u8868\u8FBE\u6E05\u6670\u7684\u76EE\u7684\uFF0C<strong>\u4F60\u4E0D\u80FD\u50CF C++/Java \u90A3\u6837\u5728\u4E00\u4E2A\u58F0\u660E\u4E2D\u5199\u591A\u4E2A\u6807\u8BC6\u7B26</strong>\u3002</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">var</span> a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token comment">// error</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4F46\u4F60\u53EF\u4EE5\u4F7F\u7528\u7C7B\u4F3C Javascript/Kotlin \u7684\u7ED3\u6784\u58F0\u660E\u3002\u8FD9\u79CD\u58F0\u660E\u5FC5\u987B\u63D0\u4F9B\u4E00\u4E2A Iterable \u6216\u8005\u4E00\u4E2A struct/Map \u4F5C\u4E3A\u521D\u59CB\u5316\u503C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// a = 1, b = 2, c = 3</span>
<span class="token keyword">var</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">7</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// x = 6, y = 7</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,24),k=a("\u89E3\u6784\u58F0\u660E\u4E0D\u53EF\u4EE5"),m=a("\u5EF6\u8FDF\u521D\u59CB\u5316"),b=a("\uFF0C\u56E0\u6B64\u53EA\u80FD\u5728\u51FD\u6570\u4F53\u6216\u8005 "),v=n("strong",null,"ResourceType.hetuScript",-1),h=a(" \u7C7B\u578B\u7684\u4EE3\u7801\u6587\u4EF6\u4E2D\u4F7F\u7528\u3002"),g=s(`<h3 id="\u7ED3\u6784\u58F0\u660E\u65F6\u5FFD\u7565\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u58F0\u660E\u65F6\u5FFD\u7565\u4F4D\u7F6E" aria-hidden="true">#</a> \u7ED3\u6784\u58F0\u660E\u65F6\u5FFD\u7565\u4F4D\u7F6E</h3><p>\u5F53\u4F60\u89E3\u6784\u58F0\u660E\u7684\u503C\u6765\u81EA\u6570\u7EC4\u65F6\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 &#39;_&#39; \u5173\u952E\u5B57\uFF0C\u5FFD\u7565\u67D0\u4E2A\u4F4D\u7F6E\u7684\u53D8\u91CF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token punctuation">[</span>_<span class="token punctuation">,</span> _<span class="token punctuation">,</span> z<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// z = 3</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,3);function _(f,x){const e=p("RouterLink");return t(),o(l,null,[d,n("p",null,[k,r(e,{to:"/zh-Hans/guide/implementation_detail/#%E5%BB%B6%E8%BF%9F%E5%88%9D%E5%A7%8B%E5%8C%96"},{default:c(()=>[m]),_:1}),b,v,h]),g],64)}var B=i(u,[["render",_]]);export{B as default};
