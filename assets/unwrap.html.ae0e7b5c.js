import{e as n}from"./app.add27961.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="unwrap" tabindex="-1"><a class="header-anchor" href="#unwrap" aria-hidden="true">#</a> unwrap</h1><p>\u9759\u6001 <code>unwrap</code> \u65B9\u6CD5\u5728\u9002\u7528\u65F6\u4ECE\u7ED9\u5B9A\u503C\u8FD4\u56DE\u96C6\u5408\u7684\u57FA\u7840\u9879\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token class-name class-name-fully-qualified static-context">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Collection</span><span class="token operator">::</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;string&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; [
     &quot;string&quot;,
   ]
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token class-name class-name-fully-qualified static-context">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Collection</span><span class="token operator">::</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;string&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; &quot;string&quot;
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token class-name class-name-fully-qualified static-context">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Collection</span><span class="token operator">::</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;string&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output</span>
<span class="token doc-comment comment">/**
=&gt; [
     &quot;string&quot;,
   ]
 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,5);function e(t,c){return p}var u=s(a,[["render",e]]);export{u as default};
