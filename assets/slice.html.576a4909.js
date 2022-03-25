import{r as a,o as p,c as e,b as t,a as c,w as l,F as o,e as u,d as n}from"./app.63476ef6.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},b=u(`<h1 id="slice" tabindex="-1"><a class="header-anchor" href="#slice" aria-hidden="true">#</a> slice</h1><p>\u8FD4\u56DE\u96C6\u5408\u4E2D\u7ED9\u5B9A\u503C\u540E\u9762\u7684\u90E8\u5206\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1087
     all: [
       4 =&gt; 5,
       5 =&gt; 6,
       6 =&gt; 7,
       7 =&gt; 8,
       8 =&gt; 9,
       9 =&gt; 10,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u5982\u679C\u60F3\u9650\u5236\u8FD4\u56DE\u5185\u5BB9\u7684\u5927\u5C0F\uFF0C\u5C31\u5C06\u671F\u671B\u7684\u5927\u5C0F\u4F5C\u4E3A\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4F20\u9012\u7ED9\u65B9\u6CD5\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1089
     all: [
       4 =&gt; 5,
       5 =&gt; 6,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,5),m=n("\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u8FD4\u56DE\u7684\u5185\u5BB9\u5C06\u4F1A\u4FDD\u7559\u539F\u59CB\u952E\u3002\u5047\u5982\u4E0D\u9700\u8981\u4FDD\u7559\u539F\u59CB\u7684\u952E\uFF0C\u53EF\u4EE5\u4F7F\u7528 "),k=n("values"),d=n(" \u65B9\u6CD5\u6765\u91CD\u65B0\u5EFA\u7ACB\u7D22\u5F15\u3002");function h(g,_){const s=a("RouterLink");return p(),e(o,null,[b,t("p",null,[m,c(s,{to:"/collections/values.html"},{default:l(()=>[k]),_:1}),d])],64)}var x=r(i,[["render",h]]);export{x as default};
