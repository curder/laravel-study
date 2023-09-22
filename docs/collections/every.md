# every

可用于验证集合中每一个元素都通过回调测试。

```php
collect([1, 2, 3, 4])->every(fn ($value, $key) => $value > 2); // false
```

如果给定的集合为空集合，则无论 `every` 方法的回调中表达式的结果，都将返回 `true`。

```php
collect([])->every(fn ($value, $key) => $value > 2); // true
```

## 相关方法

- [map](map.md)
- [each](each.md)
- [mapSpread](mapSpread.md)
- [eachSpread](eachSpread.md)
