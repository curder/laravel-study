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
