import{r as a,o as e,c as t,b as i,e as p,w as r,F as l,f as o,d as n}from"./app.ae9b149f.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const u={},d=o(`<h1 id="builtin-types-and-classes" tabindex="-1"><a class="header-anchor" href="#builtin-types-and-classes" aria-hidden="true">#</a> Builtin types and classes</h1><p>Most of the common primitive types in Hetu is in fact Dart values, you can use most of their apis directly and return them to Dart as it is.</p><ul><li>null</li><li>bool</li><li>num</li><li>int</li><li>double</li><li>String</li><li>List&lt;dynamic&gt;</li><li>Set&lt;dynamic&gt;</li><li>Map&lt;dynamic, dynamic&gt;</li><li>Function (the Dart function object)</li></ul><p>Note:</p><p>1, The type name for float numbers in Hetu is &#39;float&#39;.</p><p>2, There&#39;s no literal syntax for Set &amp; Map, you have to create them by using constructors.</p><p>3, All List\\Set\\Map created from the script side is of dynamic types.</p><h2 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> String</h2><p>The type name for String in Hetu is &#39;str&#39;.</p><h3 id="interpolation" tabindex="-1"><a class="header-anchor" href="#interpolation" aria-hidden="true">#</a> Interpolation</h3><p>String literal can have interpolation the same to Javascript, you can use any expression within &#39;\${}&#39;:</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;dragon&#39;</span></span>
<span class="token comment">// print: To kill the dragon, you have to wait 42 years.</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;To kill the </span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">a</span><span class="token punctuation">}</span></span><span class="token string">, you have to wait </span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token number">6</span><span class="token operator">*</span><span class="token number">7</span></span><span class="token punctuation">}</span></span><span class="token string"> years.&#39;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Note it&#39;s different to Dart that you have to write a curly brackets even if you have only one identifier.</p><h3 id="multiline" tabindex="-1"><a class="header-anchor" href="#multiline" aria-hidden="true">#</a> Multiline</h3><p>After version 0.4.0, string literal in Hetu support multiline, and you can use the same syntax.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;PPP&#39;</span></span>
<span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;MMM&#39;</span></span>
<span class="token keyword">final</span> s <span class="token operator">=</span> &#39;

$<span class="token punctuation">{</span>
  p
  <span class="token operator">+</span>
  m
<span class="token punctuation">}</span>&#39;
<span class="token function">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span>&#39;a
multiline
string
&#39;<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="big-integers" tabindex="-1"><a class="header-anchor" href="#big-integers" aria-hidden="true">#</a> Big integers</h2><p>To manipulate bigger numbers, you can use preincluded class BigInt.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">final</span> bi <span class="token operator">=</span> <span class="token class-name">BigInt</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;9223372036854775807&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="future" tabindex="-1"><a class="header-anchor" href="#future" aria-hidden="true">#</a> Future</h2>`,20),m=n("Check "),h=n("this page"),b=n(".");function k(g,f){const s=a("RouterLink");return e(),t(l,null,[d,i("p",null,[m,p(s,{to:"/en-US/grammar/future/"},{default:r(()=>[h]),_:1}),b])],64)}var _=c(u,[["render",k]]);export{_ as default};
