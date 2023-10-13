import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.e8ee2c8f.js";const k=JSON.parse('{"title":"takeUntil","description":"","frontmatter":{},"headers":[],"relativePath":"collections/takeUntil.md","filePath":"collections/takeUntil.md","lastUpdated":1697180826000}'),o={name:"collections/takeUntil.md"},p=l(`<h1 id="takeuntil" tabindex="-1">takeUntil <a class="header-anchor" href="#takeuntil" aria-label="Permalink to &quot;takeUntil&quot;">​</a></h1><blockquote><p>将返回集合中的项目，直到给定的回调返回 <code>true</code>。</p></blockquote><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">takeUntil</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> ($item) =&gt; $item </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// [1, 2]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">takeUntil</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> ($item) =&gt; $item </span><span style="color:#D73A49;">&gt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// [1, 2]</span></span></code></pre></div><p>也可以将简单的值传递给 <code>takeUntil</code> 方法以获取项目，直到找到给定的值。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">takeUntil</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// [1, 2]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">takeUntil</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// [1, 2]</span></span></code></pre></div><blockquote><p><strong>注意：</strong> 如果找不到给定的值或回调从未返回 <code>true</code> ，则 <code>takeUntil</code> 方法将返回集合中的所有项目。</p></blockquote><h2 id="相关方法" tabindex="-1">相关方法 <a class="header-anchor" href="#相关方法" aria-label="Permalink to &quot;相关方法&quot;">​</a></h2><ul><li><a href="./take.html">take</a></li><li><a href="./takeWhile.html">takeWhile</a></li></ul>`,8),e=[p];function t(c,r,i,y,E,d){return a(),n("div",null,e)}const F=s(o,[["render",t]]);export{k as __pageData,F as default};
