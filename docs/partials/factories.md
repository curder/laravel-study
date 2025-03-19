# Factories 工厂

在测试应用程序或为数据库批量添加数据时，可能需要在数据库中插入一些记录。

Laravel 允许使用模型工厂为每个模型定义一组默认属性，而不是手动指定每列的值。

## 废弃状态 `trashed()`

如果模型可以软删除，可以调用内置的 `trashed` 状态方法来指示创建的模型应该已经是“软删除”了。

而无需手动定义 `trashed` 状态，因为它会自动可供所有工厂使用：

```php
User::factory()->trashed()->create();
```

## 生成唯一数据 `unique()`

在生成数据时，可以使用 `unique()` 方法来确保生成的数据是唯一的。

```php
public function definition(): array
{
    return [
        fake()->unique()->name(),
        fake()->unique()->safeEmail(),
        fake()->unique()->safePassword(),
    ];
}
```

## 可选数据 `optional()`

当数据库表结构存在 `nullable` 可选字段时，可以使用 `optional()` 方法来生成可选数据。

```php
fake()->optional(weight: 0.5, default: null)->name()
```

- `weight` 用于指定生成可选数据的概率，默认为 `0.5`。
- `default` 用于指定默认值。

## 有效性验证 `valid()`

为了确保该值满足某些条件，请传递一个可验证输出的可调用函数，如果验证器失败，生成器将重试。

```php
fake()->valid(validator: fn($exp) => $exp < 100, maxRetries: 100)->randomNumber(),
```

- `validator` 用于指定验证器函数，该函数应该接受一个参数并返回一个布尔值，当表达式的值为真时，返回值并使用它作为生成的最终值。
- `maxRetries` 用于指定最大重试次数，如果超过这个次数生成的值仍然不满足回调函数，则会抛出 `OverflowException` 的错误。

## 工厂回调

### afterCreating

在使用工厂生成数据时，可以提供工厂回调函数以在插入记录后执行某些操作。

```php
use App\Models\User;
use App\Models\Account;

User::factory()->afterCreating(function (User $user, $faker) {
    $user->account()->save(Account::factory()->make());
})->create();
```

> 在创建用户的同时，创建一个关联的账户记录。

### afterMaking

在生成数据时，可以提供工厂回调函数以在生成记录后执行某些操作。

```php
User::factory()->afterMaking(function(User $user) {
    // some logic
})->make();
```

> **注意：** `make` 方法不会实际生成数据量记录。

工厂回调不仅可以在调用的时候指定，还可以在工厂类中定义。

### 工厂类定义回调

- `configure()` 方法

  ```php
  namespace Database\Factories;
   
  use App\Models\User;
  use Illuminate\Database\Eloquent\Factories\Factory;
   
  class UserFactory extends Factory
  {
      /**
       * Configure the model factory.
       */
      public function configure(): static
      {
          return $this->afterMaking(function (User $user) {
              // ...
          })->afterCreating(function (User $user) {
              // ...
          });
      }
   
      // ...
  }
  ```

- `state()` 方法

  也可以在状态方法中注册工厂回调来执行特定于给定状态的回调。

  ```php
  public function unverified(): static
  {
      return $this->state(fn (array $attributes) => [
          'email_verified_at' => null,
      ])->afterMaking(function (User $user) {
          // ...
      })->afterCreating(function (User $user) {
          // ...
      });
  }
  ```

## 生成图片 `image()`

工厂不仅可以生成文本数据，还可以使用 [`image` 方法](https://fakerphp.github.io/formatters/image/) 在本地生成对应的图片。

```php
public function definition(): array
{
    $avatar_path = storage_path('app/public/images/users/avatar');
    File::isDirectory($avatar_path) || File::makeDirectory($avatar_path, recursive: true);

    return [
        // ...
        'avatar' => fake()->image(dir: $avatar_path, width: 128, height: 128)
    ];
}
```

或者使用自定义方法 `withAvatar()` 配合工厂回调 `afterCreating()` 精确的创建头像。

```php
<?php

// ...
final class UserFactory extends Factory
{
    //...
    public function withAvatar(): static
    {
        return $this->afterCreating(function (User $user) {
            $avatar_path = storage_path('app/public/images/users/avatar');
            File::isDirectory($avatar_path) || File::makeDirectory($avatar_path, recursive: true);

            $avatar = fake()->image(dir: $avatar_path, width: 128, height: 128);
            $user->update(['avatar' => $avatar]);
        });
    }
}
```

在使用工厂类创建数据的时候需要调用 `withAvatar()` 方法。

```php
User::factory()
    ->count(10)
    ->withAvatar() // [!code focus]
    ->create();
```

## 序列 Sequence

有时可能希望为每个创建的模型替换给定模型属性的值，可以通过将状态转换定义为序列来实现此目的。

::: code-group
```php [state 常规用法]
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Sequence;

User::factory()->count(10)->state(
    new Sequence(
        ['is_admin' => true],
        ['is_admin' => false],
    )
)->make();
```

```php [state 使用闭包]
User::factory()->count(10)->state(
    new Sequence(function(Sequence $sequence) {
        return ['is_admin' => $sequence->index]; // 0, 1, 2, ...
    })
)->make();
```

```php [sequence 常规用法]
use App\Models\User;

User::factory()->count(10)->sequence(
    ['is_admin' => true],
    ['is_admin' => false]
)->make();
```

```php [sequence 使用闭包]
User::factory()->count(10)->sequence(
    fn (Sequence $sequence) => ['is_admin' => $sequence->index] // 0, 1, 2, ...
)->make();
```
:::

## 创建模型且不提交事件

### 使用 `create*Quietly` 方法

- 创建一条模型数据

    ```php
    Post::factory()->createOneQuietly();
    ```

- 创建多条模型数据

  ```php
  Post::factory()->count(3)->createQuietly();

  Post::factory()->createManyQuietly([
    ['message' => 'A new comment'],
    ['message' => 'Another new comment'],
  ]);
  ```
  
### 使用 `withoutEvents` 方法

如果想使用 `Factory` 创建多个记录而不触发任何事件，可以将代码包装在 `withoutEvents` 闭包中。

```php
Post::withoutEvents(function () {
    return Post::factory()->count(50)->create();
});
```

## 关联关系 Relationships

### `has()` 方法

假如应用程序有一个 `App\Models\User` 模型和一个 `App\Models\Post` 模型，并且 `User` 模型定义了 `hasMany` 与 `Post` 的关系。

使用工厂提供的 `has` 方法创建一个拥有三个帖子的用户，创建用户的同时创建对应的帖子。

```php
use App\Models\Post;
use App\Models\User;

User::factory()
    ->has(Post::factory()->count(3))
    ->create();
```

> `has` 方法第二个参数是关联关系的名称，如有必要的话可以明确指定要操作的关系的名称 `posts`。
>
> ```php
> User::factory()->has(Post::factory()->count(3), 'posts')->create(); 
> ```

此外，如果状态更改需要访问父模型，可以传递基于闭包的状态转换：

```php
User::factory()
      ->has(
          Post::factory()
              ->count(3)
              ->state(
                fn (array $attributes, User $user) => ['user_type' => $user->type]
              )
      )
      ->create();
```

#### 魔术方法 `has*()`

为了方便起见，可以使用的魔法工厂关系方法来建立 `posts` 关系。例如创建用户的同时创建关联的三个帖子：

```php
User::factory()
    ->hasPosts(3)
    ->create();
```

当使用魔术方法创建工厂关系时，也可以传递一组属性来覆盖相关模型：

```php
User::factory()
    ->hasPosts(3, [
        'published' => false,
    ])
    ->create();
```

同样当状态更改需要访问父模型，可以提供基于闭包的状态转换：

```php
User::factory()
    ->hasPosts(3, function (array $attributes, User $user) {
        return ['user_type' => $user->type];
    })
    ->create();
```

### `for()` 方法

`for` 方法可用于定义工厂创建的模型所属的父模型。

例如，可以创建 `App\Models\Post` 属于单个用户的三个模型实例：

```php
use App\Models\Post;
use App\Models\User;
 
Post::factory()
    ->count(3)
    ->for(User::factory()->state([
        'name' => 'Jessica Archer',
    ]))
    ->create();
```

如果已经存在父模型实例，则可以将模型实例传递给 `for` 方法：

```php
$user = User::factory()->create();
 
Post::factory()
    ->count(3)
    ->for($user)
    ->create();
```

#### 魔术方法 `for*()`

```php
Post::factory()
    ->count(3)
    ->forUser([
        'name' => 'Jessica Archer',
    ])
    ->create();
```

<!-- markdownlint-disable MD013 -->
更多 [多对多](https://laravel.com/docs/master/eloquent-factories#many-to-many-relationships) 和 [多态关系](https://laravel.com/docs/master/eloquent-factories#polymorphic-relationships) 可以查看 Laravel 官方文档。
<!-- markdownlint-enable MD013 -->
