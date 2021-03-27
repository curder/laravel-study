# diffAssoc

与另外一个集合或基于它的键和值的 PHP 数组进行比较，方法会返回原集合不存在于给定集合中的键值对。

```php
$collection = collect([10 => 'apples', 20 => 'bananas']);
$collection->diffAssoc([30 => 'pears', 20 => 'bananas']);

// output
/**
=> Illuminate\Support\Collection {#1087
     all: [
       10 => "apples",
     ],
   }
 */
```
