# flip 方法

将集合中的键和对应的数值进行互换。

```php
collect(['name' => 'taylor', 'framework' => 'laravel'])->flip();

// output
/**
=> Illuminate\Support\Collection {#1075
     all: [
       "taylor" => "name",
       "laravel" => "framework",
     ],
   }
 */
```
