import{e as n}from"./app.7b82e5c9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="skipuntil" tabindex="-1"><a class="header-anchor" href="#skipuntil" aria-hidden="true">#</a> skipUntil</h1><p>\u8DF3\u8FC7\u96C6\u5408\u4E2D\u7684\u9879\u76EE\uFF0C\u76F4\u5230\u7ED9\u5B9A\u7684\u56DE\u8C03\u8FD4\u56DE <code>true</code> \uFF0C\u7136\u540E\u5C06\u96C6\u5408\u4E2D\u7684\u5176\u4F59\u9879\u76EE\u4F5C\u4E3A\u65B0\u96C6\u5408\u5B9E\u4F8B\u8FD4\u56DE\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">skipUntil</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token variable">$item</span> <span class="token operator">&gt;=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1080
     all: [
       2 =&gt; 3,
       3 =&gt; 4,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u4E5F\u53EF\u4EE5\u5C06\u7B80\u5355\u7684\u503C\u4F20\u9012\u7ED9 <code>skipUntil</code> \u65B9\u6CD5\u4EE5\u8DF3\u8FC7\u6240\u6709\u9879\u76EE\uFF0C\u76F4\u5230\u627E\u5230\u7ED9\u5B9A\u7684\u503C\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">skipUntil</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1075
     all: [
       2 =&gt; 3,
       3 =&gt; 4,
     ],
   <span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote><p><strong>\u6CE8\u610F\uFF1A</strong> \u5982\u679C\u627E\u4E0D\u5230\u7ED9\u5B9A\u7684\u503C\uFF0C\u6216\u8005\u56DE\u8C03\u4ECE\u672A\u8FD4\u56DE <code>true</code> \uFF0C\u5219 <code>skipUntil</code> \u65B9\u6CD5\u5C06\u8FD4\u56DE\u4E00\u4E2A\u7A7A\u96C6\u5408\u3002</p></blockquote>`,6);function e(t,c){return p}var u=s(a,[["render",e]]);export{u as default};
