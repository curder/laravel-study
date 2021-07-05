(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[8961],{3981:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-44daae32",path:"/collections/has.html",title:"has",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"collections/has.md",git:{updatedTime:1616865921e3,contributors:[]}}},5435:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>p});const t=(0,a(6252).uE)('<h1 id="has" tabindex="-1"><a class="header-anchor" href="#has" aria-hidden="true">#</a> has</h1><p>判断集合中是否存在给定的键。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;account_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Desk&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;amount&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">dump</span><span class="token punctuation">(</span><span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;product&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">dump</span><span class="token punctuation">(</span><span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;amount&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">dd</span><span class="token punctuation">(</span><span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;amount&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\ntrue\n\ntrue \n\nfalse\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>',3),p={render:function(n,s){return t}}}}]);