# map 格式化数据

有如下结构数组

```php
$gates = [
  'BaiYun_A_A17',
  'BeiJing_J7',
  'ShuangLiu_K203',
  'HongQiao_A157',
  'A2',
  'BaiYun_B_B230',
];
```

请将它格式化后为如下数组

```php
$boards = ['A17', 'J7', 'K203', 'A157', 'A2', 'B230'];
```

观察格式化后的数组为原数组元素`_`后的结尾字符。

## 使用 foreach 循环 {#use-foreach-loop}

```php
$gates = [
  'BaiYun_A_A17',
  'BeiJing_J7',
  'ShuangLiu_K203',
  'HongQiao_A157',
  'A2',
  'BaiYun_B_B230',
];

$res = [];
foreach ($gates as $key => $gate) {
  if (strpos($gate, '_') === false) {
    $res[$key] = $gate;
  } else {
    $offset = strrpos($gate, '_') + 1;
    $res[$key] = mb_substr($gate, $offset);
  }
}
dd($res);

/**
array:6 [
  0 => "A17"
  1 => "J7"
  2 => "K203"
  3 => "A157"
  4 => "A2"
  5 => "B230"
]
 */
```

## 使用 [map](../map.md) 方法 {#use-map-method}

```php
$gates = [
  'BaiYun_A_A17',
  'BeiJing_J7',
  'ShuangLiu_K203',
  'HongQiao_A157',
  'A2',
  'BaiYun_B_B230',
];

collect($gates)->map(function ($gate) {
  $parts = explode('_', $gate);
  return end($parts);
});

/**
=> Illuminate\Support\Collection {#1098
     all: [
       "A17",
       "J7",
       "K203",
       "A157",
       "A2",
       "B230",
     ],
   }
 */
```

## 使用集合的 [map](../map.md) 和 [last](../last.md) 方法 {#use-map-and-last-method}

```php
$gates = [
  'BaiYun_A_A17',
  'BeiJing_J7',
  'ShuangLiu_K203',
  'HongQiao_A157',
  'A2',
  'BaiYun_B_B230',
];

collect($gates)->map(fn ($gate) => collect(explode('_', $gate))->last());

// 或者使用 Str 也可以达到目的
collect($gates)->map(fn ($gate) => Str::of($gate)->split('/_/')->last())

/**
=> Illuminate\Support\Collection {#1096
     all: [
       "A17",
       "J7",
       "K203",
       "A157",
       "A2",
       "B230",
     ],
   }
 */
```
