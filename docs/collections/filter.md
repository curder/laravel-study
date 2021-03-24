# filter 方法

使用给定的回调函数过滤集合的内容，只留下那些通过给定真实测试的内容。

```php
collect([1, 2, 3, 4, '', 0, false, []])->filter();

// output
/**
=> Illuminate\Support\Collection {#1213
     all: [
       1,
       2,
       3,
       4,
     ],
   }
 */
```

如果没有提供回调函数，返回的集合中所有`0`，`''`，`false`，`[]` 等元素都会将被移除。

也可以提供对应的回调函数，在回调函数中返回布尔值，返回 `true` 保留，返回 `false` 移除。

```php
collect([1, 2, 3, 4])->filter(fn ($value) => $value % 2 === 0);

// output
/**
=> Illuminate\Support\Collection {#1217
     all: [
       1 => 2,
       3 => 4,
     ],
   }
 */
```

## 不改变原集合

```php
$collection = collect([1, 2, 3, 4]);
$newCollection = $collection->filter(fn ($value) => $value % 2 === 0);

$collection->dump();
$newCollection->dd();

// output
/**
array:4 [
  0 => 1
  1 => 2
  2 => 3
  3 => 4
]
array:2 [
  1 => 2
  3 => 4
]
 */
```

与`filter()`相反的方法，可以查看[reject](/collections/reject.md)。

