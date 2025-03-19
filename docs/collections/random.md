# random

> 从集合中返回一个随机项。

```php
collect([1, 2, 3, 4, 5])->random();

// 4 - (retrieved randomly)
```

可以选择性传入一个整数到 `random` 来指定要获取的随机项的数量。

当显式传递希望接收的数量时，则会返回指定数量项目的集合。

```php
collect([1, 2, 3, 4, 5])->random(3);

// [0 => 1, 1 => 2, 4 => 5] - (retrieved randomly)
```

> 如果传入的值大于当前集合中的值，则会抛出 `InvalidArgumentException` 错误。

## 相关方法

- [shuffle](shuffle.md)
