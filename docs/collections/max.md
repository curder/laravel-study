# max方法

返回给定键的最大值。

```
$max = collect([['foo' => 10], ['foo' => 20]])->max('foo'); // 20

$max = collect([1, 2, 3, 4, 5])->max(); // 5
```