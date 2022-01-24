import{e as n}from"./app.ac22b6cd.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="flip" tabindex="-1"><a class="header-anchor" href="#flip" aria-hidden="true">#</a> flip</h1><p>\u5C06\u96C6\u5408\u4E2D\u7684\u952E\u548C\u5BF9\u5E94\u7684\u6570\u503C\u8FDB\u884C\u4E92\u6362\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;taylor&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;framework&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;laravel&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">flip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1075
     all: [
       &quot;taylor&quot; =&gt; &quot;name&quot;,
       &quot;laravel&quot; =&gt; &quot;framework&quot;,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,3);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
