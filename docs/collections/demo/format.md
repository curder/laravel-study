# collection格式化计算数据

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

## 使用 foreach 循环

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

## 使用 [map](/collections/map.md) 方法

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

## 使用collection中的[map](/collections/map.md) 和 [last](/collections/last.md) 方法

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
  return collect(explode('_', $gate))->last();
});

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
