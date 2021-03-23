# diffAssoc方法

与另外一个集合或基于它的键和值的 PHP 数组进行比较。

这个方法会返回原集合不存在于给定集合中的键值对。

```
$collection = collect([
    'color' => 'orange',
    'type' => 'fruit',
    'remain' => 6
]);

$diff = $collection->diffAssoc([
    'color' => 'yellow',
    'type' => 'fruit',
    'remain' => 3,
    'used' => 6
]);

$diff->all(); // ['color' => 'orange', 'remain' => 6]
```