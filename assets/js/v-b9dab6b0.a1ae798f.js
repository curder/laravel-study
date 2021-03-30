(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[3514],{3376:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-b9dab6b0",path:"/collections/sort.html",title:"sort",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"不改变原集合",slug:"不改变原集合",children:[]}],filePathRelative:"collections/sort.md",git:{updatedTime:161707193e4,contributors:[]}}},6372:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>h});var p=a(6252);const t=(0,p.uE)('<h1 id="sort"><a class="header-anchor" href="#sort">#</a> sort</h1><p>对集合进行排序。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1209\n     all: [\n       2 =&gt; 3,\n       0 =&gt; 5,\n       1 =&gt; 7,\n       3 =&gt; 9,\n     ],\n   <span class="token punctuation">}</span>\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>使用 sort 对集合排序后，新返回的集合会保留原来集合的 key。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;A55&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;B54&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;B22&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;A11&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1209\n     all: [\n       3 =&gt; &quot;A11&quot;,\n       0 =&gt; &quot;A55&quot;,\n       2 =&gt; &quot;B22&quot;,\n       1 =&gt; &quot;B54&quot;,\n     ],\n   <span class="token punctuation">}</span>\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>调用 <code>sort</code> 方法不传递任何参数默认排序使用值的asci编码进行排序。</p><p>自定义回调函数排序</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;A-55&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;B54&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;B-22&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;A11&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token function">fn </span><span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">,</span> <span class="token variable">$b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>  <span class="token function">str_replace</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;-&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token variable">$a</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token variable">$b</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1228\n     all: [\n       3 =&gt; &quot;A11&quot;,\n       0 =&gt; &quot;A-55&quot;,\n       2 =&gt; &quot;B-22&quot;,\n       1 =&gt; &quot;B54&quot;,\n     ],\n   <span class="token punctuation">}</span>\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="不改变原集合"><a class="header-anchor" href="#不改变原集合">#</a> 不改变原集合</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;A-55&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;B54&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;B-22&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;A11&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token variable">$newCollection</span> <span class="token operator">=</span> <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token function">fn </span><span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">,</span> <span class="token variable">$b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>  <span class="token function">str_replace</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;-&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token variable">$a</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token variable">$b</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token variable">$newCollection</span><span class="token operator">-&gt;</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">dd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\narray:4 [\n  3 =&gt; &quot;A11&quot;\n  0 =&gt; &quot;A-55&quot;\n  2 =&gt; &quot;B-22&quot;\n  1 =&gt; &quot;B54&quot;\n]\n\narray:4 [\n  0 =&gt; &quot;A-55&quot;\n  1 =&gt; &quot;B54&quot;\n  2 =&gt; &quot;B-22&quot;\n  3 =&gt; &quot;A11&quot;\n] \n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>',10),e=(0,p.Uk)("如果有更高级的排序需求，你可以传入回调来用你自己的算法进行排序。请参阅 PHP 文档的 "),o={href:"http://php.net/manual/en/function.usort.php#refsect1-function.usort-parameters",target:"_blank",rel:"noopener noreferrer"},l=(0,p.Uk)("usort"),c=(0,p.Uk)("，这是集合的 "),u=(0,p.Wm)("code",null,"sort",-1),r=(0,p.Uk)(" 方法在底层所调用的。"),i=(0,p.Uk)("如果要对嵌套数组或对象的集合进行排序，参考 "),b={href:"/collections/sortBy.md",target:"_blank",rel:"noopener noreferrer"},k=(0,p.Uk)("sortBy"),m=(0,p.Uk)(" 和 "),g={href:"/collections/sortByDesc.md",target:"_blank",rel:"noopener noreferrer"},d=(0,p.Uk)("sortByDesc"),q=(0,p.Uk)(" 方法。"),h={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[t,(0,p.Wm)("p",null,[e,(0,p.Wm)("a",o,[l,(0,p.Wm)(a)]),c,u,r]),(0,p.Wm)("p",null,[i,(0,p.Wm)("a",b,[k,(0,p.Wm)(a)]),m,(0,p.Wm)("a",g,[d,(0,p.Wm)(a)]),q])],64)}}}}]);