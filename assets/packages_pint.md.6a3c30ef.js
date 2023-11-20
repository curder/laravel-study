import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.16715cb7.js";const u=JSON.parse('{"title":"laravel/pint","description":"","frontmatter":{},"headers":[],"relativePath":"packages/pint.md","filePath":"packages/pint.md","lastUpdated":1700467611000}'),l={name:"packages/pint.md"},o=p(`<h1 id="laravel-pint" tabindex="-1">laravel/pint <a class="header-anchor" href="#laravel-pint" aria-label="Permalink to &quot;laravel/pint&quot;">​</a></h1><p><a href="https://laravel.com/docs/master/pint" target="_blank" rel="noreferrer">Laravel Pint</a> 构建在 <a href="https://github.com/PHP-CS-Fixer/PHP-CS-Fixer" target="_blank" rel="noreferrer">PHP-CS-Fixer</a> 之上，可以轻松确保代码风格保持干净和一致。</p><p>Pint 会自动随所有新的 Laravel 应用程序一起安装，因此您可以立即开始使用它。</p><p>默认情况下，Pint 不需要任何配置，并且会遵循 Laravel 固有的编码风格来修复代码中的代码风格问题。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>要开始使用此软件包，请使用 Composer 安装它</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">composer</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">require</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">laravel/pint</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">composer</span><span style="color:#24292E;"> </span><span style="color:#032F62;">require</span><span style="color:#24292E;"> </span><span style="color:#032F62;">laravel/pint</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--dev</span></span></code></pre></div><h2 id="运行-pint" tabindex="-1">运行 pint <a class="header-anchor" href="#运行-pint" aria-label="Permalink to &quot;运行 pint&quot;">​</a></h2><p>安装后，它将直接运行，无需配置。所以可以运行命令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">./vendor/bin/pint</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">./vendor/bin/pint</span></span></code></pre></div><h3 id="特定目录-文件" tabindex="-1">特定目录/文件 <a class="header-anchor" href="#特定目录-文件" aria-label="Permalink to &quot;特定目录/文件&quot;">​</a></h3><p>还可以在特定文件或目录上运行 Pint</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">./vendor/bin/pint</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app/Models</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 在特定目录下运行</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">./vendor/bin/pint</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app/Models/User.php</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 指定特定文件</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">./vendor/bin/pint</span><span style="color:#24292E;"> </span><span style="color:#032F62;">app/Models</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 在特定目录下运行</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">./vendor/bin/pint</span><span style="color:#24292E;"> </span><span style="color:#032F62;">app/Models/User.php</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 指定特定文件</span></span></code></pre></div><h3 id="查看详细信息" tabindex="-1">查看详细信息 <a class="header-anchor" href="#查看详细信息" aria-label="Permalink to &quot;查看详细信息&quot;">​</a></h3><p>Pint 将显示其更新的所有文件的完整列表。可以通过在调用 Pint 时提供 <code>-v</code> 选项来查看有关 Pint 更改的更多详细信息。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">./vendor/bin/pint</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">./vendor/bin/pint</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span></span></code></pre></div><h3 id="仅检查不修改文件" tabindex="-1">仅检查不修改文件 <a class="header-anchor" href="#仅检查不修改文件" aria-label="Permalink to &quot;仅检查不修改文件&quot;">​</a></h3><p>如果希望 Pint 简单地检查代码是否有样式错误而不实际更改文件，可以使用 <code>--test</code> 选项：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">./vendor/bin/pint</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">./vendor/bin/pint</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--test</span></span></code></pre></div><h3 id="仅修改未添加到git版本库中的文件" tabindex="-1">仅修改未添加到Git版本库中的文件 <a class="header-anchor" href="#仅修改未添加到git版本库中的文件" aria-label="Permalink to &quot;仅修改未添加到Git版本库中的文件&quot;">​</a></h3><p>如果希望 Pint 只修改根据 Git 未提交更改的文件，可以使用 <code>--dirty</code> 选项：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">./vendor/bin/pint</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--dirty</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">./vendor/bin/pint</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--dirty</span></span></code></pre></div><h2 id="自定义配置" tabindex="-1">自定义配置 <a class="header-anchor" href="#自定义配置" aria-label="Permalink to &quot;自定义配置&quot;">​</a></h2><p>如果希望自定义预设、规则或检查的文件夹，可以通过在项目的根目录中创建 <code>pint.json</code> 文件来实现。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;preset&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;laravel&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;preset&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;laravel&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>此外，如果希望使用特定目录中的 <code>pint.json</code>，可以在调用 Pint 时提供 <code>--config</code> 选项：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pint</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vendor/my-company/coding-style/pint.json</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pint</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vendor/my-company/coding-style/pint.json</span></span></code></pre></div><h3 id="预设" tabindex="-1">预设 <a class="header-anchor" href="#预设" aria-label="Permalink to &quot;预设&quot;">​</a></h3><p>Pint 目前支持的预设有：<code>laravel</code>、<code>per</code>、<code>psr12</code> 和 <code>symfony</code>。</p><p>预设定义了一组可用于修复代码中的代码样式问题的规则。</p><p>默认情况下，Pint 使用 <code>laravel</code> 预设，它通过遵循 Laravel 固执己见的编码风格来修复问题。</p><p>但是，可以通过向 Pint 提供 <code>--preset</code> 选项来指定不同的预设：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pint</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--preset</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">psr12</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pint</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--preset</span><span style="color:#24292E;"> </span><span style="color:#032F62;">psr12</span></span></code></pre></div><p>还可以在项目的 <code>pint.json</code> 文件中设置预设：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;preset&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;psr12&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;preset&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;psr12&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="规则" tabindex="-1">规则 <a class="header-anchor" href="#规则" aria-label="Permalink to &quot;规则&quot;">​</a></h3><p>规则是 Pint 用于修复代码中的代码样式问题的样式指南。</p><p>如上所述，预设是预定义的规则组，对于大多数 PHP 项目来说应该是完美的，因此通常不需要担心它们包含的单个规则。</p><p>但是，如果有需要的话也可以在 <code>pint.json</code> 文件中启用或禁用特定规则。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;preset&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;laravel&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;rules&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;ordered_imports&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;sort_algorithm&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;length&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;imports_order&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">&quot;const&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">&quot;class&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">&quot;function&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;preset&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;laravel&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;rules&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;ordered_imports&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;sort_algorithm&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;length&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;imports_order&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#032F62;">&quot;const&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#032F62;">&quot;class&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#032F62;">&quot;function&quot;</span></span>
<span class="line"><span style="color:#24292E;">            ]</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Pint 构建在 <a href="https://github.com/FriendsOfPHP/PHP-CS-Fixer" target="_blank" rel="noreferrer">PHP-CS-Fixer</a> 之上，因此可以使用它的任何规则来修复项目中的代码样式问题：<a href="https://mlocati.github.io/php-cs-fixer-configurator" target="_blank" rel="noreferrer">PHP-CS-Fixer 配置</a>。</p><h3 id="排除文件-文件夹" tabindex="-1">排除文件/文件夹 <a class="header-anchor" href="#排除文件-文件夹" aria-label="Permalink to &quot;排除文件/文件夹&quot;">​</a></h3><p>默认情况下，Pint 将检查项目中除供应商目录中的文件之外的所有 <code>.php</code> 文件。</p><p>如果希望排除更多文件夹，可以使用 <code>exclude</code> 配置选项来执行此操作：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;exclude&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;my-specific/folder&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;exclude&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;my-specific/folder&quot;</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>如果希望排除包含给定名称模式的所有文件，可以使用 <code>notName</code> 配置选项来执行此操作</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;notName&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;*-my-file.php&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;notName&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;*-my-file.php&quot;</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>如果想通过提供文件的确切路径来排除文件，可以使用 <code>notPath</code> 配置选项来执行此操作：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;notPath&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;path/to/excluded-file.php&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;notPath&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;path/to/excluded-file.php&quot;</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,49),e=[o];function t(c,r,i,d,E,y){return a(),n("div",null,e)}const v=s(l,[["render",t]]);export{u as __pageData,v as default};
