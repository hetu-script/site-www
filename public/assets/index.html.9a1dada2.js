import{d as n}from"./app.10f2113a.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="class" tabindex="-1"><a class="header-anchor" href="#class" aria-hidden="true">#</a> Class</h1><p>Class can have static variables and methods. Which can be accessed through the class name.</p><p>Class&#39;s member functions use special keyword: <strong>construct, get, set</strong>, to define a constructor, getter, setter function.</p><p>Constructors can be with no function name and cannot return values. When calling they will always return a instance.</p><p>Getter &amp; setter functions is used like a member variable. They can be accessed without brackets.</p><p>Use &#39;extends&#39; to inherit other class&#39;s members</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// class definition</span>
<span class="token keyword">class</span> <span class="token class-name">Calculator</span> <span class="token punctuation">{</span>
  <span class="token comment">// instance member</span>
  <span class="token keyword">var</span> x<span class="token operator">:</span> num
  <span class="token keyword">var</span> y<span class="token operator">:</span> num
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
  <span class="token comment">// constructor with parameters</span>
  <span class="token function">construct</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> num<span class="token punctuation">,</span> y<span class="token operator">:</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// use this to access instance members with same names</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x
    <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y
  <span class="token punctuation">}</span>
  <span class="token comment">// method with return type</span>
  <span class="token class-name">fun</span> meaning <span class="token operator">-</span><span class="token operator">&gt;</span> num <span class="token punctuation">{</span>
    <span class="token comment">// when there&#39;s no shadowing, \`this\` keyword can be omitted</span>
    <span class="token keyword">return</span> x <span class="token operator">*</span> y
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="constructor-tear-off" tabindex="-1"><a class="header-anchor" href="#constructor-tear-off" aria-hidden="true">#</a> Constructor tear off</h2><p>Sometimes, we would like to use Class constructors in functional programming situations. However it normally doesn&#39;t work because if you directly pass a class name into a place where a function is needed, you won&#39;t get what you want: to call this class&#39;s name as a function and get a instance as its result.</p><p>However, we can achieve this by accessing the internal name of the constructor(<strong>$construct</strong>):</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> name
  <span class="token function">construct</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

final ctor <span class="token operator">=</span> Person<span class="token punctuation">.</span>$construct
final p <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;jimmy&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wang&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;naruto&#39;</span><span class="token punctuation">]</span>
final objectList <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token function">ctor</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,11);function t(p,c){return e}var l=s(a,[["render",t]]);export{l as default};
