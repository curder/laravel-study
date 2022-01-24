# 远层一对多

"远层一对多"指的是通过一个中间关联对象访问远层的关联关系。

比如用户与文章之间存在一对多关系，国家与用户之间也存在一对多关系，通过用户可以建立国家与文章的之间的一对多关联关系，称之为"远层一对多"，利用关联关系处理多语言环境下的文章列表。
                        

```
users
    id - integer
    name - string
    ...

posts
    id - integer
    user_id - integer
    name - string
    ...

countries
    id - integer
    user_id - integer
    name - string
    ...
```

## 软件版本

- Laravel 版本 8.80.0

- PHP 版本 7.4.26

## 关键字和表

- `hasManyThrough()`

- `posts` 、`countries` 和 `users` 表

数据操作之前请先配置好，数据库的一些连接信息。例如下面使用 `sqlite` 数据库，修改项目根目录下的 `.env` 文件内容。

```dotenv
DB_CONNECTION=sqlite
```


## 生成文件

```shell
touch database/database.sqlite # 生成 sqlite 文件

php artisan make:model Country -ms # 生成模型、迁移、生成等文件
php artisan make:model Post -ms # 生成模型、迁移、生成等文件
```

### 编辑迁移文件
文件 `<project>/database/migrate/*_create_users_table.php` 内容如下
```php
Schema::create('users', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('email')->unique();
    $table->timestamp('email_verified_at')->nullable();
    $table->string('password');
    $table->rememberToken();
    $table->timestamps();
})
```

文件 `<project>/database/migrate/*_create_countries_table.php` 内容如下
```php
Schema::create('countries', function (Blueprint $table) {
     $table->id();
     $table->unsignedBigInteger('user_id');
     $table->string('name');
     $table->string('display_name');
     $table->timestamps();
     $table->foreign('user_id')
      ->references('id')
      ->on('users')
      ->onUpdate('cascade')
      ->onDelete('cascade');
});
```

文件 `<project>/database/migrate/*_create_posts_table.php` 内容如下
```php
Schema::create('posts', function (Blueprint $table) {
    $table->id();
    $table->unsignedBigInteger('country_id');
    $table->string('name');
    $table->text('body')->nullable();
    $table->timestamp('published_at')->nullable();
    $table->timestamps();
    $table->foreign('user_id')
        ->references('id')
        ->on('users')
        ->onUpdate('cascade')
        ->onDelete('cascade');
});
```



### 编辑填充文件
 
#### 修改 `databases/factories/CountryFactory.php`，新增关联数据。

```php
<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class CountryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition(): array
    {
        return [
            'user_id' => fn () => User::factory()->create(),
            'name' => $this->faker->word(),
            'display_name' => $this->faker->word(),
        ];
    }
}
```

#### 修改 `databases/factories/PostFactory.php`，新增关联数据。

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
    public function definition(): array
    {
        return [
            'country_id' => fn () => Country::factory()->create(),
            'name' => $this->faker->word(),
            'body' => $this->faker->sentence(10),
            'published_at' => null,
        ];
    }
}
```

#### 修改 `databases/seeders/DatabaseSeeder.php`，执行填充。
```php
<?php

namespace Database\Seeders;

use App\Models\Country;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $country = Country::factory()->create();

        Post::factory()->count(2)->create(['country_id' => $country]);
    }
}
```


### 执行数据库迁移和数据填充

```shell
php artisan migrate:refresh --seed
```

> 执行完上面的命令后，在数据库表 `users`、`posts` 和 `countries` 表中分别生成一些数据。


### 修改模型的 fillable 属性
- `App\Models\Country` 模型
```php {12} 
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use HasFactory;
    
    protected $fillable = ['user_id', 'name', 'display_name'];
} 
```

- `App\Models\Post` 模型
```php {12}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    
    protected $fillable = ['country_id', 'name', 'body', 'published_at'];
} 
```

### 定义Eloquent关联关系

文件在 `<project>/app/Models/User.php`、`<project>/app/Models/Post.php` 和 `<project>/app/Models/Country.php`。
                
- 修改模型文件 `app\Models\User.php`，添加 `country` 和 `posts` 关联方法。
```php {13,19}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class User extends Authenticatable
{
    // ...

    public function country(): HasOne
    {
        return $this->hasOne(Country::class);
    }


    public function posts(): HasManyThrough
    {
        /**
         * @param  string      $related
         * @param  string      $through
         * @param  string|null $firstKey
         * @param  string|null $secondKey
         * @param  string|null $localKey 不填默认为当前模型的主键
         */
        return $this->hasManyThrough(Post::class, Country::class);
    }
}
```

- 修改模型文件 `app\Models\Post.php`
```php {10}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Post extends Model
{
    public function country(): BelongsTo
    {
        return $this->belongsTo(Country::class);
    }
} 
```

- 修改模型文件 `app\Models\Country.php`
```php{11,16}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Country extends Model
{
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }
} 
```

## 关联操作

### 新增数据

#### 使用 `save()` 方法进行关联数据的新增

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


> `create()` 方法接受属性数组、 创建模型，然后写入数据库，`save()` 和 `create()` 的不同之处在于 `save()` 接收整个 Eloquent 模型实例，而 `create()` 接收原生 PHP 数组。
> **注意：** 使用 create 方法之前确保 `$fillable` 属性填充批量赋值。



### 查询数据

#### 根据国家查询数据
##### 查询国家下的用户和发布的文章
```
// 查询国家下的所有文章数据
$country = \App\Country::find(1);
$posts = $country->posts;

// 或者通过下面的关联关系
$posts = \App\Country::with(array('user','posts'))->find(1);
```
##### 查询国家下的用户或文章
```
$posts = \App\Country::with(array('user'))->find(1);
$posts = \App\Country::with(array('user.posts'))->find(1);
$posts = \App\Country::with(array('posts.user'))->find(1);
```

#### 查询文章所属国家信息
```
$posts = \App\Post::with(['user.country'])->get();
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

通过用户关联删除文章信息

```
$user = \App\User::find(1);
$user->posts()->delete(); // 删除 posts 表中相关记录
```

通过国家关联删除文章信息

```
$country = \App\Country::find(1);
$country->posts()->delete(); // 关联删除 posts 表中country_id 为 1 的相关记录，此处country_id 为 1 通过用户表关联得出。
```

> 相关的更多的关联删除操作，可以自行尝试。

### 更新数据





#### 通过关联 User 数据





