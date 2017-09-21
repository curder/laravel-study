# reject方法

使用指定的回调过滤集合。如果回调返回 `true` ，就会把对应的项目从集合中移除。

```
$collection = collect([1, 2, 3, 4]);

$filtered = $collection->reject(function ($value, $key) {
    return $value > 2;
});

$filtered->all(); // [1, 2]
```