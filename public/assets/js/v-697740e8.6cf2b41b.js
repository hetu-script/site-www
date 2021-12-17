"use strict";(self.webpackChunkhetu_docs=self.webpackChunkhetu_docs||[]).push([[102],{8561:(n,e,a)=>{a.r(e),a.d(e,{data:()=>s});const s={key:"v-697740e8",path:"/docs/en-US/command_line_tool/",title:"Command line tool",lang:"en-US",frontmatter:{title:"Command line tool"},excerpt:"",headers:[{level:2,title:"Installation",slug:"installation",children:[]},{level:2,title:"REPL",slug:"repl",children:[]},{level:2,title:"Format",slug:"format",children:[]},{level:2,title:"Analyze",slug:"analyze",children:[]},{level:2,title:"Run",slug:"run",children:[]}],filePathRelative:"docs/en-US/command_line_tool/README.md",git:{updatedTime:1639542855e3,contributors:[{name:"邵燃",email:"chengfubeiming@gmail.com",commits:1}]}}},1777:(n,e,a)=>{a.r(e),a.d(e,{default:()=>u});var s=a(7975);const t=(0,s.uE)('<h1 id="hetu-script-command-line-tool" tabindex="-1"><a class="header-anchor" href="#hetu-script-command-line-tool" aria-hidden="true">#</a> Hetu Script command line tool</h1><p>A command line REPL tool for testing.</p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>You can activate this tool globally, by the following command:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>dart pub global activate hetu_script_dev_tools\n// or you can use a git url or local path:\n// dart pub global activate --source path G:\\_dev\\hetu-script\\dev-tools\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Then you can use command line tool &#39;hetu&#39; in any directory on your computer.</p>',6),l=(0,s.Uk)("(If you are facing any problems, please check this official document about "),o={href:"https://dart.dev/tools/pub/cmd/pub-global",target:"_blank",rel:"noopener noreferrer"},r=(0,s.Uk)("pub global activate"),p=(0,s.Uk)(")"),i=(0,s.uE)('<h2 id="repl" tabindex="-1"><a class="header-anchor" href="#repl" aria-hidden="true">#</a> REPL</h2><p>If no arguments is provided when execute, the command tool will enter REPL mode.</p><p>In REPL mode, every exrepssion you entered will be evaluated and print out immediately.</p><p>If you want to write multiple line in REPL mode, use &#39;\\&#39; to end a line.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token operator">&gt;&gt;&gt;</span><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">42</span>\n<span class="token operator">&gt;&gt;&gt;</span>a\n<span class="token number">42</span>\n<span class="token operator">&gt;&gt;&gt;</span>fun hello <span class="token punctuation">{</span>\\\n<span class="token keyword">return</span> a <span class="token punctuation">}</span>\n<span class="token operator">&gt;&gt;&gt;</span>hello\n<span class="token keyword">function</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">any</span> <span class="token comment">// repl print</span>\n<span class="token operator">&gt;&gt;&gt;</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token number">42</span> <span class="token comment">// repl print</span>\n<span class="token operator">&gt;&gt;&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="format" tabindex="-1"><a class="header-anchor" href="#format" aria-hidden="true">#</a> Format</h2><p>Format a Hetu source file on your disk. You can either just print out to test the function. Or to export the result and save to file.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>hetu format [path] [option]\n      --print(-p)\n      --out(-o) [outpath]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="analyze" tabindex="-1"><a class="header-anchor" href="#analyze" aria-hidden="true">#</a> Analyze</h2><p>Analyze a Hetu source file on your disk.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>analyze [path]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="run" tabindex="-1"><a class="header-anchor" href="#run" aria-hidden="true">#</a> Run</h2><p>Run a Hetu source file on your disk.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>run [path]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',14),c={},u=(0,a(5261).Z)(c,[["render",function(n,e){const a=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[t,(0,s._)("p",null,[l,(0,s._)("a",o,[r,(0,s.Wm)(a)]),p]),i],64)}]])},5261:(n,e)=>{e.Z=(n,e)=>{const a=n.__vccOpts||n;for(const[n,s]of e)a[n]=s;return a}}}]);