# whereNotIn

通过集合中不包含的给定键值对过滤

```php
collect([
  ['product' => 'apples', 'price' => 50],
  ['product' => 'pears', 'price' => 60],
  ['product' => 'banners', 'price' => 70],
  ['product' => 'coconuts', 'price' => 80],
])->whereNotIn('price', [60, 80]);

/*
[
  ["product" => "apples", "price" => 50],
  ["product" => "banners", "price" => 70]
]
 */
```

`whereNotIn` 方法在检查项目值时使用「宽松」比较，意味着具有整数值的字符串将被视为等于相同值的整数。你可以使用 [whereNotInStrict](whereNotInStrict.md) 做比较 严格 的匹配。

## 相关方法

- [whereNotInStrict](whereNotInStrict.md)
- [whereIn](whereIn.md)
