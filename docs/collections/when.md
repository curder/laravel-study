# when

当传入的第一个参数为 `true` 的时，将执行给定的回调。

```php
collect([1, 2, 3])
  ->when(true, function ($collection) {
    return $collection->push(4);
  })
  ->when(false, function ($collection) {
    return $collection->push(5);
  });

/**
=> Illuminate\Support\Collection {#1085
     all: [
       1,
       2,
       3,
       4,
     ],
   }
 */
```
