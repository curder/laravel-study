# prepend方法

将给定的值添加到集合的开头。

```
$collection = collect([1, 2, 3, 4, 5]);

$collection->prepend(0);

$collection->all(); // [0, 1, 2, 3, 4, 5]
```

也可以传递第二个参数来设置前置项的键

```
$collection = collect(['one' => 1, 'two' => 2]);

$collection->prepend(0, 'zero');

$collection->all(); // ['zero' => 0, 'one' => 1, 'two' => 2]
```