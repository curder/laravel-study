# takeUntil

> 将返回集合中的项目，直到给定的回调返回 `true`。

```php
collect([1, 2, 3, 4])
    ->takeUntil(fn ($item) => $item >= 3);

// [1, 2]
```

也可以将简单的值传递给 `takeUntil` 方法以获取项目，直到找到给定的值。

```php
collect([1, 2, 3, 4])->takeUntil(3);

// [1, 2]
```

> **注意：** 如果找不到给定的值或回调从未返回 `true` ，则 `takeUntil` 方法将返回集合中的所有项目。
 
## 相关方法

- [take](take.md)
- [takeWhile](takeWhile.md)
