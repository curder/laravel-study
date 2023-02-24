import{_ as s,c as n,o as a,a as l}from"./app.fec078ba.js";const C=JSON.parse('{"title":"dump","description":"","frontmatter":{},"headers":[],"relativePath":"collections/dump.md","lastUpdated":1648089437000}'),p={name:"collections/dump.md"},o=l(`<h1 id="dump" tabindex="-1">dump <a class="header-anchor" href="#dump" aria-hidden="true">#</a></h1><p>打印集合的元素，在调试时很有帮助。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">reverse</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">dump</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 打印输出</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">map</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">fn</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">value </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">reverse</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">dump</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 打印输出</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">first</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">array:4 [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  3 =&gt; 4</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  2 =&gt; 3</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  1 =&gt; 2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  0 =&gt; 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">array:4 [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  0 =&gt; 10</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  1 =&gt; 20</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  2 =&gt; 30</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  3 =&gt; 40</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">10</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span></code></pre></div><p>我们可以通过在链式调用集合方法的时候使用<code>dump</code>打印出当前的集合状态，以便查看集合状态。</p><p>如果需要在某处停止链式调用，建议使用 <a href="./dd.html">dd</a> 方法。</p>`,5),t=[o];function e(c,r,y,i,F,D){return a(),n("div",null,t)}const d=s(p,[["render",e]]);export{C as __pageData,d as default};
