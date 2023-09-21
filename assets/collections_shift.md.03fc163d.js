import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.5499cfac.js";const _=JSON.parse('{"title":"shift","description":"","frontmatter":{},"headers":[],"relativePath":"collections/shift.md","filePath":"collections/shift.md","lastUpdated":1616865921000}'),o={name:"collections/shift.md"},p=l(`<h1 id="shift" tabindex="-1">shift <a class="header-anchor" href="#shift" aria-label="Permalink to &quot;shift&quot;">​</a></h1><p>移除并返回集合的第一个项目。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$collection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$collection</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// [2, 3, 4, 5]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$collection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">shift</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$collection</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// [2, 3, 4, 5]</span></span></code></pre></div>`,3),t=[p];function e(c,r,i,y,E,h){return a(),n("div",null,t)}const f=s(o,[["render",e]]);export{_ as __pageData,f as default};
