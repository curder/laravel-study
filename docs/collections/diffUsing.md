## diffUsing 方法

获取集合中不存在给定项目的项目。


```php
$collection = collect([10, 25, 50]);

$collection->diffUsing([0.1, 0.25], function ($a, $b) {
  // 在回调函数中返回 0 或者 -1 ，当返回 -1 时保留，当返回 0 时移除
  return $a === (int) ($b * 100) ? 0 : -1;
});

// output
/**
=> Illuminate\Support\Collection {#1101
     all: [
       2 => 50,
     ],
   }
 */
```

diffUsing 关注 value 是否匹配。

```php
$collection = collect(['123A-G', '456A-G']);

$collection->diffUsing(['123AG'], function ($a, $b) {
  $code = str_replace('-', '', $a);
  return $code === $b ? 0 : -1;
});

// output
/**
=> Illuminate\Support\Collection {#1105
     all: [
       1 => "456A-G",
     ],
   }
 */
```
