## chuck方法

将集合拆分多个指定大小的小集合。

```
$collection = collect([1, 2, 3, 4, 5, 6, 7]);
$chunks = $collection->chunk(4);
$chunks->toArray(); // [[1, 2, 3, 4], [5, 6, 7]]
```

