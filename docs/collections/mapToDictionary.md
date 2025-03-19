# mapToDictionary

> 通过给定的闭包对集合的项目进行分组。

该闭包应返回一个包含单个键/值对的关联数组，从而形成一个新的分组值数组。

```php
collect([
  ['product' => 'apples', 'price' => 59],
  ['product' => 'apples', 'price' => 69],
  ['product' => 'bananas', 'price' => 54],
  ['product' => 'bananas', 'price' => 94],
])->mapToDictionary(
    fn ($item) => [$item['product'] => $item['price']]
);

// ["apples" => [59, 69], "bananas" => [54, 94]]
```

## 相关方法

- [groupBy](groupBy.md)
- [mapToGroups](mapToGroups.md)
