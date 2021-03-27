# partition 方法

可以和 PHP 中的 `list()` 方法结合使用，来分开通过指定条件的元素以及那些不通过指定条件的元素。

```php
$collection = collect([1, 2, 3, 4, 5, 6]);

list($underThree, $equalOrAboveThree) = $collection->partition(function ($i) {
  return $i < 3;
});

$underThree->dump();
$equalOrAboveThree->dd();

/**
array:2 [
  0 => 1
  1 => 2
]

array:4 [
  2 => 3
  3 => 4
  4 => 5
  5 => 6
]
 */
```
