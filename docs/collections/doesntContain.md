# doesntContain

> 判断集合是否不包含给定的项目，可以将闭包传递给 `doesntContain` 方法，以确定集合中是否不存在与给定真值测试匹配的元素。

```php
collect([1, 2, 3, 4, 5])
    ->doesntContain(fn (int $value, int $key) => $value < 5);
// false
```

或者可以将字符串传递给 `doesntContain` 方法来确定集合是否不包含给定的项目值。

```php
collect(['name' => 'Desk', 'price' => 100])
    ->doesntContain('Table'); // true

collect(['name' => 'Desk', 'price' => 100])
    ->doesntContain('Desk'); // false
```

## 相关方法

- [has](has.md)
- [contains](contains.md)
- [containsStrict](containsStrict.md)
- [containsOneItem](containsOneItem.md)
