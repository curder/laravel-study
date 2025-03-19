# wrap

> 静态 wrap 方法可以将给定值包装在集合中

```php
collect()->wrap(['string']); // ["string"]

collect()->wrap('string'); // ["string"]     

collect()->wrap(collect('string')); // ["string"]
```

## 相关方法

- [unwrap](unwrap.md)
