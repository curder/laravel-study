import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.5499cfac.js";const u=JSON.parse('{"title":"map 格式化数据","description":"","frontmatter":{},"headers":[],"relativePath":"collections/examples/map-format.md","filePath":"collections/examples/map-format.md","lastUpdated":1677233952000}'),p={name:"collections/examples/map-format.md"},o=l(`<h1 id="map-格式化数据" tabindex="-1">map 格式化数据 <a class="header-anchor" href="#map-格式化数据" aria-label="Permalink to &quot;map 格式化数据&quot;">​</a></h1><p>有如下结构数组</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$gates </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;BaiYun_A_A17&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;BeiJing_J7&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;ShuangLiu_K203&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;HongQiao_A157&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;A2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;BaiYun_B_B230&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$gates </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;BaiYun_A_A17&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;BeiJing_J7&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;ShuangLiu_K203&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;HongQiao_A157&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;A2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;BaiYun_B_B230&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">];</span></span></code></pre></div><p>请将它格式化后为如下数组</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$boards </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;A17&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;J7&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;K203&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;A157&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;A2&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;B230&#39;</span><span style="color:#E1E4E8;">];</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$boards </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;A17&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;J7&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;K203&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;A157&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;A2&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;B230&#39;</span><span style="color:#24292E;">];</span></span></code></pre></div><p>观察格式化后的数组为原数组元素<code>_</code>后的结尾字符。</p><h2 id="使用-foreach-循环" tabindex="-1">使用 foreach 循环 <a class="header-anchor" href="#使用-foreach-循环" aria-label="Permalink to &quot;使用 foreach 循环&quot;">​</a></h2><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$gates </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;BaiYun_A_A17&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;BeiJing_J7&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;ShuangLiu_K203&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;HongQiao_A157&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;A2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;BaiYun_B_B230&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$res </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#F97583;">foreach</span><span style="color:#E1E4E8;"> ($gates </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> $key </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> $gate) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">strpos</span><span style="color:#E1E4E8;">($gate, </span><span style="color:#9ECBFF;">&#39;_&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    $res[$key] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $gate;</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    $offset </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">strrpos</span><span style="color:#E1E4E8;">($gate, </span><span style="color:#9ECBFF;">&#39;_&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    $res[$key] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">mb_substr</span><span style="color:#E1E4E8;">($gate, $offset);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">dd</span><span style="color:#E1E4E8;">($res);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">array:6 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  0 =&gt; &quot;A17&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  1 =&gt; &quot;J7&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  2 =&gt; &quot;K203&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  3 =&gt; &quot;A157&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  4 =&gt; &quot;A2&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  5 =&gt; &quot;B230&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$gates </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;BaiYun_A_A17&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;BeiJing_J7&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;ShuangLiu_K203&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;HongQiao_A157&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;A2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;BaiYun_B_B230&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$res </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#D73A49;">foreach</span><span style="color:#24292E;"> ($gates </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> $key </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> $gate) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">strpos</span><span style="color:#24292E;">($gate, </span><span style="color:#032F62;">&#39;_&#39;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    $res[$key] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $gate;</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    $offset </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">strrpos</span><span style="color:#24292E;">($gate, </span><span style="color:#032F62;">&#39;_&#39;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    $res[$key] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">mb_substr</span><span style="color:#24292E;">($gate, $offset);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">dd</span><span style="color:#24292E;">($res);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">array:6 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  0 =&gt; &quot;A17&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  1 =&gt; &quot;J7&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  2 =&gt; &quot;K203&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  3 =&gt; &quot;A157&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  4 =&gt; &quot;A2&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  5 =&gt; &quot;B230&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><h2 id="使用-map-方法" tabindex="-1">使用 <a href="./../map.html">map</a> 方法 <a class="header-anchor" href="#使用-map-方法" aria-label="Permalink to &quot;使用 [map](../map.md) 方法&quot;">​</a></h2><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$gates </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;BaiYun_A_A17&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;BeiJing_J7&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;ShuangLiu_K203&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;HongQiao_A157&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;A2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;BaiYun_B_B230&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">($gates)</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> ($gate) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  $parts </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">explode</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;_&#39;</span><span style="color:#E1E4E8;">, $gate);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">end</span><span style="color:#E1E4E8;">($parts);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1098</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       &quot;A17&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       &quot;J7&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       &quot;K203&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       &quot;A157&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       &quot;A2&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       &quot;B230&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$gates </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;BaiYun_A_A17&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;BeiJing_J7&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;ShuangLiu_K203&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;HongQiao_A157&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;A2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;BaiYun_B_B230&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">($gates)</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> ($gate) {</span></span>
<span class="line"><span style="color:#24292E;">  $parts </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">explode</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;_&#39;</span><span style="color:#24292E;">, $gate);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">end</span><span style="color:#24292E;">($parts);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1098</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       &quot;A17&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       &quot;J7&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       &quot;K203&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       &quot;A157&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       &quot;A2&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       &quot;B230&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><h2 id="使用集合的-map-和-last-方法" tabindex="-1">使用集合的 <a href="./../map.html">map</a> 和 <a href="./../last.html">last</a> 方法 <a class="header-anchor" href="#使用集合的-map-和-last-方法" aria-label="Permalink to &quot;使用集合的 [map](../map.md) 和 [last](../last.md) 方法&quot;">​</a></h2><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$gates </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;BaiYun_A_A17&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;BeiJing_J7&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;ShuangLiu_K203&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;HongQiao_A157&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;A2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;BaiYun_B_B230&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">($gates)</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> ($gate) =&gt; </span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">explode</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;_&#39;</span><span style="color:#E1E4E8;">, $gate))</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">last</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 或者使用 Str 也可以达到目的</span></span>
<span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">($gates)</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> ($gate) =&gt; </span><span style="color:#79B8FF;">Str</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">of</span><span style="color:#E1E4E8;">($gate)</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/</span><span style="color:#DBEDFF;">_</span><span style="color:#9ECBFF;">/&#39;</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">last</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1096</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       &quot;A17&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       &quot;J7&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       &quot;K203&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       &quot;A157&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       &quot;A2&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       &quot;B230&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$gates </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;BaiYun_A_A17&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;BeiJing_J7&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;ShuangLiu_K203&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;HongQiao_A157&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;A2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;BaiYun_B_B230&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">($gates)</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> ($gate) =&gt; </span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">explode</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;_&#39;</span><span style="color:#24292E;">, $gate))</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">last</span><span style="color:#24292E;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 或者使用 Str 也可以达到目的</span></span>
<span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">($gates)</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> ($gate) =&gt; </span><span style="color:#005CC5;">Str</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">of</span><span style="color:#24292E;">($gate)</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">split</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/_/&#39;</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">last</span><span style="color:#24292E;">())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1096</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       &quot;A17&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       &quot;J7&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       &quot;K203&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       &quot;A157&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       &quot;A2&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       &quot;B230&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div>`,12),e=[o];function t(c,r,y,E,i,F){return n(),a("div",null,e)}const g=s(p,[["render",t]]);export{u as __pageData,g as default};
