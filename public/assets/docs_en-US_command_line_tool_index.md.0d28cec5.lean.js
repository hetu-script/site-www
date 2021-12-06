import{_ as a,c as e,o as n,a as t}from"./app.2a03e7aa.js";const g='{"title":"Command line tool - Hetu Script Language","description":"","frontmatter":{"title":"Command line tool - Hetu Script Language"},"headers":[{"level":2,"title":"Installation","slug":"installation"},{"level":2,"title":"REPL","slug":"repl"},{"level":2,"title":"Format","slug":"format"},{"level":2,"title":"Analyze","slug":"analyze"},{"level":2,"title":"Run","slug":"run"}],"relativePath":"docs/en-US/command_line_tool/index.md","lastUpdated":1638780789673}',o={},s=t(`__VP_STATIC_START__<h1 id="hetu-script-command-line-tool" tabindex="-1">Hetu Script command line tool <a class="header-anchor" href="#hetu-script-command-line-tool" aria-hidden="true">#</a></h1><p>A command line REPL tool for testing.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><p>You can activate this tool globally, by the following command:</p><div class="language-"><pre><code>dart pub global activate hetu_script_dev_tools
// or you can use a git url or local path:
// dart pub global activate --source path G:\\_dev\\hetu-script\\dev-tools
</code></pre></div><p>Then you can use command line tool &#39;hetu&#39; in any directory on your computer.</p><p>(If you are facing any problems, please check this official document about <a href="https://dart.dev/tools/pub/cmd/pub-global" target="_blank" rel="noopener noreferrer">pub global activate</a>)</p><h2 id="repl" tabindex="-1">REPL <a class="header-anchor" href="#repl" aria-hidden="true">#</a></h2><p>If no arguments is provided when execute, the command tool will enter REPL mode.</p><p>In REPL mode, every exrepssion you entered will be evaluated and print out immediately.</p><p>If you want to write multiple line in REPL mode, use &#39;\\&#39; to end a line.</p><div class="language-typescript"><pre><code><span class="token operator">&gt;&gt;&gt;</span><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">42</span>
<span class="token operator">&gt;&gt;&gt;</span>a
<span class="token number">42</span>
<span class="token operator">&gt;&gt;&gt;</span>fun hello <span class="token punctuation">{</span>\\
<span class="token keyword">return</span> a <span class="token punctuation">}</span>
<span class="token operator">&gt;&gt;&gt;</span>hello
<span class="token keyword">function</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">any</span> <span class="token comment">// repl print</span>
<span class="token operator">&gt;&gt;&gt;</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token number">42</span> <span class="token comment">// repl print</span>
<span class="token operator">&gt;&gt;&gt;</span>
</code></pre></div><h2 id="format" tabindex="-1">Format <a class="header-anchor" href="#format" aria-hidden="true">#</a></h2><p>Format a Hetu source file on your disk. You can either just print out to test the function. Or to export the result and save to file.</p><div class="language-"><pre><code>hetu format [path] [option]
      --script(-s)
      --print(-p)
      --out(-o) [outpath]
</code></pre></div><h2 id="analyze" tabindex="-1">Analyze <a class="header-anchor" href="#analyze" aria-hidden="true">#</a></h2><p>Analyze a Hetu source file on your disk.</p><div class="language-"><pre><code>analyze [path] [option]
  --script(-s)
</code></pre></div><h2 id="run" tabindex="-1">Run <a class="header-anchor" href="#run" aria-hidden="true">#</a></h2><p>Run a Hetu source file on your disk.</p><div class="language-"><pre><code>run [path] [option]
  --script(-s)
</code></pre></div>__VP_STATIC_END__`,21),l=[s];function r(p,i,c,d,u,h){return n(),e("div",null,l)}var f=a(o,[["render",r]]);export{g as __pageData,f as default};
