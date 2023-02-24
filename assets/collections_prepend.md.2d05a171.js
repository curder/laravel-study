import{_ as s,c as n,o as a,a as l}from"./app.01bb702b.js";const A=JSON.parse('{"title":"prepend","description":"","frontmatter":{},"headers":[],"relativePath":"collections/prepend.md","lastUpdated":1616865921000}'),p={name:"collections/prepend.md"},o=l(`<h1 id="prepend" tabindex="-1">prepend <a class="header-anchor" href="#prepend" aria-hidden="true">#</a></h1><p>将给定的值添加到集合的开头。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">prepend</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)-&gt;</span><span style="color:#82AAFF;">dump</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">all</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">array:6 [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  0 =&gt; 0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  1 =&gt; 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  2 =&gt; 2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  3 =&gt; 3</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  4 =&gt; 4</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  5 =&gt; 5</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">=&gt; [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     0,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     2,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     3,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     4,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     5,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   ]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span></code></pre></div><p>也可以传递第二个参数来设置前置项的键</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">one</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">two</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">prepend</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">zero</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)-&gt;</span><span style="color:#82AAFF;">dump</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">all</span><span style="color:#89DDFF;">();</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// [&#39;zero&#39; =&gt; 0, &#39;one&#39; =&gt; 1, &#39;two&#39; =&gt; 2]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">array:3 [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  &quot;zero&quot; =&gt; 0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  &quot;one&quot; =&gt; 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  &quot;two&quot; =&gt; 2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">=&gt; [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     &quot;zero&quot; =&gt; 0,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     &quot;one&quot; =&gt; 1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     &quot;two&quot; =&gt; 2,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   ]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span></code></pre></div>`,5),t=[o];function e(c,r,i,y,F,D){return a(),n("div",null,t)}const d=s(p,[["render",e]]);export{A as __pageData,d as default};
