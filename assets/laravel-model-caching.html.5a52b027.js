import{r as e,o as t,c as o,b as s,a as p,F as c,d as n,e as l}from"./app.7feb4b93.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const r={},i=s("h1",{id:"\u6A21\u578B\u7F13\u5B58",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u6A21\u578B\u7F13\u5B58","aria-hidden":"true"},"#"),n(" \u6A21\u578B\u7F13\u5B58")],-1),k=n("\u672C\u6587\u539F\u6587\u6765\u81EA "),b={href:"https://laravel-news.com/laravel-model-caching",target:"_blank",rel:"noopener noreferrer"},d=n("Laravel News"),m=n(" \uFF0C\u4EE3\u7801\u5728 "),g={href:"https://github.com/curder/laravel-model-caching",target:"_blank",rel:"noopener noreferrer"},h=n("GitHub"),f=n(" \u3002"),y=l(`<p>\u4E4B\u524D\u53EF\u80FD\u5DF2\u7ECF\u5728\u63A7\u5236\u5668\u4E2D\u7F13\u5B58\u4E86\u4E00\u4E9B\u6A21\u578B\u6570\u636E\uFF0C\u4F46\u662F Laravel \u6A21\u578B\u7F13\u5B58\u6280\u672F\uFF0C\u5B83\u4F7F\u7528\u6D3B\u52A8\u8BB0\u5F55\u6A21\u578B\u66F4\u7CBE\u7EC6\u4E00\u4E9B\u3002</p><p>\u4F7F\u7528\u6A21\u578B\u4E0A\u7684\u552F\u4E00\u7F13\u5B58\u952E\uFF0C\u53EF\u4EE5\u7F13\u5B58\u6A21\u578B\uFF08\u6216\u76F8\u5173\u6A21\u578B\uFF09\u66F4\u65B0\u65F6\u81EA\u52A8\u66F4\u65B0\uFF08\u4EE5\u53CA\u7F13\u5B58\u5931\u6548\uFF09\u7684\u6A21\u578B\u4E0A\u7684\u5C5E\u6027\u548C\u5173\u8054\u3002</p><p>\u4E00\u4E2A\u597D\u5904\u662F\u8BBF\u95EE\u7F13\u5B58\u7684\u6570\u636E\u6BD4\u5728\u63A7\u5236\u5668\u4E2D\u7F13\u5B58\u6570\u636E\u66F4\u5177\u53EF\u79FB\u690D\u6027\uFF0C\u56E0\u4E3A\u5B83\u5728\u6A21\u578B\u4E0A\u800C\u4E0D\u662F\u5728\u5355\u4E2A\u63A7\u5236\u5668\u65B9\u6CD5\u4E2D\u3002</p><p>\u5047\u8BBE\u73B0\u5728\u6709\u4E00\u4E2A\u6709\u8BB8\u591A\u8BC4\u8BBA\u6A21\u578B\u7684\u6587\u7AE0\u6A21\u578B\u3002</p><p>\u7ED9\u51FA\u4EE5\u4E0B\u7684<strong>laravel blade</strong>\u6A21\u677F\uFF0C\u53EF\u4EE5\u5728 <code>/articles</code> \u8DEF\u5F84\u4E0A\u90A3\u6837\u68C0\u7D22\u8BC4\u8BBA\u8BA1\u6570\uFF1A</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token operator">&lt;</span>h3<span class="token operator">&gt;</span><span class="token variable">$article</span><span class="token operator">-&gt;</span><span class="token property">comments</span><span class="token operator">-&gt;</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token class-name static-context">Str</span><span class="token operator">::</span><span class="token function">plural</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Comment&#39;</span><span class="token punctuation">,</span> <span class="token variable">$article</span><span class="token operator">-&gt;</span><span class="token property">comments</span><span class="token operator">-&gt;</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u53EF\u4EE5\u5728\u63A7\u5236\u5668\u4E2D\u7F13\u5B58\u8BC4\u8BBA\u8BA1\u6570\uFF0C\u4F46\u662F\u5F53\u6709\u591A\u4E2A\u9700\u8981\u7F13\u5B58\u7684\u4E00\u6B21\u6027\u67E5\u8BE2\u548C\u6570\u636E\u65F6\uFF0C\u63A7\u5236\u5668\u4F1A\u53D8\u5F97\u975E\u5E38\u96BE\u770B\u3002</p><p>\u4F7F\u7528\u63A7\u5236\u5668\uFF0C\u8BBF\u95EE\u7F13\u5B58\u7684\u6570\u636E\u4E5F\u4E0D\u662F\u5F88\u65B9\u4FBF\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u6784\u5EFA\u4E00\u4E2A\u6A21\u677F\uFF0C\u53EA\u6709\u5728\u6587\u7AE0\u66F4\u65B0\u65F6\u624D\u80FD\u8BBF\u95EE\u6570\u636E\u5E93\uFF0C\u4EFB\u4F55\u6709\u6743\u8BBF\u95EE\u6A21\u578B\u7684\u4EE3\u7801\u90FD\u53EF\u4EE5\u83B7\u53D6\u7F13\u5B58\u7684\u503C\uFF1A</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token operator">&lt;</span>h3<span class="token operator">&gt;</span><span class="token variable">$article</span><span class="token operator">-&gt;</span><span class="token property">cached_comments_count</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token class-name static-context">Str</span><span class="token operator">::</span><span class="token function">plural</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Comment&#39;</span><span class="token punctuation">,</span> <span class="token variable">$article</span><span class="token operator">-&gt;</span><span class="token property">cached_comments_count</span><span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4F7F\u7528\u6A21\u578B\u8BBF\u95EE\u5668\uFF0C\u6211\u4EEC\u5C06\u6839\u636E\u6587\u7AE0\u4E0A\u6B21\u66F4\u65B0\u7684\u65F6\u95F4\u7F13\u5B58\u8BC4\u8BBA\u8BA1\u6570\u3002</p><p>\u90A3\u4E48\u5F53\u65B0\u8BC4\u8BBA\u88AB\u6DFB\u52A0\u6216\u5220\u9664\u65F6\uFF0C\u6211\u4EEC\u5982\u4F55\u66F4\u65B0\u6587\u7AE0\u7684 <code>updated_at</code> \u5217\u5462\uFF1F</p><p>\u7B54\u6848\u662F\u901A\u8FC7\u914D\u7F6E <code>touch</code> \u7684\u65B9\u5F0F\u3002</p><h2 id="touching-\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#touching-\u6A21\u578B" aria-hidden="true">#</a> Touching \u6A21\u578B</h2><p>\u4F7F\u7528\u6A21\u578B\u7684 <code>touch()</code> \u65B9\u6CD5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u66F4\u65B0\u6587\u7AE0\u7684 <code>updated_at</code> \u5217</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Article</span><span class="token punctuation">;</span>

<span class="token variable">$article</span> <span class="token operator">=</span> <span class="token class-name static-context">Article</span><span class="token operator">::</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$article</span><span class="token operator">-&gt;</span><span class="token function">touch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$article</span><span class="token operator">-&gt;</span><span class="token property">updated_at</span><span class="token operator">-&gt;</span><span class="token property">timestamp</span><span class="token punctuation">;</span> <span class="token comment">// \u8C03\u7528 touch \u65B9\u6CD5\u540E\u6A21\u578B\u8D44\u6E90\u7684 updated_at \u5B57\u6BB5\u5C06\u88AB\u66F4\u65B0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u66F4\u65B0\u540E\u7684\u65F6\u95F4\u6233\u6765\u4F7F\u7F13\u5B58\u65E0\u6548\uFF0C\u4F46\u662F\u5F53\u6211\u4EEC\u6DFB\u52A0\u6216\u5220\u9664\u8BC4\u8BBA\u65F6\uFF0C\u6211\u4EEC\u5982\u4F55\u89E6\u6478\u6587\u7AE0\u7684 <code>updated_at</code> \u5B57\u6BB5\uFF1F</p><p>\u6070\u6070\u6070\u5DE7\uFF0CEloquent \u6A21\u578B\u6709\u4E00\u4E2A\u540D\u4E3A <code>$touches</code> \u7684\u5C5E\u6027\u3002\u4EE5\u4E0B\u662F\u6211\u4EEC\u7684\u8BC4\u8BBA\u6A21\u578B\u53EF\u80FD\u7684\u6837\u5B50\uFF1A</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Models</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Article</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Comment</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token variable">$guarded</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">protected</span> <span class="token variable">$touches</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;article&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">article</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">belongsTo</span><span class="token punctuation">(</span><span class="token class-name static-context">Article</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p><code>$touches</code> \u5C5E\u6027\u662F\u4E00\u4E2A\u5305\u542B\u5173\u8054\u7684\u6570\u7EC4\uFF0C\u5F53\u8BC4\u8BBA\u88AB\u521B\u5EFA\uFF0C\u4FDD\u5B58\u6216\u5220\u9664\u65F6\uFF0C\u8BE5\u5173\u8054\u5C06\u4F1A\u88AB&quot;\u89E6\u53CA&quot;\u3002</p><h2 id="\u7F13\u5B58\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58\u5C5E\u6027" aria-hidden="true">#</a> \u7F13\u5B58\u5C5E\u6027</h2><p>\u56DE\u5230 <code>$article-&gt;cached_comments_count</code> \u8BBF\u95EE\u5668\u3002\u5728 <code>App\\Models\\Article</code> \u6A21\u578B\u4E2D\u5B9E\u73B0\u53EF\u80FD\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getCachedCommentsCountAttribute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Cache</span><span class="token operator">::</span><span class="token function">remember</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">cacheKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;:comments_count&#39;</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">comments</span><span class="token operator">-&gt;</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u6211\u4EEC\u4F7F\u7528\u552F\u4E00\u7684 <code>cachekey()</code> \u65B9\u6CD5\u5C06\u6A21\u578B\u7F13\u5B5815\u5206\u949F\uFF0C\u5E76\u7B80\u5355\u5730\u8FD4\u56DE\u95ED\u5305\u5185\u7684\u6CE8\u91CA\u8BA1\u6570\u3002</p><blockquote><p>\u8BF7\u6CE8\u610F\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4F7F\u7528<code>\\Cache::rememberforever()</code>\u65B9\u6CD5\uFF0C\u5E76\u4F9D\u9760\u6211\u4EEC\u7684\u7F13\u5B58\u673A\u5236\u7684\u5783\u573E\u6536\u96C6\u6765\u5220\u9664\u65E7key\u3002\u6211\u5DF2\u7ECF\u8BBE\u7F6E\u4E86\u4E00\u4E2A\u8BA1\u65F6\u5668\uFF0C\u4EE5\u4FBF\u7F13\u5B58\u5C06\u5728\u5927\u90E8\u5206\u65F6\u95F4\u70B9\u51FB\uFF0C\u6BCF\u5341\u4E94\u5206\u949F\u4E00\u6B21\u65B0\u7684\u7F13\u5B58\u3002</p></blockquote><p><code>cachekey()</code>\u65B9\u6CD5\u9700\u8981\u4F7F\u6A21\u578B\u552F\u4E00\uFF0C\u5E76\u5728\u6A21\u578B\u66F4\u65B0\u65F6\u4F7F\u7F13\u5B58\u5931\u6548\u3002\u8FD9\u662F\u5FEB\u6377\u952E\u5B9E\u73B0\uFF1A</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">cacheKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">sprintf</span><span class="token punctuation">(</span>
        <span class="token string double-quoted-string">&quot;%s/%s-%s&quot;</span><span class="token punctuation">,</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getTable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">updated_at</span><span class="token operator">-&gt;</span><span class="token property">timestamp</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u6A21\u578B\u7684<code>cachekey()</code>\u65B9\u6CD5\u7684\u793A\u4F8B\u8F93\u51FA\u53EF\u80FD\u4F1A\u8FD4\u56DE\u4EE5\u4E0B\u5B57\u7B26\u4E32\u8868\u793A\u5F62\u5F0F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>articles/1-1515650910
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5173\u952E\u662F\u8868\u7684\u540D\u79F0\uFF0C\u6A21\u578BID\u548C\u5F53\u524D<code>updated_at</code>\u65F6\u95F4\u6233\u3002\u4E00\u65E6\u6211\u4EEC\u89E6\u6478\u6A21\u578B\uFF0C\u65F6\u95F4\u6233\u5C06\u88AB\u66F4\u65B0\uFF0C\u6211\u4EEC\u7684\u6A21\u578B\u7F13\u5B58\u5C06\u88AB\u9002\u5F53\u5730\u5931\u6548\u3002</p><p>\u5B8C\u6574\u7684<code>Article</code>\u6A21\u578B\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Models</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Comment</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Cache</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Article</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">cacheKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">sprintf</span><span class="token punctuation">(</span>
            <span class="token string double-quoted-string">&quot;%s/%s-%s&quot;</span><span class="token punctuation">,</span>
            <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getTable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">updated_at</span><span class="token operator">-&gt;</span><span class="token property">timestamp</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">comments</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">hasMany</span><span class="token punctuation">(</span><span class="token class-name static-context">Comment</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getCachedCommentsCountAttribute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">Cache</span><span class="token operator">::</span><span class="token function">remember</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">cacheKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;:comments_count&#39;</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">comments</span><span class="token operator">-&gt;</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>\u548C\u76F8\u5173\u7684\u8BC4\u8BBA\u6A21\u578B\uFF1A</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Models</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Models<span class="token punctuation">\\</span>Article</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Comment</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token variable">$guarded</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">protected</span> <span class="token variable">$touches</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;article&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">article</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">belongsTo</span><span class="token punctuation">(</span><span class="token class-name static-context">Article</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="\u4E0B\u4E00\u6B65\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u4E00\u6B65\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4E0B\u4E00\u6B65\u662F\u4EC0\u4E48\uFF1F</h2><p>\u6211\u5DF2\u7ECF\u544A\u8BC9\u4F60\u5982\u4F55\u7F13\u5B58\u4E00\u4E2A\u7B80\u5355\u7684\u8BC4\u8BBA\u8BA1\u6570\uFF0C\u4F46\u662F\u5982\u4F55\u7F13\u5B58\u6240\u6709\u7684\u8BC4\u8BBA\uFF1F</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getCachedCommentsAttribute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name static-context">Cache</span><span class="token operator">::</span><span class="token function">remember</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">cacheKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;:comments&#39;</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">comments</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4E5F\u53EF\u4EE5\u9009\u62E9\u5C06\u6CE8\u91CA\u8F6C\u6362\u4E3A\u6570\u7EC4\uFF0C\u800C\u4E0D\u662F\u5E8F\u5217\u5316\u6A21\u578B\uFF0C\u53EA\u5141\u8BB8\u7B80\u5355\u7684\u6570\u7EC4\u8BBF\u95EE\u524D\u7AEF\u6570\u636E\uFF1A</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getCachedCommentsAttribute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name static-context">Cache</span><span class="token operator">::</span><span class="token function">remember</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">cacheKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;:comments&#39;</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">comments</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u6700\u540E\uFF0C\u6211\u5728\u6587\u7AE0\u6A21\u578B\u4E2D\u5B9A\u4E49\u4E86 <code>cachekey()</code> \u65B9\u6CD5\uFF0C\u4F46\u662F\u60A8\u5E0C\u671B\u901A\u8FC7\u4E00\u4E2A\u53EB\u505A ProvidesModelCacheKey \u7684 trait \u6765\u5B9A\u4E49\u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u60A8\u53EF\u4EE5\u5728\u591A\u4E2A\u6A21\u578B\u4E0A\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u6216\u8005\u5728\u6211\u4EEC\u6240\u6709\u6A21\u578B\u6269\u5C55\u7684\u57FA\u672C\u6A21\u578B\u4E0A\u5B9A\u4E49\u65B9\u6CD5\u3002</p><p>\u60A8\u751A\u81F3\u53EF\u80FD\u5E0C\u671B\u4E3A\u5B9E\u73B0 <code>cachekey()</code> \u65B9\u6CD5\u7684\u6A21\u578B\u4F7F\u7528\u5408\u540C\uFF08\u63A5\u53E3\uFF09\u3002</p>`,41);function v(w,_){const a=e("ExternalLinkIcon");return t(),o(c,null,[i,s("p",null,[k,s("a",b,[d,p(a)]),m,s("a",g,[h,p(a)]),f]),y],64)}var C=u(r,[["render",v]]);export{C as default};