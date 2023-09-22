# concat

> 将给定数组或集合的值附加到另一个集合的末尾

## 相关示例

```php
// 合并简单数组
collect(['value1'])->concat(['key2' => 'value2']); // ["value1", "value2"]

// `concat` 方法会忽略掉附加的元素的 key
collect(['key1' => 'value1'])->concat(['key2' => 'value2']); // ["key1" => "value1", 0 => "value2"],

// 如果需要保持附加元素的key，可以使用 merge 方法
collect(['key1' => 'value1'])->merge(['key2' => 'value2']); // ["key1" => "value1", "key2" => "value2"]
```

## 关联方法

- [merge](merge.md)