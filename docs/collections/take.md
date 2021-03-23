# take方法

返回给定数量项目的新集合

```
$collection = collect([0, 1, 2, 3, 4, 5]);

$chunk = $collection->take(3);

$chunk->all(); // [0, 1, 2]
```

也可以传入负整数从集合末尾开始获取指定数量的项目：

```
$collection = collect([0, 1, 2, 3, 4, 5]);

$chunk = $collection->take(-2);

$chunk->all(); // [4, 5]
```