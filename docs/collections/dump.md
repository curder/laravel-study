## dump 方法

打印集合的元素，在调试时很有帮助。

```php
collect([1,2,3,4])
  ->reverse()
  ->dump() // 打印输出
  ->map(fn($value) => $value * 10)
  ->reverse()
  ->dump() // 打印输出
  ->first();
  
// output
/**
array:4 [
  3 => 4
  2 => 3
  1 => 2
  0 => 1
]
array:4 [
  0 => 10
  1 => 20
  2 => 30
  3 => 40
]
10
*/
```

我们可以通过在链式调用集合方法的时候使用`dump`打印出当前的集合状态，以便查看集合状态。

如果需要在某处停止链式调用，建议使用 [dd](/collections/dd.md) 方法。
