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

修改模型文件 `app\Models\User.php`，添加 `posts` 关联方法。

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

#### 创建一条关联数据

常见的新增 `posts` 数据场景是用户发布一篇文章，如下:

- 使用 `create()` 方法进行关联数据的新增
```php
$user = User::first();

$user->posts()->create([
  'title' => 'test create title',
  'body' => 'test create body',
  'published_at' => null,
]);
```

- 使用 `save()` 方法进行关联数据新增
```php
$user = User::first();

(new Post)->fill([
  'title' => 'save test title',
  'body' => 'save test body',
  'published_at' => null,
]);

$user->posts()->save($post); 
```

> 通过调用 User 模型的 `posts()` 关联方法创建文章。


> `create()` 方法接受属性数组、 创建模型，然后写入数据库，`save()` 和 `create()` 的不同之处在于 `save()` 接收整个 Eloquent 模型实例，而 `create()` 接收原生 PHP 数组。
> 
> **注意：** 使用 `create()` 方法之前确保 `$fillable` 属性填充批量赋值。


#### 批量创建关联数据

如果需要保存多个关联模型，可以使用 `saveMany()` 或 `createMany()` 方法。

- `saveMany()` 方法

```php {5}
$user = \App\Models\User::first();

$user
  ->posts()
  ->saveMany([
    new \App\Models\Post([
      'title' => 'test saveMany title',
      'body' => 'test saveMany body',
      'published_at' => null,
    ]),
    new \App\Models\Post([
      'title' => 'test saveMany another title',
      'body' => 'test saveMany another body',
      'published_at' => null,
    ]),
  ]);
```
> `saveMany()` 方法接收模型数组参数     

- `createMany()` 方法
```php {3}
$user = \App\Models\User::first();

$user->posts()->createMany([
  [
    'title' => 'test createMany title',
    'body' => 'test createMany body',
    'published_at' => null,
  ],
  [
    'title' => 'test createMany another title',
    'body' => 'test createMany another body',
    'published_at' => null,
  ],
]); 
```
> `createMany` 方法接收数组参数

> 执行上面的操作后将一次生成两条关联数据。

### 查询数据

#### 查询所属数据

- 获取指定模型的关联数据
```php
$user = \App\Models\User::first();
$posts = $user->posts;

// 分页
$user = \App\Models\User::first();
$posts = $user->posts()->paginate();
```

- 获取指定字段的关联数据
```php
$user = \App\Models\User::first();
$user->with('posts:user_id,title,published_at')->get(); // 仅获取关联数据的某些指定字段，但需要注意的是 foreignKey 必须提供，比如这里的 user_id

// 添加条件
$user = \App\Models\User::first();
$user
  ->with([
    'posts' => function ($query) {
      $query
        ->select('user_id', 'title', 'published_at')
        ->whereNotNull('published_at') // published_at 不为 Null
        ->latest('id') // 通过 id 倒序
        ->first()
        ->withDefault();; // 仅获取第一条数据
    },
  ])
  ->get(); 
```

- 获取用户列表并关联所属文章
```php
\App\Models\User::with('posts')
  ->get();
```


#### 查询属主

- 查询关联属主
```php
$post = \App\Models\Post::find(1); // 获取文章数据
$user = $post->user; // 获取所属用户
```

- 查询列表并附加关联数据
```php
\App\Models\Post::with('user')->get();

// 获取指定字段的关联数据
\App\Models\Post::with('user:id,name,email')->get();

// 添加条件
\App\Models\Post::with([
  'user' => function ($query) {
    $query->select('id', 'name', 'email')->whereNotNull(
      'email_verified_at' // email_verified_at 不为 Null
    );
  },
])->get();
```

- 添加默认模型
```php
$post = \App\Models\Post::with([
  'user' => function ($query) {
    $query
      ->select('id', 'name', 'email')
      ->whereNotNull(
        'email_verified_at' // email_verified_at 不为 Null
      )
      ->withDefault(); // 添加这个调用将在没有获取到值时，返回空的模型，而不是 null
  },
])->get();
```

> `withDefault()` 还可以添加参数，[源代码查看这里](https://github.com/laravel/framework/blob/8.x/src/Illuminate/Database/Eloquent/Relations/Concerns/SupportsDefaultModels.php#L32)
                               
### 关联删除

- 删除某用户下的所有文章数据。

```php
$user = \App\Models\User::first();

$user->post()->delete(); // 通过关联关系删除，返回删除数据的行数

$user->posts->each->delete(); // 通过 \Illuminate\Database\Eloquent\Collection 集合类删除，返回值为集合
```

- 禁用某篇文章的用户

```php
$post = \App\Models\Post::first();

$post->user->delete(); // 通过模型删除

$post->user()->delete(); // 通过关联关系删除
```

### 更新数据

一般情况下不会出现需要关联更新数据的情况。

## 测试

### hasMany

```php
<?php

namespace Tests\Integration\Models;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Relations\HasOneOrMany;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;

class HasManyTest extends TestCase
{
    use DatabaseMigrations;

    /** @test */
    public function a_user_has_many_posts(): void
    {
        /** @var User $user */
        $user = User::factory()->create();
        $post = Post::factory()->create(['user_id' => $user]);

        $this->assertInstanceOf(Post::class, $user->posts()->first());
        $this->assertInstanceOf(Collection::class, $user->posts);
        $this->assertInstanceOf(HasOneOrMany::class, $user->posts());
        $this->assertEquals($post->user_id, $user->id);
    }
}
```
                       
### belongsTo

```php
<?php

namespace Tests\Integration\Models;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Relations\HasOneOrMany;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;

class HasManyTest extends TestCase
{
    use DatabaseMigrations;

    /** @test */
    public function a_post_belongs_to_a_user(): void
    {
        /** @var User $user */
        $user = User::factory()->create();
        $post = Post::factory()->create(['user_id' => $user]);

        $this->assertEquals($user->id, $post->user_id);
        $this->assertEquals($user->id, $post->user->id);
        $this->assertInstanceOf(User::class, $post->user);
        $this->assertInstanceOf(Relation::class, $post->user());
    }
}
```
