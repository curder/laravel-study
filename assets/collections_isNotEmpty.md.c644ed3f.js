import{_ as s,c as a,o as n,a as l}from"./app.fec078ba.js";const m=JSON.parse('{"title":"isNotEmpty","description":"","frontmatter":{},"headers":[],"relativePath":"collections/isNotEmpty.md","lastUpdated":1648089437000}'),p={name:"collections/isNotEmpty.md"},t=l(`<h1 id="isnotempty" tabindex="-1">isNotEmpty <a class="header-anchor" href="#isnotempty" aria-hidden="true">#</a></h1><p>集合不是空的，<code>isNotEmpty</code> 方法会返回 <code>true</code>，否则返回 <code>false</code>。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([])-&gt;</span><span style="color:#82AAFF;">isNotEmpty</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">=&gt; false</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span></code></pre></div><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">])-&gt;</span><span style="color:#82AAFF;">isNotEmpty</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">=&gt; true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span></code></pre></div><p><code>isNotEmpty</code> 方法不会检查集合中的元素的类型，仅仅检查集合是否为空。比如：集合中有且仅有 <code>null</code>, <code>&#39;&#39;</code>, <code>0</code>, <code>false</code> 等元素的时候，返回值依然是 <code>false</code>。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">])-&gt;</span><span style="color:#82AAFF;">isNotEmpty</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">=&gt; true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span></code></pre></div><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([null])-&gt;</span><span style="color:#82AAFF;">isNotEmpty</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">=&gt; true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span></code></pre></div><p>与 <code>isNotEmpty</code> 相反操作的方法是 <a href="./isEmpty.html">isEmpty</a> 方法。</p>`,8),e=[t];function o(c,i,r,y,d,F){return n(),a("div",null,e)}const D=s(p,[["render",o]]);export{m as __pageData,D as default};
