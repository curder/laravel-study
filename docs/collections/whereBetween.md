# whereBetween

通过确定指定的项目值是否在给定范围内来过滤集合。

```php
$collection = collect([
  ['product' => 'apples', 'price' => 50],
  ['product' => 'pears', 'price' => 60],
  ['product' => 'banners', 'price' => 70],
  ['product' => 'coconuts', 'price' => 80],
])->whereBetween('price', [60, 100]);

/*
[ 
   ["product" => "pears", "price" => 60],
   ["product" => "banners", "price" => 70],
   ["product" => "coconuts", "price" => 80]        
]
*/
```

如果需要过滤集合的值不包含在某个范围可以使用 [whereNotBetween](whereNotBetween.md) 方法。

## 相关方法

- [whereNotBetween](whereNotBetween.md)
