import{_ as s,o as l,c as n,Q as a}from"./chunks/framework.e8ee2c8f.js";const F=JSON.parse('{"title":"chuck","description":"","frontmatter":{},"headers":[],"relativePath":"collections/chunk.md","filePath":"collections/chunk.md","lastUpdated":1695351225000}'),p={name:"collections/chunk.md"},o=a(`<h1 id="chuck" tabindex="-1">chuck <a class="header-anchor" href="#chuck" aria-label="Permalink to &quot;chuck&quot;">​</a></h1><blockquote><p>将集合拆分为多个指定大小的集合组。</p></blockquote><h2 id="一些示例" tabindex="-1">一些示例 <a class="header-anchor" href="#一些示例" aria-label="Permalink to &quot;一些示例&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-B9NrG" id="tab-kG-1aWP" checked="checked"><label for="tab-kG-1aWP">元素个数被整除</label><input type="radio" name="group-B9NrG" id="tab-8hAy28D"><label for="tab-8hAy28D">元素个数无法被整除</label></div><div class="blocks"><div class="language-php vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line has-focus"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">chunk</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">); </span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1089</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       Illuminate\\Support\\Collection {#1091</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         all: [1, 2, 3, 4],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       Illuminate\\Support\\Collection {#1090</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         all: [5, 6, 7, 8],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line has-focus"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">chunk</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">); </span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1089</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       Illuminate\\Support\\Collection {#1091</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         all: [1, 2, 3, 4],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       Illuminate\\Support\\Collection {#1090</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         all: [5, 6, 7, 8],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line has-focus"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">chunk</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">); </span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1088</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       Illuminate\\Support\\Collection {#1091</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         all: [1, 2, 3],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       Illuminate\\Support\\Collection {#1090</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         all: [4, 5, 6],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       Illuminate\\Support\\Collection {#1089</span></span>
<span class="line has-focus"><span style="color:#FDAEB7;font-style:italic;">         all: [7, 8], </span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line has-focus"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">chunk</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">); </span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1088</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       Illuminate\\Support\\Collection {#1091</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         all: [1, 2, 3],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       Illuminate\\Support\\Collection {#1090</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         all: [4, 5, 6],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       Illuminate\\Support\\Collection {#1089</span></span>
<span class="line has-focus"><span style="color:#B31D28;font-style:italic;">         all: [7, 8], </span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div></div></div>`,4),t=[o];function e(c,i,r,y,E,u){return l(),n("div",null,t)}const f=s(p,[["render",e]]);export{F as __pageData,f as default};
