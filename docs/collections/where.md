# where方法

通过给定的键值过滤集合。

```
$collection = collect([
    ['product' => 'Desk', 'price' => 200],
    ['product' => 'Chair', 'price' => 100],
    ['product' => 'Bookcase', 'price' => 150],
    ['product' => 'Door', 'price' => 100],
]);

$filtered = $collection->where('price', 100);

$filtered->all();

/*
[
    ['product' => 'Chair', 'price' => 100],
    ['product' => 'Door', 'price' => 100],
]
*/
```

> 比较数值的时候，`where` 方法使用「宽松」比较，意味着具有整数值的字符串将被认为等于相同值的整数。
> 使用 [whereStrict](/collections/whereStrict.md) 方法来进行「严格」比较过滤。