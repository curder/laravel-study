# whereNotNull

> 返回集合中给定键不为 null 的项目

```php
$collection = collect([
    ['name' => 'Desk'],
    ['name' => null],
    ['name' => 'Bookcase'],
])->whereNotNull('name');

/*
[
    ['name' => 'Desk'],
    ['name' => 'Bookcase']
]
*/
```

## 相关方法

- [where](where.md)
- [whereNull](whereNull.md)
