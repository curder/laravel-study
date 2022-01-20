import{e as n}from"./app.fd0b7bfa.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="combine" tabindex="-1"><a class="header-anchor" href="#combine" aria-hidden="true">#</a> combine</h1><p>\u5C06\u4E00\u4E2A\u96C6\u5408\u7684\u503C\u4F5C\u4E3A\u300C\u952E\u300D\uFF0C\u518D\u5C06\u53E6\u4E00\u4E2A\u6570\u7EC4\u6216\u8005\u96C6\u5408\u7684\u503C\u4F5C\u4E3A\u300C\u503C\u300D\u5408\u5E76\u6210\u4E00\u4E2A\u96C6\u5408\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;column1&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;column2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">combine</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;value1&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;value2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1083
     all: [
       &quot;column1&quot; =&gt; &quot;value1&quot;,
       &quot;column2&quot; =&gt; &quot;value2&quot;,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;column1&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;column2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">combine</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;value1&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">123</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;value2&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">456</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1089
     all: [
       &quot;column1&quot; =&gt; [
         &quot;value1&quot; =&gt; 123,
       ],
       &quot;column2&quot; =&gt; [
         &quot;value2&quot; =&gt; 456,
       ],
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,4);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};
