import{_ as s,c as a,o as n,a as l}from"./app.b2983bf2.js";const A=JSON.parse('{"title":"shift","description":"","frontmatter":{},"headers":[],"relativePath":"collections/shift.md","lastUpdated":1616865921000}'),o={name:"collections/shift.md"},p=l(`<h1 id="shift" tabindex="-1">shift <a class="header-anchor" href="#shift" aria-hidden="true">#</a></h1><p>移除并返回集合的第一个项目。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">shift</span><span style="color:#89DDFF;">();</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">all</span><span style="color:#89DDFF;">();</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// [2, 3, 4, 5]</span></span>
<span class="line"></span></code></pre></div>`,3),t=[p];function e(c,r,i,D,F,y){return n(),a("div",null,t)}const _=s(o,[["render",e]]);export{A as __pageData,_ as default};
