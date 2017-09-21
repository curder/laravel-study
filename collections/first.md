# first方法

返回集合中通过给定真实测试的第一个元素。

```
collect([1, 2, 3, 4])->first(function ($value, $key) {
    return $value > 2;
}); // 3
```


也可以不传入参数使用 [first()](/collections/first.md) 方法以获取集合中第一个元素。如果集合是空的，则会返回 null：

```
collect([1, 2, 3, 4])->first(); // 1
```