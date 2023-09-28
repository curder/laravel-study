import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.e8ee2c8f.js";const d=JSON.parse('{"title":"merge","description":"","frontmatter":{},"headers":[],"relativePath":"collections/merge.md","filePath":"collections/merge.md","lastUpdated":1616865921000}'),p={name:"collections/merge.md"},o=l(`<h1 id="merge" tabindex="-1">merge <a class="header-anchor" href="#merge" aria-label="Permalink to &quot;merge&quot;">​</a></h1><p>将给定数组或集合合并到原集合。</p><p>如果给定项目中的字符串键与原集合中的字符串键匹配，给定的项目的值将会覆盖原集合中的值。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;product_id&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">merge</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;discount&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1084</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       &quot;product_id&quot; =&gt; 1,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       &quot;price&quot; =&gt; 200,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       &quot;discount&quot; =&gt; false,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;product_id&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">merge</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;discount&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1084</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       &quot;product_id&quot; =&gt; 1,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       &quot;price&quot; =&gt; 200,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       &quot;discount&quot; =&gt; false,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><p>如果给定的项目的键是数字，这些值将被追加到集合的末尾。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;Desk&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Chair&#39;</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">merge</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;Bookcase&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Door&#39;</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1079</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       &quot;Desk&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       &quot;Chair&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       &quot;Bookcase&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       &quot;Door&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;Desk&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Chair&#39;</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">merge</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;Bookcase&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Door&#39;</span><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1079</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       &quot;Desk&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       &quot;Chair&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       &quot;Bookcase&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       &quot;Door&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div>`,6),t=[o];function e(c,r,i,y,E,u){return n(),a("div",null,t)}const D=s(p,[["render",e]]);export{d as __pageData,D as default};
