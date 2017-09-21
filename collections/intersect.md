# intersect方法

从原集合中删除不在给定数组或集合中的任何值，最终的集合会保留原集合的键。

```
$collection = collect(['Desk', 'Sofa', 'Chair']);

$intersect = $collection->intersect(['Desk', 'Chair', 'Bookcase']);

$intersect->all(); // [0 => 'Desk', 2 => 'Chair']
```
> 不改变原数组。