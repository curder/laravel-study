import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.e8ee2c8f.js";const B=JSON.parse('{"title":"mapInto","description":"","frontmatter":{},"headers":[],"relativePath":"collections/mapInto.md","filePath":"collections/mapInto.md","lastUpdated":1616865921000}'),p={name:"collections/mapInto.md"},o=l(`<h1 id="mapinto" tabindex="-1">mapInto <a class="header-anchor" href="#mapinto" aria-label="Permalink to &quot;mapInto&quot;">​</a></h1><p>遍历集合，通过将值传递给构造函数来创建给定类的新实例。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$collection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$collection</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">mapInto</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">Coverter</span><span style="color:#F97583;">::class</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dump</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> ($coverter) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> $coverter</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">toCentimeters</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dump</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">$collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dump</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Coverter</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">private</span><span style="color:#E1E4E8;"> $amount;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__construct</span><span style="color:#E1E4E8;">($amount)</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">amount </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $amount;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">toCentimeters</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$this</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">amount </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2.54</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">array:4 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  0 =&gt; Coverter {#1105</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    -amount: 1</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  1 =&gt; Coverter {#1104</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    -amount: 2</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  2 =&gt; Coverter {#1103</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    -amount: 3</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  3 =&gt; Coverter {#1102</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">    -amount: 4</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">array:4 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  0 =&gt; 2.54</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  1 =&gt; 5.08</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  2 =&gt; 7.62</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  3 =&gt; 10.16</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">array:4 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  0 =&gt; 1</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  1 =&gt; 2</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  2 =&gt; 3</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  3 =&gt; 4</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">] </span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$collection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$collection</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">mapInto</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">Coverter</span><span style="color:#D73A49;">::class</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dump</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> ($coverter) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> $coverter</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">toCentimeters</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dump</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">$collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dump</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Coverter</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> $amount;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__construct</span><span style="color:#24292E;">($amount)</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">amount </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $amount;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">toCentimeters</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$this</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">amount </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2.54</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">array:4 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  0 =&gt; Coverter {#1105</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    -amount: 1</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  1 =&gt; Coverter {#1104</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    -amount: 2</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  2 =&gt; Coverter {#1103</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    -amount: 3</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  3 =&gt; Coverter {#1102</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">    -amount: 4</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">array:4 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  0 =&gt; 2.54</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  1 =&gt; 5.08</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  2 =&gt; 7.62</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  3 =&gt; 10.16</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">array:4 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  0 =&gt; 1</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  1 =&gt; 2</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  2 =&gt; 3</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  3 =&gt; 4</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">] </span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div>`,3),t=[o];function e(c,r,y,i,E,F){return n(),a("div",null,t)}const f=s(p,[["render",e]]);export{B as __pageData,f as default};
