# pipeThrough

> 将集合传递给给定的闭包数组并返回执行闭包的结果。

```php
use Illuminate\Support\Collection;
 
collect([1, 2, 3])->pipeThrough([
    fn(Collection $items) => $items->merge([4, 5]),
    fn(Collection $items) => $items->sum(),
]);

// 15 
```

## 相关方法

- [pipe](pipe.md)
- [pipeInto](pipeInto.md)