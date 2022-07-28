import{r as c,o,c as r,b as e,e as p,w as t,F as l,f as s,d as n}from"./app.fb854eb5.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const u={},d=s('<h1 id="\u8BED\u6CD5\u6982\u8981" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5\u6982\u8981" aria-hidden="true">#</a> \u8BED\u6CD5\u6982\u8981</h1><p>\u6CB3\u56FE\u7684\u8BED\u6CD5\u7C7B\u4F3C typescript/kotlin/swift \u7B49\u73B0\u4EE3\u8BED\u8A00\uFF0C\u901A\u5E38\u53EA\u9700\u8981\u4E86\u89E3\u4E00\u4E9B\u5173\u952E\u70B9\u5373\u53EF\u76F4\u63A5\u4E0A\u624B\u4F7F\u7528\uFF1A</p><h2 id="\u58F0\u660E\u4EE5\u5173\u952E\u5B57\u5F00\u5934" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u4EE5\u5173\u952E\u5B57\u5F00\u5934" aria-hidden="true">#</a> \u58F0\u660E\u4EE5\u5173\u952E\u5B57\u5F00\u5934</h2><p>\u6CB3\u56FE\u4E2D\u6240\u6709\u7684\u58F0\u660E\u90FD\u4EE5\u5173\u952E\u5B57\u5F00\u5934\u3002\u4F8B\u5982\uFF1A</p><p><strong>var, final, const, fun, construct, get, set, class, type</strong></p><h2 id="\u5206\u53F7\u53EF\u9009" tabindex="-1"><a class="header-anchor" href="#\u5206\u53F7\u53EF\u9009" aria-hidden="true">#</a> \u5206\u53F7\u53EF\u9009</h2><p>\u6CB3\u56FE\u4E2D\u7684\u5206\u53F7\u662F\u53EF\u9009\u7684\u3002\u5927\u591A\u6570\u65F6\u5019\u7F16\u8BD1\u5668\u548C\u89E3\u91CA\u5668\u4F1A\u81EA\u52A8\u5206\u6E05\u8BED\u53E5\u7684\u95F4\u9694\u3002</p><h2 id="\u7C7B\u578B\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u6CE8\u89E3" aria-hidden="true">#</a> \u7C7B\u578B\u6CE8\u89E3</h2><p>\u7C7B\u578B\u6CE8\u89E3\u662F\u53EF\u9009\u7684\uFF0C\u4EE5\u5192\u53F7\u5F62\u5F0F\u5199\u5728\u6807\u8BC6\u7B26\u540E\u9762\u3002</p><h2 id="\u6A21\u5F0F\u5339\u914D" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5F0F\u5339\u914D" aria-hidden="true">#</a> \u6A21\u5F0F\u5339\u914D</h2>',10),m=n("\u6CB3\u56FE\u6CA1\u6709\u4F7F\u7528 switch\uFF0C\u800C\u662F\u4F7F\u7528 "),h=n("when \u8BED\u53E5"),b=n(" \u8FDB\u884C\u7B80\u5355\u7684\u6A21\u5F0F\u5339\u914D\u3002"),k=s(`<h2 id="\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u91CA" aria-hidden="true">#</a> \u6CE8\u91CA</h2><p>\u666E\u901A\u6CE8\u91CA\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// This is a comment.</span>
<span class="token comment">/* These are multi-line comments:
another line.*/</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6587\u6863\u6CE8\u91CA\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">/// This is a documentation comment</span>
fun <span class="token function">myFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> int <span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u79C1\u6709\u6807\u8BC6\u7B26" tabindex="-1"><a class="header-anchor" href="#\u79C1\u6709\u6807\u8BC6\u7B26" aria-hidden="true">#</a> \u79C1\u6709\u6807\u8BC6\u7B26</h2><p>\u4EE5 &#39;_&#39; \u5F00\u5934\u7684\u6807\u8BC6\u7B26\u4F5C\u4E3A\u79C1\u6709\u6807\u8BC6\u7B26\u3002\u53EA\u80FD\u5728\u5176\u58F0\u660E\u7684\u547D\u540D\u7A7A\u95F4\u624D\u53EF\u4EE5\u8BBF\u95EE\u3002</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> _name
  construct <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    _name <span class="token operator">=</span> name
  <span class="token punctuation">}</span>
  fun greeting <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Hi, I\\&#39;m &#39;</span></span><span class="token punctuation">,</span> _name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">final</span> p <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;jimmy&#39;</span></span><span class="token punctuation">)</span>
<span class="token comment">// print(p._name) // Error!</span>
p<span class="token punctuation">.</span><span class="token function">greeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u8868\u8FBE\u5F0F\u548C\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#\u8868\u8FBE\u5F0F\u548C\u8BED\u53E5" aria-hidden="true">#</a> \u8868\u8FBE\u5F0F\u548C\u8BED\u53E5</h2><p>\u6CB3\u56FE\u4E2D\uFF0C\u6240\u6709\u8BED\u53E5\u90FD\u662F\u8868\u8FBE\u5F0F\uFF0C\u56E0\u6B64\u4E5F\u5177\u6709\u503C\u3002</p><p>\u4F8B\u5982\u53D8\u91CF\u58F0\u660E\u548C\u53D8\u91CF\u8D4B\u503C\uFF0C\u90FD\u4F1A\u8FD4\u56DE\u53D8\u91CF\u7684\u503C\u3002\u5BF9\u4E8E\u4E0B\u9762\u7684\u4EE3\u7801</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">=</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,12),_=n("\u5982\u679C a \u7684\u503C\u53EF\u4EE5"),f=n("\u9690\u5F0F\u8F6C\u6362"),g=n("\u4E3A\u771F\uFF0C\u5219 if \u8868\u8FBE\u5F0F\u5C06\u4F1A\u6267\u884C\u3002"),v=s(`<h1 id="\u4EE3\u7801\u5757" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5757" aria-hidden="true">#</a> \u4EE3\u7801\u5757</h1><p>\u6CB3\u56FE\u4E2D\u7684\u4EE3\u7801\u5757\u4F1A\u8FD4\u56DE\u6700\u540E\u4E00\u4E2A\u8868\u8FBE\u5F0F\u7684\u503C\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>fun <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> x <span class="token operator">=</span> n <span class="token operator">*</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4E0A\u8FF0\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u5C31\u662F n * 2</p>`,4);function x(y,w){const a=c("RouterLink");return o(),r(l,null,[d,e("p",null,[m,p(a,{to:"/zh-Hans/grammar/control_flow/#when"},{default:t(()=>[h]),_:1}),b]),k,e("p",null,[_,p(a,{to:"/zh-Hans/grammar/strict_mode/#%E5%B8%83%E5%B0%94%E5%80%BC"},{default:t(()=>[f]),_:1}),g]),v],64)}var j=i(u,[["render",x]]);export{j as default};
