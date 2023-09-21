import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.5499cfac.js";const D=JSON.parse('{"title":"tap","description":"","frontmatter":{},"headers":[],"relativePath":"collections/tap.md","filePath":"collections/tap.md","lastUpdated":1616865921000}'),p={name:"collections/tap.md"},o=l(`<h1 id="tap" tabindex="-1">tap <a class="header-anchor" href="#tap" aria-label="Permalink to &quot;tap&quot;">​</a></h1><p>将集合传递给回调，在特定点「tap」集合。此举能对集合中的项目执行某些操作，而不影响集合本身。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">reverse</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">tap</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> ($collection) { </span><span style="color:#6A737D;">// 这里的 collection 是拷贝而来，不是引用</span></span>
<span class="line"><span style="color:#E1E4E8;">    $collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">each</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">($item) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    	</span><span style="color:#B392F0;">dump</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;In Tap: &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;"> $item);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dd</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&quot;In Tap: 3&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&quot;In Tap: 2&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&quot;In Tap: 1&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;"> </span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">array:3 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  2 =&gt; 3</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  1 =&gt; 2</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  0 =&gt; 1</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">] </span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">reverse</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">tap</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> ($collection) { </span><span style="color:#6A737D;">// 这里的 collection 是拷贝而来，不是引用</span></span>
<span class="line"><span style="color:#24292E;">    $collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">each</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">($item) {</span></span>
<span class="line"><span style="color:#24292E;">    	</span><span style="color:#6F42C1;">dump</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;In Tap: &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">.</span><span style="color:#24292E;"> $item);</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">  })</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dd</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&quot;In Tap: 3&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&quot;In Tap: 2&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&quot;In Tap: 1&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;"> </span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">array:3 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  2 =&gt; 3</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  1 =&gt; 2</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  0 =&gt; 1</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">] </span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div>`,3),t=[o];function e(c,r,i,y,E,F){return n(),a("div",null,t)}const f=s(p,[["render",e]]);export{D as __pageData,f as default};
