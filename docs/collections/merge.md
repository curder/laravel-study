# merge 方法

将给定数组或集合合并到原集合。

如果给定项目中的字符串键与原集合中的字符串键匹配，给定的项目的值将会覆盖原集合中的值。


```php
collect(['product_id' => 1, 'price' => 100])->merge([
  'price' => 200,
  'discount' => false,
]);

/**
=> Illuminate\Support\Collection {#1084
     all: [
       "product_id" => 1,
       "price" => 200,
       "discount" => false,
     ],
   }
 */
```

如果给定的项目的键是数字，这些值将被追加到集合的末尾。

```php
collect(['Desk', 'Chair'])->merge(['Bookcase', 'Door']);

/**
=> Illuminate\Support\Collection {#1079
     all: [
       "Desk",
       "Chair",
       "Bookcase",
       "Door",
     ],
   }
 */
```
