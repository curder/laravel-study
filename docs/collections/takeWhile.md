# takeWhile

返回集合中的项目，直到给定的回调返回 `false` 。

```php
collect([1, 2, 3, 4])
    ->takeWhile(fn ($item) => $item < 3);

// [1, 2]
```

如果回调从不返回 `false`，则 `takeWhile` 方法将返回集合中的所有项目。

## 相关方法

- [take](take.md)
- [takeUntil](takeUntil.md)
