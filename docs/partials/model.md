# Model 模型

## 判断对象是否新增 `wasRecentlyCreated`

在 Laravel 中，有时可能需要检查模型是从数据库中获取的还是刚刚在当前请求生命周期中创建的——比如使用 `firstOrCreate()` 时。

为此，您可以在模型上使用 `->wasRecentlyCreated` 字段。

```php
$user = User::createOrUpdate(
['email' => request('email')],
['name' => request('name')]
);

if ($user->wasRecentlyCreated) {
    // 用户新增逻辑代码
} else {
    // 用户已存在并从数据库中获取
}
```

## 重用或克隆查询

通常，需要从过滤后的查询再进行多次查询。大多数时候使用 `query()` 方法，编写一个查询来获取创建的活跃和非活跃产品。

```php
$query = Product::query();

$today = request()->q_date ?? today();
if ($today) {
    $query->where('created_at', $today);
}

$active_products = $query->clone()->where('status', 1)->get(); // 不会修改 $query 变量
$inactive_products = $query->clone()->where('status', 0)->get(); // 从 $query 中获取正确的产品
```

## 模型的时间查询方法

Laravel 提供了一些时间查询方法，例如：`whereDate`、`whereMonth`、`whereDay`、`whereYear`、`whereTime`。

```php
$products = Product::whereDate('created_at', '2018-01-31')->get();
$products = Product::whereMonth('created_at', '12')->get();
$products = Product::whereDay('created_at', '31')->get();
$products = Product::whereYear('created_at', date('Y'))->get();
$products = Product::whereTime('created_at', '=', '14:13:58')->get();
```

## 增减某个字段

如果想在某个表中增加某列的数值，只需使用 `increment()` 函数。 当然不仅可以增加 `1`，也可以增加一些数字，比如 `50`。

```php
Post::find($post_id)->increment('view_count');
User::find($user_id)->decrement('points', 50); # 减少字段 points 的值
```

## 表不存在时间字段 

如果数据库表不包含时间戳字段 `created_at` 和 `updated_at`，可以通过 `$timestamps = false` 属性指定模型不使用它们。
```php
class Company extends Model
{
    public $timestamps = false;
}
```

## 软删除：多次还原

使用软删除时，使用 `restore()` 恢复多行。

```php
Post::onlyTrashed()->where('author_id', 1)->restore();
```
                                         
## `all` 方法值定返回字段

调用模型的 `Model::all()` 时，可以指定要返回的列。

```php
User::all(['id', 'name', 'email']);
```

## 是否返回失败还是模型实例

除了 `findOrFail()`，还有模型方法 `firstOrFail()`，如果没有找到查询记录，会返回 404 。

```php
User::where('email', 'test@exmple.com')->firstOrFail();

// 可以调用 `firstOr()` 对失败执行其他操作
User::where('email', 'test@example.com')->firstOr(function () {
    // ...
});
```

## `findOrFail()` 方法还接受主键数组

`findOrFail()` 方法接受主键数组。如果未找到任何这些 id，则它“失败”。

如果需要检索一组特定的模型并且不想检查您获得的计数是否是您预期的计数。

```php
User::create(['id' => 1]);
User::create(['id' => 2);
User::create(['id' => 3]);

$user = User::findOrFail(1); // 检索用户

User::findOrFail(99); // 因为用户不存在而抛出 404

$users = User::findOrFail([1, 2, 3]); // 检索三个用户

User::findOrFail([1, 2, 3, 99]); // 抛出因为它无法找到 *all* 的用户
```

## 修改数据库字段

在查询语句中，可以指定 `as` 以返回具有不同名称的任何列，就像在普通 SQL 查询中一样。

```php
DB::table('users')->select('name', 'email as user_email')->get();
```

## 查询结果集使用map回调

在模型查询后，可以使用 `Collections` 中的 `map()` 函数来修改行。

```php
User::where('role_id', 1)->get()->map(function (User $user) {
    $user->some_column = some_function($user);
    return $user;
});
```

## 修改默认的时间字段

如果使用的是非 Laravel 数据库并且时间戳列的名称不同怎么办？ 比如 `create_time` 和 `update_time`。 可以在模型中指定它们：

```php
class User extends Model
{
    const CREATED_AT = 'create_time';
    const UPDATED_AT = 'update_time';
}
```

## 通过某个字段快速排序

通过使用 `latest()` 和 `oldest()` 代替 `->orderBy()`。       

```php
User::latest()->get(); // 降序排序，代替 ->orderBy('created_at', 'desc')
User::oldest()->get(); // 升序排序
User::latest('updated_at')->get(); // 指定字段，降序排序
```

## 数据库原始查询计算运行得更快

使用 SQL 原始查询，如 `whereRaw()` 方法，直接在查询中进行一些特定于 `DB` 的计算，而不是在 `Laravel` 中，通常结果会更快。 

例如，如果想获得注册后 30 天以上仍处于活跃状态的用户，代码如下：

```php
User::where('active', 1)
    ->whereRaw('TIMESTAMPDIFF(DAY, created_at, updated_at) > ?', 30)
    ->get();
```

## 多个 scope 查询

```php
// 模型定义
public function scopeActive($query) {
    return $query->where('active', 1);
}
public function scopeRegisteredWithinDays($query, $days) {
    return $query->where('created_at', '>=', now()->subDays($days));
}

// 使用 
User::registeredWithinDays(30)->active()->get();
```

## 无需转换 carbon

如果正在执行 `whereDate()` 并检索今天的记录，可以使用 Carbon 的 `now()` ，它会自动转换为日期。 无需执行 `->toDateString()`。

```php
// 无需对时间进行转换，直接使用 `now()`
$todayUsers = User::whereDate('created_at', now())->get();
```
     
## 按首字母分组

可以按任何自定义条件对 Eloquent 结果进行分组。

以下是按用户名的首字母分组的方法：

```php
User::all()->groupBy(function($item) {
    return $item->name[0];
});
```

## 字段仅更新一次 

如果有 DB 列，只想设置一次并且不再更新，可以使用 mutator 对 Eloquent 模型设置该限制：

```php
class User extends Model
{
    public function setEmailAttribute($value)
    {
        if ($this->email) {
            return;
        }

        $this->attributes['email'] = $value;
    }
}
```

## find 方法针对主键查询更多

模型方法 `find()` 可以接受多个数组参数，然后它返回一个包含所有找到的记录的集合，而不仅仅是一个模型实例：

```php
$user = User::find(1); // 返回模型实例
$users = User::find([1,2,3]); // 返回模型集合

$users = User::find([1,2,3], ['first_name', 'email']); // 指定返回的模型集合中的对应字段

// 通过模型主键查询可以通过 `->whereKey()` 方法
$users = User::whereKey([1,2,3])->get();
```

## 使用UUID代替主键自增

在模型中不希望使用主键自增？可以使用UUID代替：   

* 迁移文件
```php
Schema::create('users', function (Blueprint $table) {
    // $table->increments('id');
    $table->uuid('id')->unique();
});
```

* 模型定义
```php
class User extends Model
{
    public $incrementing = false;
    protected $keyType = 'string';

    protected static function boot()
    {
        parent::boot();

        User::creating(function ($model) {
            $model->setId();
        });
    }

    public function setId()
    {
        $this->attributes['id'] = Str::uuid();
    }
} 
```

## 子查询

从 Laravel 6 开始，可以在模型语句中使用 `addSelect()`，并对添加的列进行一些计算。

```php
return Destination::addSelect(['last_flight' => Flight::select('name')
    ->whereColumn('destination_id', 'destinations.id')
    ->orderBy('arrived_at', 'desc')
    ->limit(1)
])->get();
```

## 隐藏一些字段

在进行模型查询时，如果要隐藏特定字段不被返回，最快的方法之一是在 Collection 结果上添加 `->makeHidden()`。

```php
$users = User::all()->makeHidden(['email_verified_at', 'deleted_at']);

// 或者在模型中定义
class User extends Authenticatable 
{
    // ...
    protected $hidden = [
        'email_verified_at', 'deleted_at'
    ];
}
```

## 捕捉数据库错误

如果要捕获模型查询异常，请使用特定的 `QueryException` 而不是默认的 `Exception` 类，将能够获得错误的确切 SQL 代码。

```php
try {
    // Some Eloquent/SQL statement
} catch (\Illuminate\Database\QueryException $e) {
    if ($e->getCode() === '23000') { // integrity constraint violation
        return back()->withError('Invalid data');
    }
}
```

## 查询生成 - 软删除

不要忘记，当使用模型时，软删除会排除条目，但如果您使用 Query Builder，则不会起作用。

```php
$users = User::all(); // 将不包含已删除的项
$users = User::withTrashed()->get(); // 包含已删除的项

$users = DB::table('users')->get(); // 包含已删除的项
```

## SQL 查询 

如果需要执行一个简单的 SQL 查询，但没有得到任何结果——比如更改 DB 模式中的某些内容，可以执行 `DB::statement()`。
  
```php
DB::statement('DROP TABLE users');
DB::statement('ALTER TABLE projects AUTO_INCREMENT=123');
```

## 使用DB事务

如果执行了两个数据库操作，第二个可能会出错，那么应该回滚第一个。 为此，建议使用 DB 事务：

```php
DB::transaction(function () {
    DB::table('users')->update(['votes' => 1]);

    DB::table('posts')->delete();
});
```

## 更新或创建

如果需要检查记录是否存在，存在则更新它，不存在则创建一个新记录。 使用模型的 `updateOrCreate()` 方法：

```php
$flight = Flight::updateOrCreate(
    ['departure' => 'Oakland', 'destination' => 'San Diego'], // 条件
    ['price' => 99, 'discounted' => 1], 
);
```

## 更改日期格式

```php
// 模型定义
public function getCreatedAtFormattedAttribute()
{
   return $this->created_at->format('H:i d, M Y');
}

public function getUpdatedAtFormattedAttribute()
{
   return $this->updated_at->format('H:i d, M Y');
}

// 使用
$user->created_at_formatted; // `12:25 18, Jan 2021`
```

## 在JSON字段中存储数组 

如果输入字段需要一个数组并且必须将其存储为 JSON，可以在模型中使用 `$casts` 属性。这里的 `images` 是一个 `JSON` 属性。

```php
// 模型定义
protected $casts = [
    'images' => 'array',
];
```


## 模型的副本

如果有两个非常相似的模型（例如送货地址和帐单地址），并且需要将一个复制到另一个，可以使用 `replicate()` 方法并在此之后更改一些属性。

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

## 删除模型之前执行任何额外步骤

可以在重写的删除方法中使用 `Model::delete()` 来执行额外的步骤。

```php
// App\Models\User.php

public function delete(){

    // 这里有额外的步骤，无论你想要什么

    Model::delete(); // 现在执行正常删除
}
```
        

## 将数据持久化到数据库时自动填充列

如果将数据持久化到数据库时自动填充一列（例如：`slug`），请使用模型监听者而不是每次都对其进行硬编码。

```php
use Illuminate\Support\Str;

class Article extends Model
{
    ...
    protected static function boot()
    {
        parent:boot();
        
        static::saving(function ($model) {
            $model->slug = Str::slug($model->title);
        });
    }
}
```

## 分析查询

可以在查询上调用 `explain()` 方法来了解有关查询的额外信息。

```php
Book::where('name', 'Ruskin Bond')->explain()->dd();

// 像下面这样
Illuminate\Support\Collection {#5344
    all: [
        {#15407
            +"id": 1,
            +"select_type": "SIMPLE",
            +"table": "books",
            +"partitions": null,
            +"type": "ALL",
            +"possible_keys": null,
            +"key": null,
            +"key_len": null,
            +"ref": null,
            +"rows": 9,
            +"filtered": 11.11111164093,
            +"Extra": "Using where",
        },
    ],
}
```

## `dontExist()` 方法

```php
if ( 0 === $model->where('status', 'pending')->count() ) {
}

// 但是由于我不关心总数，`exists()` 方法更简洁。
if ( ! $model->where('status', 'pending')->exists() ) {
}

// `doesntExist()` 方法使之更加简洁
if ( $model->where('status', 'pending')->doesntExist() ) {
}
```
                   
## 添加模型的Trait且自动调用它们的 `boot()` 方法

如果有一个 Trait 想要添加到几个模型中以自动调用它们的 `boot()` 方法，可以在 `Trait` 中编写静态方法 boot[TraitName]。

```php
// Transaction 模型
class Transaction extends  Model
{
    use MultiTenantModelTrait;
}

// Task 模型
class Task extends  Model
{
    use MultiTenantModelTrait;
}

// MultiTenantModelTrait Trait
trait MultiTenantModelTrait
{
    // This method's name is boot[TraitName]
    // It will be auto-called as boot() of Transaction/Task
    public static function bootMultiTenantModelTrait()
    {
        static::creating(function ($model) {
            if (!$isAdmin) {
                $isAdmin->created_by_id = auth()->id();
            }
        })
    }
}
```


## 如何防止“非对象属性”错误

```php
// 如果没有作者附加到帖子，这个关系将返回一个空的 `App\Author` 模型
public function author() {
    return $this->belongsTo('App\Author')->withDefault();
}
// or
public function author() {
    return $this->belongsTo('App\Author')->withDefault([
        'name' => 'Guest Author'
    ]);
}

// 代码调用
$post->author->name;
```


## 修改模型记录后获取原始属性 `getOriginal()` 

修改模型记录后获取原始属性，可以通过调用 `getOriginal()` 获取原始属性。

```php
$user = App\User::first();
$user->name; // John
$user->name = "Peter"; // Peter
$user->getOriginal('name'); // John
$user->getOriginal(); // Original $user record
```


## 填充数据库的简单方法

使用 .sql 转储文件播种数据库的简单方法。假如存在 `dump.sql`：

```php
DB::unprepared(
    file_get_contents(__DIR__ . './dump.sql')
);
```

## 按中间表字段排序

`BelongsToMany::orderByPivot()` 允许直接对 BelongsToMany 关系查询的结果进行排序。

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

// 调用
Post::findOrFail($id)->tags()->orderByPivot('flag', 'desc')->get();
```

## 查找单个记录

`sole()` 方法将只返回一条符合条件的记录。

- 如果没有找到这样的条目，则会抛出 `NoRecordsFoundException`。

- 如果找到多条记录，则会抛出 `MultipleRecordsFoundException`。

```php
DB::table('products')->where('ref', '#123')->sole();
```

## chuckMap 处理结果

类似于 `each()` 方法，但更易于使用。自动将结果拆分为多个部分（块）。

```php
return User::orderBy('name')->chunkMap(fn ($user) => [
    'id' => $user->id,
    'name' => $user->name,
]), 25);
```

## 更新模型但不触发事件

有时需要在不发送任何事件的情况下更新模型。现在可以使用 `updateQuietly()` 方法来做到这一点，该方法在背后使用 `saveQuietly()` 方法。

```php
$flight->updateQuietly(['departed' => false]);
```

## 定期清理过时记录中的模型

有了这个特性，Laravel会自动执行此操作，只需要在 Kernel 类中调整 `model:prune` 命令的频率即可。

<CodeGroup>

  <CodeGroupItem title="模型定义">   

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
        return static::where('created_at', '&lt;=', now()->subMonth());
    }
    
    // 此外，可以设置在删除模型之前必须执行的操作：
    protected function pruning()
    {
        // 删除关联资源，例如文件
        Storage::disk('s3')->delete($this->filename);
    }
}
```

</CodeGroupItem>

<CodeGroupItem title="定时任务">

```php
// App\Console\Kernel.php
/**
 * Define the application's command schedule.
 *
 * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
 * @return void
 */
protected function schedule(Schedule $schedule)
{
    $schedule->command('model:prune')->daily();
    // $schedule->command('model:prune', ['--model' => [Address::class, Flight::class]])->daily(); // 指定特定模型参数
}
```

</CodeGroupItem>
</CodeGroup>

## 不可变的日期

`Laravel 8.53` 引入了将日期转换为不可变的 `immutable_date` 和 `immutable_datetime` 种姓。

转换为 `CarbonImmutable` 而不是常规的 `Carbon` 实例。

```php
class User extends Model
{
    public $casts = [
        'date_field'     => 'immutable_date',
        'datetime_field' => 'immutable_datetime',
    ];
}
```

## `withAggregate` 方法

在底层，模型中的 `withAvg`/`withCount`/`withSum` 和其他方法使用了 `withAggregate` 方法。

可以使用此方法添加基于关系的子选择

```php
// 模型 Post
class Post extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

$posts = Post::with('user')->get(); // 惰性加载所有用户

$posts = Post::withAggregate('user', 'name')->get(); // 可以添加子选择以仅检索用户名

$posts->first()->user_name; // 将为 Post 实例添加一个 'user_name' 属性
```

## `upsert()` 方法插入或更新多条记录

```php
Flight::upsert(
    [
        ['departure' => 'Oakland', 'destination' => 'San Diego', 'price' => 99],
        ['departure' => 'Chicago', 'destination' => 'New York', 'price' => 150],
    ],
    ['departure', 'destination'], 
    ['price']
 );
```

- 第一个数组：要插入或更新的值 
- 第二个数组：select语句中使用的唯一标识符列 
- 第三个数组：如果记录存在则要更新的列

## 过滤结果后检索查询生成器

要在过滤结果后检索查询生成器：您可以使用 `->toQuery()`。 该方法在内部使用集合的第一个模型和集合模型上的 `whereKey` 比较。

```php
$loggedInUsers = User::where('logged_in', true)->get(); // 检索所有已登录的用户

$nthUsers = $loggedInUsers->nth(3); // 使用 Collection 方法或 php 过滤过滤它们

$nthUsers->update(/* ... */); // 不能在集合上执行此操作

// 但是可以使用 `->toQuery()` 检索 Builder
if ($nthUsers->isNotEmpty()) {
    $nthUsers->toQuery()->update(/* ... */);
}
```

## 自定有数据转换

可以创建自定义转换来自动格式化模型数据。如下检索或更改用户名时将其大写的示例。

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

// 使用
class User extends Model
{
    protected $casts = [
        'name'  => CapitalizeWordsCast::class,
        'email' => 'string',
    ]; 
}
```


## 根据相关模型的平均值或计数排序

是否曾经需要根据相关型号的平均值或计数进行排序

```php
public function bestBooks()
{
    Book::query()
        ->withAvg('ratings as average_rating', 'rating')
        ->orderByDesc('average_rating');
}
```

## 返回事务结果

如果有一个 DB 事务，想要返回它的结果，至少有两种方式，看例子：

```php
// 1. 可以通过引用传递参数
$invoice = NULL;
DB::transaction(function () use (&$invoice) {
    $invoice = Invoice::create(...);
    $invoice->items()->attach(...);
})

// 2. 或更短：只返回事务结果
$invoice = DB::transaction(function () {
    $invoice = Invoice::create(...);
    $invoice->items()->attach(...);
    
    return $invoice;
});
```

## 查询中删除 `globalScopes()`

使用模型全局作用域时，不仅可以使用 MULTIPLE 作用域，还可以在不需要时删除某些scope，方法是将数组提供给 `withoutGlobalScopes()`：

```php
// 删除所有全局范围
User::withoutGlobalScopes()->get();

// 删除一些全局范围
User::withoutGlobalScopes([
    FirstScope::class, SecondScope::class
])->get();
```

## 按 JSON 字段值排序（MySQL）

在 Laravel 开发中使用`json` 类型字段存储多个值，很快就遇到了如何使用 JSON 属性字段对数据进行排序的问题。

由于 JSON 属性中的数据被转换为字符串数据，因此在 eloquent orderBy 方法中执行 `json_field->property` 的常用方法没有给出正确的结果。

我们可以使用它来排序我们的结果之前，必须将字段属性转换为适当的数据类型，就我而言，我想将其转换为无符号整数。

Eloquent 模型上的 `$casts` 属性不适用于 JSON 属性，当前找到的唯一方法是使用 `orderByRaw`。

- 数据排序

```php
Post::orderByRaw('CAST(extra->"$.popular_order_number" AS unsigned) ASC')->get();
```

- 数据查询

```php
Post::whereJsonContains('extra->is_popular', 1)->get();
```

参考地址：[Sort by Mysql JSON Field Value in Laravel](https://5balloons.info/sort-by-mysql-json-field-value-in-laravel/)


## 从第一个结果中获取单列的值 `value()`

可以使用 `value()` 方法从查询的第一个结果中获取单个列的值                                                          

```php
// Instead of
Integration::where('name', 'foo')->first()->active;

// You can use
Integration::where('name', 'foo')->value('active');

// or this to throw an exception if no records found
Integration::where('name', 'foo')->valueOrFail('active')';
```


## 检查更改的值是否更改

想知道对模型所做的更改是否改变了键的值，使用 `originalIsEquivalent`。

```php
$user = User::first(); // ['name' => "John']

$user->name = 'John';

$user->originalIsEquivalent('name'); // true

$user->name = 'David'; // Set directly
$user->fill(['name' => 'David']); // Or set via fill

$user->originalIsEquivalent('name'); // false
```


## 定义访问器和修改器的新方法

在 Laravel 8.77 中定义属性访问器和修改器的新方法：

```php
// Before, two-method approach
public function setTitleAttribute($value)
{
    $this->attributes['title'] = strtolower($value);
}
public function getTitleAttribute($value)
{
    return strtoupper($value);
}
 
// New approach
protected function title(): Attribute
{
    return new Attribute(
        get: fn ($value) => strtoupper($value),
        set: fn ($value) => strtolower($value),
}
```


## 保存模型及其所有关系

使用 `push()` 方法更新数据库中的主模型和相关模型。

```php
/**
 * 使用 `push()` 将主模型与任何更改关系一起保存
 */
class User extends Model
{
    public function phone( )
    {
        return $this->has0ne('App\Models\Phone');
    }
}
```

```php {4}
$user = \App\Models\User::first();
$user->name = "John";
$user->phone->number = '1234567890';
$user->push(); // 这会更新数据库中的用户记录和相关的用户电话号码记录
```

## 获取查询日志

在开发过程中记录所有数据库查询，请将此代码段添加到的 `AppServiceProvider.php`：

```php
public function boot()
{
    if (App::environment ('local')) {
        DB::listen(function($query) {
            logger(Str::replaceArray('?', $query->bindings, $query->sql));
        });
    }
}
```