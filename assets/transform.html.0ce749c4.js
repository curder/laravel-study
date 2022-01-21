import{r as e,o as t,c,b as n,a as o,F as l,e as a,d as s}from"./app.a6e0cc5d.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=a(`<h1 id="transform" tabindex="-1"><a class="header-anchor" href="#transform" aria-hidden="true">#</a> transform</h1><p>\u8FED\u4EE3\u96C6\u5408\u5E76\u5BF9\u96C6\u5408\u5185\u7684\u6BCF\u4E2A\u9879\u76EE\u8C03\u7528\u7ED9\u5B9A\u7684\u56DE\u8C03\uFF0C\u800C\u96C6\u5408\u7684\u5185\u5BB9\u4E5F\u4F1A\u88AB\u56DE\u8C03\u8FD4\u56DE\u7684\u503C\u53D6\u4EE3\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">transform</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">,</span> <span class="token variable">$key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token variable">$item</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1086
     all: [
       2,
       4,
       6,
       8,
       10,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,3),b=s("\u4E0E\u5927\u591A\u6570\u96C6\u5408\u7684\u65B9\u6CD5\u4E0D\u540C\uFF0C"),k=n("code",null,"transform",-1),m=s(" \u4F1A\u4FEE\u6539\u96C6\u5408\u672C\u8EAB\u3002 \u5982\u679C\u60F3\u521B\u5EFA\u65B0\u96C6\u5408\uFF0C\u5E94\u8BE5\u4F7F\u7528 "),d={href:"/collections/map.md",target:"_blank",rel:"noopener noreferrer"},h=s("map"),_=s(" \u65B9\u6CD5\u3002"),f=a(`<h2 id="\u6539\u53D8\u539F\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#\u6539\u53D8\u539F\u96C6\u5408" aria-hidden="true">#</a> \u6539\u53D8\u539F\u96C6\u5408</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$newCollection</span> <span class="token operator">=</span> <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">transform</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">,</span> <span class="token variable">$key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token variable">$item</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$newCollection</span><span class="token operator">-&gt;</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">dd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
array:5 [
  0 =&gt; 2
  1 =&gt; 4
  2 =&gt; 6
  3 =&gt; 8
  4 =&gt; 10
]

array:5 [
  0 =&gt; 2
  1 =&gt; 4
  2 =&gt; 6
  3 =&gt; 8
  4 =&gt; 10
]
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,2);function g(v,x){const p=e("ExternalLinkIcon");return t(),c(l,null,[i,n("blockquote",null,[n("p",null,[b,k,m,n("a",d,[h,o(p)]),_])]),f],64)}var w=r(u,[["render",g]]);export{w as default};
