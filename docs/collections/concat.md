# concat

将给定数组或集合的值附加到另一个集合的末尾。

```php
$collection = collect(['value1']);
$collection->concat(['key1' => 'value2']);

// output
/**
=> Illuminate\Support\Collection {#1080
     all: [
       "value1",
       "value2",
     ],
   }
 */
```


`concat` 方法会忽略掉附加的元素的 key。
```php
$collection = collect(['key2' => 'value1']);
$collection->concat(['key1' => 'value2']);

// output
/**
=> Illuminate\Support\Collection {#1081
     all: [
       "key2" => "value1",
       0 => "value2",
     ],
   }
 */
```
