(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[5038],{7016:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-2f7f556a",path:"/collections/demo/markdown_format.html",title:"格式化 Markdown 数据列表",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"使用 foreach 方法",slug:"使用-foreach-方法",children:[]},{level:2,title:"使用 map 和 implode 方法",slug:"使用-map-和-implode-方法",children:[]}],filePathRelative:"collections/demo/markdown_format.md",git:{updatedTime:161707193e4,contributors:[]}}},1090:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>d});var e=a(6252);const p=(0,e.uE)('<h1 id="格式化-markdown-数据列表"><a class="header-anchor" href="#格式化-markdown-数据列表">#</a> 格式化 Markdown 数据列表</h1><p>有如下数据：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$messages</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token string single-quoted-string">&#39;Should be working now for all Providers.&#39;</span><span class="token punctuation">,</span>\n  <span class="token string single-quoted-string">&#39;If you see one where spaces are in the title let me know.&#39;</span><span class="token punctuation">,</span>\n  <span class="token string single-quoted-string">&#39;But there should not have blank in the key of config or .env file.&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>格式化成 <code>markdown</code> 的 <code>li</code> 格式数据，如下：</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token list punctuation">-</span> Should be working now for all Providers. \\n\n<span class="token list punctuation">-</span> If you see one where spaces are in the title let me know. \\n\n<span class="token list punctuation">-</span> But there should not have blank in the key of config or .env file.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="使用-foreach-方法"><a class="header-anchor" href="#使用-foreach-方法">#</a> 使用 foreach 方法</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$messages</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token string single-quoted-string">&#39;Should be working now for all Providers.&#39;</span><span class="token punctuation">,</span>\n  <span class="token string single-quoted-string">&#39;If you see one where spaces are in the title let me know.&#39;</span><span class="token punctuation">,</span>\n  <span class="token string single-quoted-string">&#39;But there should not have blank in the key of config or .env file.&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token variable">$comment</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39; - &#39;</span> <span class="token operator">.</span> <span class="token function">array_shift</span><span class="token punctuation">(</span><span class="token variable">$messages</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$messages</span> <span class="token keyword">as</span> <span class="token variable">$message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token variable">$comment</span> <span class="token operator">.=</span> <span class="token string double-quoted-string">&quot;\\n -  ${message}&quot;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">dd</span><span class="token punctuation">(</span><span class="token variable">$comment</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token doc-comment comment">/**\n&quot;&quot;&quot;\n - Should be working now for all Providers.\\n\n -  If you see one where spaces are in the title let me know.\\n\n -  But there should not have blank in the key of config or .env file.\n&quot;&quot;&quot;\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>',7),t={id:"使用-map-和-implode-方法"},o=(0,e.Wm)("a",{class:"header-anchor",href:"#使用-map-和-implode-方法"},"#",-1),l=(0,e.Uk)(" 使用 "),r={href:"/collections/map.md",target:"_blank",rel:"noopener noreferrer"},c=(0,e.Uk)("map"),i=(0,e.Uk)(" 和 "),u={href:"/collections/implode.md",target:"_blank",rel:"noopener noreferrer"},k=(0,e.Uk)("implode"),b=(0,e.Uk)(" 方法"),m=(0,e.uE)('<div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$messages</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token string single-quoted-string">&#39;Should be working now for all Providers.&#39;</span><span class="token punctuation">,</span>\n  <span class="token string single-quoted-string">&#39;If you see one where spaces are in the title let me know.&#39;</span><span class="token punctuation">,</span>\n  <span class="token string single-quoted-string">&#39;But there should not have blank in the key of config or .env file.&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token variable">$comment</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token variable">$messages</span><span class="token punctuation">)</span>\n  <span class="token operator">-&gt;</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;- &#39;</span> <span class="token operator">.</span> <span class="token variable">$message</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token operator">-&gt;</span><span class="token function">implode</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">dd</span><span class="token punctuation">(</span><span class="token variable">$comment</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token doc-comment comment">/**\n&quot;&quot;&quot;\n- Should be working now for all Providers.\\n\n- If you see one where spaces are in the title let me know.\\n\n- But there should not have blank in the key of config or .env file.\n&quot;&quot;&quot;\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>',1),d={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[p,(0,e.Wm)("h2",t,[o,l,(0,e.Wm)("a",r,[c,(0,e.Wm)(a)]),i,(0,e.Wm)("a",u,[k,(0,e.Wm)(a)]),b]),m],64)}}}}]);