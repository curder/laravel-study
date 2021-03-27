# diff

将集合与其它集合或纯 PHP 数组进行值的比较，然后返回原集合中存在而给定集合中不存在的值。

```php
$collection = collect([1, 2, 3]);
$collection->diff([2, 4, 6]);

// output
/**
=> Illuminate\Support\Collection {#1087
     all: [
       0 => 1,
       2 => 3,
     ],
   }
 */
```
       
```php
$collection = collect(['apples', 'bananas']);
$collection->diff(['pears', 'bananas']);

// output
/**
=> Illuminate\Support\Collection {#1083
     all: [
       "apples",
     ],
   }
 */
```
