# sortBy方法

以给定的键对集合进行排序。

排序后的集合保留了原数组键，所以在这个例子中，我们使用 [values](/collections/values.md) 方法将键重置为连续编号的索引。


```
$collection = collect([
    ['name' => 'Desk', 'price' => 200],
    ['name' => 'Chair', 'price' => 100],
    ['name' => 'Bookcase', 'price' => 150],
]);

$sorted = $collection->sortBy('price');

$sorted->values()->all();

/*
[
    ['name' => 'Chair', 'price' => 100],
    ['name' => 'Bookcase', 'price' => 150],
    ['name' => 'Desk', 'price' => 200],
]
*/
```