# reduce

将每次迭代的结果传递给下一次迭代直到集合减少为单个值。

```php
collect([1, 2, 3])->reduce(function ($carry, $item) {
    return $carry + $item;
}); // 6
```

> 第一次迭代时 `$carry` 的数值为 `null`；


也可以通过传入第二个参数到 `reduce()` 来指定它的初始值：

```php
collect([1, 2, 3])->reduce(function ($carry, $item) {
    return $carry + $item;
}, 4); // 10
```

> 它与 [map](/collections/map.md) 的区别是 [map](/collections/map.md) 传入集合或数组，返回是集合；
> 
> 而`reduce()`传入数组或集合，返回单一值。
