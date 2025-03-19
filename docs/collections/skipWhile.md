# skipWhile

跳过集合中的项目，同时给定的回调返回 `true` ，然后将集合中的其余项目作为新集合返回。

```php
collect([1, 2, 3, 4])->skipWhile(1) // [1 => 2, 2 => 3, 3 => 4]
```

## 自定义回调

```php
collect([1, 2, 3, 4])->skipWhile(
    fn($item) => $item <= 3
); // [3 => 4]
```

> **注意：** 如果回调从不返回 `true`，则 `skipWhile` 方法将返回一个空集合。
> ```php
> collect([1, 2, 3, 4])->skipWhile(fn () => true); // []
> ```

## 相关方法

- [skip](skip.md)
- [take](take.md)
- [skipUntil](skipUntil.md)
