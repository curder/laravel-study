# whereIn

通过给定的键值数组来过滤集合。

```php
collect([
 ['product' => 'apples', 'price' => '50'],
 ['product' => 'pears', 'price' => '60'],
 ['product' => 'banners', 'price' => '70'],
 ['product' => 'coconuts', 'price' => '80'],
])->whereIn('price', [50, 70, 80]);

/*
[
  ["product" => "apples", "price" => "50"],
  ["product" => "banners", "price" => "70"],
  ["product" => "coconuts", "price" => "80"]
]
*/
```

`whereIn` 方法在检查项目值时使用「宽松」比较，意味着具有整数值的字符串将被视为等于相同值的整数。

可以使用 [whereInStrict](./whereInStrict.md) 做比较 严格 的匹配。

## 相关方法

- [whereNotIn](whereNotIn.md)
- [whereInStrict](whereInStrict.md)
