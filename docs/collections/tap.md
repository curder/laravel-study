# tap方法

将集合传递给回调，在特定点「tap」集合。此举能对集合中的项目执行某些操作，而不影响集合本身。

```
collect([2, 4, 3, 1, 5])
    ->sort()
    ->tap(function ($collection) {
        Log::debug('Values after sorting', $collection->values()->toArray());
    })
    ->shift(); // 1
```