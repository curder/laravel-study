import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.e8ee2c8f.js";const u=JSON.parse('{"title":"mapToDictionary","description":"","frontmatter":{},"headers":[],"relativePath":"collections/mapToDictionary.md","filePath":"collections/mapToDictionary.md","lastUpdated":1616865921000}'),p={name:"collections/mapToDictionary.md"},o=l(`<h1 id="maptodictionary" tabindex="-1">mapToDictionary <a class="header-anchor" href="#maptodictionary" aria-label="Permalink to &quot;mapToDictionary&quot;">​</a></h1><p>通过给定的闭包对集合的项目进行分组。该闭包应返回一个包含单个键/值对的关联数组，从而形成一个新的分组值数组。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;apples&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">59</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;apples&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">69</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;bananas&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">54</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;bananas&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">94</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">mapToDictionary</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> ($item) =&gt; [$item[</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> $item[</span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;">]]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1108</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       &quot;apples&quot; =&gt; [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         59,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         69,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       &quot;bananas&quot; =&gt; [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         54,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         94,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;apples&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">59</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;apples&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">69</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;bananas&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">54</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;bananas&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">94</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">mapToDictionary</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> ($item) =&gt; [$item[</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> $item[</span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;">]]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1108</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       &quot;apples&quot; =&gt; [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         59,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         69,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       &quot;bananas&quot; =&gt; [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         54,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         94,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><h3 id="不改变原集合" tabindex="-1">不改变原集合 <a class="header-anchor" href="#不改变原集合" aria-label="Permalink to &quot;不改变原集合&quot;">​</a></h3><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$collection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;apples&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">59</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;apples&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">69</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;bananas&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">54</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;bananas&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">94</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$newCollection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">mapToDictionary</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> ($item) =&gt; [$item[</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> $item[</span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;">]]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$newCollection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dump</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">$collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dd</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">array:2 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  &quot;apples&quot; =&gt; array:2 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    0 =&gt; 59</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    1 =&gt; 69</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  &quot;bananas&quot; =&gt; array:2 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    0 =&gt; 54</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    1 =&gt; 94</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">array:4 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  0 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;product&quot; =&gt; &quot;apples&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;price&quot; =&gt; 59</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  1 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;product&quot; =&gt; &quot;apples&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;price&quot; =&gt; 69</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  2 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;product&quot; =&gt; &quot;bananas&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;price&quot; =&gt; 54</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  3 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;product&quot; =&gt; &quot;bananas&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;price&quot; =&gt; 94</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$collection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;apples&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">59</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;apples&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">69</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;bananas&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">54</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;bananas&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">94</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$newCollection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">mapToDictionary</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> ($item) =&gt; [$item[</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> $item[</span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;">]]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$newCollection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dump</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">$collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dd</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">array:2 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  &quot;apples&quot; =&gt; array:2 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    0 =&gt; 59</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    1 =&gt; 69</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  &quot;bananas&quot; =&gt; array:2 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    0 =&gt; 54</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    1 =&gt; 94</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">array:4 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  0 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;product&quot; =&gt; &quot;apples&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;price&quot; =&gt; 59</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  1 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;product&quot; =&gt; &quot;apples&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;price&quot; =&gt; 69</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  2 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;product&quot; =&gt; &quot;bananas&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;price&quot; =&gt; 54</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  3 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;product&quot; =&gt; &quot;bananas&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;price&quot; =&gt; 94</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div>`,5),t=[o];function e(c,r,y,i,E,F){return n(),a("div",null,t)}const B=s(p,[["render",e]]);export{u as __pageData,B as default};
