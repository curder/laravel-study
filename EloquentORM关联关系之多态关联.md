# EloquentORM关联关系之多态关联

多态关联允许一个模型在单个关联下属于多个不同父模型。常见的多态关联就是评论，评论内容可能是属于文章或视频。 

## 软件版本

* Laravel Version 5.4.19

* PHP Version 7.0.8

## 关键字和表

* `morphTo()`

* `morphMany()`



* `posts` 、`videos`、`comments` 和 `users` 表


常见的多态关联就是评论，现在我们的内容类型包括文章和视频，用户既可以评论文章 ，也可以评论视频 。文章存在文章表 `posts`，视频存在视频表 `videos` ，评论存在评论表 `comments` ，某一条评论可能归属于某篇文章，也可能归属于某个视频。
在评论表中添加一个 `commentable_id` 字段表示其归属节点 ID ，同时定义一个 `commentable_type` 字段表示其归属节点类型，比如 `App\Post` 或者 `App\Video` 。

## 生成模型和迁移文件

```
php artisan make:model  Post -m
php artisan make:model Video -m
php artisan make:model Comment -m
```

### 编辑迁移文件

文件 `<project>/database/migrate/*_create_users_table.php` 内容如下

```
  Schema::create('users' , function(Blueprint $table){
    $table->increments('id');
    $table->string('name');
    $table->string('email' , 30)->unique();
    $table->string('password');
    $table->rememberToken();
    $table->timestamps();
});
```

文件 `<project>/database/migrate/*_create_posts_table.php` 内容如下

```
Schema::create('posts', function (Blueprint $table) {
    $table->increments('id');
    $table->unsignedInteger('user_id');
    $table->string('title', 60);
    $table->text('body');
    $table->timestamps();
    $table->timestamp('published_at')->nullable();
    $table->foreign('user_id')
        ->references('id')
        ->on('users')
        ->onUpdate('cascade')
        ->onDelete('cascade');
});
```

文件 `<project>/database/migrate/*_create_videos_table.php` 内容如下

```
Schema::create('videos' , function(Blueprint $table){
    $table->increments('id');
    $table->unsignedInteger('user_id')->comment('用户id');
    $table->string('title' , 30)->comment('标题');
    $table->string('description' , 120)->comment('描述');
    $table->text('body')->comment('内容');
    $table->unsignedTinyInteger('status')->comment('数据状态');
    $table->timestamps();

    $table->foreign('user_id')
        ->references('id')
        ->on('users')
        ->onUpdate('cascade')
        ->onDelete('cascade');
});
```

文件 `<project>/database/migrate/*_create_comments_table.php` 内容如下

```
Schema::create('comments' , function(Blueprint $table){
    $table->increments('id');
    $table->unsignedInteger('user_id');
    $table->unsignedInteger('commentable_id')->comment('评论所在表数据id');
    $table->string('commentable_type' , 60)->comment('评论所属模型');
    $table->char(1)->notNull()->default('F')->comment('数据状态');
    $table->text('body')->comment('评论内容');

    $table->timestamps();

    $table->foreign('user_id')
        ->references('id')
        ->on('users')
        ->onUpdate('cascade')
        ->onDelete('cascade');
});
// 注意： 这里 `commentable_id` 和 `commentable_type`，字段前缀与模型的方法保持一些。比如这列使用 `commentable_` 那么定义的关联方法为 `commentable()`
```

### 运行 php artisan 命令保存修改到数据库
~~~
php artisan migrate
~~~

> 执行上面的命令后数据库将生成六张表，如下：
> * migrations
> * password_resets
> * users
> * commons
> * posts
> * videos

## 定义关联关系和修改模型的 fillable 属性

在 `User` 模型中的对应关系：

```

```

在 `Post` 模型中的对应关系：

```

```


在 `Video` 模型中的对应关系：

```

```

在 `Comment` 模型中的对应关系：

```

```


## 使用 tinker 填充测试数据

修改 `/databases/factories/ModelFactory.php`，修改关联数据。

```
/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\User::class , function(Faker\Generator $faker){
    static $password;

    return [
        'name'           => $faker->name ,
        'email'          => $faker->unique()->safeEmail ,
        'password'       => $password ? : $password = bcrypt('secret') ,
        'remember_token' => str_random(10) ,
    ];
});

$factory->define(App\Post::class , function(Faker\Generator $faker){
    $user_ids = \App\User::pluck('id')->toArray();

    return [
        'user_id'      => $faker->randomElement($user_ids) ,
        'title'        => $faker->title ,
        'body'         => $faker->paragraph ,
        'published_at' => $faker->time('Y-m-d H:i:s') ,
    ];
});
$factory->define(App\Video::class , function(Faker\Generator $faker){
    $user_ids = \App\User::pluck('id')->toArray();

    return [
        'user_id'     => $faker->randomElement($user_ids) ,
        'title'       => $faker->title ,
        'description' => $faker->title ,
        'body'     => $faker->paragraph ,
        'status'      => 1
    ];
});
```

使用 tinker 命令

~~~
php artisan tinker

## 进入到 tinker 界面执行如下命令
namespace App
factory(User::class,5)->create(); // 生成5个用户
factory(Post::class,10)->create() // 生成10条 posts 表的测试数据
factory(Video::class,10)->create(); // 生成10条 videos 表的测试数据
~~~

至此，上面的 `users` 、`posts` 和 `videos` 表数据都已填充完毕。

## 关联操作

### 新增数据

#### 添加评论

##### 添加一个文章评论
```
$post = \App\Post::find(1);
$comment = new \App\Comment(['body' => 'A new comment For Post 1.']);
$post->comments()->save($comment); // 新增的 `comment` 模型中 `commentable_id` 和 `commentable_type` 字段会被自动设定
```

##### 添加多条文章评论
```
$comments = [
    new \App\Comment(['body' => 'A new comment For Post 2.']) ,
    new \App\Comment(['body' => 'Another comment For Post 2.']) ,
    new \App\Comment(['body' => 'The latest comment For Post 2.'])
];
$post = \App\Post::find(2);
$post->comments()->saveMany($comments);
```

##### 添加视频评论
```
$video = \App\Video::find(10);
$comment = new \App\Comment(['body' => 'A new Comment For Video 10.']);
$video->comments()->save($comment); //
```
##### 添加多条视频评论
```
$comments = [
    new \App\Comment(['body' => 'A new comment For Video 5.']) ,
    new \App\Comment(['body' => 'Another comment For Video 5.']) ,
    new \App\Comment(['body' => 'The latest comment For Video 5.'])
];
$video = \App\Video::find(5);
$video->comments()->saveMany($comments);
```

### 查询数据

```
// 查询一篇文章下的评论和发布评论者
$comments = \App\Post::find(1)->with(['user' , 'comments'])->first();

// 通过评论查询出数据和发布评论的用户信息
$commentable = \App\Comment::find(21)->commentable()->with('user')->first();
```

### 删除数据




### 更新数据





