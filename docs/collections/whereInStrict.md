# whereInStrict

通过给定的键值数组来过滤集合。

```php
collect([
 ['product' => 'apples', 'price' => '50'],
 ['product' => 'pears', 'price' => '60'],
 ['product' => 'banners', 'price' => '70'],
 ['product' => 'coconuts', 'price' => '80'],
])->whereInStrict('price', [50, 70, 80]);

// []
```

此方法的使用和 [whereIn](whereIn.md) 方法类似，只是使用了「严格」比较来匹配所有值。

## 相关方法

- [whereIn](whereIn.md)
- [whereNotIn](whereNotIn.md)
