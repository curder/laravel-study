import{_ as s,c as n,o as a,a as l}from"./app.b2983bf2.js";const d=JSON.parse('{"title":"reverse","description":"","frontmatter":{},"headers":[{"level":2,"title":"简单数组","slug":"简单数组","link":"#简单数组","children":[]},{"level":2,"title":"键值对数组","slug":"键值对数组","link":"#键值对数组","children":[]},{"level":2,"title":"重置新集合的key","slug":"重置新集合的key","link":"#重置新集合的key","children":[]}],"relativePath":"collections/reverse.md","lastUpdated":1648089437000}'),p={name:"collections/reverse.md"},e=l(`<h1 id="reverse" tabindex="-1">reverse <a class="header-anchor" href="#reverse" aria-hidden="true">#</a></h1><p>倒转集合中项目的顺序。</p><h2 id="简单数组" tabindex="-1">简单数组 <a class="header-anchor" href="#简单数组" aria-hidden="true">#</a></h2><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">])-&gt;</span><span style="color:#82AAFF;">reverse</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1209</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       3 =&gt; 4,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       2 =&gt; 3,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       1 =&gt; 2,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       0 =&gt; 1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span></code></pre></div><h2 id="键值对数组" tabindex="-1">键值对数组 <a class="header-anchor" href="#键值对数组" aria-hidden="true">#</a></h2><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">key1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">string1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">key2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">string2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">key3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">string3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">])-&gt;</span><span style="color:#82AAFF;">reverse</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1210</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       &quot;key3&quot; =&gt; &quot;string3&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       &quot;key2&quot; =&gt; &quot;string2&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       &quot;key1&quot; =&gt; &quot;string1&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span></code></pre></div><blockquote><p><strong>注意：</strong> 倒转后集合的 key 保持原集合的 key 值。</p></blockquote><h2 id="重置新集合的key" tabindex="-1">重置新集合的key <a class="header-anchor" href="#重置新集合的key" aria-hidden="true">#</a></h2><p>如果不希望保留原集合中的 key ，可以调用 <a href="./values.html">values</a> 方法。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">reverse</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">values</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1212</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       4,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       3,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       2,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span></code></pre></div>`,10),t=[e];function o(c,r,i,y,D,F){return a(),n("div",null,t)}const A=s(p,[["render",o]]);export{d as __pageData,A as default};
