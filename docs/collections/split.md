# split

将集合按给定的值拆分。

```php
collect([1, 2, 3, 4, 5])->split(3);

/**
=> Illuminate\Support\Collection {#1077
     all: [
       Illuminate\Support\Collection {#1076
         all: [
           1,
           2,
         ],
       },
       Illuminate\Support\Collection {#1075
         all: [
           3,
           4,
         ],
       },
       Illuminate\Support\Collection {#1074
         all: [
           5,
         ],
       },
     ],
   }
 */
```
