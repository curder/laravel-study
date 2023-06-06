import{_ as s,o as n,c as a,O as l}from"./chunks/framework.5035f75f.js";const E=JSON.parse('{"title":"crossJoin","description":"","frontmatter":{},"headers":[],"relativePath":"collections/crossJoin.md","filePath":"collections/crossJoin.md","lastUpdated":1616865921000}'),t={name:"collections/crossJoin.md"},o=l(`<h1 id="crossjoin" tabindex="-1">crossJoin <a class="header-anchor" href="#crossjoin" aria-label="Permalink to &quot;crossJoin&quot;">​</a></h1><p>将集合的值交叉连接到给定的数组或集合中，返回具有所有可能排列的笛卡尔积。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">crossJoin</span><span style="color:#89DDFF;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1083</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;a&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;b&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         2,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;a&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         2,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;b&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span></code></pre></div><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">crossJoin</span><span style="color:#89DDFF;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">c</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">d</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1089</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;a&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;c&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;a&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;d&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;b&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;c&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;b&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;d&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         2,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;a&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;c&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         2,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;a&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;d&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         2,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;b&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;c&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         2,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;b&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;d&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span></code></pre></div>`,4),p=[o];function e(c,i,y,r,D,F){return n(),a("div",null,p)}const u=s(t,[["render",e]]);export{E as __pageData,u as default};
