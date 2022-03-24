# Validation 验证

## `dimensions` 图片验证

在验证上传的图像时，可以指定上传图片所需的尺寸。

```php
[
    'photo' => 'dimensions:max_width=4096,max_height=4096'
],
```

## 自定义验证错误消息 

可以自定义每个字段、规则和语言的验证错误消息 - 只需创建具有适当数组结构的特定语言文件 `resources/lang/xx/validation.php`。

```php
// 规则
[
    'email' => ['required']
], 

// 错误信息
'custom' => [
     'email' => [
        'required' => '请提供邮箱地址！',
     ],
],
```

## 用 `now` 或 `yesterday` 验证日期

可以通过之前/之后的规则验证日期，并将各种字符串作为参数传递。

例如：`tomorrw`、`now`、`yesterday`。示例：`'start_date' => 'after:now'`。

```php
$rules = [
    'start_date' => 'after:tomorrow',
    'end_date' => 'after:start_date'
];
```


## `mac_address`

Laravel 8.77 版本之后，添加 `mac_address` 规则验证数据是否为正确的 mac 地址。

```php {4,10}
Validator::make([
  'device_mac' => '04:98:77:44:0f:e6',
], [
  'device_mac' => 'mac_address',
])->passes();

Validator::make([
  'device_mac' => 'invalid-mac-address',
], [
  'device_mac' => 'mac_address',
])->passes();
```

更多详情查看: [Added rule to validate MAC address (#40098)](https://github.com/laravel/framework/pull/40098)
