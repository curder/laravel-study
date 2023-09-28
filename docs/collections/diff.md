# diff

> 将集合与其它集合或纯 PHP 数组进行值的比较，然后返回原集合中存在而给定集合中不存在的值，求差集。

## 求差集

```php
collect([1, 2, 3])->diff([2, 4, 6]); // [1, 3]

collect(['apples', 'bananas'])->diff(['pears', 'bananas']); // ["apples"]
```

## 相关方法

- [diffKeys](diffKeys.md)
- [diffAssoc](diffAssoc.md)
- [diffUsing](diffUsing.md)
- [diffKeysUsing](diffKeysUsing.md)
- [diffAssocUsing](diffAssocUsing.md)