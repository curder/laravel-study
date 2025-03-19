# ensure

`ensure()` 方法允许确保集合中的项目属于特定数据类型。

如果集合中的项目不属于指定的数据类型，该方法将抛出一个`UnexpectedValueException` 的错误。

## 基本使用

可以使用 `ensure()` 方法来验证集合中的所有项目是否属于以下基本类型：`string`、`int`、`float`、`bool` 或 `array`。

```php
collect(['Ash', 'Allen'])->ensure('string'); // true
collect([1, 2, 3])->ensure('int'); // true


// ❌ The `ensure` method will throw an exception!
collect([1, 2, 3, 4, 5])->ensure('string');
// Collection should only include 'string' items, but 'int' found. 
```

## 检查对象

除了能够验证集合是否仅包含原始类型之外，也可以使用 `ensure()` 方法来验证集合中是否仅包含特定类或接口的对象。

### 检查对象

比如使用 `ensure()` 方法验证集合中是否只包含 `App\Models\User` 类的项目。

::: code-group
```php [正确 ✅]
// 验证集合是否只包含该类的项目 `App\Models\User`
use App\Models\User;
 
collect([
    new User('Ash'),
    new User('Allen'),
])->ensure(User::class);
```

```php [抛出异常 ❌]
// ❌ The `ensure` method will throw an exception!

use App\Models\User;
use App\Models\Post;

collect([
    new User('Ash'),
    new User('Allen'),
    new Post(),
])->ensure(User::class);
```
:::

### 检查接口

使用 `ensure` 方法来验证集合是否仅包含实现特定接口的项目，比如是否只包含实现该 `Illuminate\Auth\Authenticatable` 接口。

```php
use App\Models\User;
use Illuminate\Auth\Authenticatable;

collect([
    new User('Ash'),
    new User('Allen'),
])->ensure(Authenticatable::class);
```

## 检查多种类型

有时也可能想要验证集合是否包含多种类型的项目。可以通过将类型数组传递给该 `ensure()` 方法达到检查的目的。

只要每一项至少匹配数组中的一种类型，该 `ensure` 方法就不会抛出异常。

例如，如果需要验证集合中是否包含 `int` 或 `float` 的项目：

```php
collect([1, 2, 3.5, 4, 5])->ensure(['int', 'float']);
```

验证集合中是否包含属于 `App\Models\User` 或者 `App\Models\Post` 实例的项目。

```php
use App\Models\User;
use App\Models\Post;
 
collect([
    new User('Ash'),
    new User('Allen'),
    new Post(),
])->ensure([
    User::class,
    Post::class
]);
```
