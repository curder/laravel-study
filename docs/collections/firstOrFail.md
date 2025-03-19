# firstOrFail

`firstOrFail` 方法与 [`first`](first.md) 方法相同；

如果没有找到结果则会抛出 `Illuminate\Support\ItemNotFoundException` 异常。

```php
collect([])->firstOrFail(); // Throws ItemNotFoundException...

collect([1, 2, 3, 4])
    ->firstOrFail(
        fn (int $value, int $key) => $value > 5
    ); // Throws ItemNotFoundException...
```

## 相关方法

- [first](first.md)
