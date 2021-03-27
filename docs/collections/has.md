# has 方法

判断集合中是否存在给定的键。

```php
$collection = collect(['account_id' => 1, 'product' => 'Desk', 'amount' => 5]);

dump($collection->has('product'));
dump($collection->has(['product', 'amount']));
dd($collection->has(['amount', 'price']));

// output
/**
true

true 

false
 */
```
