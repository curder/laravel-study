import{_ as a,c as s,o as e,V as t}from"./chunks/framework.HIcQKaVu.js";const b=JSON.parse('{"title":"生成视图的 Artisan 命令","description":"","frontmatter":{},"headers":[],"relativePath":"others/artisan-command-to-generate-views-in-laravel.md","filePath":"others/artisan-command-to-generate-views-in-laravel.md","lastUpdated":1700557283000}'),i={name:"others/artisan-command-to-generate-views-in-laravel.md"},p=t(`<h1 id="生成视图的-artisan-命令" tabindex="-1">生成视图的 Artisan 命令 <a class="header-anchor" href="#生成视图的-artisan-命令" aria-label="Permalink to &quot;生成视图的 Artisan 命令&quot;">​</a></h1><p>Laravel 默认自带各种命令，可以为应用程序生成样板代码。</p><p>例如，可以使用 Artisan 命令生成控制器、模型、数据库迁移文件等。</p><p>但是，截止到 Laravel 10.x 之前还没有生成视图的命令。</p><p>随着 Laravel 10.x 的发布，这种情况发生了变化。</p><p>在这个版本中，现在可以使用 <code>make:view</code> 命令生成视图。</p><h2 id="生成视图" tabindex="-1">生成视图 <a class="header-anchor" href="#生成视图" aria-label="Permalink to &quot;生成视图&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan make:view about-us</span></span></code></pre></div><p>执行完上面的命令后，会在项目中生成一个新的视图文件 <code>resources/views/about-us.blade.php</code>。</p><p>如果需要生成嵌套目录的视图文件，可以使用 <code>.</code> 或者 <code>/</code> 分割它们。比如生成一个 <code>resources/views/posts/index.blade.php</code> 的视图文件，可以使用下面的命令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan make:view posts.index</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Also can use below</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan make:view posts/index</span></span></code></pre></div><h2 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-label="Permalink to &quot;选项&quot;">​</a></h2><p>如果需要在生成视图的同时生成一个测试文件，可以传入 <code>--test</code> 选项。</p><ul><li><p><code>--test</code></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan make:view about-us --test</span></span></code></pre></div><blockquote><p>额外生成 <code>tests/Feature/View/AboutUsTest.php</code> 的 PHPUnit 测试文件</p></blockquote></li><li><p><code>--pest</code></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan make:view about-us --pest</span></span></code></pre></div><blockquote><p>额外生成 <code>tests/Feature/View/AboutUsTest.php</code> 的 Pest 测试文件</p></blockquote></li></ul>`,14),n=[p];function o(l,h,d,c,r,k){return e(),s("div",null,n)}const v=a(i,[["render",o]]);export{b as __pageData,v as default};
