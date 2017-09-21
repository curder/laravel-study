# filter方法

使用给定的回调函数过滤集合的内容，只留下那些通过给定真实测试的内容。

```
$collection = collect([1, 2, 3, 4]);

$filtered = $collection->filter(function ($value, $key) {
    return $value > 2;
});

$filtered->all(); // [3, 4]
```

如果没有提供回调函数，集合中所有返回`false`的元素都会被移除：

```
$collection = collect([1, 2, 3, null, false, '', 0, []]);

$collection->filter()->all(); // [1, 2, 3]
```

与`filter()`相反的方法，可以查看[reject](/collections/reject.md)。

