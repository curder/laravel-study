# mode方法

返回给定键的众数值。

```
$mode = collect([['foo' => 10], ['foo' => 10], ['foo' => 20], ['foo' => 40]])->mode('foo'); // [10]

$mode = collect([1, 1, 2, 4])->mode(); // [1]
```