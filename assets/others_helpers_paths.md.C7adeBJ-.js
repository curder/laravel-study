import{_ as a,c as s,o as i,a3 as p}from"./chunks/framework.BRlPijPu.js";const E=JSON.parse('{"title":"Paths","description":"","frontmatter":{},"headers":[],"relativePath":"others/helpers/paths.md","filePath":"others/helpers/paths.md","lastUpdated":1707277010000}'),e={name:"others/helpers/paths.md"},t=p('<h1 id="paths" tabindex="-1">Paths <a class="header-anchor" href="#paths" aria-label="Permalink to &quot;Paths&quot;">​</a></h1><p>Laravel 提供了一些路径函数用于快速生成路径。</p><h2 id="app-path" tabindex="-1"><code>app_path()</code> <a class="header-anchor" href="#app-path" aria-label="Permalink to &quot;`app_path()`&quot;">​</a></h2><p><code>app_path()</code> 函数返回应用程序目录 <code>app</code> 的完整路径。</p><p>还可以使用该 <code>app_path()</code> 函数生成相对于应用程序目录的文件的完整路径：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">app_path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">app_path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Http/Controllers/Controller.php&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="base-path" tabindex="-1"><code>base_path()</code> <a class="header-anchor" href="#base-path" aria-label="Permalink to &quot;`base_path()`&quot;">​</a></h2><p><code>base_path()</code> 函数返回应用程序的完整路径。</p><p>也可以使用该 <code>base_path()</code> 函数生成相对于项目根目录的给定文件的完整路径：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">base_path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">base_path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;vendor/bin&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="config-path" tabindex="-1"><code>config_path()</code> <a class="header-anchor" href="#config-path" aria-label="Permalink to &quot;`config_path()`&quot;">​</a></h2><p><code>config_path()</code> 函数返回应用程序目录 <code>config</code> 的全路径。</p><p>也可以使用 <code>config_path()</code> 函数生成相对于应用程序配置目录的文件的完整路径：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">config_path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">config_path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;app.php&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="database-path" tabindex="-1"><code>database_path()</code> <a class="header-anchor" href="#database-path" aria-label="Permalink to &quot;`database_path()`&quot;">​</a></h2><p><code>database_path()</code> 函数返回应用程序目录 <code>database</code> 的全路径。</p><p>也可以使用 <code>database_path()</code> 函数生成相对于应用程序 <code>database</code> 的完整路径：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">database_path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">database_path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;factories/UserFactory.php&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="lang-path" tabindex="-1"><code>lang_path()</code> <a class="header-anchor" href="#lang-path" aria-label="Permalink to &quot;`lang_path()`&quot;">​</a></h2><p><code>lang_path()</code> 函数返回应用程序目录 <code>resources/lang</code> 的全路径。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lang_path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lang_path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;en/messages.php&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="mix" tabindex="-1"><code>mix()</code> <a class="header-anchor" href="#mix" aria-label="Permalink to &quot;`mix()`&quot;">​</a></h2><p>该函数返回<a href="https://laravel.com/docs/master/mix" target="_blank" rel="noreferrer">版本化 Mix 文件</a>的路径：</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;css/app.css&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;js/app.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="public-path" tabindex="-1"><code>public_path()</code> <a class="header-anchor" href="#public-path" aria-label="Permalink to &quot;`public_path()`&quot;">​</a></h2><p><code>public_path()</code> 函数返回应用程序目录 <code>public</code> 的全路径。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">public_path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">public_path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;css/app.css&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="resource-path" tabindex="-1"><code>resource_path()</code> <a class="header-anchor" href="#resource-path" aria-label="Permalink to &quot;`resource_path()`&quot;">​</a></h2><p><code>resource_path()</code> 函数返回应用程序目录 <code>resources</code> 的全路径。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resource_path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resource_path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;views/welcome.blade.php&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="storage-path" tabindex="-1"><code>storage_path()</code> <a class="header-anchor" href="#storage-path" aria-label="Permalink to &quot;`storage_path()`&quot;">​</a></h2><p><code>storage_path()</code> 函数返回应用程序目录 <code>storage</code> 的全路径。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">storage_path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">storage_path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;logs/laravel.log&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>',33),h=[t];function n(l,d,o,c,k,r){return i(),s("div",null,h)}const b=a(e,[["render",n]]);export{E as __pageData,b as default};
