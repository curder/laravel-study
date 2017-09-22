# transform方法

迭代集合并对集合内的每个项目调用给定的回调。而集合的内容也会被回调返回的值取代。

```
$collection = collect([1, 2, 3, 4, 5]);

$collection->transform(function ($item, $key) {
    return $item * 2;
});

$collection->all(); // [2, 4, 6, 8, 10]
```

> 与大多数集合的方法不同，`transform` 会修改集合本身。如果你想创建新的集合，就改用 [map](/collections/map.md) 方法。