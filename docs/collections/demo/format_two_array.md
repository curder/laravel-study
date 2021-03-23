# collection格式化计算两个数组的数据

有如下两组数据分别代表去年的营收和今年的营收，求每个月的盈亏情况。

```
$lastYear = [
    6345.75,
    9839.45,
    7134.60,
    9479.50,
    9928.0,
    8652.00,
    7658.40,
    10245.40,
    7889.40,
    3892.40,
    3638.40,
    2339.40
];
$thisYear = [
    6145.75,
    6895.00,
    3434.00,
    9349350,
    9478.60,
    7652.80,
    4758.40,
    10945.40,
    3689.40,
    8992.40,
    7588.40,
    2239.40
];
```

## 使用foreach

```
$profit = [];

foreach($thisYear as $key => $monthly){
    $profit[$key] = $monthly - $lastYear[$key];
}
dd($profit);
```

## 使用 [zip](/collections/zip.md)、[first](/collections/first.md)和[last](collections/last.md)

```
$profit = collect($thisYear)->zip($lastYear)->map(function($monthly){
    return $monthly->first() - $monthly->last();
});
dd($profit);
```
