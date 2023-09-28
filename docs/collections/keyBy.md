# keyBy

以给定的键作为集合的键。如果多个项目具有相同的键，则只有最后一个项目会显示在新集合中。
      

```php
collect([
  ['product_id' => 'prod-100', 'name' => 'desk'],
  ['product_id' => 'prod-200', 'name' => 'chair'],
])->keyBy('product_id');

/*
[
   "prod-100" => ["product_id" => "prod-100", "name" => "desk"],
   "prod-200" => ["product_id" => "prod-200", "name" => "chair"]
]
*/
```

也可以传入一个回调方法，回调返回的值会作为该集合的键

```php
collect([
  ['product_id' => 'prod-100', 'name' => 'desk'],
  ['product_id' => 'prod-200', 'name' => 'chair'],
])->keyBy(fn ($item) => strtoupper($item['product_id']));

/*
[
  "PROD-100" => ["product_id" => "prod-100", "name" => "desk"],
  "PROD-200" => ["product_id" => "prod-200", "name" => "chair"]
]
*/
```
