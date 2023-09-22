# dd

打印集合的元素并终止脚本的执行。

```php
collect([1, 2, 3, 4])
  ->map(fn($item) => $item * 3)
  ->mapWithKeys(fn($item) => [$item + 10 => $item])
  ->dd()
  ->reverse();

/**
[
  13 => 3
  16 => 6
  19 => 9
  22 => 12
]
 */
```

如果不希望终止脚本的执行，使用 [dump](dump.md) 方法即可。

## 相关方法

- [dump](dump.md)