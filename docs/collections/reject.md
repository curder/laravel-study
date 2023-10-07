# reject

> 使用指定的回调过滤集合。

如果回调返回 `true`，就会将对应的项目从集合中移除。

```php
$collection = collect([1, 2, 3, 4])
    ->reject(fn ($item) => $item > 2);

// [1, 2]
```

## 相关方法

- [filter](filter.md)
