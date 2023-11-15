import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.16715cb7.js";const u=JSON.parse('{"title":"模型观察者","description":"","frontmatter":{},"headers":[],"relativePath":"model/laravel-model-observers.md","filePath":"model/laravel-model-observers.md","lastUpdated":1677227101000}'),p={name:"model/laravel-model-observers.md"},o=l(`<h1 id="模型观察者" tabindex="-1">模型观察者 <a class="header-anchor" href="#模型观察者" aria-label="Permalink to &quot;模型观察者&quot;">​</a></h1><p>如果想在一个模型中监听多个事件，那么也可以把它写成一个类，类中的方法名称即是想要监听的事件名称。</p><p>阅读之前建议看下<a href="/laravel-study/model/laravel-model-events.html">模型事件</a>模型的事件观察者是模型的高级应用，我们不局限于将模型事件书写在模型中，可以使用模型观察者将相应事件独立出来。</p><p>创建观察者类，类所在目录：<code>app\\Observers</code>下，命名为：<code>PostObservers</code></p><h2 id="数据准备" tabindex="-1">数据准备 <a class="header-anchor" href="#数据准备" aria-label="Permalink to &quot;数据准备&quot;">​</a></h2><p>命令行执行如下命令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">laravel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">laravel-model-observers-demo</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">laravel-model-observers-demo</span></span>
<span class="line"><span style="color:#B392F0;">php</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">artisan</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">make:model</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Post</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span></span>
<span class="line"><span style="color:#B392F0;">touch</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">database/database.sqlite</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">laravel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">new</span><span style="color:#24292E;"> </span><span style="color:#032F62;">laravel-model-observers-demo</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">laravel-model-observers-demo</span></span>
<span class="line"><span style="color:#6F42C1;">php</span><span style="color:#24292E;"> </span><span style="color:#032F62;">artisan</span><span style="color:#24292E;"> </span><span style="color:#032F62;">make:model</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Post</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span></span>
<span class="line"><span style="color:#6F42C1;">touch</span><span style="color:#24292E;"> </span><span style="color:#032F62;">database/database.sqlite</span></span></code></pre></div><blockquote><p>上面的命令会创建一个 <code>Laravel</code> 项目并创建一个 <code>Post</code> 模型文件和对应的迁移文件与数据库配置文件。</p></blockquote><p>修改项目本地环境文件 <code>.env</code> 文件中的数据库连接</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">DB_CONNECTION=sqlite</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">DB_CONNECTION=sqlite</span></span></code></pre></div><p>修改数据库迁移文件 <code>database\\migrations\\****_**_**_******_create_posts_table.php</code> 中的 <code>up()</code> 方法。</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">up</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">Schema</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;posts&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">Blueprint</span><span style="color:#E1E4E8;"> $table) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        $table</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">increments</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;id&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        $table</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">string</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;title&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        $table</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">text</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;body&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        $table</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">softDeletes</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        $table</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">timestamps</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">up</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">Schema</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;posts&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">Blueprint</span><span style="color:#24292E;"> $table) {</span></span>
<span class="line"><span style="color:#24292E;">        $table</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">increments</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;id&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        $table</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">string</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;title&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        $table</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">text</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;body&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        $table</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">softDeletes</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        $table</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">timestamps</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>修改好迁移文件之后，执行迁移</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">php</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">artisan</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">migrate</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">php</span><span style="color:#24292E;"> </span><span style="color:#032F62;">artisan</span><span style="color:#24292E;"> </span><span style="color:#032F62;">migrate</span></span></code></pre></div><h2 id="模型内容" tabindex="-1">模型内容 <a class="header-anchor" href="#模型内容" aria-label="Permalink to &quot;模型内容&quot;">​</a></h2><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">namespace</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">App\\Models</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">App\\Observers\\PostObserver</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Illuminate\\Database\\Eloquent\\Model</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Illuminate\\Database\\Eloquent\\SoftDeletes</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Post</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Model</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">SoftDeletes</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">protected</span><span style="color:#E1E4E8;"> $fillable </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;title&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;body&#39;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">boot</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">parent::</span><span style="color:#B392F0;">boot</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">static::</span><span style="color:#B392F0;">observe</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">PostObserver</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">namespace</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">App\\Models</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">use</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">App\\Observers\\PostObserver</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">use</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Illuminate\\Database\\Eloquent\\Model</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">use</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Illuminate\\Database\\Eloquent\\SoftDeletes</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Post</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Model</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">use</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">SoftDeletes</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">protected</span><span style="color:#24292E;"> $fillable </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;title&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;body&#39;</span><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">boot</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">parent::</span><span style="color:#6F42C1;">boot</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">static::</span><span style="color:#6F42C1;">observe</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">PostObserver</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><blockquote><p>使用类的 <code>boot()</code> 静态方法注册模型观察者类。</p></blockquote><h2 id="观察者类" tabindex="-1">观察者类 <a class="header-anchor" href="#观察者类" aria-label="Permalink to &quot;观察者类&quot;">​</a></h2><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">namespace</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">App\\Observers</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PostObserver</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 新增模型数据触发</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">creating</span><span style="color:#E1E4E8;">($post)</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;creating event is fired</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 新增模型数据触发</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">created</span><span style="color:#E1E4E8;">($post)</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;created event is fired</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 编辑模型数据触发</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">updating</span><span style="color:#E1E4E8;">($post)</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;updating event is fired</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 编辑模型数据触发</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">updated</span><span style="color:#E1E4E8;">($post)</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;updated event is fired</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 新增、编辑模型数据触发</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">saving</span><span style="color:#E1E4E8;">($post)</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;saving event is fired</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 新增、编辑模型数据触发</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">saved</span><span style="color:#E1E4E8;">($post)</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;saved event is fired</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 删除模型数据触发</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">deleting</span><span style="color:#E1E4E8;">($post)</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;deleting event is fired</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 删除模型数据触发</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">deleted</span><span style="color:#E1E4E8;">($post)</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;deleted event is fired</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 监听数据即将从软删除状态恢复的事件。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">restoring</span><span style="color:#E1E4E8;">($post)</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;restoring event is fired</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 监听数据从软删除状态恢复后的事件。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">restored</span><span style="color:#E1E4E8;">($post)</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;restored event is fired</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">namespace</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">App\\Observers</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PostObserver</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 新增模型数据触发</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">creating</span><span style="color:#24292E;">($post)</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;creating event is fired</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 新增模型数据触发</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">created</span><span style="color:#24292E;">($post)</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;created event is fired</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 编辑模型数据触发</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">updating</span><span style="color:#24292E;">($post)</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;updating event is fired</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 编辑模型数据触发</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">updated</span><span style="color:#24292E;">($post)</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;updated event is fired</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 新增、编辑模型数据触发</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">saving</span><span style="color:#24292E;">($post)</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;saving event is fired</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 新增、编辑模型数据触发</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">saved</span><span style="color:#24292E;">($post)</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;saved event is fired</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 删除模型数据触发</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">deleting</span><span style="color:#24292E;">($post)</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;deleting event is fired</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 删除模型数据触发</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">deleted</span><span style="color:#24292E;">($post)</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;deleted event is fired</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 监听数据即将从软删除状态恢复的事件。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">restoring</span><span style="color:#24292E;">($post)</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;restoring event is fired</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 监听数据从软删除状态恢复后的事件。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">restored</span><span style="color:#24292E;">($post)</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;restored event is fired</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><blockquote><p><strong>注意:</strong> 如果 <code>saving</code> 、 <code>creating</code> 、 <code>updating</code> 、 <code>deleting</code> 、 <code>restoring</code> 事件逻辑中返回 <code>false</code> ，则相应的创建、更新、删除操作会退出，不再往下执行。 其中 <code>restoring</code> 和 <code>restored</code> 事件需要模型 <code>use Illuminate\\Database\\Eloquent\\SoftDeletes;</code> 才能正常使用。</p></blockquote><h2 id="对数据进行增删改操作" tabindex="-1">对数据进行增删改操作 <a class="header-anchor" href="#对数据进行增删改操作" aria-label="Permalink to &quot;对数据进行增删改操作&quot;">​</a></h2><h3 id="增加" tabindex="-1">增加 <a class="header-anchor" href="#增加" aria-label="Permalink to &quot;增加&quot;">​</a></h3><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">App\\Models\\Post</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">Post</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;title&#39;</span><span style="color:#F97583;">=&gt;</span><span style="color:#9ECBFF;">&#39;title&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;body&#39;</span><span style="color:#F97583;">=&gt;</span><span style="color:#9ECBFF;">&#39;Body&#39;</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">saving event is fired</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">creating event is fired</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">created event is fired</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">saved event is fired</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">use</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">App\\Models\\Post</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">Post</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;title&#39;</span><span style="color:#D73A49;">=&gt;</span><span style="color:#032F62;">&#39;title&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;body&#39;</span><span style="color:#D73A49;">=&gt;</span><span style="color:#032F62;">&#39;Body&#39;</span><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">saving event is fired</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">creating event is fired</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">created event is fired</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">saved event is fired</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><blockquote><p>通过执行上面的代码我们可以看到，执行模型 <code>create()</code> 方法，会依次触发 <code>saving</code> 、 <code>creating</code> 、 <code>created</code> 和 <code>saved</code> 事件。</p></blockquote><h3 id="删除" tabindex="-1">删除 <a class="header-anchor" href="#删除" aria-label="Permalink to &quot;删除&quot;">​</a></h3><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">App\\Models\\Post</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">Post</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">destroy</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">deleting event is fired</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">deleted event is fired</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">use</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">App\\Models\\Post</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">Post</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">destroy</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">deleting event is fired</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">deleted event is fired</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><blockquote><p>通过执行上面的删除代码，可以看到会依次触发 <code>deleting</code> 和 <code>deleted</code> 事件。</p></blockquote><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">App\\Models\\Post</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$post </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Post</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">withTrashed</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">latest</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">first</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">$post</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">restore</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">restoring event is fired</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">saving event is fired</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">updating event is fired</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">updated event is fired</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">saved event is fired</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">restored event is fired</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">use</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">App\\Models\\Post</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$post </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Post</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">withTrashed</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">latest</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">first</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">$post</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">restore</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">restoring event is fired</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">saving event is fired</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">updating event is fired</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">updated event is fired</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">saved event is fired</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">restored event is fired</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><blockquote><p>通过执行上面的恢复删除代码，可以依次触发了<code>restoring</code>、<code>saving</code>、<code>updating</code>、<code>updated</code>、<code>saved</code>和<code>restored</code>事件中的代码</p></blockquote><h3 id="更新" tabindex="-1">更新 <a class="header-anchor" href="#更新" aria-label="Permalink to &quot;更新&quot;">​</a></h3><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">App\\Models\\Post</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">$post </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Post</span><span style="color:#F97583;">::</span><span style="color:#B392F0;">latest</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">first</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">$post</span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;">title </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;New Title&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">$post</span><span style="color:#F97583;">-&gt;</span><span style="color:#B392F0;">save</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">saving event is fired</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">updating event is fired</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">updated event is fired</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">saved event is fired</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">use</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">App\\Models\\Post</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">$post </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Post</span><span style="color:#D73A49;">::</span><span style="color:#6F42C1;">latest</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">first</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">$post</span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;">title </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;New Title&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">$post</span><span style="color:#D73A49;">-&gt;</span><span style="color:#6F42C1;">save</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">saving event is fired</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">updating event is fired</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">updated event is fired</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">saved event is fired</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span></code></pre></div><blockquote><p>通过执行上面的代码，我们可以看到会依次触发 <code>saving</code> 、 <code>updating</code> 、 <code>updated</code> 和 <code>saved</code> 事件。</p></blockquote>`,32),e=[o];function t(c,r,y,E,i,d){return n(),a("div",null,e)}const v=s(p,[["render",t]]);export{u as __pageData,v as default};
