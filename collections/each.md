#　each方法

迭代集合中的内容并将其传递到回调函数中。

```
$collection = $collection->each(function ($item, $key) {
    //
});
```

如果要中断对内容的迭代，那就从回调中返回 false：

```
$collection = $collection->each(function ($item, $key) {
    if (/* some condition */) {
        return false;
    }
});
```