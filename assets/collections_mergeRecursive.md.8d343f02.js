import{_ as s,c as n,o as a,a as l}from"./app.fec078ba.js";const A=JSON.parse('{"title":"mergeRecursive","description":"","frontmatter":{},"headers":[],"relativePath":"collections/mergeRecursive.md","lastUpdated":1616865921000}'),p={name:"collections/mergeRecursive.md"},e=l(`<h1 id="mergerecursive" tabindex="-1">mergeRecursive <a class="header-anchor" href="#mergerecursive" aria-hidden="true">#</a></h1><p>将给定的数组或集合与原始集合递归合并。</p><p>如果给定项中的字符串键与原始集合中的字符串键匹配，则这些键的值将合并到一个数组中，然后递归完成。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">product_id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">price</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">])-&gt;</span><span style="color:#82AAFF;">mergeRecursive</span><span style="color:#89DDFF;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">product_id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">price</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">discount</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false,</span></span>
<span class="line"><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1087</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       &quot;product_id&quot; =&gt; [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         2,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       &quot;price&quot; =&gt; [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         100,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         200,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       &quot;discount&quot; =&gt; false,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span></code></pre></div>`,4),o=[e];function t(c,r,i,y,D,F){return a(),n("div",null,o)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};
