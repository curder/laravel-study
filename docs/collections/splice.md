# splice方法


删除并返回从给定值后的内容，原集合也会受到影响。


```
$collection = collect([1, 2, 3, 4, 5]);

$chunk = $collection->splice(2);

$chunk->all(); // [3, 4, 5]

$collection->all(); // [1, 2]
```

> 如果输入的值不存在则原集合内容不变。


可以传入第二个参数以限制被删除内容的大小。

```
$collection = collect([1, 2, 3, 4, 5]);

$chunk = $collection->splice(2, 1);

$chunk->all(); // [3]

$collection->all(); // [1, 2, 4, 5]
```

也可以传入含有新项目的第三个参数来代替集合中删除的项目。

```
$collection = collect([1, 2, 3, 4, 5]);

$chunk = $collection->splice(2, 1, [10, 11]);

$chunk->all(); // [3]

$collection->all(); // [1, 2, 10, 11, 4, 5]
```