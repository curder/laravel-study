# diffKeys

> 与另外一个集合或 PHP 数组的「键」进行比较，返回原集合中存在而给定的集合中不存在「键」所对应的键值对。

```php
collect([10 => 'apples', 20 => 'pears'])
    ->diffKeys([30 => 'pears', 20 => 'bananas']); // [10 => "apples"]
```

## 相关方法

- [diff](diff.md)
- [diffAssoc](diffAssoc.md)
- [diffUsing](diffUsing.md)
- [diffKeysUsing](diffKeysUsing.md)
- [diffAssocUsing](diffAssocUsing.md)