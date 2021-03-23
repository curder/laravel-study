# zip方法

将给定数组的值与相应索引处的原集合的值合并在一起：

```
$collection = collect(['Chair', 'Desk']);

$zipped = $collection->zip([100, 200]);

$zipped->all(); // [['Chair', 100], ['Desk', 200]]
```