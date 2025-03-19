# 通过原数组组装成其他数组格式

有如下数据格式的数组：

```php
$employees = [
  [
    'name' => 'example',
    'email' => 'example@exmaple.com',
    'company' => 'example Inc.',
  ],
  [
    'name' => 'Lucy',
    'email' => 'lucy@example.com',
    'company' => 'ibm Inc.',
  ],
  [
    'name' => 'Taylor',
    'email' => 'toylor@laravel.com',
    'company' => 'Laravel Inc.',
  ],
]; 
```

需要将其转化成如下格式：

```php
$lookup = [
  'example' => 'example@example.com',
  'Lucy' => 'lucy@example.com',
  'Taylor'=> 'toylor@laravel.com'
];
```

## 一些方法

::: code-group

```php [使用 pluck 方法]
collect($employees)->pluck('email', 'name'); 

// ["example" => "example@exmaple.com", "Lucy" => "lucy@example.com", "Taylor" => "toylor@laravel.com"]
```

```php [使用 foreach 方法]
$emails = [];
foreach ($employees as $key => $value) {
  $emails[$value['name']] = $value['email'];
}
dd($emails); 

// ["example" => "example@exmaple.com", "Lucy" => "lucy@example.com", "Taylor" => "toylor@laravel.com"]
```

```php [使用 reduce 方法]
collect($employees)->reduce(function ($emailLookup, $employee) {
  $emailLookup[$employee['name']] = $employee['email'];
  return $emailLookup;
}, []);

// ["example" => "example@exmaple.com", "Lucy" => "lucy@example.com", "Taylor" => "toylor@laravel.com"]
```
:::
