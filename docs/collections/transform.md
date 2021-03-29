# transform

迭代集合并对集合内的每个项目调用给定的回调，而集合的内容也会被回调返回的值取代。

```php
collect([1, 2, 3, 4, 5])->transform(function ($item, $key) {
  return $item * 2;
});

/**
=> Illuminate\Support\Collection {#1086
     all: [
       2,
       4,
       6,
       8,
       10,
     ],
   }
 */
```

> 与大多数集合的方法不同，`transform` 会修改集合本身。
> 如果想创建新集合，应该使用 [map](/collections/map.md) 方法。

## 改变原集合

```php
$collection = collect([1, 2, 3, 4, 5]);

$newCollection = $collection->transform(function ($item, $key) {
  return $item * 2;
});

$newCollection->dump();
$collection->dd();

/**
array:5 [
  0 => 2
  1 => 4
  2 => 6
  3 => 8
  4 => 10
]

array:5 [
  0 => 2
  1 => 4
  2 => 6
  3 => 8
  4 => 10
]
 */
```
