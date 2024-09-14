import{_ as i,c as a,a2 as e,o as t}from"./chunks/framework.BL1pH_9P.js";const E=JSON.parse('{"title":"Laravel 11 中为中间件设置别名","description":"","frontmatter":{},"headers":[],"relativePath":"others/set-alias-for-middleware-in-laravel-11.md","filePath":"others/set-alias-for-middleware-in-laravel-11.md","lastUpdated":1726280701000}'),l={name:"others/set-alias-for-middleware-in-laravel-11.md"};function h(n,s,p,d,k,r){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="laravel-11-中为中间件设置别名" tabindex="-1">Laravel 11 中为中间件设置别名 <a class="header-anchor" href="#laravel-11-中为中间件设置别名" aria-label="Permalink to &quot;Laravel 11 中为中间件设置别名&quot;">​</a></h1><p>由于 Laravel 11 移除了 <code>Kernel</code> 类，该如何为中间件设置别名呢？</p><h2 id="中间件别名" tabindex="-1">中间件别名 <a class="header-anchor" href="#中间件别名" aria-label="Permalink to &quot;中间件别名&quot;">​</a></h2><p>打开 <code>bootstrap/app.php</code>，会注意到一个 <code>withMiddleware</code> 方法调用。 默认情况下，它看起来是这样的：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">withMiddleware</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Middleware</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $middleware) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //       </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>在 <code>withMiddleware</code> 回调中，调用传入的 <code>Middleware</code> 对象上的 <code>alias</code> 方法。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">withMiddleware</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Middleware</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $middleware) {</span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    $middleware</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">alias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([ </span></span>
<span class="line diff add"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &#39;subscribed&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> RedirectIfNotSubscribed</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::class</span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]); </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>由于这是一个数组，可以根据需要添加任意数量的别名。</p><h2 id="使用别名" tabindex="-1">使用别名 <a class="header-anchor" href="#使用别名" aria-label="Permalink to &quot;使用别名&quot;">​</a></h2><p>现在可以在路由或控制器中的任何地方使用该别名。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Route</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/protected&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ProtectedController</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line diff add"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">middleware</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;auth&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;subscribed&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]) </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    -&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;protected&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,11)]))}const c=i(l,[["render",h]]);export{E as __pageData,c as default};