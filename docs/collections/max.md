# max

> 返回给定键的最大值。

## 获取最大值

```php
collect([10000, 20000, 30000])->max(); // 30000
```

## 通过 `key` 获取最大值

```php
collect([
    ['price' => 10000],
    ['price' => 20000], 
    ['price' => 30000]
])->max('price'); // 30000
```

## 自定义回调

```php
collect([
    ['price' => 10000, 'tax' => 500],
    ['price' => 20000, 'tax' => 700],
    ['price' => 30000, 'tax' => 900],
])->max(
    fn($value) => $value['price'] + $value['tax']
); // 30900
```

也可以在回调中返回 `null` 忽略某些不需要的值。

```php
collect([
    ['price' => 10000, 'tax' => 500, 'active' => true],
    ['price' => 20000, 'tax' => 700, 'active' => true],
    ['price' => 30000, 'tax' => 900, 'active' => false],
])->max(
    fn ($value) => $value['active'] ?  $value['price'] + $value['tax'] : null
); // 20700

// 也可以先调用 filter 过滤掉不需要的数据
collect([
    ['price' => 10000, 'tax' => 500, 'active' => true],
    ['price' => 20000, 'tax' => 700, 'active' => true],
    ['price' => 30000, 'tax' => 900, 'active' => false],
])->filter(fn($item) => $item['active'])
    ->max(
        fn($value) => $value['price'] + $value['tax']
    );
```

## 相关方法

- [min](min.md)
- [filter](filter.md)