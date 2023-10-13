# whenNotEmpty

当集合不为空时，`whenNotEmpty` 方法将执行给定的回调。

```php
collect(['michael', 'tom'])
    ->whenNotEmpty(
        fn ($items) => $items->push('adam')
    );

// ["michael", "tom", "adam"]
```

## 默认回调

```php
collect()->whenNotEmpty(
    fn ($items) => $items->push('adam'),
    fn ($items) => $items->push('curder')
);

// ["curder"]
```

## 相关方法

- [isEmpty](isEmpty.md)
- [isNotEmpty](isNotEmpty.md)
- [whenEmpty](whenEmpty.md)