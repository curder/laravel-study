# sliding

> sliding 方法返回一个新分组的块集合

```php
collect([1, 2, 3, 4, 5])
    ->sliding(2);
// [[1, 2], [2, 3], [3, 4], [4, 5]]
```

## 使用 step 参数

```php
 collect([1, 2, 3, 4, 5])
   ->sliding(3, step: 2);
 
// [[1, 2, 3], [3, 4, 5]]
```

## 相关方法

- [chunk](chunk.md)
- [take](take.md)
