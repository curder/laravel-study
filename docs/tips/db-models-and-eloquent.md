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

## whereRaw 原始查询

使用像 `whereRaw()` 方法这样的 SQL 原始查询，直接在查询中进行一些特定于数据库的计算，而不是在 Laravel 中，通常结果会更快。

例如，如果想获得注册后 30 天以上活跃的用户

```php
User::where('active', 1)
    ->whereRaw('TIMESTAMPDIFF(DAY, created_at, updated_at) > ?', 30)
    ->get();
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

## 多个查询范围

可以在 Eloquent 查询中使用多个范围。

::: code-group
```php [控制器逻辑]
User::registeredWithinDays(30)->active()->get();
```

```php [模型定义]
public function scopeActive($query) {
    return $query->where('active', 1);
}
 
public function scopeRegisteredWithinDays($query, $days) {
    return $query->where('created_at', '>=', now()->subDays($days));
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

## whereDate 

使用 `whereDate()` 获取今天的记录，可以使用 `Carbon` 的 `now()` ，它会自动转换为日期。无需执行 `->toDateString()` 方法进行日期格式的转换。

```php
User::whereDate('created_at', now()->toDateString())->get(); // [!code --]
User::whereDate('created_at', now())->get(); // [!code ++]
```


## increments 和 decrements 增减某个字段

如果需要某个表中的某些数据库列，只需使用 `increment()` 函数。

```php
Post::find($post_id)->increment('view_count');
User::find($user_id)->increment('points', 50); // 一次增加 50
```

## 没有时间戳列

如果数据库表不包含时间戳字段 `created_at` 和 `updated_at`，可以设置模型属性 `$timestamps = false` 。

```php
class Post extends Model
{
    public $timestamps = false;
}
```

## 更改默认时间戳字段

如果使用非 Laravel 数据库并且时间戳列的命名不同怎么办？比如有 `create_time` 和 `update_time`。可以在模型中指定它们：

```php
class Post extends Model
{
    const CREATED_AT = 'create_time';
    const UPDATED_AT = 'update_time';
}
```

## 软删除数据的恢复

在使用模型的软删除时，可以使用 `restore()` 方法恢复多行。

```php
Post::onlyTrashed()->where('author_id', 1)->restore();
```

## all 数据列

当调用 Eloquent 的 Model::all() 时，可以指定返回哪些列。

```php
User::all(['id', 'name', 'email']);
```

## firstOrFail

firstOrFail()方法，如果没有找到查询的记录，它会返回404页面。

```php
User::where('email', 'example@example.com')->firstOrFail();
```

## 更改列名

在 Eloquent 查询生成器中，可以通过“as”来返回具有不同名称的任何列，就像在普通 SQL 查询中一样。

```php
DB::table('users')->select('name', 'email as user_email')->get();
```


## 修改查询结果

Eloquent 查询后，可以使用集合中的 `map()` 方法修改行。

```php
User::query()->where('active', true)->get()->map(function (User $user) {
    $user->some_column = some_function($user);
    return $user;
});
```

## latest 或 oldest 排序

```php
User::orderBy('created_at', 'desc')->get(); // [!code --]
User::latest()->get(); //[!code ++]
```

默认情况下，`latest()` 方法将按 `created_at` 字段进行排序。

有一个相反的方法 `oldest()`，它会按 `created_at` 升序排序：

```php
User::oldest()->get();
```

此外，还可以指定另一个数据列来排序。使用 `id`，可以这样做：

```php
User::latest('id')->first();
```

## 创建记录时自动列值

如果想在创建记录时生成一些数据库列值，请将其添加到模型的 `boot()` 方法中。

例如，如果有一个 `position` 字段并且想要将下一个可用位置分配给新记录（例如 `Country::max('position') + 1`）。

```php
class Country extends Model
{
    protected static function boot()
    {
        parent::boot();

        Country::creating(function($model) {
            $model->position = Country::max('position') + 1;
        });
    }
}
```

## groupBy 按首字母分组

可以在 `groupBy` 接收自定义回调中按任何自定义条件对查询结果进行分组，以下是如何按公司名的首字母进行分组

```php
Company::all()->groupBy(
    fn ($item) => $item->name[0]
);
```

## 从不更新列

如果有一个数据库列，只想设置一次并且不再更新，可以使用 mutator 对模型设置。

::: code-group

```php [&gt;= Laravel 9]
use Illuminate\Database\Eloquent\Casts\Attribute;
 
class User extends Model
{
    protected function email(): Attribute
    {
        return Attribute::make(
            set: fn ($value, $attributes) => $attributes['email'] ?? $value,
        );
    }
}
```

```php [&lt; Laravel 9]
class User extends Model
{
    public function setEmailAttribute($value)
    {
        if (isset($this->attributes['email']) && ! is_null($this->attributes['email'])) {
            return;
        }
        $this->attributes['email'] = $value;
    }
}
```
:::