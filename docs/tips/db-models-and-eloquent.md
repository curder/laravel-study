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

## 使用数据库事务

如果执行了两个数据库操作，它们中的一个可能会出错，此时应该将业务逻辑回滚，建议使用 `DB::transaction()`。

```php
DB::transaction(function () {
    DB::table('users')->update(['votes' => 1]);
 
    DB::table('posts')->delete();
});
```


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

## 更改 created_at 和 updated_at 的格式

可以在模型中添加一个方法，如下所示

::: code-group
```php [&gt;= Laravel 9]
protected function createdAtFormatted(): Attribute
{
    return Attribute::make(
        get: fn ($value, $attributes) => $attributes['created_at']->format('Y-m-d H:i:s'),
    );
}

protected function updatedAtFormatted(): Attribute
{
    return Attribute::make(
        get: fn ($value, $attributes) => $attributes['updated_at']->format('Y-m-d H:i:s'),
    );
}
```

```php [&lt;= Laravel 8]
public function getCreatedAtFormattedAttribute()
{
   return $this->created_at->format('Y-m-d H:i:s');
}

public function getUpdatedAtFormattedAttribute()
{
   return $this->updated_at->format('Y-m-d H:i:s');
}
```
:::

可以在需要时使用 `$entry->created_at_formatted`  或者 `$entry->updated_at_formatted`。


## 软删除数据的恢复

在使用模型的软删除时，可以使用 `restore()` 方法恢复多行。

```php
Post::onlyTrashed()->where('author_id', 1)->restore();
```

## 使用软删除查询生成器

```php
// 不排除软删除的条目
User::withTrashed()->get();

// 仅软删除条目
User::onlyTrashed()->get();
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


## firstOr 失败时执行任何操作

查找记录时，如果未找到，可能需要执行一些自定义的操作。

除了 `->firstOrFail()`方法抛出 404 之外，还可以在失败时使用 `->firstOr(function() { ... })`。

```php
Flight::where('legs', '>', 3)->firstOr(function () {
    // ...
})
```

## findOrFail 

使用 `firstOrFail()` 方法检查记录是否存在。

```php
$product = Product::findOrFail($id); // shows 404 if not found

$product->update($productDataArray);
```

findOrFail 方法还接受 id 列表。如果没有找到这些 id 中的任何一个，则它“失败”。 

```php
// 当无法找到所有用户时，会抛出错误
User::findOrFail([1, 2, 3, 99]);
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

## 查找数组

`find()` 可以接受多个参数，然后它返回找到的所有记录的 Collection，而不仅仅是一个 Model：

```php
// 返回 Eloquent 模型
$user = User::find(1);

// 返回 Eloquent 集合
$users = User::find([1, 2, 3]);
```

使用 `find()` 替换 `whereIn()`：

```php
Product::whereIn('id', $this->productIDs)->get(); // [!code --]
Product::find($this->productIDs); // [!code ++]
```

## 查找多个并返回特定列
 
`find()` 可以接受多个参数，然后返回指定列找到的所有记录的集合，而不是模型的所有列：

```php
// 将仅返回包含名字和电子邮件的 Eloquent 模型
User::find(1, ['first_name', 'email']);

// 将仅返回包含名字和电子邮件的 Eloquent Collection
User::find([1,2,3], ['first_name', 'email']);
```

## whereKey 按主键查找

使用 `whereKey()` 方法查找多个记录，该方法负责确定哪个字段正是您的主键（id 是默认值，但可以在 Eloquent 模型中覆盖它）

```php
User::whereKey([1, 2, 3])->get();
```


## 使用 UUID 代替自动递增


在模型中使用自动递增 ID。

迁移文件：

```php
Schema::create('users', function (Blueprint $table) {
    // $table->increments('id');
    $table->uuid('id')->unique();
});
```

::: code-group
```php {6} [&gt;= Laravel 9]
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
 
class Article extends Model
{
    use HasUuids;
 
    // ...
}
 
$article = Article::create(['title' => 'Traveling to Europe']);
 
$article->id; // "8f8e8478-9035-4d23-b9a7-62f4d2612ce5"
```

```php [&lt;= Laravel 8 and PHP &gt;= 7.4.0]
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
 
class User extends Model
{
    public $incrementing = false;
    protected $keyType = 'string';
 
    protected static function boot()
    {
        parent::boot();
 
        self::creating(fn (User $model) => $model->attributes['id'] = Str::uuid());
        self::saving(fn (User $model) => $model->attributes['id'] = Str::uuid());
    }
}
```

```php [&lt;= Laravel 8 and PHP &lt; 7.4.0]
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
 
class User extends Model
{
    public $incrementing = false;
    protected $keyType = 'string';
 
    protected static function boot()
    {
        parent::boot();
 
        self::creating(function ($model) {
             $model->attributes['id'] = Str::uuid();
        });
        self::saving(function ($model) {
             $model->attributes['id'] = Str::uuid();
        });
    }
}
```
:::


## addSelect 子查询

从 Laravel 6 开始，可以在 Eloquent 语句中使用 `addSelect()`，并对添加的列进行一些计算。


```php
Destination::addSelect([
    'last_flight' => Flight::select('name')
        ->whereColumn('destination_id', 'destinations.id')
        ->orderBy('arrived_at', 'desc')
        ->limit(1)
])->get();
```


## makeHidden 隐藏列

在进行 Eloquent 查询时，如果想隐藏特定字段不被返回，最快的方法之一是在 Collection 结果上添加 `->makeHidden()` 方法。

```php
User::all()->makeHidden(['email_verified_at', 'deleted_at']);
```

## 捕获SQL错误

如果想捕获 Eloquent Query 异常，请使用特定的 QueryException 而不是默认的 Exception 类，将能够获得错误的确切 SQL 代码

```php
try {
    // Some Eloquent/SQL statement
} catch (\Illuminate\Database\QueryException $e) {
    if ($e->getCode() === '23000') { // integrity constraint violation
        return back()->withError('Invalid data');
    }
}
```

## DB::statement() 查询方式

如果需要执行一个简单的 SQL 查询，但没有得到任何结果。

比如更改数据库中的某些内容，可以只执行 `DB::statement()`

```php
DB::statement('DROP TABLE users');

DB::statement('ALTER TABLE projects AUTO_INCREMENT=123');
```

## `updateOrCreate` 更新或创建

需要检查记录是否存在，然后更新它，或者创建一条新记录。

::: code-group

```php [updateOrCreate 方法]
Flight::updateOrCreate(
    ['departure' => 'Oakland', 'destination' => 'San Diego'],
    ['price' => 99, 'discounted' => 1]
);
```

```php [旧的方式]
Flight::where('departure', 'Oakland')
    ->where('destination', 'San Diego')
    ->first();

if ($flight) {
    $flight->update(['price' => 99, 'discounted' => 1]);
} else {
    $flight = Flight::create([
        'departure' => 'Oakland',
        'destination' => 'San Diego',
        'price' => 99,
        'discounted' => 1
    ]);
}
```
:::


## 保存时清空缓存

如果有像提供集合的帖子这样的缓存键，并且想在新建或更新时忘记该缓存键，可以在模型上调用静态保存的函数：

```php
class Post extends Model
{
    // 存储或更新时忘记缓存键
    public static function boot()
    {
        parent::boot();

        static::saved(function () {
           Cache::forget('posts');
        });
    }
}
```

## replicate 复制模型

如果有两个非常相似的模型（例如送货地址和帐单地址）并且需要将一个模型复制到另一个模型，则可以使用 `replicate()` 方法并随后更改一些属性。

```php
$shipping = Address::create([
    'type' => 'shipping',
    'line_1' => '123 Example Street',
    'city' => 'Victorville',
    'state' => 'CA',
    'postcode' => '90001',
]);
 
$billing = $shipping->replicate()->fill([
    'type' => 'billing'
]);
 
$billing->save();
```

## forceFill 强制填充

忽略 `$fillable` 的配置并无论如何都会执行。

```php
$team->forceFill(['name' => $request->name])
```

## 如果条件失败则中止

`abort_if()` 可以用作检查条件并抛出错误页面的更短方法。

```php
$product = Product::findOrFail($id);

/* abort_if(CONDITION, ERROR_CODE) */
abort_if ($product->user_id != auth()->user()->id, 403)
```

## explain() 有关查询的额外信息

可以对查询调用 `explain()` 方法来了解有关查询的额外信息。

```php
Book::where('name', 'Ruskin Bond')->explain()->dd();
```


## `donstExist()` 方法


```php
// 1. 如果它为真
if (0 === $model->whereStatus('pending')->count()) {}

// 2. 也可以使用这种方式
if (! $model->whereStatus('pending')->exists()) {}

// 3. 使用更简洁的方式
if ($model->whereStatus('pending')->doesntExist()) {}
```


## getOriginal 获取原始属性

修改 Eloquent 记录后获取原始属性，可以通过调用 `getOriginal()` 获取原始属性。

```php
$user = \App\Models\User::query()->first();
$user->name; // John
$user->name = "Peter"; // Peter

$user->getOriginal('name'); // John
$user->getOriginal(); // Original $user record
```

## 简单的数据库恢复方法

使用 .sql 转储文件在 Laravel 中植入数据库的简单方法：

```php
DB::unprepared(
    file_get_contents(__DIR__ . './dump.sql')
);
```

## 查询构造函数的 crossJoin 子查询

```php
use Illuminate\Support\Facades\DB;
 
$totalQuery = DB::table('orders')->selectRaw('SUM(price) as total');
 
DB::table('orders')
    ->select('*')
    ->crossJoinSub($totalQuery, 'overall')
    ->selectRaw('(price / overall.total) * 100 AS percent_of_total')
    ->get();
```

## orderByPivot 根据中间表排序

`BelongsToMany::orderByPivot()` 允许直接对 `BelongsToMany` 关系查询的结果进行排序。

```php
class Tag extends Model
{
    public $table = 'tags';
}
 
class Post extends Model
{
    public $table = 'posts';
 
    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'post_tag', 'post_id', 'tag_id')
            ->using(PostTagPivot::class)
            ->withTimestamps()
            ->withPivot('flag');
    }
}
 
class PostTagPivot extends Pivot
{
    protected $table = 'post_tag';
}
 

Post::findOrFail($id)->tags()->orderByPivot('flag', 'desc')->get();
```

## sole 查找单个记录

`sole()` 方法将仅返回一条符合条件的记录。

- 如果没有找到这样的条目，则将抛出 `NoRecordsFoundException`。
- 如果找到多个记录，则会抛出 `MultipleRecordsFoundException`。

```php
Product::query()->whereRef('#123')->sole();
```

## chunkMap 分割块

与 `each()` 方法类似，但更容易使用。自动将结果分割成多个部分。


```php
User::orderBy('name')->chunkMap(fn ($user) => [
    'id' => $user->id,
    'name' => $user->name,
]), 25);
```

## updateQuietly 更新模型而不分派事件

有时需要更新模型而不发送任何事件。


可以使用 `updateQuietly()` 方法来执行此操作，该方法在幕后使用 `saveQuietly()` 方法。

```php
$flight->updateQuietly(['departed' => false]);
```

## prunable 定期清理过时记录中的模型

定期清理模型中的过时记录。Laravel 会自动执行此操作，只需在 Console Kernel 类中使用 `model:prune` 命令 `$schedule->command(PruneCommand::class)->daily();` 即可。

```php
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Prunable;
class Flight extends Model
{
    use Prunable;
    /**
     * Get the prunable model query.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function prunable()
    {
        return static::where('created_at', '<=', now()->subMonth());
    }
}
```

另外在 `pruning` 方法中可以设置删除模型之前必须执行的操作：

```php
protected function pruning()
{
    // Removing additional resources,
    // associated with the model. For example, files.
 
    Storage::disk('s3')->delete($this->filename);
}
```

## withAggregate 子查询

可以使用 `withAggregate` 方法根据关联关系添加子查询。


```php
// Eloquent Model
class Post extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
 
// Instead of eager loading all users...
$posts = Post::with('user')->get();
 
// You can add a subselect to only retrieve the user's name...
$posts = Post::withAggregate('user', 'name')->get();
 
// This will add a 'user_name' attribute to the Post instance:
$posts->first()->user_name;
```


## upsert() 批量新增或更新

`upsert()` 方法将插入或更新多条记录。


```php
Flight::upsert([
    ['departure' => 'Oakland', 'destination' => 'San Diego', 'price' => 99],
    ['departure' => 'Chicago', 'destination' => 'New York', 'price' => 150],
  ],
  ['departure', 'destination'], 
  ['price']
);
```

- 数组1：要插入或更新的值

- 数组2：select 语句中使用的唯一标识符列

- 数组3：如果记录存在则要更新的列


## 自定义 Cast 类

可以创建自定义转换，让 Laravel 自动格式化您的 Eloquent 模型数据。

下面是一个在检索或更改用户名时将其大写的示例。

```php
class CapitalizeWordsCast implements CastsAttributes
{
    public function get($model, string $key, $value, array $attributes)
    {
        return ucwords($value);
    }
 
    public function set($model, string $key, $value, array $attributes)
    {
        return ucwords($value);
    }
}
 
class User extends Model
{
    protected $casts = [
        'name'  => CapitalizeWordsCast::class,
        'email' => 'string',
    ];
}
```

## withAvg 根据关联模型的平均值排序



```php
public function bestBooks()
{
    Book::query()
        ->withAvg('ratings as average_rating', 'rating')
        ->orderByDesc('average_rating');
}
```


## 返回事务结果


如果有一个数据库事务并希望返回其结果：

::: code-group
```php [更简洁的方式]
$invoice = DB::transaction(function () {
    $invoice = Invoice::create(...);
    $invoice->items()->attach(...);
 
    return $invoice;
});
```

```php [常规变量引用方式]
$invoice = NULL;
DB::transaction(function () use (&$invoice) {
    $invoice = Invoice::create(...);
    $invoice->items()->attach(...);
})
```
:::


## 从查询中删除多个全局范围

使用 Eloquent 全局作用域时，不仅可以使用多个作用域，还可以在不需要时通过向 `withoutGlobalScopes()` 提供数组来删除某些作用域。


```php
// 1. 删除所有全局范围
User::withoutGlobalScopes()->get();
 
// 2. 删除一些全局范围
User::withoutGlobalScopes([
    FirstScope::class, SecondScope::class
])->get();
```