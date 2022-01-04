import{e as n}from"./app.5684f20a.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u6A21\u578B\u7247\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u6A21\u578B\u7247\u6BB5" aria-hidden="true">#</a> \u6A21\u578B\u7247\u6BB5</h1><h2 id="\u4FDD\u5B58\u6A21\u578B\u53CA\u5176\u6240\u6709\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#\u4FDD\u5B58\u6A21\u578B\u53CA\u5176\u6240\u6709\u5173\u7CFB" aria-hidden="true">#</a> \u4FDD\u5B58\u6A21\u578B\u53CA\u5176\u6240\u6709\u5173\u7CFB</h2><p>\u4F7F\u7528 <code>push()</code> \u65B9\u6CD5\u66F4\u65B0\u6570\u636E\u5E93\u4E2D\u7684\u4E3B\u6A21\u578B\u548C\u76F8\u5173\u6A21\u578B\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * \u4F7F\u7528 \`push()\` \u5C06\u4E3B\u6A21\u578B\u4E0E\u4EFB\u4F55\u66F4\u6539\u5173\u7CFB\u4E00\u8D77\u4FDD\u5B58
 */</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">phone</span><span class="token punctuation">(</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">has0ne</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;App\\Models\\Phone&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$user</span> <span class="token operator">=</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>User</span><span class="token operator">::</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token property">name</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;John&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token property">phone</span><span class="token operator">-&gt;</span><span class="token property">number</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;1234567890&#39;</span><span class="token punctuation">;</span>
<span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD9\u4F1A\u66F4\u65B0\u6570\u636E\u5E93\u4E2D\u7684\u7528\u6237\u8BB0\u5F55\u548C\u76F8\u5173\u7684\u7528\u6237\u7535\u8BDD\u53F7\u7801\u8BB0\u5F55</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u83B7\u53D6\u67E5\u8BE2\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u67E5\u8BE2\u65E5\u5FD7" aria-hidden="true">#</a> \u83B7\u53D6\u67E5\u8BE2\u65E5\u5FD7</h2><p>\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u8BB0\u5F55\u6240\u6709\u6570\u636E\u5E93\u67E5\u8BE2\uFF0C\u8BF7\u5C06\u6B64\u4EE3\u7801\u6BB5\u6DFB\u52A0\u5230\u7684 <code>AppServiceProvider.php</code>\uFF1A</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name static-context">App</span><span class="token operator">::</span><span class="token function">environment</span> <span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;local&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name static-context">DB</span><span class="token operator">::</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token variable">$query</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">logger</span><span class="token punctuation">(</span><span class="token class-name static-context">Str</span><span class="token operator">::</span><span class="token function">replaceArray</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;?&#39;</span><span class="token punctuation">,</span> <span class="token variable">$query</span><span class="token operator">-&gt;</span><span class="token property">bindings</span><span class="token punctuation">,</span> <span class="token variable">$query</span><span class="token operator">-&gt;</span><span class="token property">sql</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,8);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};