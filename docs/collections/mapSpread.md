# mapSpread 方法

迭代集合的项目，将每个嵌套的项目值传递到给定的闭包中。 闭包可以自由修改并返回它，从而形成一个新的修改后的集合。

```php
collect([1, 2, 3, 4, 5, 6, 7, 8])
  ->chunk(2) // 将集合拆成多个指定大小的小集合
  ->mapSpread(function ($a, $b) {
    return [$a => $b];
  });

// output
/**
=> Illuminate\Support\Collection {#1094
     all: [
       [
         1 => 2,
       ],
       [
         3 => 4,
       ],
       [
         5 => 6,
       ],
       [
         7 => 8,
       ]
     ],
   }
 */
```

值得注意的是，一定要保证对应的值有数据，否则将跟产生预期不符合的错误。

```php
collect([1, 2, 3, 4, 5, 6, 7])
  ->chunk(3)
  ->mapSpread(function ($a, $b, $c) {
    return $a * $b - $c;
  });

// output
/**
  TypeError: Too few arguments to function {closure}(), 2 passed in /Users/curder/Codes/laravel8/vendor/laravel/framework/src/Illuminate/Collections/Traits/EnumeratesValues.php on line 316 and exactly 3 expected
 */
```

## 改变原集合

```php
$collection = collect([1, 2, 3, 4, 5, 6, 7, 8, 9])->chunk(3);

$collection->dump();

$newCollection = $collection->mapSpread(function ($a, $b, $c) {
  return $a * $b - $c;
});

$newCollection->dump();
$collection->dd();

// output
/**
array:3 [
  0 => Illuminate\Support\Collection {#1123
    #items: array:3 [
      0 => 1
      1 => 2
      2 => 3
    ]
  }
  1 => Illuminate\Support\Collection {#1122
    #items: array:3 [
      3 => 4
      4 => 5
      5 => 6
    ]
  }
  2 => Illuminate\Support\Collection {#1121
    #items: array:3 [
      6 => 7
      7 => 8
      8 => 9
    ]
  }
]
array:3 [
  0 => -1
  1 => 14
  2 => 47
]
array:3 [
  0 => Illuminate\Support\Collection {#1123
    #items: array:4 [
      0 => 1
      1 => 2
      2 => 3
      3 => 0
    ]
  }
  1 => Illuminate\Support\Collection {#1122
    #items: array:4 [
      3 => 4
      4 => 5
      5 => 6
      6 => 1
    ]
  }
  2 => Illuminate\Support\Collection {#1121
    #items: array:4 [
      6 => 7
      7 => 8
      8 => 9
      9 => 2
    ]
  }
] 
 */
```
