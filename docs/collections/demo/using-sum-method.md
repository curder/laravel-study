# sum 求和数组项

## 计算数组元素和 

计算数组中`order_products`下数组元素`price`的和

```php
$orders = [
  [
    'id' => 1,
    'user_id' => 1,
    'number' => '13908080808',
    'status' => 0,
    'fee' => 10,
    'discount' => 44,
    'order_products' => [
      [
        'order_id' => 1,
        'product_id' => 1,
        'param' => '6寸',
        'price' => 555.0,
        'product' => ['id' => 1, 'name' => '蛋糕名称', 'images' => []],
      ],
      [
        'order_id' => 1,
        'product_id' => 1,
        'param' => '7寸',
        'price' => 333.0,
        'product' => ['id' => 1, 'name' => '蛋糕名称', 'images' => []],
      ],
    ],
  ],
];
```

### 使用 foreach 循环

```php
$orders = [
  [
    'id' => 1,
    'user_id' => 1,
    'number' => '13908080808',
    'status' => 0,
    'fee' => 10,
    'discount' => 44,
    'order_products' => [
      [
        'order_id' => 1,
        'product_id' => 1,
        'param' => '6寸',
        'price' => 555.0,
        'product' => ['id' => 1, 'name' => '蛋糕名称', 'images' => []],
      ],
      [
        'order_id' => 1,
        'product_id' => 1,
        'param' => '7寸',
        'price' => 333.0,
        'product' => ['id' => 1, 'name' => '蛋糕名称', 'images' => []],
      ],
    ],
  ],
];

$price = 0;
foreach ($orders as $order) {
  foreach ($order['order_products'] as $ordert_product) {
    $price += $ordert_product['price'];
  }
}

dd($price);

/**
888.0
 */
```

> 声明临时变量记录总价格，配合两次循环获得总价并累计。


### 使用 [map](./map.md)、[flatten](./flatten.md) 和 [sum](./sum.md)

```php
$orders = [
  [
    'id' => 1,
    'user_id' => 1,
    'number' => '13908080808',
    'status' => 0,
    'fee' => 10,
    'discount' => 44,
    'order_products' => [
      [
        'order_id' => 1,
        'product_id' => 1,
        'param' => '6寸',
        'price' => 555.0,
        'product' => ['id' => 1, 'name' => '蛋糕名称', 'images' => []],
      ],
      [
        'order_id' => 1,
        'product_id' => 1,
        'param' => '7寸',
        'price' => 333.0,
        'product' => ['id' => 1, 'name' => '蛋糕名称', 'images' => []],
      ],
    ],
  ],
];

collect($orders)
  ->map(function ($order) {
    return $order['order_products'];
  })
  ->flatten(1)
  ->map(function ($order) {
    return $order['price'];
  })
  ->sum();

/**
888.0
 */
```

### 使用 [flatMap](./flatMap.md)、[pluck](./pluck.md) 和 [sum](./sum.md)

```php
$orders = [
  [
    'id' => 1,
    'user_id' => 1,
    'number' => '13908080808',
    'status' => 0,
    'fee' => 10,
    'discount' => 44,
    'order_products' => [
      [
        'order_id' => 1,
        'product_id' => 1,
        'param' => '6寸',
        'price' => 555.0,
        'product' => ['id' => 1, 'name' => '蛋糕名称', 'images' => []],
      ],
      [
        'order_id' => 1,
        'product_id' => 1,
        'param' => '7寸',
        'price' => 333.0,
        'product' => ['id' => 1, 'name' => '蛋糕名称', 'images' => []],
      ],
    ],
  ],
];

collect($orders)
  ->flatMap(function ($order) {
    return $order['order_products'];
  })
  ->pluck('price')
  ->sum();

/**
=> 888.0
 */
```

### 使用 [flatMap](./flatMap.md) 和 [sum](./sum.md)

```php
$orders = [
  [
    'id' => 1,
    'user_id' => 1,
    'number' => '13908080808',
    'status' => 0,
    'fee' => 10,
    'discount' => 44,
    'order_products' => [
      [
        'order_id' => 1,
        'product_id' => 1,
        'param' => '6寸',
        'price' => 555.0,
        'product' => ['id' => 1, 'name' => '蛋糕名称', 'images' => []],
      ],
      [
        'order_id' => 1,
        'product_id' => 1,
        'param' => '7寸',
        'price' => 333.0,
        'product' => ['id' => 1, 'name' => '蛋糕名称', 'images' => []],
      ],
    ],
  ],
];

collect($orders)
  ->flatMap(function ($order) {
    return $order['order_products'];
  })
  ->sum('price');

/**
=> 888.0
 */
```
