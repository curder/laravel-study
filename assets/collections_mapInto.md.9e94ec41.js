import{_ as s,o as n,c as a,O as l}from"./chunks/framework.5035f75f.js";const A=JSON.parse('{"title":"mapInto","description":"","frontmatter":{},"headers":[],"relativePath":"collections/mapInto.md","filePath":"collections/mapInto.md","lastUpdated":1616865921000}'),p={name:"collections/mapInto.md"},o=l(`<h1 id="mapinto" tabindex="-1">mapInto <a class="header-anchor" href="#mapinto" aria-label="Permalink to &quot;mapInto&quot;">​</a></h1><p>遍历集合，通过将值传递给构造函数来创建给定类的新实例。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">mapInto</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Coverter</span><span style="color:#89DDFF;">::</span><span style="color:#F78C6C;">class</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">dump</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">map</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">coverter</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">coverter</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">toCentimeters</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">dump</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">dump</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Coverter</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">amount</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">__construct</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">amount</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$this-&gt;</span><span style="color:#A6ACCD;">amount </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">amount</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">toCentimeters</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$this-&gt;</span><span style="color:#A6ACCD;">amount </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">54</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">array:4 [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  0 =&gt; Coverter {#1105</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    -amount: 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  1 =&gt; Coverter {#1104</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    -amount: 2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  2 =&gt; Coverter {#1103</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    -amount: 3</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  3 =&gt; Coverter {#1102</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    -amount: 4</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">array:4 [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  0 =&gt; 2.54</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  1 =&gt; 5.08</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  2 =&gt; 7.62</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  3 =&gt; 10.16</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">array:4 [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  0 =&gt; 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  1 =&gt; 2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  2 =&gt; 3</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  3 =&gt; 4</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">] </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span></code></pre></div>`,3),t=[o];function e(c,r,y,i,D,F){return n(),a("div",null,t)}const f=s(p,[["render",e]]);export{A as __pageData,f as default};
