# whereStrict 方法
       
通过给定的键值过滤集合。

```php
collect([
  ['product' => 'apples', 'price' => 50],
  ['product' => 'pears', 'price' => 50],
  ['product' => 'bananas', 'price' => 70],
  ['product' => 'coconuts', 'price' => 80],
])->whereStrict('price', '50');

// output
/**
=> Illuminate\Support\Collection {#1236
     all: [],
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
])->whereStrict('price', '>', '50');

// output
/**
=> Illuminate\Support\Collection {#1238
     all: [],
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

$newCollection = $collection->whereStrict('price', '>', '50');

$newCollection->dump();
$collection->dd();

// output
/**
[]

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

> 比较数值的时候，`whereStrict` 方法使用「严格」比较，意味着具有整数值的字符串将被认为等于相同值的整数。
>
> 使用 [where](/collections/where.md) 方法来进行较为松散比较过滤。
