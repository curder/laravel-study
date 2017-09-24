# collection中reduce创建lookup数组

有如下数组

```
$employees = [
    [
        'name' => 'example',
        'email' => 'example@exmaple.com',
        'company' => 'example Inc.'
    ],
    [
        'name' => 'Lucy',
        'email' => 'lucy@example.com',
        'company' => 'ibm Inc.'
    ],
    [
        'name' => 'Taylor',
        'email' => 'toylor@laravel.com',
        'company'=>'Laravel Inc.'
    ]
];
```

通过计算将其转化成如下格式

```
$lookup = [
    'example' => 'example@example.com',
    'Lucy' => ‘lucy@example.com’,
    'Taylor'=> 'toylor@laravel.com'
];
```

## 使用foreach解决

```
$emails = [];
foreach ($employees as $key => $value) {
    $emails[$value['name']] = $value['email'];
}
dd($emails);
```

## 使用collection的[reduce](/collections/reduce.md)方法

```
$emails = collect($employees)->reduce(function($emailLookup, $employee){
    $emailLookup[$employee['name']] = $employee['email'];
    return $emailLookup;
},[]);

dd($emails);
```

## 使用 [pluck](/collections/pluck.md) 方法

```
$emails = collect($employees)->pluck('name', 'email');
dd($emails);
```
