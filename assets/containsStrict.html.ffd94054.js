import{r as t,o as e,c as p,b as n,a as o,F as c,d as s,e as r}from"./app.9d6e082c.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=n("h1",{id:"containsstrict",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#containsstrict","aria-hidden":"true"},"#"),s(" containsStrict")],-1),k=s("\u6B64\u65B9\u6CD5\u548C "),d={href:"/collections/contains.md",target:"_blank",rel:"noopener noreferrer"},g=s("contains"),m=s(" \u65B9\u6CD5\u7C7B\u4F3C\uFF0C\u4F46\u662F\u5B83\u5374\u662F\u4F7F\u7528\u4E86\u300C\u4E25\u683C\u300D\u6765\u6BD4\u8F83\u6240\u6709\u503C\u3002"),b=r(`<p>\u57FA\u672C\u4F7F\u7528</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Desk&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">200</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Chair&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">containsStrict</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;price&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;100&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; false
 */</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5982\u4E0A\u4F8B\u6240\u793A\uFF0C\u96C6\u5408\u4E2D\u5BF9\u5E94\u7684\u503C\u5B58\u5728\uFF0C\u4F46\u662F\u503C\u7C7B\u578B\u4E0D\u4E00\u81F4\u4E5F\u8FD4\u56DE <code>false</code>\u3002</p>`,3);function _(h,f){const a=t("ExternalLinkIcon");return e(),p(c,null,[u,n("p",null,[k,n("a",d,[g,o(a)]),m]),b],64)}var q=l(i,[["render",_]]);export{q as default};
