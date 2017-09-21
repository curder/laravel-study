# only 方法

返回集合中给定键的所有项目。

```
$collection = collect(['product_id' => 1, 'name' => 'Desk', 'price' => 100, 'discount' => false]);

$filtered = $collection->only(['product_id', 'name']);

$filtered->all();

// ['product_id' => 1, 'name' => 'Desk']
```

> 与 `only` 相反的方法，请查看 [except](/collections/except.md)。
