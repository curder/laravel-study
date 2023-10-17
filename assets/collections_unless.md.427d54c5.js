import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.e8ee2c8f.js";const d=JSON.parse('{"title":"unless","description":"","frontmatter":{},"headers":[],"relativePath":"collections/unless.md","filePath":"collections/unless.md","lastUpdated":1697183378000}'),p={name:"collections/unless.md"},o=l(`<h1 id="unless" tabindex="-1">unless <a class="header-anchor" href="#unless" aria-label="Permalink to &quot;unless&quot;">​</a></h1><p>除非方法的第一个参数的计算结果为 <code>true</code>，否则该方法将执行给定的回调。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">unless</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;">($item) =&gt; $item</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">unless</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;">($item) =&gt; $item</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// [1, 2, 3, 5]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">unless</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">fn</span><span style="color:#24292E;">($item) =&gt; $item</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">unless</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">fn</span><span style="color:#24292E;">($item) =&gt; $item</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// [1, 2, 3, 5]</span></span></code></pre></div><p>如果需要反向操作，请使用 <a href="./when.html">when</a> 方法。</p><h2 id="相关方法" tabindex="-1">相关方法 <a class="header-anchor" href="#相关方法" aria-label="Permalink to &quot;相关方法&quot;">​</a></h2><ul><li><a href="./when.html">when</a></li></ul>`,6),e=[o];function t(c,r,y,E,i,h){return a(),n("div",null,e)}const F=s(p,[["render",t]]);export{d as __pageData,F as default};