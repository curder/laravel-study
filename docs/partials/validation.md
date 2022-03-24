# Validation 验证

## `dimensions` 图片验证

在验证上传的图像时，可以指定上传图片所需的尺寸。

```php
[
    'photo' => 'dimensions:max_width=4096,max_height=4096'
],
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
