import{f as n}from"./app.321bd41d.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u6CB3\u56FE\u4E2D\u63D0\u4F9B\u7684-api" tabindex="-1"><a class="header-anchor" href="#\u6CB3\u56FE\u4E2D\u63D0\u4F9B\u7684-api" aria-hidden="true">#</a> \u6CB3\u56FE\u4E2D\u63D0\u4F9B\u7684 API</h1><p>\u6CB3\u56FE\u4E2D\u7684\u4E00\u4E9B\u57FA\u7840\u7C7B\u578B\u672C\u8EAB\u662F Dart \u7C7B\u578B\uFF0C\u540C\u65F6\u4E5F\u9ED8\u8BA4\u7ED1\u5B9A\u4E86\u5927\u591A\u6570 Dart \u4E2D\u7684 api\u3002\u4F8B\u5982\u4E0B\u9762\u8FD9\u4E9B\u7C7B\u578B\u548C\u5176\u5BF9\u8C61\u90FD\u53EF\u4EE5\u5728\u811A\u672C\u4E2D\u76F4\u63A5\u4F7F\u7528\uFF1A<strong>num</strong>, <strong>int</strong>, <strong>double</strong>, <strong>bool</strong>, <strong>String</strong>, <strong>List</strong>, <strong>Set</strong>, <strong>Map</strong>\u3002</p><p>\u4E3A\u4E86\u65B9\u4FBF\uFF0C\u6CB3\u56FE\u4E2D\u4E5F\u6DFB\u52A0\u4E86\u4E00\u4E9B\u989D\u5916\u7684\u63A5\u53E3\uFF0C\u4F8B\u5982 <strong>Iterable.random</strong> \u7528\u4EE5\u83B7\u5F97\u67D0\u4E2A\u6570\u7EC4\u4E2D\u7684\u4E00\u4E2A\u968F\u673A\u5BF9\u8C61\u3002</p><h2 id="\u5168\u5C40\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u51FD\u6570" aria-hidden="true">#</a> \u5168\u5C40\u51FD\u6570</h2><p>\u4E0B\u9762\u662F\u4E00\u4E9B\u811A\u672C\u4E2D\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u7684\u51FD\u6570\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>external fun <span class="token function">print</span><span class="token punctuation">(</span><span class="token operator">...</span> args<span class="token operator">:</span> any<span class="token punctuation">)</span>

external fun <span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token operator">:</span> any<span class="token punctuation">)</span>

external fun <span class="token function">jsonify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>

external fun <span class="token function">range</span><span class="token punctuation">(</span>startOrStop<span class="token operator">:</span> num<span class="token punctuation">,</span> <span class="token punctuation">[</span>stop<span class="token operator">:</span> num<span class="token punctuation">,</span> <span class="token literal-property property">step</span><span class="token operator">:</span> num<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> Iterable
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="eval" tabindex="-1"><a class="header-anchor" href="#eval" aria-hidden="true">#</a> eval()</h3><p>\u6B64\u5916\uFF0C\u548C Javascript \u4E00\u6837\uFF0C\u811A\u672C\u4E2D\u5305\u542B\u4E00\u4E2A\u7528\u4EE5\u89E3\u91CA\u81EA\u5DF1\u7684\u63A5\u53E3 <strong>eval()</strong>\uFF1A</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:hetu_script/hetu_script.dart&#39;</span></span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> hetu <span class="token operator">=</span> <span class="token class-name">Hetu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  hetu<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">final</span> result <span class="token operator">=</span> hetu<span class="token punctuation">.</span><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">r&#39;&#39;&#39;
      var meaning
      eval(&quot;meaning = &#39;hello from a deeper dream!&#39;&quot;)
      meaning
    &#39;&#39;&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="\u5BF9\u8C61\u5B57\u9762\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u5B57\u9762\u91CF" aria-hidden="true">#</a> \u5BF9\u8C61\u5B57\u9762\u91CF</h2><p>\u6CB3\u56FE\u4E2D\u5305\u542B\u7C7B\u4F3C Javascript \u7684\u5BF9\u8C61\u5B57\u9762\u91CF\u8BED\u6CD5\u3002\u5E76\u4E14\u4E5F\u5B9E\u73B0\u4E86\u57FA\u672C\u7684\u539F\u578B\u94FE\u3002</p><p>\u6CB3\u56FE\u4E2D\u6240\u6709\u7684\u5BF9\u8C61\u5B57\u9762\u91CF\u90FD\u6709\u4E00\u4E2A\u539F\u578B\u5BF9\u8C61\uFF0C\u5E76\u4E14\u5728\u8FD9\u4E2A\u539F\u578B\u5BF9\u8C61\u4E0A\u9884\u5148\u5B9A\u4E49\u4E86\u4E00\u4E9B\u5E38\u7528\u63A5\u53E3\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>
struct prototype <span class="token punctuation">{</span>
  <span class="token comment">/// Create a struct from a dart Json data</span>
  <span class="token comment">/// Usage:</span>
  <span class="token comment">/// \`\`\`</span>
  <span class="token comment">/// var obj = prototype.fromJson(jsonDataFromDart)</span>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><p>\u5927\u591A\u6570\u4E0A\u9762\u8FD9\u4E9B\u65B9\u6CD5\u90FD\u53EF\u4EE5\u76F4\u63A5\u5728\u5BF9\u8C61\u4E0A\u8C03\u7528\u3002\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>final obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">42</span> <span class="token punctuation">}</span>

obj<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5BF9\u4E8E static \u65B9\u6CD5\uFF0C\u9700\u8981\u901A\u8FC7\u539F\u578B\u7684\u540D\u5B57\u6765\u8C03\u7528\uFF1A</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">final</span> book <span class="token operator">=</span> prototype<span class="token punctuation">.</span><span class="token function">fromJson</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="math" tabindex="-1"><a class="header-anchor" href="#math" aria-hidden="true">#</a> Math</h2><p>\u811A\u672C\u4E2D\u5B9A\u4E49\u4E86\u4E00\u4E2A\u9759\u6001\u7C7B Math \uFF0C\u5185\u7F6E\u4E86\u4E00\u4E9B\u6570\u5B66\u76F8\u5173\u7684\u5E38\u6570\u548C\u63A5\u53E3\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>external <span class="token keyword">class</span> <span class="token class-name">Math</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token keyword">const</span> <span class="token literal-property property">e</span><span class="token operator">:</span> num <span class="token operator">=</span> <span class="token number">2.718281828459045</span>

  <span class="token keyword">static</span> <span class="token keyword">const</span> <span class="token literal-property property">pi</span><span class="token operator">:</span> num <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">.</span>1415926535897932external

  <span class="token keyword">static</span> fun <span class="token function">radiusToSigma</span><span class="token punctuation">(</span>radius<span class="token operator">:</span> float<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> float

  <span class="token comment">// Box\u2013Muller transform for generating normally distributed random numbers</span>
  <span class="token keyword">static</span> fun <span class="token function">gaussianNoise</span><span class="token punctuation">(</span>mean<span class="token operator">:</span> float<span class="token punctuation">,</span> <span class="token literal-property property">variance</span><span class="token operator">:</span> float<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> float

  <span class="token comment">// Compute Perlin noise at coordinates x, y</span>
  <span class="token keyword">static</span> fun <span class="token function">perlinNoise</span><span class="token punctuation">(</span>x<span class="token operator">:</span> float<span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> float<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> float

  <span class="token keyword">static</span> fun <span class="token function">min</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>

  <span class="token keyword">static</span> fun <span class="token function">max</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>

  <span class="token keyword">static</span> fun <span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> num

  <span class="token keyword">static</span> fun <span class="token function">randomInt</span><span class="token punctuation">(</span>max<span class="token operator">:</span> num<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> num

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

  <span class="token keyword">static</span> fun <span class="token function">checkBit</span><span class="token punctuation">(</span>index<span class="token operator">:</span> num<span class="token punctuation">,</span> <span class="token literal-property property">check</span><span class="token operator">:</span> num<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> bool

  <span class="token keyword">static</span> fun <span class="token function">bitLS</span><span class="token punctuation">(</span>x<span class="token operator">:</span> num<span class="token punctuation">,</span> <span class="token literal-property property">distance</span><span class="token operator">:</span> num<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> bool

  <span class="token keyword">static</span> fun <span class="token function">bitRS</span><span class="token punctuation">(</span>x<span class="token operator">:</span> num<span class="token punctuation">,</span> <span class="token literal-property property">distance</span><span class="token operator">:</span> num<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> bool

  <span class="token keyword">static</span> fun <span class="token function">bitAnd</span><span class="token punctuation">(</span>x<span class="token operator">:</span> num<span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> num<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> bool

  <span class="token keyword">static</span> fun <span class="token function">bitOr</span><span class="token punctuation">(</span>x<span class="token operator">:</span> num<span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> num<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> bool

  <span class="token keyword">static</span> fun <span class="token function">bitNot</span><span class="token punctuation">(</span>x<span class="token operator">:</span> num<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> bool

  <span class="token keyword">static</span> fun <span class="token function">bitXor</span><span class="token punctuation">(</span>x<span class="token operator">:</span> num<span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> num<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> bool
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div><h2 id="hash" tabindex="-1"><a class="header-anchor" href="#hash" aria-hidden="true">#</a> Hash</h2><p>\u811A\u672C\u4E2D\u5B9A\u4E49\u4E86\u4E00\u4E2A\u9759\u6001\u7C7B Hash \uFF0C\u5185\u7F6E\u4E86\u4E00\u4E9B\u5B57\u7B26\u4E32\u52A0\u5BC6\u76F8\u5173\u7684\u63A5\u53E3\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>external <span class="token keyword">class</span> <span class="token class-name">Hash</span> <span class="token punctuation">{</span>

  <span class="token keyword">static</span> fun <span class="token function">uid4</span><span class="token punctuation">(</span>repeat<span class="token operator">:</span> int<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> str

  <span class="token keyword">static</span> fun <span class="token function">crc32b</span><span class="token punctuation">(</span>data<span class="token operator">:</span> str<span class="token punctuation">,</span> <span class="token punctuation">[</span>crc<span class="token operator">:</span> str <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> str
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,23);function t(e,o){return p}var l=s(a,[["render",t]]);export{l as default};