# intersect

> 从原集合中删除不在给定数组或集合中的任何值，最终的集合会保留原集合的键，相当于两个集合的交集。

```php
collect(['Desk', 'Sofa', 'Chair'])
    ->intersect(['Desk', 'Chair', 'Bookcase']);
 
// [ "Desk", "Chair"]
```

> 不改变原数组或集合。

## 相关方法

- [union](union.md)
- [diff](diff.md)
- [intersectByKeys](intersectByKeys.md)
