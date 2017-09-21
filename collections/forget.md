# forget方法

通过给定的键来移除掉集合中对应的内容。

```
$collection = collect(['name' => 'taylor', 'framework' => 'laravel']);

$collection->forget('name');

$collection->all(); // ['framework' => 'laravel']
```
与大多数集合的方法不同，`forget` 不会返回修改过后的新集合；它会直接修改原来的集合。