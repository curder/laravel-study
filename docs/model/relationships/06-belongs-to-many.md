# 多对多

[GitHub 源码演示 - Laravel Relationships Demo](https://github.com/curder/laravel-relationships-demo/tree/belongs-to-many)

一个用户对应多个角色，一个角色拥有多个用户。

下面是对应的表结构：

```text
users
  id - integer
  name - string
  ...

roles
  id - integer
  name - string
  ...

role_user
  user_id -integer  
  role_id -integer  
  ...
```

## 软件版本

* Laravel 版本 8.80.0

* PHP 版本 7.4.26

## 关键字和表

* `belongsToMany()`

* `attach()`

* `detach()`

* `sync()`

* `toggle()`

* `roles` 、`role_user` 和 `users` 表

* `User` 、`Role` 和 `RoleUser` 模型

数据操作之前请先配置好，数据库的一些连接信息。例如下面使用 `sqlite` 数据库，修改项目根目录下的 `.env` 文件内容。

```dotenv
DB_CONNECTION=sqlite
```

表A的某条记录通过中间表 C 与表 B 的多条记录关联，反之亦然。比如一个用户有多种角色，反之一个角色对应多个用户。

比如用户与角色组之间的关系，我们建立一个中间表 `role_user`，这个表关联用户表 `users` **(使用系统自带的users表)** 和 `roles` 表。

## 生成迁移文件和模型

```bash
touch database/database.sqlite # 生成 sqlite 文件

php artisan make:model Role -mfs # 生成模型、迁移和生成等文件
php artisan make:model RoleUser -mfs # 生成模型和迁移
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
});
```

文件 `<project>/database/migrate/*_create_roles_table.php` 内容如下

```php
Schema::create('roles', function (Blueprint $table) {
    $table->id()->comment('角色ID');
    $table->string('name', 20)->unique()->comment('角色英文名称');
    $table->char('display_name', 20)->nullable()->comment('角色中文名称');
    $table->string('description', 180)->nullable()->comment('角色简要描述');
    $table->timestamps();
});
```

文件 `<project>/database/migrate/*_create_role_user_table.php` 内容如下

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRoleUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('role_user', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id')->comment('用户id，关联users表');
            $table->unsignedBigInteger('role_id')->comment('角色id，关联roles表');

            $table->text('description')->nullable();

            $table->foreign('user_id')->references('id')->on('users')
                  ->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('role_id')->references('id')->on('roles')
                  ->onUpdate('cascade')->onDelete('cascade');

            $table->primary(['user_id', 'role_id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('role_user');
    }
}
```

### 编辑填充文件

#### 修改 `databases/factories/RoleFactory.php`，新增关联数据

```php
<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class RoleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'display_name' => $this->faker->name(),
            'description' => $this->faker->sentence(),
        ];
    }
}
```

#### 修改 `databases/factories/RoleUserFactory.php`，新增关联数据

```php
<?php

namespace Database\Factories;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class RoleUserFactory extends Factory
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
            'role_id' => fn () => Role::factory()->create(),
        ];
    }
}
```

### 执行数据库迁移和数据填充

```bash
php artisan migrate:refresh --seeder=RoleUserSeeder
```

> 执行完上面的命令后，在数据库表 `users`、`roles` 和 `role_users` 表中分别生成一些数据。

## 修改模型

并定义可填充的数据，即 `$fillable` 数组的值。

```php {12}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'display_name', 'description'];
}
```

中间表继承自 `Illuminate\Database\Eloquent\Relations\Pivot`

```php {8}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class RoleUser extends Pivot
{
    use HasFactory;
}
```

## 定义Eloquent关联关系

在 `User` 模型中定义与 `Role` 模型的对应关系：

```php
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

public function roles() : BelongsToMany
{
    /**
     * @param  string $related    关联关系
     * @param  string $table      关联中间表 不填这里默认为 role_user 规则为：Str::snake(class_basename($related)). '_' . Str::snake(class_basename($this)) 并在数据拼接前使用 sort() 排序；
     * @param string $foreignPivotKey 当前模型的外键id, 不填默认为 user_id 规则为：Str::snake(class_basename($this)).'_'.$this->primaryKey;
     * @param string $relatedPivotKey 关联模型的外键id，不填默认为 role_id 规则为：Str::snake(class_basename($related)).'_'.$related->primaryKey
     * @param  string $foreignKey 当前模型的主键, 不填默认为 id 规则为：$this->primaryKey;
     * @param  string $relatedKey 关联模型的主键，不填默认为 id 规则为：$related->primaryKey
     * @param  string $relation   关联方法名 不填默认为roles
     */
    return $this->belongsToMany(Role::class, 'role_user', 'user_id', 'role_id', 'id', 'id', 'roles')
                ->using(RoleUser::class)
                ->withPivot(['description']) // 中间表的字段，这里的中间表是 role_user，默认有 created_at和 updated_at 字段
                ->withTimestamps();
}
```

在 `Role` 模型中定义与 `User` 模型的关联对应关系：

```php
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

public function users() : BelongsToMany
{
    /**
     * @param  string $related         关联关系
     * @param  string $table           关联中间表 不填默认为 role_user
     * @param  string $foreignPivotKey 当前模型的外键id,不填默认为 role_id 规则为：Str::snake(class_basename($this)).'_'.$this->primaryKey;
     * @param  string $relatedPivotKey 关联模型的外键id，不填默认为 user_id 规则为：Str::snake(class_basename($related)).'_'.$related->primaryKey
     * @param  string $foreignKey      当前模型的主键, 不填默认为 id 规则为：$this->primaryKey;
     * @param  string $relatedKey      关联模型的主键，不填默认为 id 规则为：$related->primaryKey
     * @param  string $relation        关联方法名 不填默认为 users
     */
    return $this->belongsToMany(User::class, 'role_user', 'role_id', 'user_id', 'id', 'id', 'users')
                ->using(RoleUser::class)
                ->withPivot(['description']) // 中间表的字段，这里的中间表是 role_user，默认有 created_at和 updated_at 字段
                ->withTimestamps();
}
```

> 如果想要中间表自动维护 `created_at` 和 `updated_at` 时间戳，可在定义关联方法时加上 `withTimestamps()` 方法。

## 关联操作

### 新增数据

#### `attach()`

* 将用户关联到角色

```php
// 创建一条角色和用户数据行
$role = \App\Models\Role::factory()->create();
$user = \App\Models\User::factory()->create();

$user->roles()->attach($role); // 将用户赋予角色，如果角色没有关联给用户，如果已经存在则会抛出 Illuminate\Database\QueryException 错误
```

* 将用户批量放入到角色

```php
use App\Models\User;
use App\Models\Role;

// 数据准备
Artisan::call('migrate:refresh');
Role::factory(10)->create();
User::factory()->create();

$user = User::first();
$roles = Role::find([1, 3, 4]);

$user->roles()->attach($roles); // 将ID为1、3、4的角色给到指定用户，如果角色没有关联给用户，如果已经存在则会抛出 Illuminate\Database\QueryException 错误
```

* 赋值中间表额外数据

```php
use App\Models\User;
use App\Models\Role;

// 数据准备
Artisan::call('migrate:refresh');
Role::factory(5)->create();
User::factory()->create();

$user = \App\Models\User::first();
$roles = \App\Models\Role::find([1, 3, 4]);

$user->roles()->attach([
  1 => ['description' => 'user ID:1 value'],
  2,
  3 => ['description' => 'user ID:3 value'],
  4 => ['description' => 'user ID:4 value'],
]); // 将ID为1、2、3、4的角色给到指定用户，且将ID为1、3、4的角色添加额外属性
```

#### `save()` 方法

有时可能想要使用一个命令，在建立新模型数据的同时附加关联。

```php
use App\Models\User;
use App\Models\Role;

// 数据准备
Artisan::call('migrate:refresh');
User::factory()->create();

$role = Role::create(['name' => 'Editor']);

User::first()->roles()->save($role);
```

上面的例子里，新的 `Role` 模型对象会在储存的同时关联到 `user` 模型。也可以传入属性数组把数据加到关联数据库表：

```php
use App\Models\User;
use App\Models\Role;
use App\Models\RoleUser;

// 数据准备
Artisan::call('migrate:refresh');
User::factory()->create();

$role = Role::create(['name' => 'Editor']);

User::first()->roles()->save($role, ['description' => 'user ID:1 value']);
```

### 查询数据

* 查询用户所拥有的角色

```php
use App\Models\User;
use App\Models\Role;
use App\Models\RoleUser;

// 数据准备
Artisan::call('migrate:refresh');
$user = User::factory()->create();
RoleUser::factory()->count(3)->for($user)->create(); // 创建三个角色并赋值给 $user
                     
User::first()->roles;
```

* 查询角色下属的所有用户

```php
use App\Models\User;
use App\Models\Role;
use App\Models\RoleUser;

// 数据准备
Artisan::call('migrate:refresh');
$role = Role::factory()->create();
RoleUser::factory()->count(3)->for($role)->create(); // 创建三个用户并赋值给 $role

\App\Models\Role::first()->users;
```

### 关联删除

* 将用户从角色中移除

```php
use App\Models\User;
use App\Models\Role;
use App\Models\RoleUser;

// 数据准备
Artisan::call('migrate:refresh');
$user = User::factory()->create();
RoleUser::factory(3)->create(['user_id' => $user]); // 创建三个角色并赋值给 $user

$role = Role::first();
$user = User::first();
$user->roles()->detach($role); // 如果角色跟用户没有关联关系返回 0，否则返回删除的行总数
```

* 将用户从所有角色中移除

```php
use App\Models\User;
use App\Models\Role;
use App\Models\RoleUser;

// 数据准备
Artisan::call('migrate:refresh');
$user = User::factory()->create();
RoleUser::factory(3)->create(['user_id' => $user]); // 创建三个角色并赋值给 $user

$user = User::first();
$user->roles()->detach();
```

* 删除角色下的所有用户关联数据

```php
use App\Models\User;
use App\Models\Role;
use App\Models\RoleUser;

// 数据准备
Artisan::call('migrate:refresh');
$role = Role::factory()->create();
RoleUser::factory(3)->create(['role_id' => $role]); // 创建三个角色并赋值给 $user

$role = Role::first();
$role->users()->detach();
```

### 更新数据

#### 把用户"同步"到角色中

也可以使用 `sync` 方法附加关联模型。 `sync` 方法会把根据 ID 数组把关联存到中间表。附加完关联后，中间表里的模型只会关联到 ID 数组里的 id。

```php
use App\Models\User;
use App\Models\Role;
use App\Models\RoleUser;

// 数据准备
Artisan::call('migrate:refresh');
User::factory(5)->create();

$role = Role::factory()->create();
$role->users()->sync([1, 2, 4]); // 仅同步关联关系

$role->users()->sync([
  3 => ['description' => 'user ID:1 value'],
  5,
]); // 加入其他字段的数据关联到中间表
```

#### 把角色"同步"给用户

```php
use App\Models\User;
use App\Models\Role;
use App\Models\RoleUser;

// 数据准备
Artisan::call('migrate:refresh');
Role::factory(5)->create();

$user = User::factory()->create();
$user->roles()->sync([1, 2, 4]); // 仅同步关联关系

$user->roles()->sync([
  3 => ['description' => 'role ID:1 value'],
  5,
]); // 同步其他字段的数据关联到中间表
```

> 如果在定义 `belongsToMany()` 关联关系的时候，同时想操作中间关联表的数据，这里指的是`role_user` 表。
> 通过定义 `with->withPivot(array $columns)` （参数填写中间表的字段），在使用 `attach()` 或者 `sync` 等方法的时候传入第二个参数进行数据的同步更新。例如：
>
> ```php
> use App\Models\User;
> use App\Models\Role;
> use App\Models\RoleUser;
>
> // 数据准备
> Artisan::call('migrate:refresh');
> $role = Role::factory()->create();
> $user = User::factory()->create();
>
> $user->roles()->attach($role, [
>   'description' => 'role ID:1 value',
>   'created_at' => now()->subYear(), // 修改为去年今天的时间
> ]);
> ```
>
> 当然，如果已经存在关联关系，仅需要更新中间表的一些字段，这里指的是 `role_user` 表的字段，可以使用 `updateExistingPivot()`，例如：
>
> ```php
> use App\Models\User;
> use App\Models\Role;
> use App\Models\RoleUser;
>
> // 数据准备
> Artisan::call('migrate:refresh');
> $role = Role::factory()->create();
> $user = User::factory()->create();
> 
> $user->roles()->attach($role, [
>   'description' => 'role ID:1 value',
>   'created_at' => now()->subYear(), // 修改为去年今天的时间
> ]);
>                                             
> // 当存在关联关系时更新中间表
> $user->roles()->updateExistingPivot($role, [
>   'description' => 'role ID:1 value using updateExistingPivot method',
>   'created_at' => now()->subYear(), // 修改为去年今天的时间
> ]);
> ```

### 一些方法

#### `toggle`

顾名思义，如果表中存在则删除数据，如果表中不存在则新增数据。运用场景比如：点赞、喜欢或踩等切换操作。

```php {10,11}
use App\Models\User;
use App\Models\Role;
use App\Models\RoleUser;

// 数据准备
Artisan::call('migrate:refresh');
Role::factory()->create();
$user = User::factory()->create();

$user->roles()->toggle($role); // attach 将角色附加到用户下
$user->roles()->toggle($role); // 再次执行就是 detach 效果
```
