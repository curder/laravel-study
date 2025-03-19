# countBy

> 计算集合中值的出现次数，默认情况下，该方法计算每个元素的出现次数，允许计算集合中某些"类型"的元素。

::: code-group
```php [简单使用]
collect([1, 2, 2, 2, 3])->countBy();

// [1 => 1, 2 => 3, 3 => 1]
```

```php [使用闭包逻辑]
collect(['alice@gmail.com', 'bob@yahoo.com', 'carlos@gmail.com'])->countBy(
    fn (string $email) => substr(strrchr($email, "@"), 1)
); // ['gmail.com' => 2, 'yahoo.com' => 1]
```
:::

## 相关方法

- [count](count.md)
