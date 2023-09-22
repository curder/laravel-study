# combine

> 将一个集合的值作为**键**，再将另一个数组或者集合的值作为**值**合并成一个集合。

```php
# 合并一维数组
collect(['key1', 'key2'])
    ->combine(['value1', 'value2']); // ["key1" => "value1", "key2" => "value2"]

# 合并二维数组    
collect(['key1', 'key2'])
    ->combine([[123], [456]]); // ["key1" => [123], "key2" => [456]]
```

如果待合并的两个数组个数不匹配，则会抛出 `ValueError` 错误。
