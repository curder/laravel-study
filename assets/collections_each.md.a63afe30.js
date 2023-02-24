import{_ as s,c as n,o as a,a as l}from"./app.d08fb6b1.js";const u=JSON.parse('{"title":"each","description":"","frontmatter":{},"headers":[{"level":2,"title":"each 循环获取二维数组","slug":"each-循环获取二维数组","link":"#each-循环获取二维数组","children":[]}],"relativePath":"collections/each.md","lastUpdated":1648089437000}'),p={name:"collections/each.md"},o=l(`<h1 id="each" tabindex="-1">each <a class="header-anchor" href="#each" aria-hidden="true">#</a></h1><p>迭代集合中的内容，<strong>不改变原集合</strong>的同时将其传递到回调函数中。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">])-&gt;</span><span style="color:#82AAFF;">each</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">fn</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">dump</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">The current value is </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">}&quot;</span><span style="color:#89DDFF;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&quot;The current value is 1&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&quot;The current value is 2&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&quot;The current value is 3&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&quot;The current value is 4&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">Illuminate\\Support\\Collection {#1223</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   2,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   3,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   4,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span></code></pre></div><blockquote><p>不要尝试在回调函数中直接调用 <code>return</code> 改变集合，因为each方法不会改变原集合。如果需要执行改变原数组的话可以使用 <a href="./map.html">map</a> 方法。例如：</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 请使用 map 代替 each 方法</span></span>
<span class="line"><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">])-&gt;</span><span style="color:#82AAFF;">each</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">fn</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">The current value is </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">}&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div></blockquote><p>如果要中断对内容的迭代，那就从回调中返回 <code>false</code>，如下示例：</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">])-&gt;</span><span style="color:#82AAFF;">each</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">value </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">dump</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">The current value is </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">}&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&quot;The current value is 1&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&quot;The current value is 2&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1231</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       2,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       3,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       4,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span></code></pre></div><blockquote><p>可以看到当触发条件返回<code>false</code>后的循环停止了。</p></blockquote><h2 id="each-循环获取二维数组" tabindex="-1">each 循环获取二维数组 <a class="header-anchor" href="#each-循环获取二维数组" aria-hidden="true">#</a></h2><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">banners</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">45</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">California</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">apples</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Florida</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">coconuts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">60</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Texas</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#89DDFF;">])-&gt;</span><span style="color:#82AAFF;">each</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">dump</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">We have </span><span style="color:#89DDFF;">{$</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]}</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">{$</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]}</span><span style="color:#C3E88D;"> in our </span><span style="color:#89DDFF;">{$</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]}</span><span style="color:#C3E88D;"> store.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&quot;We have 45 banners in our California store.&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&quot;We have 20 apples in our Florida store.&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&quot;We have 60 coconuts in our Texas store.&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1251</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;banners&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         45,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;California&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;apples&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         20,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;Florida&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;coconuts&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         60,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;Texas&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span></code></pre></div><blockquote><p>在循环的回调函数中通过下标获取对应值的方式不是很优雅，可能过了一段时间就忘了对应的值是什么。</p><p>有没有更加优雅的方式优化这个问题呢？使用 <a href="./eachSpread.html">eachSpread</a> 方法。</p></blockquote><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">collect</span><span style="color:#89DDFF;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">banners</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">45</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">California</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">apples</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Florida</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">coconuts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">60</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Texas</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#89DDFF;">])-&gt;</span><span style="color:#82AAFF;">eachSpread</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">product</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">qty</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">dump</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">We have </span><span style="color:#89DDFF;">{$</span><span style="color:#A6ACCD;">product</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">{$</span><span style="color:#A6ACCD;">qty</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> in our </span><span style="color:#89DDFF;">{$</span><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> store.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// output</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&quot;We have banners 45 in our California store.&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&quot;We have apples 20 in our Florida store.&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&quot;We have coconuts 60 in our Texas store.&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1249</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;banners&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         45,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;California&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;apples&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         20,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;Florida&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       [</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;coconuts&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         60,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         &quot;Texas&quot;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">       ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span></code></pre></div><blockquote><p>可以看到通过调用 <a href="./eachSpread.html">eachSpread</a> 方法，在回调函数中有更明确的变量可供使用，变得更加有寓意话。</p></blockquote>`,12),t=[o];function e(c,r,y,i,D,F){return a(),n("div",null,t)}const A=s(p,[["render",e]]);export{u as __pageData,A as default};
