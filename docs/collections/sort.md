# sort方法

对集合进行排序。序后的集合保留着原数组的键，所以在这个例子中我们使用 [values](/collections/values.md) 方法来把键重置为连续编号的索引。

```
$collection = collect([5, 3, 1, 2, 4]);

$sorted = $collection->sort();

$sorted->values()->all(); // [1, 2, 3, 4, 5]
```

如果有更高级的排序需求，你可以传入回调来用你自己的算法进行排序。请参阅 PHP 文档的 [usort](http://php.net/manual/en/function.usort.php#refsect1-function.usort-parameters)，这是集合的 `sort` 方法在底层所调用的。

如果要对嵌套数组或对象的集合进行排序，参考 [sortBy](/collections/sortBy.md) 和 [sortByDesc](/collections/sortByDesc.md) 方法。