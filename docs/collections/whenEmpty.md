# whenEmpty

当集合为空时，`whenEmpty` 方法将执行给定的回调。

```php
collect(['Michael', 'Tom'])
  ->whenEmpty(function ($collection) {
    return $collection->push('Adam');
  })
  ->dump();

collect()
  ->whenEmpty(function ($collection) {
    return $collection->push('Adam');
  })
  ->dd();

/**
array:2 [
  0 => "Michael"
  1 => "Tom"
]

array:1 [
  0 => "Adam"
]
 */
```

第二个闭包可以传递给 `whenEmpty` 方法，当集合不为空时将执行该方法。

```php
collect(['Michael', 'Tom'])
  ->whenEmpty(
    function ($collection) {
      return $collection->push('Adam');
    },
    function ($collection) {
      return $collection->push('Taylor');
    }
  )
  ->dd();
/**
array:3 [
  0 => "Michael"
  1 => "Tom"
  2 => "Taylor"
]
 */
```

如果需要和 `whenEmpty` 方法相反的操作，可以使用 [whereNotEmpty](./whenNotEmpty.md) 方法。
