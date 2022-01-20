# 一对一

数据表之间往往不是孤立的，而是纵横交叉、相互关联的，比如一个用户对应一个账户，一个账户只属于一个用户就属于一对一关联。

## 软件版本

* Laravel 版本 8.6.10

* PHP 版本 7.4.26

## 关键字和数据表

* `hasOne()` 一个用户拥有对应的一行用户账号信息

* `belongsTo()` 一行账号信息从属一个用户

* `users` 和 `user_accounts` 表

数据操作之前请先配置好，数据库的一些连接信息。例如下面使用 mysql 数据库，修改项目根目录下的 `.env` 文件内容。

```dotenv
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=db_name
DB_USERNAME=db_username
DB_PASSWORD=db_password
```

一对一是最简单的关联关系，表示表A和表B的记录一一对应。

比如一个用户对应一个社交账号，在演示该关联关系之前我们先创建一个社交账号表 `user_accounts` （**假设用户表使用系统自带的**）

## 生成文件

```bash
php artisan make:model UserAccount -msf
```

### 编辑迁移文件

`<project>/database/migrate/*_create_user_accounts_table.php` 如下：

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

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
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->char('qq', 12)->nullable();
            $table->string('wechat')->nullable();
            $table->string('weibo')->nullable();
            $table->string('twitter')->nullable();
            $table->string('facebook')->nullable();
            $table->timestamps();
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
        Schema::dropIfExists('user_accounts');
    }
}
```

### 编辑填充文件

#### 修改 `/databases/factories/UserAccountFactory.php`，新增关联数据。

```php
<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserAccountFactory extends Factory
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
            'qq' => $this->faker->numberBetween(100000, 999999999),
            'wechat' => $this->faker->word,
            'weibo' => $this->faker->word,
            'twitter' => $this->faker->word,
            'facebook' => $this->faker->word,
        ];
    }
}
```

#### 修改 `databases/seeders/UserAccountSeeder.php`，执行填充。

```php
<?php

namespace Database\Seeders;

use App\Models\UserAccount;
use Illuminate\Database\Seeder;

class UserAccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        UserAccount::factory()->create();
    }
}
```

### 执行数据库迁移和数据填充

```shell
php artisan migrate:refresh --seeder=UserAccountSeeder
```

> 执行完上面的命令后，在数据库表 `users` 和 `user_accounts` 表中分别存在一条数据。

## 定义关联关系和修改模型的 `fillable` 属性

并定义可填充的数据，即 `$fillable` 数组的值。

```php {14}
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
    protected $fillable = ['user_id', 'qq', 'wechat', 'weibo', 'twitter', 'facebook'];
}
```

## 定义Eloquent关联关系

文件在`<project>/app/Models/User.php`和`<project>/app/Models/UserAccount.php`。

### 定义关联关系

- 在 `User` 模型中定义与 `UserAccount` 模型的一对一关联关系

```php {19}
<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
class User extends Model
{

    // ...

   /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function account()
    {
        /**
         * UserAccount::class related 关联模型
         * user_id foreignKey 当前表关联字段
         * id localKey 关联表字段
         */
        return $this->hasOne(UserAccount::class, 'user_id', 'id');
    }
}
```

- 在 `UserAccount` 模型中定义与 `User` 的一对一从属关系

```php {19}
<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
class UserAccount extends Model
{

    // ... 

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
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

## 关联操作

### 新增数据

同时新增 `users` 和 `user_accounts` 表数据

```php
$user = \App\Models\User::factory()->create(); // 新增一个用户信息
$account = \App\Models\UserAccount::factory()->make(['user_id' => null]); // 生成 UserAccount 对象
$user->account()->save($account); // 执行关联写入操作
```

### 查询数据

- 通过用户获取用户关联信息

```php
$user = \App\Models\User::find(1); // 获取用户表数据

$user->account; // 通过用户信息获取用户关联信息
```

- 通过用户关联信息获取用户相关信息

```php
$account = \App\Models\UserAccount::find(3); // 获取用户关联信息

$account->user; // 通过关联信息获取用户信息
```

### 关联删除

```php
DB::transaction(function () {            
    $account = \App\Models\UserAccount::first();
    $account->user->delete(); // 删除用户 users 表记录行
    $account->delet(); // 删除 user_account 记录
});

DB::transaction(function () {     
    $user = \App\Models\User::first();
    $user->account->delete(); // user_account 记录
    $user->delete(); //  删除用户 users 表记录行
});
```

### 更新数据

#### 更新从属表

- 使用 `push()`  方法

```php {3}
$user = \App\Models\User::first();
// $user->email = 'example@example.com'; // 修改主表属性
$user->account->qq = 'new QQ'; // 修改附属表属性
$user->push();
```
> 当然 `push()` 方法也可以修改主表本身的属性。比如：当修改附属表属性的同时也可以修改用户邮箱 `$user->email = 'example@example.com';`

- 使用 `save()` 方法 

```php
// 通过用户表 `users` 数据，更新关联 `user_accounts`
$user = \App\Models\User::first();
$account = $user->account; // 获取到关联信息
$account->qq = 'new QQ';
$account->save();

// 或者当用户登录时，直接通过关联关系进行更新数据
$user->account()->update(['wechat' => 'new Wechat']);
```

#### 更新主表

- 使用 `push()` 方法
```php
$account = \App\Models\UserAccount::first();
$account->user->email = 'push@method.com';
$account->push();
```

- 使用 `save()` 方法
```php
// 通过 用户信息表 `user_accounts` 关联更新 `users` 数据表
$account = \App\Models\UserAccount::first();
$user = $account->user; // 获取到关联信息

$user->email = 'save@method.com';
$user->save();
```

### 关联更新 updated_at

默认情况下，当我们更新主表附属表的 `updated_at` 字段不会跟随主表 `updated_at` 字段更新；或者更新附属表 `updated_at` 字段时主表 `updated_at` 字段不会跟随更新。

如果需要同步更新关联表的 `updated_at` 字段，在模型中定义 `$touches` 属性。

> **注意：** 不能既在主表中配置又在附属表中配置。

#### 附属表关联主表

例如在 `UserAccount` 中定义如下关系：

```php
/**
 * 要触发的关联关系
 *
 * @var array
 */
 protected $touches = ['user'];
```

使用模型操作，在更新 `user_accounts` 表中数据时，同步更新 `users` 表的 `updated_at` 数据。

#### 主表关联附属表

在 `User` 中定义如下关系：

```php
/**
 * 要触发的关联关系
 *
 * @var array
 */
 protected $touches = ['account'];
```

使用模型操作，在更新 `users` 表中数据时，同步更新 `user_accounts` 表的 `updated_at` 数据。

#### 关联关系调用 `touch()` 方法

```php
// 1. UserAccount 模型未设置 `touches` 属性时，仅更新 user_accounts 表的 updated_at 字段。
// 2. UserAccount 模型设置 `touches` 属性时，同时更新 `user_accounts` 和 `users` 表的 updated_at 字段。 
$user = \App\Models\User::first();
$user->account->touch(); 

// 1. User 模型未设置 `touches` 属性时，仅更新 users 表的 updated_at 字段。
// 2. User 模型设置 `touches` 属性时，同时更新 `user_accounts` 和 `users` 表的 updated_at 字段。 
$account = \App\Models\UserAccount::first();
$account->user->touch(); 
```

## 测试

### hasOne
```php {27-29}
<?php

namespace Tests\Integration\Models;

use App\Models\User;
use App\Models\UserAccount;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;

/**
 * Class HasOneTest
 *
 * @package \Tests\Integration\Models
 */
class HasOneTest extends TestCase
{
    use DatabaseMigrations;

    /** @test */
    public function a_user_has_one_account(): void
    {
        /** @var User $user */
        $user = User::factory()->create();
        $user_account = UserAccount::factory()->create(['user_id' => $user]);

        $this->assertTrue($user_account->is($user->account));
        $this->assertInstanceOf(UserAccount::class, $user->account);
        $this->assertInstanceOf(HasOneOrMany::class, $user->account());
    }
}
```

### belongsTo

```php {28-30}
<?php

namespace Tests\Integration\Models;

use App\Models\User;
use App\Models\UserAccount;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;

/**
 * Class HasOneTest
 *
 * @package \Tests\Integration\Models
 */
class HasOneTest extends TestCase
{
    use DatabaseMigrations;

    /** @test */
    public function an_user_account_belongs_to_a_user(): void
    {
        /** @var User $user */
        $user = User::factory()->create();
        /** @var UserAccount $account */
        $account = UserAccount::factory()->create(['user_id' => $user]);

        $this->assertTrue($user->is($account->user));
        $this->assertInstanceOf(User::class, $account->user);
        $this->assertInstanceOf(Relation::class, $account->user());
    }
}
```
