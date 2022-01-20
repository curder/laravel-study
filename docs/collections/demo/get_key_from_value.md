# 通过值获取对应key

## 问题如下

有如下数据：

```php
$messages = [
  'key1' => 'val1',
  'key2' => 'val2',
  'key3' => 'val3',
];
```

给定对应的数组值，获取对应的key。

## 通过 [contains](/collections/contains.md) 和 [search](/collections/search.md) 方法
当知道值 `val2` 时，获取其在数组中的 key 值。

```php
$messages = [
  'key1' => 'val1',
  'key2' => 'val2',
  'key3' => 'val3',
];

if (collect($messages)->contains('val2')) {
  collect($messages)->search('val2');
}

/**
=> "key2"
 */
```
