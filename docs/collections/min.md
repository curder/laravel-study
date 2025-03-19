# min

> 返回给定键的最小值。

## 获取 `value` 最小值

```php
collect([10000, 20000, 30000])->min(); // 10000
```

## 通过 `key` 获取最大值

```php
collect([
    ['price' => 10000],
    ['price' => 20000],
    ['price' => 30000]
])->min('price'); // 10000
```

## 自定义回调

```php
collect([
  ['price' => 10000, 'tax' => 500],
  ['price' => 20000, 'tax' => 700],
  ['price' => 30000, 'tax' => 900],
])->min('price'); // 10500
```

```php
collect([
  ['price' => 10000, 'tax' => 500, 'active' => false],
  ['price' => 20000, 'tax' => 700, 'active' => true],
  ['price' => 30000, 'tax' => 900, 'active' => true],
])->min(
    fn ($item) => $item['active'] ? $item['price'] + $item['tax'] : null
);
// 20700

// 也可以先调用 filter 过滤掉不需要的数据
collect([
  ['price' => 10000, 'tax' => 500, 'active' => false],
  ['price' => 20000, 'tax' => 700, 'active' => true],
  ['price' => 30000, 'tax' => 900, 'active' => true],
])->filter(fn($item) => $item['active'])
    ->min(
        fn($value) => $value['price'] + $value['tax']
    );
```

## 相关方法

- [max](max.md)
