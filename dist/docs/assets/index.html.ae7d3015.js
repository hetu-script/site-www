import{r as t,o as s,c as n,b as i,e as r,w as o,F as l,f as c,d as e}from"./app.9259e5f7.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const u={},d=c(`<h1 id="builtin-types-and-classes" tabindex="-1"><a class="header-anchor" href="#builtin-types-and-classes" aria-hidden="true">#</a> Builtin types and classes</h1><p>Most of the common primitive types in Hetu is in fact Dart values, you can use most of their apis directly and return them to Dart as it is.</p><ul><li>null</li><li>bool</li><li>num</li><li>int</li><li>double</li><li>String</li><li>List&lt;dynamic&gt;</li><li>Set&lt;dynamic&gt;</li><li>Map&lt;dynamic, dynamic&gt;</li><li>Function (the Dart function object)</li></ul><p>Note:</p><p>1, The type name for float numbers in Hetu is &#39;float&#39;.</p><p>2, There&#39;s no literal syntax for Set &amp; Map, you have to create them by using constructors.</p><p>3, All List\\Set\\Map created from the script side is of dynamic types.</p><h2 id="big-integers" tabindex="-1"><a class="header-anchor" href="#big-integers" aria-hidden="true">#</a> Big integers</h2><p>To manipulate bigger numbers, you can use preincluded class BigInt.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">final</span> bi <span class="token operator">=</span> <span class="token class-name">BigInt</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;9223372036854775807&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="future" tabindex="-1"><a class="header-anchor" href="#future" aria-hidden="true">#</a> Future</h2>`,11),h=e("Check "),m=e("this page"),f=e(".");function g(_,b){const a=t("RouterLink");return s(),n(l,null,[d,i("p",null,[h,r(a,{to:"/en-US/grammar/future/"},{default:o(()=>[m]),_:1}),f])],64)}var x=p(u,[["render",g]]);export{x as default};