import{_ as t,M as p,p as c,q as i,R as s,t as n,N as o,a1 as a}from"./framework-5866ffd3.js";const l={},r=a(`<h1 id="类-class" tabindex="-1"><a class="header-anchor" href="#类-class" aria-hidden="true">#</a> 类（class）</h1><p>河图中的类是类似 C++/Java/Dart 中的 class 的一种名义类型（nominal type）。支持大多数 Dart 中的 class 的功能，例如构造函数，属性（get/set），继承（extends），以及在构造函数声明中重定向到其他构造函数或者父类构造函数（通过 this 和 super），以及在构造函数的参数列表中使用 <code>this</code> 来快速初始化实例成员。</p><p>但 mixin 和 implements 用法暂时不支持。</p><p>类中的方法声明使用专门的关键字：construct/get/set/factory 等等。</p><p>下面是一个完整的例子：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// class definition</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h2><p>河图中类的继承使用 <strong>extends</strong> 关键字：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="super" tabindex="-1"><a class="header-anchor" href="#super" aria-hidden="true">#</a> super</h2><p>在类的成员函数中可以使用 <strong>super</strong> 访问父类的成员</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">Super3</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;Super&#39;</span></span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Extend3</span> <span class="token keyword">extends</span> <span class="token class-name">Super3</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;Extend&#39;</span></span>
  fun <span class="token function">getSuperName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span>name
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型转换" tabindex="-1"><a class="header-anchor" href="#类型转换" aria-hidden="true">#</a> 类型转换</h2><p>使用 <strong>as</strong> 关键字可以将一个子类转换为任意一个父类，使用这种方式可以在类本身的命名空间之外访问父类成员，同时也可以访问到多个继承关系之上的某个类的成员。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">Super3</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;Super&#39;</span></span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Extend3</span> <span class="token keyword">extends</span> <span class="token class-name">Super3</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;Extend&#39;</span></span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token class-name">Extend3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> a <span class="token operator">as</span> <span class="token class-name">Super3</span>
b<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;Changed&#39;</span></span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a <span class="token operator">as</span> <span class="token class-name">Super3</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// &#39;Changed&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数式的构造函数" tabindex="-1"><a class="header-anchor" href="#函数式的构造函数" aria-hidden="true">#</a> 函数式的构造函数</h2>`,16),u={href:"https://medium.com/dartlang/dart-2-15-7e7a598e508a#9c16",target:"_blank",rel:"noopener noreferrer"},d=a(`<p>在河图中，可以通过内部关键字 <strong>$construct</strong> 实现相同的用法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> name
  <span class="token function">construct</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

final ctor <span class="token operator">=</span> Person<span class="token punctuation">.</span>$construct
final p <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;jimmy&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wang&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;naruto&#39;</span><span class="token punctuation">]</span>
final objectList <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token function">ctor</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命名空间" tabindex="-1"><a class="header-anchor" href="#命名空间" aria-hidden="true">#</a> 命名空间</h2><p>在 Java/Dart 中，经常会创建一个只包含静态成员的抽象类，来将一些函数或者常量限制到一个命名空间中。</p><p>在河图中，可以直接使用命名空间声明（namespace）实现相同的用法：</p><p>命名空间声明的语句块只能包含变量/类/函数声明，不能包含导入导出语句，以及表达式语句。</p><p>下面是一个例子：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>namespace universe {
  var meaning = 42
}

print(universe.meaning)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function k(v,m){const e=p("ExternalLinkIcon");return c(),i("div",null,[r,s("p",null,[n("某些时候我们想要在某些函数式编程的场景使用构造函数，例如我们想要向数组的 map 方法传入一个构造函数。通常情况下这不可行。因为直接传递类名，得到的是一个类型，而不是构造函数本身。要实现这一点，在 Dart 中使用的是 "),s("a",u,[n("constructor tear-off"),o(e)]),n(" 的方法。")]),d])}const h=t(l,[["render",k],["__file","index.html.vue"]]);export{h as default};
