# isEmpty

集合是空的，`isEmpty` 方法返回 `true`，否则返回 `false`。

```php
collect([])->isEmpty(); // true

collect([1, 2, 3, 4])->isEmpty(); // false
```

`isEmpty` 方法不会检查集合中的元素的类型，仅仅检查集合是否为空。

比如：集合中有且仅有 `null`, `[]`, `''`, `0`, `false` 等元素的时候，返回值依然是 `true`。

```php
collect([''])->isEmpty(); // false

collect([null])->isEmpty(); // false

// 可以配合 filter 方法过滤掉转化布尔类型为 false 的值
collect([false, null , [],'', 0])->filter()->isEmpty();
```

## 相关方法

- [isNotEmpty](isNotEmpty.md)
