# transform

迭代集合并对集合内的每个项目调用给定的回调，而集合的内容也会被回调返回的值取代。

```php
collect([1, 2, 3, 4, 5])
    ->transform(fn ($item) => $item * 2);

// [2, 4, 6, 8, 10]
```

> 与大多数集合的方法不同，`transform` 会修改集合本身。
>
> 如果想创建新集合，应该使用 [map](map.md) 方法。

## 相关方法

- [map](map.md)
- [each](each.md)
