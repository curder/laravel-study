# avg方法

返回给定键的**平均值**。

* 获取数组的平均值

```php
collect([10, 20, 30])->average();

// output
/**
=> 20
 */
```

* 获取二维数组的平均值

```php
collect([['price' => 10000], ['price' => 20000], ['price' => 30000]])->average(
  'price'
);

// output
/**
=> 20000
 */
```

* 使用回调函数

```php
collect([
  ['price' => 10000, 'tax' => 500],
  ['price' => 20000, 'tax' => 700],
  ['price' => 30000, 'tax' => 900],
])->average(function ($value) {
  return $value['price'] + $value['tax'];
});

// output
/**
=> 20700
 */
```

```php
collect([
  ['price' => 10000, 'tax' => 500, 'active' => true],
  ['price' => 20000, 'tax' => 700, 'active' => false],
  ['price' => 30000, 'tax' => 900, 'active' => true],
])->average(function ($value) {
  if (!$value['active']) {
    return null;
  }
  return $value['price'] + $value['tax'];
});

// output
/**
=> 20700
 */
```
