# diffAssoc

与另外一个集合或基于它的键和值的 PHP 数组进行比较，返回原集合不存在于给定集合中的键值对。

```php
collect([10 => 'apples', 20 => 'bananas'])
    ->diffAssoc([30 => 'pears', 20 => 'bananas']); // [10 => "apples"]
```

## 相关方法

- [diff](diff.md)