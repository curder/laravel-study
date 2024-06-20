# after

> 获取给定项目之后的项目，如果给定的项目处于最后一个或不存在，则返回 `null`。

```php
$tasks = collect([
    ['id' => 1, 'name' => '设计站点首页'],
    ['id' => 2, 'name' => '开发站点首页'],
    ['id' => 3, 'name' => '给首页填充内容'],
    ['id' => 4, 'name' => '设计站点关于我们页面'],
    ['id' => 5, 'name' => '开发站点关于我们页面'],
]);

$tasks->after(fn($task) => $task['name'] === '给首页填充内容'); // ["id" => 4, "name" => "设计站点关于我们页面"]

$tasks->before(fn (array $task) => $task['name'] === '开发站点关于我们页面'); // null
$tasks->before(fn (array $task) => $task['name'] === 'unknown'); // null
```

## 关联方法

- [before](before.md)