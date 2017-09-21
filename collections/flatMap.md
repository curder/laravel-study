# flatMap方法

遍历集合并将其中的每个值传递到给定的回调。

可以通过回调修改每个值的内容再返回出来，从而形成一个新的被修改过内容的集合。

然后就可以用 [all()](/collections/all.md) 打印修改后的数组。

```
$collection = collect([
    ['name' => 'Sally'],
    ['school' => 'Arkansas'],
    ['age' => 28]
]);

$flattened = $collection->flatMap(function ($values) {
    return array_map('strtoupper', $values);
});

$flattened->all(); // ['name' => 'SALLY', 'school' => 'ARKANSAS', 'age' => '28'];
```

还可以选择性地传入「深度」参数：

```
$collection = collect([
    'Apple' => [
        ['name' => 'iPhone 6S', 'brand' => 'Apple'],
    ],
    'Samsung' => [
        ['name' => 'Galaxy S7', 'brand' => 'Samsung']
    ],
]);

$products = $collection->flatten(1);

$products->values()->all();

/*
[
    ['name' => 'iPhone 6S', 'brand' => 'Apple'],
    ['name' => 'Galaxy S7', 'brand' => 'Samsung'],
]
*/
```

在这个例子里，调用 flatten 方法时不传入深度参数的话也会将嵌套数组转成一维的，然后返回 `['iPhone 6S', 'Apple', 'Galaxy S7', 'Samsung']`，传入深度参数能限制设置返回数组的层数。