# shuffle 方法

随机排序集合中的项目。

```php
$collection = collect([1, 2, 3, 4, 5]);

$shuffled = $collection->shuffle();

dump($shuffled->all());
$collection->dd();

/**
array:5 [
  0 => 3
  1 => 4
  2 => 2
  3 => 1
  4 => 5
]

array:5 [
  0 => 1
  1 => 2
  2 => 3
  3 => 4
  4 => 5
]
 */
```
