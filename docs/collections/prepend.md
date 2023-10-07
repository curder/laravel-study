# prepend

> 将给定的值添加到集合的开头。

```php
$collection = collect([1, 2, 3, 4, 5]);

$collection->prepend(0);

$collection->all(); // [0, 1, 2, 3, 4, 5]
```

## 指定键

```php
$collection = collect(['one' => 1, 'two' => 2]);

$collection->prepend(0, 'zero');

$collection->all(); // ['zero' => 0, 'one' => 1, 'two' => 2]
```

## 相关方法

- [shift](shift.md)
- [pop](pop.md)
- [push](push.md)
- [merge](merge.md)