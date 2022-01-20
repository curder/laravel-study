# 一对多

数据表之间往往不是孤立的，而是纵横交叉、相互关联的，比如一个用户发表了多篇文章，一篇文章只属于一个用户等。

## 软件版本

* Laravel 版本 8.80.0

* PHP 版本 7.4.26

## 关键字和表

* `hasMany()`

* `belongsTo()`

* `posts` 和 `users` 表

数据操作之前请先配置好，数据库的一些连接信息。例如下面使用 sqlite 数据库，修改项目根目录下的 `.env` 文件内容。

```
DB_CONNECTION=sqlite
```

一对多的关联关系，表示表A对应表B的N条记录，例如一个用户可以发表多条文章。

定义关联关系，文章表 `posts` （**假设用户表使用系统自带的**）

## 生成模型和迁移文件

```shell
touch database/database.sqlite # 生成 sqlite 文件

php artisan make:model Post -mfs # 生成模型、迁移、生成等文件
```

### 编辑迁移文件

`<project>/database/migrate/*_create_posts_table.php`如下

```php
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
            $table->id();
            $table->unsignedInteger('user_id');
            $table->string('title');
            $table->text('body');
            $table->timestamps();
            $table->timestamp('published_at')->nullable();

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

### 编辑填充文件

#### 修改 `/databases/factories/PostFactory.php`，新增关联数据。

```php
<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition() : array
    {
        return [
            'user_id' => fn () => User::factory()->create(),
            'title' => $this->faker->sentence(3),
            'body' => $this->faker->sentence(20),
            'published_at' => now(),
        ];
    }
}

```

#### 修改 `databases/seeders/PostSeeder.php`，执行填充。

```php
<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Post::factory()->count(10)->create(['user_id' => User::factory()->create()]);
    }
}
```

### 执行数据库迁移和数据填充

```shell
php artisan migrate:refresh --seeder=PostSeeder
```

> 执行完上面的命令后，在数据库表 `users` 和 `posts` 表中分别生成一些数据。



### 修改模型的 fillable 属性

`App\Models\Post` 模型关联关系：

```php {9}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = ['title', 'user_id', 'body', 'published_at'];
}
```


### 定义Eloquent关联关系

文件在 `<project>/app/Models/User.php` 和 `<project>/app/Models/Post.php`。

#### hasMany

修改模型文件 `app\Models\User.php`，添加关联 `posts` 方法。

```php {19}
<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    // ...
    public function posts(): HasMany
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

#### belongsTo

修改模型文件 `app\Models\Post.php`，添加关联 `user` 方法。

```php {17}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Post extends Model
{
    public function user(): BelongsTo
    {
        /**
         * User::class related 关联模型
         * user_id ownerKey 当前表关联字段
         * id relation 关联表字段，这里指 user 表
         */
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
```

## 关联操作

### 新增数据

#### 使用 save() 方法进行关联数据的新增

常见的新增 `posts` 数据场景是用户发布一篇文章，如下:
```
$post = new \App\Post([
	'title' => 'test title',
	'body' => 'test body',
	'published_at' => null,
]);
\Auth::user()->posts()->save($post);

// 或者获取 \Request 对象传递的数据写入
$post = new \App\Post($request->all());
\Auth::user->posts()->save($post));
```

#### 使用 saveMany() 方法进行关联数据的批量新增
```
// 如果需要保存多个关联模型，可以使用 `saveMany()` 方法，如下：
\Auth::user()->posts()->saveMany([
	new \App\Post(['title' => 'test title', 'body' => 'test body', 'published_at' => null]),
	new \App\Post(['title' => 'test title2', 'body' => 'test body2', 'published_at' => null])
]);
```

#### 使用 create() 方法进行关联数据的新增

```
\Auth::user()->posts()->create([
	'title' => 'test title3',
	'body' => 'test body3',
	'published_at' => null,
]);
```


> `create()` 方法接受属性数组、 创建模型，然后写入数据库，`save()` 和 `create()` 的不同之处在于 `save()` 接收整个 Eloquent 模型实例，而 `create()` 接收原生 PHP 数组。
> **注意：** 使用 create 方法之前确保 `$fillable` 属性填充批量赋值。


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

删除某用户下的所有文章数据。

```
$user = \App\User::find(1);
$user->posts()->delete(); // 删除 posts 表中相关记录
```

### 更新数据





#### 通过关联 User 数据




