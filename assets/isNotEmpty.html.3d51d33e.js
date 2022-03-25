import{r as e,o as p,c as t,b as s,a as c,w as o,F as l,e as u,d as n}from"./app.63476ef6.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const r={},m=u(`<h1 id="isnotempty" tabindex="-1"><a class="header-anchor" href="#isnotempty" aria-hidden="true">#</a> isNotEmpty</h1><p>\u96C6\u5408\u4E0D\u662F\u7A7A\u7684\uFF0C<code>isNotEmpty</code> \u65B9\u6CD5\u4F1A\u8FD4\u56DE <code>true</code>\uFF0C\u5426\u5219\u8FD4\u56DE <code>false</code>\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; false
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; true
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>isNotEmpty</code> \u65B9\u6CD5\u4E0D\u4F1A\u68C0\u67E5\u96C6\u5408\u4E2D\u7684\u5143\u7D20\u7684\u7C7B\u578B\uFF0C\u4EC5\u4EC5\u68C0\u67E5\u96C6\u5408\u662F\u5426\u4E3A\u7A7A\u3002\u6BD4\u5982\uFF1A\u96C6\u5408\u4E2D\u6709\u4E14\u4EC5\u6709 <code>null</code>, <code>&#39;&#39;</code>, <code>0</code>, <code>false</code> \u7B49\u5143\u7D20\u7684\u65F6\u5019\uFF0C\u8FD4\u56DE\u503C\u4F9D\u7136\u662F <code>false</code>\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; true
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token constant">null</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; true
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,7),d=n("\u4E0E "),b=s("code",null,"isNotEmpty",-1),k=n(" \u76F8\u53CD\u64CD\u4F5C\u7684\u65B9\u6CD5\u662F "),h=n("isEmpty"),g=n(" \u65B9\u6CD5\u3002");function _(f,v){const a=e("RouterLink");return p(),t(l,null,[m,s("p",null,[d,b,k,c(a,{to:"/collections/isEmpty.html"},{default:o(()=>[h]),_:1}),g])],64)}var E=i(r,[["render",_]]);export{E as default};
