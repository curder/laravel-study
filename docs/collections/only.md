# only

> 不改变原集合的返回集合中给定键的所有项目。

```php
collect([1, 2, 3, 4])->only([0, 2, 3]);

// [0 => 1, 2 => 3, 3 => 4]
```

`only` 方法的参数接收另一个集合、数组、字符串、可变参数或NULL，并返回对应键的值重新构建的新集合，且新集合中的 `key` 不会被重置。

## 接收字符串或者可变参数

```php
collect(['product' => 'coconuts', 'price' => 10, 'qty' => 45])
    ->only('product', 'price');

// ["product" => "coconuts", "price" => 10]
```
  
## 接收数组参数
```php
collect(['product' => 'coconuts', 'price' => 10, 'qty' => 45])
    ->only(['product', 'price']);

// ["product" => "coconuts", "price" => 10]
```

## 接收集合参数

```php
collect(['product' => 'coconuts', 'price' => 10, 'qty' => 45])
  ->only(collect(['product', 'qty']));

// ["product" => "coconuts", "price" => 10]
```

## Null 参数

```php
collect(['product' => 'coconuts', 'price' => 10, 'qty' => 45])->only(null);

// ["product" => "coconuts", "price" => 10, "qty" => 45]
```
> 传入 `null` 参数，返回的集合将原样返回原集合。

## 不改变原集合

```php
$keys = collect(['product', 'qty']);
$collection = collect(['product' => 'coconuts', 'price' => 10, 'qty' => 45]);
$newCollection = $collection->only($keys);

# 打印原始集合
$collection->dump(); // ["product" => "coconuts", "price" => 10, "qty" => 45]

# 打印新集合
$newCollection->dd(); // ["product" => "coconuts", "qty" => 45]
```

> 与 `only` 相反的操作是 [except](except.md) 方法。

## 相关方法

- [except](except.md)
- [pluck](pluck.md)
