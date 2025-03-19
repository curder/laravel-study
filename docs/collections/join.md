# join

> 将集合的值与字符串连接起来。

使用此方法的第二个参数，还可以指定最终元素应如何附加到字符串。

```php
collect(['a', 'b', 'c'])->join(', '); // 'a, b, c'
collect(['a', 'b', 'c'])->join(', ', ', and '); // 'a, b, and c'
collect(['a', 'b'])->join(', ', ' and '); // 'a and b'
collect(['a'])->join(', ', ' and '); // 'a'
collect([])->join(', ', ' and '); // ''
```

## 相关方法

- [implode](implode.md)
