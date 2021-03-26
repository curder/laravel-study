# where 方法

通过给定的键值过滤集合。

```php
collect([
  ['product' => 'apples', 'price' => 50],
  ['product' => 'pears', 'price' => 50],
  ['product' => 'bananas', 'price' => 70],
  ['product' => 'coconuts', 'price' => 80],
])->where('price', '50');

// output
/**
=> Illuminate\Support\Collection {#1236
     all: [
       [
         "product" => "apples",
         "price" => 50,
       ],
       [
         "product" => "pears",
         "price" => 50,
       ],
     ],
   }
 */
```

还可以编写简单的表达式来过滤集合，比如：`=`，`!=`，`>`，`<`，`>=`，`<=` 等。

```php
collect([
  ['product' => 'apples', 'price' => 50],
  ['product' => 'pears', 'price' => 50],
  ['product' => 'bananas', 'price' => 70],
  ['product' => 'coconuts', 'price' => 80],
])->where('price', '>', '50');

// output
/**
=> Illuminate\Support\Collection {#1238
     all: [
       2 => [
         "product" => "bananas",
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
  ['product' => 'pears', 'price' => 50],
  ['product' => 'bananas', 'price' => 70],
  ['product' => 'coconuts', 'price' => 80],
]);

$newCollection = $collection->where('price', '>', '50');

$newCollection->dump();
$collection->dd();

// output
/**
array:2 [
  2 => array:2 [
    "product" => "bananas"
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
    "price" => 50
  ]
  2 => array:2 [
    "product" => "bananas"
    "price" => 70
  ]
  3 => array:2 [
    "product" => "coconuts"
    "price" => 80
  ]
]
 */
```

> 比较数值的时候，`where` 方法使用「宽松」比较，意味着具有整数值的字符串将被认为等于相同值的整数。
> 
> 使用 [whereStrict](/collections/whereStrict.md) 方法来进行「严格」比较过滤。
