# splitIn

将集合分为给定数量的组。

```php
collect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])->splitIn(3);

/**
=> Illuminate\Support\Collection {#1084
     all: [
       Illuminate\Support\Collection {#1087
         all: [
           1,
           2,
           3,
           4,
         ],
       },
       Illuminate\Support\Collection {#1086
         all: [
           4 => 5,
           5 => 6,
           6 => 7,
           7 => 8,
         ],
       },
       Illuminate\Support\Collection {#1085
         all: [
           8 => 9,
           9 => 10,
         ],
       },
     ],
   }
 */
```
