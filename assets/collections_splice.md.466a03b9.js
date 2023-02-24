import{_ as s,c as n,o as a,a as l}from"./app.fec078ba.js";const A=JSON.parse('{"title":"splice","description":"","frontmatter":{},"headers":[],"relativePath":"collections/splice.md","lastUpdated":1616984662000}'),p={name:"collections/splice.md"},o=l(`<h1 id="splice" tabindex="-1">splice <a class="header-anchor" href="#splice" aria-hidden="true">#</a></h1><p>删除并返回从给定值后的内容，原集合也会受到影响。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">newCollection </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">splice</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">newCollection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">dump</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">dd</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">array:3 [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  0 =&gt; 3</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  1 =&gt; 4</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  2 =&gt; 5</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">array:2 [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  0 =&gt; 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  1 =&gt; 2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span></code></pre></div><blockquote><p>如果输入的值不存在则原集合内容不变。</p></blockquote><p>可以传入第二个参数以限制被删除内容的大小。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">newCollection </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">splice</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">newCollection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">dump</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">dd</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">array:1 [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  0 =&gt; 3</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">array:4 [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  0 =&gt; 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  1 =&gt; 2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  2 =&gt; 4</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  3 =&gt; 5</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span></code></pre></div><p>也可以传入含有新项目的第三个参数来代替集合中删除的项目。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">newCollection </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">splice</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">newCollection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">dump</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">dd</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">array:1 [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  0 =&gt; 3</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">array:6 [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  0 =&gt; 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  1 =&gt; 2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  2 =&gt; 10</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  3 =&gt; 11</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  4 =&gt; 4</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  5 =&gt; 5</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span></code></pre></div>`,8),t=[o];function e(c,y,r,i,F,D){return a(),n("div",null,t)}const d=s(p,[["render",e]]);export{A as __pageData,d as default};
