# get

获取一维数组给定键的集合项。如果该键不存在，则返回 `null`。

::: code-group
```php [基本用法]
collect(['name' => 'taylor', 'framework' => 'laravel'])
    ->get('name'); // "taylor"
```

```php [默认值]
collect(['name' => 'taylor', 'framework' => 'laravel'])
    ->get('foo', 'bar'); // bar
```

```php // [默认值调用回调]
// 如果指定的键不存在，会调用回调
collect(['name' => 'taylor', 'framework' => 'laravel'])
    ->get(
        'foo',
        function () {
            // some logic
            return 'bar';
        }
    ); // bar
```
:::

## 相关方法

- [value](value.md)
- [pluck](pluck.md)