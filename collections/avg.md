## avg方法

返回给定键的**平均值**。

```
$average = collect([['foo' => 10], ['foo' => 10], ['foo' => 20], ['foo' => 40]])->avg('foo'); // 20

$average = collect([1, 1, 2, 4])->avg(); // 2
```