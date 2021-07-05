(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[9499],{8246:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-472204b0",path:"/collections/map.html",title:"map",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"返回字符串",slug:"返回字符串",children:[]},{level:2,title:"返回数组",slug:"返回数组",children:[]},{level:2,title:"返回null",slug:"返回null",children:[]},{level:2,title:"返回空数组",slug:"返回空数组",children:[]},{level:2,title:"不改变原集合",slug:"不改变原集合",children:[]}],filePathRelative:"collections/map.md",git:{updatedTime:1616865921e3,contributors:[]}}},9157:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>y});var p=a(6252);const e=(0,p.uE)('<h1 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map</h1><p>遍历集合并将每一个值传入给定的回调。</p><p>该回调可以任意修改项目并返回，从而形成新的被修改过项目的集合。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token variable">$item</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1084\n     all: [\n       10,\n       20,\n       30,\n       40,\n     ],\n   <span class="token punctuation">}</span>\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>',4),t=(0,p.Uk)("像其他集合方法一样，"),l=(0,p.Wm)("code",null,"map",-1),c=(0,p.Uk)(" 返回一个新集合实例；它不会修改它所调用的集合。如果想改变原集合，得使用 "),o={href:"/collections/transform.md",target:"_blank",rel:"noopener noreferrer"},u=(0,p.Uk)("transform"),r=(0,p.Uk)(" 方法。"),i=(0,p.Uk)("它与 "),b={href:"/collections/reduce.md",target:"_blank",rel:"noopener noreferrer"},k=(0,p.Uk)("reduce()"),m=(0,p.Uk)(" 的区别是 "),d={href:"/collections/reduce.md",target:"_blank",rel:"noopener noreferrer"},g=(0,p.Uk)("reduce()"),v=(0,p.Uk)(" 传入集合或数组，返回的是单一值；而"),h=(0,p.Wm)("code",null,"map()",-1),f=(0,p.Uk)("传入数组或集合，返回的依然是集合。"),q=(0,p.uE)('<h2 id="返回字符串" tabindex="-1"><a class="header-anchor" href="#返回字符串" aria-hidden="true">#</a> 返回字符串</h2><p>改变返回集合中value的值，不改变key的内容。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;value1&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;first&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;value2&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;second&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>\n  <span class="token variable">$item</span><span class="token punctuation">,</span>\n  <span class="token variable">$key</span>\n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token variable">$item</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;_&#39;</span> <span class="token operator">.</span> <span class="token variable">$key</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1086\n     all: [\n       &quot;value1&quot; =&gt; &quot;first_value1&quot;,\n       &quot;value2&quot; =&gt; &quot;second_value2&quot;,\n     ],\n   <span class="token punctuation">}</span>\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="返回数组" tabindex="-1"><a class="header-anchor" href="#返回数组" aria-hidden="true">#</a> 返回数组</h2><p>改变返回集合中value的值，不改变key的内容。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;value1&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;first&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;value2&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;second&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">,</span> <span class="token variable">$key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token variable">$item</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;_&#39;</span> <span class="token operator">.</span> <span class="token variable">$key</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1088\n     all: [\n       &quot;value1&quot; =&gt; [\n         &quot;first_value1&quot;,\n       ],\n       &quot;value2&quot; =&gt; [\n         &quot;second_value2&quot;,\n       ],\n     ],\n   <span class="token punctuation">}</span>\n */</span> \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="返回null" tabindex="-1"><a class="header-anchor" href="#返回null" aria-hidden="true">#</a> 返回null</h2><p>如果回调中没有任何返回语句，默认返回null</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;value1&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;first&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;value2&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;second&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>\n  <span class="token variable">$item</span><span class="token punctuation">,</span>\n  <span class="token variable">$key</span>\n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token constant">null</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1083\n     all: [\n       &quot;value1&quot; =&gt; null,\n       &quot;value2&quot; =&gt; null,\n     ],\n   <span class="token punctuation">}</span>\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="返回空数组" tabindex="-1"><a class="header-anchor" href="#返回空数组" aria-hidden="true">#</a> 返回空数组</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;value1&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;first&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;value2&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;second&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>\n  <span class="token variable">$item</span><span class="token punctuation">,</span>\n  <span class="token variable">$key</span>\n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1082\n     all: [\n       &quot;value1&quot; =&gt; [],\n       &quot;value2&quot; =&gt; [],\n     ],\n   <span class="token punctuation">}</span>\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="不改变原集合" tabindex="-1"><a class="header-anchor" href="#不改变原集合" aria-hidden="true">#</a> 不改变原集合</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token variable">$newCollection</span> <span class="token operator">=</span> <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token variable">$item</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token variable">$newCollection</span><span class="token operator">-&gt;</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">dd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\narray:4 [\n  0 =&gt; 10\n  1 =&gt; 20\n  2 =&gt; 30\n  3 =&gt; 40\n]\n\narray:4 [\n  0 =&gt; 1\n  1 =&gt; 2\n  2 =&gt; 3\n  3 =&gt; 4\n]\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>',13),y={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[e,(0,p.Wm)("blockquote",null,[(0,p.Wm)("p",null,[t,l,c,(0,p.Wm)("a",o,[u,(0,p.Wm)(a)]),r])]),(0,p.Wm)("blockquote",null,[(0,p.Wm)("p",null,[i,(0,p.Wm)("a",b,[k,(0,p.Wm)(a)]),m,(0,p.Wm)("a",d,[g,(0,p.Wm)(a)]),v,h,f])]),q],64)}}}}]);