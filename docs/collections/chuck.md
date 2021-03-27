# chuck 方法

将集合拆分多个指定大小的小集合。

```php
$collection = collect([1, 2, 3, 4, 5, 6, 7, 8]);
$collection->chunk(4);

// output
/**
=> Illuminate\Support\Collection {#1089
     all: [
       Illuminate\Support\Collection {#1091
         all: [
           1,
           2,
           3,
           4,
         ],
       },
       Illuminate\Support\Collection {#1090
         all: [
           4 => 5,
           5 => 6,
           6 => 7,
           7 => 8,
         ],
       },
     ],
   }
 */
```

如果集合中的元素个数无法被整除，则会导致拆分后的集合的数量不一致。

```php
$collection = collect([1, 2, 3, 4, 5, 6, 7, 8]);
$collection->chunk(3);

// output
/**
=> Illuminate\Support\Collection {#1088
     all: [
       Illuminate\Support\Collection {#1091
         all: [
           1,
           2,
           3,
         ],
       },
       Illuminate\Support\Collection {#1090
         all: [
           3 => 4,
           4 => 5,
           5 => 6,
         ],
       },
       Illuminate\Support\Collection {#1089
         all: [
           6 => 7,
           7 => 8,
         ],
       },
     ],
   }
 */
```
