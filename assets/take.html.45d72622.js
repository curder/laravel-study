import{r as e,o as t,c as l,b as n,a as p,F as c,e as o,d as s}from"./app.3a0f108e.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const r={},i=o(`<h1 id="take" tabindex="-1"><a class="header-anchor" href="#take" aria-hidden="true">#</a> take</h1><p><strong>\u4E0D\u6539\u53D8\u539F\u96C6\u5408</strong>\uFF0C\u8FD4\u56DE\u7ED9\u5B9A\u6570\u91CF\u9879\u76EE\u7684\u65B0\u96C6\u5408\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// \u5F53\u4F20\u9012\u7ED9\u5B9A\u6570\u91CF\u7684\u503C\u65F6\uFF0C\u83B7\u53D6\u5230\u65B0\u96C6\u5408\u4E3A\u7ED9\u5B9A\u6570\u91CF\u7684\u5185\u5BB9\u3002</span>
<span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1211
     all: [
       1,
       2,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// \u5F53\u7ED9\u5B9A\u7684\u6570\u91CF\u503C\u8D85\u51FA\u539F\u96C6\u5408\u6570\u91CF\u65F6\uFF0C\u8FD4\u56DE\u6240\u6709\u539F\u96C6\u5408\u5185\u5BB9\u3002</span>
<span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1211
     all: [
       1,
       2,
       3,
       4,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// \u4F20\u5165\u8D1F\u6574\u6570\u4ECE\u96C6\u5408\u672B\u5C3E\u5F00\u59CB\u83B7\u53D6\u6307\u5B9A\u6570\u91CF\u7684\u9879\u76EE</span>
<span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1212
     all: [
       2 =&gt; 3,
       3 =&gt; 4,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><blockquote><p><strong>\u6CE8\u610F\uFF1A</strong> \u89C2\u5BDF\u8F93\u51FA\u7ED3\u679C\u4F1A\u53D1\u73B0\uFF0C\u4F20\u9012\u8D1F\u6574\u6570\u65F6\uFF0C\u8FD4\u56DE\u7684\u65B0\u96C6\u5408\u4F1A\u4FDD\u7559\u539F\u96C6\u5408\u7684key\u3002</p></blockquote><h2 id="\u4E0D\u6539\u53D8\u539F\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u6539\u53D8\u539F\u96C6\u5408" aria-hidden="true">#</a> \u4E0D\u6539\u53D8\u539F\u96C6\u5408</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$newCollection</span> <span class="token operator">=</span> <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$newCollection</span><span class="token operator">-&gt;</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">dd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
array:2 [
  2 =&gt; 3
  3 =&gt; 4
]
array:4 [
  0 =&gt; 1
  1 =&gt; 2
  2 =&gt; 3
  3 =&gt; 4
]
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><hr>`,9),b=n("code",null,"take(1)",-1),m=s(" \u9ED8\u8BA4\u8FD4\u56DE\u7684\u662F\u96C6\u5408\uFF0C\u4E14\u5305\u542B\u539F\u96C6\u5408\u4E2D\u7B2C\u4E00\u4E2A\u503C\uFF0C\u5982\u679C\u9700\u8981\u76F4\u63A5\u83B7\u53D6\u7B2C\u4E00\u4E2A\u503C\u7684\u8BDD\u53EF\u4EE5\u4F7F\u7528 "),k={href:"/collections/first.md",target:"_blank",rel:"noopener noreferrer"},d=s("first"),g=s(" \u65B9\u6CD5\u3002"),h=n("code",null,"take(-1)",-1),_=s(" \u9ED8\u8BA4\u8FD4\u56DE\u7684\u662F\u96C6\u5408\uFF0C\u4E14\u5305\u542B\u539F\u96C6\u5408\u4E2D\u6700\u540E\u7684\u4E00\u4E2A\u503C\uFF0C\u5982\u679C\u9700\u8981\u76F4\u63A5\u83B7\u53D6\u6700\u540E\u4E00\u4E2A\u503C\u7684\u8BDD\u53EF\u4EE5\u4F7F\u7528 "),f={href:"/collections/last.md",target:"_blank",rel:"noopener noreferrer"},v=s("last"),x=s(" \u65B9\u6CD5\u3002");function C(I,$){const a=e("ExternalLinkIcon");return t(),l(c,null,[i,n("ul",null,[n("li",null,[n("p",null,[b,m,n("a",k,[d,p(a)]),g])]),n("li",null,[n("p",null,[h,_,n("a",f,[v,p(a)]),x])])])],64)}var V=u(r,[["render",C]]);export{V as default};
