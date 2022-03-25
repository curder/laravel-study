import{r as p,o as t,c as e,b as s,a as o,w as c,F as l,e as u,d as n}from"./app.63476ef6.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},k=u(`<h1 id="first" tabindex="-1"><a class="header-anchor" href="#first" aria-hidden="true">#</a> first</h1><p>\u8FD4\u56DE\u96C6\u5408\u4E2D\u901A\u8FC7\u7ED9\u5B9A\u771F\u5B9E\u6D4B\u8BD5\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\uFF0C<strong>\u4E0D\u662F\u4E00\u4E2A\u65B0\u96C6\u5408</strong>\u3002</p><p>\u4E0D\u4F20\u5165\u53C2\u6570\u8C03\u7528 <code>last</code> \u65B9\u6CD5\u6765\u83B7\u53D6\u96C6\u5408\u4E2D\u7B2C\u4E00\u4E2A\u5143\u7D20\u3002\u5982\u679C\u96C6\u5408\u662F\u7A7A\u7684\uFF0C\u8FD4\u56DE <code>null</code>\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; 1
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u4F7F\u7528\u56DE\u8C03" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u56DE\u8C03" aria-hidden="true">#</a> \u4F7F\u7528\u56DE\u8C03</h2><p>\u4ECE\u96C6\u5408\u5DE6\u5F80\u53F3\u904D\u5386\uFF0C\u6EE1\u8DB3\u6761\u4EF6\u5143\u7D20\u88AB\u8FD4\u56DE\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token keyword">fn</span> <span class="token punctuation">(</span><span class="token variable">$element</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token variable">$element</span> <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; 1
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u4F7F\u7528\u9ED8\u8BA4\u503C" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u9ED8\u8BA4\u503C" aria-hidden="true">#</a> \u4F7F\u7528\u9ED8\u8BA4\u503C</h2><p><code>first</code> \u65B9\u6CD5\u5141\u8BB8\u4F20\u9012\u4E00\u4E2A\u9ED8\u8BA4\u503C\uFF0C\u5F53\u901A\u8FC7\u56DE\u8C03\u51FD\u6570\u904D\u5386\u96C6\u5408\u6CA1\u6709\u8FD4\u56DE\u503C\u65F6\uFF0C\u9ED8\u8BA4\u503C\u5C06\u4F1A\u88AB\u8FD4\u56DE\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token keyword">fn</span> <span class="token punctuation">(</span><span class="token variable">$element</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token variable">$element</span> <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token constant">null</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; 1000
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,10),m=n("\u5982\u679C\u9700\u8981\u8FD4\u56DE\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u53EF\u4EE5\u4F7F\u7528 "),b=n("last"),d=n(" \u65B9\u6CD5\u3002");function h(f,g){const a=p("RouterLink");return t(),e(l,null,[k,s("blockquote",null,[s("p",null,[m,o(a,{to:"/collections/last.html"},{default:c(()=>[b]),_:1}),d])])],64)}var x=r(i,[["render",h]]);export{x as default};
