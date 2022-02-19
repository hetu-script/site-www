import{r as a,o as e,c as p,b as t,e as c,w as o,F as r,f as l,d as n}from"./app.9259e5f7.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const u={},k=l(`<h1 id="class" tabindex="-1"><a class="header-anchor" href="#class" aria-hidden="true">#</a> Class</h1><p>Class can have static variables and methods. Which can be accessed through the class name.</p><p>Member functions can also be declared with <strong>get</strong>, <strong>set</strong>, <strong>construct</strong>, they means getter, setter and contructor function.</p><p>If a class have a getter or setter function. You can use &#39;class_name.func_name&#39; to get or set the value hence get rid of the empty parentheses.</p><p>Constructors can be with no function name and cannot return values. When calling they will always return a instance.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// class definition</span>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="inheritance" tabindex="-1"><a class="header-anchor" href="#inheritance" aria-hidden="true">#</a> Inheritance</h2><p>Use &#39;extends&#39; to inherit other class&#39;s members.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="constructor-tear-off" tabindex="-1"><a class="header-anchor" href="#constructor-tear-off" aria-hidden="true">#</a> Constructor tear off</h2><p>Sometimes, we would like to use Class constructors in functional programming situations. However it normally doesn&#39;t work because a class name resolves into a &#39;class&#39; or &#39;type&#39; object rather than a function which is needed.</p><p>However, we can achieve this by accessing the internal name of the constructor(<strong>$construct</strong>):</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> name
  <span class="token function">construct</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

final ctor <span class="token operator">=</span> Person<span class="token punctuation">.</span>$construct
final p <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;jimmy&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wang&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;naruto&#39;</span><span class="token punctuation">]</span>
final objectList <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token function">ctor</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="namespace" tabindex="-1"><a class="header-anchor" href="#namespace" aria-hidden="true">#</a> Namespace</h2><p>It&#39;s common in Dart to define a abstract class with only static members for restricting some values or methods to a namespace.</p><p>In Hetu script, you can directly create a code block with keyword <strong>namespace</strong> to achieve this.</p><p>The namespace code block only allows for variable/class/function declaration, cannot have import statement or expresssions.</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>namespace universe <span class="token punctuation">{</span>
  var meaning <span class="token operator">=</span> <span class="token number">42</span>
<span class="token punctuation">}</span>

<span class="token function">print</span><span class="token punctuation">(</span>universe<span class="token punctuation">.</span>meaning<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,18),m=n("Refer "),b=n("Do statement"),d=n(" for another kind of code block.");function h(f,g){const s=a("RouterLink");return e(),p(r,null,[k,t("p",null,[m,c(s,{to:"/en-US/grammar/control_flow/#do"},{default:o(()=>[b]),_:1}),d])],64)}var v=i(u,[["render",h]]);export{v as default};
