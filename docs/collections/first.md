# first

> 返回集合中第一个元素

::: code-group

```php [基本使用]
collect([1, 2, 3, 4])->first(); // 1
```

```php [回调逻辑]
// 从集合左往右遍历，满足条件元素被返回。
collect([1, 2, 3, 4])->first(fn ($element) => $element > 3); // 4
```

```php [默认值]
// 当通过回调函数遍历集合没有满足条件的返回值时，默认值将会被返回
collect([1, 2, 3, 4])->first(fn ($item) => $item < 1, 1000); // 1000
collect([])->first(null, 1000); // 1000
```
:::

> 如果需要返回最后一个元素可以使用 [last](last.md) 方法。

## 其它方法

- [last](last.md)
