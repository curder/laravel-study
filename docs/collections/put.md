# put方法

在集合内设置给定的键值对。

```
$collection = collect(['product_id' => 1, 'name' => 'Desk']);

$collection->put('price', 100);

$collection->all(); // ['product_id' => 1, 'name' => 'Desk', 'price' => 100]
```