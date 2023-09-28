import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.e8ee2c8f.js";const u=JSON.parse('{"title":"sort","description":"","frontmatter":{},"headers":[],"relativePath":"collections/sort.md","filePath":"collections/sort.md","lastUpdated":1648089437000}'),p={name:"collections/sort.md"},o=l(`<h1 id="sort" tabindex="-1">sort <a class="header-anchor" href="#sort" aria-label="Permalink to &quot;sort&quot;">​</a></h1><p>对集合进行排序。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1209</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       2 =&gt; 3,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       0 =&gt; 5,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       1 =&gt; 7,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       3 =&gt; 9,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">9</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">sort</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1209</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       2 =&gt; 3,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       0 =&gt; 5,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       1 =&gt; 7,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       3 =&gt; 9,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><p>使用 sort 对集合排序后，新返回的集合会保留原来集合的 key。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;A55&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;B54&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;B22&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;A11&#39;</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1209</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       3 =&gt; &quot;A11&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       0 =&gt; &quot;A55&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       2 =&gt; &quot;B22&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       1 =&gt; &quot;B54&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;A55&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;B54&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;B22&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;A11&#39;</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">sort</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1209</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       3 =&gt; &quot;A11&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       0 =&gt; &quot;A55&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       2 =&gt; &quot;B22&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       1 =&gt; &quot;B54&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><p>调用 <code>sort</code> 方法不传递任何参数默认排序使用值的asci编码进行排序。</p><p>自定义回调函数排序</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;A-55&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;B54&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;B-22&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;A11&#39;</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> ($a, $b) =&gt;  </span><span style="color:#79B8FF;">str_replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;-&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">, $a) </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> $b </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1228</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       3 =&gt; &quot;A11&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       0 =&gt; &quot;A-55&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       2 =&gt; &quot;B-22&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">       1 =&gt; &quot;B54&quot;,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;A-55&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;B54&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;B-22&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;A11&#39;</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">sort</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> ($a, $b) =&gt;  </span><span style="color:#005CC5;">str_replace</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;-&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">, $a) </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> $b </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">=&gt; Illuminate\\Support\\Collection {#1228</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       3 =&gt; &quot;A11&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       0 =&gt; &quot;A-55&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       2 =&gt; &quot;B-22&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">       1 =&gt; &quot;B54&quot;,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   }</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><h2 id="不改变原集合" tabindex="-1">不改变原集合 <a class="header-anchor" href="#不改变原集合" aria-label="Permalink to &quot;不改变原集合&quot;">​</a></h2><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$collection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;A-55&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;B54&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;B-22&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;A11&#39;</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$newCollection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> ($a, $b) =&gt;  </span><span style="color:#79B8FF;">str_replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;-&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">, $a) </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> $b </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$newCollection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dump</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">$collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dd</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">array:4 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  3 =&gt; &quot;A11&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  0 =&gt; &quot;A-55&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  2 =&gt; &quot;B-22&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  1 =&gt; &quot;B54&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">array:4 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  0 =&gt; &quot;A-55&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  1 =&gt; &quot;B54&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  2 =&gt; &quot;B-22&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  3 =&gt; &quot;A11&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">] </span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$collection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;A-55&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;B54&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;B-22&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;A11&#39;</span><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$newCollection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">sort</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> ($a, $b) =&gt;  </span><span style="color:#005CC5;">str_replace</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;-&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">, $a) </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> $b </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$newCollection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dump</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">$collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dd</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">array:4 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  3 =&gt; &quot;A11&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  0 =&gt; &quot;A-55&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  2 =&gt; &quot;B-22&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  1 =&gt; &quot;B54&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">array:4 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  0 =&gt; &quot;A-55&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  1 =&gt; &quot;B54&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  2 =&gt; &quot;B-22&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  3 =&gt; &quot;A11&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">] </span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><p>如果有更高级的排序需求，你可以传入回调来用你自己的算法进行排序。请参阅 PHP 文档的 <a href="http://php.net/manual/en/function.usort.php#refsect1-function.usort-parameters" target="_blank" rel="noreferrer">usort</a>，这是集合的 <code>sort</code> 方法在底层所调用的。</p><p>如果要对嵌套数组或对象的集合进行排序，参考 <a href="./sortBy.html">sortBy</a> 和 <a href="./sortByDesc.html">sortByDesc</a> 方法。</p>`,12),t=[o];function e(c,r,y,i,E,B){return n(),a("div",null,t)}const D=s(p,[["render",e]]);export{u as __pageData,D as default};
