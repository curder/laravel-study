# times方法

通过回调在给定次数内创建一个新的集合。

```
$collection = Collection::times(10, function ($number) {
    return $number * 9;
});

$collection->all(); // [9, 18, 27, 36, 45, 54, 63, 72, 81, 90]
```

使用这个方法可以与工厂结合使用创建出 `Eloquent` 模型

```
$categories = Collection::times(3, function ($number) {
    return factory(Category::class)->create(['name' => 'Category #'.$number]);
});
$categories->all();

/*
[
    ['id' => 1, 'name' => 'Category #1'],
    ['id' => 2, 'name' => 'Category #2'],
    ['id' => 3, 'name' => 'Category #3'],
]
*/
```