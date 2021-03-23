# sortByDesc方法

与 [sortBy](/collections/sortBy.md) 方法一样，但是会以相反的顺序来对集合进行排序。

```
$collection = collect([
    ['name' => 'Desk', 'colors' => ['Black', 'Mahogany']],
    ['name' => 'Chair', 'colors' => ['Black']],
    ['name' => 'Bookcase', 'colors' => ['Red', 'Beige', 'Brown']],
]);

$sorted = $collection->sortBy(function ($product, $key) {
    return count($product['colors']);
});

$sorted->values()->all();

/*
[
    ['name' => 'Bookcase','colors' => ['Red', 'Beige', 'Brown']],
    ['name' => 'Desk', 'colors' => ['Black', 'Mahogany']],
    ['name' => 'Chair', 'colors' => ['Black']]
];
*/
```
