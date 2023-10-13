 # sortByDesc

> 以给定的键对集合进行正序排序。

`sortByDesc` 方法默认是正序排序，即数值越小排序越靠前。

```php
collect([
  ['product' => 'apples', 'price' => 9],
  ['product' => 'coconuts', 'price' => 3],
  ['product' => 'bananas', 'price' => 5],
])->sortByDesc('price');

/*
[
    ["product" => "apples", "price" => 9],
    ["product" => "bananas", "price" => 5],
    ["product" => "coconuts", "price" => 3],
]
*/
```

如果需要按照数值越大越靠前的倒序排序方式，可以再调用 [reverse](reverse.md) 方法；

或者使用 [sortBy](sortBy.md) 方法。



传入回调函数以决定如何对集合的值进行排序

```php
collect([
  ['product' => 'apples', 'price' => 9, 'code' => 'A-30'],
  ['product' => 'coconuts', 'price' => 3, 'code' => 'A20'],
  ['product' => 'bananas', 'price' => 5, 'code' => 'A50'],
])->sortByDesc(fn ($item) => str_replace('-', '', $item['code']));

/*
[
    ["product" => "bananas", "price" => 5, "code" => "A50"],
    ["product" => "apples", "price" => 9, "code" => "A-30"],
    ["product" => "coconuts", "price" => 3, "code" => "A20"]
]
*/
```

## 相关方法

- [sort](sort.md)
- [sortBy](sortBy.md)
- [sortDesc](sortDesc.md)
