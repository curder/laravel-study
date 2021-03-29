# sum

返回集合内所有项目的总和。

```php
collect([1, 2, 3, 4, 5])->sum();

/**
=> 15
 */
```

如果集合包含嵌套数组或对象，则应该传入一个键来指定要进行求和的值

```php
collect([
  ['name' => 'JavaScript: The Good Parts', 'pages' => 176],
  ['name' => 'JavaScript: The Definitive Guide', 'pages' => 1096],
])->sum('pages'); // 1272

/**
=> 1272
 */
```

另外，也可以传入回调来决定要用集合中的哪些值进行求和

```php
collect([
  ['name' => 'Chair', 'colors' => ['Black']],
  ['name' => 'Desk', 'colors' => ['Black', 'Mahogany']],
  ['name' => 'Bookcase', 'colors' => ['Red', 'Beige', 'Brown']],
])->sum(function ($product) {
  return count($product['colors']);
});

/**
=> 6
 */
```
