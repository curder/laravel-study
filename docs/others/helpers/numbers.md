# Numbers

从 Laravel 框架 [10.33.0](https://github.com/laravel/framework/releases/tag/v10.33.0) 开始，Laravel 提供了新的 [`Numbers`](https://github.com/laravel/framework/pull/48845) 类，该类提供了一些方便的静态方法，用于处理数字。

比如常见的格式化金额、百分比、货币、文件尺寸、人类可读性等。

更多关于 `Number` 的官方文档地址[请点击这里](https://laravel.com/docs/master/helpers#numbers)。

## `format()` 格式化

`Number::format()` 方法将给定的数字格式化为区域设置特定的分割符，一般会用于格式化金额的情况：

```php
use Illuminate\Support\Number;

# 默认每逢千位添加,分割符
Number::format(100000); // 100,000

# 保留小数点后两位
Number::format(100000, precision: 2); // 100,000.00

# 设置最大精度
Number::format(100000.123, maxPrecision: 2); // 100,000.12

# 根据语言判断添加符
Number::format(100000, locale: 'zh_CN'); // 100,000
$number = Number::format(100000, locale: 'de'); // 100.00
```

## `percentage()` 百分比

`Number::percentage()` 方法将给定的数字转换为百分比的形式：

```php
use Illuminate\Support\Number;

# 默认是整型百分比
Number::percentage(10); // 10%

# 保留小数点后两位
Number::percentage(10, precision: 2); // 10.00%

# 设置最大精度
Number::percentage(10.123, maxPrecision: 2); // 10.12%

# 根据语言判断添加符
Number::percentage(10, precision: 2, locale: 'zh_CN'); // 10.00%
Number::percentage(10, precision: 2, locale: 'de'); // 10,00%
```


## `currency()` 货币

`Number::currency()` 方法以字符串形式返回给定值的货币表示形式：

```php
use Illuminate\Support\Number;

# 默认每逢千位添加,分割符(默认保留两位小数点)
Number::currency(1000); // $1,000.00

# 设置货币前缀
Number::currency(1000, in: 'EUR'); // €1,000.00

# 根据语言判断添加符
Number::currency(1000, in: 'EUR', locale: 'de'); // 1.000,00 €
Number::currency(1000, in: 'CNY', locale: 'zh_CN'); // ¥1,000.00
```

## `fileSize()` 文件尺寸

`Number::fileSize()` 方法以字符串形式返回给定字节值的文件大小表示形式：

```php
use Illuminate\Support\Number;

# 根据当前大小转换成适合的文件大小表示
Number::fileSize(1024 * 56); // 56 KB
Number::fileSize(1024 * 1024 * 56); // 56 MB

# 保留小数点后两位
Number::fileSize(1024 * 5566, precision: 2); // 5.44 MB
```

## `forHumans()` 人类可度

`Number::forHumans()` 方法返回所提供数值的人类可读格式：

```php
use Illuminate\Support\Number;

Number::forHumans(1000); // 1 thousand
Number::forHumans(489939); // 490 thousand

# 保留小数点后两位 
Number::forHumans(1234000, precision: 2); // 1.23 million

Number::forHumans(1234000, maxPrecision: 2); // 1.23 million
```

