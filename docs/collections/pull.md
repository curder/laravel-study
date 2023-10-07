# pull

> 把给定键对应的值从集合中移除并返回。

```php
$collect = collect(['product_id' => 'prod-100', 'name' => 'Desk']);

$collect->pull('name'); // 'Desk'

$collect->all(); // ['product_id' => 'prod-100']
```

## 相关方法

- [forget](forget.md)
