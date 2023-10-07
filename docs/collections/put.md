# put

> 在集合内设置给定的键值对。

```php
$collect = collect(['product_id' => 1, 'name' => 'Desk']);

$collect->put('price', 100);

$collect->all(); // ['product_id' => 1, 'name' => 'Desk', 'price' => 100]
```

## 相关方法

- [merge](merge.md)
- [push](push.md)
- [pop](pop.md) 
- [prepend](prepend.md)
- [shift](shift.md)