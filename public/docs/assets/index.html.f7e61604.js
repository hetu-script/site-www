import{r as s,o as e,c as t,b as i,e as o,w as r,F as p,f as l,d as a}from"./app.daf41253.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const u={},d=l(`<h1 id="builtin-types-and-classes" tabindex="-1"><a class="header-anchor" href="#builtin-types-and-classes" aria-hidden="true">#</a> Builtin types and classes</h1><p>Most of the common primitive types in Hetu is in fact Dart values, you can use most of their apis directly and return them to Dart as it is.</p><ul><li>null</li><li>bool</li><li>num</li><li>int</li><li>double</li><li>String</li><li>List&lt;dynamic&gt;</li><li>Set&lt;dynamic&gt;</li><li>Map&lt;dynamic, dynamic&gt;</li><li>Function (the Dart function object)</li></ul><p>Note:</p><p>1, The type name for float numbers in Hetu is &#39;float&#39;.</p><p>2, There&#39;s no literal syntax for Set &amp; Map, you have to create them by using constructors.</p><p>3, All List\\Set\\Map created from the script side is of dynamic types.</p><h2 id="string-interpolation" tabindex="-1"><a class="header-anchor" href="#string-interpolation" aria-hidden="true">#</a> String interpolation</h2><p>String literal can have interpolation the same to Javascript, you can use any expression within &#39;\${}&#39;:</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;dragon&#39;</span></span>
<span class="token comment">// print: To kill the dragon, you have to wait 42 years.</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;To kill the </span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">a</span><span class="token punctuation">}</span></span><span class="token string">, you have to wait </span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression"><span class="token number">6</span><span class="token operator">*</span><span class="token number">7</span></span><span class="token punctuation">}</span></span><span class="token string"> years.&#39;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Note it&#39;s different to Dart that you have to write a curly brackets even if you have only one identifier.</p><h2 id="big-integers" tabindex="-1"><a class="header-anchor" href="#big-integers" aria-hidden="true">#</a> Big integers</h2><p>To manipulate bigger numbers, you can use preincluded class BigInt.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">final</span> bi <span class="token operator">=</span> <span class="token class-name">BigInt</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;9223372036854775807&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="future" tabindex="-1"><a class="header-anchor" href="#future" aria-hidden="true">#</a> Future</h2>`,15),h=a("Check "),m=a("this page"),k=a(".");function g(f,b){const n=s("RouterLink");return e(),t(p,null,[d,i("p",null,[h,o(n,{to:"/en-US/grammar/future/"},{default:r(()=>[m]),_:1}),k])],64)}var _=c(u,[["render",g]]);export{_ as default};
