import{e as n}from"./app.f1812e81.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="forget" tabindex="-1"><a class="header-anchor" href="#forget" aria-hidden="true">#</a> forget</h1><p>\u901A\u8FC7\u7ED9\u5B9A\u7684\u952E\u6765\u79FB\u9664\u6389\u96C6\u5408\u4E2D\u5BF9\u5E94\u7684\u5185\u5BB9\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;taylor&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;framework&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;laravel&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">forget</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1078
     all: [
       &quot;framework&quot; =&gt; &quot;laravel&quot;,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote><p>\u4E0E\u5927\u591A\u6570\u96C6\u5408\u7684\u65B9\u6CD5\u4E0D\u540C\uFF0C<code>forget</code> \u4E0D\u4F1A\u8FD4\u56DE\u4FEE\u6539\u8FC7\u540E\u7684\u65B0\u96C6\u5408\uFF1B\u5B83\u4F1A\u76F4\u63A5\u4FEE\u6539\u539F\u96C6\u5408\u3002</p></blockquote><h2 id="\u6539\u53D8\u539F\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#\u6539\u53D8\u539F\u96C6\u5408" aria-hidden="true">#</a> \u6539\u53D8\u539F\u96C6\u5408</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;taylor&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;framework&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;laravel&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$newCollection</span> <span class="token operator">=</span> <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">forget</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$newCollection</span><span class="token operator">-&gt;</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">dd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
array:1 [
  &quot;framework&quot; =&gt; &quot;laravel&quot;
]
array:1 [
  &quot;framework&quot; =&gt; &quot;laravel&quot;
]
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,6);function p(t,o){return e}var r=s(a,[["render",p]]);export{r as default};
