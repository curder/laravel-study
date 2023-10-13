# value

> 从集合的第一个元素中检索给定值

```php
collect([
    ['product' => 'Desk', 'price' => 200],
    ['product' => 'Speaker', 'price' => 400],
])->value('price');

// 200
```

## 相关方法

- [values](values.md)