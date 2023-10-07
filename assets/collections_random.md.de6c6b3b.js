import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.e8ee2c8f.js";const F=JSON.parse('{"title":"random","description":"","frontmatter":{},"headers":[],"relativePath":"collections/random.md","filePath":"collections/random.md","lastUpdated":1696667862000}'),l={name:"collections/random.md"},p=o(`<h1 id="random" tabindex="-1">random <a class="header-anchor" href="#random" aria-label="Permalink to &quot;random&quot;">​</a></h1><blockquote><p>从集合中返回一个随机项。</p></blockquote><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 4 - (retrieved randomly)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">random</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 4 - (retrieved randomly)</span></span></code></pre></div><p>可以选择性传入一个整数到 <code>random</code> 来指定要获取的随机项的数量。</p><p>当显式传递希望接收的数量时，则会返回指定数量项目的集合。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// [0 =&gt; 1, 1 =&gt; 2, 4 =&gt; 5] - (retrieved randomly)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">random</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// [0 =&gt; 1, 1 =&gt; 2, 4 =&gt; 5] - (retrieved randomly)</span></span></code></pre></div><blockquote><p>如果传入的值大于当前集合中的值，则会抛出 <code>InvalidArgumentException</code> 错误。</p></blockquote>`,7),e=[p];function t(c,r,y,d,E,i){return a(),n("div",null,e)}const m=s(l,[["render",t]]);export{F as __pageData,m as default};
