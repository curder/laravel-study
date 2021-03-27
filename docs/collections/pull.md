# pull 方法

把给定键对应的值从集合中移除并返回。

```php
$collection = collect(['product_id' => 'prod-100', 'name' => 'Desk']);

$collection->pull('name'); // 'Desk'

$collection->all(); // ['product_id' => 'prod-100']
```

