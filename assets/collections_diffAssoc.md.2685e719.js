import{_ as s,o as a,c as l,Q as o}from"./chunks/framework.aefb929a.js";const h=JSON.parse('{"title":"diffAssoc","description":"","frontmatter":{},"headers":[],"relativePath":"collections/diffAssoc.md","filePath":"collections/diffAssoc.md","lastUpdated":1695371195000}'),n={name:"collections/diffAssoc.md"},p=o(`<h1 id="diffassoc" tabindex="-1">diffAssoc <a class="header-anchor" href="#diffassoc" aria-label="Permalink to &quot;diffAssoc&quot;">​</a></h1><p>与另外一个集合或基于它的键和值的 PHP 数组进行比较，返回原集合不存在于给定集合中的键值对。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;apples&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;bananas&#39;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">diffAssoc</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;pears&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;bananas&#39;</span><span style="color:#E1E4E8;">]); </span><span style="color:#6A737D;">// [10 =&gt; &quot;apples&quot;]</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">10</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;apples&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">20</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;bananas&#39;</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">diffAssoc</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">30</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;pears&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">20</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;bananas&#39;</span><span style="color:#24292E;">]); </span><span style="color:#6A737D;">// [10 =&gt; &quot;apples&quot;]</span></span></code></pre></div><h2 id="相关方法" tabindex="-1">相关方法 <a class="header-anchor" href="#相关方法" aria-label="Permalink to &quot;相关方法&quot;">​</a></h2><ul><li><a href="./diff.html">diff</a></li><li><a href="./diffKeys.html">diffKeys</a></li><li><a href="./diffUsing.html">diffUsing</a></li><li><a href="./diffKeysUsing.html">diffKeysUsing</a></li><li><a href="./diffAssocUsing.html">diffAssocUsing</a></li></ul>`,5),e=[p];function t(c,r,i,y,E,f){return a(),l("div",null,e)}const F=s(n,[["render",t]]);export{h as __pageData,F as default};