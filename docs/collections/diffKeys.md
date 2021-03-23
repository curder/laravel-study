# diffKeys方法

与另外一个集合或 PHP 数组的「键」进行比较，然后返回原集合中存在而给定的集合中不存在「键」所对应的键值对。

```
$collection = collect([
    'one' => 10,
    'two' => 20,
    'three' => 30,
    'four' => 40,
    'five' => 50,
]);

$diff = $collection->diffKeys([
    'two' => 2,
    'four' => 4,
    'six' => 6,
    'eight' => 8,
]);

$diff->all(); // ['one' => 10, 'three' => 30, 'five' => 50]
```