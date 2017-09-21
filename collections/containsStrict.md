# containsStrict方法

此方法和 [contains](/collections/contains.md) 方法类似，但是它却是使用了「严格」比较来比较所有值。

简单使用

```
$collection = collect([
    ['product' => 'Desk', 'price' => 200],
    ['product' => 'Chair', 'price' => 100],
]);

dd($collection->containsStrict('price', '100')); // false
```