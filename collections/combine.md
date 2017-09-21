## combine方法

将一个集合的值作为「键」，再将另一个数组或者集合的值作为「值」合并成一个集合。

```
$collection = collect(['name', 'age']);

$combined = $collection->combine(['George', 29]);

$combined->all(); // ['name' => 'George', 'age' => 29]
```