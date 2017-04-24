# EloquentORM关联关系之多对多多态关联

多对多多态最常见的应用场景就是标签，比如一篇文章对应多个标签，一个视频也对应多个标签，同时一个标签可能对应多篇文章或多个视频，这就是所谓的“多对多多态关联”。 

此时仅仅在标签表 `tags` 上定义一个 `item_id` 和 `item_type` 已经不够了，因为这个标签可能对应多个文章或视频，那么如何建立关联关系呢，我们可以通过一张中间表 `taggables` 来实现：该表中定义了文章/视频与标签的对应关系。

## 软件版本

* Laravel Version 5.4.19

* PHP Version 7.0.8

## 关键字和表

* `morphToMany()`



* `posts` 、`countries` 和 `users` 表


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

```

文件 `<project>/database/migrate/*_create_posts_table.php` 内容如下

```

```


文件 `<project>/database/migrate/*_create_videos_table.php` 内容如下

```

```


文件 `<project>/database/migrate/*_create_tags_table.php` 内容如下

```

```


文件 `<project>/database/migrate/*_create_taggables_table.php` 内容如下

```

```

### 运行 php artisan 命令保存修改到数据库
~~~
php artisan migrate
~~~

> 执行上面的命令后数据库将生成七张表，
> migrations
> password_resets
> users
> posts
> videos
> tags
> taggables


## 定义关联关系和修改模型的 fillable 属性
在 `Post` 模型中定义关联关系：

```

```

在 `Video` 模型中定义关联关系：

```

```

在Tag模型中定义关联关系：

```

```







