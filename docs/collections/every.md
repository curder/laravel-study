# every 方法

可用于验证集合中每一个元素都通过给定的真实测试。

```php
collect([1, 2, 3, 4])->every(function ($value, $key) {
    return $value > 2;
});

// output
/**
=> false
 */
```

如果给定的集合为空集合，则无论 every 方法的回调中表达式的结果，都将返回 `true`。

```php
collect([])->every(function ($value, $key) {
  return $value > 2;
});

// output
/**
=> true 
 */
```
