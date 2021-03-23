# collection中sum求和

## 计算下列数组中`order_products`下数组元素`price`的和

开始前，使用 `composer require illuminate/support`，获得collect的相关支持。

```
<?php
// 引入package
require __DIR__ . '/vendor/autoload.php';

$orders = [[
    'id'            =>      1,
    'user_id'       =>      1,
    'number'        =>      '13908080808',
    'status'        =>      0,
    'fee'           =>      10,
    'discount'      =>      44,
    'order_products'=> [
        ['order_id'=>1,'product_id'=>1,'param'=>'6寸','price'=>555.00,'product'=>['id'=>1,'name'=>'蛋糕名称','images'=>[]]],
        ['order_id'=>1,'product_id'=>1,'param'=>'7寸','price'=>333.00,'product'=>['id'=>1,'name'=>'蛋糕名称','images'=>[]]],
    ],
]];
```

### 使用foreach循环数据

```
$price = 0;
foreach ($orders as $order) {
    foreach($order['order_products'] as $ordert_product){
        $price += $ordert_product['price'];
    }
}
dd($price);
```

> 声明临时变量记录总价格，配合两次循环获得总价并累计。


### 将上面的方式改成collection的[map](/collections/map.md)、[flatten](/collections/flatten.md)和[sum](/collections/sum.md)方式

```
collect($orders)->map(function($order){
    return $order['order_products'];
})->flatten(1)->map(function($order){
    return $order['price'];
})->sum();
```

### 将上面的求解方式改成collection的[flatMap](/collections/flatMap.md)、[pluck](/collections/pluck.md)和[sum](/collections/sum.md)方式

```
collect($orders)->flatMap(function($order){
    return $order['order_products'];
})->pluck('price')->sum();
```

### 将上面的求解方式改成collection的[flatMap](/collections/flatMap.md)和[sum](/collections/sum.md)方式

```
collect($orders)->flatMap(function($order){
    return $order['order_products'];
})->sum('price');
```
