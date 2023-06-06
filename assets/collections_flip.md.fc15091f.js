import{_ as s,o as a,c as l,O as n}from"./chunks/framework.5035f75f.js";const _=JSON.parse('{"title":"flip","description":"","frontmatter":{},"headers":[],"relativePath":"collections/flip.md","filePath":"collections/flip.md","lastUpdated":1616865921000}'),o={name:"collections/flip.md"},t=n(`<h1 id="flip" tabindex="-1">flip <a class="header-anchor" href="#flip" aria-label="Permalink to &quot;flip&quot;">​</a></h1><p>将集合中的键和对应的数值进行互换。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">taylor</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">framework</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">laravel</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">])-&gt;</span><span style="color:#82AAFF;">flip</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1075</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       &quot;taylor&quot; =&gt; &quot;name&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       &quot;laravel&quot; =&gt; &quot;framework&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span></code></pre></div>`,3),p=[t];function e(c,r,i,y,D,F){return a(),l("div",null,p)}const d=s(o,[["render",e]]);export{_ as __pageData,d as default};
