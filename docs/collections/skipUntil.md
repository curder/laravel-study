# skipUntil

跳过集合中的项目，直到给定的回调返回 `true` ，然后将集合中的其余项目作为新集合实例返回。

```php
collect([1, 2, 3, 4])->skipUntil(function ($item) {
  return $item >= 3;
});

/**
=> Illuminate\Support\Collection {#1080
     all: [
       2 => 3,
       3 => 4,
     ],
   }
 */
```

也可以将简单的值传递给 `skipUntil` 方法以跳过所有项目，直到找到给定的值。

```php
collect([1, 2, 3, 4])->skipUntil(3);

/**
=> Illuminate\Support\Collection {#1075
     all: [
       2 => 3,
       3 => 4,
     ],
   }
 */
```

> **注意：** 如果找不到给定的值，或者回调从未返回 `true` ，则 `skipUntil` 方法将返回一个空集合。
