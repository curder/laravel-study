# random方法

从集合中返回一个随机项。

```
$collection = collect([1, 2, 3, 4, 5]);

$collection->random(); // 4 - (retrieved randomly)
```

可以选择性传入一个整数到 `random` 来指定要获取的随机项的数量。

只要你显式传递你希望接收的数量时，则会返回项目的集合。

```
$random = $collection->random(3);

$random->all(); // [0 => 1, 1 => 2, 4 => 5] - (retrieved randomly)
```
