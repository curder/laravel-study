# mode

> 返回给定键的众数值。

[众数（mode）](https://zh.wikipedia.org/zh-hans/%E4%BC%97%E6%95%B0_(%E6%95%B0%E5%AD%A6))是指**一组数据中出现次数或出现频率最多的数值**，它是一种位置平均数，不受极端变量值的影响。


```php
collect([1, 1, 2, 4])->mode(); // [1]
```

```php
collect([1, 1, 2, 2])->mode(); // [1, 2]
```

## 传入指定键

```php
collect([
    ['foo' => 10],
    ['foo' => 10],
    ['foo' => 20],
    ['foo' => 40]
])->mode('foo');
// [10]
```
