import{e as n}from"./app.6b4d546f.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="union" tabindex="-1"><a class="header-anchor" href="#union" aria-hidden="true">#</a> union</h1><p>\u5C06\u7ED9\u5B9A\u7684\u6570\u7EC4\u6DFB\u52A0\u5230\u96C6\u5408\u4E2D\u3002\u5982\u679C\u7ED9\u5B9A\u7684\u6570\u7EC4\u4E2D\u542B\u6709\u4E0E\u539F\u96C6\u5408\u4E00\u6837\u7684\u952E\uFF0C\u5219\u539F\u96C6\u5408\u7684\u503C\u4E0D\u4F1A\u88AB\u6539\u53D8\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">union</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1087
     all: [
       1 =&gt; [
         &quot;a&quot;,
       ],
       2 =&gt; [
         &quot;b&quot;,
       ],
       3 =&gt; [
         &quot;c&quot;,
       ],
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,3);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};
