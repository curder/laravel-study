import{e as n}from"./app.fd0b7bfa.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="partition" tabindex="-1"><a class="header-anchor" href="#partition" aria-hidden="true">#</a> partition</h1><p>\u53EF\u4EE5\u548C PHP \u4E2D\u7684 <code>list()</code> \u65B9\u6CD5\u7ED3\u5408\u4F7F\u7528\uFF0C\u6765\u5206\u5F00\u901A\u8FC7\u6307\u5B9A\u6761\u4EF6\u7684\u5143\u7D20\u4EE5\u53CA\u90A3\u4E9B\u4E0D\u901A\u8FC7\u6307\u5B9A\u6761\u4EF6\u7684\u5143\u7D20\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">list</span><span class="token punctuation">(</span><span class="token variable">$underThree</span><span class="token punctuation">,</span> <span class="token variable">$equalOrAboveThree</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">partition</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token variable">$i</span> <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$underThree</span><span class="token operator">-&gt;</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$equalOrAboveThree</span><span class="token operator">-&gt;</span><span class="token function">dd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
array:2 [
  0 =&gt; 1
  1 =&gt; 2
]

array:4 [
  2 =&gt; 3
  3 =&gt; 4
  4 =&gt; 5
  5 =&gt; 6
]
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,3);function e(t,c){return p}var r=s(a,[["render",e]]);export{r as default};
