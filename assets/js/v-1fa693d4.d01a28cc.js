(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[2818],{8643:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-1fa693d4",path:"/collections/unless.html",title:"unless",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"collections/unless.md",git:{updatedTime:161707193e4,contributors:[]}}},1728:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>u});var p=a(6252);const e=(0,p.uE)('<h1 id="unless"><a class="header-anchor" href="#unless">#</a> unless</h1><p>除非方法的第一个参数的计算结果为 <code>true</code> ，否则该方法将执行给定的回调。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n  <span class="token operator">-&gt;</span><span class="token function">unless</span><span class="token punctuation">(</span><span class="token constant boolean">true</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$collection</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token operator">-&gt;</span><span class="token function">unless</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$collection</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1100\n     all: [\n       1,\n       2,\n       3,\n       5,\n     ],\n   <span class="token punctuation">}</span>\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>',3),t=(0,p.Uk)("如果需要反向操作，请使用 "),l={href:"/collections/when.md",target:"_blank",rel:"noopener noreferrer"},c=(0,p.Uk)("when"),o=(0,p.Uk)(" 方法。"),u={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[e,(0,p.Wm)("p",null,[t,(0,p.Wm)("a",l,[c,(0,p.Wm)(a)]),o])],64)}}}}]);