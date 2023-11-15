import{_ as s,o as a,c as l,Q as n}from"./chunks/framework.16715cb7.js";const q=JSON.parse('{"title":"concat","description":"","frontmatter":{},"headers":[],"relativePath":"collections/concat.md","filePath":"collections/concat.md","lastUpdated":1695366353000}'),o={name:"collections/concat.md"},p=n(`<h1 id="concat" tabindex="-1">concat <a class="header-anchor" href="#concat" aria-label="Permalink to &quot;concat&quot;">​</a></h1><blockquote><p>将给定数组或集合的值附加到另一个集合的末尾</p></blockquote><h2 id="相关示例" tabindex="-1">相关示例 <a class="header-anchor" href="#相关示例" aria-label="Permalink to &quot;相关示例&quot;">​</a></h2><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 合并简单数组</span></span>
<span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;value1&#39;</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">concat</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;key2&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;value2&#39;</span><span style="color:#E1E4E8;">]); </span><span style="color:#6A737D;">// [&quot;value1&quot;, &quot;value2&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// \`concat\` 方法会忽略掉附加的元素的 key</span></span>
<span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;key1&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;value1&#39;</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">concat</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;key2&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;value2&#39;</span><span style="color:#E1E4E8;">]); </span><span style="color:#6A737D;">// [&quot;key1&quot; =&gt; &quot;value1&quot;, 0 =&gt; &quot;value2&quot;],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 如果需要保持附加元素的key，可以使用 merge 方法</span></span>
<span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;key1&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;value1&#39;</span><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">merge</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;key2&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;value2&#39;</span><span style="color:#E1E4E8;">]); </span><span style="color:#6A737D;">// [&quot;key1&quot; =&gt; &quot;value1&quot;, &quot;key2&quot; =&gt; &quot;value2&quot;]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 合并简单数组</span></span>
<span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;value1&#39;</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">concat</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;key2&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;value2&#39;</span><span style="color:#24292E;">]); </span><span style="color:#6A737D;">// [&quot;value1&quot;, &quot;value2&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// \`concat\` 方法会忽略掉附加的元素的 key</span></span>
<span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;key1&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;value1&#39;</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">concat</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;key2&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;value2&#39;</span><span style="color:#24292E;">]); </span><span style="color:#6A737D;">// [&quot;key1&quot; =&gt; &quot;value1&quot;, 0 =&gt; &quot;value2&quot;],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 如果需要保持附加元素的key，可以使用 merge 方法</span></span>
<span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;key1&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;value1&#39;</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">merge</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;key2&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;value2&#39;</span><span style="color:#24292E;">]); </span><span style="color:#6A737D;">// [&quot;key1&quot; =&gt; &quot;value1&quot;, &quot;key2&quot; =&gt; &quot;value2&quot;]</span></span></code></pre></div><h2 id="关联方法" tabindex="-1">关联方法 <a class="header-anchor" href="#关联方法" aria-label="Permalink to &quot;关联方法&quot;">​</a></h2><ul><li><a href="./merge.html">merge</a></li></ul>`,6),e=[p];function t(c,r,y,E,u,i){return a(),l("div",null,e)}const g=s(o,[["render",t]]);export{q as __pageData,g as default};