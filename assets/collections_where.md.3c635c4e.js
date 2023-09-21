import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.5499cfac.js";const B=JSON.parse('{"title":"where","description":"","frontmatter":{},"headers":[],"relativePath":"collections/where.md","filePath":"collections/where.md","lastUpdated":1648089437000}'),p={name:"collections/where.md"},o=l(`<h1 id="where" tabindex="-1">where <a class="header-anchor" href="#where" aria-label="Permalink to &quot;where&quot;">​</a></h1><p>通过给定的键值过滤集合。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;apples&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;pears&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;bananas&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">70</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;coconuts&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">where</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;50&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1236</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;product&quot; =&gt; &quot;apples&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;price&quot; =&gt; 50,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;product&quot; =&gt; &quot;pears&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;price&quot; =&gt; 50,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;apples&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;pears&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;bananas&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">70</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;coconuts&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">where</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;50&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1236</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;product&quot; =&gt; &quot;apples&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;price&quot; =&gt; 50,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;product&quot; =&gt; &quot;pears&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;price&quot; =&gt; 50,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><p>还可以编写简单的表达式来过滤集合，比如：<code>=</code>，<code>!=</code>，<code>&gt;</code>，<code>&lt;</code>，<code>&gt;=</code>，<code>&lt;=</code> 等。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;apples&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;pears&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;bananas&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">70</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;coconuts&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">where</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;&gt;&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;50&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1238</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       2 =&gt; [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;product&quot; =&gt; &quot;bananas&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;price&quot; =&gt; 70,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       3 =&gt; [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;product&quot; =&gt; &quot;coconuts&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;price&quot; =&gt; 80,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;apples&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;pears&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;bananas&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">70</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;coconuts&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">where</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;&gt;&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;50&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1238</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       2 =&gt; [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;product&quot; =&gt; &quot;bananas&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;price&quot; =&gt; 70,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       3 =&gt; [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;product&quot; =&gt; &quot;coconuts&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;price&quot; =&gt; 80,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><h2 id="不改变原集合" tabindex="-1">不改变原集合 <a class="header-anchor" href="#不改变原集合" aria-label="Permalink to &quot;不改变原集合&quot;">​</a></h2><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$collection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;apples&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;pears&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;bananas&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">70</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;coconuts&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$newCollection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">where</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;&gt;&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;50&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$newCollection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dump</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">$collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dd</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">array:2 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  2 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;product&quot; =&gt; &quot;bananas&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;price&quot; =&gt; 70</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  3 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;product&quot; =&gt; &quot;coconuts&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;price&quot; =&gt; 80</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">array:4 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  0 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;product&quot; =&gt; &quot;apples&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;price&quot; =&gt; 50</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  1 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;product&quot; =&gt; &quot;pears&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;price&quot; =&gt; 50</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  2 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;product&quot; =&gt; &quot;bananas&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;price&quot; =&gt; 70</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  3 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;product&quot; =&gt; &quot;coconuts&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;price&quot; =&gt; 80</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$collection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;apples&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;pears&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;bananas&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">70</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;coconuts&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$newCollection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">where</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;&gt;&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;50&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$newCollection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dump</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">$collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dd</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">array:2 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  2 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;product&quot; =&gt; &quot;bananas&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;price&quot; =&gt; 70</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  3 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;product&quot; =&gt; &quot;coconuts&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;price&quot; =&gt; 80</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">array:4 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  0 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;product&quot; =&gt; &quot;apples&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;price&quot; =&gt; 50</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  1 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;product&quot; =&gt; &quot;pears&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;price&quot; =&gt; 50</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  2 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;product&quot; =&gt; &quot;bananas&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;price&quot; =&gt; 70</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  3 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;product&quot; =&gt; &quot;coconuts&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;price&quot; =&gt; 80</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><blockquote><p>比较数值的时候，<code>where</code> 方法使用「宽松」比较，意味着具有整数值的字符串将被认为等于相同值的整数。</p><p>使用 <a href="./whereStrict.html">whereStrict</a> 方法来进行「严格」比较过滤。</p></blockquote>`,8),t=[o];function e(c,r,y,E,i,F){return n(),a("div",null,t)}const D=s(p,[["render",e]]);export{B as __pageData,D as default};
