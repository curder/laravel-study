# contains

> 判断集合是否包含给定的项目，返回最后匹配的布尔值。

::: code-group
```php [基本用法]
collect(['value'])->contains('value1'); // false
collect(['value'])->contains('value'); // true
collect(['key' => 'value'])->contains('value'); // true
```

```php [匹配键值]
$collection = collect([
  ['product' => 'Desk', 'price' => 200],
  ['product' => 'Chair', 'price' => 100],
]);

// 判断给定的配对是否存在于集合中
$collection->contains('product', 'Bookcase'); // false
$collection->contains('price', '100'); // true
```

```php [自定义回调逻辑]
$collection = collect([1, 2, 3, 4, 5]);

$collection->contains(fn ($value, $key) => $value > 4); // true
$collection->contains(fn ($value, $key) => $value > 5); // false
```
:::


## 相关方法

- [has](has.md)
- [doesntContain](doesntContain.md)
- [containsStrict](containsStrict.md)
- [containsOneItem](containsOneItem.md)