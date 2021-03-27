# firstWhere

返回给定键值对的第一个元素。

```php
collect([
  ['product' => 'apples', 'price' => 50],
  ['product' => 'pears', 'price' => 50],
  ['product' => 'banners', 'price' => 50],
  ['product' => 'coconuts', 'price' => 80],
])->firstWhere('price', 50);

// output
/**
=> [
     "product" => "apples",
     "price" => 50,
   ]
 */
```

也可以提供操作符

```php
collect([
  ['product' => 'apples', 'price' => 50],
  ['product' => 'pears', 'price' => 50],
  ['product' => 'banners', 'price' => 50],
  ['product' => 'coconuts', 'price' => 80],
])->firstWhere('price', '>=', 70);

// output
/**
=> [
     "product" => "coconuts",
     "price" => 80,
   ]
 */
```

```php
collect([
  ['product' => 'apples', 'price' => null],
  ['product' => 'pears', 'price' => null],
  ['product' => 'banners', 'price' => 50],
  ['product' => 'coconuts', 'price' => 80],
])->firstWhere('price');

// output
/**
=> [
     "product" => "banners",
     "price" => 50,
   ]
 */
```
