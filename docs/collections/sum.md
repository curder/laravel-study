# sum

返回集合内所有项目的总和。

```php
collect([1, 2, 3, 4, 5])->sum();

// 15
```

## 指定key

如果集合包含嵌套数组或对象，则应该传入一个键来指定要进行求和的值

```php
collect([
  ['name' => 'JavaScript: The Good Parts', 'pages' => 176],
  ['name' => 'JavaScript: The Definitive Guide', 'pages' => 1096],
])->sum('pages'); 

// 1272
```

## 自定义回调

可以传入回调来决定要用集合中的哪些值进行求和

```php
collect([
  ['name' => 'Chair', 'colors' => ['Black']],
  ['name' => 'Desk', 'colors' => ['Black', 'Mahogany']],
  ['name' => 'Bookcase', 'colors' => ['Red', 'Beige', 'Brown']],
])->sum(fn ($product) => count($product['colors']));

// 6
```

## 相关方法

- [map](map.md)
