import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.aefb929a.js";const D=JSON.parse('{"title":"all","description":"","frontmatter":{},"headers":[],"relativePath":"collections/all.md","filePath":"collections/all.md","lastUpdated":1616865921000}'),p={name:"collections/all.md"},o=l(`<h1 id="all" tabindex="-1">all <a class="header-anchor" href="#all" aria-label="Permalink to &quot;all&quot;">​</a></h1><p>该方法返回该集合表示的底层<strong>数组</strong>。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// [1, 2, 3, 4]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// [1, 2, 3, 4]</span></span></code></pre></div><p>上面 <code>all</code> 方法的调用类似于 <code>toArray</code></p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">toArray</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// [1, 2, 3, 4]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">toArray</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// [1, 2, 3, 4]</span></span></code></pre></div><h2 id="与-toarray-的区别" tabindex="-1">与 toArray 的区别 <a class="header-anchor" href="#与-toarray-的区别" aria-label="Permalink to &quot;与 toArray 的区别&quot;">​</a></h2><p>all 方法与 toArray 方法的区别在于嵌套集合在调用方法后生成的结果不同。</p><h3 id="嵌套集合-all" tabindex="-1">嵌套集合 all <a class="header-anchor" href="#嵌套集合-all" aria-label="Permalink to &quot;嵌套集合 all&quot;">​</a></h3><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">]), </span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">])])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">[</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;"> Illuminate\\Support\\Collection {#1092</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     1,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     2,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     3,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     4,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;"> },</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;"> Illuminate\\Support\\Collection {#1091</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   all: [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     1,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     2,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     3,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     4,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;"> },</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">]</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">]), </span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">])])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">[</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;"> Illuminate\\Support\\Collection {#1092</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     1,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     2,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     3,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     4,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;"> },</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;"> Illuminate\\Support\\Collection {#1091</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   all: [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     1,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     2,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     3,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     4,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;"> },</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">]</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div><p>使用 all 方法只会将第一层的格式化数组。</p><h3 id="嵌套集合-toarray" tabindex="-1">嵌套集合 toArray <a class="header-anchor" href="#嵌套集合-toarray" aria-label="Permalink to &quot;嵌套集合 toArray&quot;">​</a></h3><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">]), </span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">])])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">toArray</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">[</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;"> [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   1,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   2,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   3,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   4,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;"> ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;"> [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   1,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   2,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   3,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   4,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;"> ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">]</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">]), </span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">])])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">toArray</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">[</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;"> [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   1,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   2,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   3,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   4,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;"> ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;"> [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   1,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   2,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   3,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   4,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;"> ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">]</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div><p>使用 toArray 方法会将所有集合都格式化成数组。</p><p>同时对于多层级也是有效的</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">])]), </span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">])])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">toArray</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">[</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;"> [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     1,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     2,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     3,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">     4,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;"> ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;"> [</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   1,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   2,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   3,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">   4,</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;"> ],</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">]</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">])]), </span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">])])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">toArray</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// output</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">[</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;"> [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     1,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     2,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     3,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">     4,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;"> ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;"> [</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   1,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   2,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   3,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">   4,</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;"> ],</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">]</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div>`,15),t=[o];function e(c,y,r,i,E,F){return n(),a("div",null,t)}const f=s(p,[["render",e]]);export{D as __pageData,f as default};
