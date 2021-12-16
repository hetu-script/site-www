"use strict";(self.webpackChunkhetu_docs=self.webpackChunkhetu_docs||[]).push([[606],{9646:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-d2329536",path:"/docs/en-US/advanced/",title:"Advanced topics",lang:"en-US",frontmatter:{title:"Advanced topics"},excerpt:"",headers:[{level:2,title:"Private members",slug:"private-members",children:[]},{level:2,title:"Big integers",slug:"big-integers",children:[]},{level:2,title:"Null check",slug:"null-check",children:[]},{level:2,title:"Future",slug:"future",children:[]},{level:2,title:"Error hanlding",slug:"error-hanlding",children:[]},{level:2,title:"Automatic semicolon insertion",slug:"automatic-semicolon-insertion",children:[]}],filePathRelative:"docs/en-US/advanced/README.md",git:{updatedTime:1639667179e3,contributors:[{name:"邵燃",email:"chengfubeiming@gmail.com",commits:2},{name:"hythloday@live.com",email:"hythloday@live.com",commits:1}]}}},6554:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var e=a(6710);const t=(0,e.uE)('<h1 id="advanced-topics" tabindex="-1"><a class="header-anchor" href="#advanced-topics" aria-hidden="true">#</a> Advanced topics</h1><h2 id="private-members" tabindex="-1"><a class="header-anchor" href="#private-members" aria-hidden="true">#</a> Private members</h2><p>You can specify a private member of a class/namespace/source by making its name starts with &#39;_&#39;.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> _name\n  construct <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    _name <span class="token operator">=</span> name\n  <span class="token punctuation">}</span>\n  fun greeting <span class="token punctuation">{</span>\n    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;Hi, I\\&#39;m &#39;</span><span class="token punctuation">,</span> _name<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">final</span> p <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;jimmy&#39;</span><span class="token punctuation">)</span>\n<span class="token comment">// print(p._name) // Error!</span>\np<span class="token punctuation">.</span><span class="token function">greeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="big-integers" tabindex="-1"><a class="header-anchor" href="#big-integers" aria-hidden="true">#</a> Big integers</h2><p>The builtin integers in script are int32, which range from -2,147,483,648 to 2,147,483,647. This is due to the limitation of the runtime.js of Dart.</p><p>To manipulate bigger numbers, you can use preincluded class BigInt.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">final</span> bi <span class="token operator">=</span> <span class="token class-name">BigInt</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&quot;9223372036854775807&quot;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="null-check" tabindex="-1"><a class="header-anchor" href="#null-check" aria-hidden="true">#</a> Null check</h2><p>The script is not planning to introduce null safety. However, there are some syntax to help do null check:</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">var</span> a <span class="token comment">// a is null</span>\n<span class="token comment">// Nullable member get:</span>\n<span class="token keyword">final</span> value <span class="token operator">=</span> a<span class="token operator">?</span><span class="token punctuation">.</span>value <span class="token comment">// value is null and we won&#39;t get errors</span>\n<span class="token comment">// If null then get another value</span>\n<span class="token keyword">final</span> text <span class="token operator">=</span> a <span class="token operator">?</span><span class="token operator">?</span> <span class="token string">&#39;hi!&#39;</span> <span class="token comment">// text is &#39;hi!&#39;</span>\n<span class="token comment">// If null then assign</span>\na <span class="token operator">?</span><span class="token operator">?</span><span class="token operator">=</span> <span class="token number">42</span>\n<span class="token function">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// a is 42 now</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="future" tabindex="-1"><a class="header-anchor" href="#future" aria-hidden="true">#</a> Future</h2><p>All hetu functions are sync. The script do not support async/await functionality, and we are not planning to do so in the near future.</p><p>However, it is possible for an external function to return a Future value.</p><p>To make things easy, we added a simple wrapper for Dart&#39;s Future object. You can use the &#39;then&#39; method to do something when the Dart Future is completed.</p><p>Example:</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string">&#39;package:hetu_script/hetu_script.dart&#39;</span><span class="token punctuation">;</span>\n\n<span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">&gt;</span></span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// Imagine that this function is fetching user info from another service or database.</span>\n  <span class="token keyword">return</span> <span class="token class-name">Future</span><span class="token punctuation">.</span><span class="token function">delayed</span><span class="token punctuation">(</span>\n      <span class="token keyword">const</span> <span class="token class-name">Duration</span><span class="token punctuation">(</span>seconds<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;Hello world after 2 seconds!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> hetu <span class="token operator">=</span> <span class="token class-name">Hetu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  hetu<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>externalFunctions<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">&#39;fetch&#39;</span><span class="token punctuation">:</span> fetch<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  hetu<span class="token punctuation">.</span><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">r&#39;&#39;&#39;\n      external fun fetch\n      final future = fetch()\n      future.then((value) {\n        print(&#39;future completed!&#39;)\n      })\n  &#39;&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="error-hanlding" tabindex="-1"><a class="header-anchor" href="#error-hanlding" aria-hidden="true">#</a> Error hanlding</h2><p>It&#39;s not recommended to try to handle error in the script. You should do this in the Dart code.</p><p>The script doesn&#39;t support &#39;try...catch&#39; functionality. However, it&#39;s possible to throw a error within the script using the Assert keyword.</p><p>For example, a statement like:</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">assert</span> <span class="token number">1</span> <span class="token operator">&gt;</span> <span class="token number">5</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Will throw an &#39;assertion failed&#39; error. And the error message will contain the expression string after the keyword to let you know why this happened.</p><p>The expression after assert must be a boolean value.</p><h2 id="automatic-semicolon-insertion" tabindex="-1"><a class="header-anchor" href="#automatic-semicolon-insertion" aria-hidden="true">#</a> Automatic semicolon insertion</h2>',25),p=(0,e.Uk)("Automatic semicolon insertion (ASI) is a technique in programming languages that semicolon is optional. "),o={href:"https://en.wikibooks.org/wiki/JavaScript/Automatic_semicolon_insertion",target:"_blank",rel:"noopener noreferrer"},l=(0,e.Uk)("Click here for more information"),r=(0,e.Uk)("."),c=(0,e.uE)('<p>If a language has no semicolon and in the same time it also allows for multiline expression. Then there will be times that ambiguity happens.</p><p>For example:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>isReady<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token comment">// a semicolon will always be inserted here automatically by javascript engine</span>\n  <span class="token punctuation">{</span>\n    <span class="token comment">// fields</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// some codes</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>If there&#39;s no ASI, we would never know wether the language use want to return the object after it, or they just want to start a new line after the return keyword.</p><p>Similar things also happens when you started a line with brackets, and the interpreter will not knowing if you want to get the subscript value out of the object in the previous line.</p><p>In Hetu script, the ASI is slightly different from Javascript&#39;s approach (which almost will always add the semicolon).</p><p>We would add a &#39;end of statement mark&#39; after a line, only if the next line starts with one of these tokens &#39;{&#39;, &#39;(&#39;, &#39;[&#39;, &#39;++&#39;, &#39;--&#39;, <strong>AND</strong> this line is not an <strong>UNFINISHED</strong> line that ends with one of these tokens: &#39;!&#39;, &#39;*&#39;, &#39;/&#39;, &#39;%&#39;, &#39;+&#39;, &#39;-&#39;, &#39;&lt;&#39;, &#39;&lt;=&#39;, &#39;&gt;&#39;, &#39;&gt;=&#39;, &#39;=&#39;, &#39;!=&#39;, &#39;??&#39;, &#39;&amp;&amp;&#39;, &#39;||&#39;, &#39;=&#39;, &#39;+=&#39;, &#39;-=&#39;, &#39;*=&#39;, &#39;/=&#39;, &#39;??=&#39;, &#39;.&#39;, &#39;(&#39;, &#39;{&#39;, &#39;[&#39;, &#39;,&#39;, &#39;:&#39;, &#39;-&gt;&#39;, &#39;=&gt;&#39;.</p><p>And Hetu will always add a &#39;end of statement mark&#39; after return if there&#39;s a new line.</p><p>So if you would like to return the value, remember to make the left bracket same line with the return.</p><p>And if you want to write function definition, remember to make the left bracket same line with the function parameters.</p>',10),i={},u=(0,a(8161).Z)(i,[["render",function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("p",null,[p,(0,e._)("a",o,[l,(0,e.Wm)(a)]),r]),c],64)}]])},8161:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);