# sole

> 返回集合中通过给定真值测试的第一个元素。

- 如果集合中没有返回的元素，则将引发 `\Illuminate\Collections\ItemNotFoundException` 异常。
- 如果应返回多个元素，则会抛出 `\Illuminate\Collections\MultipleItemsFoundException` 异常。

```php
collect([1, 2, 3, 4])
    ->sole(fn (int $value) => $value === 2);
// 2
```

如果只有一个元素，也可以调用不带参数来获取集合中的第一个元素，此时相当于 [`first()` 方法](first.md)。

```php
 collect([
    ['product' => 'Desk', 'price' => 200],
])->sole();

// ['product' => 'Desk', 'price' => 200]
```

## 传递键值

```php
collect([
    ['product' => 'Desk', 'price' => 200],
    ['product' => 'Chair', 'price' => 100]
])->sole('product', 'Chair');
 
// ['product' => 'Chair', 'price' => 100]
```

## 相关方法

- [first](first.md)
