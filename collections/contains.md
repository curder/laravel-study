# contains方法

判断集合是否包含给定的项目。

```
$collection = collect(['name' => 'Desk', 'price' => 100]);

$collection->contains('Desk'); // true

$collection->contains('New York'); // false
```

也可以用 contains 方法匹配一对键/值，即判断给定的配对是否存在于集合中

```
$collection = collect([
    ['product' => 'Desk', 'price' => 200],
    ['product' => 'Chair', 'price' => 100],
]);

$collection->contains('product', 'Bookcase'); // false
dd($collection->contains('price', '100')); // true
```