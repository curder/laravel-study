import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.aefb929a.js";const u=JSON.parse('{"title":"格式化 Markdown 数据列表","description":"","frontmatter":{},"headers":[],"relativePath":"collections/examples/markdown-format.md","filePath":"collections/examples/markdown-format.md","lastUpdated":1677233952000}'),o={name:"collections/examples/markdown-format.md"},e=l(`<h1 id="格式化-markdown-数据列表" tabindex="-1">格式化 Markdown 数据列表 <a class="header-anchor" href="#格式化-markdown-数据列表" aria-label="Permalink to &quot;格式化 Markdown 数据列表&quot;">​</a></h1><p>有如下数据：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$messages </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;Should be working now for all Providers.&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;If you see one where spaces are in the title let me know.&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;But there should not have blank in the key of config or .env file.&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$messages </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;Should be working now for all Providers.&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;If you see one where spaces are in the title let me know.&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;But there should not have blank in the key of config or .env file.&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">];</span></span></code></pre></div><p>格式化成 <code>markdown</code> 的 <code>li</code> 格式数据，如下：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FFAB70;">-</span><span style="color:#E1E4E8;"> Should be working now for all Providers. \\n</span></span>
<span class="line"><span style="color:#FFAB70;">-</span><span style="color:#E1E4E8;"> If you see one where spaces are in the title let me know. \\n</span></span>
<span class="line"><span style="color:#FFAB70;">-</span><span style="color:#E1E4E8;"> But there should not have blank in the key of config or .env file.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#E36209;">-</span><span style="color:#24292E;"> Should be working now for all Providers. \\n</span></span>
<span class="line"><span style="color:#E36209;">-</span><span style="color:#24292E;"> If you see one where spaces are in the title let me know. \\n</span></span>
<span class="line"><span style="color:#E36209;">-</span><span style="color:#24292E;"> But there should not have blank in the key of config or .env file.</span></span></code></pre></div><h2 id="使用-foreach-方法" tabindex="-1">使用 foreach 方法 <a class="header-anchor" href="#使用-foreach-方法" aria-label="Permalink to &quot;使用 foreach 方法&quot;">​</a></h2><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$messages </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;Should be working now for all Providers.&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;If you see one where spaces are in the title let me know.&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;But there should not have blank in the key of config or .env file.&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$comment </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39; - &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">array_shift</span><span style="color:#E1E4E8;">($messages);</span></span>
<span class="line"><span style="color:#F97583;">foreach</span><span style="color:#E1E4E8;"> ($messages </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> $message) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  $comment </span><span style="color:#F97583;">.=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;"> -  </span><span style="color:#E1E4E8;">\${message}</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">dd</span><span style="color:#E1E4E8;">($comment);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;"> - Should be working now for all Providers.\\n</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;"> -  If you see one where spaces are in the title let me know.\\n</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;"> -  But there should not have blank in the key of config or .env file.</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$messages </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;Should be working now for all Providers.&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;If you see one where spaces are in the title let me know.&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;But there should not have blank in the key of config or .env file.&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$comment </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39; - &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">.</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">array_shift</span><span style="color:#24292E;">($messages);</span></span>
<span class="line"><span style="color:#D73A49;">foreach</span><span style="color:#24292E;"> ($messages </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> $message) {</span></span>
<span class="line"><span style="color:#24292E;">  $comment </span><span style="color:#D73A49;">.=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;"> -  </span><span style="color:#24292E;">\${message}</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">dd</span><span style="color:#24292E;">($comment);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;"> - Should be working now for all Providers.\\n</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;"> -  If you see one where spaces are in the title let me know.\\n</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;"> -  But there should not have blank in the key of config or .env file.</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><h2 id="使用-map-和-implode-方法" tabindex="-1">使用 <a href="./../map.html">map</a> 和 <a href="./../implode.html">implode</a> 方法 <a class="header-anchor" href="#使用-map-和-implode-方法" aria-label="Permalink to &quot;使用 [map](../map.md) 和 [implode](../implode.md) 方法&quot;">​</a></h2><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$messages </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;Should be working now for all Providers.&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;If you see one where spaces are in the title let me know.&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;But there should not have blank in the key of config or .env file.&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$comment </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">collect</span><span style="color:#E1E4E8;">($messages)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> ($message) =&gt; </span><span style="color:#9ECBFF;">&#39;- &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">.</span><span style="color:#E1E4E8;"> $message)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">implode</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">dd</span><span style="color:#E1E4E8;">($comment);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">- Should be working now for all Providers.\\n</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">- If you see one where spaces are in the title let me know.\\n</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">- But there should not have blank in the key of config or .env file.</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$messages </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;Should be working now for all Providers.&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;If you see one where spaces are in the title let me know.&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;But there should not have blank in the key of config or .env file.&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$comment </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">collect</span><span style="color:#24292E;">($messages)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> ($message) =&gt; </span><span style="color:#032F62;">&#39;- &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">.</span><span style="color:#24292E;"> $message)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">implode</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">dd</span><span style="color:#24292E;">($comment);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">- Should be working now for all Providers.\\n</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">- If you see one where spaces are in the title let me know.\\n</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">- But there should not have blank in the key of config or .env file.</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div>`,9),p=[e];function t(c,r,i,y,E,h){return n(),a("div",null,p)}const f=s(o,[["render",t]]);export{u as __pageData,f as default};
