import{e as n}from"./app.ec5e6153.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="merge" tabindex="-1"><a class="header-anchor" href="#merge" aria-hidden="true">#</a> merge</h1><p>\u5C06\u7ED9\u5B9A\u6570\u7EC4\u6216\u96C6\u5408\u5408\u5E76\u5230\u539F\u96C6\u5408\u3002</p><p>\u5982\u679C\u7ED9\u5B9A\u9879\u76EE\u4E2D\u7684\u5B57\u7B26\u4E32\u952E\u4E0E\u539F\u96C6\u5408\u4E2D\u7684\u5B57\u7B26\u4E32\u952E\u5339\u914D\uFF0C\u7ED9\u5B9A\u7684\u9879\u76EE\u7684\u503C\u5C06\u4F1A\u8986\u76D6\u539F\u96C6\u5408\u4E2D\u7684\u503C\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">merge</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;discount&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1084
     all: [
       &quot;product_id&quot; =&gt; 1,
       &quot;price&quot; =&gt; 200,
       &quot;discount&quot; =&gt; false,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u5982\u679C\u7ED9\u5B9A\u7684\u9879\u76EE\u7684\u952E\u662F\u6570\u5B57\uFF0C\u8FD9\u4E9B\u503C\u5C06\u88AB\u8FFD\u52A0\u5230\u96C6\u5408\u7684\u672B\u5C3E\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;Desk&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Chair&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">merge</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;Bookcase&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Door&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1079
     all: [
       &quot;Desk&quot;,
       &quot;Chair&quot;,
       &quot;Bookcase&quot;,
       &quot;Door&quot;,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,6);function e(t,o){return p}var u=s(a,[["render",e]]);export{u as default};
