import{_ as s,o as a,c as l,Q as n}from"./chunks/framework.e8ee2c8f.js";const h=JSON.parse('{"title":"last","description":"","frontmatter":{},"headers":[],"relativePath":"collections/last.md","filePath":"collections/last.md","lastUpdated":1695894778000}'),o={name:"collections/last.md"},p=n(`<h1 id="last" tabindex="-1">last <a class="header-anchor" href="#last" aria-label="Permalink to &quot;last&quot;">​</a></h1><p>返回集合中通过给定真实测试的最后一个元素，<strong>不是一个新集合</strong>。</p><p>不传入参数调用 <code>last</code> 方法来获取集合中最后一个元素。如果集合是空的，返回 <code>null</code>。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">last</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 4</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">last</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 4</span></span></code></pre></div><h2 id="使用回调" tabindex="-1">使用回调 <a class="header-anchor" href="#使用回调" aria-label="Permalink to &quot;使用回调&quot;">​</a></h2><p>从集合右往左遍历，满足条件元素被返回。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">last</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> ($element) =&gt; $element </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">last</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> ($element) =&gt; $element </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 1</span></span></code></pre></div><h2 id="使用默认值" tabindex="-1">使用默认值 <a class="header-anchor" href="#使用默认值" aria-label="Permalink to &quot;使用默认值&quot;">​</a></h2><p><code>last</code> 方法允许传递一个默认值，当通过回调函数遍历集合没有返回值时，默认值将会被返回。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">last</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> ($element) =&gt; $element </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">last</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 1000</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">last</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> ($element) =&gt; $element </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">last</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 1000</span></span></code></pre></div><blockquote><p>如果需要返回第一个元素可以使用<a href="./first.html">first()</a>方法。</p></blockquote><h2 id="相关方法" tabindex="-1">相关方法 <a class="header-anchor" href="#相关方法" aria-label="Permalink to &quot;相关方法&quot;">​</a></h2><ul><li><a href="./first.html">first</a></li></ul>`,13),e=[p];function t(c,r,y,E,i,d){return a(),l("div",null,e)}const C=s(o,[["render",t]]);export{h as __pageData,C as default};
