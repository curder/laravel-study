# whereBetween

通过确定指定的项目值是否在给定范围内来过滤集合。

```php
$collection = collect([
  ['product' => 'apples', 'price' => 50],
  ['product' => 'pears', 'price' => 60],
  ['product' => 'banners', 'price' => 70],
  ['product' => 'coconuts', 'price' => 80],
])->whereBetween('price', [60, 100]);

// output
/**
=> Illuminate\Support\Collection {#1241
     all: [
       1 => [
         "product" => "pears",
         "price" => 60,
       ],
       2 => [
         "product" => "banners",
         "price" => 70,
       ],
       3 => [
         "product" => "coconuts",
         "price" => 80,
       ],
     ],
   }
 */
```

## 不改变原集合

```php
$collection = collect([
  ['product' => 'apples', 'price' => 50],
  ['product' => 'pears', 'price' => 60],
  ['product' => 'banners', 'price' => 70],
  ['product' => 'coconuts', 'price' => 80],
]);

$newCollection = $collection->whereBetween('price', [60, 100]);

$newCollection->dump();
$collection->dd();

// output
/**
array:3 [
  1 => array:2 [
    "product" => "pears"
    "price" => 60
  ]
  2 => array:2 [
    "product" => "banners"
    "price" => 70
  ]
  3 => array:2 [
    "product" => "coconuts"
    "price" => 80
  ]
]
array:4 [
  0 => array:2 [
    "product" => "apples"
    "price" => 50
  ]
  1 => array:2 [
    "product" => "pears"
    "price" => 60
  ]
  2 => array:2 [
    "product" => "banners"
    "price" => 70
  ]
  3 => array:2 [
    "product" => "coconuts"
    "price" => 80
  ]
]
 */
```

如果需要过滤集合的值不包含在某个范围可以使用 [whereNotBetween](./whereNotBetween.md) 方法。
