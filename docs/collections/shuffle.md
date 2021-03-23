# shuffle方法

随机排序集合中的项目。

```
$collection = collect([1, 2, 3, 4, 5]);

$shuffled = $collection->shuffle();

$shuffled->all(); // [3, 2, 5, 1, 4] - (generated randomly)
```