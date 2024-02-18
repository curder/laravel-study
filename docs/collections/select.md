# select

自 Laravel 10.44 开始，提供了 `select` 方法用于从多维数组中选择一定数量的键。

类似于 SQL 中的 `SELECT` 语句：

```php
$users = collect([
    ['name' => 'Taylor Otwell', 'role' => 'Developer', 'status' => 'active'],
    ['name' => 'Victoria Faith', 'role' => 'Researcher', 'status' => 'active'],
]);

$users->select(['name', 'role']);

/*
[
    ['name' => 'Taylor Otwell', 'role' => 'Developer'],
    ['name' => 'Victoria Faith', 'role' => 'Researcher'],
],
*/
```