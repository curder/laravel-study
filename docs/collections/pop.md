# pop

> 移除并返回集合中的最后一个项目。

```php
$collection = collect([1, 2, 3, 4, 5]);

$collection->pop(); // 5

# 原集合被改变
$collection->all(); // [1, 2, 3, 4]
```

## 相关方法

- [shift](shift.md)
- [prepend](prepend.md)
- [push](push.md)
- [merge](merge.md)
