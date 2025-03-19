# containsOneItem

> 判断集合是否包含单个项目，返回布尔值。

```php
collect([])->containsOneItem(); // false
 
collect(['1'])->containsOneItem(); // true
 
collect(['1', '2'])->containsOneItem(); // false
```

## 相关方法

- [contains](contains.md)
- [containsStrict](containsStrict.md)
