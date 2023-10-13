import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.e8ee2c8f.js";const C=JSON.parse('{"title":"mapSpread","description":"","frontmatter":{},"headers":[],"relativePath":"collections/mapSpread.md","filePath":"collections/mapSpread.md","lastUpdated":1695897003000}'),l={name:"collections/mapSpread.md"},o=p(`<h1 id="mapspread" tabindex="-1">mapSpread <a class="header-anchor" href="#mapspread" aria-label="Permalink to &quot;mapSpread&quot;">​</a></h1><p>迭代集合的项目，将每个嵌套的项目值传递到给定的闭包中。 闭包可以自由修改并返回它，从而形成一个新的修改后的集合。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">chunk</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 将集合拆成多个指定大小的小集合</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">mapSpread</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> ($a, $b) =&gt; [$a </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> $b]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// [[1 =&gt; 2], [3 =&gt; 4], [5 =&gt; 6], [7 =&gt; 8]]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">chunk</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 将集合拆成多个指定大小的小集合</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">mapSpread</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> ($a, $b) =&gt; [$a </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> $b]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// [[1 =&gt; 2], [3 =&gt; 4], [5 =&gt; 6], [7 =&gt; 8]]</span></span></code></pre></div><p>值得注意的是，一定要保证对应的值有数据，否则将跟产生预期不符合的错误。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">chunk</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">mapSpread</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> ($a, $b, $c) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> $a </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> $b </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> $c;</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * TypeError: Too few arguments to function {closure}(), 2 passed in ../xx/../vendor/laravel/framework/src/Illuminate./Traits/EnumeratesValues.php</span></span>
<span class="line"><span style="color:#6A737D;"> * on line 316 and exactly 3 expected</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">chunk</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">mapSpread</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> ($a, $b, $c) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> $a </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> $b </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> $c;</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * TypeError: Too few arguments to function {closure}(), 2 passed in ../xx/../vendor/laravel/framework/src/Illuminate./Traits/EnumeratesValues.php</span></span>
<span class="line"><span style="color:#6A737D;"> * on line 316 and exactly 3 expected</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><h2 id="改变原集合" tabindex="-1">改变原集合 <a class="header-anchor" href="#改变原集合" aria-label="Permalink to &quot;改变原集合&quot;">​</a></h2><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$collection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">chunk</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$newCollection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">mapSpread</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> ($a, $b, $c) =&gt; $a </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> $b </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> $c); </span><span style="color:#6A737D;">// [-1, 14, 47]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$collection; </span><span style="color:#6A737D;">// [[1, 2, 3, 0], [4, 5, 6, 1], [7, 8, 9, 2]]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$collection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">8</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">9</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">chunk</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$newCollection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">mapSpread</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> ($a, $b, $c) =&gt; $a </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> $b </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> $c); </span><span style="color:#6A737D;">// [-1, 14, 47]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$collection; </span><span style="color:#6A737D;">// [[1, 2, 3, 0], [4, 5, 6, 1], [7, 8, 9, 2]]</span></span></code></pre></div>`,7),e=[o];function c(t,r,y,E,i,F){return a(),n("div",null,e)}const h=s(l,[["render",c]]);export{C as __pageData,h as default};