# diffKeysUsing

> 使用回调获取集合中键不存在于给定项中的项

```php
collect([10 => 'apples', 25 => 'bananas', 50 => 'coconuts'])
    ->diffKeysUsing(
        ['.1' => 'apples', '.25' => 'pears'],
        fn ($a, $b) => ($a === (int) ($b * 100)) ? 0 : -1 // 在回调函数中返回0或者-1，当为-1时保留，当为0时移除
    ); // [50 => "coconuts"]

// diffKeysUsing 仅关注于 Key 是否匹配
collect(['123A-G' => 10, '456A-G' => 25])
    ->diffKeysUsing(
        ['123AG' => 20],
        fn ($a, $b)  => str_replace('-', '', $a) === $b ? 0 : -1
    ); // ["456A-G" => 25]
```

## 相关方法

- [diff](diff.md)
- [diffKeys](diffKeys.md)
- [diffAssoc](diffAssoc.md)
- [diffUsing](diffUsing.md)
- [diffAssocUsing](diffAssocUsing.md)