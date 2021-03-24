# only 方法

不改变原集合的返回集合中给定键的所有项目。

```php
collect([1, 2, 3, 4])->only([0, 2, 3]);

// output
/**
=> Illuminate\Support\Collection {#1217
     all: [
       0 => 1,
       2 => 3,
       3 => 4,
     ],
   }
 */
```

`only` 方法的参数接收另一个集合、数组、字符串、可变参数或NULL，并返回对应键的值重新构建的新集合，且新集合中的 `key` 不会被重置。

## 接收字符串或者可变参数

```php
collect(['product' => 'coconuts', 'price' => 10, 'qty' => 45])->only(
  'product',
  'price'
);

// output
/**
=> Illuminate\Support\Collection {#1214
     all: [
       "product" => "coconuts",
       "price" => 10,
     ],
   } 
 */
```
  
## 接收数组参数
```php
collect(['product' => 'coconuts', 'price' => 10, 'qty' => 45])->only([
  'product',
  'price',
]);

// output
/**
=> Illuminate\Support\Collection {#1216
     all: [
       "product" => "coconuts",
       "price" => 10,
     ],
   }
 */
```

## 接收集合参数

```php
$keys = collect(['product', 'qty']);

collect(['product' => 'coconuts', 'price' => 10, 'qty' => 45])->only($keys);

// output
/**
=> Illuminate\Support\Collection {#1222
     all: [
       "product" => "coconuts",
       "qty" => 45,
     ],
   }
 */
```

## Null 参数

```php
collect(['product' => 'coconuts', 'price' => 10, 'qty' => 45])->only(null);

// output
/**
=> Illuminate\Support\Collection {#1213
     all: [
       "product" => "coconuts",
       "price" => 10,
       "qty" => 45,
     ],
   }
 */
```
> 传入 `null` 参数，返回的集合将原样返回原集合。

## 不改变原集合

```php
$keys = collect(['product', 'qty']);
$collection = collect(['product' => 'coconuts', 'price' => 10, 'qty' => 45]);
$newCollection = $collection->only($keys);

$collection->dump(); // 打印原集合
$newCollection->dd(); // 打印通过 only 方法调用后的新集合

// output
/**
array:3 [
  "product" => "coconuts"
  "price" => 10
  "qty" => 45
]
array:2 [
  "product" => "coconuts"
  "qty" => 45
]
 */
```

> 与 `only` 相反的操作是 [except](/collections/except.md) 方法。
