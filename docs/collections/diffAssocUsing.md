# diffAssocUsing

> 使用回调获取集合中键和值不存在的项目。

```php
collect([10 => 'apples', 25 => 'bananas', 50 => 'coconuts'])
    ->diffAssocUsing(
        ['.1' => 'apples', '.25' => 'pears'],
        fn ($a, $b) => ($a === (int) ($b * 100)) ? 0 : -1 // 在回调函数中返回0或者-1，当为-1时保留，当为0时移除
); // [25 => "bananas", 50 => "coconuts"]

// diffAssocUsing 关注 key 和 value 是否同时匹配。
collect(['123A-G' => 10, '456A-G' => 25])
    ->diffAssocUsing(
        ['123AG' => 10],
        fn ($a, $b) => (str_replace('-', '', $a) === $b) ? 0 : -1
    ); // ["456A-G" => 25]
```

## 相关方法

- [diff](diff.md)
- [diffKeys](diffKeys.md)
- [diffAssoc](diffAssoc.md)
- [diffUsing](diffUsing.md)
- [diffKeysUsing](diffKeysUsing.md)