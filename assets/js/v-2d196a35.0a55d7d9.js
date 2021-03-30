(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[8956],{7557:(s,n,e)=>{"use strict";e.r(n),e.d(n,{data:()=>a});const a={key:"v-2d196a35",path:"/model/related-relationships/hasMany.html",title:"一对多",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"软件版本",slug:"软件版本",children:[]},{level:2,title:"关键字和表",slug:"关键字和表",children:[]},{level:2,title:"生成模型和迁移文件",slug:"生成模型和迁移文件",children:[{level:3,title:"编辑迁移文件",slug:"编辑迁移文件",children:[]},{level:3,title:"运行 php artisan 命令保存修改到数据库",slug:"运行-php-artisan-命令保存修改到数据库",children:[]},{level:3,title:"定义关联关系和修改模型的 fillable 属性",slug:"定义关联关系和修改模型的-fillable-属性",children:[]},{level:3,title:"使用 tinker 填充数据",slug:"使用-tinker-填充数据",children:[]}]},{level:2,title:"关联操作",slug:"关联操作",children:[{level:3,title:"新增数据",slug:"新增数据",children:[]},{level:3,title:"查询数据",slug:"查询数据",children:[]},{level:3,title:"关联删除",slug:"关联删除",children:[]},{level:3,title:"更新数据",slug:"更新数据",children:[]}]}],filePathRelative:"model/related-relationships/hasMany.md",git:{updatedTime:161707193e4,contributors:[]}}},1970:(s,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>l});const a=(0,e(6252).uE)('<h1 id="一对多"><a class="header-anchor" href="#一对多">#</a> 一对多</h1><p>数据表之间往往不是孤立的，而是纵横交叉、相互关联的，比如一个用户发表了多篇文章，一篇文章只属于一个用户等。</p><h2 id="软件版本"><a class="header-anchor" href="#软件版本">#</a> 软件版本</h2><ul><li><p>Laravel Version 5.4.19</p></li><li><p>PHP Version 7.0.8</p></li></ul><h2 id="关键字和表"><a class="header-anchor" href="#关键字和表">#</a> 关键字和表</h2><ul><li><p><code>hasMany()</code></p></li><li><p><code>belongsTo()</code></p></li><li><p><code>posts</code> 和 <code>users</code> 表</p></li></ul><p>数据操作之前请先配置好，数据库的一些连接信息。例如下面使用mysql数据库，修改项目根目录下的 <code>.env</code> 文件内容。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>DB_CONNECTION=mysql\nDB_HOST=127.0.0.1\nDB_PORT=3306\nDB_DATABASE=db_name\nDB_USERNAME=db_username\nDB_PASSWORD=db_password\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>一对多的关联关系，表示表A对应表B的N条记录，例如一个用户可以发表多条文章。</p><p>我们定义关联关系，文章表 <code>posts</code> （<strong>假设用户表使用系统自带的</strong>）</p><h2 id="生成模型和迁移文件"><a class="header-anchor" href="#生成模型和迁移文件">#</a> 生成模型和迁移文件</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan make:migration create_posts_table --create<span class="token operator">=</span>posts\n\nphp artisan make:model Post\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="编辑迁移文件"><a class="header-anchor" href="#编辑迁移文件">#</a> 编辑迁移文件</h3><p><code>&lt;project&gt;/database/migrate/*_create_posts_table.php</code>如下</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php\n\nuse Illuminate\\Support\\Facades\\Schema;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Database\\Migrations\\Migration;\n\nclass CreatePostsTable extends Migration\n{\n    /**\n     * Run the migrations.\n     *\n     * @return void\n     */\n    public function up()\n    {\n        Schema::create(&#39;posts&#39;, function (Blueprint $table) {\n            $table-&gt;increments(&#39;id&#39;);\n            $table-&gt;unsignedInteger(&#39;user_id&#39;);\n            $table-&gt;string(&#39;title&#39;, 60);\n            $table-&gt;text(&#39;body&#39;);\n            $table-&gt;timestamps();\n            $table-&gt;timestamp(&#39;published_at&#39;)-&gt;nullable();\n             $table-&gt;foreign(&#39;user_id&#39;)\n                      -&gt;references(&#39;id&#39;)\n                      -&gt;on(&#39;users&#39;)\n                      -&gt;onUpdate(&#39;cascade&#39;)\n                      -&gt;onDelete(&#39;cascade&#39;);\n        });\n    }\n\n    /**\n     * Reverse the migrations.\n     *\n     * @return void\n     */\n    public function down()\n    {\n        Schema::dropIfExists(&#39;posts&#39;);\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><h3 id="运行-php-artisan-命令保存修改到数据库"><a class="header-anchor" href="#运行-php-artisan-命令保存修改到数据库">#</a> 运行 php artisan 命令保存修改到数据库</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan migrate\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>执行上面的命令后数据库将生成四张表， migrations password_resets post users</p></blockquote><h3 id="定义关联关系和修改模型的-fillable-属性"><a class="header-anchor" href="#定义关联关系和修改模型的-fillable-属性">#</a> 定义关联关系和修改模型的 fillable 属性</h3><p><code>App\\Post</code> 模型关联关系：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php\n\nnamespace App;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Post extends Model\n{\n    protected $fillable = [&#39;title&#39;, &#39;user_id&#39;, &#39;body&#39;, &#39;published_at&#39;];\n\n    public function user()\n    {\n        /**\n         * User::class related 关联模型\n         * user_id ownerKey 当前表关联字段\n         * id relation 关联表字段，这里指 user 表\n         */\n        return $this-&gt;belongsTo(User::class, &#39;user_id&#39;, &#39;id&#39;);\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p><code>App\\User</code> 模型关联关系；</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php\n\nnamespace App;\n\nuse Illuminate\\Notifications\\Notifiable;\nuse Illuminate\\Foundation\\Auth\\User as Authenticatable;\n\nclass User extends Authenticatable\n{\n    use Notifiable;\n\n    /**\n     * The attributes that are mass assignable.\n     *\n     * @var array\n     */\n    protected $fillable = [\n        &#39;name&#39;, &#39;email&#39;, &#39;password&#39;,\n    ];\n\n    /**\n     * The attributes that should be hidden for arrays.\n     *\n     * @var array\n     */\n    protected $hidden = [\n        &#39;password&#39;, &#39;remember_token&#39;,\n    ];\n\n    public function posts()\n    {\n        /**\n         * Post::class related 关联模型\n         * user_id foreignKey 当前表关联字段\n         * id localKey 关联表字段\n         */\n        return $this-&gt;hasMany(Post::class, &#39;user_id&#39;, &#39;id&#39;);\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h3 id="使用-tinker-填充数据"><a class="header-anchor" href="#使用-tinker-填充数据">#</a> 使用 tinker 填充数据</h3><p>修改 <code>/databases/factories/ModelFactory.php</code>，新增关联数据。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php\n\n/** @var \\Illuminate\\Database\\Eloquent\\Factory $factory */\n$factory-&gt;define(App\\User::class, function (Faker\\Generator $faker) {\n    static $password;\n\n    return [\n        &#39;name&#39; =&gt; $faker-&gt;name,\n        &#39;email&#39; =&gt; $faker-&gt;unique()-&gt;safeEmail,\n        &#39;password&#39; =&gt; $password ?: $password = bcrypt(&#39;secret&#39;),\n        &#39;remember_token&#39; =&gt; str_random(10),\n    ];\n});\n\n$factory-&gt;define(App\\Post::class, function (Faker\\Generator $faker) {\n    $user_ids = \\App\\User::pluck(&#39;id&#39;)-&gt;toArray();\n    return [\n        &#39;user_id&#39; =&gt; $faker-&gt;randomElement($user_ids),\n        &#39;title&#39; =&gt; $faker-&gt;word,\n        &#39;body&#39; =&gt; $faker-&gt;text(),\n    ];\n});\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php artisan tinker\n\n## 进入到 tinker 界面执行如下命令\nnamespace App\nfactory(User::class,3)-&gt;create(); // 生成3个用户\nfactory(Post::class,30)-&gt;create() // 生成30条 posts 表的测试数据\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="关联操作"><a class="header-anchor" href="#关联操作">#</a> 关联操作</h2><h3 id="新增数据"><a class="header-anchor" href="#新增数据">#</a> 新增数据</h3><h4 id="使用-save-方法进行关联数据的新增"><a class="header-anchor" href="#使用-save-方法进行关联数据的新增">#</a> 使用 save() 方法进行关联数据的新增</h4><p>常见的新增 <code>posts</code> 数据场景是用户发布一篇文章，如下:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$post = new \\App\\Post([\n\t&#39;title&#39; =&gt; &#39;test title&#39;,\n\t&#39;body&#39; =&gt; &#39;test body&#39;,\n\t&#39;published_at&#39; =&gt; null,\n]);\n\\Auth::user()-&gt;posts()-&gt;save($post);\n\n// 或者获取 \\Request 对象传递的数据写入\n$post = new \\App\\Post($request-&gt;all());\n\\Auth::user-&gt;posts()-&gt;save($post));\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="使用-savemany-方法进行关联数据的批量新增"><a class="header-anchor" href="#使用-savemany-方法进行关联数据的批量新增">#</a> 使用 saveMany() 方法进行关联数据的批量新增</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// 如果需要保存多个关联模型，可以使用 `saveMany()` 方法，如下：\n\\Auth::user()-&gt;posts()-&gt;saveMany([\n\tnew \\App\\Post([&#39;title&#39; =&gt; &#39;test title&#39;, &#39;body&#39; =&gt; &#39;test body&#39;, &#39;published_at&#39; =&gt; null]),\n\tnew \\App\\Post([&#39;title&#39; =&gt; &#39;test title2&#39;, &#39;body&#39; =&gt; &#39;test body2&#39;, &#39;published_at&#39; =&gt; null])\n]);\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="使用-create-方法进行关联数据的新增"><a class="header-anchor" href="#使用-create-方法进行关联数据的新增">#</a> 使用 create() 方法进行关联数据的新增</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\\Auth::user()-&gt;posts()-&gt;create([\n\t&#39;title&#39; =&gt; &#39;test title3&#39;,\n\t&#39;body&#39; =&gt; &#39;test body3&#39;,\n\t&#39;published_at&#39; =&gt; null,\n]);\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p><code>create()</code> 方法接受属性数组、 创建模型，然后写入数据库，<code>save()</code> 和 <code>create()</code> 的不同之处在于 <code>save()</code> 接收整个 Eloquent 模型实例，而 <code>create()</code> 接收原生 PHP 数组。 <strong>注意：</strong> 使用 create 方法之前确保 <code>$fillable</code> 属性填充批量赋值。</p></blockquote><h3 id="查询数据"><a class="header-anchor" href="#查询数据">#</a> 查询数据</h3><h4 id="查询用户发布的所有文章"><a class="header-anchor" href="#查询用户发布的所有文章">#</a> 查询用户发布的所有文章</h4><h5 id="获取单个用户的文章"><a class="header-anchor" href="#获取单个用户的文章">#</a> 获取单个用户的文章</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// 查询当前用户的所有文章\n$posts = \\Auth::user()-&gt;posts-&gt;toArray();\n\n\n// 根据条件筛选当前用户的文字\n$posts = \\Auth::user()-&gt;posts()-&gt;where(&#39;id&#39;,&#39;&gt;&#39;,10)-&gt;get()-&gt;toArray();\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h5 id="获取用户列表并关联所属文章"><a class="header-anchor" href="#获取用户列表并关联所属文章">#</a> 获取用户列表并关联所属文章</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\\App\\User::with(&#39;posts&#39;)-&gt;get()-&gt;toArray();\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="查询文章所属用户"><a class="header-anchor" href="#查询文章所属用户">#</a> 查询文章所属用户</h4><h5 id="查询单个文章的关联用户信息"><a class="header-anchor" href="#查询单个文章的关联用户信息">#</a> 查询单个文章的关联用户信息</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$post = \\App\\Post::find(1); // 获取文章数据\n$user = $post-&gt;user-&gt;toArray(); // 获取文字所属用户\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h5 id="文章列表关联用户信息"><a class="header-anchor" href="#文章列表关联用户信息">#</a> 文章列表关联用户信息</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$post = \\App\\Post::with(&#39;user&#39;)-&gt;get()-&gt;toArray();\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="关联删除"><a class="header-anchor" href="#关联删除">#</a> 关联删除</h3><p>删除某用户下的所有文章数据。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$user = \\App\\User::find(1);\n$user-&gt;posts()-&gt;delete(); // 删除 posts 表中相关记录\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="更新数据"><a class="header-anchor" href="#更新数据">#</a> 更新数据</h3><h4 id="通过关联-user-数据"><a class="header-anchor" href="#通过关联-user-数据">#</a> 通过关联 User 数据</h4>',53),l={render:function(s,n){return a}}}}]);