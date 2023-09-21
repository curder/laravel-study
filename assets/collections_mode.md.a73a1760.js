import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.aefb929a.js";const B=JSON.parse('{"title":"mode","description":"","frontmatter":{},"headers":[],"relativePath":"collections/mode.md","filePath":"collections/mode.md","lastUpdated":1616865921000}'),p={name:"collections/mode.md"},o=l(`<h1 id="mode" tabindex="-1">mode <a class="header-anchor" href="#mode" aria-label="Permalink to &quot;mode&quot;">​</a></h1><p>返回给定键的众数值。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">mode</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     1,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   ]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">mode</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     1,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   ]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">mode</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     1,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     2,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   ]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">mode</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     1,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     2,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   ]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><p>传入指定键</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([[</span><span style="color:#9ECBFF;">&#39;foo&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">], [</span><span style="color:#9ECBFF;">&#39;foo&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">], [</span><span style="color:#9ECBFF;">&#39;foo&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">], [</span><span style="color:#9ECBFF;">&#39;foo&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">40</span><span style="color:#E1E4E8;">]])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">mode</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;foo&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     10,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   ]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([[</span><span style="color:#032F62;">&#39;foo&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">], [</span><span style="color:#032F62;">&#39;foo&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">], [</span><span style="color:#032F62;">&#39;foo&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">], [</span><span style="color:#032F62;">&#39;foo&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">40</span><span style="color:#24292E;">]])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">mode</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;foo&#39;</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     10,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   ]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div>`,6),e=[o];function t(c,r,y,i,E,d){return n(),a("div",null,e)}const C=s(p,[["render",t]]);export{B as __pageData,C as default};