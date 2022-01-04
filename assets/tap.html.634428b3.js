import{e as n}from"./app.9d6e082c.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="tap" tabindex="-1"><a class="header-anchor" href="#tap" aria-hidden="true">#</a> tap</h1><p>\u5C06\u96C6\u5408\u4F20\u9012\u7ED9\u56DE\u8C03\uFF0C\u5728\u7279\u5B9A\u70B9\u300Ctap\u300D\u96C6\u5408\u3002\u6B64\u4E3E\u80FD\u5BF9\u96C6\u5408\u4E2D\u7684\u9879\u76EE\u6267\u884C\u67D0\u4E9B\u64CD\u4F5C\uFF0C\u800C\u4E0D\u5F71\u54CD\u96C6\u5408\u672C\u8EAB\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token operator">-&gt;</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token operator">-&gt;</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$collection</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u8FD9\u91CC\u7684 collection \u662F\u62F7\u8D1D\u800C\u6765\uFF0C\u4E0D\u662F\u5F15\u7528</span>
    <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token function">dump</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;In Tap: &#39;</span> <span class="token operator">.</span> <span class="token variable">$item</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">dd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
&quot;In Tap: 3&quot;
&quot;In Tap: 2&quot;
&quot;In Tap: 1&quot;
 
array:3 [
  2 =&gt; 3
  1 =&gt; 2
  0 =&gt; 1
] 
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>`,3);function t(e,c){return p}var u=s(a,[["render",t]]);export{u as default};
