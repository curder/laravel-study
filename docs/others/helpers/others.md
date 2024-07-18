# 其他 Others

## `blank()`

`blank()` 函数用于检查值是否是空值。

```php
blank('');        // true
blank('  ');      // true
blank(null);      // true
blank(collect()); // true
blank([]);        // true

blank(0);         // false
blank(true);      // false
blank(false);     // false
blank(['']);      // false
```

类似的函数 `filled()` 用于确定某个值是否已填充。

## `filled()`

`filled()` 函数用于检查值是否已填充。

```php
filled('');        // false
filled('  ');      // false
filled(null);      // false
filled(collect()); // false
filled([]);        // false

filled(0);         // true
filled(true);      // true
filled(false);     // true
filled(['']);      // true
```

类似的函数 `blank()` 用于确定某个值是否为空。