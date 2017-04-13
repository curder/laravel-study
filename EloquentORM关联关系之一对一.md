# Eloquent ORM关联关系之一对一

## 数据版本

Laravel Version 5.4.18
PHP Version 7.0.8

数据操作之前请先配置好，数据库的一些连接信息。例如下面使用mysql数据库，修改项目根目录下的 `.env` 文件内容。
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=db_name
DB_USERNAME=db_username
DB_PASSWORD=db_password
```

一对一是最简单的关联关系，表示表A和表B的记录一一对应。

比如一个用户对应一个社交账号，在演示该关联关系之前我们先创建一个社交账号表 `user_accounts` （**假设用户表使用系统自带的**）

## 生成关联数据

```shell
php artisan make:migration create_user_accounts_table --create=user_accounts
```


### 编辑生成的迁移文件

`<project>/database/migrate/*_create_user_accounts_table.php`如下

```php
<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_accounts', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->char('qq', 12)->nullable();
            $table->string('wechat', 100)->nullable();
            $table->string('weibo', 100)->nullable();
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_accounts');
    }
}
```


### 运行Artisan命令保存修改到数据库

```shell
php artisan migrate
```

> 执行上面的命令后数据库将生成四张表，
> migrations
> password_resets
> user_accounts
> users

### 使用artisan命令生成模型
```
php artisan make:model UserAccount
```

并定义可填充的数据，即 $fillable 数组的值。
```
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class UserAccount
 *
 * @package App
 */
class UserAccount extends Model
{
    /**
     * @var array
     */
    protected $fillable = ['user_id', 'qq', 'wechat', 'weibo'];
}
```

### 使用 tinker 填充数据
修改 `/databases/factories/ModelFactory.php`，新增关联数据。
```
<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

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

$factory->define(App\UserAccount::class, function (Faker\Generator $faker) {
    return [
        'user_id' => 1,
        'qq' => $faker->numberBetween(100000, 999999999),
        'wechat' => bcrypt('secret'),
        'weibo' => bcrypt('secret')
    ];
});
```

### 执行上述迁移文件填充数据到数据库
```shell
php artisan tinker

// 进入到交互界面执行
namespace App
factory(User::class,1)->create() // 随机生成一个用户信息
factory(UserAccount::class,1)->create() // 随机生成一个用户关联信息
```

### 查看执行结果
在两个表中可以看到写入的数据：

`users`表数据：

![](image/screenshot_1492077162810.png)

`users_accounts`表：

![](image/screenshot_1492077196226.png)


## 定义Eloquent关联关系

文件保存在`<project>/app/User.php`和`<project>/app/UserAccount.php`。

### 定义关联关系
- 在`User`模型中定义与`UserAccount`模型的一对一对应关系：
```php
<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
class User extends Model
{
    public function account()
    {
        return $this->hasOne('App\UserAccount');
    }
}
```

- 在UserAccount模型中定义与User的一对一关系：
```php
<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
class UserAccount extends Model
{
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
```

## 关联查询操作

### 获取用户的账户
```php
$account = User::find(1)->account;
dd($account);
```

### 通过账户关联用户
```php
$user = UserAccount::find(1)->user;
dd($user);
```


　　我们并没有在调用`belongsTo`的时候指定相应的外键信息，那么Eloquent模型底层是怎么判断`User`模型与`UserAccount`模型的对应关系的呢？

　　默认情况下，Eloquent将调用`belongsTo`的关联方法名`user`作为关联关系`$relation`的值，并将`$relation.'_id'`作为默认外键名对应`users`表的`id`，如果表中没有相应列，又没有在定义关联关系的时候指定具体的外键，就会报错。

　　那么又该如何在定义关联关系的时候指定外键呢？

　　实际上在底层无论是`hasOne`方法还是`belongsTo`方法都可以接收额外参数，比如如果`user_accounts`中关联`users`的外键是`$foreign_key`，该外键对应`users`表中的列是`$local_key`，那么我们可以这样调用`hasOne`方法：

```php
$this->hasOne('App\Models\UserAccount',$foreign_key,$local_key);
```

调用`belongsTo`方法也是一样：

```php
$this->belongsTo('App\User',$foreign_key,$local_key);
```

　　此外，`belongsTo`还接收一个额外参数`$relation`，用于指定关联关系名称，其默认值为调用`belongsTo`的方法名，这里是`user`。

 [参考地址](http://laravelacademy.org/post/1095.html)