import{e as n}from"./app.9d6e082c.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="implode" tabindex="-1"><a class="header-anchor" href="#implode" aria-hidden="true">#</a> implode</h1><p>\u5408\u5E76\u96C6\u5408\u4E2D\u7684\u9879\u76EE\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;account_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Desk&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;account_id&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Chair&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">implode</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;product&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;, &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; &quot;Desk, Chair&quot;
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><blockquote><p>\u5176\u53C2\u6570\u53D6\u51B3\u4E8E\u96C6\u5408\u4E2D\u9879\u76EE\u7684\u7C7B\u578B\u3002</p><p>\u5982\u679C\u96C6\u5408\u5305\u542B\u6570\u7EC4\u6216\u5BF9\u8C61\uFF0C\u5E94\u8BE5\u4F20\u5165\u5E0C\u671B\u8FDE\u63A5\u7684\u5C5E\u6027\u7684\u952E\uFF0C\u4EE5\u53CA\u5E0C\u671B\u653E\u5728\u503C\u4E4B\u95F4\u7528\u6765\u300C\u62FC\u63A5\u300D\u7684\u5B57\u7B26\u4E32</p></blockquote><p>\u96C6\u5408\u5305\u542B\u7B80\u5355\u7684\u5B57\u7B26\u4E32\u6216\u6570\u503C\uFF0C\u53EA\u9700\u8981\u4F20\u5165\u300C\u62FC\u63A5\u300D\u7528\u7684\u5B57\u7B26\u4E32\u4F5C\u4E3A\u8BE5\u65B9\u6CD5\u7684\u552F\u4E00\u53C2\u6570\u5373\u53EF\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">implode</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;-&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; &quot;1-2-3-4-5&quot;
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,6);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};
