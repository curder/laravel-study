# avg

> 返回数组中给定键的值的**平均值**。


## 一些示例

::: code-group
```php [获取数组的平均值]
// 获取一维数组
collect([10, 20, 30])->average(); // 20

// 获取二维数组的平均值
collect([['price' => 10000], ['price' => 20000], ['price' => 30000]])
    ->average('price'); // 20000
```

```php [使用回调函数]
collect([
  ['price' => 10000, 'tax' => 500],
  ['price' => 20000, 'tax' => 700],
  ['price' => 30000, 'tax' => 900],
])->average(
    fn ($item) => $item['price'] + $item['tax']
); // 20700
```

```php [回调函数添加条件]
$collections = [
    ['price' => 10000, 'tax' => 500, 'active' => true],
    ['price' => 20000, 'tax' => 700, 'active' => false],
    ['price' => 30000, 'tax' => 1000, 'active' => true],
];

collect($collections)->average(
    fn ($item) => $item['active'] ? $item['price'] + $item['tax'] : null
); // 20750

// 也可以使用 filter 方法先过滤掉"脏数据"
collect($collections)->filter(fn ($item) => $item['active'])
  ->average(
    fn ($value) => $value['price'] + $value['tax']
); // 20750
```
:::

## 关联方法

- [filter](filter.md)