# nth方法

创建由每隔`n`个元素组成一个新的集合。

```
$collection = collect(['a', 'b', 'c', 'd', 'e', 'f']);

$collection->nth(4); // ['a', 'e']
```

也可以选择传入一个偏移位置作为第二个参数

```
$collection = collect(['a', 'b', 'c', 'd', 'e', 'f']);

$collection->nth(4, 1);// ['b', 'f']
```