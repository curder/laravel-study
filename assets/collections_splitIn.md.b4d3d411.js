import{_ as s,o as n,c as l,Q as a}from"./chunks/framework.aefb929a.js";const D=JSON.parse('{"title":"splitIn","description":"","frontmatter":{},"headers":[],"relativePath":"collections/splitIn.md","filePath":"collections/splitIn.md","lastUpdated":1616984938000}'),p={name:"collections/splitIn.md"},t=a(`<h1 id="splitin" tabindex="-1">splitIn <a class="header-anchor" href="#splitin" aria-label="Permalink to &quot;splitIn&quot;">​</a></h1><p>将集合分为给定数量的组。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">splitIn</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1084</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       Illuminate\\Support\\Collection {#1087</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           1,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           2,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           3,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           4,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       Illuminate\\Support\\Collection {#1086</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           4 =&gt; 5,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           5 =&gt; 6,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           6 =&gt; 7,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           7 =&gt; 8,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       Illuminate\\Support\\Collection {#1085</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           8 =&gt; 9,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           9 =&gt; 10,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">9</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">splitIn</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1084</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       Illuminate\\Support\\Collection {#1087</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           1,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           2,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           3,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           4,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       Illuminate\\Support\\Collection {#1086</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           4 =&gt; 5,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           5 =&gt; 6,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           6 =&gt; 7,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           7 =&gt; 8,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       Illuminate\\Support\\Collection {#1085</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           8 =&gt; 9,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           9 =&gt; 10,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div>`,3),o=[t];function e(c,i,y,r,E,B){return n(),l("div",null,o)}const F=s(p,[["render",e]]);export{D as __pageData,F as default};
