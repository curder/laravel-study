# partition

可以和 PHP 中的 `list()` 方法结合使用，来分开满足指定条件的元素以及不满足指定条件的元素。

```php
list($underThree, $equalOrAboveThree) = collect([1, 2, 3, 4, 5, 6])
    ->partition(fn($i) => $i < 3);

$underThree->dump(); // [1, 2]
$equalOrAboveThree->dd(); // [3, 4, 5, 6]
```

## 相关方法

- [groupBy](groupBy.md)