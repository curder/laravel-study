# unwrap

静态 `unwrap` 方法可以从给定值返回集合的基础项。

```php
collect()->unwrap(['string']); // ["string"]

collect()->unwrap('string'); // "string"

collect()->unwrap(collect('string')); // ["string"]
```

## 相关方法

- [wrap](wrap.md)
