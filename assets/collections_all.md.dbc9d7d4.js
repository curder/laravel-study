import{_ as s,c as a,o as n,a as l}from"./app.01bb702b.js";const A=JSON.parse('{"title":"all","description":"","frontmatter":{},"headers":[{"level":2,"title":"与 toArray 的区别","slug":"与-toarray-的区别","link":"#与-toarray-的区别","children":[{"level":3,"title":"嵌套集合 all","slug":"嵌套集合-all","link":"#嵌套集合-all","children":[]},{"level":3,"title":"嵌套集合 toArray","slug":"嵌套集合-toarray","link":"#嵌套集合-toarray","children":[]}]}],"relativePath":"collections/all.md","lastUpdated":1616865921000}'),p={name:"collections/all.md"},o=l(`<h1 id="all" tabindex="-1">all <a class="header-anchor" href="#all" aria-hidden="true">#</a></h1><p>该方法返回该集合表示的底层<strong>数组</strong>。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">])-&gt;</span><span style="color:#82AAFF;">all</span><span style="color:#89DDFF;">();</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// [1, 2, 3, 4]</span></span>
<span class="line"></span></code></pre></div><p>上面 <code>all</code> 方法的调用类似于 <code>toArray</code></p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">])-&gt;</span><span style="color:#82AAFF;">toArray</span><span style="color:#89DDFF;">();</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// [1, 2, 3, 4]</span></span>
<span class="line"></span></code></pre></div><h2 id="与-toarray-的区别" tabindex="-1">与 toArray 的区别 <a class="header-anchor" href="#与-toarray-的区别" aria-hidden="true">#</a></h2><p>all 方法与 toArray 方法的区别在于嵌套集合在调用方法后生成的结果不同。</p><h3 id="嵌套集合-all" tabindex="-1">嵌套集合 all <a class="header-anchor" href="#嵌套集合-all" aria-hidden="true">#</a></h3><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">]),</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">])])-&gt;</span><span style="color:#82AAFF;">all</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">[</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> Illuminate\\Support\\Collection {#1092</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     2,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     3,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     4,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> Illuminate\\Support\\Collection {#1091</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     2,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     3,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     4,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span></code></pre></div><p>使用 all 方法只会将第一层的格式化数组。</p><h3 id="嵌套集合-toarray" tabindex="-1">嵌套集合 toArray <a class="header-anchor" href="#嵌套集合-toarray" aria-hidden="true">#</a></h3><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">]),</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">])])-&gt;</span><span style="color:#82AAFF;">toArray</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">[</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   2,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   3,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   4,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   2,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   3,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   4,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span></code></pre></div><p>使用 toArray 方法会将所有集合都格式化成数组。</p><p>同时对于多层级也是有效的</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">])]),</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">])])-&gt;</span><span style="color:#82AAFF;">toArray</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">[</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     2,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     3,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     4,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   2,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   3,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   4,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span></code></pre></div>`,15),t=[o];function e(c,r,y,i,F,C){return n(),a("div",null,t)}const d=s(p,[["render",e]]);export{A as __pageData,d as default};
