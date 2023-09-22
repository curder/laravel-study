# forget

> 通过给定的键来移除掉集合中对应的内容

```php
collect(['name' => 'taylor', 'framework' => 'laravel'])
    ->forget('name'); // ["framework" => "laravel"]

collect(['name' => 'taylor', 'framework' => 'laravel'])
    ->forget(['name', 'framework']); // []
```

> 与大多数集合的方法不同，`forget` 不会返回修改过后的新集合；它会直接修改原集合。

## 改变原集合

```php
$collection = collect(['name' => 'taylor', 'framework' => 'laravel']);

$newCollection = $collection->forget('name');

$newCollection->dump(); // ["framework" => "laravel"]
$collection->dd(); // ["framework" => "laravel"]
```

## 相关方法

- [map](map.md)
- [pluck](pluck.md)
