import{e as n}from"./app.cc9213f7.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="blade-\u6A21\u7248" tabindex="-1"><a class="header-anchor" href="#blade-\u6A21\u7248" aria-hidden="true">#</a> Blade \u6A21\u7248</h1><h2 id="\u81EA\u5B9A\u4E49\u6A21\u7248\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6A21\u7248\u6307\u4EE4" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u6A21\u7248\u6307\u4EE4</h2><p>\u4F7F\u7528 <code>Blade::if()</code> \u65B9\u6CD5\u8F7B\u677E\u521B\u5EFA\u65B0\u7684 <code>if</code> \u6A21\u7248\u6307\u4EE4\u3002</p><p>\u4F8B\u5982\uFF0C\u9A8C\u8BC1\u662F\u5426\u542F\u7528\u4E86\u7279\u5B9A\u7684\u5E94\u7528\u7A0B\u5E8F\u529F\u80FD\u3002</p><p>\u5728\u9879\u76EE\u7684 <code>AppServiceProvider.php</code> \u7684 <code>boot</code> \u65B9\u6CD5\u4E2D\u6CE8\u518C\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * Bootstrap any application services.
 * return void
 */</span>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name static-context">Blade</span><span class="token operator">::</span><span class="token function">if</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;enabled&#39;</span><span class="token punctuation">,</span> <span class="token keyword">fn</span> <span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token class-name static-context">Setting</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u901A\u8FC7\u4E0B\u9762\u7684\u6A21\u7248\u8BED\u6CD5\u4F7F\u7528\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>@enabled(&#39;regular-registration&#39;)
<span class="token comment">&lt;!-- \u5E38\u89C4\u914D\u7F6E\u5DF2\u542F\u7528 --&gt;</span>
@elseenabled(&#39;beta-registration&#39;)
<span class="token comment">&lt;!-- \u6D4B\u8BD5\u914D\u7F6E\u5DF2\u542F\u7528 --&gt;</span>
@else
<span class="token comment">&lt;!-- \u6CE8\u518C\u88AB\u7981\u7528 --&gt;</span>
@endenabled

@unlessenabled(&#39;regular-registration&#39;)
<span class="token comment">&lt;!-- \u8BE5\u5E94\u7528\u7A0B\u5E8F\u4E0D\u63A5\u53D7\u5E38\u89C4\u6CE8\u518C --&gt;</span>
@endenabled
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,8);function p(t,l){return e}var r=s(a,[["render",p]]);export{r as default};
