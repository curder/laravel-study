# sort

对集合进行排序。

```php
collect([5, 7, 3, 9])->sort();

// output
/**
=> Illuminate\Support\Collection {#1209
     all: [
       2 => 3,
       0 => 5,
       1 => 7,
       3 => 9,
     ],
   }
 */
```

使用 sort 对集合排序后，新返回的集合会保留原来集合的 key。

```php
collect(['A55', 'B54', 'B22', 'A11'])->sort();

// output
/**
=> Illuminate\Support\Collection {#1209
     all: [
       3 => "A11",
       0 => "A55",
       2 => "B22",
       1 => "B54",
     ],
   }
 */
```

调用 `sort` 方法不传递任何参数默认排序使用值的asci编码进行排序。

自定义回调函数排序

```php
collect(['A-55', 'B54', 'B-22', 'A11'])->sort(fn ($a, $b) =>  str_replace('-', '', $a) < $b ? -1 : 1);

// output
/**
=> Illuminate\Support\Collection {#1228
     all: [
       3 => "A11",
       0 => "A-55",
       2 => "B-22",
       1 => "B54",
     ],
   }
 */
```

## 不改变原集合

```php
$collection = collect(['A-55', 'B54', 'B-22', 'A11']);

$newCollection = $collection->sort(fn ($a, $b) =>  str_replace('-', '', $a) < $b ? -1 : 1);

$newCollection->dump();
$collection->dd();

// output
/**
array:4 [
  3 => "A11"
  0 => "A-55"
  2 => "B-22"
  1 => "B54"
]

array:4 [
  0 => "A-55"
  1 => "B54"
  2 => "B-22"
  3 => "A11"
] 
 */
```


如果有更高级的排序需求，你可以传入回调来用你自己的算法进行排序。请参阅 PHP 文档的 [usort](http://php.net/manual/en/function.usort.php#refsect1-function.usort-parameters)，这是集合的 `sort` 方法在底层所调用的。

如果要对嵌套数组或对象的集合进行排序，参考 [sortBy](./sortBy.md) 和 [sortByDesc](./sortByDesc.md) 方法。
