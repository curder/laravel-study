import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.e8ee2c8f.js";const D=JSON.parse('{"title":"splice","description":"","frontmatter":{},"headers":[],"relativePath":"collections/splice.md","filePath":"collections/splice.md","lastUpdated":1616984662000}'),p={name:"collections/splice.md"},o=l(`<h1 id="splice" tabindex="-1">splice <a class="header-anchor" href="#splice" aria-label="Permalink to &quot;splice&quot;">​</a></h1><p>删除并返回从给定值后的内容，原集合也会受到影响。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$collection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$newCollection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">splice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$newCollection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dump</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">$collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dd</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">array:3 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  0 =&gt; 3</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  1 =&gt; 4</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  2 =&gt; 5</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">array:2 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  0 =&gt; 1</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  1 =&gt; 2</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$collection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$newCollection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">splice</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$newCollection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dump</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">$collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dd</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">array:3 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  0 =&gt; 3</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  1 =&gt; 4</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  2 =&gt; 5</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">array:2 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  0 =&gt; 1</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  1 =&gt; 2</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><blockquote><p>如果输入的值不存在则原集合内容不变。</p></blockquote><p>可以传入第二个参数以限制被删除内容的大小。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$collection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">$newCollection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">splice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$newCollection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dump</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">$collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dd</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">array:1 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  0 =&gt; 3</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">array:4 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  0 =&gt; 1</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  1 =&gt; 2</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  2 =&gt; 4</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  3 =&gt; 5</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$collection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#24292E;">$newCollection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">splice</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$newCollection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dump</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">$collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dd</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">array:1 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  0 =&gt; 3</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">array:4 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  0 =&gt; 1</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  1 =&gt; 2</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  2 =&gt; 4</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  3 =&gt; 5</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><p>也可以传入含有新项目的第三个参数来代替集合中删除的项目。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$collection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">$newCollection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">splice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, [</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$newCollection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dump</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">$collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">dd</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">array:1 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  0 =&gt; 3</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">array:6 [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  0 =&gt; 1</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  1 =&gt; 2</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  2 =&gt; 10</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  3 =&gt; 11</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  4 =&gt; 4</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">  5 =&gt; 5</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$collection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#24292E;">$newCollection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">splice</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, [</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">11</span><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$newCollection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dump</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">$collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">dd</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">array:1 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  0 =&gt; 3</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">array:6 [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  0 =&gt; 1</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  1 =&gt; 2</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  2 =&gt; 10</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  3 =&gt; 11</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  4 =&gt; 4</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">  5 =&gt; 5</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">]</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div>`,8),t=[o];function e(c,y,r,i,E,F){return n(),a("div",null,t)}const C=s(p,[["render",e]]);export{D as __pageData,C as default};
