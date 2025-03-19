# whenEmpty

当集合为空时，`whenEmpty` 方法将执行给定的回调。

```php
collect(['Michael', 'Tom'])
  ->whenEmpty(fn ($item) => $item->push('Adam'));
// ["Michael", "Tom"]

collect()
  ->whenEmpty(fn ($item) => $item->push('Adam'));
// ["Adam"]
```

## 默认回调

第二个闭包可以传递给 `whenEmpty` 方法，当集合不为空时将执行该方法。

```php
collect(['Michael', 'Tom'])
  ->whenEmpty(
    fn ($item) => $item->push('Adam'),
    fn ($item) => $item->push('Taylor')
  );
// ["Michael", "Tom", "Taylor"]
```

如果需要和 `whenEmpty` 方法相反的操作，可以使用 [whereNotEmpty](whenNotEmpty.md) 方法。

## 相关方法

- [isEmpty](isEmpty.md)
- [isNotEmpty](isNotEmpty.md)
- [whenNotEmpty](whenNotEmpty.md)
