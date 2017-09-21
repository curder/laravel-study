# pip方法

将集合传给给定的回调并返回结果。


```
$collection = collect([1, 2, 3]);

$piped = $collection->pipe(function ($collection) {
    return $collection->sum();
}); // 6
```