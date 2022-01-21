import{e as n}from"./app.c8572b8c.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="takewhile" tabindex="-1"><a class="header-anchor" href="#takewhile" aria-hidden="true">#</a> takeWhile</h1><p>\u8FD4\u56DE\u96C6\u5408\u4E2D\u7684\u9879\u76EE\uFF0C\u76F4\u5230\u7ED9\u5B9A\u7684\u56DE\u8C03\u8FD4\u56DE <code>false</code> \u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">takeWhile</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token variable">$item</span> <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1080
     all: [
       1,
       2,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u5982\u679C\u56DE\u8C03\u4ECE\u4E0D\u8FD4\u56DE <code>false</code>\uFF0C\u5219 <code>takeWhile</code> \u65B9\u6CD5\u5C06\u8FD4\u56DE\u96C6\u5408\u4E2D\u7684\u6240\u6709\u9879\u76EE\u3002</p>`,4);function p(t,c){return e}var u=s(a,[["render",p]]);export{u as default};
