import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.aefb929a.js";const F=JSON.parse('{"title":"mapSpread","description":"","frontmatter":{},"headers":[],"relativePath":"collections/mapSpread.md","filePath":"collections/mapSpread.md","lastUpdated":1648089437000}'),p={name:"collections/mapSpread.md"},o=l(`<h1 id="mapspread" tabindex="-1">mapSpread <a class="header-anchor" href="#mapspread" aria-label="Permalink to &quot;mapSpread&quot;">​</a></h1><p>迭代集合的项目，将每个嵌套的项目值传递到给定的闭包中。 闭包可以自由修改并返回它，从而形成一个新的修改后的集合。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">chunk</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 将集合拆成多个指定大小的小集合</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">mapSpread</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> ($a, $b) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [$a </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> $b];</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1094</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         1 =&gt; 2,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         3 =&gt; 4,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         5 =&gt; 6,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">         7 =&gt; 8,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">chunk</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 将集合拆成多个指定大小的小集合</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">mapSpread</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> ($a, $b) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [$a </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> $b];</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1094</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         1 =&gt; 2,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         3 =&gt; 4,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         5 =&gt; 6,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">         7 =&gt; 8,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><p>值得注意的是，一定要保证对应的值有数据，否则将跟产生预期不符合的错误。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">chunk</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">mapSpread</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> ($a, $b, $c) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> $a </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> $b </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> $c;</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  TypeError: Too few arguments to function {closure}(), 2 passed in /Users/curder/Codes/laravel8/vendor/laravel/framework/src/Illuminate./Traits/EnumeratesValues.php on line 316 and exactly 3 expected</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">chunk</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">mapSpread</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> ($a, $b, $c) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> $a </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> $b </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> $c;</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  TypeError: Too few arguments to function {closure}(), 2 passed in /Users/curder/Codes/laravel8/vendor/laravel/framework/src/Illuminate./Traits/EnumeratesValues.php on line 316 and exactly 3 expected</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><h2 id="改变原集合" tabindex="-1">改变原集合 <a class="header-anchor" href="#改变原集合" aria-label="Permalink to &quot;改变原集合&quot;">​</a></h2><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$collection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">chunk</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dump</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$newCollection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">mapSpread</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> ($a, $b, $c) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> $a </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> $b </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> $c;</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$newCollection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dump</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">$collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dd</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">array:3 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  0 =&gt; Illuminate\\Support\\Collection {#1123</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    #items: array:3 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">      0 =&gt; 1</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">      1 =&gt; 2</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">      2 =&gt; 3</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  1 =&gt; Illuminate\\Support\\Collection {#1122</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    #items: array:3 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">      3 =&gt; 4</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">      4 =&gt; 5</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">      5 =&gt; 6</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  2 =&gt; Illuminate\\Support\\Collection {#1121</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    #items: array:3 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">      6 =&gt; 7</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">      7 =&gt; 8</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">      8 =&gt; 9</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">array:3 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  0 =&gt; -1</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  1 =&gt; 14</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  2 =&gt; 47</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">array:3 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  0 =&gt; Illuminate\\Support\\Collection {#1123</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    #items: array:4 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">      0 =&gt; 1</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">      1 =&gt; 2</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">      2 =&gt; 3</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">      3 =&gt; 0</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  1 =&gt; Illuminate\\Support\\Collection {#1122</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    #items: array:4 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">      3 =&gt; 4</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">      4 =&gt; 5</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">      5 =&gt; 6</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">      6 =&gt; 1</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  2 =&gt; Illuminate\\Support\\Collection {#1121</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    #items: array:4 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">      6 =&gt; 7</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">      7 =&gt; 8</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">      8 =&gt; 9</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">      9 =&gt; 2</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    ]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">] </span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$collection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">9</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">chunk</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dump</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$newCollection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">mapSpread</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> ($a, $b, $c) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> $a </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> $b </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> $c;</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$newCollection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dump</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">$collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dd</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">array:3 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  0 =&gt; Illuminate\\Support\\Collection {#1123</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    #items: array:3 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">      0 =&gt; 1</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">      1 =&gt; 2</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">      2 =&gt; 3</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  1 =&gt; Illuminate\\Support\\Collection {#1122</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    #items: array:3 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">      3 =&gt; 4</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">      4 =&gt; 5</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">      5 =&gt; 6</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  2 =&gt; Illuminate\\Support\\Collection {#1121</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    #items: array:3 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">      6 =&gt; 7</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">      7 =&gt; 8</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">      8 =&gt; 9</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">array:3 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  0 =&gt; -1</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  1 =&gt; 14</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  2 =&gt; 47</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">array:3 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  0 =&gt; Illuminate\\Support\\Collection {#1123</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    #items: array:4 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">      0 =&gt; 1</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">      1 =&gt; 2</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">      2 =&gt; 3</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">      3 =&gt; 0</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  1 =&gt; Illuminate\\Support\\Collection {#1122</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    #items: array:4 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">      3 =&gt; 4</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">      4 =&gt; 5</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">      5 =&gt; 6</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">      6 =&gt; 1</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  2 =&gt; Illuminate\\Support\\Collection {#1121</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    #items: array:4 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">      6 =&gt; 7</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">      7 =&gt; 8</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">      8 =&gt; 9</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">      9 =&gt; 2</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    ]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">] </span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div>`,7),t=[o];function e(c,i,y,r,E,D){return n(),a("div",null,t)}const f=s(p,[["render",e]]);export{F as __pageData,f as default};
