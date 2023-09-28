import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.e8ee2c8f.js";const E=JSON.parse('{"title":"unwrap","description":"","frontmatter":{},"headers":[],"relativePath":"collections/unwrap.md","filePath":"collections/unwrap.md","lastUpdated":1616865921000}'),p={name:"collections/unwrap.md"},o=l(`<h1 id="unwrap" tabindex="-1">unwrap <a class="header-anchor" href="#unwrap" aria-label="Permalink to &quot;unwrap&quot;">​</a></h1><p>静态 <code>unwrap</code> 方法在适用时从给定值返回集合的基础项。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">Illuminate\\Support\\Collection</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">unwrap</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     &quot;string&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   ]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">Illuminate\\Support\\Collection</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">unwrap</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     &quot;string&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   ]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">Illuminate\\Support\\Collection</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">unwrap</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; &quot;string&quot;</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">Illuminate\\Support\\Collection</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">unwrap</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; &quot;string&quot;</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">Illuminate\\Support\\Collection</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">unwrap</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;string&#39;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     &quot;string&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   ]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">Illuminate\\Support\\Collection</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">unwrap</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;string&#39;</span><span style="color:#24292E;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     &quot;string&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   ]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div>`,5),t=[o];function e(c,i,r,y,u,d){return n(),a("div",null,t)}const h=s(p,[["render",e]]);export{E as __pageData,h as default};
