# flatten方法

将多维集合转为一维。

```
$collection = collect(['name' => 'taylor', 'languages' => ['php', 'javascript']]);

$flattened = $collection->flatten();

$flattened->all(); // ['taylor', 'php', 'javascript'];
```