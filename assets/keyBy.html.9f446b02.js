import{e as n}from"./app.9256b975.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="keyby" tabindex="-1"><a class="header-anchor" href="#keyby" aria-hidden="true">#</a> keyBy</h1><p>\u4EE5\u7ED9\u5B9A\u7684\u952E\u4F5C\u4E3A\u96C6\u5408\u7684\u952E\u3002\u5982\u679C\u591A\u4E2A\u9879\u76EE\u5177\u6709\u76F8\u540C\u7684\u952E\uFF0C\u5219\u53EA\u6709\u6700\u540E\u4E00\u4E2A\u9879\u76EE\u4F1A\u663E\u793A\u5728\u65B0\u96C6\u5408\u4E2D\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;prod-100&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;desk&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;prod-200&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;chair&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">keyBy</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;product_id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1086
     all: [
       &quot;prod-100&quot; =&gt; [
         &quot;product_id&quot; =&gt; &quot;prod-100&quot;,
         &quot;name&quot; =&gt; &quot;desk&quot;,
       ],
       &quot;prod-200&quot; =&gt; [
         &quot;product_id&quot; =&gt; &quot;prod-200&quot;,
         &quot;name&quot; =&gt; &quot;chair&quot;,
       ],
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u4E5F\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u56DE\u8C03\u65B9\u6CD5\uFF0C\u56DE\u8C03\u8FD4\u56DE\u7684\u503C\u4F1A\u4F5C\u4E3A\u8BE5\u96C6\u5408\u7684\u952E</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;prod-100&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;desk&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;prod-200&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;chair&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">keyBy</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">strtoupper</span><span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product_id&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1095
     all: [
       &quot;PROD-100&quot; =&gt; [
         &quot;product_id&quot; =&gt; &quot;prod-100&quot;,
         &quot;name&quot; =&gt; &quot;desk&quot;,
       ],
       &quot;PROD-200&quot; =&gt; [
         &quot;product_id&quot; =&gt; &quot;prod-200&quot;,
         &quot;name&quot; =&gt; &quot;chair&quot;,
       ],
     ],
   <span class="token punctuation">}</span> 
*/</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,5);function p(e,o){return t}var l=s(a,[["render",p]]);export{l as default};
