# duplicates

> 从集合中检索并返回重复值

```php
collect(['a', 'b', 'a', 'c', 'b'])
    ->duplicates(); // [2 => 'a', 4 => 'b']
```

当集合包含数组或对象，可以传递要检查重复值的属性的键：

```php
collect([
    ['email' => 'abigail@example.com', 'position' => 'Developer'],
    ['email' => 'james@example.com', 'position' => 'Designer'],
    ['email' => 'victoria@example.com', 'position' => 'Developer'],
])->duplicates('position'); // [2 => 'Developer']
```

## 相关方法

- [duplicatesStrict](duplicatesStrict.md)
