import{_ as s,c as n,o as l,a}from"./app.fec078ba.js";const f=JSON.parse('{"title":"chuck","description":"","frontmatter":{},"headers":[],"relativePath":"collections/chuck.md","lastUpdated":1616865921000}'),p={name:"collections/chuck.md"},t=a(`<h1 id="chuck" tabindex="-1">chuck <a class="header-anchor" href="#chuck" aria-hidden="true">#</a></h1><p>将集合拆分多个指定大小的小集合。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">chunk</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1089</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       Illuminate\\Support\\Collection {#1091</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           2,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           3,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           4,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       Illuminate\\Support\\Collection {#1090</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           4 =&gt; 5,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           5 =&gt; 6,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           6 =&gt; 7,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           7 =&gt; 8,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span></code></pre></div><p>如果集合中的元素个数无法被整除，则会导致拆分后的集合的数量不一致。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">chunk</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1088</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       Illuminate\\Support\\Collection {#1091</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           2,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           3,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       Illuminate\\Support\\Collection {#1090</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           3 =&gt; 4,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           4 =&gt; 5,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           5 =&gt; 6,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       Illuminate\\Support\\Collection {#1089</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           6 =&gt; 7,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           7 =&gt; 8,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span></code></pre></div>`,5),o=[t];function e(c,i,y,r,C,F){return l(),n("div",null,o)}const E=s(p,[["render",e]]);export{f as __pageData,E as default};
