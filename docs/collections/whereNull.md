# whereNull

> 返回集合中给定键为 `null` 的项目

```php
collect([
    ['name' => 'Desk'],
    ['name' => null],
    ['name' => 'Bookcase'],
])->whereNull('name');

// [['name' => null]] 
```

## 相关方法

- [whereNotNull](whereNotNull.md)
- [where](where.md)
