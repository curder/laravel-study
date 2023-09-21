import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.5499cfac.js";const u=JSON.parse('{"title":"except","description":"","frontmatter":{},"headers":[],"relativePath":"collections/except.md","filePath":"collections/except.md","lastUpdated":1648089437000}'),p={name:"collections/except.md"},o=l(`<h1 id="except" tabindex="-1">except <a class="header-anchor" href="#except" aria-label="Permalink to &quot;except&quot;">​</a></h1><p>返回集合中除了指定键以外的所有项目。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;product_id&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;discount&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">except</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;discount&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1085</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       &quot;product_id&quot; =&gt; 1,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;product_id&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;discount&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">except</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;discount&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1085</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       &quot;product_id&quot; =&gt; 1,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><p>与之相反操作是 <a href="./only.html">only</a> 方法。</p>`,4),t=[o];function e(c,r,i,y,E,d){return n(),a("div",null,t)}const _=s(p,[["render",e]]);export{u as __pageData,_ as default};
