## mapToDictionary 方法

通过给定的闭包对集合的项目进行分组。该闭包应返回一个包含单个键/值对的关联数组，从而形成一个新的分组值数组。

```php
collect([
  ['product' => 'apples', 'price' => 59],
  ['product' => 'apples', 'price' => 69],
  ['product' => 'bananas', 'price' => 54],
  ['product' => 'bananas', 'price' => 94],
])->mapToDictionary(fn ($item) => [$item['product'] => $item['price']]);

// output
/**
=> Illuminate\Support\Collection {#1108
     all: [
       "apples" => [
         59,
         69,
       ],
       "bananas" => [
         54,
         94,
       ],
     ],
   }
 */
```

### 不改变原集合

```php
$collection = collect([
  ['product' => 'apples', 'price' => 59],
  ['product' => 'apples', 'price' => 69],
  ['product' => 'bananas', 'price' => 54],
  ['product' => 'bananas', 'price' => 94],
]);

$newCollection = $collection->mapToDictionary(fn ($item) => [$item['product'] => $item['price']]);

$newCollection->dump();
$collection->dd();

// output
/**
array:2 [
  "apples" => array:2 [
    0 => 59
    1 => 69
  ]
  "bananas" => array:2 [
    0 => 54
    1 => 94
  ]
]

array:4 [
  0 => array:2 [
    "product" => "apples"
    "price" => 59
  ]
  1 => array:2 [
    "product" => "apples"
    "price" => 69
  ]
  2 => array:2 [
    "product" => "bananas"
    "price" => 54
  ]
  3 => array:2 [
    "product" => "bananas"
    "price" => 94
  ]
]
 */
```
