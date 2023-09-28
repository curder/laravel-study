# has

判断集合中是否存在给定的键。

```php
$collection = collect(['account_id' => 1, 'product' => 'Desk', 'amount' => 5]);

$collection->has('product'); // true
$collection->has(['product', 'amount']); // true
$collection->has(['amount', 'price']); // false
```

## 相关方法

- [hasAny](hasAny.md)
- [contains](contains.md)
- [doesntContain](doesntContain.md)
- [containsStrict](containsStrict.md)
- [containsOneItem](containsOneItem.md)