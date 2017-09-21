# contains方法

判断集合是否包含给定的项目。

```
$collection = collect(['name' => 'Desk', 'price' => 100]);

$collection->contains('Desk'); // true

$collection->contains('New York'); // false
```