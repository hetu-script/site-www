import{f as n}from"./app.9259e5f7.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="api-for-use-in-hetu-script" tabindex="-1"><a class="header-anchor" href="#api-for-use-in-hetu-script" aria-hidden="true">#</a> API for use in Hetu script</h1><p>Most of the preincluded values&#39; apis are kept the same name as the Dart SDK: <strong>num</strong>, <strong>int</strong>, <strong>double</strong>, <strong>bool</strong>, <strong>String</strong>, <strong>List</strong>, <strong>Set</strong> and <strong>Map</strong></p><p>There are also some hetu exclusive methods, like <strong>List.random</strong>, to get a random item out of a List.</p><h2 id="global-functions" tabindex="-1"><a class="header-anchor" href="#global-functions" aria-hidden="true">#</a> Global functions</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>external fun <span class="token function">print</span><span class="token punctuation">(</span><span class="token operator">...</span> args<span class="token operator">:</span> any<span class="token punctuation">)</span>

external fun <span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token operator">:</span> any<span class="token punctuation">)</span>

external fun <span class="token function">jsonify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>

external fun <span class="token function">range</span><span class="token punctuation">(</span>startOrStop<span class="token operator">:</span> num<span class="token punctuation">,</span> <span class="token punctuation">[</span>stop<span class="token operator">:</span> num<span class="token punctuation">,</span> <span class="token literal-property property">step</span><span class="token operator">:</span> num<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> Iterable
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="eval" tabindex="-1"><a class="header-anchor" href="#eval" aria-hidden="true">#</a> eval()</h3><p>You can use <strong>eval</strong> method within the script itself to evaluate a string, just like in Javascript:</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:hetu_script/hetu_script.dart&#39;</span></span><span class="token punctuation">;</span>

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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="object" tabindex="-1"><a class="header-anchor" href="#object" aria-hidden="true">#</a> object</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>abstract <span class="token keyword">class</span> <span class="token class-name">object</span> <span class="token punctuation">{</span>
  external fun <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> str
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="struct" tabindex="-1"><a class="header-anchor" href="#struct" aria-hidden="true">#</a> struct</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><h2 id="math" tabindex="-1"><a class="header-anchor" href="#math" aria-hidden="true">#</a> Math</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>external <span class="token keyword">class</span> <span class="token class-name">Math</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div><h2 id="hash" tabindex="-1"><a class="header-anchor" href="#hash" aria-hidden="true">#</a> Hash</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>external <span class="token keyword">class</span> <span class="token class-name">Hash</span> <span class="token punctuation">{</span>

  <span class="token keyword">static</span> fun <span class="token function">uid4</span><span class="token punctuation">(</span>repeat<span class="token operator">:</span> int<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> str

  <span class="token keyword">static</span> fun <span class="token function">crc32b</span><span class="token punctuation">(</span>data<span class="token operator">:</span> str<span class="token punctuation">,</span> <span class="token punctuation">[</span>crc<span class="token operator">:</span> str <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> str
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,16);function t(e,o){return p}var l=s(a,[["render",t]]);export{l as default};
