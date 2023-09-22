# collect

> `collect` 方法返回一个包含当前集合中的项目的**新的 `Collection` 实例**。

```php
$collectionA = collect([1, 2, 3]);
 
$collectionB = $collectionA->collect();
 
$collectionB->all(); // [1, 2, 3]
```

`collect` 方法主要用于将[惰性集合 Lazy Collections](https://laravel.com/docs/master/collections#lazy-collections)转换为标准 `Collection` 实例，例如：

```php
$lazyCollection = LazyCollection::make(function () {
  yield 1;
  yield 2;
  yield 3;
});

$collection = $lazyCollection->collect();

get_class($collection); // 'Illuminate\Support\Collection'
```