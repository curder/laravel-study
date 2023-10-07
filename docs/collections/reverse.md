# reverse

倒转集合中项目的顺序。 

## 简单数组
```php
collect([1, 2, 3, 4])->reverse();

// [3 => 4, 2 => 3, 1 => 2, 0 => 1]
```

## 键值对数组
```php
collect([
  'key1' => 'string1',
  'key2' => 'string2',
  'key3' => 'string3',
])->reverse();

// ["key3" => "string3", "key2" => "string2", "key1" => "string1"]
```

> **注意：** 倒转后集合的 key 保持原集合的 key 值。

## 重置新集合的key

如果不希望保留原集合中的 key ，可以调用 [values](values.md) 方法。

```php
collect([1, 2, 3, 4])
  ->reverse()
  ->values();

// [4, 3, 2, 1]
```

## 相关方法

- [values](values.md)
- [mapWithKeys](mapWithKeys.md)