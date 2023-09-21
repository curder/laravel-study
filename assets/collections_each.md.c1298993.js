import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.5499cfac.js";const B=JSON.parse('{"title":"each","description":"","frontmatter":{},"headers":[],"relativePath":"collections/each.md","filePath":"collections/each.md","lastUpdated":1648089437000}'),p={name:"collections/each.md"},o=l(`<h1 id="each" tabindex="-1">each <a class="header-anchor" href="#each" aria-label="Permalink to &quot;each&quot;">​</a></h1><p>迭代集合中的内容，<strong>不改变原集合</strong>的同时将其传递到回调函数中。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">each</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;">($value) =&gt; </span><span style="color:#B392F0;">dump</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;The current value is </span><span style="color:#E1E4E8;">\${value}</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&quot;The current value is 1&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&quot;The current value is 2&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&quot;The current value is 3&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&quot;The current value is 4&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">Illuminate\\Support\\Collection {#1223</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;"> all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   1,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   2,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   3,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   4,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;"> ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">}</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">each</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">fn</span><span style="color:#24292E;">($value) =&gt; </span><span style="color:#6F42C1;">dump</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;The current value is </span><span style="color:#24292E;">\${value}</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&quot;The current value is 1&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&quot;The current value is 2&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&quot;The current value is 3&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&quot;The current value is 4&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">Illuminate\\Support\\Collection {#1223</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;"> all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   1,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   2,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   3,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   4,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;"> ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">}</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div><blockquote><p>不要尝试在回调函数中直接调用 <code>return</code> 改变集合，因为each方法不会改变原集合。如果需要执行改变原数组的话可以使用 <a href="./map.html">map</a> 方法。例如：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 请使用 map 代替 each 方法</span></span>
<span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">each</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;">($value) =&gt; </span><span style="color:#9ECBFF;">&quot;The current value is </span><span style="color:#E1E4E8;">\${value}</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 请使用 map 代替 each 方法</span></span>
<span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">each</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">fn</span><span style="color:#24292E;">($value) =&gt; </span><span style="color:#032F62;">&quot;The current value is </span><span style="color:#24292E;">\${value}</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span></code></pre></div></blockquote><p>如果要中断对内容的迭代，那就从回调中返回 <code>false</code>，如下示例：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">each</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> ($value) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ($value </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">dump</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;The current value is </span><span style="color:#E1E4E8;">\${value}</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&quot;The current value is 1&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&quot;The current value is 2&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1231</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       1,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       2,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       3,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       4,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">each</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> ($value) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> ($value </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">dump</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;The current value is </span><span style="color:#24292E;">\${value}</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&quot;The current value is 1&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&quot;The current value is 2&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1231</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       1,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       2,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       3,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       4,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div><blockquote><p>可以看到当触发条件返回<code>false</code>后的循环停止了。</p></blockquote><h2 id="each-循环获取二维数组" tabindex="-1">each 循环获取二维数组 <a class="header-anchor" href="#each-循环获取二维数组" aria-label="Permalink to &quot;each 循环获取二维数组&quot;">​</a></h2><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&quot;banners&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">45</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;California&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&quot;apples&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Florida&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&quot;coconuts&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Texas&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">each</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> ($value) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">dump</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;We have {</span><span style="color:#E1E4E8;">$value</span><span style="color:#9ECBFF;">[</span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">]} {</span><span style="color:#E1E4E8;">$value</span><span style="color:#9ECBFF;">[</span><span style="color:#79B8FF;">0</span><span style="color:#9ECBFF;">]} in our {</span><span style="color:#E1E4E8;">$value</span><span style="color:#9ECBFF;">[</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">]} store.&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&quot;We have 45 banners in our California store.&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&quot;We have 20 apples in our Florida store.&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&quot;We have 60 coconuts in our Texas store.&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1251</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;banners&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         45,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;California&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;apples&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         20,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;Florida&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;coconuts&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         60,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;Texas&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&quot;banners&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">45</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;California&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&quot;apples&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Florida&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&quot;coconuts&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">60</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Texas&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">each</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> ($value) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">dump</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;We have {</span><span style="color:#24292E;">$value</span><span style="color:#032F62;">[</span><span style="color:#005CC5;">1</span><span style="color:#032F62;">]} {</span><span style="color:#24292E;">$value</span><span style="color:#032F62;">[</span><span style="color:#005CC5;">0</span><span style="color:#032F62;">]} in our {</span><span style="color:#24292E;">$value</span><span style="color:#032F62;">[</span><span style="color:#005CC5;">2</span><span style="color:#032F62;">]} store.&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&quot;We have 45 banners in our California store.&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&quot;We have 20 apples in our Florida store.&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&quot;We have 60 coconuts in our Texas store.&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1251</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;banners&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         45,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;California&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;apples&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         20,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;Florida&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;coconuts&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         60,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;Texas&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div><blockquote><p>在循环的回调函数中通过下标获取对应值的方式不是很优雅，可能过了一段时间就忘了对应的值是什么。</p><p>有没有更加优雅的方式优化这个问题呢？使用 <a href="./eachSpread.html">eachSpread</a> 方法。</p></blockquote><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&quot;banners&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">45</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;California&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&quot;apples&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Florida&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&quot;coconuts&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Texas&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">eachSpread</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> ($product, $qty, $location) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">dump</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;We have {</span><span style="color:#E1E4E8;">$product</span><span style="color:#9ECBFF;">} {</span><span style="color:#E1E4E8;">$qty</span><span style="color:#9ECBFF;">} in our {</span><span style="color:#E1E4E8;">$location</span><span style="color:#9ECBFF;">} store.&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&quot;We have banners 45 in our California store.&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&quot;We have apples 20 in our Florida store.&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&quot;We have coconuts 60 in our Texas store.&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1249</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;banners&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         45,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;California&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;apples&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         20,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;Florida&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;coconuts&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         60,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         &quot;Texas&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&quot;banners&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">45</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;California&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&quot;apples&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Florida&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&quot;coconuts&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">60</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Texas&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">eachSpread</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> ($product, $qty, $location) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">dump</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;We have {</span><span style="color:#24292E;">$product</span><span style="color:#032F62;">} {</span><span style="color:#24292E;">$qty</span><span style="color:#032F62;">} in our {</span><span style="color:#24292E;">$location</span><span style="color:#032F62;">} store.&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&quot;We have banners 45 in our California store.&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&quot;We have apples 20 in our Florida store.&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&quot;We have coconuts 60 in our Texas store.&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1249</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;banners&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         45,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;California&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;apples&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         20,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;Florida&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;coconuts&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         60,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         &quot;Texas&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div><blockquote><p>可以看到通过调用 <a href="./eachSpread.html">eachSpread</a> 方法，在回调函数中有更明确的变量可供使用，变得更加有寓意话。</p></blockquote>`,12),t=[o];function e(c,r,i,y,E,u){return n(),a("div",null,t)}const q=s(p,[["render",e]]);export{B as __pageData,q as default};
