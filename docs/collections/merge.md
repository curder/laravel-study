# merge

> 将给定数组或集合合并到原集合。

如果给定项目中的字符串键与原集合中的字符串键匹配，给定的项目的值将会覆盖原集合中的值。

```php
collect(['product_id' => 1, 'price' => 100])
    ->merge(['price' => 200, 'discount' => false]);

// ["product_id" => 1, "price" => 200, "discount" => false]
```

如果给定的项目的键是数字，这些值将被追加到集合的末尾。

```php
collect(['Desk', 'Chair'])->merge(['Bookcase', 'Door']);

// ["Desk", "Chair", "Bookcase", "Door"]

// 相当于 push 方法
collect(['Desk', 'Chair'])->push(...['Bookcase', 'Door']);
```

## 相关方法

- [push](push.md)
