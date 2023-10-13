import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.e8ee2c8f.js";const d=JSON.parse('{"title":"whereNotNull","description":"","frontmatter":{},"headers":[],"relativePath":"collections/whereNotNull.md","filePath":"collections/whereNotNull.md","lastUpdated":1697186221000}'),p={name:"collections/whereNotNull.md"},o=l(`<h1 id="wherenotnull" tabindex="-1">whereNotNull <a class="header-anchor" href="#wherenotnull" aria-label="Permalink to &quot;whereNotNull&quot;">​</a></h1><blockquote><p>返回集合中给定键不为 null 的项目</p></blockquote><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$collection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">    [</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Desk&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    [</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    [</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Bookcase&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">whereNotNull</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">[</span></span>
<span class="line"><span style="color:#6A737D;">    [&#39;name&#39; =&gt; &#39;Desk&#39;],</span></span>
<span class="line"><span style="color:#6A737D;">    [&#39;name&#39; =&gt; &#39;Bookcase&#39;]</span></span>
<span class="line"><span style="color:#6A737D;">]</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$collection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">    [</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Desk&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    [</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    [</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Bookcase&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">whereNotNull</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">[</span></span>
<span class="line"><span style="color:#6A737D;">    [&#39;name&#39; =&gt; &#39;Desk&#39;],</span></span>
<span class="line"><span style="color:#6A737D;">    [&#39;name&#39; =&gt; &#39;Bookcase&#39;]</span></span>
<span class="line"><span style="color:#6A737D;">]</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div><h2 id="相关方法" tabindex="-1">相关方法 <a class="header-anchor" href="#相关方法" aria-label="Permalink to &quot;相关方法&quot;">​</a></h2><ul><li><a href="./where.html">where</a></li><li><a href="./whereNull.html">whereNull</a></li></ul>`,5),e=[o];function t(c,r,E,y,i,h){return a(),n("div",null,e)}const F=s(p,[["render",t]]);export{d as __pageData,F as default};
