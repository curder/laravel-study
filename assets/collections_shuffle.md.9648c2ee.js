import{_ as s,o as n,c as a,O as l}from"./chunks/framework.5035f75f.js";const C=JSON.parse('{"title":"shuffle","description":"","frontmatter":{},"headers":[],"relativePath":"collections/shuffle.md","filePath":"collections/shuffle.md","lastUpdated":1616865921000}'),p={name:"collections/shuffle.md"},o=l(`<h1 id="shuffle" tabindex="-1">shuffle <a class="header-anchor" href="#shuffle" aria-label="Permalink to &quot;shuffle&quot;">​</a></h1><p>随机排序集合中的项目。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">shuffled </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">shuffle</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">dump</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">shuffled</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">all</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">dd</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">array:5 [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  0 =&gt; 3</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  1 =&gt; 4</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  2 =&gt; 2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  3 =&gt; 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  4 =&gt; 5</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">array:5 [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  0 =&gt; 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  1 =&gt; 2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  2 =&gt; 3</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  3 =&gt; 4</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  4 =&gt; 5</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span></code></pre></div>`,3),t=[o];function e(c,r,i,y,F,D){return n(),a("div",null,t)}const A=s(p,[["render",e]]);export{C as __pageData,A as default};
