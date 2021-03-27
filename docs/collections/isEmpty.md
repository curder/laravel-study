# isEmpty

集合是空的，`isEmpty` 方法返回 `true`，否则返回 `false`。

```php
collect([])->isEmpty();

// output
/**
=> true
 */
```

```php
collect([1, 2, 3, 4])->isEmpty();

// output
/**
=> false
 */
```

`isEmpty` 方法不会检查集合中的元素的类型，仅仅检查集合是否为空。比如：集合中有且仅有 `null`, `''`, `0`, `false` 等元素的时候，返回值依然是 `true`。

```php
collect([''])->isEmpty();

// output
/**
=> false
 */
```

```php
collect([null])->isEmpty();

// output
/**
=> false
 */
```

与 isEmpty 相反操作的方法是 [isNotEmpty](/collections/isNotEmpty.md) 方法。
