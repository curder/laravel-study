# pip

将集合传给给定的回调并返回结果。

```php
collect([1, 2, 3])->pipe(function ($collection) {
  return $collection->sum();
});

/**
=> 6
 */
```
