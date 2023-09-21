import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.aefb929a.js";const _=JSON.parse('{"title":"pop","description":"","frontmatter":{},"headers":[],"relativePath":"collections/pop.md","filePath":"collections/pop.md","lastUpdated":1616865921000}'),p={name:"collections/pop.md"},o=l(`<h1 id="pop" tabindex="-1">pop <a class="header-anchor" href="#pop" aria-label="Permalink to &quot;pop&quot;">​</a></h1><p>移除并返回集合中的最后一个项目。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$collection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">dump</span><span style="color:#E1E4E8;">($collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">$collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     1,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     2,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     3,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     4,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   ]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$collection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">dump</span><span style="color:#24292E;">($collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">pop</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">$collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     1,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     2,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     3,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     4,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   ]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div>`,3),e=[o];function t(c,i,r,y,E,d){return n(),a("div",null,e)}const B=s(p,[["render",t]]);export{_ as __pageData,B as default};
