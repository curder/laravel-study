import{_ as s,o as n,c as a,Q as o}from"./chunks/framework.e8ee2c8f.js";const q=JSON.parse('{"title":"keyBy","description":"","frontmatter":{},"headers":[],"relativePath":"collections/keyBy.md","filePath":"collections/keyBy.md","lastUpdated":1695894577000}'),p={name:"collections/keyBy.md"},l=o(`<h1 id="keyby" tabindex="-1">keyBy <a class="header-anchor" href="#keyby" aria-label="Permalink to &quot;keyBy&quot;">​</a></h1><p>以给定的键作为集合的键。如果多个项目具有相同的键，则只有最后一个项目会显示在新集合中。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;product_id&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;prod-100&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;desk&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;product_id&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;prod-200&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;chair&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">keyBy</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;product_id&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">[</span></span>
<span class="line"><span style="color:#6A737D;">   &quot;prod-100&quot; =&gt; [&quot;product_id&quot; =&gt; &quot;prod-100&quot;, &quot;name&quot; =&gt; &quot;desk&quot;],</span></span>
<span class="line"><span style="color:#6A737D;">   &quot;prod-200&quot; =&gt; [&quot;product_id&quot; =&gt; &quot;prod-200&quot;, &quot;name&quot; =&gt; &quot;chair&quot;]</span></span>
<span class="line"><span style="color:#6A737D;">]</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;product_id&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;prod-100&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;desk&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;product_id&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;prod-200&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;chair&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">keyBy</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;product_id&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">[</span></span>
<span class="line"><span style="color:#6A737D;">   &quot;prod-100&quot; =&gt; [&quot;product_id&quot; =&gt; &quot;prod-100&quot;, &quot;name&quot; =&gt; &quot;desk&quot;],</span></span>
<span class="line"><span style="color:#6A737D;">   &quot;prod-200&quot; =&gt; [&quot;product_id&quot; =&gt; &quot;prod-200&quot;, &quot;name&quot; =&gt; &quot;chair&quot;]</span></span>
<span class="line"><span style="color:#6A737D;">]</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div><p>也可以传入一个回调方法，回调返回的值会作为该集合的键</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;product_id&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;prod-100&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;desk&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#9ECBFF;">&#39;product_id&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;prod-200&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;chair&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">])</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">keyBy</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> ($item) =&gt; </span><span style="color:#79B8FF;">strtoupper</span><span style="color:#E1E4E8;">($item[</span><span style="color:#9ECBFF;">&#39;product_id&#39;</span><span style="color:#E1E4E8;">]));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">[</span></span>
<span class="line"><span style="color:#6A737D;">  &quot;PROD-100&quot; =&gt; [&quot;product_id&quot; =&gt; &quot;prod-100&quot;, &quot;name&quot; =&gt; &quot;desk&quot;],</span></span>
<span class="line"><span style="color:#6A737D;">  &quot;PROD-200&quot; =&gt; [&quot;product_id&quot; =&gt; &quot;prod-200&quot;, &quot;name&quot; =&gt; &quot;chair&quot;]</span></span>
<span class="line"><span style="color:#6A737D;">]</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;product_id&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;prod-100&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;desk&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#032F62;">&#39;product_id&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;prod-200&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;chair&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">])</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">keyBy</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> ($item) =&gt; </span><span style="color:#005CC5;">strtoupper</span><span style="color:#24292E;">($item[</span><span style="color:#032F62;">&#39;product_id&#39;</span><span style="color:#24292E;">]));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">[</span></span>
<span class="line"><span style="color:#6A737D;">  &quot;PROD-100&quot; =&gt; [&quot;product_id&quot; =&gt; &quot;prod-100&quot;, &quot;name&quot; =&gt; &quot;desk&quot;],</span></span>
<span class="line"><span style="color:#6A737D;">  &quot;PROD-200&quot; =&gt; [&quot;product_id&quot; =&gt; &quot;prod-200&quot;, &quot;name&quot; =&gt; &quot;chair&quot;]</span></span>
<span class="line"><span style="color:#6A737D;">]</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div>`,5),t=[l];function e(c,r,y,E,i,u){return n(),a("div",null,t)}const F=s(p,[["render",e]]);export{q as __pageData,F as default};