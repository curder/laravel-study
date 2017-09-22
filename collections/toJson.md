# toJson方法

将集合转换成 JSON 字符串。

```
$collection = collect(['name' => 'Desk', 'price' => 200]);

$collection->toJson(); // '{"name":"Desk", "price":200}'
```