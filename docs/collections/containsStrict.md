# containsStrict

> 此方法和 [contains](contains.md) 方法类似，但 `containsStrict` 是使用了「严格」来比较值。

```php
collect([
  ['product' => 'Desk', 'price' => 200],
  ['product' => 'Chair', 'price' => 100],
])->containsStrict('price', '100'); // false
```

如上例所示，集合中对应的值存在，但是值类型不一致也会返回 `false`。

## 相关方法

- [contains](contains.md)
- [doesntContain](doesntContain.md)
- [containsOneItem](containsOneItem.md)
