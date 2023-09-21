import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.5499cfac.js";const q=JSON.parse('{"title":"sortByDesc","description":"","frontmatter":{},"headers":[],"relativePath":"collections/sortByDesc.md","filePath":"collections/sortByDesc.md","lastUpdated":1648089437000}'),p={name:"collections/sortByDesc.md"},o=l(`<h1 id="sortbydesc" tabindex="-1">sortByDesc <a class="header-anchor" href="#sortbydesc" aria-label="Permalink to &quot;sortByDesc&quot;">​</a></h1><p>以给定的键对集合进行正序排序。</p><p><code>sortByDesc</code> 方法默认是正序排序，即数值越小排序越靠前。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;apples&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;coconuts&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;bananas&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">sortByDesc</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">=&gt; Illuminate\\Support\\Collection {#1226</span></span>
<span class="line"><span style="color:#6A737D;">     all: [</span></span>
<span class="line"><span style="color:#6A737D;">       0 =&gt; [</span></span>
<span class="line"><span style="color:#6A737D;">         &quot;product&quot; =&gt; &quot;apples&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">         &quot;price&quot; =&gt; 9,</span></span>
<span class="line"><span style="color:#6A737D;">       ],</span></span>
<span class="line"><span style="color:#6A737D;">       2 =&gt; [</span></span>
<span class="line"><span style="color:#6A737D;">         &quot;product&quot; =&gt; &quot;bananas&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">         &quot;price&quot; =&gt; 5,</span></span>
<span class="line"><span style="color:#6A737D;">       ],</span></span>
<span class="line"><span style="color:#6A737D;">       1 =&gt; [</span></span>
<span class="line"><span style="color:#6A737D;">         &quot;product&quot; =&gt; &quot;coconuts&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">         &quot;price&quot; =&gt; 3,</span></span>
<span class="line"><span style="color:#6A737D;">       ],</span></span>
<span class="line"><span style="color:#6A737D;">     ],</span></span>
<span class="line"><span style="color:#6A737D;">   } </span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;apples&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">9</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;coconuts&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;bananas&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">sortByDesc</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">=&gt; Illuminate\\Support\\Collection {#1226</span></span>
<span class="line"><span style="color:#6A737D;">     all: [</span></span>
<span class="line"><span style="color:#6A737D;">       0 =&gt; [</span></span>
<span class="line"><span style="color:#6A737D;">         &quot;product&quot; =&gt; &quot;apples&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">         &quot;price&quot; =&gt; 9,</span></span>
<span class="line"><span style="color:#6A737D;">       ],</span></span>
<span class="line"><span style="color:#6A737D;">       2 =&gt; [</span></span>
<span class="line"><span style="color:#6A737D;">         &quot;product&quot; =&gt; &quot;bananas&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">         &quot;price&quot; =&gt; 5,</span></span>
<span class="line"><span style="color:#6A737D;">       ],</span></span>
<span class="line"><span style="color:#6A737D;">       1 =&gt; [</span></span>
<span class="line"><span style="color:#6A737D;">         &quot;product&quot; =&gt; &quot;coconuts&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">         &quot;price&quot; =&gt; 3,</span></span>
<span class="line"><span style="color:#6A737D;">       ],</span></span>
<span class="line"><span style="color:#6A737D;">     ],</span></span>
<span class="line"><span style="color:#6A737D;">   } </span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div><p>如果需要按照数值越大越靠前的倒序排序方式，可以再调用 <a href="./reverse.html">reverse</a> 方法；</p><p>或者使用 <a href="./sortBy.html">sortBy</a> 方法。</p><p>传入回调函数以决定如何对集合的值进行排序</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;apples&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;code&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;A-30&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;coconuts&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;code&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;A20&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;bananas&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;code&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;A50&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">sortByDesc</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> ($item) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">str_replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;-&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">, $item[</span><span style="color:#9ECBFF;">&#39;code&#39;</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1248</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       2 =&gt; [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;product&quot; =&gt; &quot;bananas&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;price&quot; =&gt; 5,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;code&quot; =&gt; &quot;A50&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       0 =&gt; [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;product&quot; =&gt; &quot;apples&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;price&quot; =&gt; 9,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;code&quot; =&gt; &quot;A-30&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       1 =&gt; [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;product&quot; =&gt; &quot;coconuts&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;price&quot; =&gt; 3,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;code&quot; =&gt; &quot;A20&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   } </span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;apples&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">9</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;code&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;A-30&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;coconuts&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;code&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;A20&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;bananas&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;code&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;A50&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">sortByDesc</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> ($item) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">str_replace</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;-&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">, $item[</span><span style="color:#032F62;">&#39;code&#39;</span><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1248</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       2 =&gt; [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;product&quot; =&gt; &quot;bananas&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;price&quot; =&gt; 5,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;code&quot; =&gt; &quot;A50&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       0 =&gt; [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;product&quot; =&gt; &quot;apples&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;price&quot; =&gt; 9,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;code&quot; =&gt; &quot;A-30&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       1 =&gt; [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;product&quot; =&gt; &quot;coconuts&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;price&quot; =&gt; 3,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;code&quot; =&gt; &quot;A20&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   } </span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><h2 id="不改变原集合" tabindex="-1">不改变原集合 <a class="header-anchor" href="#不改变原集合" aria-label="Permalink to &quot;不改变原集合&quot;">​</a></h2><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$collection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;apples&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;code&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;A-30&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;coconuts&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;code&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;A20&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;bananas&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;code&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;A50&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$newCollection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">sortByDesc</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> ($item) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">str_replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;-&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">, $item[</span><span style="color:#9ECBFF;">&#39;code&#39;</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$newCollection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dump</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">$collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dd</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">array:3 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  2 =&gt; array:3 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;product&quot; =&gt; &quot;bananas&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;price&quot; =&gt; 5</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;code&quot; =&gt; &quot;A50&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  0 =&gt; array:3 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;product&quot; =&gt; &quot;apples&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;price&quot; =&gt; 9</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;code&quot; =&gt; &quot;A-30&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  1 =&gt; array:3 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;product&quot; =&gt; &quot;coconuts&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;price&quot; =&gt; 3</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;code&quot; =&gt; &quot;A20&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">array:3 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  0 =&gt; array:3 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;product&quot; =&gt; &quot;apples&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;price&quot; =&gt; 9</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;code&quot; =&gt; &quot;A-30&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  1 =&gt; array:3 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;product&quot; =&gt; &quot;coconuts&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;price&quot; =&gt; 3</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;code&quot; =&gt; &quot;A20&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  2 =&gt; array:3 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;product&quot; =&gt; &quot;bananas&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;price&quot; =&gt; 5</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;code&quot; =&gt; &quot;A50&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">] </span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$collection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;apples&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">9</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;code&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;A-30&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;coconuts&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;code&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;A20&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;bananas&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;code&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;A50&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$newCollection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">sortByDesc</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> ($item) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">str_replace</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;-&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">, $item[</span><span style="color:#032F62;">&#39;code&#39;</span><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$newCollection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dump</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">$collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dd</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">array:3 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  2 =&gt; array:3 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;product&quot; =&gt; &quot;bananas&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;price&quot; =&gt; 5</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;code&quot; =&gt; &quot;A50&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  0 =&gt; array:3 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;product&quot; =&gt; &quot;apples&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;price&quot; =&gt; 9</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;code&quot; =&gt; &quot;A-30&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  1 =&gt; array:3 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;product&quot; =&gt; &quot;coconuts&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;price&quot; =&gt; 3</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;code&quot; =&gt; &quot;A20&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">array:3 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  0 =&gt; array:3 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;product&quot; =&gt; &quot;apples&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;price&quot; =&gt; 9</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;code&quot; =&gt; &quot;A-30&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  1 =&gt; array:3 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;product&quot; =&gt; &quot;coconuts&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;price&quot; =&gt; 3</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;code&quot; =&gt; &quot;A20&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  2 =&gt; array:3 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;product&quot; =&gt; &quot;bananas&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;price&quot; =&gt; 5</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;code&quot; =&gt; &quot;A50&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">] </span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div>`,10),t=[o];function c(e,r,y,E,i,u){return n(),a("div",null,t)}const D=s(p,[["render",c]]);export{q as __pageData,D as default};
