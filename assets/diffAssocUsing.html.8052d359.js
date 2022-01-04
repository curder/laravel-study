import{e as n}from"./app.9d6e082c.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="diffassocusing" tabindex="-1"><a class="header-anchor" href="#diffassocusing" aria-hidden="true">#</a> diffAssocUsing</h1><p>\u4F7F\u7528\u56DE\u8C03\u83B7\u53D6\u96C6\u5408\u4E2D\u952E\u548C\u503C\u4E0D\u5B58\u5728\u7684\u9879\u76EE\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">10</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token number">25</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;bananas&#39;</span><span class="token punctuation">,</span> <span class="token number">50</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;coconuts&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">diffAssocUsing</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;.1&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;.25&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;pears&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">,</span> <span class="token variable">$b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u8FD4\u56DE0\u6216\u8005-1\uFF0C\u5F53\u4E3A-1\u65F6\u4FDD\u7559\uFF0C\u5F53\u4E3A0\u65F6\u79FB\u9664</span>
  <span class="token keyword">return</span> <span class="token variable">$a</span> <span class="token operator">===</span> <span class="token punctuation">(</span><span class="token keyword type-casting">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token variable">$b</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1106
     all: [
       25 =&gt; &quot;bananas&quot;,
       50 =&gt; &quot;coconuts&quot;,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>diffAssocUsing \u5173\u6CE8 key \u548C value \u662F\u5426\u540C\u65F6\u5339\u914D\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;123A-G&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;456A-G&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">25</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">diffAssocUsing</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;123AG&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">,</span> <span class="token variable">$b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token variable">$code</span> <span class="token operator">=</span> <span class="token function">str_replace</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;-&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token variable">$a</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token variable">$code</span> <span class="token operator">===</span> <span class="token variable">$b</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1108
     all: [
       &quot;456A-G&quot; =&gt; 25,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,5);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};
