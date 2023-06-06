import{_ as s,o as l,c as a,O as n}from"./chunks/framework.5035f75f.js";const C=JSON.parse('{"title":"pull","description":"","frontmatter":{},"headers":[],"relativePath":"collections/pull.md","filePath":"collections/pull.md","lastUpdated":1616865921000}'),o={name:"collections/pull.md"},p=n(`<h1 id="pull" tabindex="-1">pull <a class="header-anchor" href="#pull" aria-label="Permalink to &quot;pull&quot;">​</a></h1><p>把给定键对应的值从集合中移除并返回。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">product_id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">prod-100</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Desk</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">pull</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;Desk&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">all</span><span style="color:#89DDFF;">();</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// [&#39;product_id&#39; =&gt; &#39;prod-100&#39;]</span></span></code></pre></div>`,3),e=[p];function t(c,r,D,F,y,i){return l(),a("div",null,e)}const d=s(o,[["render",t]]);export{C as __pageData,d as default};
