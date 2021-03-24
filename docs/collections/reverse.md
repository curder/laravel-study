# reverse方法

倒转集合中项目的顺序。 

## 简单数组
```php
collect([1, 2, 3, 4])->reverse();

// output
/**
=> Illuminate\Support\Collection {#1209
     all: [
       3 => 4,
       2 => 3,
       1 => 2,
       0 => 1,
     ],
   }
 */
```

## 键值对数组
```php
collect([
  'key1' => 'string1',
  'key2' => 'string2',
  'key3' => 'string3',
])->reverse();

// output
/**
=> Illuminate\Support\Collection {#1210
     all: [
       "key3" => "string3",
       "key2" => "string2",
       "key1" => "string1",
     ],
   }
 */
```

> **注意：** 倒转后集合的 key 保持原集合的 key 值。

## 重置新集合的key

如果不希望保留原集合中的 key ，可以调用 [values](/collections/values.md) 方法。

```php
collect([1, 2, 3, 4])
  ->reverse()
  ->values();

// output
/**
=> Illuminate\Support\Collection {#1212
     all: [
       4,
       3,
       2,
       1,
     ],
   }
 */
```
