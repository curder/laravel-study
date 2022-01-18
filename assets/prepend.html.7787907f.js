import{e as n}from"./app.fa5b2f7f.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="prepend" tabindex="-1"><a class="header-anchor" href="#prepend" aria-hidden="true">#</a> prepend</h1><p>\u5C06\u7ED9\u5B9A\u7684\u503C\u6DFB\u52A0\u5230\u96C6\u5408\u7684\u5F00\u5934\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">prepend</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
array:6 [
  0 =&gt; 0
  1 =&gt; 1
  2 =&gt; 2
  3 =&gt; 3
  4 =&gt; 4
  5 =&gt; 5
]

=&gt; [
     0,
     1,
     2,
     3,
     4,
     5,
   ]
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u4E5F\u53EF\u4EE5\u4F20\u9012\u7B2C\u4E8C\u4E2A\u53C2\u6570\u6765\u8BBE\u7F6E\u524D\u7F6E\u9879\u7684\u952E</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;one&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;two&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">prepend</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;zero&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;zero&#39; =&gt; 0, &#39;one&#39; =&gt; 1, &#39;two&#39; =&gt; 2]</span>

<span class="token doc-comment comment">/**
array:3 [
  &quot;zero&quot; =&gt; 0
  &quot;one&quot; =&gt; 1
  &quot;two&quot; =&gt; 2
]

=&gt; [
     &quot;zero&quot; =&gt; 0,
     &quot;one&quot; =&gt; 1,
     &quot;two&quot; =&gt; 2,
   ]
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,5);function e(t,l){return p}var r=s(a,[["render",e]]);export{r as default};
