# DB 模型和 Eloquent


## orderByRaw 原始查询排序

可以传递原始查询来对结果进行排序。 例如，按照任务在截止日期之前完成的时间对任务进行排序。

```php {4}
// 按任务在截止日期之前完成对任务进行排序
Task::query()
    ->whereNotNull('completed_at')
    ->orderByRaw('due_at - completed_at DESC')
    ->get();
```

## 𝘄𝗵𝗲𝗿𝗲𝗕𝗲𝘁𝘄𝗲𝗲𝗻 获取两个时间之间的数据

使用 `𝘄𝗵𝗲𝗿𝗲𝗕𝗲𝘁𝘄𝗲𝗲𝗻` 加载两个时间戳之间的记录。

```php
// 加载两个时间戳之间完成的任务
Task::whereBetween('completed_at', [
    $request->from ?? '2023-01-01',
    $request->to ??  today()->toDateTimeString(),
]);
```

## whereIntegerInRaw

当目标值为**整型**时，不要使用 `𝘄𝗵𝗲𝗿𝗲𝗜𝗻()` 方法加载大范围数据，而是使用  `𝘄𝗵𝗲𝗿𝗲𝗜𝗻𝘁𝗲𝗴𝗲𝗿𝗜𝗻𝗥𝗮𝘄()` 比 `𝘄𝗵𝗲𝗿𝗲𝗜𝗻()` 更快。

```php
<?php

    Product::whereIn('id', range(1, 50))->get(); // [!code --]
    Product::whereIntegerInRaw('id', range(1, 50))->get(); // [!code ++]
```

## rawValue

Laravel 9.37 有一个新的 `rawValue()` 方法来从 SQL 表达式中获取值。

```php
$first = TripModel::orderBy('date_at', 'ASC')
     ->rawValue('YEAR(`date_at`)');

$last = TripModel::orderBy('date_at', 'DESC')
     ->rawValue('YEAR(`date_at`)');

$fullname = UserModel::where('id', $id)
     ->rawValue('CONCAT(`first_name`, " ", `last_name`)');
```


## scope 其他关系的模型范围

可以使用模型范围来定义一个相关的模型关联关系。

::: code-group
```php [app/Models/Course.php] {8}
public function lessons(): HasMany
{
    return $this->hasMany(Lesson::class);
}
 
public function publishedLessons(): HasMany
{
    return $this->lessons()->published();
}
```

```php [app/Models/Lesson.php]
public function scopePublished($query)
{
    return $query->where('is_published', true);
}
```
:::


## DB::afterCommit 事务处理

使用 `DB::afterCommit()` 方法，可以编写仅在事务提交时执行的代码，以及在事务回滚时丢弃的代码。

如果没有事务时，代码会立即执行。

::: code-group
```php [模型逻辑]
class User extends Model
{
    protected static function booted()
    {
        static::created(function (self $user) {
            // 仅当满足事务已提交条件时才会发送电子邮件
            DB::afterCommit(function () use ($user) {
                Mail::send(new WelcomeEmail($user));
            });
        });
    }
}
```

```php [业务逻辑]
DB::transaction(function () {
    $user = User::create([...]);
 
    $user->teams()->create([...]);
});
```
:::


## `withoutTimestamps` 执行操作时不修改 `updated_at` 字段

从 Laravel 9.31 开始可用，如果想在执行模型操作的情况下让模型的 `Updated_at` 时间戳不被修改，可以在给定的模型方法 `withoutTimestamps` 的闭包内对模型进行操作。

```php
$user = User::query()->first();

// `updated_at` 字段将不会变更
User::withoutTimestamps(
     fn () => $user->update(['reserved_at' => now()])
);
```


## toBase() 合并集合

Eloquent 集合的 `merge` 方法使用 `id` 来避免重复的模型。 

但如果合并不同模型的集合，可能会导致意想不到的结果。

建议改用 `toBase()` 方法。

```php
$videos = Video::all();
$images = Image::all();

// 如果存在与图像具有相同 ID 的视频，它们将被替换，最终会丢失视频
$allMedia = $videos->merge($images);

// 在 Eloquent 集合中调用 `toBase()` 以使用基本合并方法
$allMedia = $videos->toBase()->merge($images);
```

## 在 MySQL 上使用 Laravel 进行全文搜索


::: code-group
```php {6} [迁移文件]
Schema::create('comments', function (Blueprint $table) {
     $table->id();
     $table->string('title');
     $table->text('description');
 
     $table->fullText(['title', 'description']);
});
```

```php [使用方法]
// 全文搜索
Comment::whereFulltext(['title', 'description'], 'something')->get();

// 使用 expanded 执行更大的查询
Comment::whereFulltext(['title', 'description'], 'something', ['expanded' => true])->get();

// 搜索 something 内容并排除 other 内容
Comment::whereFulltext(['title', 'description'], '+something -else', ['mode' => 'boolean'])->get();
```
:::


## 原始查询中使用绑定

可以将绑定数组传递给大多数原始查询方法以避免 SQL 注入。

```php
// 下面的方式容易受到 SQL 注入攻击
$fullname = request('full_name'); // [!code --]
User::whereRaw("CONCAT(first_name, last_name) = $fullName")->get(); // [!code --]
 
// 使用参数绑定
User::whereRaw("CONCAT(first_name, last_name) = ?", [request('full_name')])->get(); // [!code ++]
```

## clone 重用或克隆查询

通常，在处理实际查询请求时需要从过滤查询中进行多次查询。

所以，大多数时候会使用 `query()` 方法， 比如编写一个查询来获取今天创建的活跃和非活跃产品：

```php {9,10}
$query = Product::query();
 
 
$today = request()->q_date ?? today();
if ($today) {
    $query->where('created_at', $today);
}

$active_products = $query->clone()->where('status', 1)->get(); // 它不会修改 $query
$inactive_products = $query->clone()->where('status', 0)->get(); // 所以我们将从 $query 获取非活跃的产品
```

通过重用这个 `$query` 对象来进行多次查询。

因此需要在执行任何 `$query` 修改操作之前克隆此 `$query`。


## where 日期方法

在 Eloquent 中，使用函数 `whereDay()`、`whereMonth()`、`whereYear()`、`whereDate()` 和 `whereTime()` 来过滤日期。

```php
Product::whereDay('created_at', '31')->get();
Product::whereMonth('created_at', '12')->get();
Product::whereYear('created_at', date('Y'))->get();
Product::whereDate('created_at', '2018-01-31')->get();
Product::whereTime('created_at', '=', '14:13:58')->get();
```


## increments 和 decrements 增减某个字段

如果需要某个表中的某些数据库列，只需使用 `increment()` 函数。

```php
Post::find($post_id)->increment('view_count');
User::find($user_id)->increment('points', 50); // 一次增加 50
```

