# reduce

> 将每次迭代的结果传递给下一次迭代直到集合减少为单个值。

```php
collect([1, 2, 3])->reduce(
    fn($carry, $item) => $carry + $item
); // 6
```

> 第一次迭代时 `$carry` 的数值为 `null`；

## 指定初始值

也可以通过传入第二个参数到 `reduce()` 来指定它的初始值：

```php
collect([1, 2, 3])->reduce(
    fn($carry, $item) => $carry + $item,
    4
); // 10
```

> 它与 [map](map.md) 的区别是 [map](map.md) 传入集合或数组，返回是集合；
>
> 而 `reduce()` 传入数组或集合，返回单一值。

## 自定义回调

关联集合中的数组键传递给指定的回调：

```php
$ratio = [
    'usd' => 1,
    'gbp' => 1.37,
    'eur' => 1.22,
];

collect([
    'usd' => 1400,
    'gbp' => 1200,
    'eur' => 1000,
])->reduce(
    fn(int $carry, int $value, int $key) => $carry + ($value * $ratio[$key])
); // 4264
```

## 相关方法

- [map](map.md)
- [each](each.md)
- [sum](sum.md)
