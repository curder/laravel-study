# keys 方法

返回集合的所有键。

```php
collect([
  'prod-100' => ['product_id' => 'prod-100', 'name' => 'Desk'],
  'prod-200' => ['product_id' => 'prod-200', 'name' => 'Chair'],
])->keys();

/**
=> Illuminate\Support\Collection {#1087
     all: [
       "prod-100",
       "prod-200",
     ],
   }
 */
```
