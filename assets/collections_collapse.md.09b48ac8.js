import{_ as s,o as n,c as a,O as l}from"./chunks/framework.5035f75f.js";const A=JSON.parse('{"title":"collapse","description":"","frontmatter":{},"headers":[],"relativePath":"collections/collapse.md","filePath":"collections/collapse.md","lastUpdated":1616865921000}'),p={name:"collections/collapse.md"},o=l(`<h1 id="collapse" tabindex="-1">collapse <a class="header-anchor" href="#collapse" aria-label="Permalink to &quot;collapse&quot;">​</a></h1><p>将多个数组合并成一个。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">]]);</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">collapse</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1097</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       2,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       3,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       4,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       5,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       6,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       7,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       8,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       9,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span></code></pre></div><p>上面方法的使用类似于 <code>flatten</code> 方法的调用结果。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">array1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]],</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">array2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]],</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">array3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]],</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">collapse</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1102</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;array1&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;array2&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;array3&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       3,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       4,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       5,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span></code></pre></div><p>上面方法的使用类似于 <code>flatten(1)</code> 方法的调用结果。</p>`,6),t=[o];function e(c,y,r,i,D,F){return n(),a("div",null,t)}const f=s(p,[["render",e]]);export{A as __pageData,f as default};
