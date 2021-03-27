# diffKeysUsing 方法

使用回调获取集合中键不存在于给定项中的项。

```php
$collection = collect([10 => 'apples', 25 => 'bananas', 50 => 'coconuts']);

$collection->diffKeysUsing(['.1' => 'apples', '.25' => 'pears'], function ($a, $b) {
  // 在回调函数中返回0或者-1，当为-1时保留，当为0时移除
  return $a === (int) ($b * 100) ? 0 : -1;
});

// output
/**
=> Illuminate\Support\Collection {#1106
     all: [
       50 => "coconuts",
     ],
   }
 */
```

diffKeysUsing 仅关注于 Key 是否匹配

```php
$collection = collect(['123A-G' => 10, '456A-G' => 25]);

$collection->diffKeysUsing(['123AG' => 20], function ($a, $b) {
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
