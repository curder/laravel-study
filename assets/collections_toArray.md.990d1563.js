import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.5499cfac.js";const A=JSON.parse('{"title":"toArray","description":"","frontmatter":{},"headers":[],"relativePath":"collections/toArray.md","filePath":"collections/toArray.md","lastUpdated":1648089437000}'),o={name:"collections/toArray.md"},p=l(`<h1 id="toarray" tabindex="-1">toArray <a class="header-anchor" href="#toarray" aria-label="Permalink to &quot;toArray&quot;">​</a></h1><p>将集合转换成 PHP 数组。如果集合的值是 <code>Eloquent</code> 模型，那也会被转换成数组。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Desk&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">toArray</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">[</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    [&#39;name&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 200],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">]</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Desk&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">toArray</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">[</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    [&#39;name&#39; =&gt; &#39;Desk&#39;, &#39;price&#39; =&gt; 200],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">]</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div><blockquote><p><code>toArray()</code> 也会将所有集合的嵌套对象转换为数组。</p><p>如果获取原数组，应该使用 <a href="./all.html">all</a> 方法。</p></blockquote>`,4),t=[p];function e(c,r,y,i,E,d){return a(),n("div",null,t)}const h=s(o,[["render",e]]);export{A as __pageData,h as default};
