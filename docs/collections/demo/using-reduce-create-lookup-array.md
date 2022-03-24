# 通过原数组组装成其他数组格式

## 问题如下

有如下数组

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

通过计算将其转化成如下格式

```php
$lookup = [
  'example' => 'example@example.com',
  'Lucy' => 'lucy@example.com',
  'Taylor'=> 'toylor@laravel.com'
];
```

## 使用 foreach 方法

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

$emails = [];
foreach ($employees as $key => $value) {
  $emails[$value['name']] = $value['email'];
}
dd($emails);

/**
array:3 [
  "example" => "example@exmaple.com"
  "Lucy" => "lucy@example.com"
  "Taylor" => "toylor@laravel.com"
]
 */ 
```

## 使用 [reduce](./reduce.md) 方法

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

$emails = collect($employees)->reduce(function ($emailLookup, $employee) {
  $emailLookup[$employee['name']] = $employee['email'];
  return $emailLookup;
}, []);

dd($emails);

/**
array:3 [
  "example" => "example@exmaple.com"
  "Lucy" => "lucy@example.com"
  "Taylor" => "toylor@laravel.com"
]
 */
```

## 使用 [pluck](./pluck.md) 方法

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

collect($employees)->pluck('email', 'name');

/**
=> Illuminate\Support\Collection {#1106
     all: [
       "example" => "example@exmaple.com",
       "Lucy" => "lucy@example.com",
       "Taylor" => "toylor@laravel.com",
     ],
   }
 */
```
