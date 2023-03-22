import{_ as a,M as e,p as t,q as c,R as p,t as n,N as i,V as o,a1 as l}from"./framework-5866ffd3.js";const r={},u=l(`<h1 id="class" tabindex="-1"><a class="header-anchor" href="#class" aria-hidden="true">#</a> Class</h1><p>Class can have static variables and methods. Which can be accessed through the class name.</p><p>Member functions can also be declared with <strong>get</strong>, <strong>set</strong>, <strong>construct</strong>, they means getter, setter and contructor function.</p><p>If a class have a getter or setter function. You can use &#39;class_name.func_name&#39; to get or set the value hence get rid of the empty parentheses.</p><p>Constructors can be with no function name and cannot return values. When calling they will always return a instance.</p><p>You can use <code>this</code> syntax in the parameter to quick initialize the member on instance just like in Dart.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// class definition</span>
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

  <span class="token keyword">var</span> birthDate
  <span class="token comment">// constructor with parameters</span>
  <span class="token comment">// you can use \`this\` syntax in the parameter to</span>
  <span class="token comment">// quick initialize the member on instance</span>
  <span class="token comment">// just like in Dart</span>
  <span class="token function">construct</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token operator">:</span> num<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>y<span class="token operator">:</span> num<span class="token punctuation">,</span> age<span class="token operator">:</span> int<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// use this to access instance members shadowed by function parameters</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>birthDate <span class="token operator">=</span> <span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> age
  <span class="token punctuation">}</span>
  fun meaning <span class="token operator">-</span><span class="token operator">&gt;</span> num <span class="token punctuation">{</span>
    <span class="token comment">// when there&#39;s no shadowing, \`this\` keyword can be omitted</span>
    <span class="token keyword">return</span> x <span class="token operator">*</span> y
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="inheritance" tabindex="-1"><a class="header-anchor" href="#inheritance" aria-hidden="true">#</a> Inheritance</h2><p>Use &#39;extends&#39; to inherit other class&#39;s members.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="super" tabindex="-1"><a class="header-anchor" href="#super" aria-hidden="true">#</a> super</h2><p>Within a instance&#39;s namespace, use <strong>super</strong> to access the super class&#39;s members.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">Super3</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;Super&#39;</span></span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Extend3</span> <span class="token keyword">extends</span> <span class="token class-name">Super3</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;Extend&#39;</span></span>
  fun <span class="token function">getSuperName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span>name
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You cannot use super in static methods.</p><h2 id="type-conversion" tabindex="-1"><a class="header-anchor" href="#type-conversion" aria-hidden="true">#</a> Type conversion</h2><p>Outside a class&#39;s namespace, use <strong>as</strong> to convert a sub class to any super class it extends from.</p><p>You can then access that specific class&#39;s members.</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">Super3</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;Super&#39;</span></span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Extend3</span> <span class="token keyword">extends</span> <span class="token class-name">Super3</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;Extend&#39;</span></span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token class-name">Extend3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> a <span class="token operator">as</span> <span class="token class-name">Super3</span>
b<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;Changed&#39;</span></span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a <span class="token operator">as</span> <span class="token class-name">Super3</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// &#39;Changed&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="constructor-tear-off" tabindex="-1"><a class="header-anchor" href="#constructor-tear-off" aria-hidden="true">#</a> Constructor tear off</h2><p>Sometimes, we would like to use Class constructors in functional programming situations. However it normally doesn&#39;t work because a class name resolves into a &#39;class&#39; or &#39;type&#39; object rather than a function which is needed.</p><p>However, we can achieve this by accessing the internal name of the constructor(<strong>$construct</strong>):</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> name
  <span class="token function">construct</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

final ctor <span class="token operator">=</span> Person<span class="token punctuation">.</span>$construct
final p <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;jimmy&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wang&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;naruto&#39;</span><span class="token punctuation">]</span>
final objectList <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token function">ctor</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="namespace" tabindex="-1"><a class="header-anchor" href="#namespace" aria-hidden="true">#</a> Namespace</h2><p>It&#39;s common in Dart to define a abstract class with only static members for restricting some values or methods to a namespace.</p><p>In Hetu script, you can directly create a code block with keyword <strong>namespace</strong> to achieve this.</p><p>The namespace code block only allows for variable/class/function declaration, cannot have import statement or expresssions.</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>namespace universe {
  var meaning = 42
}

print(universe.meaning)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27);function d(k,m){const s=e("RouterLink");return t(),c("div",null,[u,p("p",null,[n("Refer "),i(s,{to:"/en-US/grammar/control_flow/#do"},{default:o(()=>[n("Do statement")]),_:1}),n(" for another kind of code block.")])])}const b=a(r,[["render",d],["__file","index.html.vue"]]);export{b as default};
