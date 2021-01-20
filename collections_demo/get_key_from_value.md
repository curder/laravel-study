# collection中通过值获取对应key

有如下数据：

```php
$messages = [
    'key1' => 'val1',
    'key2' => 'val2',
    'key3' => 'val3'
];
```

当知道值 `val2` 时，获取其在数组中的key值。

```
if (collect($messages)->contains('val2')) {
    collect($messages)->search('val2');
}
```
