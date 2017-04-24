# EloquentORM关联关系之多对多

数据表之间往往不是孤立的，而是纵横交叉、相互关联的，比如一个用户对应多个角色，一个角色拥有多个用户等类似的多对多关联。 

## 软件版本

* Laravel Version 5.4.19

* PHP Version 7.0.8

## 关键字和表

* `belongsToMany()`

* `attach()`

* `dettach()`

* `sync()`

* `roles` 、`role_user` 和 `users` 表

* `User` 、`Role` 和 `RoleUser` 模型

一种常见的关联关系是多对多，即表A的某条记录通过中间表 C 与表 B 的多条记录关联，反之亦然。比如一个用户有多种角色，反之一个角色对应多个用户。
 　　比如用户与角色组之间的关系，我们建立一个中间表 `role_user`，这个表关联用户表 `users` **(使用系统自带的users表)** 和 `roles` 表，如下

## 生成迁移文件和模型

```
php artisan make:migration create_roles_table --create=roles
php artisan make:migration create_role_user_table --create=role_user

php artisan make:model Role
// php artisan make:model RoleUser
```

### 编辑迁移文件

文件 `<project>/database/migrate/*_create_users_table.php` 内容如下

```
Schema::create('users', function (Blueprint $table) {
    $table->increments('id');
    $table->string('name');
    $table->string('email',30)->unique();
    $table->string('password');
    $table->rememberToken();
    $table->timestamps();
});
```

文件 `<project>/database/migrate/*_create_roles_table.php` 内容如下

```
Schema::create('roles', function (Blueprint $table) {
    $table->increments('id')->comment('角色ID');
    $table->string('name',20)->unique()->comment('角色英文名称');
    $table->char('display_name',20)->nullable()->comment('角色中文名称');
    $table->string('description',180)->nullable()->comment('角色简要描述');
    $table->timestamps();
});
```


文件 `<project>/database/migrate/*_create_role_user_table.php` 内容如下

```
Schema::create('role_user' , function(Blueprint $table){
    $table->unsignedInteger('user_id')->comment('用户id，关联users表');
    $table->unsignedInteger('role_id')->comment('角色id，关联roles表');

    $table->foreign('user_id')->references('id')->on('users')
        ->onUpdate('cascade')->onDelete('cascade');
    $table->foreign('role_id')->references('id')->on('roles')
        ->onUpdate('cascade')->onDelete('cascade');

    $table->primary(['user_id' , 'role_id']);
    $table->timestamps();
});
```

### 运行 php artisan 命令保存修改到数据库
~~~
php artisan migrate
~~~

> 执行上面的命令后数据库将生成五张表，
> migrations
> password_resets
> users
> roles
> role_user


## 定义关联关系和修改模型的 fillable 属性
在 `User` 模型中定义与 `Role` 模型的对应关系：

```
public function roles()
{
    /**
     * @param  string $related    关联关系
     * @param  string $table      关联中间表 不填这里默认为 role_user 规则为：Str::snake(class_basename($related)). '_' . Str::snake(class_basename($this)) 并在数据拼接前使用 sort() 排序；
     * @param  string $foreignKey 当前模型的外键id,不填默认为 user_id 规则为：Str::snake(class_basename($this)).'_'.$this->primaryKey;
     * @param  string $relatedKey 关联模型的外键id，不填默认为 role_id 规则为：Str::snake(class_basename($related)).'_'.$related->primaryKey
     * @param  string $relation   关联方法名 不填默认为roles
     */
    return $this->belongsToMany('App\Role' , 'role_user' , 'user_id' , 'role_id' , 'roles')->withTimestamps();
}
```

在 `Role` 模型中定义与 `User` 模型的关联对应关系：

```
public function users()
{
    /**
     * @param  string $related    关联关系
     * @param  string $table      关联中间表 不填默认为 role_user 规则为：Str::snake(class_basename($related)). '_' . Str::snake(class_basename($this)) 并在数据拼接前使用 sort() 排序；
     * @param  string $foreignKey 当前模型的外键id,不填默认为 role_id 规则为：Str::snake(class_basename($this)).'_'.$this->primaryKey;
     * @param  string $relatedKey 关联模型的外键id，不填默认为 user_id 规则为：Str::snake(class_basename($related)).'_'.$related->primaryKey
     * @param  string $relation   关联方法名 不填默认为 users
     */
    return $this->belongsToMany(User::class , 'role_user' , 'role_id' , 'user_id' , 'users')
                      ->withPivot(['created_at','updated_at']) // 中间表的字段，这里的中间表是 role_user
                      ->withTimestamps();
}
```

> 如果想要中间表自动维护 `created_at` 和 `updated_at` 时间戳，可在定义关联方法时加上 `withTimestamps()` 方法


## 使用 tinker 填充数据

修改 `/databases/factories/ModelFactory.php`，新增关联数据。

~~~
/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\User::class , function(Faker\Generator $faker){
    static $password;

    return [
        'name'           => $faker->name ,
        'email'          => $faker->unique()->safeEmail ,
        'password'       => $password ? : $password = bcrypt('secret') ,
        'remember_token' => str_random(10) ,
    ];
});

$factory->define(App\Role::class , function(Faker\Generator $faker){
    return [
        'name'         => $faker->name ,
        'display_name' => $faker->name ,
        'description'  => $faker->text(150) ,
    ];
});
$factory->define(App\RoleUser::class , function(Faker\Generator $faker){
    $user_ids = \App\User::pluck('id')->toArray();
    $role_ids = \App\User::pluck('id')->toArray();

    return [
        'user_id' => $faker->randomElement($user_ids) ,
        'role_id' => $faker->randomElement($role_ids)
    ];
});
~~~

使用 tinker 命令

~~~
php artisan tinker

## 进入到 tinker 界面执行如下命令
namespace App
factory(User::class,4)->create(); // 生成4个用户
factory(Role::class,4)->create() // 生成4条 role_user 表的测试数据
~~~


## 关联操作

### 新增数据

#### 将用户关联到角色

```    
$role_id = 2;
$user = \App\User::find(1);
$user->roles()->attach($role_id);
```

#### 将用户批量放入到角色

```
$role_ids = [1,3,4];
$user = \App\User::find(1);
$user->roles()->attach($role_ids);
```

### 查询数据

查询用户所拥有的角色

```
$user = \App\User::find(1);
$roles = $user->roles;
dd($roles->toArray());
```

查询角色下属的所有用户

```
$role = \App\Role::find(2);
$users = $role->users;
```

### 关联删除

将用户从角色中移除

```
$role_id = 1;
$user = \App\User::find(1);
$user->roles()->detach($role_id);
```

将用户从所有角色中移除

```
$user = \App\User::find(1);
$user->roles()->detach();
```

删除角色下的所有用户关联数据

```
$role = \App\Role::find(2);
$role->users()->delete();
```

### 更新数据

#### 把用户"同步"到角色中

```
$user = \App\User::find(1);
$user->roles()->sync([1,2,4]);
```

#### 把角色"同步"给用户

```
$role = \App\Role::find(3);
$role->users()->sync([1]);
```


> 如果在定义 `belongsToMany()` 关联关系的时候，同时想操作中间关联表的数据，这里指的是`role_user` 表，那么可以定义 `with->withPivot($columns)` （参数填写中间表的字段）
那么，我们可以在使用 `attach()` 方法的时候传入第二个参数进行数据的同步更新，例如：
> ```
> dd($user->roles()->attach($role_id,['created_at'=>'2019-04-24 06:08:22']));
> ```
> 当然，如果单独需要更新中间表，这里指的是`role_user` 表的字段，可以使用 `updateExistingPivot()`，例如：
> ```
> $role_id = 2;
> $user = \App\User::find(1);
> $user->roles()->updateExistingPivot($role_id,['created_at'=>'2019-04-24 06:08:22']);
> ```


[TOC]

### 一些方法

#### `toggle`

顾名思义，如果表中存在则删除数据，如果表中不存在则新增数据
```
$role_id = 2;
$user = \App\User::find(1);
$user->roles()->toggle($role_id);
```