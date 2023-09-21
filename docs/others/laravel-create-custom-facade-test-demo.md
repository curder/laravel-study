# Laravel 创建自定义 Facade

[GitHub 源代码](https://github.com/curder/laravel-create-custom-facade-test-demo)

在 Laravel 应用程序中，[Facade](https://laravel.com/docs/master/facades) 是提供从容器访问对象的类。

Laravel 的外观以及您创建的任何自定义外观都将扩展基础 `Illuminate\Support\Facades\Facade` 类。

Laravel 提供默认的外观，例如 `Route`，`Redirect`，`Cookie`，`App`，`Crypt`等。

如果要为自己的应用程序创建 `Facade` ，只需遵循以下步骤：

## 安装 Laravel

```bash
composer create-project laravel/laravel laravel-create-custom-facade-test-demo -vvv
```

## 创建实现类

这里举例实现类放在 `app/Services`目录下。类的内容如下：

```php
<?php
namespace App\Services;

use Carbon\Carbon;

/**
 * Class DateFormatService
 *
 * @package App\Services
 */
class DateFormatService
{
    /**
     * @param string|Carbon $date
     *
     * @return string
     */
    public function dateFormatYMD($date) : string
    {
        return Carbon::parse($date)->format('Y-m-d');
    }

    /**
     * @param string|Carbon $date
     *
     * @return string
     */
    public function dateFormatMDY($date) : string
    {
        return Carbon::parse($date)->format('m/d/Y');
    }
}
```

## 创建门面

在 `app\Services\Facades`目录下创建对应文件如下：

```php
<?php
namespace App\Services\Facades;

use App\Services\DateFormatService;
use Illuminate\Support\Facades\Facade;

/**
 * @method static string dateFormatMDY(string|mixed $date)
 * @method static string dateFormatYMD(string|mixed $date)
 *
 * @see DateFormatService
 */
class DateFormatFacade extends Facade
{
    protected static function getFacadeAccessor() : string
    {
        return DateFormatService::class;
    }
}
```

## 创建测试

```php
<?php

namespace Tests\Unit;

use App\Services\DateFormatService;
use App\Services\Facades\DateFormatFacade;
use Tests\TestCase;

class DateFormatFacadeTest extends TestCase
{
    /** @test */
    public function it_can_run_methods()
    {
        $result = (new DateFormatService())->dateFormatMDY('2021-04-16');
        $this->assertEquals("04/16/2021", $result);

        $result = (new DateFormatService())->dateFormatYMD('04/16/2021');
        $this->assertEquals("2021-04-16", $result);
    }

    /** @test */
    public function it_can_use_date_format_facade()
    {
        $result = DateFormatFacade::dateFormatMDY('2021-04-16');
        $this->assertEquals("04/16/2021", $result);

        $result = DateFormatFacade::dateFormatYMD('04/16/2021');
        $this->assertEquals("2021-04-16", $result);
    }

    /** @test */
    public function it_can_use_carbon_instance_date_format_facade()
    {
        $result = DateFormatFacade::dateFormatMDY(now());
        $this->assertEquals(now()->format('m/d/Y'), $result);

        $result = DateFormatFacade::dateFormatYMD(now());
        $this->assertEquals(now()->format('Y-m-d'), $result);
    }
}
```

## 参考地址

- [Laravel Create Custom Facade Class Example](https://www.itsolutionstuff.com/post/laravel-create-custom-facade-exampleexample.html)
