import{_ as s,c as n,o as a,a as l}from"./app.ffb5f3c8.js";const d=JSON.parse('{"title":"unwrap","description":"","frontmatter":{},"headers":[],"relativePath":"collections/unwrap.md","lastUpdated":1616865921000}'),p={name:"collections/unwrap.md"},t=l(`<h1 id="unwrap" tabindex="-1">unwrap <a class="header-anchor" href="#unwrap" aria-hidden="true">#</a></h1><p>静态 <code>unwrap</code> 方法在适用时从给定值返回集合的基础项。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">Illuminate</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Support</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Collection</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">unwrap</span><span style="color:#89DDFF;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">=&gt; [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     &quot;string&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   ]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span></code></pre></div><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">Illuminate</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Support</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Collection</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">unwrap</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">=&gt; &quot;string&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span></code></pre></div><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">Illuminate</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Support</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Collection</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">unwrap</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">=&gt; [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     &quot;string&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   ]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span></code></pre></div>`,5),o=[t];function e(c,i,r,y,F,D){return a(),n("div",null,o)}const C=s(p,[["render",e]]);export{d as __pageData,C as default};
