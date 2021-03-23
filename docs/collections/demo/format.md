# collection格式化计算数据

 有如下结构数组
```
$gates = [
    'BaiYun_A_A17',
    'BeiJing_J7',
    'ShuangLiu_K203',
    'HongQiao_A157',
    'A2',
    'BaiYun_B_B230'
];
```

请将它格式化后为如下数组：

```
$boards = [
    'A17',
    'J7',
    'K203',
    'A157',
    'A2',
    'B230'
];
```

## 使用foreach循环解决这个问题

```
$res = [];
foreach($gates as $key => $gate) {
    if(strpos($gate, '_') === false) {
        $res[$key] = $gate;
    }else{
        $offset = strrpos($gate, '_') + 1;
        $res[$key] = mb_substr($gate , $offset);
    }
}
var_dump($res);
```

## 使用collection中的[map](/collections/map.md)和PHP中的explode与end方法

```
collect($gates)->map(function($gate) {
    $parts = explode('_', $gate);
    return end($parts);
});
```

## 使用collection中的[map](/collections/map.md)、expload、[last](/collections/last.md)和toArray方法

```
collect($gates)->map(function($gate) {
    return collect(explode('_', $gate))->last();
})->toArray();
```
