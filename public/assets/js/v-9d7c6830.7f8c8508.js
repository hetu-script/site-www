"use strict";(self.webpackChunkhetu_docs=self.webpackChunkhetu_docs||[]).push([[794],{5221:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-9d7c6830",path:"/docs/en-US/",title:"Introduction",lang:"en-US",frontmatter:{title:"Introduction"},excerpt:"",headers:[{level:2,title:"Quick start",slug:"quick-start",children:[]},{level:2,title:"Binding",slug:"binding",children:[]},{level:2,title:"VScode extension",slug:"vscode-extension",children:[]}],filePathRelative:"docs/en-US/README.md",git:{updatedTime:1639743896e3,contributors:[{name:"邵燃",email:"chengfubeiming@gmail.com",commits:3},{name:"hythloday@live.com",email:"hythloday@live.com",commits:2}]}}},3153:(n,s,a)=>{a.r(s),a.d(s,{default:()=>f});var t=a(7975);const e=(0,t.uE)('<h1 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h1><p>Hetu is a lightweight script language purely written in Dart for embedding in Flutter apps. The main goal is to enable Flutter apps to have hotfix and scripting ability.</p><p>We did not choose to use another existing language to achieve the goal. Because we want to keep it away from interference of other language&#39;s complex implementation and their irrelative-to-Flutter eco-system. This will keep this language simple and focus on what we actually need.</p><h2 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> Quick start</h2><p>Below is an example to eval a string literal of Hetu code in Dart.</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string">&#39;package:hetu_script/hetu_script.dart&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> hetu <span class="token operator">=</span> <span class="token class-name">Hetu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  hetu<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  hetu<span class="token punctuation">.</span><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">r&#39;&#39;&#39;\n    var ht = {\n      name: &#39;Hetu&#39;,\n      greeting: () {\n        print(&#39;Hi! I\\&#39;m&#39;, this.name)\n      }\n    }\n    ht.greeting()\n  &#39;&#39;&#39;</span><span class="token punctuation">,</span> isModule<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>',6),p=(0,t.Uk)("Hetu's "),i=(0,t.Uk)("grammar"),o=(0,t.Uk)(" is close to typescript/kotlin/swift and other modern languages."),l=(0,t._)("ul",null,[(0,t._)("li",null,"Semicolon is optional."),(0,t._)("li",null,"Function starts with a keyword like 'fun, get, set, construct'."),(0,t._)("li",null,"Support both class based OOP and prototype based OOP, and also functional programming. You can choose whatever style you want."),(0,t._)("li",null,"Type annotation is optional. Variable declared will infer its type from its initializer expression. (The static analysis is still WIP.)")],-1),c=(0,t._)("h2",{id:"binding",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#binding","aria-hidden":"true"},"#"),(0,t.Uk)(" Binding")],-1),u=(0,t.Uk)("Communicating with Dart"),r=(0,t.Uk)(" is very easy. You can directly pass common value types from and to script."),d=(0,t.uE)('<p>Below is an example to pass a Map to script, modify it in script and get it back:</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string">&#39;package:hetu_script/hetu_script.dart&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> hetu <span class="token operator">=</span> <span class="token class-name">Hetu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  hetu<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>externalFunctions<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&#39;hello&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span><span class="token string">&#39;greetings&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;greetings from Dart!&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">var</span> hetuValue <span class="token operator">=</span> hetu<span class="token punctuation">.</span><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">r&#39;&#39;&#39;\n      external fun hello\n      var dartValue = hello()\n      dartValue[&#39;reply&#39;] = &#39;Hi, this is Hetu.&#39;\n      dartValue // the script will return the value of it&#39;s last expression\n      &#39;&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;hetu value: $hetuValue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="vscode-extension" tabindex="-1"><a class="header-anchor" href="#vscode-extension" aria-hidden="true">#</a> VScode extension</h2>',3),k=(0,t.Uk)("If you are using VSCode as your editor, you can download "),m={href:"https://marketplace.visualstudio.com/items?itemName=hetu-script.hetuscript",target:"_blank",rel:"noopener noreferrer"},b=(0,t.Uk)("this extension"),h=(0,t.Uk)(" to get basic highlight and snippets features."),g={},f=(0,a(5261).Z)(g,[["render",function(n,s){const a=(0,t.up)("RouterLink"),g=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[e,(0,t._)("p",null,[p,(0,t.Wm)(a,{to:"/docs/en-US/syntax/"},{default:(0,t.w5)((()=>[i])),_:1}),o]),l,c,(0,t._)("p",null,[(0,t.Wm)(a,{to:"/docs/en-US/binding/"},{default:(0,t.w5)((()=>[u])),_:1}),r]),d,(0,t._)("p",null,[k,(0,t._)("a",m,[b,(0,t.Wm)(g)]),h])],64)}]])},5261:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);