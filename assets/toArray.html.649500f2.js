import{r as e,o as t,c as o,b as n,a as p,w as c,F as r,e as l,d as s}from"./app.83dff38f.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const u={},d=l(`<h1 id="toarray" tabindex="-1"><a class="header-anchor" href="#toarray" aria-hidden="true">#</a> toArray</h1><p>\u5C06\u96C6\u5408\u8F6C\u6362\u6210 PHP \u6570\u7EC4\u3002\u5982\u679C\u96C6\u5408\u7684\u503C\u662F <code>Eloquent</code> \u6A21\u578B\uFF0C\u90A3\u4E5F\u4F1A\u88AB\u8F6C\u6362\u6210\u6570\u7EC4\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Desk&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">200</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
[
    [&#39;name&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 200],
]
*/</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,3),m=n("p",null,[n("code",null,"toArray()"),s(" \u4E5F\u4F1A\u5C06\u6240\u6709\u96C6\u5408\u7684\u5D4C\u5957\u5BF9\u8C61\u8F6C\u6362\u4E3A\u6570\u7EC4\u3002")],-1),k=s("\u5982\u679C\u83B7\u53D6\u539F\u6570\u7EC4\uFF0C\u5E94\u8BE5\u4F7F\u7528 "),_=s("all"),b=s(" \u65B9\u6CD5\u3002");function g(h,f){const a=e("RouterLink");return t(),o(r,null,[d,n("blockquote",null,[m,n("p",null,[k,p(a,{to:"/collections/all.html"},{default:c(()=>[_]),_:1}),b])])],64)}var y=i(u,[["render",g]]);export{y as default};
