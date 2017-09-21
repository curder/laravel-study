## avg方法

```
$average = collect([['foo' => 10], ['foo' => 10], ['foo' => 20], ['foo' => 40]])->avg('foo'); // 20

$average = collect([1, 1, 2, 4])->avg(); // 2
```