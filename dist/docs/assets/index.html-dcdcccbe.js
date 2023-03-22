<<<<<<< HEAD:dist/docs/assets/index.html-dcdcccbe.js
import{_ as n,p as s,q as a,a1 as t}from"./framework-5866ffd3.js";const e={},p=t(`<h1 id="api-for-use-in-hetu-script" tabindex="-1"><a class="header-anchor" href="#api-for-use-in-hetu-script" aria-hidden="true">#</a> API for use in Hetu script</h1><p>Most of the preincluded values&#39; apis are kept the same name as the Dart SDK: <strong>num</strong>, <strong>int</strong>, <strong>double</strong>, <strong>bool</strong>, <strong>String</strong>, <strong>List</strong>, <strong>Set</strong> and <strong>Map</strong></p><p>And most of the common apis from Dart are already binded in the script.</p><p>For instance, we can use the map api just like in Dart on an Iterable:</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">final</span> result <span class="token operator">=</span> <span class="token function">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string-literal"><span class="token string">&#39;row: </span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">value</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
=======
import{_ as n,p as s,q as a,a1 as t}from"./framework-3f81730e.js";const e={},p=t(`<h1 id="api-for-use-in-hetu-script" tabindex="-1"><a class="header-anchor" href="#api-for-use-in-hetu-script" aria-hidden="true">#</a> API for use in Hetu script</h1><p>Most of the preincluded values&#39; apis are kept the same name as the Dart SDK: <strong>num</strong>, <strong>int</strong>, <strong>double</strong>, <strong>bool</strong>, <strong>String</strong>, <strong>List</strong>, <strong>Set</strong> and <strong>Map</strong></p><p>And most of the common apis from Dart are already binded in the script.</p><p>For instance, we can use the map api just like in Dart on an Iterable:</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">final</span> result <span class="token operator">=</span> <span class="token function">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string-literal"><span class="token string">&#39;row: </span><span class="token interpolation"><span class="token punctuation">\${</span><span class="token expression">value</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
>>>>>>> dee888921332bf6f89741e1a04f7c3d00bf5850c:public/docs/assets/index.html-b1d24881.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="global-functions" tabindex="-1"><a class="header-anchor" href="#global-functions" aria-hidden="true">#</a> Global functions</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>external fun <span class="token function">print</span><span class="token punctuation">(</span><span class="token operator">...</span> args<span class="token operator">:</span> any<span class="token punctuation">)</span>

external fun <span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token operator">:</span> any<span class="token punctuation">)</span>

external fun <span class="token function">jsonify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>

external fun <span class="token function">range</span><span class="token punctuation">(</span>startOrStop<span class="token operator">:</span> num<span class="token punctuation">,</span> <span class="token punctuation">[</span>stop<span class="token operator">:</span> num<span class="token punctuation">,</span> <span class="token literal-property property">step</span><span class="token operator">:</span> num<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> Iterable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="eval" tabindex="-1"><a class="header-anchor" href="#eval" aria-hidden="true">#</a> eval()</h3><p>You can use <strong>eval</strong> method within the script itself to evaluate a string, just like in Javascript:</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:hetu_script/hetu_script.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> hetu <span class="token operator">=</span> <span class="token class-name">Hetu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  hetu<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">final</span> result <span class="token operator">=</span> hetu<span class="token punctuation">.</span><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">r&#39;&#39;&#39;
      final meaning = eval(&quot;6 * 7&quot;)
      meaning
    &#39;&#39;&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="struct" tabindex="-1"><a class="header-anchor" href="#struct" aria-hidden="true">#</a> struct</h2><p>Hetu have a prototyped based struct object like the literal object syntax in Javascript.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
<<<<<<< HEAD:dist/docs/assets/index.html-dcdcccbe.js
struct Prototype <span class="token punctuation">{</span>
=======
struct prototype <span class="token punctuation">{</span>
>>>>>>> dee888921332bf6f89741e1a04f7c3d00bf5850c:public/docs/assets/index.html-b1d24881.js
  <span class="token comment">/// Create a struct from a dart Json data</span>
  <span class="token comment">/// Usage:</span>
  <span class="token comment">/// \`\`\`</span>
  <span class="token comment">/// var obj = Prototype.fromJson(jsonDataFromDart)</span>
  <span class="token comment">/// \`\`\`</span>
  external <span class="token keyword">static</span> fun <span class="token function">fromJson</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">/// Get the List of the keys of this struct</span>
  external <span class="token keyword">get</span> keys <span class="token operator">-</span><span class="token operator">&gt;</span> List

  <span class="token comment">/// Get the List of the values of this struct</span>
  <span class="token comment">/// The values are copied,</span>
  <span class="token comment">/// you cannot modify the struct in this way</span>
  external <span class="token keyword">get</span> values <span class="token operator">-</span><span class="token operator">&gt;</span> List

  <span class="token comment">/// Check if this struct has a key in its own fields.</span>
  external fun <span class="token function">containsKey</span><span class="token punctuation">(</span>key<span class="token operator">:</span> str<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> bool

  <span class="token comment">/// Check if this struct has a key</span>
  <span class="token comment">/// in its own fields or its prototypes&#39; fields.</span>
  external fun <span class="token function">contains</span><span class="token punctuation">(</span>key<span class="token operator">:</span> str<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> bool

  <span class="token comment">/// Check if this struct is empty.</span>
	external <span class="token keyword">get</span> isEmpty <span class="token operator">-</span><span class="token operator">&gt;</span> bool

  <span class="token comment">/// Check if this struct is not empty.</span>
	external <span class="token keyword">get</span> isNotEmpty <span class="token operator">-</span><span class="token operator">&gt;</span> bool

  <span class="token comment">/// Get the number of the members of this struct.</span>
  <span class="token comment">/// Will not include the members of its prototypes.</span>
	external <span class="token keyword">get</span> length <span class="token operator">-</span><span class="token operator">&gt;</span> int

  <span class="token comment">/// Create a new struct form deepcopying this struct</span>
  external fun <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">/// Create dart Json data from this struct</span>
  fun <span class="token function">toJson</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> Map <span class="token operator">=&gt;</span> <span class="token function">jsonify</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>

  fun <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> str <span class="token operator">=&gt;</span> <span class="token function">stringify</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>All struct object can use those pre-defined methods defined on this root prototype:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>final obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">42</span> <span class="token punctuation">}</span>

obj<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For static methods, you need to explicitly call by the prototype:</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">final</span> book <span class="token operator">=</span> <span class="token class-name">Prototype</span><span class="token punctuation">.</span><span class="token function">fromJson</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="math" tabindex="-1"><a class="header-anchor" href="#math" aria-hidden="true">#</a> Math</h2><p>The script provides the binding of Random object in Dart. And there&#39;s some original api on it, for example we can easily create random colors.</p><p>The script combined the math library into a static class.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>external <span class="token keyword">class</span> <span class="token class-name">Random</span> <span class="token punctuation">{</span>

  <span class="token function">construct</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>seed<span class="token operator">:</span> int<span class="token punctuation">]</span><span class="token punctuation">)</span>

  fun nextBool <span class="token operator">-</span><span class="token operator">&gt;</span> bool

  fun <span class="token function">nextInt</span><span class="token punctuation">(</span>max<span class="token operator">:</span> int<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> int

  fun <span class="token function">nextDouble</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> float

  fun <span class="token function">nextColorHex</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">hasAlpha</span><span class="token operator">:</span> bool <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> str

  fun <span class="token function">nextBrightColorHex</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">hasAlpha</span><span class="token operator">:</span> bool <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> str

  fun <span class="token function">nextIterable</span><span class="token punctuation">(</span>list<span class="token operator">:</span> Iterable<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> any

  fun <span class="token function">shuffle</span><span class="token punctuation">(</span>list<span class="token operator">:</span> Iterable<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> Iterable
<span class="token punctuation">}</span>

external <span class="token keyword">class</span> <span class="token class-name">Math</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token keyword">const</span> <span class="token literal-property property">e</span><span class="token operator">:</span> num <span class="token operator">=</span> <span class="token number">2.718281828459045</span>

  <span class="token keyword">static</span> <span class="token keyword">const</span> <span class="token literal-property property">pi</span><span class="token operator">:</span> num <span class="token operator">=</span> <span class="token number">3.1415926535897932</span>

  <span class="token comment">/// Convert [radians] to degrees.</span>
  <span class="token keyword">static</span> fun <span class="token function">degrees</span><span class="token punctuation">(</span>radians<span class="token punctuation">)</span>

  <span class="token comment">/// Convert [degrees] to radians.</span>
  <span class="token keyword">static</span> fun <span class="token function">radians</span><span class="token punctuation">(</span>degrees<span class="token punctuation">)</span>

  <span class="token keyword">static</span> fun <span class="token function">radiusToSigma</span><span class="token punctuation">(</span>radius<span class="token operator">:</span> float<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> float

  <span class="token comment">// Box–Muller transform for generating normally distributed random numbers between [min : max].</span>
  <span class="token keyword">static</span> fun <span class="token function">gaussianNoise</span><span class="token punctuation">(</span>mean<span class="token operator">:</span> float<span class="token punctuation">,</span> <span class="token literal-property property">standardDeviation</span><span class="token operator">:</span> float<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">min</span><span class="token operator">:</span> float<span class="token punctuation">,</span> <span class="token literal-property property">max</span><span class="token operator">:</span> float<span class="token punctuation">,</span> randomGenerator<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> float

  <span class="token comment">// Noise generation function provided by [fast_noise](https://pub.dev/packages/fast_noise) package.</span>
  <span class="token comment">// Noise types: perlin, perlinFractal, cubic, cubicFractal</span>
  <span class="token keyword">static</span> fun <span class="token function">noise2d</span><span class="token punctuation">(</span>size<span class="token punctuation">,</span> <span class="token punctuation">{</span>seed<span class="token punctuation">,</span> noiseType <span class="token operator">=</span> <span class="token string">&#39;cubic&#39;</span><span class="token punctuation">,</span> frequency <span class="token operator">=</span> <span class="token number">0.01</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">static</span> fun <span class="token function">min</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>

  <span class="token keyword">static</span> fun <span class="token function">max</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>

  <span class="token keyword">static</span> fun <span class="token function">sqrt</span><span class="token punctuation">(</span>x<span class="token operator">:</span> num<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> num

  <span class="token keyword">static</span> fun <span class="token function">pow</span><span class="token punctuation">(</span>x<span class="token operator">:</span> num<span class="token punctuation">,</span> <span class="token literal-property property">exponent</span><span class="token operator">:</span> num<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> num

  <span class="token keyword">static</span> fun <span class="token function">sin</span><span class="token punctuation">(</span>x<span class="token operator">:</span> num<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> num

  <span class="token keyword">static</span> fun <span class="token function">cos</span><span class="token punctuation">(</span>x<span class="token operator">:</span> num<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> num

  <span class="token keyword">static</span> fun <span class="token function">tan</span><span class="token punctuation">(</span>x<span class="token operator">:</span> num<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> num

  <span class="token keyword">static</span> fun <span class="token function">exp</span><span class="token punctuation">(</span>x<span class="token operator">:</span> num<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> num

  <span class="token keyword">static</span> fun <span class="token function">log</span><span class="token punctuation">(</span>x<span class="token operator">:</span> num<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> num

  <span class="token keyword">static</span> fun <span class="token function">parseInt</span><span class="token punctuation">(</span>source<span class="token operator">:</span> str<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">radix</span><span class="token operator">:</span> int<span class="token operator">?</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> num

  <span class="token keyword">static</span> fun <span class="token function">parseDouble</span><span class="token punctuation">(</span>source<span class="token operator">:</span> str<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> num

  <span class="token keyword">static</span> fun <span class="token function">sum</span><span class="token punctuation">(</span>list<span class="token operator">:</span> List<span class="token operator">&lt;</span>num<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> num

  <span class="token keyword">static</span> fun <span class="token function">checkBit</span><span class="token punctuation">(</span>index<span class="token operator">:</span> int<span class="token punctuation">,</span> <span class="token literal-property property">check</span><span class="token operator">:</span> int<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> bool

  <span class="token keyword">static</span> fun <span class="token function">bitLS</span><span class="token punctuation">(</span>x<span class="token operator">:</span> int<span class="token punctuation">,</span> <span class="token literal-property property">distance</span><span class="token operator">:</span> int<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> bool

  <span class="token keyword">static</span> fun <span class="token function">bitRS</span><span class="token punctuation">(</span>x<span class="token operator">:</span> int<span class="token punctuation">,</span> <span class="token literal-property property">distance</span><span class="token operator">:</span> int<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> bool

  <span class="token keyword">static</span> fun <span class="token function">bitAnd</span><span class="token punctuation">(</span>x<span class="token operator">:</span> int<span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> int<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> bool

  <span class="token keyword">static</span> fun <span class="token function">bitOr</span><span class="token punctuation">(</span>x<span class="token operator">:</span> int<span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> int<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> bool

  <span class="token keyword">static</span> fun <span class="token function">bitNot</span><span class="token punctuation">(</span>x<span class="token operator">:</span> int<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> bool

  <span class="token keyword">static</span> fun <span class="token function">bitXor</span><span class="token punctuation">(</span>x<span class="token operator">:</span> int<span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> int<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> bool
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hash" tabindex="-1"><a class="header-anchor" href="#hash" aria-hidden="true">#</a> Hash</h2><p>Some utility method about hash &amp; crypto are defined in the static class Hash.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>external <span class="token keyword">class</span> <span class="token class-name">Hash</span> <span class="token punctuation">{</span>

  <span class="token keyword">static</span> fun <span class="token function">uid4</span><span class="token punctuation">(</span><span class="token punctuation">[</span>repeat<span class="token operator">:</span> int<span class="token operator">?</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> str

  <span class="token keyword">static</span> fun <span class="token function">crcString</span><span class="token punctuation">(</span>data<span class="token operator">:</span> str<span class="token punctuation">,</span> <span class="token punctuation">[</span>crc<span class="token operator">:</span> str <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> str

  <span class="token keyword">static</span> fun <span class="token function">crcInt</span><span class="token punctuation">(</span>data<span class="token operator">:</span> str<span class="token punctuation">,</span> <span class="token punctuation">[</span>crc<span class="token operator">:</span> str <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> int
<span class="token punctuation">}</span>
<<<<<<< HEAD:dist/docs/assets/index.html-dcdcccbe.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),o=[p];function c(i,l){return s(),a("div",null,o)}const u=n(e,[["render",c],["__file","index.html.vue"]]);export{u as default};
=======
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),o=[p];function c(i,l){return s(),a("div",null,o)}const u=n(e,[["render",c],["__file","D:/_dev/hetu-script/docs/docs/.vuepress/.temp/pages/en-US/api_reference/hetu/index.html.vue"]]);export{u as default};
>>>>>>> dee888921332bf6f89741e1a04f7c3d00bf5850c:public/docs/assets/index.html-b1d24881.js
