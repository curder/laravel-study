# map方法

遍历集合并将每一个值传入给定的回调。

该回调可以任意修改项目并返回，从而形成新的被修改过项目的集合。

```
$collection = collect([1, 2, 3, 4, 5]);

$multiplied = $collection->map(function ($item, $key) {
    return $item * 2;
});

$multiplied->all(); // [2, 4, 6, 8, 10]
```

> 像其他集合方法一样，`map` 返回一个新的集合实例；它不会修改它所调用的集合。如果想改变原集合，得使用 [transform](/collections/transform.md) 方法。

> 它与 [reduce()](/collections/reduce.md) 的区别是 [reduce()](/collections/reduce.md) 传入集合或数组，返回的是单一值；而`map()`传入数组或集合，返回的依然是集合。