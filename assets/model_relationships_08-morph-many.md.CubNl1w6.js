import{_ as s,c as a,o as n,a2 as p}from"./chunks/framework.2-334A9N.js";const u=JSON.parse('{"title":"多态一对多","description":"","frontmatter":{},"headers":[],"relativePath":"model/relationships/08-morph-many.md","filePath":"model/relationships/08-morph-many.md","lastUpdated":1642992318000}'),e={name:"model/relationships/08-morph-many.md"},l=p(`<h1 id="多态一对多" tabindex="-1">多态一对多 <a class="header-anchor" href="#多态一对多" aria-label="Permalink to &quot;多态一对多&quot;">​</a></h1><p>多态关联允许一个模型在单个关联下属于多个不同父模型。常见的多态关联就是评论，评论内容可能是属于文章或视频。</p><h2 id="软件版本" tabindex="-1">软件版本 <a class="header-anchor" href="#软件版本" aria-label="Permalink to &quot;软件版本&quot;">​</a></h2><ul><li><p>Laravel Version 5.4.19</p></li><li><p>PHP Version 7.0.8</p></li></ul><h2 id="关键字和表" tabindex="-1">关键字和表 <a class="header-anchor" href="#关键字和表" aria-label="Permalink to &quot;关键字和表&quot;">​</a></h2><ul><li><p><code>morphTo()</code></p></li><li><p><code>morphMany()</code></p></li><li><p><code>attach()</code></p></li><li><p><code>detach()</code></p></li><li><p><code>sync()</code></p></li><li><p><code>toggle()</code></p></li><li><p><code>posts</code> 、<code>videos</code>、<code>comments</code> 和 <code>users</code> 表</p></li></ul><p>常见的多态关联就是评论，现在我们的内容类型包括文章和视频，用户既可以评论文章 ，也可以评论视频 。文章存在文章表 <code>posts</code>，视频存在视频表 <code>videos</code> ，评论存在评论表 <code>comments</code> ，某一条评论可能归属于某篇文章，也可能归属于某个视频。 在评论表中添加一个 <code>commentable_id</code> 字段表示其归属节点 ID ，同时定义一个 <code>commentable_type</code> 字段表示其归属节点类型，比如 <code>App\\Post</code> 或者 <code>App\\Video</code> 。</p><h2 id="生成模型和迁移文件" tabindex="-1">生成模型和迁移文件 <a class="header-anchor" href="#生成模型和迁移文件" aria-label="Permalink to &quot;生成模型和迁移文件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>php artisan make:model  Post -m</span></span>
<span class="line"><span>php artisan make:model Video -m</span></span>
<span class="line"><span>php artisan make:model Comment -m</span></span></code></pre></div><h3 id="编辑迁移文件" tabindex="-1">编辑迁移文件 <a class="header-anchor" href="#编辑迁移文件" aria-label="Permalink to &quot;编辑迁移文件&quot;">​</a></h3><p>文件 <code>&lt;project&gt;/database/migrate/*_create_users_table.php</code> 内容如下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>  Schema::create(&#39;users&#39; , function(Blueprint $table){</span></span>
<span class="line"><span>    $table-&gt;increments(&#39;id&#39;);</span></span>
<span class="line"><span>    $table-&gt;string(&#39;name&#39;);</span></span>
<span class="line"><span>    $table-&gt;string(&#39;email&#39; , 30)-&gt;unique();</span></span>
<span class="line"><span>    $table-&gt;string(&#39;password&#39;);</span></span>
<span class="line"><span>    $table-&gt;rememberToken();</span></span>
<span class="line"><span>    $table-&gt;timestamps();</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>文件 <code>&lt;project&gt;/database/migrate/*_create_posts_table.php</code> 内容如下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Schema::create(&#39;posts&#39;, function (Blueprint $table) {</span></span>
<span class="line"><span>    $table-&gt;increments(&#39;id&#39;);</span></span>
<span class="line"><span>    $table-&gt;unsignedInteger(&#39;user_id&#39;);</span></span>
<span class="line"><span>    $table-&gt;string(&#39;title&#39;, 60);</span></span>
<span class="line"><span>    $table-&gt;text(&#39;body&#39;);</span></span>
<span class="line"><span>    $table-&gt;timestamps();</span></span>
<span class="line"><span>    $table-&gt;timestamp(&#39;published_at&#39;)-&gt;nullable();</span></span>
<span class="line"><span>    $table-&gt;foreign(&#39;user_id&#39;)</span></span>
<span class="line"><span>        -&gt;references(&#39;id&#39;)</span></span>
<span class="line"><span>        -&gt;on(&#39;users&#39;)</span></span>
<span class="line"><span>        -&gt;onUpdate(&#39;cascade&#39;)</span></span>
<span class="line"><span>        -&gt;onDelete(&#39;cascade&#39;);</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>文件 <code>&lt;project&gt;/database/migrate/*_create_videos_table.php</code> 内容如下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Schema::create(&#39;videos&#39; , function(Blueprint $table){</span></span>
<span class="line"><span>    $table-&gt;increments(&#39;id&#39;);</span></span>
<span class="line"><span>    $table-&gt;unsignedInteger(&#39;user_id&#39;)-&gt;comment(&#39;用户id&#39;);</span></span>
<span class="line"><span>    $table-&gt;string(&#39;title&#39; , 30)-&gt;comment(&#39;标题&#39;);</span></span>
<span class="line"><span>    $table-&gt;string(&#39;description&#39; , 120)-&gt;comment(&#39;描述&#39;);</span></span>
<span class="line"><span>    $table-&gt;text(&#39;body&#39;)-&gt;comment(&#39;内容&#39;);</span></span>
<span class="line"><span>    $table-&gt;unsignedTinyInteger(&#39;status&#39;)-&gt;comment(&#39;数据状态&#39;);</span></span>
<span class="line"><span>    $table-&gt;timestamps();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    $table-&gt;foreign(&#39;user_id&#39;)</span></span>
<span class="line"><span>        -&gt;references(&#39;id&#39;)</span></span>
<span class="line"><span>        -&gt;on(&#39;users&#39;)</span></span>
<span class="line"><span>        -&gt;onUpdate(&#39;cascade&#39;)</span></span>
<span class="line"><span>        -&gt;onDelete(&#39;cascade&#39;);</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>文件 <code>&lt;project&gt;/database/migrate/*_create_comments_table.php</code> 内容如下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Schema::create(&#39;comments&#39; , function(Blueprint $table){</span></span>
<span class="line"><span>    $table-&gt;increments(&#39;id&#39;);</span></span>
<span class="line"><span>    $table-&gt;unsignedInteger(&#39;user_id&#39;);</span></span>
<span class="line"><span>    $table-&gt;unsignedInteger(&#39;commentable_id&#39;)-&gt;comment(&#39;评论所在表数据id&#39;);</span></span>
<span class="line"><span>    $table-&gt;string(&#39;commentable_type&#39; , 60)-&gt;comment(&#39;评论所属模型&#39;);</span></span>
<span class="line"><span>    $table-&gt;char(1)-&gt;notNull()-&gt;default(&#39;F&#39;)-&gt;comment(&#39;数据状态&#39;);</span></span>
<span class="line"><span>    $table-&gt;text(&#39;body&#39;)-&gt;comment(&#39;评论内容&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    $table-&gt;timestamps();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    $table-&gt;foreign(&#39;user_id&#39;)</span></span>
<span class="line"><span>        -&gt;references(&#39;id&#39;)</span></span>
<span class="line"><span>        -&gt;on(&#39;users&#39;)</span></span>
<span class="line"><span>        -&gt;onUpdate(&#39;cascade&#39;)</span></span>
<span class="line"><span>        -&gt;onDelete(&#39;cascade&#39;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>// 注意： 这里 \`commentable_id\` 和 \`commentable_type\`，字段前缀与模型的方法保持一些。比如这列使用 \`commentable_\` 那么定义的关联方法为 \`commentable()\`</span></span></code></pre></div><h3 id="运行-php-artisan-命令保存修改到数据库" tabindex="-1">运行 php artisan 命令保存修改到数据库 <a class="header-anchor" href="#运行-php-artisan-命令保存修改到数据库" aria-label="Permalink to &quot;运行 php artisan 命令保存修改到数据库&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>php artisan migrate</span></span></code></pre></div><blockquote><p>执行上面的命令后数据库将生成六张表，如下：</p><ul><li>migrations</li><li>password_resets</li><li>users</li><li>commons</li><li>posts</li><li>videos</li></ul></blockquote><h2 id="定义关联关系和修改模型的-fillable-属性" tabindex="-1">定义关联关系和修改模型的 fillable 属性 <a class="header-anchor" href="#定义关联关系和修改模型的-fillable-属性" aria-label="Permalink to &quot;定义关联关系和修改模型的 fillable 属性&quot;">​</a></h2><p>在 <code>User</code> 模型中的对应关系：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public function comments()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * Comment::class related 关联模型</span></span>
<span class="line"><span>     * id foreignKey 关联表字段</span></span>
<span class="line"><span>     * user_id localKey 当前表关联字段</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    return $this-&gt;hasMany(\\App\\Comment::class , &#39;user_id&#39; , &#39;id&#39;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在 <code>Post</code> 模型中的对应关系：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>protected $fillable = [&#39;user_id&#39; , &#39;title&#39; , &#39;body&#39; , &#39;published_at&#39;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public function user()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * User::class related 关联模型</span></span>
<span class="line"><span>     * id foreignKey 表 User::table 的关联字段</span></span>
<span class="line"><span>     * user_id localKey 关联表字段</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    return $this-&gt;hasOne(\\App\\User::class , &#39;id&#39; , &#39;user_id&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public function comments()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * @param  string $related  关联模型</span></span>
<span class="line"><span>     * @param  string $name     关联的名称，模型的方法名称</span></span>
<span class="line"><span>     * @param  string $type     关联的字段type</span></span>
<span class="line"><span>     * @param  string $id       关联的字段id</span></span>
<span class="line"><span>     * @param  string $localKey 当前模型的主键id</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    return $this-&gt;morphMany(Comment::class , &#39;commentable&#39; , &#39;commentable_type&#39; , &#39;commentable_id&#39; , &#39;id&#39;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在 <code>Video</code> 模型中的对应关系：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>protected $fillable = [&#39;user_id&#39; , &#39;title&#39; , &#39;description&#39; , &#39;content&#39; , &#39;status&#39;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public function user()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * User::class related 关联模型</span></span>
<span class="line"><span>     * id foreignKey 表 User::table 的关联字段</span></span>
<span class="line"><span>     * user_id localKey 关联表字段</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    return $this-&gt;hasOne(\\App\\User::class , &#39;id&#39; , &#39;user_id&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public function comments()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * @param  string $related  关联模型</span></span>
<span class="line"><span>     * @param  string $name     关联的名称，模型的方法名称</span></span>
<span class="line"><span>     * @param  string $type     关联的字段type</span></span>
<span class="line"><span>     * @param  string $id       关联的字段id</span></span>
<span class="line"><span>     * @param  string $localKey 当前模型的主键id</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    return $this-&gt;morphMany(\\App\\Comment::class , &#39;commentable&#39; , &#39;commentable_type&#39; , &#39;commentable_id&#39; , &#39;id&#39;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>在 <code>Comment</code> 模型中的对应关系：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>protected $fillable = [&#39;user_id&#39; , &#39;body&#39;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>public function commentable()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * @param  string $name 与数据库的 commentable 前缀保持一致,并且方法名要与之一致</span></span>
<span class="line"><span>     * @param  string $type 与数据库的 commentable_type 字段保持一致</span></span>
<span class="line"><span>     * @param  string $id   与数据库的 commentable_id 字段保持一致</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    return $this-&gt;morphTo(&#39;commentable&#39; , &#39;commentable_type&#39; , &#39;commentable_id&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public function user()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * User::class related 关联模型</span></span>
<span class="line"><span>     * user_id ownerKey 当前表关联字段</span></span>
<span class="line"><span>     * id relation 关联表字段</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    return $this-&gt;belongsTo(&#39;App\\User&#39; , &#39;user_id&#39; , &#39;id&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public function post()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * Post::class related 关联模型</span></span>
<span class="line"><span>     * commentable_id ownerKey 当前表关联字段</span></span>
<span class="line"><span>     * id relation 关联表字段</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    return $this-&gt;belongsTo(&#39;App\\Post&#39; , &#39;commentable_id&#39; , &#39;id&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public function video()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * Post::class related 关联模型</span></span>
<span class="line"><span>     * commentable_id ownerKey 当前表关联字段</span></span>
<span class="line"><span>     * id relation 关联表字段</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    return $this-&gt;belongsTo(&#39;App\\Video&#39;, &#39;commentable_id&#39; , &#39;id&#39;);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="使用-tinker-填充测试数据" tabindex="-1">使用 tinker 填充测试数据 <a class="header-anchor" href="#使用-tinker-填充测试数据" aria-label="Permalink to &quot;使用 tinker 填充测试数据&quot;">​</a></h2><p>修改 <code>/databases/factories/ModelFactory.php</code>，修改关联数据。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/** @var \\Illuminate\\Database\\Eloquent\\Factory $factory */</span></span>
<span class="line"><span>$factory-&gt;define(App\\User::class , function(Faker\\Generator $faker){</span></span>
<span class="line"><span>    static $password;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return [</span></span>
<span class="line"><span>        &#39;name&#39;           =&gt; $faker-&gt;name ,</span></span>
<span class="line"><span>        &#39;email&#39;          =&gt; $faker-&gt;unique()-&gt;safeEmail ,</span></span>
<span class="line"><span>        &#39;password&#39;       =&gt; $password ? : $password = bcrypt(&#39;secret&#39;) ,</span></span>
<span class="line"><span>        &#39;remember_token&#39; =&gt; str_random(10) ,</span></span>
<span class="line"><span>    ];</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$factory-&gt;define(App\\Post::class , function(Faker\\Generator $faker){</span></span>
<span class="line"><span>    $user_ids = \\App\\User::pluck(&#39;id&#39;)-&gt;toArray();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return [</span></span>
<span class="line"><span>        &#39;user_id&#39;      =&gt; $faker-&gt;randomElement($user_ids) ,</span></span>
<span class="line"><span>        &#39;title&#39;        =&gt; $faker-&gt;title ,</span></span>
<span class="line"><span>        &#39;body&#39;         =&gt; $faker-&gt;paragraph ,</span></span>
<span class="line"><span>        &#39;published_at&#39; =&gt; $faker-&gt;time(&#39;Y-m-d H:i:s&#39;) ,</span></span>
<span class="line"><span>    ];</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>$factory-&gt;define(App\\Video::class , function(Faker\\Generator $faker){</span></span>
<span class="line"><span>    $user_ids = \\App\\User::pluck(&#39;id&#39;)-&gt;toArray();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return [</span></span>
<span class="line"><span>        &#39;user_id&#39;     =&gt; $faker-&gt;randomElement($user_ids) ,</span></span>
<span class="line"><span>        &#39;title&#39;       =&gt; $faker-&gt;title ,</span></span>
<span class="line"><span>        &#39;description&#39; =&gt; $faker-&gt;title ,</span></span>
<span class="line"><span>        &#39;body&#39;     =&gt; $faker-&gt;paragraph ,</span></span>
<span class="line"><span>        &#39;status&#39;      =&gt; 1</span></span>
<span class="line"><span>    ];</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>使用 tinker 命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>php artisan tinker</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 进入到 tinker 界面执行如下命令</span></span>
<span class="line"><span>namespace App</span></span>
<span class="line"><span>factory(User::class,5)-&gt;create(); // 生成5个用户</span></span>
<span class="line"><span>factory(Post::class,10)-&gt;create() // 生成10条 posts 表的测试数据</span></span>
<span class="line"><span>factory(Video::class,10)-&gt;create(); // 生成10条 videos 表的测试数据</span></span></code></pre></div><p>至此，上面的 <code>users</code> 、<code>posts</code> 和 <code>videos</code> 表数据都已填充完毕。</p><h2 id="关联操作" tabindex="-1">关联操作 <a class="header-anchor" href="#关联操作" aria-label="Permalink to &quot;关联操作&quot;">​</a></h2><h3 id="新增数据" tabindex="-1">新增数据 <a class="header-anchor" href="#新增数据" aria-label="Permalink to &quot;新增数据&quot;">​</a></h3><h4 id="添加一个文章评论" tabindex="-1">添加一个文章评论 <a class="header-anchor" href="#添加一个文章评论" aria-label="Permalink to &quot;添加一个文章评论&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$post = \\App\\Post::find(1);</span></span>
<span class="line"><span>$comment = new \\App\\Comment([&#39;body&#39; =&gt; &#39;A new comment For Post 1.&#39; , &#39;user_id&#39; =&gt; \\Auth::user()-&gt;id]);</span></span>
<span class="line"><span>$post-&gt;comments()-&gt;save($comment); // 新增的 \`comment\` 模型中 \`commentable_id\` 和 \`commentable_type\` 字段会被自动设定</span></span></code></pre></div><h4 id="添加多条文章评论" tabindex="-1">添加多条文章评论 <a class="header-anchor" href="#添加多条文章评论" aria-label="Permalink to &quot;添加多条文章评论&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$user_id = \\Auth::user()-&gt;id;</span></span>
<span class="line"><span>$comments = [</span></span>
<span class="line"><span>    new \\App\\Comment([&#39;body&#39; =&gt; &#39;A new comment For Post 2.&#39; , &#39;user_id&#39; =&gt; $user_id]) ,</span></span>
<span class="line"><span>    new \\App\\Comment([&#39;body&#39; =&gt; &#39;Another comment For Post 2.&#39; , &#39;user_id&#39; =&gt; $user_id]) ,</span></span>
<span class="line"><span>    new \\App\\Comment([&#39;body&#39; =&gt; &#39;The latest comment For Post 2.&#39; , &#39;user_id&#39; =&gt; $user_id])</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span>$post = \\App\\Post::find(2);</span></span>
<span class="line"><span>$post-&gt;comments()-&gt;saveMany($comments);</span></span></code></pre></div><h4 id="添加视频评论" tabindex="-1">添加视频评论 <a class="header-anchor" href="#添加视频评论" aria-label="Permalink to &quot;添加视频评论&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$user_id = \\Auth::user()-&gt;id;</span></span>
<span class="line"><span>$video = \\App\\Video::find(10);</span></span>
<span class="line"><span>$comment = new \\App\\Comment([&#39;body&#39; =&gt; &#39;A new Comment For Video 10.&#39;, &#39;user_id&#39; =&gt; $user_id]);</span></span>
<span class="line"><span>$video-&gt;comments()-&gt;save($comment); //</span></span></code></pre></div><h4 id="添加多条视频评论" tabindex="-1">添加多条视频评论 <a class="header-anchor" href="#添加多条视频评论" aria-label="Permalink to &quot;添加多条视频评论&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$user_id = \\Auth::user()-&gt;id;</span></span>
<span class="line"><span>$comments = [</span></span>
<span class="line"><span>    new \\App\\Comment([&#39;body&#39; =&gt; &#39;A new comment For Video 5.&#39;, &#39;user_id&#39; =&gt; $user_id]) ,</span></span>
<span class="line"><span>    new \\App\\Comment([&#39;body&#39; =&gt; &#39;Another comment For Video 5.&#39;, &#39;user_id&#39; =&gt; $user_id]) ,</span></span>
<span class="line"><span>    new \\App\\Comment([&#39;body&#39; =&gt; &#39;The latest comment For Video 5.&#39;, &#39;user_id&#39; =&gt; $user_id])</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span>$video = \\App\\Video::find(5);</span></span>
<span class="line"><span>$video-&gt;comments()-&gt;saveMany($comments);</span></span></code></pre></div><h3 id="查询数据" tabindex="-1">查询数据 <a class="header-anchor" href="#查询数据" aria-label="Permalink to &quot;查询数据&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 查询一篇文章下的评论和发布评论者</span></span>
<span class="line"><span>$comments = \\App\\Post::find(1)-&gt;with([&#39;user&#39; , &#39;comments&#39;])-&gt;first();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 通过评论查询出数据和发布评论的用户信息</span></span>
<span class="line"><span>$commentable = \\App\\Comment::find(1)-&gt;commentable()-&gt;with(&#39;user&#39;)-&gt;first();</span></span></code></pre></div><h3 id="删除数据" tabindex="-1">删除数据 <a class="header-anchor" href="#删除数据" aria-label="Permalink to &quot;删除数据&quot;">​</a></h3><h4 id="删除一篇文章下的所有评论" tabindex="-1">删除一篇文章下的所有评论 <a class="header-anchor" href="#删除一篇文章下的所有评论" aria-label="Permalink to &quot;删除一篇文章下的所有评论&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$post = \\App\\Post::find(1);</span></span>
<span class="line"><span>$post-&gt;comments()-&gt;delete();</span></span></code></pre></div><h4 id="删除用户的所有评论" tabindex="-1">删除用户的所有评论 <a class="header-anchor" href="#删除用户的所有评论" aria-label="Permalink to &quot;删除用户的所有评论&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$user = \\App\\User::find(1);</span></span>
<span class="line"><span>$user-&gt;comments()-&gt;delete();</span></span></code></pre></div><h3 id="更新数据" tabindex="-1">更新数据 <a class="header-anchor" href="#更新数据" aria-label="Permalink to &quot;更新数据&quot;">​</a></h3>`,54),t=[l];function i(c,o,d,r,m,g){return n(),a("div",null,t)}const b=s(e,[["render",i]]);export{u as __pageData,b as default};
