# collapse方法

将多个数组合并成一个。

```php
$collection = collect([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
$collection->collapse();

// output
/**
=> Illuminate\Support\Collection {#1097
     all: [
       1,
       2,
       3,
       4,
       5,
       6,
       7,
       8,
       9,
     ],
   }
 */
```

上面方法的使用类似于 `flatten` 方法的调用结果。

```php
$collection = collect([
  [0 => ['array1']],
  [1 => ['array2']],
  [2 => ['array3']],
  [3, 4, 5],
]);
$collection->collapse();

// output
/**
=> Illuminate\Support\Collection {#1102
     all: [
       [
         "array1",
       ],
       [
         "array2",
       ],
       [
         "array3",
       ],
       3,
       4,
       5,
     ],
   }
 */
```

上面方法的使用类似于 `flatten(1)` 方法的调用结果。
