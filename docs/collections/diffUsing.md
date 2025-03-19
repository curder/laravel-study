# diffUsing

获取集合中不存在给定项目的项目。

```php
collect([10, 25, 50])
    ->diffUsing(
        [0.1, 0.25],
        fn ($a, $b) => $a === (int) ($b * 100) ? 0 : -1 // 在回调函数中返回 0 或者 -1 ，当返回 -1 时保留，当返回 0 时移除
    ); // [2 => 50]

// diffUsing 关注 value 是否匹配。

collect(['123A-G', '456A-G'])
    ->diffUsing(
        ['123AG'],
        fn ($a, $b) => (str_replace('-', '', $a) === $b) ? 0 : -1
    ); // [1 => "456A-G"]
```

## 相关方法

- [diff](diff.md)
- [diffKeys](diffKeys.md)
- [diffAssoc](diffAssoc.md)
- [diffKeysUsing](diffKeysUsing.md)
- [diffAssocUsing](diffAssocUsing.md)
