# whereIn

通过给定的键值数组来过滤集合。

```php
collect([
	['product' => 'apples', 'price' => '50'],
	['product' => 'pears', 'price' => '60'],
	['product' => 'banners', 'price' => '70'],
	['product' => 'coconuts', 'price' => '80'],
])->whereIn('price', [50, 70, 80]);

// output
/**
=> Illuminate\Support\Collection {#1242
     all: [
       0 => [
         "product" => "apples",
         "price" => "50",
       ],
       2 => [
         "product" => "banners",
         "price" => "70",
       ],
       3 => [
         "product" => "coconuts",
         "price" => "80",
       ],
     ],
   }
 */
```


## 不改变原集合

```php
$collection = collect([
	['product' => 'apples', 'price' => '50'],
	['product' => 'pears', 'price' => '60'],
	['product' => 'banners', 'price' => '70'],
	['product' => 'coconuts', 'price' => '80'],
]);

$newCollection = $collection->whereIn('price', [50, 70, 80]);

$newCollection->dump();
$collection->dd();

// output
/**
array:3 [
  0 => array:2 [
    "product" => "apples"
    "price" => "50"
  ]
  2 => array:2 [
    "product" => "banners"
    "price" => "70"
  ]
  3 => array:2 [
    "product" => "coconuts"
    "price" => "80"
  ]
]
array:4 [
  0 => array:2 [
    "product" => "apples"
    "price" => "50"
  ]
  1 => array:2 [
    "product" => "pears"
    "price" => "60"
  ]
  2 => array:2 [
    "product" => "banners"
    "price" => "70"
  ]
  3 => array:2 [
    "product" => "coconuts"
    "price" => "80"
  ]
] 
 */
```

`whereIn` 方法在检查项目值时使用「宽松」比较，意味着具有整数值的字符串将被视为等于相同值的整数。

可以使用 [whereInStrict](./whereInStrict.md) 做比较 严格 的匹配。
