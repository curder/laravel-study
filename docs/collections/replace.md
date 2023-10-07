# replace

> 通过指定格式替换集合元素。

替换方法的行为与 [merge](merge.md) 类似；除了覆盖具有字符串键的匹配项之外，replace 方法还可以通过指定对应的键覆盖集合元素。

```php
collect(['Taylor', 'Abigail', 'James'])->replace([1 => 'Victoria', 3 => 'Finn']);

// ['Taylor', 'Victoria', 'James', 'Finn'] 
```

## 相关方法

- [merge](merge.md)
