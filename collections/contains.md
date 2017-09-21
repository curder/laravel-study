# contains方法

判断集合是否包含给定的项目。

* 基本用法
```
$collection = collect(['name' => 'Desk', 'price' => 100]);

$collection->contains('Desk'); // true

$collection->contains('New York'); // false
```

* 也可以用 contains 方法匹配一对键/值，即判断给定的配对是否存在于集合中

```
$collection = collect([
    ['product' => 'Desk', 'price' => 200], 
    ['product' => 'Chair', 'price' => 100],
]);

$collection->contains('product', 'Bookcase'); // false
dd($collection->contains('price', '100')); // true
```

* 也可以传递一个回调到 contains 方法来执行自己的真实测试

```
$collection = collect([1, 2, 3, 4, 5]);

$collection->contains(function ($value, $key) {
    return $value > 5;
}); // false
```


[contains](/collections/contains.md) 方法在检查项目值时使用「宽松」比较，意味着具有整数值的字符串将被视为等于相同值的整数。 相反 [containsStrict](/collections/containsStrict.md) 方法则是使用「严格」比较进行过滤。