# 模型关系

## 关联关系的最新/旧项

从 Laravel 8.42 开始，在 Eloquent 模型中，可以定义一个关系，该关系将获取另一个关系的最新（或最旧）项目。

```php
/**
 * Get the user's latest order.
 */
public function latestOrder()
{
    return $this->hasOne(Order::class)->latestOfMany();
}
 
/**
 * Get the user's oldest order.
 */
public function oldestOrder()
{
    return $this->hasOne(Order::class)->oldestOfMany();
}
```

## 关联数据排序

可以直接在 Eloquent 关系上指定 `orderBy()` 对数据进行默认排序。

```php
public function products()
{
    return $this->hasMany(Product::class);
}
 
public function productsByName()
{
    return $this->hasMany(Product::class)->orderBy('name');
}
```

## 条件关系

如果发现经常使用相同的关系和附加 `where` 条件，则可以创建单独的关系方法。

```php
public function comments()
{
    return $this->hasMany(Comment::class);
}
 
public function approvedComments()
{
    return $this->hasMany(Comment::class)->where('approved', 1);
}
```

## 将条件语句添加到多对多关系

在多对多关系中，可以使用 `wherePivot` 方法将 where 语句添加到数据中间表。

```php
class Developer extends Model
{
     // Get all clients related to this developer
     public function clients()
     {
          return $this->belongsToMany(Clients::class);
     }
 
     // Get only local clients
     public function localClients()
     {
          return $this->belongsToMany(Clients::class)
               ->wherePivot('is_local', true);
     }
}
```

## `havingRaw` 查询语句

可以在各个地方使用 RAW 数据库查询，包括在 `groupBy()` 之后使用 `havingRaw()` 函数。

```php
Product::groupBy('category_id')->havingRaw('COUNT(*) > 1')->get();
```

## `has` 多种关联关系查询

可以使用模型 `has()` 方法来查询两层甚至更深的关联关系。

```php
// Author -> hasMany(Book::class);
// Book -> hasMany(Rating::class);

Author::has('books.ratings')->get();
```

## `has` 条件

在 `hasMany()` 关联关系中，可以过滤掉具有指定数量的记录。

```php
// Author -> hasMany(Book::class)

$authors = Author::has('books', '>', 5)->get();
```

## `withDefault` 默认模型

可以在 `belongsTo` 关系中指定默认模型，以避免在调用它时出现致命错误。

例如：`$post->user` 不存在，当 `$post->user->name` 获取 `name` 时会抛出致命错误。

```php
public function user()
{
    return $this->belongsTo(User::class)->withDefault();
}
```

## saveMany 批量创建

如果有 `hasMany()` 关系，可以使用 `saveMany()` 从父对象中保存多个子项。

```php
$post = Post::find(1);

$post->comments()->saveMany([
    new Comment(['message' => 'First comment']),
    new Comment(['message' => 'Second comment']),
]);
```

## 多层预加载

可以在一条语句中预加载多个级别，在下面的示例中，不仅加载作者关系，还加载作者模型上的国家关系。

```php
// Book -> belongsTo(Author::class)
// Author -> belongsTo(Country::class)

$users = Book::with('author.country')->get();
```