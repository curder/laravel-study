# implode方法

合并集合中的项目。

```
$collection = collect([
    ['account_id' => 1, 'product' => 'Desk'],
    ['account_id' => 2, 'product' => 'Chair'],
]);

$collection->implode('product', ', '); // Desk, Chair
```

> 其参数取决于集合中项目的类型。
> 如果集合包含数组或对象，你应该传入你希望连接的属性的键，以及你希望放在值之间用来「拼接」的字符串


集合包含简单的字符串或数值，只需要传入「拼接」用的字符串作为该方法的唯一参数即可

```
collect([1, 2, 3, 4, 5])->implode('-'); // '1-2-3-4-5'
```