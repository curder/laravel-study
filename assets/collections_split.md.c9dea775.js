import{_ as s,o as n,c as l,Q as a}from"./chunks/framework.5499cfac.js";const D=JSON.parse('{"title":"split","description":"","frontmatter":{},"headers":[],"relativePath":"collections/split.md","filePath":"collections/split.md","lastUpdated":1616984714000}'),p={name:"collections/split.md"},t=a(`<h1 id="split" tabindex="-1">split <a class="header-anchor" href="#split" aria-label="Permalink to &quot;split&quot;">​</a></h1><p>将集合按给定的值拆分。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1077</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       Illuminate\\Support\\Collection {#1076</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           1,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           2,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       Illuminate\\Support\\Collection {#1075</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           3,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           4,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       Illuminate\\Support\\Collection {#1074</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           5,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">split</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1077</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       Illuminate\\Support\\Collection {#1076</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           1,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           2,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       Illuminate\\Support\\Collection {#1075</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           3,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           4,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       Illuminate\\Support\\Collection {#1074</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           5,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div>`,3),o=[t];function e(c,i,y,r,E,B){return n(),l("div",null,o)}const F=s(p,[["render",e]]);export{D as __pageData,F as default};
