import{_ as s,c as n,o as a,a as l}from"./app.b2983bf2.js";const A=JSON.parse('{"title":"partition","description":"","frontmatter":{},"headers":[],"relativePath":"collections/partition.md","lastUpdated":1616865921000}'),p={name:"collections/partition.md"},o=l(`<h1 id="partition" tabindex="-1">partition <a class="header-anchor" href="#partition" aria-hidden="true">#</a></h1><p>可以和 PHP 中的 <code>list()</code> 方法结合使用，来分开通过指定条件的元素以及那些不通过指定条件的元素。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">list</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">underThree</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">equalOrAboveThree</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">partition</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">underThree</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">dump</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">equalOrAboveThree</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">dd</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">array:2 [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  0 =&gt; 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  1 =&gt; 2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">array:4 [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  2 =&gt; 3</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  3 =&gt; 4</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  4 =&gt; 5</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  5 =&gt; 6</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span></code></pre></div>`,3),t=[o];function e(c,r,i,y,D,F){return a(),n("div",null,t)}const d=s(p,[["render",e]]);export{A as __pageData,d as default};
