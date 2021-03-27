# diffAssocUsing 方法

使用回调获取集合中键和值不存在的项目。

```php
$collection = collect([10 => 'apples', 25 => 'bananas', 50 => 'coconuts']);

$collection->diffAssocUsing(['.1' => 'apples', '.25' => 'pears'], function ($a, $b) {
  // 在回调函数中返回0或者-1，当为-1时保留，当为0时移除
  return $a === (int) ($b * 100) ? 0 : -1;
});

// output
/**
=> Illuminate\Support\Collection {#1106
     all: [
       25 => "bananas",
       50 => "coconuts",
     ],
   }
 */
```

diffAssocUsing 关注 key 和 value 是否同时匹配。

```php
$collection = collect(['123A-G' => 10, '456A-G' => 25]);

$collection->diffAssocUsing(['123AG' => 10], function ($a, $b) {
  $code = str_replace('-', '', $a);
  return $code === $b ? 0 : -1;
});

// output
/**
=> Illuminate\Support\Collection {#1108
     all: [
       "456A-G" => 25,
     ],
   }
 */
```
