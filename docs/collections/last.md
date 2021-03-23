# last方法

返回集合中通过给定真实测试的最后一个元素。

```
collect([1, 2, 3, 4])->last(function ($value, $key) {
    return $value < 3;
}); // 2
```


你也可以不传入参数调用 `last` 方法来获取集合中最后一个元素。如果集合是空的，返回 `null`：

```
collect([1, 2, 3, 4])->last(); // 4
```

> 如果需要返回第一个元素可以使用[first()](/collections/first.md)方法。