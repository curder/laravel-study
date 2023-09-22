# duplicatesStrict

> 使用严格模式从集合中检索并返回重复值。
 
```php
collect(['1', '2', 3, 1, 2, 3])->duplicatesStrict(); // [5 => 3] // [!code focus]

// duplicates 方法
collect(['1', '2', 3, 1, 2, 3])->duplicates(); // [3 => 1, 4 => 2, 5 => 3]
```

当集合包含数组或对象，可以传递要检查重复值的属性的键：

```php
collect([ // [!code focus]
    ['email' => 'abigail@example.com', 'status' => true], // [!code focus]
    ['email' => 'james@example.com', 'status' => 1], // [!code focus]
    ['email' => 'victoria@example.com', 'status' => 1], // [!code focus]
])->duplicatesStrict('status'); // [2 => 1] // [!code focus]

// duplicates 方法
collect([
    ['email' => 'abigail@example.com', 'status' => true],
    ['email' => 'james@example.com', 'status' => 1],
    ['email' => 'victoria@example.com', 'status' => 1],
])->duplicates('status'); // [1 => 1, 2 => 1]
```

## 相关方法

- [duplicates](duplicates.md)