import{e as n}from"./app.dad6a76d.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="all" tabindex="-1"><a class="header-anchor" href="#all" aria-hidden="true">#</a> all</h1><p>\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u8BE5\u96C6\u5408\u8868\u793A\u7684\u5E95\u5C42<strong>\u6570\u7EC4</strong>\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2, 3, 4]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4E0A\u9762 <code>all</code> \u65B9\u6CD5\u7684\u8C03\u7528\u7C7B\u4F3C\u4E8E <code>toArray</code></p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2, 3, 4]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u4E0E-toarray-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u4E0E-toarray-\u7684\u533A\u522B" aria-hidden="true">#</a> \u4E0E toArray \u7684\u533A\u522B</h2><p>all \u65B9\u6CD5\u4E0E toArray \u65B9\u6CD5\u7684\u533A\u522B\u5728\u4E8E\u5D4C\u5957\u96C6\u5408\u5728\u8C03\u7528\u65B9\u6CD5\u540E\u751F\u6210\u7684\u7ED3\u679C\u4E0D\u540C\u3002</p><h3 id="\u5D4C\u5957\u96C6\u5408-all" tabindex="-1"><a class="header-anchor" href="#\u5D4C\u5957\u96C6\u5408-all" aria-hidden="true">#</a> \u5D4C\u5957\u96C6\u5408 all</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
[
 Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1092
   all: [
     1,
     2,
     3,
     4,
   ],
 <span class="token punctuation">}</span>,
 Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1091
   all: [
     1,
     2,
     3,
     4,
   ],
 <span class="token punctuation">}</span>,
]
*/</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u4F7F\u7528 all \u65B9\u6CD5\u53EA\u4F1A\u5C06\u7B2C\u4E00\u5C42\u7684\u683C\u5F0F\u5316\u6570\u7EC4\u3002</p><h3 id="\u5D4C\u5957\u96C6\u5408-toarray" tabindex="-1"><a class="header-anchor" href="#\u5D4C\u5957\u96C6\u5408-toarray" aria-hidden="true">#</a> \u5D4C\u5957\u96C6\u5408 toArray</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
[
 [
   1,
   2,
   3,
   4,
 ],
 [
   1,
   2,
   3,
   4,
 ],
]
*/</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u4F7F\u7528 toArray \u65B9\u6CD5\u4F1A\u5C06\u6240\u6709\u96C6\u5408\u90FD\u683C\u5F0F\u5316\u6210\u6570\u7EC4\u3002</p><p>\u540C\u65F6\u5BF9\u4E8E\u591A\u5C42\u7EA7\u4E5F\u662F\u6709\u6548\u7684</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
[
 [
   [
     1,
     2,
     3,
     4,
   ],
 ],
 [
   1,
   2,
   3,
   4,
 ],
]
*/</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,15);function e(t,c){return p}var u=s(a,[["render",e]]);export{u as default};
