# takeWhile

返回集合中的项目，直到给定的回调返回 `false` 。

```php
collect([1, 2, 3, 4])->takeWhile(function ($item) {
  return $item < 3;
});

/**
=> Illuminate\Support\Collection {#1080
     all: [
       1,
       2,
     ],
   }
 */
```

如果回调从不返回 `false`，则 `takeWhile` 方法将返回集合中的所有项目。

