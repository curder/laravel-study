# reduceSpread

> 将集合缩减为值数组，将每次迭代的结果传递到后续迭代中，与 [`reduce`](reduce.md) 方法不同的是，它可以接受多个初始值（多维数组）。

```php
collect([[1, 2], [3, 4], [5, 6]])->reduceSpread(
    fn($carry, $item, $key) => [$carry + $item[0] + $item[1]],
    0
); // [21]
```

## 相关方法

- [reduce](reduce.md)
