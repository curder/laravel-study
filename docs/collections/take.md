# take 方法

**不改变原集合**，返回给定数量项目的新集合。

```php
// 当传递给定数量的值时，获取到新集合为给定数量的内容。
collect([1, 2, 3, 4])->take(2);

// output
/**
=> Illuminate\Support\Collection {#1211
     all: [
       1,
       2,
     ],
   }
 */
```

```php
// 当给定的数量值超出原集合数量时，返回所有原集合内容。
collect([1, 2, 3, 4])->take(7);

// output
/**
=> Illuminate\Support\Collection {#1211
     all: [
       1,
       2,
       3,
       4,
     ],
   }
 */
```

```php
// 传入负整数从集合末尾开始获取指定数量的项目
collect([1, 2, 3, 4])->take(-2);

// output
/**
=> Illuminate\Support\Collection {#1212
     all: [
       2 => 3,
       3 => 4,
     ],
   }
 */
```

> **注意：** 观察输出结果会发现，传递负整数时，返回的新集合会保留原集合的key。


## 不改变原集合

```php
$collection = collect([1, 2, 3, 4]);
$newCollection = $collection->take(-2);

$newCollection->dump();
$collection->dd();

// output
/**
array:2 [
  2 => 3
  3 => 4
]
array:4 [
  0 => 1
  1 => 2
  2 => 3
  3 => 4
]
 */
```

----

- `take(1)` 默认返回的是集合，且包含原集合中第一个值，如果需要直接获取第一个值的话可以使用 [first](/collections/first.md) 方法。

- `take(-1)` 默认返回的是集合，且包含原集合中最后的一个值，如果需要直接获取最后一个值的话可以使用 [last](/collections/last.md) 方法。
