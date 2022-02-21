import{r as e,o as t,c,b as s,e as o,F as l,f as a,d as n}from"./app.daf41253.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=a(`<h1 id="\u7C7B-class" tabindex="-1"><a class="header-anchor" href="#\u7C7B-class" aria-hidden="true">#</a> \u7C7B\uFF08class\uFF09</h1><p>\u6CB3\u56FE\u4E2D\u7684\u7C7B\u662F\u7C7B\u4F3C C++/Java/Dart \u4E2D\u7684 class \u7684\u4E00\u79CD\u540D\u4E49\u7C7B\u578B\uFF08nominal type\uFF09\u3002\u652F\u6301\u5927\u591A\u6570 Dart \u4E2D\u7684 class \u7684\u529F\u80FD\uFF0C\u4F8B\u5982\u6784\u9020\u51FD\u6570\uFF0C\u5C5E\u6027\uFF08get/set\uFF09\uFF0C\u7EE7\u627F\uFF08extends\uFF09\u7B49\u3002\u4F46 mixin \u548C implements \u7528\u6CD5\u6682\u65F6\u4E0D\u652F\u6301\u3002</p><p>\u7C7B\u4E2D\u7684\u65B9\u6CD5\u58F0\u660E\u4F7F\u7528\u4E13\u95E8\u7684\u5173\u952E\u5B57\uFF1Aconstruct/get/set/factory \u7B49\u7B49\u3002</p><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u5B8C\u6574\u7684\u4F8B\u5B50\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// class definition</span>
<span class="token keyword">class</span> <span class="token class-name">Calculator</span> <span class="token punctuation">{</span>
  <span class="token comment">// static private member</span>
  <span class="token keyword">static</span> <span class="token keyword">var</span> _name <span class="token operator">=</span> <span class="token string">&#39;the calculator&#39;</span>
  <span class="token comment">// static get function</span>
  <span class="token keyword">static</span> <span class="token keyword">get</span> name <span class="token operator">-</span><span class="token operator">&gt;</span> str <span class="token punctuation">{</span>
    <span class="token keyword">return</span> _name
  <span class="token punctuation">}</span>
  <span class="token comment">// static set function</span>
  <span class="token keyword">static</span> <span class="token keyword">set</span> <span class="token function">name</span><span class="token punctuation">(</span>new_name<span class="token operator">:</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    _name <span class="token operator">=</span> new_name
  <span class="token punctuation">}</span>
  <span class="token comment">// static function</span>
  <span class="token keyword">static</span> fun greeting <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello! I\\&#39;m &#39;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// instance member</span>
  <span class="token keyword">var</span> x<span class="token operator">:</span> num
  <span class="token keyword">var</span> y<span class="token operator">:</span> num
  <span class="token comment">// constructor with parameters</span>
  <span class="token function">construct</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> num<span class="token punctuation">,</span> y<span class="token operator">:</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// use this to access instance members shadowed by function parameters</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x
    <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y
  <span class="token punctuation">}</span>
  fun meaning <span class="token operator">-</span><span class="token operator">&gt;</span> num <span class="token punctuation">{</span>
    <span class="token comment">// when there&#39;s no shadowing, \`this\` keyword can be omitted</span>
    <span class="token keyword">return</span> x <span class="token operator">*</span> y
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u7EE7\u627F" aria-hidden="true">#</a> \u7EE7\u627F</h2><p>\u6CB3\u56FE\u4E2D\u7C7B\u7684\u7EE7\u627F\u4F7F\u7528 <strong>extends</strong> \u5173\u952E\u5B57\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  fun walk <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;animal walking&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> kind

  <span class="token function">construct</span> <span class="token punctuation">(</span>kind<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>kind <span class="token operator">=</span> kind
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Bird</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  fun animalWalk <span class="token punctuation">{</span>
    <span class="token comment">// You can access a overrided member in super class by the super keyword within a method body.</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">walk</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// override super class&#39;s member</span>
  fun walk <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;bird walking&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  fun fly <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;bird flying&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// You can use super class&#39;s constructor by the super keyword after a constructor declaration.</span>
  construct _<span class="token operator">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token string">&#39;bird&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">// factory is a special kind of contructor that returns values.</span>
  <span class="token comment">// factory are static and cannot directly access instance members and constructors.</span>
  factory <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Bird<span class="token punctuation">.</span><span class="token function">_</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="\u51FD\u6570\u5F0F\u7684\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u5F0F\u7684\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570\u5F0F\u7684\u6784\u9020\u51FD\u6570</h2>`,9),k=n("\u67D0\u4E9B\u65F6\u5019\u6211\u4EEC\u60F3\u8981\u5728\u67D0\u4E9B\u51FD\u6570\u5F0F\u7F16\u7A0B\u7684\u573A\u666F\u4F7F\u7528\u6784\u9020\u51FD\u6570\uFF0C\u4F8B\u5982\u6211\u4EEC\u60F3\u8981\u5411\u6570\u7EC4\u7684 map \u65B9\u6CD5\u4F20\u5165\u4E00\u4E2A\u6784\u9020\u51FD\u6570\u3002\u901A\u5E38\u60C5\u51B5\u4E0B\u8FD9\u4E0D\u53EF\u884C\u3002\u56E0\u4E3A\u76F4\u63A5\u4F20\u9012\u7C7B\u540D\uFF0C\u5F97\u5230\u7684\u662F\u4E00\u4E2A\u7C7B\u578B\uFF0C\u800C\u4E0D\u662F\u6784\u9020\u51FD\u6570\u672C\u8EAB\u3002\u8981\u5B9E\u73B0\u8FD9\u4E00\u70B9\uFF0C\u5728 Dart \u4E2D\u4F7F\u7528\u7684\u662F "),m={href:"https://medium.com/dartlang/dart-2-15-7e7a598e508a#9c16",target:"_blank",rel:"noopener noreferrer"},b=n("constructor tear-off"),d=n(" \u7684\u65B9\u6CD5\u3002"),h=a(`<p>\u5728\u6CB3\u56FE\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5185\u90E8\u5173\u952E\u5B57 <strong>$construct</strong> \u5B9E\u73B0\u76F8\u540C\u7684\u7528\u6CD5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> name
  <span class="token function">construct</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

final ctor <span class="token operator">=</span> Person<span class="token punctuation">.</span>$construct
final p <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;jimmy&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wang&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;naruto&#39;</span><span class="token punctuation">]</span>
final objectList <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token function">ctor</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u547D\u540D\u7A7A\u95F4" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u7A7A\u95F4" aria-hidden="true">#</a> \u547D\u540D\u7A7A\u95F4</h2><p>\u5728 Java/Dart \u4E2D\uFF0C\u7ECF\u5E38\u4F1A\u521B\u5EFA\u4E00\u4E2A\u53EA\u5305\u542B\u9759\u6001\u6210\u5458\u7684\u62BD\u8C61\u7C7B\uFF0C\u6765\u5C06\u4E00\u4E9B\u51FD\u6570\u6216\u8005\u5E38\u91CF\u9650\u5236\u5230\u4E00\u4E2A\u547D\u540D\u7A7A\u95F4\u4E2D\u3002</p><p>\u5728\u6CB3\u56FE\u4E2D\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u547D\u540D\u7A7A\u95F4\u58F0\u660E\uFF08namespace\uFF09\u5B9E\u73B0\u76F8\u540C\u7684\u7528\u6CD5\uFF1A</p><p>\u547D\u540D\u7A7A\u95F4\u58F0\u660E\u7684\u8BED\u53E5\u5757\u53EA\u80FD\u5305\u542B\u53D8\u91CF/\u7C7B/\u51FD\u6570\u58F0\u660E\uFF0C\u4E0D\u80FD\u5305\u542B\u5BFC\u5165\u5BFC\u51FA\u8BED\u53E5\uFF0C\u4EE5\u53CA\u8868\u8FBE\u5F0F\u8BED\u53E5\u3002</p><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>namespace universe <span class="token punctuation">{</span>
  var meaning <span class="token operator">=</span> <span class="token number">42</span>
<span class="token punctuation">}</span>

<span class="token function">print</span><span class="token punctuation">(</span>universe<span class="token punctuation">.</span>meaning<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,8);function f(y,g){const p=e("ExternalLinkIcon");return t(),c(l,null,[i,s("p",null,[k,s("a",m,[b,o(p)]),d]),h],64)}var _=r(u,[["render",f]]);export{_ as default};
