(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[9341],{4373:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-18cdbad0",path:"/collections/pipe.html",title:"pip",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"collections/pipe.md",git:{updatedTime:161707193e4,contributors:[]}}},6276:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h1 id="pip"><a class="header-anchor" href="#pip">#</a> pip</h1><p>将集合传给给定的回调并返回结果。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$collection</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token doc-comment comment">/**\n=&gt; 6\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',3),t={render:function(n,s){return p}}}}]);