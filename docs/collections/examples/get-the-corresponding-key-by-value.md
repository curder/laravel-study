# 通过值获取对应 key

有如下数据：

```php
$messages = [
  'key1' => 'val1',
  'key2' => 'val2',
  'key3' => 'val3',
];
```

给定对应的键值对数组，通过指定的值，获取对应的 key。

## 通过 [contains](../contains.md) 和 [search](../search.md) 方法 {#use-contains-and-search-method}

当知道值 `val2` 时，获取其在给定的数组中的 `key`。

```php
$messages = [
  'key1' => 'val1',
  'key2' => 'val2',
  'key3' => 'val3',
];

if (collect($messages)->contains('val2')) {
  $res = collect($messages)->search('val2'); // key2
}
```
