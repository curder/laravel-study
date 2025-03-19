# collapse

> 将数组集合折叠成单个集合。

## 相关示例

::: code-group
```php [二维数组]
$collections = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

collect($collections)->collapse(); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 上面 `collapse` 方法的使用类似于 `flatten` 方法的调用结果
collect($collections)->flatten(); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

```php [多维数组]
$collections = [[[1]], [[2]], [[3]], [3, 4, 5]];

collect($collections)->collapse(); // [[1], [2], [3], 3, 4, 5]

// 上面 `collapse` 方法的使用类似于 `flatten(1)` 方法的调用结果
collect($collections)->flatten(1); // [[1], [2], [3], 3, 4, 5]
```
:::

## 关联方法

- [flatten](flatten.md)
