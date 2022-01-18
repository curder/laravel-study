import{r as p,o as e,c as t,b as s,a as c,F as o,e as l,d as n}from"./app.49fe9016.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=l(`<h1 id="dump" tabindex="-1"><a class="header-anchor" href="#dump" aria-hidden="true">#</a> dump</h1><p>\u6253\u5370\u96C6\u5408\u7684\u5143\u7D20\uFF0C\u5728\u8C03\u8BD5\u65F6\u5F88\u6709\u5E2E\u52A9\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token operator">-&gt;</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token operator">-&gt;</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u6253\u5370\u8F93\u51FA</span>
  <span class="token operator">-&gt;</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">fn</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token variable">$value</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span>
  <span class="token operator">-&gt;</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token operator">-&gt;</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u6253\u5370\u8F93\u51FA</span>
  <span class="token operator">-&gt;</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
array:4 [
  3 =&gt; 4
  2 =&gt; 3
  1 =&gt; 2
  0 =&gt; 1
]
array:4 [
  0 =&gt; 10
  1 =&gt; 20
  2 =&gt; 30
  3 =&gt; 40
]
10
*/</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5728\u94FE\u5F0F\u8C03\u7528\u96C6\u5408\u65B9\u6CD5\u7684\u65F6\u5019\u4F7F\u7528<code>dump</code>\u6253\u5370\u51FA\u5F53\u524D\u7684\u96C6\u5408\u72B6\u6001\uFF0C\u4EE5\u4FBF\u67E5\u770B\u96C6\u5408\u72B6\u6001\u3002</p>`,4),m=n("\u5982\u679C\u9700\u8981\u5728\u67D0\u5904\u505C\u6B62\u94FE\u5F0F\u8C03\u7528\uFF0C\u5EFA\u8BAE\u4F7F\u7528 "),b={href:"/collections/dd.md",target:"_blank",rel:"noopener noreferrer"},k=n("dd"),d=n(" \u65B9\u6CD5\u3002");function _(g,f){const a=p("ExternalLinkIcon");return e(),t(o,null,[i,s("p",null,[m,s("a",b,[k,c(a)]),d])],64)}var x=r(u,[["render",_]]);export{x as default};
