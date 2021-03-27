# combine

将一个集合的值作为「键」，再将另一个数组或者集合的值作为「值」合并成一个集合。

```php
$collection = collect(['column1', 'column2']);
$collection->combine(['value1', 'value2']);

// output
/**
=> Illuminate\Support\Collection {#1083
     all: [
       "column1" => "value1",
       "column2" => "value2",
     ],
   }
 */
```

```php
$collection = collect(['column1', 'column2']);
$collection->combine([['value1' => 123], ['value2' => 456]]);

// output
/**
=> Illuminate\Support\Collection {#1089
     all: [
       "column1" => [
         "value1" => 123,
       ],
       "column2" => [
         "value2" => 456,
       ],
     ],
   }
 */
```
