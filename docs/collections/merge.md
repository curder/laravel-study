# merge方法

将给定数组或集合合并到原集合。

如果给定项目中的字符串键与原集合中的字符串键匹配，给定的项目的值将会覆盖原集合中的值。


```
$collection = collect(['product_id' => 1, 'price' => 100]);

$merged = $collection->merge(['price' => 200, 'discount' => false]);

$merged->all(); // ['product_id' => 1, 'price' => 200, 'discount' => false]
```

如果给定的项目的键是数字，这些值将被追加到集合的末尾：

```
$collection = collect(['Desk', 'Chair']);

$merged = $collection->merge(['Bookcase', 'Door']);

$merged->all(); // ['Desk', 'Chair', 'Bookcase', 'Door']
```