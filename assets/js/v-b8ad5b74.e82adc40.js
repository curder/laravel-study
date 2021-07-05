(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[7726],{382:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-b8ad5b74",path:"/collections/dd.html",title:"dd",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"collections/dd.md",git:{updatedTime:1616865921e3,contributors:[]}}},7474:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>r});var p=a(6252);const e=(0,p.uE)('<h1 id="dd" tabindex="-1"><a class="header-anchor" href="#dd" aria-hidden="true">#</a> dd</h1><p>打印集合的元素并终止脚本的执行。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n  <span class="token operator">-&gt;</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">fn</span><span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token variable">$item</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span>\n  <span class="token operator">-&gt;</span><span class="token function">mapWithKeys</span><span class="token punctuation">(</span><span class="token keyword">fn</span><span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token variable">$item</span> <span class="token operator">+</span> <span class="token number">10</span> <span class="token operator">=&gt;</span> <span class="token variable">$item</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n  <span class="token operator">-&gt;</span><span class="token function">dd</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token operator">-&gt;</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\narray:4 [\n  13 =&gt; 3\n  16 =&gt; 6\n  19 =&gt; 9\n  22 =&gt; 12\n]\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>',3),t=(0,p.Uk)("如果不希望终止脚本的执行，调用 "),o={href:"/collections/dump.md",target:"_blank",rel:"noopener noreferrer"},c=(0,p.Uk)("dump"),l=(0,p.Uk)(" 方法即可。"),r={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[e,(0,p.Wm)("p",null,[t,(0,p.Wm)("a",o,[c,(0,p.Wm)(a)]),l])],64)}}}}]);