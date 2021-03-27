# sortBy

以给定的键对集合进行正序排序。

`sortBy` 方法默认是正序排序，即数值越小排序越靠前。

```php
collect([
  ['product' => 'apples', 'price' => 9],
  ['product' => 'coconuts', 'price' => 3],
  ['product' => 'bananas', 'price' => 5],
])->sortBy('price');

// output
/*
=> Illuminate\Support\Collection {#1226
     all: [
       1 => [
         "product" => "coconuts",
         "price" => 3,
       ],
       2 => [
         "product" => "bananas",
         "price" => 5,
       ],
       0 => [
         "product" => "apples",
         "price" => 9,
       ],
     ],
   } 
*/
```

如果需要按照数值越大越靠前的倒序排序方式，可以再调用 [reverse](/collections/reverse.md) 方法；

或者使用 [sortByDesc](/collections/sortByDesc.md) 方法。



传入回调函数以决定如何对集合的值进行排序

```php
collect([
  ['product' => 'apples', 'price' => 9, 'code' => 'A-30'],
  ['product' => 'coconuts', 'price' => 3, 'code' => 'A20'],
  ['product' => 'bananas', 'price' => 5, 'code' => 'A50'],
])->sortBy(function ($item) {
  return str_replace('-', '', $item['code']);
});

// output
/**
=> Illuminate\Support\Collection {#1248
     all: [
       1 => [
         "product" => "coconuts",
         "price" => 3,
         "code" => "A20",
       ],
       0 => [
         "product" => "apples",
         "price" => 9,
         "code" => "A-30",
       ],
       2 => [
         "product" => "bananas",
         "price" => 5,
         "code" => "A50",
       ],
     ],
   }
 */
```

## 不改变原集合

```php
$collection = collect([
  ['product' => 'apples', 'price' => 9, 'code' => 'A-30'],
  ['product' => 'coconuts', 'price' => 3, 'code' => 'A20'],
  ['product' => 'bananas', 'price' => 5, 'code' => 'A50'],
]);

$newCollection = $collection->sortBy(function ($item) {
  return str_replace('-', '', $item['code']);
});

$newCollection->dump();
$collection->dd();

// output
/**
array:3 [
  1 => array:3 [
    "product" => "coconuts"
    "price" => 3
    "code" => "A20"
  ]
  0 => array:3 [
    "product" => "apples"
    "price" => 9
    "code" => "A-30"
  ]
  2 => array:3 [
    "product" => "bananas"
    "price" => 5
    "code" => "A50"
  ]
]  

array:3 [
  0 => array:3 [
    "product" => "apples"
    "price" => 9
    "code" => "A-30"
  ]
  1 => array:3 [
    "product" => "coconuts"
    "price" => 3
    "code" => "A20"
  ]
  2 => array:3 [
    "product" => "bananas"
    "price" => 5
    "code" => "A50"
  ]
]
 */
```
