import{e as n}from"./app.9d6e082c.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="put" tabindex="-1"><a class="header-anchor" href="#put" aria-hidden="true">#</a> put</h1><p>\u5728\u96C6\u5408\u5185\u8BBE\u7F6E\u7ED9\u5B9A\u7684\u952E\u503C\u5BF9\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Desk&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;price&#39;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;product_id&#39; =&gt; 1, &#39;name&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 100]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,3);function t(e,o){return p}var r=s(a,[["render",t]]);export{r as default};
