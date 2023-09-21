import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.aefb929a.js";const d=JSON.parse('{"title":"skip","description":"","frontmatter":{},"headers":[],"relativePath":"collections/skip.md","filePath":"collections/skip.md","lastUpdated":1616982866000}'),p={name:"collections/skip.md"},o=l(`<h1 id="skip" tabindex="-1">skip <a class="header-anchor" href="#skip" aria-label="Permalink to &quot;skip&quot;">​</a></h1><p>方法返回一个新集合，从集合的开头删除给定数量的元素。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">skip</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1087</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       4 =&gt; 5,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       5 =&gt; 6,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       6 =&gt; 7,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       7 =&gt; 8,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       8 =&gt; 9,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       9 =&gt; 10,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">9</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">skip</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1087</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       4 =&gt; 5,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       5 =&gt; 6,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       6 =&gt; 7,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       7 =&gt; 8,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       8 =&gt; 9,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       9 =&gt; 10,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div>`,3),t=[o];function e(c,i,r,y,E,F){return n(),a("div",null,t)}const C=s(p,[["render",e]]);export{d as __pageData,C as default};
