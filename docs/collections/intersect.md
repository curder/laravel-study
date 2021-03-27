# intersect

从原集合中删除不在给定数组或集合中的任何值，最终的集合会保留原集合的键。

```php
collect(['Desk', 'Sofa', 'Chair'])->intersect(['Desk', 'Chair', 'Bookcase']);

// output
/**
=> Illuminate\Support\Collection {#1083
     all: [
       0 => "Desk",
       2 => "Chair",
     ],
   }
 */
```

> 不改变原数组或集合。
