# when方法

当传入的第一个参数为 `true` 的时，将执行给定的回调。

```
$collection = collect([1, 2, 3]);

$collection->when(true, function ($collection) {
    return $collection->push(4);
});

$collection->all(); // [1, 2, 3, 4]
```