import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.16715cb7.js";const d=JSON.parse('{"title":"crossJoin","description":"","frontmatter":{},"headers":[],"relativePath":"collections/crossJoin.md","filePath":"collections/crossJoin.md","lastUpdated":1695368797000}'),o={name:"collections/crossJoin.md"},t=l(`<h1 id="crossjoin" tabindex="-1">crossJoin <a class="header-anchor" href="#crossjoin" aria-label="Permalink to &quot;crossJoin&quot;">​</a></h1><p>将集合的值交叉连接到给定的数组或集合中，返回具有所有可能排列的笛卡尔积。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">crossJoin</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;b&#39;</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">[</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   [1, &quot;a&quot;],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   [1, &quot;b&quot;],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   [2, &quot;a&quot;],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   [2, &quot;b&quot;],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">]</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">crossJoin</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;b&#39;</span><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">[</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   [1, &quot;a&quot;],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   [1, &quot;b&quot;],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   [2, &quot;a&quot;],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   [2, &quot;b&quot;],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">]</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">crossJoin</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;b&#39;</span><span style="color:#E1E4E8;">], [</span><span style="color:#9ECBFF;">&#39;c&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;d&#39;</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">[</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   [1, &quot;a&quot;, &quot;c&quot;],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   [1, &quot;a&quot;, &quot;d&quot;],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   [1, &quot;b&quot;, &quot;c&quot;],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   [1, &quot;b&quot;, &quot;d&quot;],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   [2, &quot;a&quot;, &quot;c&quot;],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   [2, &quot;a&quot;, &quot;d&quot;],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   [2, &quot;b&quot;, &quot;c&quot;],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   [2, &quot;b&quot;, &quot;d&quot;]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">]</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">crossJoin</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;b&#39;</span><span style="color:#24292E;">], [</span><span style="color:#032F62;">&#39;c&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;d&#39;</span><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">[</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   [1, &quot;a&quot;, &quot;c&quot;],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   [1, &quot;a&quot;, &quot;d&quot;],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   [1, &quot;b&quot;, &quot;c&quot;],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   [1, &quot;b&quot;, &quot;d&quot;],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   [2, &quot;a&quot;, &quot;c&quot;],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   [2, &quot;a&quot;, &quot;d&quot;],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   [2, &quot;b&quot;, &quot;c&quot;],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   [2, &quot;b&quot;, &quot;d&quot;]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">]</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div>`,4),p=[t];function c(e,i,r,y,u,q){return n(),a("div",null,p)}const F=s(o,[["render",c]]);export{d as __pageData,F as default};
