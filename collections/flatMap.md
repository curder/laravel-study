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