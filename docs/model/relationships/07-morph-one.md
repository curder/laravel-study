# 多态一对一

一对一的多态关联和简单的一对一关联类似，不同之处在于目标模型在单个关联下可以归属于多种不同的模型。

例如，`Post` 和 `User` 可以共享与 `Image` 模型的多态关联。

使用一对一多态关联，可以拥有一个可用于博客文章和用户账户的唯一图片列表。

## 软件版本

- Laravel Version 5.4.19

- PHP Version 7.0.8

## 表结构

```text
posts
    id - integer
    name - string

users
    id - integer
    name - string

images
    id - integer
    url - string
    imageable_id - integer
    imageable_type - string
```

注意 `images` 表中的 `imageable_id` 和 `imageable_type` 字段，`imageable_id` 字段存储的是文章或用户的 ID 值，而 `imageable_type` 字段存储的是归属父模型的类名。

访问 `imageable` 关联时，`Eloquent` 使用 `imageable_type` 字段来判定返回哪种类型的父模型（`Post` 还是 `User`）。

## 关键字

- `morphTo()`

- `morphOne()`

## 定义 Eloquent 关联关系

- 在 `Image` 模型中定义关联关系

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    /**
     * Get all of the owning imageable models.
     */
    public function imageable()
    {
        return $this->morphTo();
    }
}
```

- 在 `Post` 模型中定义一对一关联关系

```php
<?php

class Post extends Model
{
    /**
     * Get the post's image.
     */
    public function image()
    {
        return $this->morphOne('App\Image', 'imageable');
    }
}
```

- 在 `User` 模型中定义一对一关联关系

```php
<?php

class User extends Model
{
    /**
     * Get the user's image.
     */
    public function image()
    {
        return $this->morphOne('App\Image', 'imageable');
    }
}
```

## 关联操作

### 新增关联数据

```php
$user->image()->save($image); // 执行关联写入操作

$post->image()->save($image);
```

### 查询关联数据

```php
$post = App\Post::find(1);
$user = App\User::first();

$user->image;
$image = $post->image; // 通过 image 动态属性获取关联数据
```

还可以从多态模型中通过访问调用 `morphTo` 的方法名来获取其归属的父模型。在这个例子中，就是 `Image` 模型的 `imageable` 方法。

因此，我们可以通过动态属性的方式来访问该方法

```php
$image = App\Image::find(1);

$imageable = $image->imageable;
```

> `Image` 模型上的 `imageable` 关联将会返回 `Post` 或 `User` 实例，这取决于哪中模型拥有该图片。

### 更新关联数据

```php
$user = \App\User::first();
$image = $user->image; // 获取到关联信息
$image->url = 'new url';
$image->save();

// 或者使用链式调用
\App\User::first()->image()->save(['url' => 'new url']);
```

### 删除关联数据

```php
$user = \App\User::first();
$user->image->delete(); // 删除用户 users 表和 images 相关记录
```
