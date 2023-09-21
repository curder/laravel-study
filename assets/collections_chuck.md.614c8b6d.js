import{_ as s,o as n,c as l,Q as a}from"./chunks/framework.5499cfac.js";const f=JSON.parse('{"title":"chuck","description":"","frontmatter":{},"headers":[],"relativePath":"collections/chuck.md","filePath":"collections/chuck.md","lastUpdated":1616865921000}'),p={name:"collections/chuck.md"},t=a(`<h1 id="chuck" tabindex="-1">chuck <a class="header-anchor" href="#chuck" aria-label="Permalink to &quot;chuck&quot;">​</a></h1><p>将集合拆分多个指定大小的小集合。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$collection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">$collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">chunk</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1089</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       Illuminate\\Support\\Collection {#1091</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           1,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           2,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           3,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           4,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       Illuminate\\Support\\Collection {#1090</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           4 =&gt; 5,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           5 =&gt; 6,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           6 =&gt; 7,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           7 =&gt; 8,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$collection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#24292E;">$collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">chunk</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1089</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       Illuminate\\Support\\Collection {#1091</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           1,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           2,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           3,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           4,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       Illuminate\\Support\\Collection {#1090</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           4 =&gt; 5,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           5 =&gt; 6,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           6 =&gt; 7,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           7 =&gt; 8,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><p>如果集合中的元素个数无法被整除，则会导致拆分后的集合的数量不一致。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$collection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">$collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">chunk</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1088</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       Illuminate\\Support\\Collection {#1091</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           1,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           2,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           3,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       Illuminate\\Support\\Collection {#1090</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           3 =&gt; 4,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           4 =&gt; 5,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           5 =&gt; 6,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       Illuminate\\Support\\Collection {#1089</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           6 =&gt; 7,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           7 =&gt; 8,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$collection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#24292E;">$collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">chunk</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1088</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       Illuminate\\Support\\Collection {#1091</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           1,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           2,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           3,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       Illuminate\\Support\\Collection {#1090</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           3 =&gt; 4,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           4 =&gt; 5,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           5 =&gt; 6,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       Illuminate\\Support\\Collection {#1089</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           6 =&gt; 7,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           7 =&gt; 8,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div>`,5),o=[t];function e(c,i,y,r,E,B){return n(),l("div",null,o)}const F=s(p,[["render",e]]);export{f as __pageData,F as default};
