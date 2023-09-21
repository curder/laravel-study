import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.aefb929a.js";const q=JSON.parse('{"title":"eachSpread","description":"","frontmatter":{},"headers":[],"relativePath":"collections/eachSpread.md","filePath":"collections/eachSpread.md","lastUpdated":1648089437000}'),o={name:"collections/eachSpread.md"},p=l(`<h1 id="eachspread" tabindex="-1">eachSpread <a class="header-anchor" href="#eachspread" aria-label="Permalink to &quot;eachSpread&quot;">​</a></h1><p>迭代集合中的内容，<strong>不改变原集合</strong>的同时将其传递到回调函数中，通常用于二维数组的循环，在回调函数中给值命名。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span></span>
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
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div><h3 id="condition" tabindex="-1">Condition <a class="header-anchor" href="#condition" aria-label="Permalink to &quot;Condition&quot;">​</a></h3><p>跟 <a href="./each.html">each</a> 方法的使用一致，也可以在回调函数中编写逻辑，当返回 <code>false</code> 后会停止循环。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&quot;banners&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">45</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;California&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&quot;apples&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Florida&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&quot;coconuts&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Texas&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">eachSpread</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> ($product, $qty, $location) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ($qty </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">dump</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;We have {</span><span style="color:#E1E4E8;">$product</span><span style="color:#9ECBFF;">} {</span><span style="color:#E1E4E8;">$qty</span><span style="color:#9ECBFF;">} in our {</span><span style="color:#E1E4E8;">$location</span><span style="color:#9ECBFF;">} store.&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&quot;We have banners 45 in our California store.&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1253</span></span>
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
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> ($qty </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">dump</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;We have {</span><span style="color:#24292E;">$product</span><span style="color:#032F62;">} {</span><span style="color:#24292E;">$qty</span><span style="color:#032F62;">} in our {</span><span style="color:#24292E;">$location</span><span style="color:#032F62;">} store.&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&quot;We have banners 45 in our California store.&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1253</span></span>
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
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div><blockquote><p>可以看到当返回 <code>false</code> 时，循环终止。</p></blockquote>`,7),t=[p];function e(c,i,r,y,E,u){return n(),a("div",null,t)}const B=s(o,[["render",e]]);export{q as __pageData,B as default};
