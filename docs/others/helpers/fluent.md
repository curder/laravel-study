# Fluent

[Fluent](https://github.com/laravel/framework/blob/master/src/Illuminate/Support/Fluent.php) 是 Laravel 提供的一个实用工具类，可以让我们流畅地创建和操作数组/对象。

开箱即用，它可以转换为数组或 JSON，它可以充当数组，并且可以序列化为 JSON。

它还以流畅的方式动态获取和设置属性，最新的 [Laravel 框架](https://github.com/laravel/framework/pull/50848)已经支持 `fluent()` 函数。

```php
$data = [
    'user' => [
        'name' => 'curder',
        'age' => 32,
    ],
];

fluent($data)->get('user.name'); // curder
```

## 基本使用

### 在数组中的使用

```php
use Illuminate\Support\Fluent;

$data = [
   'name' => 'curder',
];

# key 不存在时抛出错误
$data['email']; // Undefined array key "email"

$fluent = new Fluent($data);

# key 不存在时返回 null
$fluent['email']; // null

# 通过类属性形式获取值
$fluent->name; // curder

# 设置键值
$fluent['age'] = 32;
$fluent->email = 'curder@gmail.com';
/*
[ 
  "name" => "curder"
  "age" => 32 // [!code ++]
  "email" => "curder@gmail.com" // [!code ++]
]
*/
```

### 在对象中的使用

```php
use Illuminate\Support\Fluent;

$data = (object) [
  'name' => 'curder',
];

# 获取对象不存在的属性
$data['email']; // Error: Cannot use object of type stdClass as array

$fluent = new Fluent($data);

# 通过键获取对象的值
$fluent['name']; // curder

# 设置对象的值
$fluent->age = 32;
$fluent->toArray(); // ["name" => "curder", "age" => 32]

# 根据键删除对象属性
unset($fluent['age']);
$fluent->toArray(); // ["name" => "curder"]
```

## 一些方法

### `get()`

通过调用 `get()` 方法获取对象的属性值。

```php
use Illuminate\Support\Fluent;

$data = [
  'user' => [
    'name' => 'curder',
    'email' => 'curder@gmail.com',
  ],
  'posts' => [
    ['title' => 'post title 1'],
    ['title' => 'post title 2']
  ],
];

$fluent = new Fluent($data);

// 获取属性
$fluent->get('user'); // ["name" => "curder", "email" => "curder@gmail.com"]
$fluent->user; // ["name" => "curder", "email" => "curder@gmail.com"]

// 使用点语法获取属性
$fluent->get('user.name'); // curder
$fluent->get('posts.*.title'); // ["post title 1","post title 2"]

# 默认值
$fluent->get('user.age', 32); // 32
```

### `scope()`

与 `get()` 方法的返回值不同的是，使用 `scope()` 方法返回对应的 Fluent 实例。

```php
use Illuminate\Support\Fluent;

$data = [
  'user' => [
    'name' => 'curder',
    'age' => 32,
  ],
  'posts' => [
    ['title' => 'post title 1'],
    ['title' => 'post title 2'],
  ],
];

$fluent = new Fluent($data);

$fluent->scope('user')->toJson(); // {"name":"curder","age":32}

$fluent->scope('posts.*.title')->toJson(); // ["post title 1","post title 2"]
```


### `getAttributes()`

使用 `getAttributes()` 方法以数组的形式返回当前 Fluent 实例的所有属性。

```php
use Illuminate\Support\Fluent;

$data = [
  'name' => 'curder',
];

$fluent = new Fluent($data);

$fluent->getAttributes(); // ["name" => "curder"]
```


### `toArray()` 和 `toJson()`

使用 `toArray()` 方法将 Fluent 实例转换为数组。

使用 `toJson()` 方法将 Fluent 实例转换为 JSON 字符串。

```php
use Illuminate\Support\Fluent;

$data = [
  'name' => 'curder',
];

$fluent = new Fluent($data);

$fluent->toArray(); // ["name" => "curder"]
$fluent->toJson(); // {"name":"curder"}
```

### 动态方法

Fluent 实例支持动态方法，可以动态的设置属性。

```php
use Illuminate\Support\Fluent;

$fluent = new Fluent;

$fluent->name('curder')->age(32)->isAdmin(true);

// ["name" => "curder", "age" => 32, "isAdmin" => true]
```