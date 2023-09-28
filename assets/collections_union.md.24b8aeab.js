import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.e8ee2c8f.js";const F=JSON.parse('{"title":"union","description":"","frontmatter":{},"headers":[],"relativePath":"collections/union.md","filePath":"collections/union.md","lastUpdated":1695893036000}'),o={name:"collections/union.md"},p=l(`<h1 id="union" tabindex="-1">union <a class="header-anchor" href="#union" aria-label="Permalink to &quot;union&quot;">​</a></h1><p>将给定的数组添加到集合中。如果给定的数组中含有与原集合一样的键，则原集合的值不会被改变，求并集。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;">], </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;b&#39;</span><span style="color:#E1E4E8;">]])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">union</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;c&#39;</span><span style="color:#E1E4E8;">], </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;b&#39;</span><span style="color:#E1E4E8;">]]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1087</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       1 =&gt; [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;a&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       2 =&gt; [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;b&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       3 =&gt; [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;c&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;">], </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;b&#39;</span><span style="color:#24292E;">]])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">union</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">3</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;c&#39;</span><span style="color:#24292E;">], </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;b&#39;</span><span style="color:#24292E;">]]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1087</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       1 =&gt; [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;a&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       2 =&gt; [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;b&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       3 =&gt; [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;c&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><h2 id="相关方法" tabindex="-1">相关方法 <a class="header-anchor" href="#相关方法" aria-label="Permalink to &quot;相关方法&quot;">​</a></h2><ul><li><a href="./intersect.html">intersect</a></li><li><a href="./diff.html">diff</a></li></ul>`,5),t=[p];function e(c,i,r,y,E,u){return n(),a("div",null,t)}const B=s(o,[["render",e]]);export{F as __pageData,B as default};
