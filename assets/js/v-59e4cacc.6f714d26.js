(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[9073],{2081:(e,n,s)=>{"use strict";s.r(n),s.d(n,{data:()=>a});const a={key:"v-59e4cacc",path:"/model/related-relationships/morphToMany.html",title:"多对多多态关联",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"软件版本",slug:"软件版本",children:[]},{level:2,title:"关键字和表",slug:"关键字和表",children:[]},{level:2,title:"生成模型和迁移文件",slug:"生成模型和迁移文件",children:[{level:3,title:"编辑迁移文件",slug:"编辑迁移文件",children:[]},{level:3,title:"运行 php artisan 命令保存修改到数据库",slug:"运行-php-artisan-命令保存修改到数据库",children:[]}]},{level:2,title:"定义关联关系和修改模型的 fillable 属性",slug:"定义关联关系和修改模型的-fillable-属性",children:[]},{level:2,title:"使用 tinker 填充数据",slug:"使用-tinker-填充数据",children:[]},{level:2,title:"关联操作",slug:"关联操作",children:[{level:3,title:"新增数据",slug:"新增数据",children:[]},{level:3,title:"删除数据",slug:"删除数据",children:[]},{level:3,title:"查询数据",slug:"查询数据",children:[]},{level:3,title:"编辑数据",slug:"编辑数据",children:[]}]},{level:2,title:"其他",slug:"其他",children:[{level:3,title:"建立关联",slug:"建立关联",children:[]}]}],filePathRelative:"model/related-relationships/morphToMany.md",git:{updatedTime:161707193e4,contributors:[]}}},136:(e,n,s)=>{"use strict";s.r(n),s.d(n,{default:()=>l});const a=(0,s(6252).uE)('<h1 id="多对多多态关联"><a class="header-anchor" href="#多对多多态关联">#</a> 多对多多态关联</h1><p>多对多多态最常见的应用场景就是标签，比如一篇文章对应多个标签，一个视频也对应多个标签，同时一个标签可能对应多篇文章或多个视频，这就是所谓的“多对多多态关联”。</p><p>此时仅仅在标签表 <code>tags</code> 上定义一个 <code>item_id</code> 和 <code>item_type</code> 已经不够了，因为这个标签可能对应多个文章或视频，那么如何建立关联关系呢，我们可以通过一张中间表 <code>taggables</code> 来实现：该表中定义了文章/视频与标签的对应关系。</p><h2 id="软件版本"><a class="header-anchor" href="#软件版本">#</a> 软件版本</h2><ul><li><p>Laravel Version 5.4.19</p></li><li><p>PHP Version 7.0.8</p></li></ul><h2 id="关键字和表"><a class="header-anchor" href="#关键字和表">#</a> 关键字和表</h2><ul><li><p><code>morphToMany()</code></p></li><li><p><code>morphedByMany()</code></p></li><li><p><code>attach()</code></p></li><li><p><code>detach()</code></p></li><li><p><code>sync()</code></p></li><li><p><code>toggle()</code></p></li><li><p><code>posts</code> 、<code>videos</code> 、<code>tags</code>、<code>taggables</code> 和 <code>users</code> 表</p></li></ul><h2 id="生成模型和迁移文件"><a class="header-anchor" href="#生成模型和迁移文件">#</a> 生成模型和迁移文件</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php artisan make:model Post -m\nphp artisan make:model Video -m\nphp artisan make:model Tag -m\nphp artisan make:model Taggable -m\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="编辑迁移文件"><a class="header-anchor" href="#编辑迁移文件">#</a> 编辑迁移文件</h3><p>文件 <code>&lt;project&gt;/database/migrate/*_create_users_table.php</code> 内容如下</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Schema::create(&#39;users&#39; , function(Blueprint $table){\n    $table-&gt;increments(&#39;id&#39;);\n    $table-&gt;string(&#39;name&#39;);\n    $table-&gt;string(&#39;email&#39; , 30)-&gt;unique();\n    $table-&gt;string(&#39;password&#39;);\n    $table-&gt;rememberToken();\n    $table-&gt;timestamps();\n});\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>文件 <code>&lt;project&gt;/database/migrate/*_create_posts_table.php</code> 内容如下</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Schema::create(&#39;posts&#39; , function(Blueprint $table){\n    $table-&gt;increments(&#39;id&#39;);\n    $table-&gt;unsignedInteger(&#39;user_id&#39;);\n    $table-&gt;string(&#39;title&#39; , 60);\n    $table-&gt;unsignedInteger(&#39;views&#39;)-&gt;comment(&#39;浏览数&#39;);\n    $table-&gt;text(&#39;body&#39;);\n    $table-&gt;timestamp(&#39;published_at&#39;)-&gt;nullable();\n    $table-&gt;timestamps();\n\n    $table-&gt;foreign(&#39;user_id&#39;)\n        -&gt;references(&#39;id&#39;)\n        -&gt;on(&#39;users&#39;)\n        -&gt;onUpdate(&#39;cascade&#39;)\n        -&gt;onDelete(&#39;cascade&#39;);\n});\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>文件 <code>&lt;project&gt;/database/migrate/*_create_videos_table.php</code> 内容如下</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Schema::create(&#39;videos&#39; , function(Blueprint $table){\n    $table-&gt;increments(&#39;id&#39;);\n    $table-&gt;unsignedInteger(&#39;user_id&#39;)-&gt;comment(&#39;用户id&#39;);\n    $table-&gt;unsignedTinyInteger(&#39;status&#39;)-&gt;comment(&#39;数据状态&#39;);\n    $table-&gt;string(&#39;title&#39; , 30)-&gt;comment(&#39;标题&#39;);\n    $table-&gt;string(&#39;description&#39; , 120)-&gt;comment(&#39;描述&#39;);\n    $table-&gt;text(&#39;body&#39;)-&gt;comment(&#39;内容&#39;);\n    $table-&gt;timestamps();\n\n    $table-&gt;foreign(&#39;user_id&#39;)\n        -&gt;references(&#39;id&#39;)\n        -&gt;on(&#39;users&#39;)\n        -&gt;onUpdate(&#39;cascade&#39;)\n        -&gt;onDelete(&#39;cascade&#39;);\n});\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>文件 <code>&lt;project&gt;/database/migrate/*_create_tags_table.php</code> 内容如下</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Schema::create(&#39;tags&#39;, function (Blueprint $table) {\n    $table-&gt;increments(&#39;id&#39;);\n    $table-&gt;string(&#39;name&#39;,20)-&gt;default(&#39;&#39;)-&gt;comment(&#39;标签名&#39;);\n    $table-&gt;timestamps();\n});\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>文件 <code>&lt;project&gt;/database/migrate/*_create_taggables_table.php</code> 内容如下</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Schema::create(&#39;taggables&#39; , function(Blueprint $table){\n    $table-&gt;increments(&#39;id&#39;);\n    $table-&gt;unsignedInteger(&#39;taggable_id&#39;)-&gt;comment(&#39;数据id&#39;);\n    $table-&gt;string(&#39;taggable_type&#39; , 40)-&gt;comment(&#39;关联模型&#39;);\n    $table-&gt;unsignedInteger(&#39;tag_id&#39;)-&gt;comment(&#39;标签id&#39;);\n    $table-&gt;timestamps();\n});\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="运行-php-artisan-命令保存修改到数据库"><a class="header-anchor" href="#运行-php-artisan-命令保存修改到数据库">#</a> 运行 php artisan 命令保存修改到数据库</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php artisan migrate\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>执行上面的命令后数据库将生成七张表， migrations password_resets posts taggables tags users videos</p></blockquote><h2 id="定义关联关系和修改模型的-fillable-属性"><a class="header-anchor" href="#定义关联关系和修改模型的-fillable-属性">#</a> 定义关联关系和修改模型的 fillable 属性</h2><p>在 <code>Post</code> 模型中定义关联关系：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public function tags()\n{\n  return $this-&gt;morphToMany(&#39;App\\Tag&#39;,&#39;taggable&#39;);\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>在 <code>Video</code> 模型中定义关联关系：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public function tags()\n{\n  return $this-&gt;morphToMany(&#39;App\\Tag&#39;,&#39;taggable&#39;);\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>在 <code>Tag</code> 模型中定义关联关系：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public $timestamps = false;\n\n// 多对多多态关联\npublic function posts()\n{\nreturn $this-&gt;morphedByMany(&#39;App\\Post&#39;,&#39;taggable&#39;)-&gt;withTimestamps();\n}\n// 多对多多态关联\npublic function videos()\n{\nreturn $this-&gt;morphedByMany(&#39;App\\Video&#39;,&#39;taggable&#39;)-&gt;withTimestamps();\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="使用-tinker-填充数据"><a class="header-anchor" href="#使用-tinker-填充数据">#</a> 使用 tinker 填充数据</h2><p>修改 <code>/databases/factories/ModelFactory.php</code>，新增关联数据。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/** @var \\Illuminate\\Database\\Eloquent\\Factory $factory */\n$factory-&gt;define(App\\User::class, function (Faker\\Generator $faker) {\n    static $password;\n\n    return [\n        &#39;name&#39; =&gt; $faker-&gt;name,\n        &#39;email&#39; =&gt; $faker-&gt;unique()-&gt;safeEmail,\n        &#39;password&#39; =&gt; $password ?: $password = bcrypt(&#39;secret&#39;),\n        &#39;remember_token&#39; =&gt; str_random(10),\n    ];\n});\n\n$factory-&gt;define(App\\Post::class, function (Faker\\Generator $faker) {\n    $user_ids = \\App\\User::pluck(&#39;id&#39;)-&gt;toArray();\n    return [\n        &#39;user_id&#39; =&gt; $faker-&gt;randomElement($user_ids),\n        &#39;title&#39; =&gt; $faker-&gt;title,\n        &#39;body&#39; =&gt; $faker-&gt;text(),\n        &#39;views&#39; =&gt; $faker-&gt;numberBetween(0, 1000),\n    ];\n});\n\n$factory-&gt;define(App\\Video::class, function (Faker\\Generator $faker) {\n    $user_ids = \\App\\User::pluck(&#39;id&#39;)-&gt;toArray();\n    return [\n        &#39;user_id&#39; =&gt; $faker-&gt;randomElement($user_ids),\n        &#39;title&#39; =&gt; $faker-&gt;title,\n        &#39;body&#39; =&gt; $faker-&gt;text(),\n        &#39;description&#39; =&gt; $faker-&gt;title,\n        &#39;status&#39; =&gt; 1\n    ];\n});\n\n$factory-&gt;define(App\\Tag::class, function (Faker\\Generator $faker) {\n    return [\n        &#39;name&#39; =&gt; $faker-&gt;lastName,\n    ];\n});\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p>使用 tinker 命令</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php artisan tinker\n\n## 进入到 tinker 界面执行如下命令\nnamespace App\nfactory(User::class,4)-&gt;create(); // 生成4个用户\nfactory(Post::class,20)-&gt;create() // 生成20条 posts 表的测试数据\nfactory(Video::class,20)-&gt;create() // 生成20条 videos 表的测试数据\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="关联操作"><a class="header-anchor" href="#关联操作">#</a> 关联操作</h2><h3 id="新增数据"><a class="header-anchor" href="#新增数据">#</a> 新增数据</h3><h4 id="添加一个文章标签"><a class="header-anchor" href="#添加一个文章标签">#</a> 添加一个文章标签</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$tag = new \\App\\Tag([&#39;name&#39; =&gt; &#39;A Post Tag For 1.&#39;]);\n$post = \\App\\Post::find(1);\n$post-&gt;tags()-&gt;save($tag); // 新增的 `tag` 模型中 `taggable_id` 和 `taggable_type` 字段会被自动设定\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="添加多个文章标签"><a class="header-anchor" href="#添加多个文章标签">#</a> 添加多个文章标签</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$tags = [\n    new \\App\\Tag([&#39;name&#39; =&gt; &#39;A Post Tag For 2.&#39;]),\n    new \\App\\Tag([&#39;name&#39; =&gt; &#39;A Post Tag For 2.&#39;])\n];\n$post = \\App\\Post::find(2);\n$post-&gt;tags()-&gt;saveMany($tags); // 新增的 `tag` 模型中 `taggable_id` 和 `taggable_type` 字段会被自动设定\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="添加一个视频标签"><a class="header-anchor" href="#添加一个视频标签">#</a> 添加一个视频标签</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$tag = new \\App\\Tag([&#39;name&#39; =&gt; &#39;A Post Tag For 2.&#39;]);\n$video = \\App\\Video::find(2);\n$video-&gt;tags()-&gt;save($tag); // 新增的 `tag` 模型中 `taggable_id` 和 `taggable_type` 字段会被自动设定\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="添加多个视频标签"><a class="header-anchor" href="#添加多个视频标签">#</a> 添加多个视频标签</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$tags = [\n    new \\App\\Tag([&#39;name&#39; =&gt; &#39;A Video Tag For 1.&#39;]),\n    new \\App\\Tag([&#39;name&#39; =&gt; &#39;A Video Tag For 1.&#39;]),\n];\n$video = \\App\\Video::find(1);\n$video-&gt;tags()-&gt;saveMany($tags);\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="删除数据"><a class="header-anchor" href="#删除数据">#</a> 删除数据</h3><h4 id="删除一篇文章下的所有标签"><a class="header-anchor" href="#删除一篇文章下的所有标签">#</a> 删除一篇文章下的所有标签</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$post = \\App\\Post::find(1);\n\n$post-&gt;tags()-&gt;delete();  // 删除tags Table 中的关联数据\n$post-&gt;tags()-&gt;detach(); // 同步删除 toggables Table中的关联数据\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="查询数据"><a class="header-anchor" href="#查询数据">#</a> 查询数据</h3><h4 id="查询一篇文章的标签"><a class="header-anchor" href="#查询一篇文章的标签">#</a> 查询一篇文章的标签</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$post = \\App\\Post::find(2);\n$tags = $post-&gt;tags;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="查询一个视频的标签"><a class="header-anchor" href="#查询一个视频的标签">#</a> 查询一个视频的标签</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$video = \\App\\Video::find(1);\n$tags = $video-&gt;tags;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="查询标签对应节点"><a class="header-anchor" href="#查询标签对应节点">#</a> 查询标签对应节点</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$tag = \\App\\Tag::find(1);\n$posts = $tag-&gt;posts;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="编辑数据"><a class="header-anchor" href="#编辑数据">#</a> 编辑数据</h3><h2 id="其他"><a class="header-anchor" href="#其他">#</a> 其他</h2><h3 id="建立关联"><a class="header-anchor" href="#建立关联">#</a> 建立关联</h3><h4 id="tags-跟-videos-posts-做关联"><a class="header-anchor" href="#tags-跟-videos-posts-做关联">#</a> <code>tags</code> 跟 <code>videos</code>, <code>posts</code> 做关联</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$tag-&gt;videos()-&gt;attach($video-&gt;id);\n\n$tag-&gt;posts()-&gt;attach($post-&gt;id);\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="videos-posts-跟-tag-做关联"><a class="header-anchor" href="#videos-posts-跟-tag-做关联">#</a> <code>videos</code>, <code>posts</code> 跟 <code>tag</code> 做关联</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$videos-&gt;tags()-&gt;attach($tag-&gt;id);\n\n$post-&gt;tags()-&gt;attach($tag-&gt;id);\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p>将视频或者文字添加某个标签</p></blockquote><h4 id="删除关联"><a class="header-anchor" href="#删除关联">#</a> 删除关联</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$tag-&gt;videos()-&gt;detach($vedio-&gt;id);\n\n$tag-&gt;posts()-&gt;detach($post-&gt;id);\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',65),l={render:function(e,n){return a}}}}]);