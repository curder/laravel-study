# crossJoin 方法

将集合的值交叉连接到给定的数组或集合中，返回具有所有可能排列的笛卡尔积。

```php
$collection = collect([1, 2]);
$collection->crossJoin(['a', 'b']);

// output
/**
=> Illuminate\Support\Collection {#1083
     all: [
       [
         1,
         "a",
       ],
       [
         1,
         "b",
       ],
       [
         2,
         "a",
       ],
       [
         2,
         "b",
       ],
     ],
   }
 */
```

```php
$collection = collect([1, 2]);
$collection->crossJoin(['a', 'b'], ['c', 'd']);

// output
/**
=> Illuminate\Support\Collection {#1089
     all: [
       [
         1,
         "a",
         "c",
       ],
       [
         1,
         "a",
         "d",
       ],
       [
         1,
         "b",
         "c",
       ],
       [
         1,
         "b",
         "d",
       ],
       [
         2,
         "a",
         "c",
       ],
       [
         2,
         "a",
         "d",
       ],
       [
         2,
         "b",
         "c",
       ],
       [
         2,
         "b",
         "d",
       ],
     ],
   }
 */
```
