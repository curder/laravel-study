# sortKeysUsing

> 使用回调按底层关联数组的键对集合进行排序

```php
collect([
    'ID' => 22345,
    'first' => 'John',
    'last' => 'Doe',
])->sortKeysUsing('strnatcasecmp');
 
//  ['first' => 'John', 'ID' => 22345, 'last' => 'Doe']
```

回调必须是返回小于、等于或大于零的整数的比较函数。

## 相关方法

- [sortKeys](sortKeys.md)
- [sort](sort.md)
- [sortDesc](sortDesc.md)