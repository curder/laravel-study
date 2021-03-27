# pluck

获取集合中给定**键**对应的所有值。

```php
collect([
  ['product' => 'apples', 'price' => 50, 'quantity' => 5],
  ['product' => 'banner', 'price' => 60, 'quantity' => 10],
  ['product' => 'oranges', 'price' => 70, 'quantity' => 15],
  ['product' => 'coconuts', 'price' => 80, 'quantity' => 25],
])->pluck('product');

// output
/**
=> Illuminate\Support\Collection {#1247
     all: [
       "apples",
       "banner",
       "oranges",
       "coconuts",
     ],
   }
 */
```

通过 `pluck` 调用生成新的集合。

也可以通过传入第二个参数来指定生成的集合的键。

```php
collect([
  ['product' => 'apples', 'price' => 50, 'quantity' => 5],
  ['product' => 'banner', 'price' => 60, 'quantity' => 10],
  ['product' => 'oranges', 'price' => 70, 'quantity' => 15],
  ['product' => 'coconuts', 'price' => 80, 'quantity' => 25],
])->pluck('product', 'price');

// output
/**
=> Illuminate\Support\Collection {#1249
     all: [
       50 => "apples",
       60 => "banner",
       70 => "oranges",
       80 => "coconuts",
     ],
   }
 */
```

## 不改变原集合

```php
$collection = collect([
  ['product' => 'apples', 'price' => 50, 'quantity' => 5],
  ['product' => 'banner', 'price' => 60, 'quantity' => 10],
  ['product' => 'oranges', 'price' => 70, 'quantity' => 15],
  ['product' => 'coconuts', 'price' => 80, 'quantity' => 25],
]);

$newCollection = $collection->pluck('product', 'quantity');

$newCollection->dump();
$collection->dd();

// output
/**
array:4 [
  5 => "apples"
  10 => "banner"
  15 => "oranges"
  25 => "coconuts"
]

array:4 [
  0 => array:3 [
    "product" => "apples"
    "price" => 50
    "quantity" => 5
  ]
  1 => array:3 [
    "product" => "banner"
    "price" => 60
    "quantity" => 10
  ]
  2 => array:3 [
    "product" => "oranges"
    "price" => 70
    "quantity" => 15
  ]
  3 => array:3 [
    "product" => "coconuts"
    "price" => 80
    "quantity" => 25
  ]
]
 */
```
