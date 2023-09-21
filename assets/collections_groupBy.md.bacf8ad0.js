import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.aefb929a.js";const q=JSON.parse('{"title":"groupBy","description":"","frontmatter":{},"headers":[],"relativePath":"collections/groupBy.md","filePath":"collections/groupBy.md","lastUpdated":1616865921000}'),p={name:"collections/groupBy.md"},o=l(`<h1 id="groupby" tabindex="-1">groupBy <a class="header-anchor" href="#groupby" aria-label="Permalink to &quot;groupBy&quot;">​</a></h1><p><strong>不改变原集合</strong>，根据给定的键对集合内的项目进行分组。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;key0&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;apples&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;key1&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;apples&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;key2&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;apples&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;key3&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;apples&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;key4&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;coconuts&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">40</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;key5&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;coconuts&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">groupBy</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">=&gt; Illuminate\\Support\\Collection {#1254</span></span>
<span class="line"><span style="color:#6A737D;">     all: [</span></span>
<span class="line"><span style="color:#6A737D;">       &quot;apples&quot; =&gt; Illuminate\\Support\\Collection {#1256</span></span>
<span class="line"><span style="color:#6A737D;">         all: [</span></span>
<span class="line"><span style="color:#6A737D;">           [</span></span>
<span class="line"><span style="color:#6A737D;">             &quot;product&quot; =&gt; &quot;apples&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">             &quot;price&quot; =&gt; 10,</span></span>
<span class="line"><span style="color:#6A737D;">           ],</span></span>
<span class="line"><span style="color:#6A737D;">           [</span></span>
<span class="line"><span style="color:#6A737D;">             &quot;product&quot; =&gt; &quot;apples&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">             &quot;price&quot; =&gt; 10,</span></span>
<span class="line"><span style="color:#6A737D;">           ],</span></span>
<span class="line"><span style="color:#6A737D;">           [</span></span>
<span class="line"><span style="color:#6A737D;">             &quot;product&quot; =&gt; &quot;apples&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">             &quot;price&quot; =&gt; 20,</span></span>
<span class="line"><span style="color:#6A737D;">           ],</span></span>
<span class="line"><span style="color:#6A737D;">           [</span></span>
<span class="line"><span style="color:#6A737D;">             &quot;product&quot; =&gt; &quot;apples&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">             &quot;price&quot; =&gt; 30,</span></span>
<span class="line"><span style="color:#6A737D;">           ],</span></span>
<span class="line"><span style="color:#6A737D;">         ],</span></span>
<span class="line"><span style="color:#6A737D;">       },</span></span>
<span class="line"><span style="color:#6A737D;">       &quot;coconuts&quot; =&gt; Illuminate\\Support\\Collection {#1255</span></span>
<span class="line"><span style="color:#6A737D;">         all: [</span></span>
<span class="line"><span style="color:#6A737D;">           [</span></span>
<span class="line"><span style="color:#6A737D;">             &quot;product&quot; =&gt; &quot;coconuts&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">             &quot;price&quot; =&gt; 40,</span></span>
<span class="line"><span style="color:#6A737D;">           ],</span></span>
<span class="line"><span style="color:#6A737D;">           [</span></span>
<span class="line"><span style="color:#6A737D;">             &quot;product&quot; =&gt; &quot;coconuts&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">             &quot;price&quot; =&gt; 50,</span></span>
<span class="line"><span style="color:#6A737D;">           ],</span></span>
<span class="line"><span style="color:#6A737D;">         ],</span></span>
<span class="line"><span style="color:#6A737D;">       },</span></span>
<span class="line"><span style="color:#6A737D;">     ],</span></span>
<span class="line"><span style="color:#6A737D;">   }</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;key0&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;apples&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;key1&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;apples&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;key2&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;apples&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;key3&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;apples&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;key4&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;coconuts&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">40</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;key5&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;coconuts&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">groupBy</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">=&gt; Illuminate\\Support\\Collection {#1254</span></span>
<span class="line"><span style="color:#6A737D;">     all: [</span></span>
<span class="line"><span style="color:#6A737D;">       &quot;apples&quot; =&gt; Illuminate\\Support\\Collection {#1256</span></span>
<span class="line"><span style="color:#6A737D;">         all: [</span></span>
<span class="line"><span style="color:#6A737D;">           [</span></span>
<span class="line"><span style="color:#6A737D;">             &quot;product&quot; =&gt; &quot;apples&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">             &quot;price&quot; =&gt; 10,</span></span>
<span class="line"><span style="color:#6A737D;">           ],</span></span>
<span class="line"><span style="color:#6A737D;">           [</span></span>
<span class="line"><span style="color:#6A737D;">             &quot;product&quot; =&gt; &quot;apples&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">             &quot;price&quot; =&gt; 10,</span></span>
<span class="line"><span style="color:#6A737D;">           ],</span></span>
<span class="line"><span style="color:#6A737D;">           [</span></span>
<span class="line"><span style="color:#6A737D;">             &quot;product&quot; =&gt; &quot;apples&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">             &quot;price&quot; =&gt; 20,</span></span>
<span class="line"><span style="color:#6A737D;">           ],</span></span>
<span class="line"><span style="color:#6A737D;">           [</span></span>
<span class="line"><span style="color:#6A737D;">             &quot;product&quot; =&gt; &quot;apples&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">             &quot;price&quot; =&gt; 30,</span></span>
<span class="line"><span style="color:#6A737D;">           ],</span></span>
<span class="line"><span style="color:#6A737D;">         ],</span></span>
<span class="line"><span style="color:#6A737D;">       },</span></span>
<span class="line"><span style="color:#6A737D;">       &quot;coconuts&quot; =&gt; Illuminate\\Support\\Collection {#1255</span></span>
<span class="line"><span style="color:#6A737D;">         all: [</span></span>
<span class="line"><span style="color:#6A737D;">           [</span></span>
<span class="line"><span style="color:#6A737D;">             &quot;product&quot; =&gt; &quot;coconuts&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">             &quot;price&quot; =&gt; 40,</span></span>
<span class="line"><span style="color:#6A737D;">           ],</span></span>
<span class="line"><span style="color:#6A737D;">           [</span></span>
<span class="line"><span style="color:#6A737D;">             &quot;product&quot; =&gt; &quot;coconuts&quot;,</span></span>
<span class="line"><span style="color:#6A737D;">             &quot;price&quot; =&gt; 50,</span></span>
<span class="line"><span style="color:#6A737D;">           ],</span></span>
<span class="line"><span style="color:#6A737D;">         ],</span></span>
<span class="line"><span style="color:#6A737D;">       },</span></span>
<span class="line"><span style="color:#6A737D;">     ],</span></span>
<span class="line"><span style="color:#6A737D;">   }</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div><p>默认情况下 <code>key</code> 将会被重置，通过传入第二个参数 <code>true</code> 保留 <code>key</code>。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;key0&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;apples&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;key1&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;apples&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;key2&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;apples&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;key3&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;apples&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;key4&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;coconuts&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">40</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;key5&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;coconuts&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;price&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">groupBy</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;product&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 添加 true 参数，保留key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1257</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       &quot;apples&quot; =&gt; Illuminate\\Support\\Collection {#1259</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           &quot;key0&quot; =&gt; [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">             &quot;product&quot; =&gt; &quot;apples&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">             &quot;price&quot; =&gt; 10,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           &quot;key1&quot; =&gt; [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">             &quot;product&quot; =&gt; &quot;apples&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">             &quot;price&quot; =&gt; 10,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           &quot;key2&quot; =&gt; [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">             &quot;product&quot; =&gt; &quot;apples&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">             &quot;price&quot; =&gt; 20,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           &quot;key3&quot; =&gt; [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">             &quot;product&quot; =&gt; &quot;apples&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">             &quot;price&quot; =&gt; 30,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       &quot;coconuts&quot; =&gt; Illuminate\\Support\\Collection {#1258</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           &quot;key4&quot; =&gt; [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">             &quot;product&quot; =&gt; &quot;coconuts&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">             &quot;price&quot; =&gt; 40,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           &quot;key5&quot; =&gt; [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">             &quot;product&quot; =&gt; &quot;coconuts&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">             &quot;price&quot; =&gt; 50,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;key0&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;apples&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;key1&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;apples&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;key2&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;apples&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;key3&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;apples&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;key4&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;coconuts&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">40</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;key5&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;coconuts&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;price&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">groupBy</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;product&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 添加 true 参数，保留key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1257</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       &quot;apples&quot; =&gt; Illuminate\\Support\\Collection {#1259</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           &quot;key0&quot; =&gt; [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">             &quot;product&quot; =&gt; &quot;apples&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">             &quot;price&quot; =&gt; 10,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           &quot;key1&quot; =&gt; [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">             &quot;product&quot; =&gt; &quot;apples&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">             &quot;price&quot; =&gt; 10,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           &quot;key2&quot; =&gt; [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">             &quot;product&quot; =&gt; &quot;apples&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">             &quot;price&quot; =&gt; 20,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           &quot;key3&quot; =&gt; [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">             &quot;product&quot; =&gt; &quot;apples&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">             &quot;price&quot; =&gt; 30,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       &quot;coconuts&quot; =&gt; Illuminate\\Support\\Collection {#1258</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           &quot;key4&quot; =&gt; [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">             &quot;product&quot; =&gt; &quot;coconuts&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">             &quot;price&quot; =&gt; 40,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           &quot;key5&quot; =&gt; [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">             &quot;product&quot; =&gt; &quot;coconuts&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">             &quot;price&quot; =&gt; 50,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><p>除了传入一个字符串的「键」，还可以传入一个回调。该回调应该返回用来分组的键的值。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 下面的示例如果使用 \`code\` 字段来分组的话得到的结果不是预期，可以通过回调函数稍作处理。</span></span>
<span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;code&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;123VG&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;string1&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;code&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;123-VG&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;string2&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;code&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;123 VG&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;string3&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">groupBy</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> ($element) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">str_replace</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;-&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39; &#39;</span><span style="color:#E1E4E8;">], [], $element[</span><span style="color:#9ECBFF;">&#39;code&#39;</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1242</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       &quot;123VG&quot; =&gt; Illuminate\\Support\\Collection {#1243</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">             &quot;code&quot; =&gt; &quot;123VG&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">             &quot;name&quot; =&gt; &quot;string1&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">             &quot;code&quot; =&gt; &quot;123-VG&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">             &quot;name&quot; =&gt; &quot;string2&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">             &quot;code&quot; =&gt; &quot;123 VG&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">             &quot;name&quot; =&gt; &quot;string3&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">           ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 下面的示例如果使用 \`code\` 字段来分组的话得到的结果不是预期，可以通过回调函数稍作处理。</span></span>
<span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;code&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;123VG&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;string1&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;code&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;123-VG&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;string2&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;code&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;123 VG&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;string3&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">groupBy</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> ($element) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">str_replace</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;-&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39; &#39;</span><span style="color:#24292E;">], [], $element[</span><span style="color:#032F62;">&#39;code&#39;</span><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1242</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       &quot;123VG&quot; =&gt; Illuminate\\Support\\Collection {#1243</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">             &quot;code&quot; =&gt; &quot;123VG&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">             &quot;name&quot; =&gt; &quot;string1&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">             &quot;code&quot; =&gt; &quot;123-VG&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">             &quot;name&quot; =&gt; &quot;string2&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">             &quot;code&quot; =&gt; &quot;123 VG&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">             &quot;name&quot; =&gt; &quot;string3&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">           ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><h2 id="不改变原集合" tabindex="-1">不改变原集合 <a class="header-anchor" href="#不改变原集合" aria-label="Permalink to &quot;不改变原集合&quot;">​</a></h2><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$collection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;code&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;123VG&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;string1&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;code&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;123-VG&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;string2&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;code&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;123 VG&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;string3&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$newCollection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">groupBy</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> ($element) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">str_replace</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;-&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39; &#39;</span><span style="color:#E1E4E8;">], [], $element[</span><span style="color:#9ECBFF;">&#39;code&#39;</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dump</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">$newCollection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dd</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">array:3 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  0 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;code&quot; =&gt; &quot;123VG&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;name&quot; =&gt; &quot;string1&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  1 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;code&quot; =&gt; &quot;123-VG&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;name&quot; =&gt; &quot;string2&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  2 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;code&quot; =&gt; &quot;123 VG&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    &quot;name&quot; =&gt; &quot;string3&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">array:1 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  &quot;123VG&quot; =&gt; Illuminate\\Support\\Collection {#1257</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    #items: array:3 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">      0 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">        &quot;code&quot; =&gt; &quot;123VG&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">        &quot;name&quot; =&gt; &quot;string1&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">      ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">      1 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">        &quot;code&quot; =&gt; &quot;123-VG&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">        &quot;name&quot; =&gt; &quot;string2&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">      ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">      2 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">        &quot;code&quot; =&gt; &quot;123 VG&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">        &quot;name&quot; =&gt; &quot;string3&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">      ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$collection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;code&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;123VG&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;string1&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;code&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;123-VG&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;string2&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;code&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;123 VG&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;string3&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$newCollection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">groupBy</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> ($element) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">str_replace</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;-&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39; &#39;</span><span style="color:#24292E;">], [], $element[</span><span style="color:#032F62;">&#39;code&#39;</span><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dump</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">$newCollection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dd</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">array:3 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  0 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;code&quot; =&gt; &quot;123VG&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;name&quot; =&gt; &quot;string1&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  1 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;code&quot; =&gt; &quot;123-VG&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;name&quot; =&gt; &quot;string2&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  2 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;code&quot; =&gt; &quot;123 VG&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    &quot;name&quot; =&gt; &quot;string3&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">array:1 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  &quot;123VG&quot; =&gt; Illuminate\\Support\\Collection {#1257</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    #items: array:3 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">      0 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">        &quot;code&quot; =&gt; &quot;123VG&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">        &quot;name&quot; =&gt; &quot;string1&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">      ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">      1 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">        &quot;code&quot; =&gt; &quot;123-VG&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">        &quot;name&quot; =&gt; &quot;string2&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">      ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">      2 =&gt; array:2 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">        &quot;code&quot; =&gt; &quot;123 VG&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">        &quot;name&quot; =&gt; &quot;string3&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">      ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div>`,9),t=[o];function e(c,r,y,E,i,u){return n(),a("div",null,t)}const D=s(p,[["render",e]]);export{q as __pageData,D as default};
