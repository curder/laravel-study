import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.5499cfac.js";const F=JSON.parse('{"title":"dump","description":"","frontmatter":{},"headers":[],"relativePath":"collections/dump.md","filePath":"collections/dump.md","lastUpdated":1648089437000}'),p={name:"collections/dump.md"},o=l(`<h1 id="dump" tabindex="-1">dump <a class="header-anchor" href="#dump" aria-label="Permalink to &quot;dump&quot;">​</a></h1><p>打印集合的元素，在调试时很有帮助。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">reverse</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dump</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// 打印输出</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;">($value) =&gt; $value </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">reverse</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dump</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// 打印输出</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">first</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">array:4 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  3 =&gt; 4</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  2 =&gt; 3</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  1 =&gt; 2</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  0 =&gt; 1</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">array:4 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  0 =&gt; 10</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  1 =&gt; 20</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  2 =&gt; 30</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  3 =&gt; 40</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">]</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">10</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">reverse</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dump</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// 打印输出</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">fn</span><span style="color:#24292E;">($value) =&gt; $value </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">reverse</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dump</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// 打印输出</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">first</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">array:4 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  3 =&gt; 4</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  2 =&gt; 3</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  1 =&gt; 2</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  0 =&gt; 1</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">array:4 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  0 =&gt; 10</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  1 =&gt; 20</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  2 =&gt; 30</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  3 =&gt; 40</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">]</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">10</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div><p>我们可以通过在链式调用集合方法的时候使用<code>dump</code>打印出当前的集合状态，以便查看集合状态。</p><p>如果需要在某处停止链式调用，建议使用 <a href="./dd.html">dd</a> 方法。</p>`,5),t=[o];function e(c,r,y,i,E,d){return n(),a("div",null,t)}const f=s(p,[["render",e]]);export{F as __pageData,f as default};
