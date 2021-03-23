# collapse方法

将多个数组合并成一个。

```
$collection = collect([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
$collapsed = $collection->collapse();
$collapsed->all(); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```