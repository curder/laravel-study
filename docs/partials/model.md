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
