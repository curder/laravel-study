import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.e8ee2c8f.js";const q=JSON.parse('{"title":"whereIn","description":"","frontmatter":{},"headers":[],"relativePath":"collections/whereIn.md","filePath":"collections/whereIn.md","lastUpdated":1648089437000}'),p={name:"collections/whereIn.md"},o=l(`<h1 id="wherein" tabindex="-1">whereIn <a class="header-anchor" href="#wherein" aria-label="Permalink to &quot;whereIn&quot;">​</a></h1><p>通过给定的键值数组来过滤集合。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">	[</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;apples&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;50&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">	[</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;pears&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;60&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">	[</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;banners&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;70&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">	[</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;coconuts&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;80&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">whereIn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;">, [</span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">70</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1242</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       0 =&gt; [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;product&quot; =&gt; &quot;apples&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;price&quot; =&gt; &quot;50&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       2 =&gt; [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;product&quot; =&gt; &quot;banners&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;price&quot; =&gt; &quot;70&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       3 =&gt; [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;product&quot; =&gt; &quot;coconuts&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;price&quot; =&gt; &quot;80&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">	[</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;apples&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;50&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">	[</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;pears&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;60&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">	[</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;banners&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;70&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">	[</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;coconuts&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;80&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">whereIn</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;">, [</span><span style="color:#005CC5;">50</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">70</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1242</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       0 =&gt; [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;product&quot; =&gt; &quot;apples&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;price&quot; =&gt; &quot;50&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       2 =&gt; [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;product&quot; =&gt; &quot;banners&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;price&quot; =&gt; &quot;70&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       3 =&gt; [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;product&quot; =&gt; &quot;coconuts&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;price&quot; =&gt; &quot;80&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><h2 id="不改变原集合" tabindex="-1">不改变原集合 <a class="header-anchor" href="#不改变原集合" aria-label="Permalink to &quot;不改变原集合&quot;">​</a></h2><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$collection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">	[</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;apples&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;50&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">	[</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;pears&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;60&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">	[</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;banners&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;70&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">	[</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;coconuts&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;80&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$newCollection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">whereIn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;">, [</span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">70</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$newCollection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dump</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">$collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dd</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">array:3 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  0 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;product&quot; =&gt; &quot;apples&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;price&quot; =&gt; &quot;50&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  2 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;product&quot; =&gt; &quot;banners&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;price&quot; =&gt; &quot;70&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  3 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;product&quot; =&gt; &quot;coconuts&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;price&quot; =&gt; &quot;80&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">array:4 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  0 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;product&quot; =&gt; &quot;apples&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;price&quot; =&gt; &quot;50&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  1 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;product&quot; =&gt; &quot;pears&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;price&quot; =&gt; &quot;60&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  2 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;product&quot; =&gt; &quot;banners&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;price&quot; =&gt; &quot;70&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  3 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;product&quot; =&gt; &quot;coconuts&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;price&quot; =&gt; &quot;80&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">] </span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$collection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">	[</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;apples&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;50&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">	[</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;pears&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;60&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">	[</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;banners&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;70&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">	[</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;coconuts&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;80&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$newCollection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">whereIn</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;">, [</span><span style="color:#005CC5;">50</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">70</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$newCollection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dump</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">$collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dd</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">array:3 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  0 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;product&quot; =&gt; &quot;apples&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;price&quot; =&gt; &quot;50&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  2 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;product&quot; =&gt; &quot;banners&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;price&quot; =&gt; &quot;70&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  3 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;product&quot; =&gt; &quot;coconuts&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;price&quot; =&gt; &quot;80&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">array:4 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  0 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;product&quot; =&gt; &quot;apples&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;price&quot; =&gt; &quot;50&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  1 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;product&quot; =&gt; &quot;pears&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;price&quot; =&gt; &quot;60&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  2 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;product&quot; =&gt; &quot;banners&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;price&quot; =&gt; &quot;70&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  3 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;product&quot; =&gt; &quot;coconuts&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;price&quot; =&gt; &quot;80&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">] </span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><p><code>whereIn</code> 方法在检查项目值时使用「宽松」比较，意味着具有整数值的字符串将被视为等于相同值的整数。</p><p>可以使用 <a href="./whereInStrict.html">whereInStrict</a> 做比较 严格 的匹配。</p>`,7),t=[o];function e(c,r,y,i,E,u){return n(),a("div",null,t)}const B=s(p,[["render",e]]);export{q as __pageData,B as default};
