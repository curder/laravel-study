import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.aefb929a.js";const D=JSON.parse('{"title":"prepend","description":"","frontmatter":{},"headers":[],"relativePath":"collections/prepend.md","filePath":"collections/prepend.md","lastUpdated":1616865921000}'),p={name:"collections/prepend.md"},o=l(`<h1 id="prepend" tabindex="-1">prepend <a class="header-anchor" href="#prepend" aria-label="Permalink to &quot;prepend&quot;">​</a></h1><p>将给定的值添加到集合的开头。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$collection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">prepend</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dump</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">$collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">array:6 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  0 =&gt; 0</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  1 =&gt; 1</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  2 =&gt; 2</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  3 =&gt; 3</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  4 =&gt; 4</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  5 =&gt; 5</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     0,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     1,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     2,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     3,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     4,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     5,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   ]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$collection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">prepend</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dump</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">$collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">array:6 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  0 =&gt; 0</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  1 =&gt; 1</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  2 =&gt; 2</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  3 =&gt; 3</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  4 =&gt; 4</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  5 =&gt; 5</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     0,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     1,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     2,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     3,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     4,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     5,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   ]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><p>也可以传递第二个参数来设置前置项的键</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$collection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;one&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;two&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">prepend</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;zero&#39;</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dump</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">$collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// [&#39;zero&#39; =&gt; 0, &#39;one&#39; =&gt; 1, &#39;two&#39; =&gt; 2]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">array:3 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  &quot;zero&quot; =&gt; 0</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  &quot;one&quot; =&gt; 1</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  &quot;two&quot; =&gt; 2</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     &quot;zero&quot; =&gt; 0,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     &quot;one&quot; =&gt; 1,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     &quot;two&quot; =&gt; 2,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   ]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$collection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;one&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;two&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">prepend</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;zero&#39;</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dump</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">$collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// [&#39;zero&#39; =&gt; 0, &#39;one&#39; =&gt; 1, &#39;two&#39; =&gt; 2]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">array:3 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  &quot;zero&quot; =&gt; 0</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  &quot;one&quot; =&gt; 1</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  &quot;two&quot; =&gt; 2</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     &quot;zero&quot; =&gt; 0,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     &quot;one&quot; =&gt; 1,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     &quot;two&quot; =&gt; 2,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   ]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div>`,5),t=[o];function e(c,r,i,y,E,F){return n(),a("div",null,t)}const g=s(p,[["render",e]]);export{D as __pageData,g as default};
