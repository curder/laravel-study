# partition方法

可以和 PHP 中的 `list()` 方法结合使用，来分开通过指定条件的元素以及那些不通过指定条件的元素。

```
$collection = collect([1, 2, 3, 4, 5, 6]);

list($underThree, $aboveThree) = $collection->partition(function ($i) {
    return $i < 3;
});
```