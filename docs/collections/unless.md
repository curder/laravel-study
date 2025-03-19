# unless

除非方法的第一个参数的计算结果为 `true`，否则该方法将执行给定的回调。

```php
collect([1, 2, 3])
  ->unless(true, fn($item) => $item->push(4))
  ->unless(false, fn($item) => $item->push(5));

// [1, 2, 3, 5]
```

如果需要反向操作，请使用 [when](when.md) 方法。

## 相关方法

- [when](when.md)
