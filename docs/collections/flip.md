# flip方法

将集合中的键和对应的数值进行互换。

```
$collection = collect(['name' => 'taylor', 'framework' => 'laravel']);

$flipped = $collection->flip();

$flipped->all(); // ['taylor' => 'name', 'laravel' => 'framework']
```