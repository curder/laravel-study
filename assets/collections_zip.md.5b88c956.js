import{_ as s,c as n,o as l,a}from"./app.ffb5f3c8.js";const E=JSON.parse('{"title":"zip","description":"","frontmatter":{},"headers":[{"level":2,"title":"不改变原集合","slug":"不改变原集合","link":"#不改变原集合","children":[]}],"relativePath":"collections/zip.md","lastUpdated":1616865921000}'),p={name:"collections/zip.md"},t=a(`<h1 id="zip" tabindex="-1">zip <a class="header-anchor" href="#zip" aria-hidden="true">#</a></h1><p>将给定数组的值与相应索引处的原集合的值合并在一起。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">])-&gt;</span><span style="color:#82AAFF;">zip</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1218</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       Illuminate\\Support\\Collection {#1217</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           5,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       Illuminate\\Support\\Collection {#1216</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           2,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           6,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       Illuminate\\Support\\Collection {#1215</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           3,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           7,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       Illuminate\\Support\\Collection {#1214</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           4,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           8,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span></code></pre></div><p>传递多个数组给 zip 方法</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">])-&gt;</span><span style="color:#82AAFF;">zip</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">c</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">d</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1228</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       Illuminate\\Support\\Collection {#1227</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           5,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           &quot;a&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       Illuminate\\Support\\Collection {#1226</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           2,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           6,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           &quot;b&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       Illuminate\\Support\\Collection {#1225</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           3,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           7,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           &quot;c&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       Illuminate\\Support\\Collection {#1224</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           4,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           8,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           &quot;d&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span></code></pre></div><p>如果传递的数组个数不匹配，将以 <code>null</code> 填充。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">])-&gt;</span><span style="color:#82AAFF;">zip</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1224</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       Illuminate\\Support\\Collection {#1223</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           5,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           &quot;a&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       Illuminate\\Support\\Collection {#1222</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           2,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           6,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           &quot;b&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       Illuminate\\Support\\Collection {#1221</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           3,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           7,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           null,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       Illuminate\\Support\\Collection {#1220</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           4,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           8,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           null,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span></code></pre></div><p>当然也可以在提供的数组中传递 <code>null</code> 值来重新索引</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">])-&gt;</span><span style="color:#82AAFF;">zip</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[null,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1230</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       Illuminate\\Support\\Collection {#1229</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           5,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           null,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       Illuminate\\Support\\Collection {#1228</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           2,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           6,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           null,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       Illuminate\\Support\\Collection {#1227</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           3,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           7,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           &quot;a&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       Illuminate\\Support\\Collection {#1226</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           4,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           8,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           &quot;b&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span></code></pre></div><h2 id="不改变原集合" tabindex="-1">不改变原集合 <a class="header-anchor" href="#不改变原集合" aria-hidden="true">#</a></h2><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">newCollection </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">zip</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">newCollection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">dump</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">dd</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">array:4 [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  0 =&gt; Illuminate\\Support\\Collection {#1231</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #items: array:2 [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      0 =&gt; 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      1 =&gt; 5</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    ]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  1 =&gt; Illuminate\\Support\\Collection {#1230</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #items: array:2 [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      0 =&gt; 2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      1 =&gt; 6</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    ]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  2 =&gt; Illuminate\\Support\\Collection {#1229</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #items: array:2 [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      0 =&gt; 3</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      1 =&gt; 7</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    ]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  3 =&gt; Illuminate\\Support\\Collection {#1228</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #items: array:2 [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      0 =&gt; 4</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      1 =&gt; 8</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    ]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">array:4 [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  0 =&gt; 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  1 =&gt; 2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  2 =&gt; 3</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  3 =&gt; 4</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span></code></pre></div>`,11),o=[t];function e(c,i,y,r,F,D){return l(),n("div",null,o)}const f=s(p,[["render",e]]);export{E as __pageData,f as default};
