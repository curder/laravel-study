# DB 模型和 Eloquent


## orderByRaw 原始查询排序

可以传递原始查询来对结果进行排序。 例如，按照任务在截止日期之前完成的时间对任务进行排序。

```php {4}
// 按任务在截止日期之前完成对任务进行排序
Task::query()
    ->whereNotNull('completed_at')
    ->orderByRaw('due_at - completed_at DESC')
    ->get();
```

## 𝘄𝗵𝗲𝗿𝗲𝗕𝗲𝘁𝘄𝗲𝗲𝗻 获取两个时间之间的数据

使用 `𝘄𝗵𝗲𝗿𝗲𝗕𝗲𝘁𝘄𝗲𝗲𝗻` 加载两个时间戳之间的记录。

```php
// 加载两个时间戳之间完成的任务
Task::whereBetween('completed_at', [
    $request->from ?? '2023-01-01',
    $request->to ??  today()->toDateTimeString(),
]);
```
