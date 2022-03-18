import{r as t,o as p,c as e,b as s,a as o,F as l,e as c,d as n}from"./app.27b941c9.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=c(`<h1 id="flatten" tabindex="-1"><a class="header-anchor" href="#flatten" aria-hidden="true">#</a> flatten</h1><p>\u5C06\u591A\u7EF4\u96C6\u5408\u8F6C\u4E3A\u4E00\u7EF4\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;taylor&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;languages&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;php&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;javascript&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">flatten</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1079
     all: [
       &quot;taylor&quot;,
       &quot;php&quot;,
       &quot;javascript&quot;,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u8FD8\u53EF\u4EE5\u9009\u62E9\u6027\u5730\u4F20\u5165\u300C\u6DF1\u5EA6\u300D\u53C2\u6570\uFF1A</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token string single-quoted-string">&#39;Apple&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;iPhone 6S&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;brand&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Apple&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;Samsung&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Galaxy S7&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;brand&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Samsung&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">flatten</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1093
     all: [
       [
         &quot;name&quot; =&gt; &quot;iPhone 6S&quot;,
         &quot;brand&quot; =&gt; &quot;Apple&quot;,
       ],
       [
         &quot;name&quot; =&gt; &quot;Galaxy S7&quot;,
         &quot;brand&quot; =&gt; &quot;Samsung&quot;,
       ],
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u5728\u8FD9\u4E2A\u4F8B\u5B50\u91CC\uFF0C\u8C03\u7528 flatten \u65B9\u6CD5\u65F6\u4E0D\u4F20\u5165\u6DF1\u5EA6\u53C2\u6570\u7684\u8BDD\u4E5F\u4F1A\u5C06\u5D4C\u5957\u6570\u7EC4\u8F6C\u6210\u4E00\u7EF4\u7684\uFF0C\u7136\u540E\u8FD4\u56DE <code>[&#39;iPhone 6S&#39;, &#39;Apple&#39;, &#39;Galaxy S7&#39;, &#39;Samsung&#39;]</code>\uFF0C\u4F20\u5165\u6DF1\u5EA6\u53C2\u6570\u80FD\u9650\u5236\u8BBE\u7F6E\u8FD4\u56DE\u6570\u7EC4\u7684\u5C42\u6570\u3002</p>`,6),g=n("\u6709\u65F6\u5019\u6211\u4EEC\u9700\u8981\u5BF9\u6570\u636E\u8FDB\u884C\u5206\u7EC4\u53EF\u4EE5\u4F7F\u7528 "),b={href:"/collections/groupBy.md",target:"_blank",rel:"noopener noreferrer"},k=n("groupBy"),m=n(" \u65B9\u6CD5\u3002");function d(q,h){const a=t("ExternalLinkIcon");return p(),e(l,null,[i,s("p",null,[g,s("a",b,[k,o(a)]),m])],64)}var v=r(u,[["render",d]]);export{v as default};
