(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[7581],{4992:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-736441b5",path:"/collections/whereNotIn.html",title:"whereNotIn",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"collections/whereNotIn.md",git:{updatedTime:161707193e4,contributors:[]}}},2463:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>u});var t=a(6252);const p=(0,t.uE)('<h1 id="wherenotin"><a class="header-anchor" href="#wherenotin">#</a> whereNotIn</h1><p>通过集合中不包含的给定键值对过滤</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;pears&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">60</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;banners&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">70</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;coconuts&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">80</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">whereNotIn</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;price&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1239\n     all: [\n       0 =&gt; [\n         &quot;product&quot; =&gt; &quot;apples&quot;,\n         &quot;price&quot; =&gt; 50,\n       ],\n       2 =&gt; [\n         &quot;product&quot; =&gt; &quot;banners&quot;,\n         &quot;price&quot; =&gt; 70,\n       ],\n     ],\n   <span class="token punctuation">}</span>\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>',3),e=(0,t.Wm)("code",null,"whereNotIn",-1),o=(0,t.Uk)(" 方法在检查项目值时使用「宽松」比较，意味着具有整数值的字符串将被视为等于相同值的整数。你可以使用 "),c={href:"/collections/whereNotInStrict.md",target:"_blank",rel:"noopener noreferrer"},l=(0,t.Uk)("whereNotInStrict"),r=(0,t.Uk)(" 做比较 严格 的匹配。"),u={render:function(n,s){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.j4)(t.HY,null,[p,(0,t.Wm)("p",null,[e,o,(0,t.Wm)("a",c,[l,(0,t.Wm)(a)]),r])],64)}}}}]);