# EloquentORM关联关系之远层一对多

“远层一对多”指的是通过一个中间关联对象访问远层的关联关系，比如用户与文章之间存在一对多关系，国家与用户之间也存在一对多关系，那么通过用户可以建立国家与文章的之间的一对多关联关系，我们称之为“远层一对多”，我们可以利用这种关联关系处理多语言环境下的文章列表。

## 软件版本

* Laravel Version 5.4.19

* PHP Version 7.0.8

## 关键字和表

* `hasOne()`

* `hasMany()`

* `belongsTo()`

*  `hasManyThrough()`

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

`App\Country` 模型中定义与 `App\Post` 模型的远层一对多关系
```
public function user()
{
    /**
     * User::class related 关联模型
     * country_id foreignKey 当前表关联字段
     * id localKey 关联表字段
     */
    return $this->hasMany('App\User' , 'country_id' , 'id');
}

public function posts()
{
    /**
     * @param  string      $related
     * @param  string      $through
     * @param  string|null $firstKey
     * @param  string|null $secondKey
     * @param  string|null $localKey 不填默认为当前模型的主键
     */
    return $this->hasManyThrough('App\Post' , 'App\User' , 'country_id' , 'user_id', 'id');
}
```

> 由此可见我们通过 `hasManyThrough()` 方法来定义远层一对多关联。其中第一个参数是关联对象类名，第二个参数是中间对象类名。

`App\Post` 模型关联关系：
```
protected $fillable = ['title' , 'user_id' , 'body' , 'published_at'];

public function user()
{
    /**
    * User::class related 关联模型
    * user_id ownerKey 当前表关联字段
    * id relation 关联表字段
    */
    return $this->belongsTo(User::class , 'user_id' , 'id');
}
```

`App\User` 模型关联关系

```
public function posts()
{
    /**
     * Post::class related 关联模型
     * user_id foreignKey 当前表关联字段
     * id localKey 关联表字段
     */
    return $this->hasMany(Post::class , 'user_id' , 'id');
}

public function country()
{
    /**
     * Country::class related 关联模型
     * id foreignKey 当前表关联字段
     * country_id localKey 关联表字段
     */
    return $this->hasOne(Country::class , 'id' , 'country_id');
}
```

### 使用 tinker 填充数据

修改 `/databases/factories/ModelFactory.php`，新增关联数据。

```
$factory->define(App\User::class , function(Faker\Generator $faker){
    static $password;
    $country_ids = \App\Country::pluck('id')->toArray();

    return [
        'name'           => $faker->name ,
        'country_id'     => $faker->randomElement($country_ids) ,
        'email'          => $faker->unique()->safeEmail ,
        'password'       => $password ? : $password = bcrypt('secret') ,
        'remember_token' => str_random(10) ,
    ];
});
$factory->define(App\Post::class , function(Faker\Generator $faker){
    $user_ids = \App\User::pluck('id')->toArray();

    return [
        'user_id' => $faker->randomElement($user_ids) ,
        'title'   => $faker->word ,
        'body'    => $faker->text() ,
    ];
});

$factory->define(App\Country::class , function(Faker\Generator $faker){
    return [
        'name'         => $faker->country ,
        'display_name' => $faker->country ,
    ];
});
```

```
php artisan tinker

## 进入到 tinker 界面执行如下命令
namespace App
factory(Country::class,2)->create(); // 生成两个国家数据
factory(User::class,3)->create(); // 生成3个用户
factory(Post::class,30)->create() // 生成30条 posts 表的测试数据
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





