# max

返回给定键的最大值。

* 获取 `value` 最大值

```php
collect([10000, 20000, 30000])->max();

// output
/**
=> 30000
 */
```

* 传递对应 `key`

```php
collect([['price' => 10000], ['price' => 20000], ['price' => 30000]])->max('price');

// output
/**
=> 30000
 */
```

* 使用回调

```php
collect([
  ['price' => 10000, 'tax' => 500],
  ['price' => 20000, 'tax' => 700],
  ['price' => 30000, 'tax' => 900],
])->max(function ($value) {
  return $value['price'] + $value['tax'];
});

// output
/**
=> 30900
 */
```

```php
collect([
  ['price' => 10000, 'tax' => 500, 'active' => true],
  ['price' => 20000, 'tax' => 700, 'active' => true],
  ['price' => 30000, 'tax' => 900, 'active' => false],
])->max(function ($value) {
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
