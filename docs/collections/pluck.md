# pluck方法

获取集合中给定**键**对应的所有值。

```
$collection = collect([
    ['product_id' => 'prod-100', 'name' => 'Desk'],
    ['product_id' => 'prod-200', 'name' => 'Chair'],
]);

$plucked = $collection->pluck('name');

$plucked->all(); // ['Desk', 'Chair']
```

也可以通过传入第二个参数来指定生成的集合的键：

```
$plucked = $collection->pluck('name', 'product_id');

$plucked->all(); // ['prod-100' => 'Desk', 'prod-200' => 'Chair']
```