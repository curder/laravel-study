# median方法

方法返回给定**键**的中间值。

```
$median = collect([['foo' => 10], ['foo' => 10], ['foo' => 20], ['foo' => 40]])->median('foo'); // 15

$median = collect([1, 1, 2, 4])->median(); // 1.5
```