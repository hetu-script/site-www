import{f as n}from"./app.d9a87ace.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u6D41\u7A0B\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u6D41\u7A0B\u63A7\u5236" aria-hidden="true">#</a> \u6D41\u7A0B\u63A7\u5236</h1><p>\u6CB3\u56FE\u4E2D\u5305\u542B\u5927\u591A\u6570\u5E38\u89C1\u7684\u6D41\u7A0B\u63A7\u5236\u8BED\u53E5\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\u6CB3\u56FE\u7528 when \u53D6\u4EE3\u4E86 switch\u3002</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code>fun main <span class="token punctuation">{</span>
  <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">++</span>i
    when <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token number">0</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;even:&#39;</span></span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
      <span class="token number">1</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;odd:&#39;</span></span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
      <span class="token keyword">else</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;never going to happen.&#39;</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="\u6761\u4EF6\u5224\u65AD\u8BED\u53E5-if" tabindex="-1"><a class="header-anchor" href="#\u6761\u4EF6\u5224\u65AD\u8BED\u53E5-if" aria-hidden="true">#</a> \u6761\u4EF6\u5224\u65AD\u8BED\u53E5\uFF08if\uFF09</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>if</strong> \u8BED\u53E5\u7684\u5206\u652F\u53EF\u4EE5\u662F\u4E00\u4E2A\u8868\u8FBE\u5F0F\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A &#39;{}&#39; \u8BED\u53E5\u5757\u3002</p><p><strong>if</strong> \u8BED\u53E5\u672C\u8EAB\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4F5C\u4E3A\u4E00\u4E2A\u8868\u8FBE\u5F0F\u4F7F\u7528\uFF0C\u7B49\u540C\u4E8E\u4E09\u76EE\u8868\u8FBE\u5F0F\u3002\u6B64\u65F6\u4E0D\u80FD\u5FFD\u7565 else \u5206\u652F\u3002</p><h2 id="\u5FAA\u73AF\u8BED\u53E5-while-do-for" tabindex="-1"><a class="header-anchor" href="#\u5FAA\u73AF\u8BED\u53E5-while-do-for" aria-hidden="true">#</a> \u5FAA\u73AF\u8BED\u53E5\uFF08while, do, for\uFF09</h2><h3 id="while" tabindex="-1"><a class="header-anchor" href="#while" aria-hidden="true">#</a> while</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">while</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="do" tabindex="-1"><a class="header-anchor" href="#do" aria-hidden="true">#</a> do</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">do</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>do \u5FAA\u73AF\u7684 while \u8BED\u53E5\u53EF\u4EE5\u7701\u7565\uFF0C\u6B64\u65F6\u8FD9\u4E2A\u8BED\u53E5\u5757\u7C7B\u4F3C\u4E8E\u4E00\u4E2A\u7ACB\u5373\u6267\u884C\u7684\u533F\u540D\u51FD\u6570\u3002</p><h3 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> for</h3><p>C++ \u7684\u4F20\u7EDF\u4E09\u6BB5\u5F0F for\uFF0C\u4EE5 &#39;;&#39; \u5206\u9694\uFF0C\u5E76\u4E14\u6BCF\u4E2A\u8868\u8FBE\u5F0F\u90FD\u53EF\u4EE5\u7701\u7565\u3002&#39;for ( ; ; )&#39; \u7B49\u540C\u4E8E &#39;while (true)&#39;\u3002</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">for</span> <span class="token punctuation">(</span>init<span class="token punctuation">;</span> condition<span class="token punctuation">;</span> increment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token keyword">in</span><span class="token punctuation">,</span> \u904D\u5386\u67E5\u8BE2\u67D0\u4E2A <span class="token class-name">Iterable</span> \u7684\u6210\u5458\u3002

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> item <span class="token keyword">in</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>of<span class="token punctuation">,</span> \u904D\u5386\u67E5\u8BE2\u67D0\u4E2A struct<span class="token operator">/</span><span class="token class-name">Map</span> \u7684 values\u3002

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> item of obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="when" tabindex="-1"><a class="header-anchor" href="#when" aria-hidden="true">#</a> when</h2><p>when \u662F\u7528\u6765\u53D6\u4EE3 switch \u7684\u5173\u952E\u5B57\uFF0C\u8FD9\u4E2A\u8BED\u6CD5\u4E3B\u8981\u53C2\u8003\u81EA kotlin\u3002</p><p>when \u5173\u952E\u5B57\u4E4B\u540E\uFF0C\u53EF\u4EE5\u8DDF\u968F\u4E00\u4E2A\u53EF\u9009\u7684\u5706\u62EC\u53F7\u5185\u7684 condition \u8868\u8FBE\u5F0F\u3002</p><p>\u5982\u679C\u63D0\u4F9B\u4E86\u8FD9\u4E2A\u8868\u8FBE\u5F0F\uFF0C\u5219\u4F1A\u5C06\u8FD9\u4E2A\u8868\u8FBE\u5F0F\u7684\u503C\u548C\u5404\u4E2A\u5206\u652F\u7684\u503C\u8FDB\u884C\u5339\u914D\u3002\u5E76\u4E14\u8DF3\u8F6C\u5230\u7B2C\u4E00\u4E2A\u5339\u914D\u7684\u5206\u652F\u3002</p><p>\u6BCF\u4E2A\u5206\u652F\u7684\u8BED\u53E5\uFF0C\u53EF\u4EE5\u53EA\u662F\u4E00\u4E2A\u5355\u72EC\u7684\u8868\u8FBE\u5F0F\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A &#39;{}&#39; \u8BED\u53E5\u5757\u3002</p><p><strong>else</strong> \u662F\u4E00\u4E2A\u53EF\u9009\u7684\u7279\u6B8A\u7684\u5206\u652F\uFF0C\u5F53\u5176\u4ED6\u6240\u6709\u5206\u652F\u90FD\u5339\u914D\u5931\u8D25\uFF0C\u5E76\u4E14\u63D0\u4F9B\u4E86 else \u5206\u652F\u65F6\uFF0C\u5C06\u4F1A\u8FDB\u5165 else \u5206\u652F\u3002</p><p>\u4F7F\u7528\u9017\u53F7\u8868\u8FBE\u5F0F\u6765\u5339\u914D\u591A\u4E2A\u53EF\u80FD\u7684\u503C\u3002</p><p>\u4F7F\u7528 in \u8868\u8FBE\u5F0F\u6765\u5339\u914D\u4E00\u4E2A Iterable \u4E2D\u7684\u503C\uFF1B\u4F7F\u7528 of \u8868\u8FBE\u5F0F\u6765\u5339\u914D\u4E00\u4E2A struct/Map \u7684 values \u4E2D\u7684\u503C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span>final i <span class="token keyword">in</span> <span class="token function">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">when</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token number">0</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;number: 0&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;prime: \${i}&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;square: \${i}&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;other: \${i}&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,25);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
