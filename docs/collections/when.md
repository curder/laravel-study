# when

当传入的第一个参数为 `true` 的时，将执行给定的回调。

```php
collect([1, 2, 3])
  ->when(true, fn ($item) => $item->push(4))
  ->when(false, fn ($item) => $item->push(5));

// [1, 2, 3, 4]
```

## 相关方法

- [unless](unless.md)