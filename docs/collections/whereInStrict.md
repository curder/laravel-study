# whereInStrict

通过给定的键值数组来过滤集合。

```php
collect([
	['product' => 'apples', 'price' => '50'],
	['product' => 'pears', 'price' => '60'],
	['product' => 'banners', 'price' => '70'],
	['product' => 'coconuts', 'price' => '80'],
])->whereInStrict('price', [50, 70, 80]);

// output
/**
=> Illuminate\Support\Collection {#1242
     all: [],
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

$newCollection = $collection->whereInStrict('price', [50, 70, 80]);

$newCollection->dump();
$collection->dd();

// output
/**
[]

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

此方法的使用和 [whereIn](/collections/whereIn.md) 方法类似，只是使用了「严格」比较来匹配所有值。
