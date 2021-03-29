# whenNotEmpty

当集合不为空时，`whenNotEmpty` 方法将执行给定的回调。

```php
collect(['michael', 'tom'])->whenNotEmpty(function ($collection) {
    return $collection->push('adam');
});

/**
=> Illuminate\Support\Collection {#1080
     all: [
       "michael",
       "tom",
       "adam",
     ],
   }
 */
```

```php
$collection = collect();

$collection->whenNotEmpty(function ($collection) {
    return $collection->push('adam');
});

$collection->all();
```
