# map

遍历集合并将每一个值传入给定的回调。

该回调可以任意修改项目并返回，从而形成新的被修改过项目的集合。

```php
collect([1, 2, 3, 4])->map(function ($item) {
  return $item * 10;
});

// output
/**
=> Illuminate\Support\Collection {#1084
     all: [
       10,
       20,
       30,
       40,
     ],
   }
 */
```

> 像其他集合方法一样，`map` 返回一个新集合实例；它不会修改它所调用的集合。如果想改变原集合，得使用 [transform](/collections/transform.md) 方法。

> 它与 [reduce()](/collections/reduce.md) 的区别是 [reduce()](/collections/reduce.md) 传入集合或数组，返回的是单一值；而`map()`传入数组或集合，返回的依然是集合。


## 返回字符串

改变返回集合中value的值，不改变key的内容。

```php
collect(['value1' => 'first', 'value2' => 'second'])->map(function (
  $item,
  $key
) {
  return $item . '_' . $key;
});

// output
/**
=> Illuminate\Support\Collection {#1086
     all: [
       "value1" => "first_value1",
       "value2" => "second_value2",
     ],
   }
 */
```

## 返回数组

改变返回集合中value的值，不改变key的内容。

```php
collect(['value1' => 'first', 'value2' => 'second'])->map(function ($item, $key) {
  return [$item . '_' . $key];
});

// output
/**
=> Illuminate\Support\Collection {#1088
     all: [
       "value1" => [
         "first_value1",
       ],
       "value2" => [
         "second_value2",
       ],
     ],
   }
 */ 
```

## 返回null
如果回调中没有任何返回语句，默认返回null

```php
collect(['value1' => 'first', 'value2' => 'second'])->map(function (
  $item,
  $key
) {
  return null;
});

// output
/**
=> Illuminate\Support\Collection {#1083
     all: [
       "value1" => null,
       "value2" => null,
     ],
   }
 */
```

## 返回空数组

```php
collect(['value1' => 'first', 'value2' => 'second'])->map(function (
  $item,
  $key
) {
  return [];
});

// output
/**
=> Illuminate\Support\Collection {#1082
     all: [
       "value1" => [],
       "value2" => [],
     ],
   }
 */
```

## 不改变原集合

```php
$collection = collect([1, 2, 3, 4]);

$newCollection = $collection->map(function ($item) {
  return $item * 10;
});

$newCollection->dump();
$collection->dd();

// output
/**
array:4 [
  0 => 10
  1 => 20
  2 => 30
  3 => 40
]

array:4 [
  0 => 1
  1 => 2
  2 => 3
  3 => 4
]
 */
```
