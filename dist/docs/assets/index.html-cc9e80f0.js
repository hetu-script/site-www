import{_ as a,p as s,q as n,a1 as e}from"./framework-3f81730e.js";const t={},r=e(`<h1 id="错误和异常的处理" tabindex="-1"><a class="header-anchor" href="#错误和异常的处理" aria-hidden="true">#</a> 错误和异常的处理</h1><p>目前不能在脚本中处理异常，建议在 Dart 代码中进行处理。但你可以在脚本中手动抛出一个异常。</p><h2 id="assert" tabindex="-1"><a class="header-anchor" href="#assert" aria-hidden="true">#</a> assert</h2><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">assert</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>assert 语句，当括号中的表达式值为 false 时，将会抛出异常。</p><p>无论是否在严格模式下，表达式的值都必须是 boolean 类型。</p><p>括号中的代码的文本将会被记录在字节码中，在抛出时会显示，用来了解抛出异常的原因。</p><h2 id="throw" tabindex="-1"><a class="header-anchor" href="#throw" aria-hidden="true">#</a> throw</h2><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">42</span>
<span class="token keyword">throw</span> <span class="token string-literal"><span class="token string">&#39;i is </span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">i</span><span class="token punctuation">}</span></span><span class="token string">!&#39;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>throw 语句用来抛出一个对象，典型用法是抛出一个字符串。如果是非字符串对象，将会使用 Dart 对象的 toString() 方法来转换为字符串。</p><p>throw 语句后必须显示提供一个表达式，但这个表达式的值可以是 null。</p>`,11),o=[r];function p(i,d){return s(),n("div",null,o)}const l=a(t,[["render",p],["__file","D:/_dev/hetu-script/docs/docs/.vuepress/.temp/pages/zh-Hans/grammar/error/index.html.vue"]]);export{l as default};
