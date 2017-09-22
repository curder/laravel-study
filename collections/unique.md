# unique方法

返回集合中所有唯一的项目。返回的集合保留着原数组的键，所以在这个例子中，我们会使用 [values](/collections/values.md) 方法来把键重置为连续编号的索引。

```
$collection = collect([1, 1, 2, 2, 3, 4, 2]);

$unique = $collection->unique(); // [ 0 => 1, 2 => 2, 4 => 3, 5 => 4];

$unique->values()->all(); // [1, 2, 3, 4]
```

处理嵌套数组或对象时，你可以指定用来决定唯一性的键：

```
$collection = collect([
    ['name' => 'iPhone 6', 'brand' => 'Apple', 'type' => 'phone'],
    ['name' => 'iPhone 5', 'brand' => 'Apple', 'type' => 'phone'],
    ['name' => 'Apple Watch', 'brand' => 'Apple', 'type' => 'watch'],
    ['name' => 'Galaxy S6', 'brand' => 'Samsung', 'type' => 'phone'],
    ['name' => 'Galaxy Gear', 'brand' => 'Samsung', 'type' => 'watch'],
]);

$unique = $collection->unique('brand');

$unique->values()->all();

/*
[
    ['name' => 'iPhone 6', 'brand' => 'Apple', 'type' => 'phone'],
    ['name' => 'Galaxy S6', 'brand' => 'Samsung', 'type' => 'phone'],
]
*/
```

你也可以传入自己的回调来确定项目的唯一性：

```
$collection = collect([
    ['name' => 'iPhone 6', 'brand' => 'Apple', 'type' => 'phone'],
    ['name' => 'iPhone 5', 'brand' => 'Apple', 'type' => 'phone'],
    ['name' => 'Apple Watch', 'brand' => 'Apple', 'type' => 'watch'],
    ['name' => 'Galaxy S6', 'brand' => 'Samsung', 'type' => 'phone'],
    ['name' => 'Galaxy Gear', 'brand' => 'Samsung', 'type' => 'watch'],
]);


$unique = $collection->unique(function ($item) {
    return $item['brand'].$item['type'];
});

$unique->values()->all();

/*
[
    ['name' => 'iPhone 6', 'brand' => 'Apple', 'type' => 'phone'],
    ['name' => 'Apple Watch', 'brand' => 'Apple', 'type' => 'watch'],
    ['name' => 'Galaxy S6', 'brand' => 'Samsung', 'type' => 'phone'],
    ['name' => 'Galaxy Gear', 'brand' => 'Samsung', 'type' => 'watch'],
]
*/
```

> 在检查项目值时 `unique` 方法使用的是「宽松」比较，意味着具有整数值的字符串将被视为等于相同值的整数。使用 [uniqueStrict](/collections/uniqueStrict.md) 可以进行「严格」比较 。


