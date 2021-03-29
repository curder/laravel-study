# splice


删除并返回从给定值后的内容，原集合也会受到影响。


```php
$collection = collect([1, 2, 3, 4, 5]);

$newCollection = $collection->splice(2);

$newCollection->dump();
$collection->dd();

/**
array:3 [
  0 => 3
  1 => 4
  2 => 5
]

array:2 [
  0 => 1
  1 => 2
]
 */
```

> 如果输入的值不存在则原集合内容不变。


可以传入第二个参数以限制被删除内容的大小。

```php
$collection = collect([1, 2, 3, 4, 5]);
$newCollection = $collection->splice(2, 1);

$newCollection->dump();
$collection->dd();

/**
array:1 [
  0 => 3
]

array:4 [
  0 => 1
  1 => 2
  2 => 4
  3 => 5
]
 */
```

也可以传入含有新项目的第三个参数来代替集合中删除的项目。

```php
$collection = collect([1, 2, 3, 4, 5]);
$newCollection = $collection->splice(2, 1, [10, 11]);

$newCollection->dump();
$collection->dd();

/**
array:1 [
  0 => 3
]

array:6 [
  0 => 1
  1 => 2
  2 => 10
  3 => 11
  4 => 4
  5 => 5
]
 */
```
