# get方法


返回给定键的项目。如果该键不存在，则返回 `null`。

```
$collection = collect(['name' => 'taylor', 'framework' => 'laravel']);

$value = $collection->get('name'); // taylor
```