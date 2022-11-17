import{r as p,o,c as e,b as n,a as c,F as l,e as s,d as a}from"./app.e4ca04d2.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";var r="/laravel-study/assets/speed-comparison-preview.96f332b1.png";const i={},k=s(`<h1 id="\u4F18\u5316-factory-\u6570\u636E\u5E93\u6279\u91CF\u63D2\u5165" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5316-factory-\u6570\u636E\u5E93\u6279\u91CF\u63D2\u5165" aria-hidden="true">#</a> \u4F18\u5316 Factory \u6570\u636E\u5E93\u6279\u91CF\u63D2\u5165</h1><p>\u5728\u521B\u5EFA\u6D4B\u8BD5\u6570\u636E\u65F6\uFF0C\u4F7F\u7528\u6279\u91CF\u63D2\u5165\u6570\u636E\u5E93\u8BB0\u5F55\uFF0C\u800C\u4E0D\u662F\u5728\u5355\u72EC\u7684\u63D2\u5165\u6BCF\u4E00\u884C\uFF0C\u56E0\u4E3A\u8FD9\u5C06\u4F7F\u60A8\u7684\u6D4B\u8BD5\u66F4\u5FEB\u3002</p><ul><li><p>\u274C</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token class-name static-context">Post</span><span class="token operator">::</span><span class="token function">factory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>\u5982\u679C\u8FD8\u5728\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u6279\u91CF\u5199\u5165\u6D4B\u8BD5\u6570\u636E\uFF0C\u5EFA\u8BAE\u91C7\u7528\u4E0B\u9762\u7684\u65B9\u5F0F\u6279\u91CF\u63D2\u5165\u6570\u636E\u5E93\u8BB0\u5F55\u3002</p></blockquote></li><li><p>\u2705</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token class-name static-context">Post</span><span class="token operator">::</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">insert</span><span class="token punctuation">(</span>
    <span class="token class-name static-context">Post</span><span class="token operator">::</span><span class="token function">factory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul>`,3),m=a("\u5177\u4F53\u4EE3\u7801\u67E5\u770B\u4ED3\u5E93\u5730\u5740"),b={href:"https://github.com/curder/laravel-tips/tree/optimize-factory-database-batch-insert",target:"_blank",rel:"noopener noreferrer"},d=a("github.com/curder/laravel-tips"),f=s(`<h2 id="\u6267\u884C\u901F\u5EA6\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u901F\u5EA6\u5BF9\u6BD4" aria-hidden="true">#</a> \u6267\u884C\u901F\u5EA6\u5BF9\u6BD4</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// Before</span>
<span class="token variable">$start</span> <span class="token operator">=</span> <span class="token function">microtime</span><span class="token punctuation">(</span><span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name static-context">Post</span><span class="token operator">::</span><span class="token function">factory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">ray</span><span class="token punctuation">(</span><span class="token function">microtime</span><span class="token punctuation">(</span><span class="token constant boolean">true</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token variable">$start</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0.49113798141479</span>

<span class="token comment">// After</span>
<span class="token variable">$start</span> <span class="token operator">=</span> <span class="token function">microtime</span><span class="token punctuation">(</span><span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name static-context">Post</span><span class="token operator">::</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">insert</span><span class="token punctuation">(</span>
    <span class="token class-name static-context">Post</span><span class="token operator">::</span><span class="token function">factory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">ray</span><span class="token punctuation">(</span><span class="token function">microtime</span><span class="token punctuation">(</span><span class="token constant boolean">true</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token variable">$start</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0.15621304512024</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><img src="`+r+'" alt=""></p>',3);function h(g,_){const t=p("ExternalLinkIcon");return o(),e(l,null,[k,n("p",null,[m,n("a",b,[d,c(t)])]),f],64)}var y=u(i,[["render",h]]);export{y as default};
