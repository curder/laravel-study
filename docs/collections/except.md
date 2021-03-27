# except

返回集合中除了指定键以外的所有项目。

```php
collect(['product_id' => 1, 'price' => 100, 'discount' => false])->except([
  'price',
  'discount',
]);

// output
/**
=> Illuminate\Support\Collection {#1085
     all: [
       "product_id" => 1,
     ],
   }
 */
```

与之相反操作是 [only](/collections/only.md) 方法。



