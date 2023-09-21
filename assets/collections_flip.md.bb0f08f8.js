import{_ as s,o as a,c as l,Q as n}from"./chunks/framework.5499cfac.js";const d=JSON.parse('{"title":"flip","description":"","frontmatter":{},"headers":[],"relativePath":"collections/flip.md","filePath":"collections/flip.md","lastUpdated":1616865921000}'),p={name:"collections/flip.md"},o=n(`<h1 id="flip" tabindex="-1">flip <a class="header-anchor" href="#flip" aria-label="Permalink to &quot;flip&quot;">​</a></h1><p>将集合中的键和对应的数值进行互换。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;taylor&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;framework&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;laravel&#39;</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">flip</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1075</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       &quot;taylor&quot; =&gt; &quot;name&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       &quot;laravel&quot; =&gt; &quot;framework&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;taylor&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;framework&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;laravel&#39;</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">flip</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1075</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       &quot;taylor&quot; =&gt; &quot;name&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       &quot;laravel&quot; =&gt; &quot;framework&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div>`,3),t=[o];function e(c,r,i,y,E,f){return a(),l("div",null,t)}const _=s(p,[["render",e]]);export{d as __pageData,_ as default};
