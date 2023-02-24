import{_ as s,c as a,o as n,a as l}from"./app.fec078ba.js";const i=JSON.parse('{"title":"格式化计算两个数组的数据","description":"","frontmatter":{},"headers":[{"level":2,"title":"使用foreach","slug":"使用foreach","link":"#使用foreach","children":[]},{"level":2,"title":"使用 zip、first 和 last 方法","slug":"使用-zip、first-和-last-方法","link":"#使用-zip、first-和-last-方法","children":[]}],"relativePath":"collections/examples/formatically-calculate-the-data-of-the-two-arrays.md","lastUpdated":1677231651000}'),p={name:"collections/examples/formatically-calculate-the-data-of-the-two-arrays.md"},o=l(`<h1 id="格式化计算两个数组的数据" tabindex="-1">格式化计算两个数组的数据 <a class="header-anchor" href="#格式化计算两个数组的数据" aria-hidden="true">#</a></h1><p>有如下两组数据分别代表去年的营收和今年的营收，求每个月的盈亏情况。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">last_year </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">6345</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">75</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9839</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">45</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7134</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">60</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9479</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">50</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9928</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8652</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">00</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7658</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">40</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10245</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">40</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7889</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">40</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3892</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">40</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3638</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">40</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2339</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">40</span></span>
<span class="line"><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">this_year </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">6145</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">75</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6895</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">00</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3434</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">00</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9349350</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9478</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">60</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7652</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">80</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4758</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">40</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10945</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">40</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3689</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">40</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8992</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">40</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7588</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">40</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2239</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">40</span></span>
<span class="line"><span style="color:#89DDFF;">];</span></span>
<span class="line"></span></code></pre></div><h2 id="使用foreach" tabindex="-1">使用foreach <a class="header-anchor" href="#使用foreach" aria-hidden="true">#</a></h2><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">last_year </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">6345</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">75</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9839</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">45</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7134</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9479</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9928</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8652</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7658</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10245</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7889</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3892</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3638</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2339</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">this_year </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">6145</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">75</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6895</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3434</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9349350</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9478</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7652</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4758</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10945</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3689</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8992</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7588</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2239</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">profit </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">foreach</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">this_year </span><span style="color:#89DDFF;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">key </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">monthly</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">profit</span><span style="color:#89DDFF;">[$</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">monthly </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">last_year</span><span style="color:#89DDFF;">[$</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">dd</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">profit</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">array:12 [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  0 =&gt; -200.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  1 =&gt; -2944.45</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  2 =&gt; -3700.6</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  3 =&gt; 9339870.5</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  4 =&gt; -449.4</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  5 =&gt; -999.2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  6 =&gt; -2900.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  7 =&gt; 700.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  8 =&gt; -4200.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  9 =&gt; 5100.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  10 =&gt; 3950.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  11 =&gt; -100.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span></code></pre></div><h2 id="使用-zip、first-和-last-方法" tabindex="-1">使用 <a href="./../zip.html">zip</a>、<a href="./../first.html">first</a> 和 <a href="./../last.html">last</a> 方法 <a class="header-anchor" href="#使用-zip、first-和-last-方法" aria-hidden="true">#</a></h2><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">last_year </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">6345</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">75</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9839</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">45</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7134</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9479</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9928</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8652</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7658</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10245</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7889</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3892</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3638</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2339</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">this_year </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">6145</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">75</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6895</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3434</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9349350</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9478</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7652</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4758</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10945</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3689</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8992</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7588</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2239</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">profit </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">this_year</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">zip</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">last_year</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">map</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">monthly</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">monthly</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">first</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">monthly</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">last</span><span style="color:#89DDFF;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">dd</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">profit</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">Illuminate\\Support\\Collection {#1144</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  #items: array:12 [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    0 =&gt; -200.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    1 =&gt; -2944.45</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    2 =&gt; -3700.6</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    3 =&gt; 9339870.5</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    4 =&gt; -449.4</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    5 =&gt; -999.2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    6 =&gt; -2900.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    7 =&gt; 700.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    8 =&gt; -4200.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    9 =&gt; 5100.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    10 =&gt; 3950.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    11 =&gt; -100.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  ]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span></code></pre></div>`,7),t=[o];function e(c,r,y,F,D,C){return n(),a("div",null,t)}const f=s(p,[["render",e]]);export{i as __pageData,f as default};
