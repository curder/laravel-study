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