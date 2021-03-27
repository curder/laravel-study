# mapWithKeys

遍历集合并将每个值传入给定的回调。回调应该返回包含一个键值对的关联数组

```php
collect([
  'value1' => 'first',
  'value2' => 'second',
])->mapWithKeys(function ($item, $key) {
  return [$item => $key];
});

// output
/**
=> Illuminate\Support\Collection {#1085
     all: [
       "first" => "value1",
       "second" => "value2",
     ],
   } 
 */
```

可以在 `mapWithKeys` 的回调函数中返回空数组来忽略集合中的某些元素。

```php
collect([
  'value1' => 'first',
  'value2' => 'second',
])->mapWithKeys(function ($item, $key) {
  if ($key === 'value2') { // 集合中 key 为 value2 的项排除
    return [];
  }

  return [$item => $key];
});

// output
/**
=> Illuminate\Support\Collection {#1091
     all: [
       "first" => "value1",
     ],
   }
 */
```

添加更多元素

```php
collect([
  'value1' => 'first',
  'value2' => 'second',
])->mapWithKeys(function ($item, $key) {
  return [
    $item => $key,
    $item. '_upper' => strtoupper($key),
  ];
});

// output
/**
=> Illuminate\Support\Collection {#1093
     all: [
       "first" => "value1",
       "first_upper" => "VALUE1",
       "second" => "value2",
       "second_upper" => "VALUE2",
     ],
   }
 */
```

## 不改变原集合

```php
$collection = collect([1, 2, 3, 4, 5]);

$newCollection = $collection->mapWithKeys(function () {
  return [];
});

$newCollection->dump();
$collection->dd();

// output
/**
[]

array:5 [
  0 => 1
  1 => 2
  2 => 3
  3 => 4
  4 => 5
]
 */
```
