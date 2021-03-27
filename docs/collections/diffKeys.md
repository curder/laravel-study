# diffKeys

与另外一个集合或 PHP 数组的「键」进行比较，然后返回原集合中存在而给定的集合中不存在「键」所对应的键值对。

```php
$collection = collect([10 => 'apples', 20 => 'bananas']);
$collection->diffKeys([30 => 'pears', 20 => 'bananas']);

// output
/**
=> Illuminate\Support\Collection {#1087
     all: [
       10 => "apples",
     ],
   }
 */
```
