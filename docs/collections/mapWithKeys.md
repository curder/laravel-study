# mapWithKeys

> 遍历集合并将每个值传入给定的回调，回调应该返回包含一个键值对的关联数组。

```php
collect([
  'value1' => 'first',
  'value2' => 'second',
])->mapWithKeys(
    fn ($item, $key) => [$item => $key]
);
// ["first" => "value1", "second" => "value2"]
```

## 忽略某些元素

通过回调函数中返回空数组来忽略集合中的某些元素。

```php
collect([
  'value1' => 'first',
  'value2' => 'second',
])->mapWithKeys(
    // 集合中 key 为 value2 的项排除
    fn ($item, $key) => $key === 'value2' ? [] : [$item => $key]
);
// ["first" => "value1"]
```

## 添加更多元素

```php
collect([
  'value1' => 'first',
  'value2' => 'second',
])->mapWithKeys(fn($item, $key) => [
  $item => $key,
  $item . '_upper' => strtoupper($key),
]);

/**
[
   "first" => "value1",
   "first_upper" => "VALUE1",
   "second" => "value2",
   "second_upper" => "VALUE2",
 ]
 */
```

## 不改变原集合

```php
$collection = collect([1, 2, 3, 4, 5]);

$newCollection = $collection->mapWithKeys(function () {
  return [];
});

$newCollection->dump(); // []

$collection->dd(); // [ 1,  2,  3,  4,  5]
```

## 相关方法

- [map](map.md)