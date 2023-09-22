# 订单数据汇总

有如下订单数据，计算汇总数据。

::: details 订单信息列表
```php
$orders = [
    [
        'date' => '2017-09-11',
        'supplier' => 'ACME',
        'item_code' => 'IPHONE_6S',
        'item_unit_price' => 799.0,
        'qty' => 1,
        'customer_name'=>'Andy',
    ],
    [
        'date' => '2017-09-11',
        'supplier' => 'ACME',
        'item_code' => 'DVD',
        'item_unit_price' => 9.8,
        'qty' => 5,
        'customer_name'=>'Andy',
    ],
    [
        'date' => '2017-09-10',
        'supplier' => 'FOOBAR',
        'item_code' => 'IPOD',
        'item_unit_price' => 129.9,
        'qty' => 3,
        'customer_name'=>'Andy',
    ],
    [
        'date' => '2017-09-10',
        'supplier' => 'ACME',
        'item_code' => 'IMAC_RETINA_2016',
        'item_unit_price' => 2999.9,
        'qty' => 1,
        'customer_name'=>'Andy',
    ],
    [
        'date' => '2017-09-10',
        'supplier' => 'ACME',
        'item_code' => 'DVD',
        'item_unit_price' => 9.8,
        'qty' => 2,
        'customer_name'=>'Andy',
    ],
    [
        'date' => '2017-09-10',
        'supplier' => 'ACME',
        'item_code' => 'DVD',
        'item_unit_price' => 9.8,
        'qty' => 2,
        'customer_name'=>'Mandy',
    ],
    [
        'date' => '2017-09-10',
        'supplier' => 'ACME',
        'item_code' => 'CUPHOLDER',
        'item_unit_price' => 3.8,
        'qty' => 3,
        'customer_name'=>'Mandy',
    ],
];
```
:::



::: code-group
```php [根据日期汇总订单]
collect($orders)->groupBy('date');
```

```php [根据日期和供应商分组]
collect($orders)->groupBy('date')->map(
    fn ($item)=> $item->groupBy('supplier')
);
```

```php [计算每日销售金额]
collect($orders)->groupBy('date')->map(
    fn ($item) => $item->sum(
        fn ($item) => $item['item_unit_price'] * $item['qty']
    )
);
```
:::