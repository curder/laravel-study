# EloquentORM关联关系之多态关联

多态关联允许一个模型在单个关联下属于多个不同父模型。常见的多态关联就是评论，评论内容可能是属于文章或视频。 

## 软件版本

* Laravel Version 5.4.19

* PHP Version 7.0.8

## 关键字和表

* `hasOne()`

* `hasMany()`

* `belongsTo()`

*  `hasManyThrough()`

* `posts` 、`videos`、`comments` 和 `users` 表


常见的多态关联就是评论，现在我们的内容类型包括文章和视频，用户既可以评论文章 ，也可以评论视频 。文章存在文章表 `posts`，视频存在视频表 `videos` ，评论存在评论表 `comments` ，某一条评论可能归属于某篇文章，也可能归属于某个视频。
在评论表中添加一个 `item_id` 字段表示其归属节点 ID ，同时定义一个 `item_type` 字段表示其归属节点类型，比如 `App\Post` 或者 `App\Video` 。

## 生成模型和迁移文件

```
php artisan make:model  Post -m
php artisan make:model Video -m
php artisan make:model Common -m
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

```

文件 `<project>/database/migrate/*_create_videos_table.php` 内容如下

```

```

文件 `<project>/database/migrate/*_create_commons_table.php` 内容如下

```

```
