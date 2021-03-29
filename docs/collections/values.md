# values

返回键被重置为连续编号的新集合。

```php
collect([
  10 => ['product' => 'Desk', 'price' => 200],
  11 => ['product' => 'Desk', 'price' => 200],
])->values();

/**
=> Illuminate\Support\Collection {#1083
     all: [
       [
         "product" => "Desk",
         "price" => 200,
       ],
       [
         "product" => "Desk",
         "price" => 200,
       ],
     ],
   }
 */
```
