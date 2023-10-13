import{_ as s,o as a,c as l,Q as n}from"./chunks/framework.e8ee2c8f.js";const _=JSON.parse('{"title":"skip","description":"","frontmatter":{},"headers":[],"relativePath":"collections/skip.md","filePath":"collections/skip.md","lastUpdated":1696670367000}'),p={name:"collections/skip.md"},o=n(`<h1 id="skip" tabindex="-1">skip <a class="header-anchor" href="#skip" aria-label="Permalink to &quot;skip&quot;">​</a></h1><p>方法返回一个新集合，从集合的开头删除给定数量的元素。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">skip</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#6A737D;">// [4 =&gt; 5, 5 =&gt; 6]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">skip</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6A737D;">// [4 =&gt; 5, 5 =&gt; 6]</span></span></code></pre></div><h2 id="相关方法" tabindex="-1">相关方法 <a class="header-anchor" href="#相关方法" aria-label="Permalink to &quot;相关方法&quot;">​</a></h2><ul><li><a href="./take.html">take</a></li><li><a href="./skipUntil.html">skipUntil</a></li></ul>`,5),e=[o];function t(c,r,i,y,E,d){return a(),l("div",null,e)}const k=s(p,[["render",t]]);export{_ as __pageData,k as default};