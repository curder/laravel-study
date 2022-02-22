# 许多之一

[GitHub - HasOneOfMany 许多之一](https://github.com/curder/laravel-relationships-demo/tree/has-one-of-many)

有时一个模型可能有许多相关模型，希望轻松检索关系的“最新”或“最旧”相关模型。

例如，一个 `User` 模型可能与许多 `Order` 模型相关，但想定义一种方便的方式来获取用户最近下的订单。

可以使用 [hasOne](/docs/model/relationships/01-has-one.md) 关系类型结合 ofMany 方法来完成此操作。

下面是对应的表结构：

```
users
    id - integer
    name - string
    ...

orders
    id - integer
    user_id - integer
    name - string
    price - float
    ...
```

## 软件版本

* Laravel 版本 8.80.0

* PHP 版本 7.4.26

## 关键字和表

* `hasOne()` 、`latestOfMany()`、`oldestOfMany`、`ofMany`

* `belongsTo()`

* `posts` 和 `users` 表

数据操作之前请先配置好，数据库的一些连接信息。例如下面使用 sqlite 数据库，修改项目根目录下的 `.env` 文件内容。

```
DB_CONNECTION=sqlite
```

定义关联关系，订单表 `orders` （**假设用户表使用系统自带的**）

## 生成模型和迁移文件

```bash
touch database/database.sqlite # 生成 sqlite 文件

php artisan make:model Order -mfs # 生成模型、迁移、生成等文件
```

### 编辑迁移文件

`<project>/database/migrate/*_create_orders_table.php`如下

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('name');
            $table->decimal('price', 12, 4);
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
        Schema::dropIfExists('orders');
    }
}
```

### 编辑填充文件

#### 修改 `/databases/factories/OrderFactory.php`，新增关联数据

```php
<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class OrderFactory extends Factory
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
            'name' => $this->faker->words(10, true),
            'price' => $this->faker->randomFloat(10, 50000),
        ];
    }
}
```

#### 修改 `databases/seeders/OrderSeeder.php`，执行填充。

```php
<?php

namespace Database\Seeders;

use App\Models\Order;
use App\Models\User;
use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Order::factory()
             ->count(10)
             ->for(User::factory()->create())
             ->create();
    }
}
```

### 执行数据库迁移和数据填充

```bash
php artisan migrate:refresh --seeder=OrderSeeder
```

### 修改模型的 fillable 属性

`App\Models\Order` 模型关联关系：

```php {12}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'name', 'price'];
}
```

### 定义Eloquent关联关系

文件在 `<project>/app/Models/User.php` 和 `<project>/app/Models/Order.php`。

#### hasOne

修改模型文件 `app\Models\User.php`，添加 `latestOrder`、`oldestOrder`、`largestOrder` 关联方法。

```php {52,62,72}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

/**
 * @property HasOne latestOrder
 * @property HasOne oldestOrder
 * @property HasOne largestOrder
 */
class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function latestOrder(): HasOne
    {
        return $this->hasOne(Order::class)
                    ->latestOfMany()
                    ->withDefault();
    }

    /**
     * Get the user's oldest order.
     */
    public function oldestOrder(): HasOne
    {
        return $this->hasOne(Order::class)
                    ->oldestOfMany()
                    ->withDefault();
    }

    /**
     * Get the user's largest order.
     */
    public function largestOrder(): HasOne
    {
        return $this->hasOne(Order::class)
                    ->ofMany('price', 'max')
                    ->withDefault();
    }
}
```

#### belongsTo

修改模型文件 `app\Models\Order.php`，添加关联 `user` 方法。

```php {18}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property BelongsTo user
 */
class Order extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'name', 'price'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
```

## 关联操作

新增、编辑和删除操作可以参考[一对多](https://curder.github.io/laravel-study/model/relationships/02-has-many.html#%E5%85%B3%E8%81%94%E6%93%8D%E4%BD%9C)的相关操作方法。

### 查询操作

查询用户最新的订单

```php
$user->latestOrder;
```

查询用户第一笔订单

```php
$user->oldestOrder;
```

查询用户消费最大的一笔订单

```php
$user->largestOrder;
```

## 测试

### hasMany

```php
<?php

namespace Tests\Integration\Models;

use App\Models\Order;
use App\Models\User;
use Illuminate\Database\Eloquent\Relations\HasOneOrMany;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;

/**
 * Class HasOneOfManyTest
 *
 * @package \Tests\Integration\Models
 */
class HasOneOfManyTest extends TestCase
{
    use DatabaseMigrations;

    /** @test */
    public function a_user_has_latest_order(): void
    {
        /** @var User $user */
        $user = User::factory()->create();
        $this->assertInstanceOf(Order::class, $user->latestOrder); // assert has default object

        /** @var \Illuminate\Database\Eloquent\Collection $orders */
        $orders = Order::factory()->count(10)->for($user)->create();

        $this->assertTrue($orders->last()->is($user->refresh()->latestOrder)); // 刷新模型是因为上面变量有缓存
        $this->assertInstanceOf(Order::class, $user->latestOrder);
        $this->assertInstanceOf(HasOneOrMany::class, $user->latestOrder());
    }

    /** @test */
    public function a_user_has_oldest_order(): void
    {
        /** @var User $user */
        $user = User::factory()->create();
        $this->assertInstanceOf(Order::class, $user->oldestOrder); // assert has default object

        /** @var \Illuminate\Database\Eloquent\Collection $orders */
        $orders = Order::factory()->count(10)->for($user)->create();

        $this->assertTrue($orders->first()->is($user->refresh()->oldestOrder)); // 刷新模型是因为上面变量有缓存
        $this->assertInstanceOf(Order::class, $user->oldestOrder);
        $this->assertInstanceOf(HasOneOrMany::class, $user->oldestOrder());
    }

    /** @test */
    public function a_user_has_largest_order(): void
    {
        /** @var User $user */
        $user = User::factory()->create();
        $this->assertInstanceOf(Order::class, $user->largestOrder); // assert has default object

        $largest_order = Order::factory()->for($user)->create(['price' => 9999.99,]);
        $smallest_order = Order::factory()->for($user)->create(['price' => 0.11]);

        $this->assertTrue($largest_order->is($user->refresh()->largestOrder)); // 刷新模型是因为上面变量有缓存
        $this->assertInstanceOf(Order::class, $user->largestOrder);
        $this->assertInstanceOf(HasOneOrMany::class, $user->largestOrder());
    }
}
```

### belongsTo

```php
<?php

namespace Tests\Integration\Models;

use App\Models\Order;
use App\Models\User;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Support\Facades\Schema;
use Tests\TestCase;

/**
 * Class OrderTest
 *
 * @package \Tests\Integration\Models
 */
class OrderTest extends TestCase
{
    use DatabaseMigrations;

    /** @test */
    public function an_order_belongs_to_a_user(): void
    {
        /** @var \App\Models\User $user */
        $user = User::factory()->create();
        $order = Order::factory()->create(['user_id' => $user]);

        $this->assertEquals($user->id, $order->user_id);
        $this->assertEquals($user->id, $order->user->id);
        $this->assertInstanceOf(User::class, $order->user);
        $this->assertInstanceOf(Relation::class, $order->user());
    }
}
```
