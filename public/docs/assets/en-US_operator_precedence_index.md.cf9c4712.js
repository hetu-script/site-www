import{o as t,c as e,a as l}from"./app.fcd827d0.js";const d='{"title":"Hetu operator precedence","description":"","frontmatter":{},"headers":[{"level":2,"title":"Hetu operator precedence","slug":"hetu-operator-precedence"},{"level":2,"title":"Dart operator precedence (for reference)","slug":"dart-operator-precedence-for-reference"}],"relativePath":"en-US/operator_precedence/index.md","lastUpdated":1617830147334}',n={},r=l('<h2 id="hetu-operator-precedence"><a class="header-anchor" href="#hetu-operator-precedence" aria-hidden="true">#</a> Hetu operator precedence</h2><table><thead><tr><th style="text-align:left;">Description</th><th style="text-align:left;">Operator</th><th style="text-align:center;">Associativity</th><th style="text-align:center;">Precedence</th></tr></thead><tbody><tr><td style="text-align:left;">Unary postfix</td><td style="text-align:left;">e., e1[e2], e(), e++, e--</td><td style="text-align:center;">None</td><td style="text-align:center;">16</td></tr><tr><td style="text-align:left;">Unary prefix</td><td style="text-align:left;">-e, !e, ++e, --e</td><td style="text-align:center;">None</td><td style="text-align:center;">15</td></tr><tr><td style="text-align:left;">Multiplicative</td><td style="text-align:left;">*, /, %</td><td style="text-align:center;">Left</td><td style="text-align:center;">14</td></tr><tr><td style="text-align:left;">Additive</td><td style="text-align:left;">+, -</td><td style="text-align:center;">Left</td><td style="text-align:center;">13</td></tr><tr><td style="text-align:left;">Relational</td><td style="text-align:left;">&lt;, &gt;, &lt;=, &gt;=, as, is, is!</td><td style="text-align:center;">None</td><td style="text-align:center;">8</td></tr><tr><td style="text-align:left;">Equality</td><td style="text-align:left;">==, !=</td><td style="text-align:center;">None</td><td style="text-align:center;">7</td></tr><tr><td style="text-align:left;">Logical AND</td><td style="text-align:left;">&amp;&amp;</td><td style="text-align:center;">Left</td><td style="text-align:center;">6</td></tr><tr><td style="text-align:left;">Logical Or</td><td style="text-align:left;">||</td><td style="text-align:center;">Left</td><td style="text-align:center;">5</td></tr><tr><td style="text-align:left;">Conditional</td><td style="text-align:left;">e1 ? e2 : e3</td><td style="text-align:center;">Right</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:left;">Assignment</td><td style="text-align:left;">=, *=, /=, +=, -=</td><td style="text-align:center;">Right</td><td style="text-align:center;">1</td></tr></tbody></table><h2 id="dart-operator-precedence-for-reference"><a class="header-anchor" href="#dart-operator-precedence-for-reference" aria-hidden="true">#</a> Dart operator precedence (for reference)</h2><table><thead><tr><th style="text-align:left;">Description</th><th style="text-align:left;">Operator</th><th style="text-align:center;">Associativity</th><th style="text-align:center;">Precedence</th></tr></thead><tbody><tr><td style="text-align:left;">Unary postfix</td><td style="text-align:left;">e., e?., e++, e--, e1[e2], e()</td><td style="text-align:center;">None</td><td style="text-align:center;">16</td></tr><tr><td style="text-align:left;">Unary prefix</td><td style="text-align:left;">-e, !e, ˜e, ++e, --e, await e</td><td style="text-align:center;">None</td><td style="text-align:center;">15</td></tr><tr><td style="text-align:left;">Multiplicative</td><td style="text-align:left;">*, /, ˜/, %</td><td style="text-align:center;">Left</td><td style="text-align:center;">14</td></tr><tr><td style="text-align:left;">Additive</td><td style="text-align:left;">+, -</td><td style="text-align:center;">Left</td><td style="text-align:center;">13</td></tr><tr><td style="text-align:left;">Shift</td><td style="text-align:left;">&lt;&lt;, &gt;&gt;, &gt;&gt;&gt;</td><td style="text-align:center;">Left</td><td style="text-align:center;">12</td></tr><tr><td style="text-align:left;">Bitwise</td><td style="text-align:left;">AND &amp;</td><td style="text-align:center;">Left</td><td style="text-align:center;">11</td></tr><tr><td style="text-align:left;">Bitwise</td><td style="text-align:left;">XOR ˆ</td><td style="text-align:center;">Left</td><td style="text-align:center;">10</td></tr><tr><td style="text-align:left;">Bitwise</td><td style="text-align:left;">OR |</td><td style="text-align:center;">Left</td><td style="text-align:center;">9</td></tr><tr><td style="text-align:left;">Relational</td><td style="text-align:left;">&lt;, &gt;, &lt;=, &gt;=, as, is, is!</td><td style="text-align:center;">None</td><td style="text-align:center;">8</td></tr><tr><td style="text-align:left;">Equality</td><td style="text-align:left;">==, !=</td><td style="text-align:center;">None</td><td style="text-align:center;">7</td></tr><tr><td style="text-align:left;">Logical</td><td style="text-align:left;">and &amp;&amp;</td><td style="text-align:center;">Left</td><td style="text-align:center;">6</td></tr><tr><td style="text-align:left;">Logical</td><td style="text-align:left;">or ||</td><td style="text-align:center;">Left</td><td style="text-align:center;">5</td></tr><tr><td style="text-align:left;">If-null</td><td style="text-align:left;">??</td><td style="text-align:center;">Left</td><td style="text-align:center;">4</td></tr><tr><td style="text-align:left;">Conditional</td><td style="text-align:left;">e1 ? e2 : e3</td><td style="text-align:center;">Right</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:left;">Cascade</td><td style="text-align:left;">..</td><td style="text-align:center;">Left</td><td style="text-align:center;">2</td></tr><tr><td style="text-align:left;">Assignment</td><td style="text-align:left;">=, *=, /=, +=, -=, &amp;=, ˆ=, etc.</td><td style="text-align:center;">Right</td><td style="text-align:center;">1</td></tr></tbody></table>',4);n.render=function(l,d,n,a,i,s){return t(),e("div",null,[r])};export default n;export{d as __pageData};
