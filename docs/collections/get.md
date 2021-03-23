# get方法


返回给定键的项目。如果该键不存在，则返回 `null`。

```
$collection = collect(['name' => 'taylor', 'framework' => 'laravel']);

$value = $collection->get('name'); // taylor
```

可以选择性地传递默认值作为第二个参数：

```
$collection = collect(['name' => 'taylor', 'framework' => 'laravel']);

$value = $collection->get('foo', 'default-value'); // default-value
```

甚至可以将回调函数当作默认值。如果指定的键不存在，就会返回回调的结果：

```
$collection = collect(['name' => 'taylor', 'framework' => 'laravel']);

$collection->get('email', function () {
    return 'default-value';
}); // default-value
```