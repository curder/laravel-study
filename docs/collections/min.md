# min

返回给定键的最小值。

* 获取 `value` 最小值

```php
collect([10000, 20000, 30000])->min();

// output
/**
=> 10000
 */
```

* 传递对应 `key`

```php
collect([['price' => 10000], ['price' => 20000], ['price' => 30000]])->min('price');

// output
/**
=> 10000
 */
```

* 使用回调

```php
collect([
  ['price' => 10000, 'tax' => 500],
  ['price' => 20000, 'tax' => 700],
  ['price' => 30000, 'tax' => 900],
])->min('price');

// output
/**
=> 10500
 */
```

```php
collect([
  ['price' => 10000, 'tax' => 500, 'active' => false],
  ['price' => 20000, 'tax' => 700, 'active' => true],
  ['price' => 30000, 'tax' => 900, 'active' => true],
])->min(function ($value) {
  if (!$value['active']) { return null; }
  
  return $value['price'] + $value['tax'];
});

// output
/**
=> 20700
 */
```
