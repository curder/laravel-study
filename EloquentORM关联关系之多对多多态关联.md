# EloquentORM关联关系之多对多多态关联

多对多多态最常见的应用场景就是标签，比如一篇文章对应多个标签，一个视频也对应多个标签，同时一个标签可能对应多篇文章或多个视频，这就是所谓的“多对多多态关联”。 

此时仅仅在标签表 `tags` 上定义一个 `item_id` 和 `item_type` 已经不够了，因为这个标签可能对应多个文章或视频，那么如何建立关联关系呢，我们可以通过一张中间表 `taggables` 来实现：该表中定义了文章/视频与标签的对应关系。

## 软件版本

* Laravel Version 5.4.19

* PHP Version 7.0.8

## 关键字和表

* `morphToMany()`

* `morphedByMany()`

* `posts` 、`videos` 、`tags`、`taggables` 和 `users` 表


## 生成模型和迁移文件

```
php artisan make:model Post -m
php artisan make:model Video -m
php artisan make:model Tag -m
php artisan make:model Taggable -m
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
Schema::create('posts' , function(Blueprint $table){
    $table->increments('id');
    $table->unsignedInteger('user_id');
    $table->string('title' , 60);
    $table->unsignedInteger('views')->comment('浏览数');
    $table->text('body');
    $table->timestamp('published_at')->nullable();
    $table->timestamps();

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
    $table->unsignedTinyInteger('status')->comment('数据状态');
    $table->string('title' , 30)->comment('标题');
    $table->string('description' , 120)->comment('描述');
    $table->text('body')->comment('内容');
    $table->timestamps();

    $table->foreign('user_id')
        ->references('id')
        ->on('users')
        ->onUpdate('cascade')
        ->onDelete('cascade');
});
```


文件 `<project>/database/migrate/*_create_tags_table.php` 内容如下

```
Schema::create('tags', function (Blueprint $table) {
    $table->increments('id');
    $table->string('name',20)->default('')->comment('标签名');
    $table->timestamps();
});
```


文件 `<project>/database/migrate/*_create_taggables_table.php` 内容如下

```
Schema::create('taggables' , function(Blueprint $table){
    $table->increments('id');
    $table->unsignedInteger('taggable_id')->comment('数据id');
    $table->string('taggable_type' , 40)->comment('关联模型');
    $table->unsignedInteger('tag_id')->comment('标签id');
    $table->timestamps();
});
```

### 运行 php artisan 命令保存修改到数据库
~~~
php artisan migrate
~~~

> 执行上面的命令后数据库将生成七张表，
> migrations
> password_resets
> posts
> taggables
> tags
> users
> videos


## 定义关联关系和修改模型的 fillable 属性
在 `Post` 模型中定义关联关系：

```
public function tags()
{
  return $this->morphToMany('App\Tag','taggable');
}
```

在 `Video` 模型中定义关联关系：

```
public function tags()
{
  return $this->morphToMany('App\Tag','taggable');
}
```

在 `Tag` 模型中定义关联关系：

```
public $timestamps = false;

// 多对多多态关联
public function posts()
{
return $this->morphedByMany('App\Post','taggable');
}
// 多对多多态关联
public function vedios()
{
return $this->morphedByMany('App\Video','taggable');
}
```


## 使用 tinker 填充数据

修改 `/databases/factories/ModelFactory.php`，新增关联数据。

```

```

使用 tinker 命令

~~~
php artisan tinker

## 进入到 tinker 界面执行如下命令
namespace App
factory(User::class,4)->create(); // 生成4个用户
factory(Role::class,4)->create() // 生成4条 role_user 表的测试数据
~~~

## 关联操作

### 新增数据


### 删除数据


### 查询数据



### 编辑数据












