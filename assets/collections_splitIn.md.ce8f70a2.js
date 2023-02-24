import{_ as s,c as n,o as a,a as l}from"./app.4f96a5c9.js";const f=JSON.parse('{"title":"splitIn","description":"","frontmatter":{},"headers":[],"relativePath":"collections/splitIn.md","lastUpdated":1616984938000}'),p={name:"collections/splitIn.md"},t=l(`<h1 id="splitin" tabindex="-1">splitIn <a class="header-anchor" href="#splitin" aria-hidden="true">#</a></h1><p>将集合分为给定数量的组。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">])-&gt;</span><span style="color:#82AAFF;">splitIn</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1084</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       Illuminate\\Support\\Collection {#1087</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           2,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           3,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           4,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       Illuminate\\Support\\Collection {#1086</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           4 =&gt; 5,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           5 =&gt; 6,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           6 =&gt; 7,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           7 =&gt; 8,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       Illuminate\\Support\\Collection {#1085</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           8 =&gt; 9,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           9 =&gt; 10,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span></code></pre></div>`,3),o=[t];function e(c,i,r,y,C,F){return a(),n("div",null,o)}const E=s(p,[["render",e]]);export{f as __pageData,E as default};
