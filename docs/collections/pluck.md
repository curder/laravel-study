# pluck

> 获取集合中给定**键**对应的所有值。

## 生成新集合

```php
collect([
  ['product' => 'apples', 'price' => 50, 'quantity' => 5],
  ['product' => 'banner', 'price' => 60, 'quantity' => 10],
  ['product' => 'oranges', 'price' => 70, 'quantity' => 15],
  ['product' => 'coconuts', 'price' => 80, 'quantity' => 25],
])->pluck('product');

// ["apples", "banner", "oranges", "coconuts"]
```

## 指定新集合的键

```php
collect([
  ['product' => 'apples', 'price' => 50, 'quantity' => 5],
  ['product' => 'banner', 'price' => 60, 'quantity' => 10],
  ['product' => 'oranges', 'price' => 70, 'quantity' => 15],
  ['product' => 'coconuts', 'price' => 80, 'quantity' => 25],
])->pluck('product', 'price');

// [50 => "apples", 60 => "banner", 70 => "oranges", 80 => "coconuts"]
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
// [5 => "apples", 10 => "banner", 15 => "oranges", 25 => "coconuts"]

$collection->dd();
/*
[
  ["product" => "apples", "price" => 50, "quantity" => 5]
  ["product" => "banner", "price" => 60, "quantity" => 10]
  ["product" => "oranges", "price" => 70, "quantity" => 15]
  ["product" => "coconuts", "price" => 80, "quantity" => 25]
]
*/
```

## 相关方法

- [only](only.md)
- [except](except.md)
