# Carbon

[Carbon](https://github.com/briannesbitt/carbon) 是一个用于处理日期和时间的 PHP 类，继承自 PHP [DateTime](https://www.php.net/manual/zh/class.datetime.php) 类的 API 扩展。

它提供了丰富的方法来操作和格式化日期时间，使得日期时间的处理变得更加简单和方便。

## 安装

使用 [Composer](https://getcomposer.org/) 安装 Carbon：

```php
composer require nesbot/carbon
```

> Laravel 项目已默认安装这个扩展包，所以如果使用的是 Laravel 框架则不需要执行上面的命令重复安装。

## 使用

### 生成日期/时间

#### 当前

`now()` 方法获取当前的日期和时间。

```php
use Carbon\Carbon;

echo Carbon::now();
```

如果你不指定参数，它会使用 PHP 配置中的时区。

也可以传递一个[有效的时区](http://php.net/manual/zh/timezones.php)作为参数

```php
use Carbon\Carbon;

Carbon::now('Europe/Paris'); // 巴黎时间

# 或者传入 DateTimeZone 示例
Carbon::now(new DateTimeZone('Europe/Paris'));
```

#### 今天

使用 `today()` 方法可以基于当前时间获取今天的 `'00:00:00'` 时间。

```php
use Carbon\Carbon;

Carbon::today();
```

#### 昨天

使用 `yesterday()` 方法可以基于当前时间获取昨天的 `'00:00:00'` 时间。

```php
use Carbon\Carbon;

Carbon::yesterday();
```

#### 明天

使用 `tomorrw()` 方法可以基于当前时间获取明天的 `'00:00:00'` 时间。

```php
use Carbon\Carbon;

Carbon::tomorrow('Europe/London');
```

#### 年开始日期

使用 `startOfYear()` 方法可以获取本年开始的天的时间。

```php
use Carbon\Carbon;

Carbon::now()->startOfYear();
```

#### 年结束时间

使用 `endOfYear()` 方法可以获取本年开始的天的时间，结束时间为 `23:59:59`。

```php
use Carbon\Carbon;

Carbon::now()->endOfYear();
```

#### 月开始的日期

使用 `startOfMonth()` 方法可以获取本月开始天的日期。

```php
Carbon\Carbon;

Carbon::now()->startOfMonth();
```

#### 月结束的时间

使用 `endOfMonth()` 方法可以获取本月结束天的时间，结束时间使用 `23:59:59`。

```php
Carbon\Carbon;

Carbon::now()->endOfMonth();
```

#### 周开始的日期

使用 `startOfWeek()` 方法可以获取本周开始天的时间。

```php
use Carbon\Carbon;

Carbon::now()->startOfWeek();
```

#### 周结束的时间

使用 `endOfWeek()` 方法可以获取本周结束的天的时间，结束时间为 `23:59:59`。

```php
use Carbon\Carbon;

Carbon::now()->endOfWeek();
```

#### 天开始的日期

使用 `startOfDay()` 方法可以获取今天开始的天的时间，效果等同于 `Carbon::today()` 方法。

```php
use Carbon\Carbon;

Carbon::now()->startOfDay();
```

#### 天结束的时间

使用 `endOfDay()` 方法可以获取今天结束的时间，结束时间为 `23:59:59`。

```php
use Carbon\Carbon;

Carbon::now()->endOfDay();
```

#### 时开始的时间

使用 `startOfHour()` 方法可以获取当前小时开始的时间。

```php
use Carbon\Carbon;

Carbon::now()->startOfHour();
```

#### 时结束的时间

使用 `endOfHour()` 方法可以获取当前小时结束的时间，结束时间为 `59:59:59`。

```php
use Carbon\Carbon;

Carbon::now()->endOfHour();
```

#### 分开始的时间

使用 `startOfMinute()` 方法可以获取当前分钟开始的时间。

```php
use Carbon\Carbon;

Carbon::now()->startOfMinute();
```

#### 分结束的时间

使用 `endOfMinute()` 方法可以获取当前分钟结束的时间，结束时间为 `59:59:59`。

```php
use Carbon\Carbon;

Carbon::now()->endOfMinute();
```

### 日期解析 `parse()`

#### 解析日期

```php
use Carbon\Carbon;

Carbon::parse('2023-03-12');
```

#### 解析时间

```php
use Carbon\Carbon;

Carbon::parse('2023-03-12 15:12:50');
```

#### 解析字符串

```php
use Carbon\Carbon;

# 今天
Carbon::parse('today'); // 2024-03-12 00:00:00

# 昨天
Carbon::parse('yesterday'); // 2024-03-11 00:00:00

# 明天
Carbon::parse('tomorrow'); // 2024-03-12 00:00:00

# 两天前（包含时间）
Carbon::parse('2 days ago'); // 2024-03-10 15:12:50

# 三天后（包含时间）
Carbon::parse('+3 days'); // 2024-03-15 15:12:50

# 两周后（包含时间）
Carbon::parse('+2 weeks'); // 2024-03-26 15:12:50

# 四个月后（包含时间）
Carbon::parse('+4 months'); // 2024-07-12 15:12:50

# 一年前（包含时间）
Carbon::parse('-1 year'); // 2023-03-12 15:12:50

# 下周三
Carbon::parse('next wednesday'); // 2024-03-13 00:00:00

# 上周五
Carbon::parse('last friday'); // 2024-03-08 00:00:00
```

### 构造日期

使用 `create()` 或者 `createFromDate()` 方法支持使用单独的年月日来构造日期。

```php
use Carbon\Carbon;

Carbon::createFromDate(year: 2024, month: 03, day: 12); // 2024-03-12 15:12:50

Carbon::create(year: 2024, month: 03, day: 12, hour: 15, minute: 12, second: 12); // 2024-03-12 15:12:12
```

> 如果对应的参数如果不提供则获取当前年、月、日、时、分、秒。

### 日期操作

日期操作可以通过增加 `add*()` 或减去 `sub*()` 跟上要增加或减去的单位来完成。

例如，需要给一个日期增加指定的天数，使用 `addDays()` 方法。此外还提供了一个 `modify()` 方法，参数格式为 `+` 或 `-` 跟上值及单位。

```php
use Carbon\Carbon;

# 20 天后
Carbon::now()->addDays(20); // 2024-04-01 15:12:50

# 3 周后
Carbon::now()->addWeeks(3); // 2024-04-02 15:12:50

# 25 小时后
Carbon::now()->addHours(25); // 2024-03-13 16:12:50 

# 2 小时前
Carbon::now()->subHours(2); // 2024-03-12 13:12:50

# 2 小时 10 分钟后
Carbon::now()->addHours(2)->addMinutes(10); // 2024-03-12 17:22:50

# 30 天后
Carbon::now()->modify('+30 days'); // 2024-04-11 15:12:50

# 2 天前
Carbon::now()->modify('-2 days'); // 2024-03-10 15:12:50
```

### 日期比较

#### 两个日期比较

Carbon 支持各种日期比较操作，例如判断日期是否相等、是否大于或小于另一个日期等。

- `min` 返回最小日期。
- `max` 返回最大日期。
- `eq`  判断两个日期是否相等。
- `gt`  判断第一个日期是否比第二个日期大。
- `lt`  判断第一个日期是否比第二个日期小。
- `gte` 判断第一个日期是否大于等于第二个日期。
- `lte` 判断第一个日期是否小于等于第二个日期。

```php
use Carbon\Carbon;

# 获取当前时区
Carbon::now()->tzName; // PRC
 
$first = Carbon::create(2024, 03, 12, 15, 10, 50);
$second = Carbon::create(2024, 03, 12, 03, 10, 50, tz: 'America/New_York');

$first->eq($second); // true
$first->ne($second); // false
$first->gt($second); // false
$first->gte($second); // true
$first->lt($second); // false
$first->lte($second); // true
```

#### 判断日期是否介于两个日期之间

要判断一个日期是否介于两个日期之间，可以使用 `between()` 方法，第三个可选参数指定比较是否可以相等，默认为 `true`：

```php
$first = Carbon::create(2024, 03, 12, 1);
$second = Carbon::create(2024, 03, 12, 5);
Carbon::create(2024, 03, 12, 3)->between($first, $second);          // true
Carbon::create(2024, 03, 12, 5)->between($first, $second);          // true
Carbon::create(2024, 03, 12, 5)->between($first, $second, false);   // false
```

### 日期判断

Carbon 支持多种日期判断操作，例如判断日期是否工作日、是否周末、是否昨天、是否今天、是否明天等。

```php
use Carbon\Carbon;

# 是否工作日
Carbon::now()->isWeekday(); // true

# 是否周末
Carbon::now()->isWeekend(); // false

# 是否昨天
Carbon::now()->isYesterday(); // false

# 是否今天
Carbon::now()->isToday(); // true

# 是否明天
Carbon::now()->isTomorrow(); // false 

# 是否未来
Carbon::now()->isFuture(); // false 

# 是否是过去
Carbon::now()->isPast(); // true

# 是否是闰年(2024年是闰年)
Carbon::now()->isLeapYear(); // true

# 是否同一天
Carbon::now()->isSameDay(Carbon::now()); // true

$born = Carbon::createFromDate(1991, 08, 16);
$noCake = Carbon::createFromDate(2023, 09, 06);
$yesCake = Carbon::createFromDate(2024, 08, 16);

$born->isBirthday($noCake); // false
$born->isBirthday($yesCake); // true

# 默认不传递参数的话跟今天进行比较
Carbon::now()->subYears(50)->isBirthday(); // true
```
