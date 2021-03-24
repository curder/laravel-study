# zip 方法

将给定数组的值与相应索引处的原集合的值合并在一起。

```php
collect([1, 2, 3, 4])->zip([5, 6, 7, 8]);

// output
/**
=> Illuminate\Support\Collection {#1218
     all: [
       Illuminate\Support\Collection {#1217
         all: [
           1,
           5,
         ],
       },
       Illuminate\Support\Collection {#1216
         all: [
           2,
           6,
         ],
       },
       Illuminate\Support\Collection {#1215
         all: [
           3,
           7,
         ],
       },
       Illuminate\Support\Collection {#1214
         all: [
           4,
           8,
         ],
       },
     ],
   }
 */
```


传递多个数组给 zip 方法

```php
collect([1, 2, 3, 4])->zip([5, 6, 7, 8], ['a', 'b', 'c', 'd']);

// output
/**
=> Illuminate\Support\Collection {#1228
     all: [
       Illuminate\Support\Collection {#1227
         all: [
           1,
           5,
           "a",
         ],
       },
       Illuminate\Support\Collection {#1226
         all: [
           2,
           6,
           "b",
         ],
       },
       Illuminate\Support\Collection {#1225
         all: [
           3,
           7,
           "c",
         ],
       },
       Illuminate\Support\Collection {#1224
         all: [
           4,
           8,
           "d",
         ],
       },
     ],
   }
 */
```

如果传递的数组个数不匹配，将以 `null` 填充。

```php
collect([1, 2, 3, 4])->zip([5, 6, 7, 8], ['a', 'b']);

// output
/**
=> Illuminate\Support\Collection {#1224
     all: [
       Illuminate\Support\Collection {#1223
         all: [
           1,
           5,
           "a",
         ],
       },
       Illuminate\Support\Collection {#1222
         all: [
           2,
           6,
           "b",
         ],
       },
       Illuminate\Support\Collection {#1221
         all: [
           3,
           7,
           null,
         ],
       },
       Illuminate\Support\Collection {#1220
         all: [
           4,
           8,
           null,
         ],
       },
     ],
   }
 */
```

当然也可以在提供的数组中传递 `null` 值来重新索引

```php
collect([1, 2, 3, 4])->zip([5, 6, 7, 8], [null, null, 'a', 'b']);

// output
/**
=> Illuminate\Support\Collection {#1230
     all: [
       Illuminate\Support\Collection {#1229
         all: [
           1,
           5,
           null,
         ],
       },
       Illuminate\Support\Collection {#1228
         all: [
           2,
           6,
           null,
         ],
       },
       Illuminate\Support\Collection {#1227
         all: [
           3,
           7,
           "a",
         ],
       },
       Illuminate\Support\Collection {#1226
         all: [
           4,
           8,
           "b",
         ],
       },
     ],
   }
 */
```

## 不改变原集合

```php
$collection = collect([1, 2, 3, 4]);

$newCollection = $collection->zip([5, 6, 7, 8]);

$newCollection->dump();
$collection->dd();

// output
/**
array:4 [
  0 => Illuminate\Support\Collection {#1231
    #items: array:2 [
      0 => 1
      1 => 5
    ]
  }
  1 => Illuminate\Support\Collection {#1230
    #items: array:2 [
      0 => 2
      1 => 6
    ]
  }
  2 => Illuminate\Support\Collection {#1229
    #items: array:2 [
      0 => 3
      1 => 7
    ]
  }
  3 => Illuminate\Support\Collection {#1228
    #items: array:2 [
      0 => 4
      1 => 8
    ]
  }
]
array:4 [
  0 => 1
  1 => 2
  2 => 3
  3 => 4
]
 */
```
