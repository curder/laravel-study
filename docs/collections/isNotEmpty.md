# isNotEmpty

集合不是空的，`isNotEmpty` 方法会返回 `true`，否则返回 `false`。

```php
collect([])->isNotEmpty(); // false

collect([1, 2, 3, 4])->isNotEmpty(); // true
```

`isNotEmpty` 方法不会检查集合中的元素的类型，仅仅检查集合是否为空。

比如：集合中有且仅有 `null`, `[]`, `''`, `0`, `false` 等元素的时候，返回值依然是 `false`。

```php
collect([''])->isNotEmpty(); // true

collect([null])->isNotEmpty(); // true
```

与 `isNotEmpty` 相反操作的方法是 [isEmpty](isEmpty.md) 方法。

## 相关方法

- [isEmpty](isEmpty.md)
