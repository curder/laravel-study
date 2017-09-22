# toArray方法

将集合转换成 PHP 数组。如果集合的值是 `Eloquent` 模型，那也会被转换成数组。

```
$collection = collect(['name' => 'Desk', 'price' => 200]);

$collection->toArray();

/*
[
    ['name' => 'Desk', 'price' => 200],
]
*/
```

> `toArray` 也会将所有集合的嵌套对象转换为数组。
> 如果你想获取原数组，就改用 [all()](/collections/all.md) 方法。