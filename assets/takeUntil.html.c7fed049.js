import{e as n}from"./app.fc4a4f52.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="takeuntil" tabindex="-1"><a class="header-anchor" href="#takeuntil" aria-hidden="true">#</a> takeUntil</h1><p>\u5C06\u8FD4\u56DE\u96C6\u5408\u4E2D\u7684\u9879\u76EE\uFF0C\u76F4\u5230\u7ED9\u5B9A\u7684\u56DE\u8C03\u8FD4\u56DE <code>true</code>\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">takeUntil</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token variable">$item</span> <span class="token operator">&gt;=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1080
     all: [
       1,
       2,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u4E5F\u53EF\u4EE5\u5C06\u7B80\u5355\u7684\u503C\u4F20\u9012\u7ED9 <code>takeUntil</code> \u65B9\u6CD5\u4EE5\u83B7\u53D6\u9879\u76EE\uFF0C\u76F4\u5230\u627E\u5230\u7ED9\u5B9A\u7684\u503C\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">takeUntil</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1075
     all: [
       1,
       2,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote><p><strong>\u6CE8\u610F\uFF1A</strong> \u5982\u679C\u627E\u4E0D\u5230\u7ED9\u5B9A\u7684\u503C\u6216\u56DE\u8C03\u4ECE\u672A\u8FD4\u56DE <code>true</code> \uFF0C\u5219 <code>takeUntil</code> \u65B9\u6CD5\u5C06\u8FD4\u56DE\u96C6\u5408\u4E2D\u7684\u6240\u6709\u9879\u76EE\u3002</p></blockquote>`,6);function e(t,c){return p}var u=s(a,[["render",e]]);export{u as default};
