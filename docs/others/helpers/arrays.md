# Arrays

## `accessible()`

`Arr::accessible()` 方法确定给定值是否可以通过数组访问，即判定给定值是否是数组或者是否是 `ArrayAccess` 的实例。

```php
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;

Arr::accessible(['a' => 1, 'b' => 2]); // true

Arr::accessible(new Collection); // true

Arr::accessible('abc'); // false

Arr::accessible(new stdClass); // false
```

## `add()`

`Arr::add()` 方法在当数组 `key` 不存在或 `key` 的值为 `null` 时才添加元素。

```php
use Illuminate\Support\Arr;

# key 不存在的情况
Arr::add(['name' => 'Desk'], 'price', 100); // ['name' => 'Desk', 'price' => 100]

# key 存在且 key 的值为 null 的情况
Arr::add(['name' => 'Desk', 'price' => null], 'price', 100); // ['name' => 'Desk', 'price' => 100]

# key 存在且 key 的值不为 null 的情况
Arr::add(['name' => 'Desk'], 'name', 'Joe'); // ['name' => 'Desk']
```

## `collapse()`

该 `Arr::collapse()` 方法将数组的数组折叠为单个数组：

```php
use Illuminate\Support\Arr;

Arr::collapse([[1, 2, 3], [4, 5, 6], [7, 8, 9]]); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

<!-- markdownlint-disable MD013 -->
> `Arr` 的 `collapse` 方法的结果跟 [Illuminate\Support\Collection](/collections/index.md) 的 [`collapse`](/collections/collapse.md) 和 [`flatten`](/collections/flatten.md) 方法结果类似。
<!-- markdownlint-enable MD013 -->

## `crossJoin()`

`Arr::crossJoin()` 方法创建一个新数组，该数组包含了传入的数组的所有可能排列组合。

::: code-group
```php [([1, 2], ['a', 'b'])]
use Illuminate\Support\Arr;

Arr::crossJoin([1, 2], ['a', 'b']);
/*
[
    [1, 'a'],
    [1, 'b'],
    [2, 'a'],
    [2, 'b'],
]
*/
```

```php [([1, 2], ['a', 'b'], ['I', 'II'])]
use Illuminate\Support\Arr;

Arr::crossJoin([1, 2], ['a', 'b'], ['I', 'II']);
/*
[
    [1, 'a', 'I'],
    [1, 'a', 'II'],
    [1, 'b', 'I'],
    [1, 'b', 'II'],
    [2, 'a', 'I'],
    [2, 'a', 'II'],
    [2, 'b', 'I'],
    [2, 'b', 'II'],
]
*/
```
:::

## `divide()`

`Arr::divide()` 方法将数组分割成两个部分，一个包含键，另一个包含给定数组的值。

```php
use Illuminate\Support\Arr;

[$keys, $values] = Arr::divide(['name' => 'Desk']);
// $keys: ['name']
// $values: ['Desk']
```

## `dot()`

`Arr::dot()` 方法将多维数组展平为使用"点"表示法表示深度的一维数组：

```php
use Illuminate\Support\Arr;
 
$array = ['products' => ['desk' => ['price' => 100]]];
 
Arr::dot($array); // ['products.desk.price' => 100] 
```

## `except()`

`Arr::except` 方法从数组中删除给定的键/值对：

```php
use Illuminate\Support\Arr;
 
$array = ['name' => 'Desk', 'price' => 100];

Arr::except($array, ['price']); // ['name' => 'Desk']
```

## `exists()`

`Arr::exists()` 方法检查给定的键是否存在于提供的数组中：

```php
use Illuminate\Support\Arr;

$array = ['name' => 'John Doe', 'age' => 17];

Arr::exists($array, 'name'); // true

Arr::exists($array, 'salary'); // false
```

## `first()`

`Arr::first()` 方法返回通过给定真值测试的数组的第一个元素：

```php
use Illuminate\Support\Arr;

$array = [100, 200, 300];

Arr::first($array, fn (int $value, int $key) => $value >= 150);
// 200
```

也可以传入三个参数传递给该方法作为默认值。如果没有值通过真值测试，则返回该值，如果不提供，默认值为 `null`。

```php
use Illuminate\Support\Arr;

Arr::first($array, $callback, $default);
```

跟它类似的还有 [`last()`](#last) 方法，它返回通过给定真值测试的数组的最后一个元素。

## `flatten()`

`Arr::flatten()` 方法将多维数组展平为一维数组：

```php
use Illuminate\Support\Arr;

Arr::flatten(['name' => 'Joe', 'languages' => ['PHP', 'Ruby']]);
// ['Joe', 'PHP', 'Ruby']
```

`flatten` 方法的结果跟 [`collapse`](#collapse) 方法结果类似。

## `forget()`

`Arr::forget()` 方法使用"点"表示法从深度嵌套数组中删除给定的键/值对：

```php
use Illuminate\Support\Arr;

$array = ['products' => ['desk' => ['price' => 100]]];

Arr::forget($array, 'products.desk'); // ['products' => []]
```

## `get()`

`Arr::get()` 方法使用"点"表示法从深度嵌套数组中检索值：

```php
use Illuminate\Support\Arr;

$array = ['products' => ['desk' => ['price' => 100]]];

Arr::get($array, 'products.desk.price'); // 100
```

`Arr::get()` 方法还接受一个默认值，如果指定的键不存在于数组中，则将返回该默认值：

```php
use Illuminate\Support\Arr;

Arr::get($array, 'products.desk.discount', 0); // 0
```

## `has()`

`Arr::has()` 方法使用"点"表示法检查数组中是否存在给定的一个或多个项目：

```php
use Illuminate\Support\Arr;

$array = ['product' => ['name' => 'Desk', 'price' => 100]];

Arr::has($array, 'product.name'); // true

Arr::has($array, ['product.price', 'product.discount']); // false
```

如果第二个参数传递的是数组，则该方法将检查数组中是否存在任何给定的项目。

## `hasAny()`

`Arr::hasAny()` 方法使用"点"表示法检查给定集合中的任何项目是否存在于数组中：

```php

use Illuminate\Support\Arr;
 
$array = ['product' => ['name' => 'Desk', 'price' => 100]];
 
Arr::hasAny($array, 'product.name'); // true

Arr::hasAny($array, ['product.name', 'product.discount']); // true

Arr::hasAny($array, ['category', 'product.discount']); // false
```

## `isAssoc()`

如果给定数组是关联数组，则该 `Arr::isAssoc()` 方法返回 `true`。

```php
use Illuminate\Support\Arr;

Arr::isAssoc(['product' => ['name' => 'Desk', 'price' => 100]]); // true

Arr::isAssoc([1, 2, 3]); // false
```

## `isList()`

如果给定数组的键是从零开始的连续整数，则该 `Arr::isList` 方法返回：`true`。

```php
use Illuminate\Support\Arr;

Arr::isList(['foo', 'bar', 'baz']); // true

Arr::isList(['product' => ['name' => 'Desk', 'price' => 100]]); // false
```

## `join()`

`Arr::join()` 方法将数组值使用给定的分隔符连接在一起。

使用此方法的第二个参数，还可以指定数组最后一个元素的连接字符串：

```php
use Illuminate\Support\Arr;

$array = ['Tailwind', 'Alpine', 'Laravel', 'Livewire'];

Arr::join($array, glue: ', '); // Tailwind, Alpine, Laravel, Livewire

Arr::join($array, glue: ', ', finalGlue: ' and '); // Tailwind, Alpine, Laravel and Livewire
```

## `keyBy()`

`Arr::keyBy()` 方法将数组索引转换为指定的键值对。如果多个项目具有相同的键，则只有最后一项会出现在新数组中：

```php
use Illuminate\Support\Arr;
 
$array = [
    ['product_id' => 'prod-100', 'name' => 'Desk'],
    ['product_id' => 'prod-200', 'name' => 'Chair'],
];
 
Arr::keyBy($array, 'product_id');
/*
[
    'prod-100' => ['product_id' => 'prod-100', 'name' => 'Desk'],
    'prod-200' => ['product_id' => 'prod-200', 'name' => 'Chair']
]
*/
```

## `last()`

`Arr::last()` 方法返回数组中的最后一个元素。

```php
use Illuminate\Support\Arr;

$array = [100, 200, 300, 110];

Arr::last($array, fn (int $value, int $key) => $value >= 150); // 300
```

默认值可以作为第三个参数传递给该方法。如果没有值通过真值测试，则返回该值：

如果不提供默认值且没有满足条件的值，则返回 `null`。

```php
use Illuminate\Support\Arr;

$last = Arr::last($array, $callback, $default);
```

跟它类似的还有 [`first()`](#first) 方法，返回数组中的第一个元素。

## `map()`

`Arr::map()` 方法将回调函数应用于数组中的每个元素，并返回包含新值的新数组。

```php
use Illuminate\Support\Arr;
 
$array = ['first' => 'james', 'last' => 'kirk'];
 
Arr::map($array, fn (string $value, string $key) => ucfirst($value)); // ['first' => 'James', 'last' => 'Kirk']
```

## `mapWithKeys()`

`Arr::mapWithKeys()` 方法将回调函数应用于数组中的每个元素，并返回包含新值的新数组。

```php
use Illuminate\Support\Arr;
 
$array = [
    [
        'name' => 'John',
        'department' => 'Sales',
        'email' => 'john@example.com',
    ],
    [
        'name' => 'Jane',
        'department' => 'Marketing',
        'email' => 'jane@example.com',
    ]
];
 
Arr::mapWithKeys($array, fn (array $item, int $key) => [$item['email'] => $item['name']]);
/*
[
    'john@example.com' => 'John',
    'jane@example.com' => 'Jane',
]
*/
```

## `only()`

`Arr::only()` 方法返回数组中指定键的值。

```php
use Illuminate\Support\Arr;
 
$array = ['name' => 'Desk', 'price' => 100, 'orders' => 10];
 
Arr::only($array, ['name', 'price']); // ['name' => 'Desk', 'price' => 100]
```

## `pluck()`

`Arr::pluck()` 方法从数组中返回给定键的所有值。

```php
use Illuminate\Support\Arr;
 
$array = [
    ['developer' => ['id' => 1, 'name' => 'Taylor']],
    ['developer' => ['id' => 2, 'name' => 'Abigail']],
];

Arr::pluck($array, 'developer.name'); // ['Taylor', 'Abigail']
```

可以通过第二个参数指定要返回的键。

```php
use Illuminate\Support\Arr;

$array = [
    ['developer' => ['id' => 1, 'name' => 'Taylor']],
    ['developer' => ['id' => 2, 'name' => 'Abigail']],
];

Arr::pluck($array, 'developer.name', 'developer.id'); // [1 => 'Taylor', 2 => 'Abigail']
```

## `prepend()`

`Arr::prepend()` 方法将给定的值添加到数组的开头。

```php
use Illuminate\Support\Arr;
 
$array = ['one', 'two', 'three', 'four'];
 
Arr::prepend($array, 'zero'); // ['zero', 'one', 'two', 'three', 'four']
```

也可以通过第三个参数提供额外的键。

```php
use Illuminate\Support\Arr;
 
$array = ['price' => 100];
 
Arr::prepend($array, 'Desk', 'name'); // ['name' => 'Desk', 'price' => 100]
```

## `prependKeysWith()`

`Arr::prependKeysWith()` 方法将给定的值添加到数组的开头。

```php
use Illuminate\Support\Arr;
 
$array = [
    'name' => 'Desk',
    'price' => 100,
];

Arr::prependKeysWith($array, 'product.');
/*
[
    'product.name' => 'Desk',
    'product.price' => 100,
]
*/
```

## `pull()`

`Arr::pull()` 方法从数组中获取给定的键。

```php
use Illuminate\Support\Arr;

$array = ['name' => 'Desk', 'price' => 100];

$name = Arr::pull($array, 'name');
// $name: Desk
// $array: ['price' => 100]
```

默认值可以作为第三个参数传递给该方法。如果键不存在，则返回该值：

```php
use Illuminate\Support\Arr;

$value = Arr::pull($array, $key, $default);
```

## `query()`

`Arr::query()` 方法将数组转换为查询字符串。

```php
use Illuminate\Support\Arr;
 
$array = [
    'keyword' => 'Laravel',
    'order' => [
        'column' => 'created_at',
        'direction' => 'desc'
    ]
];

Arr::query($array); // name=Laravel&order[column]=created_at&order[direction]=desc
```

## `random()`

`Arr::random()` 方法从数组中随机选择一个元素。

```php
use Illuminate\Support\Arr;

$array = [1, 2, 3, 4, 5];

Arr::random($array); // 4 - (retrieved randomly)
```

还可以指定要返回的项目数量作为可选的第二个参数。

```php
use Illuminate\Support\Arr;

Arr::random($array, 2); // [2, 5] - (retrieved randomly)
```

> 请注意，即使只需要一项，提供此参数也会返回一个数组。

## `set()`

`Arr::set()` 方法使用"点"表示法在深度嵌套数组中设置一个值。

```php
use Illuminate\Support\Arr;

$array = ['products' => ['desk' => ['price' => 100]]];

Arr::set($array, 'products.desk.price', 200); // ['products' => ['desk' => ['price' => 200]]]
```

## `shuffle()`

`Arr::shuffle()` 方法随机打乱数组中的元素。

```php
use Illuminate\Support\Arr;
 
Arr::shuffle([1, 2, 3, 4, 5]); // [3, 2, 5, 1, 4] - (generated randomly)
```

## `sort`

`Arr::sort()` 方法对数组进行排序。

```php
use Illuminate\Support\Arr;

$array = ['Desk', 'Table', 'Chair'];

Arr::sort($array); // ['Chair', 'Desk', 'Table']
```

也可以按给定闭包的结果对数组进行排序：

```php
use Illuminate\Support\Arr;

$array = [
    ['name' => 'Desk'],
    ['name' => 'Table'],
    ['name' => 'Chair'],
];

array_values(Arr::sort($array, fn (array $value) => $value['name']));
/*
[
    ['name' => 'Chair'],
    ['name' => 'Desk'],
    ['name' => 'Table'],
]
*/
```

## `sortDesc()`

`Arr::sortDesc()` 方法对数组进行降序排序。

```php
use Illuminate\Support\Arr;

$array = ['Desk', 'Table', 'Chair'];

Arr::sortDesc($array); // ['Table', 'Desk', 'Chair']
```

也可以按给定闭包的结果对数组进行降序排序：

```php
use Illuminate\Support\Arr;

$array = [
    ['name' => 'Desk'],
    ['name' => 'Table'],
    ['name' => 'Chair'],
];

array_values(Arr::sortDesc($array, fn (array $value) => $value['name']));
/*
[
    ['name' => 'Table'],
    ['name' => 'Desk'],
    ['name' => 'Chair'],
]
*/
```

## `sortRecursive()`

`Arr::sortRecursive()` 方法递归地对数组进行排序。

```php
use Illuminate\Support\Arr;

$array = [
    ['Roman', 'Taylor', 'Li'],
    ['PHP', 'Ruby', 'JavaScript'],
    ['one' => 1, 'two' => 2, 'three' => 3],
];

Arr::sortRecursive($array);
/*
    [
        ['JavaScript', 'PHP', 'Ruby'],
        ['one' => 1, 'three' => 3, 'two' => 2],
        ['Li', 'Roman', 'Taylor'],
    ]
*/
```

如果需要按降序进行排序，可以使用 `Arr::sortRecursiveDesc()` 方法。

```php
Arr::sortRecursiveDesc($array);
```

## `take()`

自 Laravel 10.44 开始，提供了 `Arr::take()` 方法从数组中获取指定数量项目的方法。

如果提供的是正整数它将从数组的前面获取，如果提供的是负整数并从数组的末尾获取：

```php
$data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Arr::take($data, 3);  // [1, 2, 3]
Arr::take($data, -3); // [7, 8, 9]
Arr::take($data, 0);  // []
Arr::take($data, 1);  // [1]
Arr::take($data, -1); // [9]
```

它的作用跟 [`Collection::take()`](/collections/take.md) 一致。

## `toCssClasses()`

`Arr::toCssClasses()` 方法将数组转换为空格分隔的 CSS 类字符串。

```php
use Illuminate\Support\Arr;
 
$array = ['p-4', 'font-bold' => false, 'bg-red' => true];

Arr::toCssClasses($array); // 'p-4 bg-red'
```

> 如果数组元素是数字键则它将始终包含在渲染的类列表中。

## `toCssStyles()`

`Arr::toCssStyles()` 方法将数组转换为 CSS 样式字符串。

该方法接受一个类数组，其中数组键包含您要添加的一个或多个类，而值是一个布尔表达式。

如果数组元素有数字键，它将始终包含在渲染的类列表中：

```php
use Illuminate\Support\Arr;
 
$array = ['background-color: blue', 'font-size: 1.5rem' => false, 'color: blue' => true];
 
Arr::toCssStyles($array); // 'background-color: blue; color: blue;'
```

## `undot()`

`Arr::undot()` 方法将点符号连接的数组键转换为数组。

```php
use Illuminate\Support\Arr;

$array = ['products' => ['desk' => ['price' => 100]]];

Arr::dot($array); // ['products.desk.price' => 100]
```

与 `undot()` 的功能相比，[`dot()`](#dot) 方法将数组键转换为点符号连接的字符串。

## `where()`

`Arr::where()` 方法根据给定的回调函数过滤数组。

```php
use Illuminate\Support\Arr;

$array = [100, '200', 300, '400', 500];

Arr::where($array, fn (string|int $value, int $key) => is_string($value));
// [1 => '200', 3 => '400']
```

## `whereNotNull()`

`Arr::whereNotNull()` 方法过滤出非 `null` 值的数组项。

```php
use Illuminate\Support\Arr;

$array = [0, null];

Arr::whereNotNull($array); // [0 => 0]
```

## `wrap()`

`Arr::wrap()` 方法将值包装在一个数组中，如果值已经是数组，则不会更改它。

```php
use Illuminate\Support\Arr;

$string = 'Laravel';

Arr::wrap($string); // ['Laravel']
```

如果给定值为 `null`，则将返回一个空数组：

```php
use Illuminate\Support\Arr;

Arr::wrap(null); // []
```

## `data_fill()`

`data_fill()` 函数使用"点"表示法在嵌套数组或对象中设置缺失值：

```php
$data = ['products' => ['desk' => ['price' => 100]]];

data_fill($data, 'products.desk.price', 200); // ['products' => ['desk' => ['price' => 100]]]

data_fill($data, 'products.desk.discount', 10); // ['products' => ['desk' => ['price' => 100, 'discount' => 10]]]
```
`data_fill()` 函数还接受星号作为通配符，并将相应地填充目标：

```php
$data = [
    'products' => [
        ['name' => 'Desk 1', 'price' => 100],
        ['name' => 'Desk 2'],
    ],
];

data_fill($data, 'products.*.price', 200);

/*
[
    'products' => [
        ['name' => 'Desk 1', 'price' => 100],
        ['name' => 'Desk 2', 'price' => 200],
    ],
]
*/
```

## `data_get()`

`data_get()` 函数使用"点"表示法从嵌套数组或对象中检索值：

```php
$data = ['products' => ['desk' => ['price' => 100]]];
 
data_get($data, 'products.desk.price'); // 100
```

`data_get()` 函数还接受一个默认值，如果未找到指定的键，将返回该默认值：

```php
data_get($data, 'products.desk.discount', 0); // 0
```

该函数还接受使用星号的通配符，它可以针对数组或对象的任何键：

```php
$data = [
    'product-one' => ['name' => 'Desk 1', 'price' => 100],
    'product-two' => ['name' => 'Desk 2', 'price' => 150],
];

data_get($data, '*.name'); // ['Desk 1', 'Desk 2'];
```

## `data_set()`

`data_set()` 函数使用"点"表示法在嵌套数组或对象中设置值：

```php
$data = ['products' => ['desk' => ['price' => 100]]];

data_set($data, 'products.desk.price', 200); // ['products' => ['desk' => ['price' => 200]]]
```

此函数还接受使用星号的通配符，并将相应地在目标上设置值：

```php
$data = [
    'products' => [
        ['name' => 'Desk 1', 'price' => 100],
        ['name' => 'Desk 2', 'price' => 150],
    ],
];

data_set($data, 'products.*.price', 200);
/*
[
    'products' => [
        ['name' => 'Desk 1', 'price' => 200],
        ['name' => 'Desk 2', 'price' => 200],
    ],
]
*/
```

默认情况下，任何现有值都会被覆盖。如果只想设置一个不存在的值，则可以将其 `false` 作为第四个参数传递给该函数：

```php
$data = ['products' => ['desk' => ['price' => 100]]];

data_set($data, 'products.desk.price', 200, overwrite: false);
// ['products' => ['desk' => ['price' => 100]]]
```

## `data_forget()`

`data_forget()` 函数使用"点"表示法在嵌套数组或对象中删除值：

```php
$data = ['products' => ['desk' => ['price' => 100]]];

data_forget($data, 'products.desk.price'); // ['products' => ['desk' => []]]
```

此函数还接受使用星号的通配符，并将相应地删除目标上的值：

```php
$data = [
    'products' => [
        ['name' => 'Desk 1', 'price' => 100],
        ['name' => 'Desk 2', 'price' => 150],
    ],
];

data_forget($data, 'products.*.price');
/*
[
    'products' => [
        ['name' => 'Desk 1'],
        ['name' => 'Desk 2'],
    ],
]
*/
```

## `head()`

`head()` 函数返回给定数组中的第一个元素：

```php
$array = [100, 200, 300];

head($array); // 100
```
