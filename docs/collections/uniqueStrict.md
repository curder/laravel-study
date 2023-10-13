# uniqueStrict

uniqueStrict 方法的使用和 [unique](unique.md) 方法类似，只是使用了「严格」比较来过滤。

```php
collect([1, '1', 2, 2, 3, 4, '2'])->unique();

// [1, '1', 2, 3, 4, '2'] 
```

## 自定义键

```php
collect([
    ['name' => 'iPhone 12', 'status' => 1],
    ['name' => 'iPhone 13', 'status' => '1'],
    ['name' => 'iPhone 14', 'status' => 1]
])->uniqueStrict('status');

// [
//  ['name' => 'iPhone 12', 'status' => 1],
//  ['name' => 'iPhone 13', 'status' => '1']
//]
```

## 自定义回调

```php
collect([
  ['name' => 'iPhone 6', 'brand' => 'Apple', 'type' => 'phone'],
  ['name' => 'iPhone 5', 'brand' => 'Apple', 'type' => 'phone'],
  ['name' => 'Apple Watch', 'brand' => 'Apple', 'type' => 'watch'],
  ['name' => 'Galaxy S6', 'brand' => 'Samsung', 'type' => 'phone'],
  ['name' => 'Galaxy Gear', 'brand' => 'Samsung', 'type' => 'watch'],
])->uniqueStrict(fn ($item) => $item['brand'] . $item['type']);

/*
[
    ["name" => "iPhone 6", "brand" => "Apple", "type" => "phone"],
    ["name" => "Apple Watch", "brand" => "Apple", "type" => "watch"],
    ["name" => "Galaxy S6", "brand" => "Samsung", "type" => "phone"],
    ["name" => "Galaxy Gear", "brand" => "Samsung", "type" => "watch"]
]
*/
```

## 相关方法

- [unique](unique.md)