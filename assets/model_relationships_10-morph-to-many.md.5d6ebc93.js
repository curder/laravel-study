import{_ as s,c as a,o as n,a as e}from"./app.b2983bf2.js";const h=JSON.parse('{"title":"多态多对多","description":"","frontmatter":{},"headers":[{"level":2,"title":"软件版本","slug":"软件版本","link":"#软件版本","children":[]},{"level":2,"title":"关键字和表","slug":"关键字和表","link":"#关键字和表","children":[]},{"level":2,"title":"生成模型和迁移文件","slug":"生成模型和迁移文件","link":"#生成模型和迁移文件","children":[{"level":3,"title":"编辑迁移文件","slug":"编辑迁移文件","link":"#编辑迁移文件","children":[]},{"level":3,"title":"运行 php artisan 命令保存修改到数据库","slug":"运行-php-artisan-命令保存修改到数据库","link":"#运行-php-artisan-命令保存修改到数据库","children":[]}]},{"level":2,"title":"定义关联关系和修改模型的 fillable 属性","slug":"定义关联关系和修改模型的-fillable-属性","link":"#定义关联关系和修改模型的-fillable-属性","children":[]},{"level":2,"title":"使用 tinker 填充数据","slug":"使用-tinker-填充数据","link":"#使用-tinker-填充数据","children":[]},{"level":2,"title":"关联操作","slug":"关联操作","link":"#关联操作","children":[{"level":3,"title":"新增数据","slug":"新增数据","link":"#新增数据","children":[]},{"level":3,"title":"删除数据","slug":"删除数据","link":"#删除数据","children":[]},{"level":3,"title":"查询数据","slug":"查询数据","link":"#查询数据","children":[]},{"level":3,"title":"编辑数据","slug":"编辑数据","link":"#编辑数据","children":[]}]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[{"level":3,"title":"建立关联","slug":"建立关联","link":"#建立关联","children":[]}]}],"relativePath":"model/relationships/10-morph-to-many.md","lastUpdated":1643507443000}'),l={name:"model/relationships/10-morph-to-many.md"},p=e(`<h1 id="多态多对多" tabindex="-1">多态多对多 <a class="header-anchor" href="#多态多对多" aria-hidden="true">#</a></h1><p>多对多多态最常见的应用场景就是标签，比如一篇文章对应多个标签，一个视频也对应多个标签，同时一个标签可能对应多篇文章或多个视频，这就是所谓的“多对多多态关联”。</p><p>此时仅仅在标签表 <code>tags</code> 上定义一个 <code>item_id</code> 和 <code>item_type</code> 已经不够了，因为这个标签可能对应多个文章或视频，那么如何建立关联关系呢，我们可以通过一张中间表 <code>taggables</code> 来实现：该表中定义了文章/视频与标签的对应关系。</p><h2 id="软件版本" tabindex="-1">软件版本 <a class="header-anchor" href="#软件版本" aria-hidden="true">#</a></h2><ul><li><p>Laravel Version 5.4.19</p></li><li><p>PHP Version 7.0.8</p></li></ul><h2 id="关键字和表" tabindex="-1">关键字和表 <a class="header-anchor" href="#关键字和表" aria-hidden="true">#</a></h2><ul><li><p><code>morphToMany()</code></p></li><li><p><code>morphedByMany()</code></p></li><li><p><code>attach()</code></p></li><li><p><code>detach()</code></p></li><li><p><code>sync()</code></p></li><li><p><code>toggle()</code></p></li><li><p><code>posts</code> 、<code>videos</code> 、<code>tags</code>、<code>taggables</code> 和 <code>users</code> 表</p></li></ul><h2 id="生成模型和迁移文件" tabindex="-1">生成模型和迁移文件 <a class="header-anchor" href="#生成模型和迁移文件" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">php artisan make:model Post -m</span></span>
<span class="line"><span style="color:#A6ACCD;">php artisan make:model Video -m</span></span>
<span class="line"><span style="color:#A6ACCD;">php artisan make:model Tag -m</span></span>
<span class="line"><span style="color:#A6ACCD;">php artisan make:model Taggable -m</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="编辑迁移文件" tabindex="-1">编辑迁移文件 <a class="header-anchor" href="#编辑迁移文件" aria-hidden="true">#</a></h3><p>文件 <code>&lt;project&gt;/database/migrate/*_create_users_table.php</code> 内容如下</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">Schema::create(&#39;users&#39; , function(Blueprint $table){</span></span>
<span class="line"><span style="color:#A6ACCD;">    $table-&gt;increments(&#39;id&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    $table-&gt;string(&#39;name&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    $table-&gt;string(&#39;email&#39; , 30)-&gt;unique();</span></span>
<span class="line"><span style="color:#A6ACCD;">    $table-&gt;string(&#39;password&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    $table-&gt;rememberToken();</span></span>
<span class="line"><span style="color:#A6ACCD;">    $table-&gt;timestamps();</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>文件 <code>&lt;project&gt;/database/migrate/*_create_posts_table.php</code> 内容如下</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">Schema::create(&#39;posts&#39; , function(Blueprint $table){</span></span>
<span class="line"><span style="color:#A6ACCD;">    $table-&gt;increments(&#39;id&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    $table-&gt;unsignedInteger(&#39;user_id&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    $table-&gt;string(&#39;title&#39; , 60);</span></span>
<span class="line"><span style="color:#A6ACCD;">    $table-&gt;unsignedInteger(&#39;views&#39;)-&gt;comment(&#39;浏览数&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    $table-&gt;text(&#39;body&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    $table-&gt;timestamp(&#39;published_at&#39;)-&gt;nullable();</span></span>
<span class="line"><span style="color:#A6ACCD;">    $table-&gt;timestamps();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    $table-&gt;foreign(&#39;user_id&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        -&gt;references(&#39;id&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        -&gt;on(&#39;users&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        -&gt;onUpdate(&#39;cascade&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        -&gt;onDelete(&#39;cascade&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>文件 <code>&lt;project&gt;/database/migrate/*_create_videos_table.php</code> 内容如下</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">Schema::create(&#39;videos&#39; , function(Blueprint $table){</span></span>
<span class="line"><span style="color:#A6ACCD;">    $table-&gt;increments(&#39;id&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    $table-&gt;unsignedInteger(&#39;user_id&#39;)-&gt;comment(&#39;用户id&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    $table-&gt;unsignedTinyInteger(&#39;status&#39;)-&gt;comment(&#39;数据状态&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    $table-&gt;string(&#39;title&#39; , 30)-&gt;comment(&#39;标题&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    $table-&gt;string(&#39;description&#39; , 120)-&gt;comment(&#39;描述&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    $table-&gt;text(&#39;body&#39;)-&gt;comment(&#39;内容&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    $table-&gt;timestamps();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    $table-&gt;foreign(&#39;user_id&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        -&gt;references(&#39;id&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        -&gt;on(&#39;users&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        -&gt;onUpdate(&#39;cascade&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        -&gt;onDelete(&#39;cascade&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>文件 <code>&lt;project&gt;/database/migrate/*_create_tags_table.php</code> 内容如下</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">Schema::create(&#39;tags&#39;, function (Blueprint $table) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    $table-&gt;increments(&#39;id&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    $table-&gt;string(&#39;name&#39;,20)-&gt;default(&#39;&#39;)-&gt;comment(&#39;标签名&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    $table-&gt;timestamps();</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>文件 <code>&lt;project&gt;/database/migrate/*_create_taggables_table.php</code> 内容如下</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">Schema::create(&#39;taggables&#39; , function(Blueprint $table){</span></span>
<span class="line"><span style="color:#A6ACCD;">    $table-&gt;increments(&#39;id&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    $table-&gt;unsignedInteger(&#39;taggable_id&#39;)-&gt;comment(&#39;数据id&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    $table-&gt;string(&#39;taggable_type&#39; , 40)-&gt;comment(&#39;关联模型&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    $table-&gt;unsignedInteger(&#39;tag_id&#39;)-&gt;comment(&#39;标签id&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    $table-&gt;timestamps();</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="运行-php-artisan-命令保存修改到数据库" tabindex="-1">运行 php artisan 命令保存修改到数据库 <a class="header-anchor" href="#运行-php-artisan-命令保存修改到数据库" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">php artisan migrate</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>执行上面的命令后数据库将生成七张表， migrations password_resets posts taggables tags users videos</p></blockquote><h2 id="定义关联关系和修改模型的-fillable-属性" tabindex="-1">定义关联关系和修改模型的 fillable 属性 <a class="header-anchor" href="#定义关联关系和修改模型的-fillable-属性" aria-hidden="true">#</a></h2><p>在 <code>Post</code> 模型中定义关联关系：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">public function tags()</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  return $this-&gt;morphToMany(&#39;App\\Tag&#39;,&#39;taggable&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>在 <code>Video</code> 模型中定义关联关系：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">public function tags()</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  return $this-&gt;morphToMany(&#39;App\\Tag&#39;,&#39;taggable&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>在 <code>Tag</code> 模型中定义关联关系：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">public $timestamps = false;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 多对多多态关联</span></span>
<span class="line"><span style="color:#A6ACCD;">public function posts()</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">return $this-&gt;morphedByMany(&#39;App\\Post&#39;,&#39;taggable&#39;)-&gt;withTimestamps();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 多对多多态关联</span></span>
<span class="line"><span style="color:#A6ACCD;">public function videos()</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">return $this-&gt;morphedByMany(&#39;App\\Video&#39;,&#39;taggable&#39;)-&gt;withTimestamps();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="使用-tinker-填充数据" tabindex="-1">使用 tinker 填充数据 <a class="header-anchor" href="#使用-tinker-填充数据" aria-hidden="true">#</a></h2><p>修改 <code>/databases/factories/ModelFactory.php</code>，新增关联数据。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">/** @var \\Illuminate\\Database\\Eloquent\\Factory $factory */</span></span>
<span class="line"><span style="color:#A6ACCD;">$factory-&gt;define(App\\User::class, function (Faker\\Generator $faker) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    static $password;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return [</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;name&#39; =&gt; $faker-&gt;name,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;email&#39; =&gt; $faker-&gt;unique()-&gt;safeEmail,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;password&#39; =&gt; $password ?: $password = bcrypt(&#39;secret&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;remember_token&#39; =&gt; str_random(10),</span></span>
<span class="line"><span style="color:#A6ACCD;">    ];</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$factory-&gt;define(App\\Post::class, function (Faker\\Generator $faker) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    $user_ids = \\App\\User::pluck(&#39;id&#39;)-&gt;toArray();</span></span>
<span class="line"><span style="color:#A6ACCD;">    return [</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;user_id&#39; =&gt; $faker-&gt;randomElement($user_ids),</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;title&#39; =&gt; $faker-&gt;title,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;body&#39; =&gt; $faker-&gt;text(),</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;views&#39; =&gt; $faker-&gt;numberBetween(0, 1000),</span></span>
<span class="line"><span style="color:#A6ACCD;">    ];</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$factory-&gt;define(App\\Video::class, function (Faker\\Generator $faker) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    $user_ids = \\App\\User::pluck(&#39;id&#39;)-&gt;toArray();</span></span>
<span class="line"><span style="color:#A6ACCD;">    return [</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;user_id&#39; =&gt; $faker-&gt;randomElement($user_ids),</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;title&#39; =&gt; $faker-&gt;title,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;body&#39; =&gt; $faker-&gt;text(),</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;description&#39; =&gt; $faker-&gt;title,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;status&#39; =&gt; 1</span></span>
<span class="line"><span style="color:#A6ACCD;">    ];</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$factory-&gt;define(App\\Tag::class, function (Faker\\Generator $faker) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return [</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;name&#39; =&gt; $faker-&gt;lastName,</span></span>
<span class="line"><span style="color:#A6ACCD;">    ];</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>使用 tinker 命令</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">php artisan tinker</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">## 进入到 tinker 界面执行如下命令</span></span>
<span class="line"><span style="color:#A6ACCD;">namespace App</span></span>
<span class="line"><span style="color:#A6ACCD;">factory(User::class,4)-&gt;create(); // 生成4个用户</span></span>
<span class="line"><span style="color:#A6ACCD;">factory(Post::class,20)-&gt;create() // 生成20条 posts 表的测试数据</span></span>
<span class="line"><span style="color:#A6ACCD;">factory(Video::class,20)-&gt;create() // 生成20条 videos 表的测试数据</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="关联操作" tabindex="-1">关联操作 <a class="header-anchor" href="#关联操作" aria-hidden="true">#</a></h2><h3 id="新增数据" tabindex="-1">新增数据 <a class="header-anchor" href="#新增数据" aria-hidden="true">#</a></h3><h4 id="添加一个文章标签" tabindex="-1">添加一个文章标签 <a class="header-anchor" href="#添加一个文章标签" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">$tag = new \\App\\Tag([&#39;name&#39; =&gt; &#39;A Post Tag For 1.&#39;]);</span></span>
<span class="line"><span style="color:#A6ACCD;">$post = \\App\\Post::find(1);</span></span>
<span class="line"><span style="color:#A6ACCD;">$post-&gt;tags()-&gt;save($tag); // 新增的 \`tag\` 模型中 \`taggable_id\` 和 \`taggable_type\` 字段会被自动设定</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="添加多个文章标签" tabindex="-1">添加多个文章标签 <a class="header-anchor" href="#添加多个文章标签" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">$tags = [</span></span>
<span class="line"><span style="color:#A6ACCD;">    new \\App\\Tag([&#39;name&#39; =&gt; &#39;A Post Tag For 2.&#39;]),</span></span>
<span class="line"><span style="color:#A6ACCD;">    new \\App\\Tag([&#39;name&#39; =&gt; &#39;A Post Tag For 2.&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">$post = \\App\\Post::find(2);</span></span>
<span class="line"><span style="color:#A6ACCD;">$post-&gt;tags()-&gt;saveMany($tags); // 新增的 \`tag\` 模型中 \`taggable_id\` 和 \`taggable_type\` 字段会被自动设定</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="添加一个视频标签" tabindex="-1">添加一个视频标签 <a class="header-anchor" href="#添加一个视频标签" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">$tag = new \\App\\Tag([&#39;name&#39; =&gt; &#39;A Post Tag For 2.&#39;]);</span></span>
<span class="line"><span style="color:#A6ACCD;">$video = \\App\\Video::find(2);</span></span>
<span class="line"><span style="color:#A6ACCD;">$video-&gt;tags()-&gt;save($tag); // 新增的 \`tag\` 模型中 \`taggable_id\` 和 \`taggable_type\` 字段会被自动设定</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="添加多个视频标签" tabindex="-1">添加多个视频标签 <a class="header-anchor" href="#添加多个视频标签" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">$tags = [</span></span>
<span class="line"><span style="color:#A6ACCD;">    new \\App\\Tag([&#39;name&#39; =&gt; &#39;A Video Tag For 1.&#39;]),</span></span>
<span class="line"><span style="color:#A6ACCD;">    new \\App\\Tag([&#39;name&#39; =&gt; &#39;A Video Tag For 1.&#39;]),</span></span>
<span class="line"><span style="color:#A6ACCD;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">$video = \\App\\Video::find(1);</span></span>
<span class="line"><span style="color:#A6ACCD;">$video-&gt;tags()-&gt;saveMany($tags);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="删除数据" tabindex="-1">删除数据 <a class="header-anchor" href="#删除数据" aria-hidden="true">#</a></h3><h4 id="删除一篇文章下的所有标签" tabindex="-1">删除一篇文章下的所有标签 <a class="header-anchor" href="#删除一篇文章下的所有标签" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">$post = \\App\\Post::find(1);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$post-&gt;tags()-&gt;delete();  // 删除tags Table 中的关联数据</span></span>
<span class="line"><span style="color:#A6ACCD;">$post-&gt;tags()-&gt;detach(); // 同步删除 toggables Table中的关联数据</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="查询数据" tabindex="-1">查询数据 <a class="header-anchor" href="#查询数据" aria-hidden="true">#</a></h3><h4 id="查询一篇文章的标签" tabindex="-1">查询一篇文章的标签 <a class="header-anchor" href="#查询一篇文章的标签" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">$post = \\App\\Post::find(2);</span></span>
<span class="line"><span style="color:#A6ACCD;">$tags = $post-&gt;tags;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="查询一个视频的标签" tabindex="-1">查询一个视频的标签 <a class="header-anchor" href="#查询一个视频的标签" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">$video = \\App\\Video::find(1);</span></span>
<span class="line"><span style="color:#A6ACCD;">$tags = $video-&gt;tags;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="查询标签对应节点" tabindex="-1">查询标签对应节点 <a class="header-anchor" href="#查询标签对应节点" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">$tag = \\App\\Tag::find(1);</span></span>
<span class="line"><span style="color:#A6ACCD;">$posts = $tag-&gt;posts;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="编辑数据" tabindex="-1">编辑数据 <a class="header-anchor" href="#编辑数据" aria-hidden="true">#</a></h3><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-hidden="true">#</a></h2><h3 id="建立关联" tabindex="-1">建立关联 <a class="header-anchor" href="#建立关联" aria-hidden="true">#</a></h3><h4 id="tags-跟-videos-posts-做关联" tabindex="-1"><code>tags</code> 跟 <code>videos</code>, <code>posts</code> 做关联 <a class="header-anchor" href="#tags-跟-videos-posts-做关联" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">$tag-&gt;videos()-&gt;attach($video-&gt;id);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$tag-&gt;posts()-&gt;attach($post-&gt;id);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="videos-posts-跟-tag-做关联" tabindex="-1"><code>videos</code>, <code>posts</code> 跟 <code>tag</code> 做关联 <a class="header-anchor" href="#videos-posts-跟-tag-做关联" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">$videos-&gt;tags()-&gt;attach($tag-&gt;id);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$post-&gt;tags()-&gt;attach($tag-&gt;id);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>将视频或者文字添加某个标签</p></blockquote><h4 id="删除关联" tabindex="-1">删除关联 <a class="header-anchor" href="#删除关联" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">$tag-&gt;videos()-&gt;detach($vedio-&gt;id);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$tag-&gt;posts()-&gt;detach($post-&gt;id);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,65),t=[p];function o(c,i,r,d,C,A){return n(),a("div",null,t)}const y=s(l,[["render",o]]);export{h as __pageData,y as default};
