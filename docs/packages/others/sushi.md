# Sushi 🍣

[Sushi](https://github.com/calebporzio/sushi) 拓展包是用于 [Laravel Eloquent](https://laravel.com/docs/master/eloquent) 缺少的 `array` 数组驱动程序。

用于有时需要使用 Eloquent，但不处理数据库的情况。

## 安装

通过 Composer 安装该软件包：

```bash
composer require calebporzio/sushi
```

## 用法

使用该包需要修改模型，一般包含两个步骤：

1. 将 `\Sushi\Sushi` Trait 特征添加到对应的模型
2. 将 `$rows` 属性添加到模型

```php
namespace App\Models;

class SiteSetting extends Model
{
    use \Sushi\Sushi; // [!code ++]

    protected $rows = [ // [!code ++]
        ['key' => 'name', 'value' => 'Laravel Sushi'], // [!code ++]
        ['key' => 'lang', 'value' => 'zh_CN'], // [!code ++]
        ['key' => 'timezone', 'value' => 'PRC'], // [!code ++]
    ]; // [!code ++]
}
```

现在，可以在任何需要的地方使用此模型，它的行为就像提供的行创建了一个表一样。

```php
use App\Models\SiteSetting;

$timezone = SiteSetting::whereKey('timezone')->first()->value;
```

这对于一些数据比较有用，比如国家、地区、邮政编码、用户角色、站点设置等。

## `getRows()` 方法

可以选择不使用受保护的 `$rows` 属性，并直接实现自己的 `getRows()` 方法。

这将允许在运行时确定模型的行，甚至可以从第三方 API 等外部源生成模型的行。

```php
class Role extends Model
{
    use \Sushi\Sushi;

    public function getRows()
    {
        return [
            ['id' => 1, 'label' => 'admin'],
            ['id' => 2, 'label' => 'manager'],
            ['id' => 3, 'label' => 'user'],
        ];
    }
}
```

## 缓存 getRows()

如果选择使用自己的 `getRows()` 方法，则默认情况下不会在请求之间缓存行。

可以使用 `sushiShouldCache()` 方法强制 Sushi 缓存数据集。

```php
class Role extends Model
{
    use \Sushi\Sushi;

    public function getRows()
    {
        return [
            ['id' => 1, 'label' => 'admin'],
            ['id' => 2, 'label' => 'manager'],
            ['id' => 3, 'label' => 'user'],
        ];
    }

    protected function sushiShouldCache()
    {
        return true;
    }
}
```

<!-- markdownlint-disable MD013 -->
默认情况下，Sushi 会查看模型 PHP 文件的“上次修改”时间戳，并将其与其内部 `.sqlite` 缓存文件进行比较。 如果模型文件的更改时间比 `.sqlite` 缓存文件更新，则 Sushi 将销毁并重建 `.sqlite` 缓存。 此外，可以配置一个外部文件供 Sushi 在确定缓存是否是最新的或需要刷新时参考。
<!-- markdownlint-enable MD013 -->

例如，如果您使用 Sushi 为外部数据源文件（如 `.csv` 文件）提供 Eloquent 模型，则可以使用 `sushiCacheReferencePath` 强制 Sushi 在确定缓存是否过时时引用 `.csv` 文件。

```php
class Role extends Model
{
    use \Sushi\Sushi;

    public function getRows()
    {
        return CSV::fromFile(__DIR__.'/roles.csv')->toArray();
    }

    protected function sushiShouldCache()
    {
        return true;
    }

    protected function sushiCacheReferencePath()
    {
        return __DIR__.'/roles.csv';
    }
}
```

现在，如果 `roles.csv` 发生更改，Sushi 只会“破坏”其内部缓存，而不是查看 `Role.php` 模型。

## 关联关系

假设使用 `Sushi` 基于数组创建了一个角色模型，如下所示：

```php
class Role extends Model
{
    use \Sushi\Sushi;

    protected $rows = [
        ['id' => 1, 'label' => 'admin'],
        ['id' => 2, 'label' => 'manager'],
        ['id' => 3, 'label' => 'user'],
    ];
}
```

可以跟往常一样将关系添加到另一个标准模型：

```php
class User extends Model
{
    // ...

    public function role() // [!code ++]
    { // [!code ++]
        return $this->belongsTo(Role::class); // [!code ++]
    } // [!code ++]
}
```

假设 `users` 表有一个 `role_id` 列，可以执行以下操作：

```php
// 获取用户
$user = User::first();
// 获取角色
$role = Role::whereLabel('admin')->first();

// 将角色关联给用户
$user->role()->associate($role);

// 访问用户角色
$user->role;

// 惰性加载用户角色
$user->load('role');
User::with('role')->first();
```
> **注意：** 处理 `Sushi` 模型关系时有一个警告。
>
> 因为这两个模型分布在两个独立的数据库中，导致 `whereHas` 方法将不起作用。

## 验证规则

使用 Laravel 的 `exists:table,column` 数据库检查请求验证规则。

```php
$data = request()->validate([
    'site_setting' => ['required', 'exists:App\Models\SiteSetting,key'],
]);
```

> **注意：** 必须使用模型的完全限定命名空间而不是表名称，用于确保 Laravel 正确解析模型的连接。

## 自定义属性规则

如果 Sushi 的模式自动检测系统不能满足对所提供的行数据的特定要求，可以使用 `$schema` 属性或 `getSchema()` 方法对其进行自定义：

```php
class Products extends Model
{
    use \Sushi\Sushi;

    protected $rows = [
        ['name' => 'Lawn Mower', 'price' => '226.99'],
        ['name' => 'Leaf Blower', 'price' => '134.99'],
        ['name' => 'Rake', 'price' => '9.99'],
    ];

    protected $schema = [
        'price' => 'float',
    ];
}
```

## 进阶用法

当需要更大的灵活性时，可以实现 `afterMigrate(BluePrint $table)` 方法，允许在创建表后对其进行自定义。

比如对于向某些列添加索引可能很有用。

```php
class Products extends Model
{
    use \Sushi\Sushi;

    protected $rows = [
        ['name' => 'Lawn Mower', 'price' => '226.99'],
        ['name' => 'Leaf Blower', 'price' => '134.99'],
        ['name' => 'Rake', 'price' => '9.99'],
    ];

    protected function afterMigrate(Blueprint $table)
    {
        $table->index('name');
    }
}
```

## 处理空数据集

Sushi 读取数据集中的第一行来计算出 SQLite 表的方案。如果使用 `getRows()` 并且返回一个空数组（例如 API 不返回任何内容），那么 Sushi 会抛出错误。

如果希望 Sushi 在数据集为空的情况下也能正常工作，则可以在可选的 `protected $schema` 数组中定义数据结构。

> **注意：** 如果选择使用 `getRows()` 方法，则不会在请求之间缓存行。

```php
class Currency extends Model
{
    use \Sushi\Sushi;

    protected $schema = [
        'id' => 'integer',
        'name' => 'string',
        'symbol' => 'string',
        'precision' => 'float'
    ];

    public function getRows()
    {
        return [];
    }
}
```

## 处理字符串的主键

如果 Sushi 使用基于字符串的主键，则需要向模型添加两个属性，它们是 `$incrementing` 和 `$keyType`：

```php
class Role extends Model
{
    use \Sushi\Sushi;

    public $incrementing = false;

    protected $keyType = 'string';

    protected $rows = [
        ['id' => 'admin', 'label' => 'Admin'],
        ['id' => 'manager', 'label' => 'Manager'],
        ['id' => 'user', 'label' => 'User'],
    ];
}
```

## 常见错误

**ERROR**: `SQLSTATE[HY000]: General error: 1 too many SQL variables`

默认情况下，Sushi 每次使用 `100` 个块将数据插入 SQLite 数据库中，在某些情况下，这可能会达到某些 SQLite 限制。

可以在模型中配置块大小：

```php
public $sushiInsertChunkSize = 50;
```
