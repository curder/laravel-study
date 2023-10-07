# pipe

将集合传给给定的回调并返回结果。

```php
collect([1, 2, 3])->pipe(
    fn($collect) => $collect->sum()
);

// 6

# 类似于直接调用 sum 方法
collect([1, 2, 3])->sum();
```


## 相关方法

- [sum](sum.md)
- [pipeInto](pipeInto.md)
- [pipeThrough](pipeThrough.md)