import{_ as s,o as n,c as a,O as l}from"./chunks/framework.5035f75f.js";const A=JSON.parse('{"title":"mapSpread","description":"","frontmatter":{},"headers":[],"relativePath":"collections/mapSpread.md","filePath":"collections/mapSpread.md","lastUpdated":1648089437000}'),p={name:"collections/mapSpread.md"},o=l(`<h1 id="mapspread" tabindex="-1">mapSpread <a class="header-anchor" href="#mapspread" aria-label="Permalink to &quot;mapSpread&quot;">​</a></h1><p>迭代集合的项目，将每个嵌套的项目值传递到给定的闭包中。 闭包可以自由修改并返回它，从而形成一个新的修改后的集合。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">chunk</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 将集合拆成多个指定大小的小集合</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">mapSpread</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[$</span><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1094</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         1 =&gt; 2,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         3 =&gt; 4,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         5 =&gt; 6,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         7 =&gt; 8,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       ]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span></code></pre></div><p>值得注意的是，一定要保证对应的值有数据，否则将跟产生预期不符合的错误。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">chunk</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">mapSpread</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">b </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  TypeError: Too few arguments to function {closure}(), 2 passed in /Users/curder/Codes/laravel8/vendor/laravel/framework/src/Illuminate./Traits/EnumeratesValues.php on line 316 and exactly 3 expected</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span></code></pre></div><h2 id="改变原集合" tabindex="-1">改变原集合 <a class="header-anchor" href="#改变原集合" aria-label="Permalink to &quot;改变原集合&quot;">​</a></h2><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">])-&gt;</span><span style="color:#82AAFF;">chunk</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">dump</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">newCollection </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">mapSpread</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">b </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">newCollection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">dump</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">collection</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">dd</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">array:3 [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  0 =&gt; Illuminate\\Support\\Collection {#1123</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #items: array:3 [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      0 =&gt; 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      1 =&gt; 2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      2 =&gt; 3</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    ]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  1 =&gt; Illuminate\\Support\\Collection {#1122</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #items: array:3 [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      3 =&gt; 4</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      4 =&gt; 5</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      5 =&gt; 6</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    ]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  2 =&gt; Illuminate\\Support\\Collection {#1121</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #items: array:3 [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      6 =&gt; 7</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      7 =&gt; 8</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      8 =&gt; 9</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    ]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">array:3 [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  0 =&gt; -1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  1 =&gt; 14</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  2 =&gt; 47</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">array:3 [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  0 =&gt; Illuminate\\Support\\Collection {#1123</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #items: array:4 [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      0 =&gt; 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      1 =&gt; 2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      2 =&gt; 3</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      3 =&gt; 0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    ]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  1 =&gt; Illuminate\\Support\\Collection {#1122</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #items: array:4 [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      3 =&gt; 4</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      4 =&gt; 5</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      5 =&gt; 6</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      6 =&gt; 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    ]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  2 =&gt; Illuminate\\Support\\Collection {#1121</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    #items: array:4 [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      6 =&gt; 7</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      7 =&gt; 8</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      8 =&gt; 9</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      9 =&gt; 2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    ]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">] </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span></code></pre></div>`,7),t=[o];function e(c,y,r,i,D,F){return n(),a("div",null,t)}const f=s(p,[["render",e]]);export{A as __pageData,f as default};
