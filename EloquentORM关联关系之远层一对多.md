# EloquentORM关联关系之远层一对多

“远层一对多”指的是通过一个中间关联对象访问远层的关联关系，比如用户与文章之间存在一对多关系，国家与用户之间也存在一对多关系，那么通过用户可以建立国家与文章的之间的一对多关联关系，我们称之为“远层一对多”，我们可以利用这种关联关系处理多语言环境下的文章列表。

## 软件版本

* Laravel Version 5.4.19

* PHP Version 7.0.8

## 关键字和表

* `hasMany()`

* `belongsTo()`

* `posts` 、`countries` 和 `users` 表

数据操作之前请先配置好，数据库的一些连接信息。例如下面使用mysql数据库，修改项目根目录下的 `.env` 文件内容。

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=db_name
DB_USERNAME=db_username
DB_PASSWORD=db_password
```


我们定义关联关系，文章表 `posts` 和 国家表 `countries`（**假设用户表使用系统自带的**）

## 生成迁移文件和模型

```shell
php artisan make:migration create_posts_table --create=posts

php artisan make:migration create_countries_table --create=countries

php artisan make:model Post
php artisan make:model Country
```

### 编辑迁移文件
文件 `<project>/database/migrate/*_create_users_table.php` 内容如下
```
 $table->increments('id');
 $table->string('name');
 $table->unsignedInteger('country_id'); // 新增这个表字段
 $table->string('email',30)->unique();
 $table->string('password');
 $table->rememberToken();
 $table->timestamps();
```


文件 `<project>/database/migrate/*_create_posts_table.php` 内容如下
```
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
```


文件 `<project>/database/migrate/*_create_countries_table.php` 内容如下
```
 $table->increments('id');
 $table->string('name',20);
 $table->string('display_name',20);
 $table->timestamps();
```

### 运行 php artisan 命令保存修改到数据库

```shell
php artisan migrate
```

> 执行上面的命令后数据库将生成五张表，
> migrations
> password_resets
> post
> users
> countries

### 定义关联关系和修改模型的 fillable 属性

`App\Post` 模型关联关系：





