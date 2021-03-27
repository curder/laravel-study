# mergeRecursive 方法

将给定的数组或集合与原始集合递归合并。

如果给定项中的字符串键与原始集合中的字符串键匹配，则这些键的值将合并到一个数组中，然后递归完成。

```php
collect(['product_id' => 1, 'price' => 100])->mergeRecursive([
  'product_id' => 2,
  'price' => 200,
  'discount' => false,
]);

/**
=> Illuminate\Support\Collection {#1087
     all: [
       "product_id" => [
         1,
         2,
       ],
       "price" => [
         100,
         200,
       ],
       "discount" => false,
     ],
   }
 */
```

