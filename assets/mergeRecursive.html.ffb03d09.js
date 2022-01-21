import{e as n}from"./app.c8572b8c.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="mergerecursive" tabindex="-1"><a class="header-anchor" href="#mergerecursive" aria-hidden="true">#</a> mergeRecursive</h1><p>\u5C06\u7ED9\u5B9A\u7684\u6570\u7EC4\u6216\u96C6\u5408\u4E0E\u539F\u59CB\u96C6\u5408\u9012\u5F52\u5408\u5E76\u3002</p><p>\u5982\u679C\u7ED9\u5B9A\u9879\u4E2D\u7684\u5B57\u7B26\u4E32\u952E\u4E0E\u539F\u59CB\u96C6\u5408\u4E2D\u7684\u5B57\u7B26\u4E32\u952E\u5339\u914D\uFF0C\u5219\u8FD9\u4E9B\u952E\u7684\u503C\u5C06\u5408\u5E76\u5230\u4E00\u4E2A\u6570\u7EC4\u4E2D\uFF0C\u7136\u540E\u9012\u5F52\u5B8C\u6210\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">mergeRecursive</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token string single-quoted-string">&#39;product_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token string single-quoted-string">&#39;discount&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1087
     all: [
       &quot;product_id&quot; =&gt; [
         1,
         2,
       ],
       &quot;price&quot; =&gt; [
         100,
         200,
       ],
       &quot;discount&quot; =&gt; false,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,4);function p(t,c){return e}var l=s(a,[["render",p]]);export{l as default};
