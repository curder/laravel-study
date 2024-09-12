# 模型关系的泛型表示

在 Laravel 11 中，模型关系可以通过泛型进行类型表示，结合 PHP 8.1+ 的泛型特性来增强代码的类型安全性和自动补全。

下面是 Laravel 11 中各种模型关系的泛型表示方式，包括 `Factory` 工厂类的泛型表示。

### 1. **HasOne**
```php
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * @return HasOne<Profile>
 */
public function profile(): HasOne
{
    return $this->hasOne(Profile::class);
}
```
- `HasOne<Profile>` 表示当前模型拥有一个 `Profile` 关系。

### 2. **HasMany**
```php
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @return HasMany<Comment>
 */
public function comments(): HasMany
{
    return $this->hasMany(Comment::class);
}
```
- `HasMany<Comment>` 表示当前模型拥有多个 `Comment` 实体。

### 3. **BelongsTo**
```php
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @return BelongsTo<User, Post>
 */
public function user(): BelongsTo
{
    return $this->belongsTo(User::class);
}
```
- `BelongsTo<User, Post>` 表示 `Post` 模型从属于 `User` 模型。

### 4. **BelongsToMany**
```php
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * @return BelongsToMany<Role>
 */
public function roles(): BelongsToMany
{
    return $this->belongsToMany(Role::class);
}
```
- `BelongsToMany<Role>` 表示当前模型与多个 `Role` 模型有多对多的关系。

### 5. **HasOneThrough**
```php
use Illuminate\Database\Eloquent\Relations\HasOneThrough;

/**
 * @return HasOneThrough<User, Account>
 */
public function user(): HasOneThrough
{
    return $this->hasOneThrough(User::class, Account::class);
}
```
- `HasOneThrough<User, Account>` 表示通过 `Account` 模型找到 `User` 模型的关系。

### 6. **HasManyThrough**
```php
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

/**
 * @return HasManyThrough<Post, Country>
 */
public function posts(): HasManyThrough
{
    return $this->hasManyThrough(Post::class, Country::class);
}
```
- `HasManyThrough<Post, Country>` 表示通过 `Country` 模型找到多个 `Post` 模型的关系。

### 7. **MorphTo**
```php
use Illuminate\Database\Eloquent\Relations\MorphTo;

/**
 * @return MorphTo<Model, Comment>
 */
public function commentable(): MorphTo
{
    return $this->morphTo();
}
```
- `MorphTo<Model, Comment>` 表示一个多态关系，可以关联多个不同类型的模型。

### 8. **MorphOne**
```php
use Illuminate\Database\Eloquent\Relations\MorphOne;

/**
 * @return MorphOne<Image>
 */
public function image(): MorphOne
{
    return $this->morphOne(Image::class, 'imageable');
}
```
- `MorphOne<Image>` 表示一个多态关系，当前模型拥有一个 `Image`。

### 9. **MorphMany**
```php
use Illuminate\Database\Eloquent\Relations\MorphMany;

/**
 * @return MorphMany<Comment>
 */
public function comments(): MorphMany
{
    return $this->morphMany(Comment::class, 'commentable');
}
```
- `MorphMany<Comment>` 表示一个多态关系，当前模型可以有多个 `Comment`。

### 10. **MorphToMany**
```php
use Illuminate\Database\Eloquent\Relations\MorphToMany;

/**
 * @return MorphToMany<Tag>
 */
public function tags(): MorphToMany
{
    return $this->morphToMany(Tag::class, 'taggable');
}
```
- `MorphToMany<Tag>` 表示当前模型与多个 `Tag` 模型通过多态关系进行关联。

### **Factory 工厂类的泛型表示**

在 Laravel 11 中，工厂类也支持泛型，通常用于生成模型实例。通过引入泛型，可以为工厂类定义更精确的类型。

::: code-group
```php [UserFactory]
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<User> // [!code ++]
 */
class UserFactory extends Factory
{
    protected $model = User::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->safeEmail(),
            'password' => bcrypt('password'),
        ];
    }
}
```

```php [User]
<?php

namespace App\Models;

use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class User
{
    /** @mixin HasFactory<UserFactory> // [!code ++]
    use HasFactory;
    // ...
}
```
:::

- `Factory<User>` 表示这是一个生成 `User` 模型的工厂类。
- `HasFactory<UserFactory>` 使用 `@mixin` 注解来指明 `User` 类混入了 `HasFactory` 特性，并且指定了 `UserFactory` 工厂类

通过这些泛型表示，Laravel 11 提供了更强大的类型安全性以及更好的 IDE 类型提示功能，使得代码更加简洁、可靠和易于维护。