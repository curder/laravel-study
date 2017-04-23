# EloquentORM关联关系之一对多

## 数据版本

* Laravel Version 5.4.19

* PHP Version 7.0.8

## 关键字

* `hasMany()`

* `belongsTo()`

数据操作之前请先配置好，数据库的一些连接信息。例如下面使用mysql数据库，修改项目根目录下的 `.env` 文件内容。

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=db_name
DB_USERNAME=db_username
DB_PASSWORD=db_password
```

一对多的关联关系，表示表A对应表B的N条记录，例如一个用户可以发表多条文章。

我们定义关联关系，文章表 `posts` （**假设用户表使用系统自带的**）

## 生成迁移文件和模型

```shell
php artisan make:migration create_posts_table --create=posts

php artisan make:model Post
```

### 编辑生成的迁移文件

`<project>/database/migrate/*_create_posts_table.php`如下

```
<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id');
            $table->string('title', 60);
            $table->text('body');
            $table->timestamps();
            $table->timestamp('publish_at')->nullable();
             $table->foreign('user_id')
                      ->references('id')
                      ->on('users')
                      ->onUpdate('cascade')
                      ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
```

### 运行 php artisan 命令保存修改到数据库

```shell
php artisan migrate
```

> 执行上面的命令后数据库将生成四张表，
> migrations
> password_resets
> post
> users

### 定义关联关系和修改模型的 fillable 属性

`App\Post` 模型关联关系：

```
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = ['title', 'user_id', 'body', 'publish_at'];

    public function user()
    {
        /**
         * User::class related 关联模型
         * user_id ownerKey 当前表关联字段
         * id relation 关联表字段
         */
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
```

`App\User` 模型关联关系；

```
<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function posts()
    {
        /**
         * Post::class related 关联模型
         * user_id foreignKey 当前表关联字段
         * id localKey 关联表字段
         */
        return $this->hasMany(Post::class, 'user_id', 'id');
    }
}
```

### 使用 tinker 填充数据

修改 `/databases/factories/ModelFactory.php`，新增关联数据。

```
<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});

$factory->define(App\Post::class, function (Faker\Generator $faker) {
    $user_ids = \App\User::pluck('id')->toArray();
    return [
        'user_id' => $faker->randomElement($user_ids),
        'title' => $faker->word,
        'body' => $faker->text(),
    ];
});

```

```
php artisan tinker

## 进入到 tinker 界面执行如下命令
namespace App
factory(User::class,3)->create(); // 生成3个用户
factory(Post::class,30)->create() // 生成30条 posts 表的测试数据
```

## 关联操作

### 新增数据
常见的新增 `posts` 数据场景是用户发布一篇文章，如下:
```
$post = new \App\Post([
	'title' => 'test title',
	'body' => 'test body',
	'publish_at' => null,
]);
\Auth::user()->posts()->save($post);

// 或者获取 \Request 对象传递的数据写入
$post = new \App\Post($request->all());
\Auth::user->posts()->save($post));
```



### 查询数据

#### 查询用户发布的所有文章
##### 获取单个用户的文章
```
// 查询当前用户的所有文章
$posts = \Auth::user()->posts->toArray();


// 根据条件筛选当前用户的文字
$posts = \Auth::user()->posts()->where('id','>',10)->get()->toArray();
```

##### 获取用户列表并关联所属文章
```
\App\User::with('posts')->get()->toArray();
```


#### 查询文章所属用户

##### 查询单个文章的关联用户信息
```
$post = \App\Post::find(1); // 获取文章数据
$user = $post->user->toArray(); // 获取文字所属用户
```

##### 文章列表关联用户信息
```
$post = \App\Post::with('user')->get()->toArray();
```


### 关联删除

```
$post = \App\Post::find(1);
$account->user->delete(); // 删除用户 users 表和 user_account 相关记录
```

### 更新数据





#### 通过关联 User 数据




