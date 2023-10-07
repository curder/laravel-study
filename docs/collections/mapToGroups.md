# mapToGroups

> 该闭包应返回一个包含单个键/值对的关联数组，从而形成一个新的分组值集合。

```php
collect([
  ['product' => 'apples', 'price' => 59],
  ['product' => 'apples', 'price' => 69],
  ['product' => 'bananas', 'price' => 54],
  ['product' => 'bananas', 'price' => 94],
])->mapToGroups(
    fn ($item) => [$item['product'] => $item['price']]
);

// ["apples" => [59, 69], "bananas" => [54, 94]]
```

### 不改变原集合

```php
$collection = collect([
  ['product' => 'apples', 'price' => 59],
  ['product' => 'apples', 'price' => 69],
  ['product' => 'bananas', 'price' => 54],
  ['product' => 'bananas', 'price' => 94],
]);

$newCollection = $collection->mapToGroups(
    fn ($item) => [$item['product'] => $item['price']]
);

$newCollection->dump(); // ["apples" => [59, 69], "bananas" => [54, 94]]

$collection->dd();
/**
[
 ["product" => "apples", "price" => 59],
 ["product" => "apples", "price" => 69],
 ["product" => "bananas", "price" => 54],
 ["product" => "bananas", "price" => 94]
]
*/
```

## 相关方法

- [groupBy](groupBy.md)
- [mapToDirectory](mapToDictionary.md)