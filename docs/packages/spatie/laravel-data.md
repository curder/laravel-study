# spatie/laravel-data

[laravel-data](https://github.com/spatie/laravel-data) 包允许使用的丰富数据对象，比如：用它来代替表单请求、代替 API 转换器、作为 DTO（数据传输对象）等等。

## 安装

```bash
composer require spatie/laravel-data
```

## 用法

### 创建数据对象

下面介绍最简单的创建和使用数据对象，更多高级用法请参考[文档](https://spatie.be/docs/laravel-data/v3/as-a-data-transfer-object/creating-a-data-object)。

::: code-group
```php [数据对象]
use Spatie\LaravelData\Data;

class PostData extends Data
{
    public function __construct(
        public string $title,
        public string $content,
        public PostStatus $status,
        public ?CarbonImmutable $published_at
    ) {
    }
}
```

```php [PostStatus]
enum PostStatus: string
{
    case draft = 'draft';
    case published = 'published';
    case archived = 'archived';
}
```

```php [对象初始化]
$post = new PostData(
    'Hello laravel-data',
    'This is an introduction post for the new package',
    PostStatus::published,
    CarbonImmutable::now()
);
```
:::

### 可选属性

有时数据对象具有不存在设置的属性，例如在部分 API 更新中，只想更新某些字段。

在这种情况下，可以创建 `Spatie\LaravelData\Optional` 属性：

```php
use Spatie\LaravelData\Optional;

class SiteSettingData extends Data
{
    public function __construct(
        public string $title,
        public string|Optional $optional,
    ) {
    }
}
```

可以通过 `from` 方法初始化它：

```php
SiteSettingData::from([
    'title' => 'Awesome website using laravel-data'
]);
```

### 数据嵌套

数据对象可以包含其他数据对象，例如一个站点设置包含通用设置 `GeneralSettingData`、通知设置 `NotificationSettingData`和外观设置 `ApperanceSettingData`。

```php

<?php

namespace App\Data;

use App\Domain\Support\Enums\ThemeApperance;
use Spatie\LaravelData\Data;

class SiteSettingData extends Data
{
    public function __construct(
        public GeneralSettingData $general,
        public NotificationSettingData $notification,
        public AppearanceSettingData $appearance,
    ) {
        //
    }
}
```

使用它的时候则可以通过这样

```php
new SiteSettingData(
    new GeneralSettingData(
        //...
    ),
    NotificationSettingData::from(
        //...
    ),
    'appearance' => [
        'color' => 'auto',
        'theme' => 'simple',
        // ...
    ],
);
```
