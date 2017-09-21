# reduce方法

将每次迭代的结果传递给下一次迭代直到集合减少为单个值。

```
$collection = collect([1, 2, 3]);

$total = $collection->reduce(function ($carry, $item) {
    return $carry + $item;
}); // 6
```

> 第一次迭代时 `$carry` 的数值为 `null`；


也可以通过传入第二个参数到 `reduce()` 来指定它的初始值：

```
$collection->reduce(function ($carry, $item) {
    return $carry + $item;
}, 4); // 10
```