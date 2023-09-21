import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.5499cfac.js";const B=JSON.parse('{"title":"shuffle","description":"","frontmatter":{},"headers":[],"relativePath":"collections/shuffle.md","filePath":"collections/shuffle.md","lastUpdated":1616865921000}'),p={name:"collections/shuffle.md"},o=l(`<h1 id="shuffle" tabindex="-1">shuffle <a class="header-anchor" href="#shuffle" aria-label="Permalink to &quot;shuffle&quot;">​</a></h1><p>随机排序集合中的项目。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$collection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$shuffled </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">shuffle</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">dump</span><span style="color:#E1E4E8;">($shuffled</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">$collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dd</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">array:5 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  0 =&gt; 3</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  1 =&gt; 4</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  2 =&gt; 2</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  3 =&gt; 1</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  4 =&gt; 5</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">array:5 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  0 =&gt; 1</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  1 =&gt; 2</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  2 =&gt; 3</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  3 =&gt; 4</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  4 =&gt; 5</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$collection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$shuffled </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">shuffle</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">dump</span><span style="color:#24292E;">($shuffled</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">$collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dd</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">array:5 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  0 =&gt; 3</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  1 =&gt; 4</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  2 =&gt; 2</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  3 =&gt; 1</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  4 =&gt; 5</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">array:5 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  0 =&gt; 1</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  1 =&gt; 2</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  2 =&gt; 3</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  3 =&gt; 4</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  4 =&gt; 5</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div>`,3),t=[o];function e(c,i,r,y,E,f){return n(),a("div",null,t)}const D=s(p,[["render",e]]);export{B as __pageData,D as default};
