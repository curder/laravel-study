(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[1454],{1959:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-9fc9ae0c",path:"/collections/avg.html",title:"avg",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"collections/avg.md",git:{updatedTime:1616865921e3,contributors:[]}}},7174:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h1 id="avg" tabindex="-1"><a class="header-anchor" href="#avg" aria-hidden="true">#</a> avg</h1><p>返回给定键的<strong>平均值</strong>。</p><ul><li>获取数组的平均值</li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">average</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; 20\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>获取二维数组的平均值</li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10000</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">20000</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">30000</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">average</span><span class="token punctuation">(</span>\n  <span class="token string single-quoted-string">&#39;price&#39;</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; 20000\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>使用回调函数</li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10000</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;tax&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">500</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">20000</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;tax&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">700</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">30000</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;tax&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">900</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">average</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token variable">$value</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;price&#39;</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token variable">$value</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;tax&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; 20700\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10000</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;tax&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;active&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">20000</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;tax&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">700</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;active&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">30000</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;tax&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">900</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;active&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">average</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$value</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;active&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token constant">null</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> <span class="token variable">$value</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;price&#39;</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token variable">$value</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;tax&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; 20700\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>',9),t={render:function(n,s){return p}}}}]);