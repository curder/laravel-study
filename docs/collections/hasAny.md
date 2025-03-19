# hasAny

> 确定集合中是否存在任何指定的键。

```php
$collection = collect(['account_id' => 1, 'product' => 'Desk', 'amount' => 5]);
 
$collection->hasAny(['product', 'price']); // true
$collection->hasAny(['name', 'price']); // false
```

## 相关方法

- [has](has.md)
- [contains](contains.md)
- [doesntContain](doesntContain.md)
- [containsStrict](containsStrict.md)
- [containsOneItem](containsOneItem.md)
