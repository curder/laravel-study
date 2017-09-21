# intersectKey方法

删除原集合中不存在于给定数组或集合中的任何键。

```
$collection = collect([
    'serial' => 'UX301', 'type' => 'screen', 'year' => 2009
]);

$intersect = $collection->intersectKey([
    'reference' => 'UX404', 'type' => 'tab', 'year' => 2011
]);

$intersect->all(); // ['type' => 'screen', 'year' => 2009]
```