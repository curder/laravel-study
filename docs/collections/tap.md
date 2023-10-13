# tap

将集合传递给回调，在特定点「tap」集合。此举能对集合中的项目执行某些操作，而不影响集合本身。

```php
collect([2, 4, 3, 1, 5])
    ->sort()
    ->tap(function (Collection $collection) {
        Log::debug('Values after sorting', $collection->values()->all());
    })
    ->shift();

// 1
```

## 相关方法

- [each](each.md)
- [map](map.md)