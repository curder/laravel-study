# skipWhile

跳过集合中的项目，同时给定的回调返回 `true` ，然后将集合中的其余项目作为新集合返回。

```php
collect([1, 2, 3, 4])->skipWhile(function ($item) {
  return $item <= 3;
});

/**
=> Illuminate\Support\Collection {#1080
     all: [
       3 => 4,
     ],
   }
 */
```

> **注意：** 如果回调从不返回 `true` ，则 `skipWhile` 方法将返回一个空集合。
