# whereNotInStrict

使用严格模式通过集合中不包含的给定键值对进行匹配

```php
collect([
  ['product' => 'apples', 'price' => '50'],
  ['product' => 'pears', 'price' => '60'],
  ['product' => 'banners', 'price' => '70'],
  ['product' => 'coconuts', 'price' => '80'],
])->whereNotInStrict('price', [60, 80]);

// output
/*
[
    ["product" => "apples", "price" => "50"],
    ["product" => "pears", "price" => "60"],
    ["product" => "banners", "price" => "70"],
    ["product" => "coconuts", "price" => "80"]
]
 */
```

此方法的使用和 [whereNotIn](whereNotIn.md) 方法类似，只是使用了「严格」比较来匹配所有值。

## 相关方法

- [whereNotIn](whereNotIn.md)
- [whereIn](whereIn.md)
