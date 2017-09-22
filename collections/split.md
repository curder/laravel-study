# split方法

将集合按给定的值拆分。


```
$collection = collect([1, 2, 3, 4, 5]);

$groups = $collection->split(3);

$groups->toArray(); // [[1, 2], [3, 4], [5]]
```