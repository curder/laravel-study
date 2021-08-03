## 如何使用Presenter模式

若将显示逻辑都写在 View，会造成 View 代码臃肿而难以维护，基于 SOLID 原则，应该使用 Presenter 模式辅助 View，将相关的显示逻辑封装在不同的 Presenter ，方便中大型项目的维护。

### 版本

Lararvel 5.4.17

## 显示逻辑

在实际开发中，显示逻辑常见的如下：

* 将资料显示不同资料： 如 `性别字段为 M，就显示 Mr.，若性别字段为 F，就显示 Mrs.`

* 是否显示某些资料：如 `根据字段值是否等于 T，要不要显示改字段`

* 依需求显示不同格式：如 `依不同的语系，显示不同的日期格式`

## Presenter

### 将资料显示不同资料

如 `性别字段为 M，就显示 Mr.，若性别字段为 F，就显示 Mrs.`，我们可能会直接用 blade 写在 view 里，如下：

```html
<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <title>Users</title>
</head>
<body>
<div class="flex-center position-ref full-height">
    @foreach($users as $user)
    <div>
        <h2>@if($user->gender == 'm'){{ "Mr." }} @else {{ "Mrs." }} @endif {{$user->name}}</h2>
        <h2>{{ $user->email }}</h2>
    </div>
    @endforeach
</div>
</body>
</html>
```

在中大型项目中，会有几个问题：

* 由于 Blade 与 Html 夹杂，不太适合写太复杂的代码，只适合做一些简单的 binding ，否则很容易写成传统的 PHP 的意大利面代码

* 无法对显示逻辑做重构与物件导向

比较好的方式是使用 Presenter，具体步骤如下：

* 将相依无间注入到 Presenter

* 在 presenter 内写格式转换

* 将 Presenter 注入到 View

#### 定义UserPresenter

`app\Presenters\UserPersenter.php` 代码如下：

```php
<?php

namespace App\Presenters;


/**
 * Class UserPresenter
 *
 * @package App\Presenters
 */
class UserPresenter
{
    /**
     * @param string $gender
     * @param string $name
     *
     * @return string
     */
    public function getFullName($gender, $name)
    {
        return $gender == 'M' ? 'Mr. ' . $name : 'Mrs. ' . $name;
    }
}
```

将原本在 blade 中用 `@if(){ .. }@else .. @endif` 写的逻辑改写在 Presenter 中。

#### 视图中使用UserPresenter

使用 `@inject()` 注入 `UserPresenter`，让 View 可以如 Controller 一样使用注入的物件。

将来如乱显示逻辑怎么修改，都不用改到 Blade ，直接在相关 Presenter 中修改即可。

```html
<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <title>Users</title>
</head>
<body>
<div class="flex-center position-ref full-height">
    @inject('userPresenter','App\Presenters\UserPresenter')
    @foreach($users as $user)
    <div>
        {{--<h2>@if($user->gender == 'm'){{ "Mr." }} @else {{ "Mrs." }} @endif {{$user->name}}</h2>--}}
        <h2>{{ $userPresenter->getFullName($user->gender,$user->name) }}</h2>
        <h2>{{ $user->email }}</h2>
    </div>
    @endforeach
</div>
</body>
</html>
```

改用这种重写，有几个优点：

* 将资料显示不同个格式的显示逻辑改写在 presenter，解决了 blade 不容易维护的问题

* 可以显示逻辑做重构于物件导向

## 是否显示某些资料

如 `根据字段值是否为 T ，要不要显示该字段`，我们常常会直接用 blade 写在 View 中。

```html
<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <title>Users</title>
</head>
<body>
<div class="flex-center position-ref full-height">
    @foreach($users as $user)
    <h2>{{ $user->name }}</h2>
    @if($user->is_hidden == 'F')
    <h2>{{ $user->email }}</h2>
    @endif
    @endforeach
</div>
</body>
</html>
```

在中大型项目中，会有几个问题：

* 由于 blade 与 HTML 夹杂，不太适合写太复杂的业务代码，只适合做一些简单的 binding，否则很容易写成传统的 PHP 的意大利面代码

* 无法对显示逻辑做重构与物件导向

比较好的方式是使用 Presenter，具体步骤如下：

* 将相依无间注入到 Presenter

* 在 presenter 内写格式转换

* 将 Presenter 注入到 View

`app\Presenters\UserPresenter.php` 代码：

```php
<?php
namespace App\Presenters;

use App\User;
/**
 * Class UserPresenter
 *
 * @package App\Presenters
 */
class UserPresenter
{
    /**
     * @param \App\User $user
     *
     * @return string
     */
    public function showEmail(User $user)
    {
        if ($user->is_hidden == 'F') {
            return '<h2>' . $user->email '</h2>';
        }
        return '';
    }
}
```

将 `@if() .. @endif` 的 boolean 判断封装在 Presenter 内，改由 Presenter 负责输出 HTML。

```html
<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <title>Users</title>
</head>
<body>
<div class="flex-center position-ref full-height">
    @inject('userPresenter','App\Presenters\UserPresenter')
    @foreach($users as $user)
    <h2>{{ $user->name }}</h2>
    {!! $userPresenter->showEmail($user) !!}
    @endforeach
</div>
</body>
</html>
```

使用 `@inject()` 注入 `UserPresenter`，让 View 也可以如 Controller 一样使用注入的物件。

`{!! !!}` 会保留原来的 HTML 格式。

将来无论显示逻辑怎么修改，都不用改到 Blade ，直接在 Presenter 内修改。

改用这种写法，有几个优点：

* `是否显示某些资料` 的显示逻辑改为在 Presenter，解决写在 Blade 不容易维护的问题

* 可对显示逻辑做重构与物件导向

### 依需求显示不同格式

如 `按照不同的语系，显示不同的日期格式`，我们常常会直接用 Blade 写在 View 里。 如下：

```html
<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <title>Users</title>
</head>
<body>
<div class="flex-center position-ref full-height">
    @foreach($users as $user)
        <div>
            @if(App::getLocale() == 'uk')
                <h2>{{ $user->created_at->format('d M, Y') }}</h2>
            @elseif(App::getLocale() == 'tw')
                <h2>{{ $user->creaetd_at->format('Y/m/d') }}</h2>
            @else
                <h2>{{ $user->created_at->formate('M d, Y') }}</h2>
            @endif
        </div>
    @endforeach
</div>
</body>
</html>
```

在中大型的醒目中，会有几个问题：

* 由于 Blade 与 HTML 夹杂，不太适合写太复杂的代码，只适合做一些简单的 binding，否则很容易写成传统的 PHP 的意大利面代码

* 无法对显示逻辑做重构与物件导向

比较好的方式是使用 Presenter，具体步骤如下：

* 将相依无间注入到 Presenter

* 在 presenter 内写不同的日期格式转换逻辑

* 将 Presenter 注入到 View

#### 定义接口

定义接口代码 `app\Presenters\DataFormatPresenterInterface.php` ，具体代码如下：

```php
<?php

namespace App\Presenters;

use Carbon\Carbon;

/**
 * Interface DateFormatPresenterInterface
 *
 * @package App\Presenters
 */
interface DateFormatPresenterInterface
{
    /**
     * 显示日期格式
     *
     * @param \Carbon\Carbon $data
     *
     * @return string
     */
    public function showDateFormat(Carbon $data);
}
```

定义了 `showDateFormat()`，各语言必须在 `showDateFormat()` 使用 Carbon 的 `format()` 去转换日期格式。

#### 一些Presenter

`app\Presenters\DateFormatPresenterTW.php`，具体代码内容如下：

```php
<?php

namespace App\Presenters;

use Carbon\Carbon;

/**
 * Class DateFormatPresenterTw
 *
 * @package \App\Presenters
 */
class DateFormatPresenterTw implements DateFormatPresenterInterface
{
    /**
     * @param \Carbon\Carbon $date
     *
     * @return string
     */
    public function showDateFormat(Carbon $date)
    {
        return $date->format('Y/m/d');
    }
}

```

`app\Presenters\DateFormatPresenterUk.php`，具体代码内容如下：

```php
<?php

namespace App\Presenters;

use Carbon\Carbon;

/**
 * Class DateFormatPresenterUk
 *
 * @package \App\Presenters
 */
class DateFormatPresenterUk implements DateFormatPresenterInterface
{
    /**
     * @param \Carbon\Carbon $data
     *
     * @return string
     */
    public function showDateFormat(Carbon $data)
    {
        return $data->format('d M, Y');
    }
}
```

`app\Presenters\DateFormatPresenterUs.php`，具体代码内容如下：

```php
<?php

namespace App\Presenters;

use Carbon\Carbon;

/**
 * Class DateFormatPresenterUs
 *
 * @package \App\Presenters
 */
class DateFormatPresenterUs implements DateFormatPresenterInterface
{
    /**
     * @param \Carbon\Carbon $date
     *
     * @return string
     */
    public function showDateFormat(Carbon $date)
    {
        return $date->format('M d,Y');
    }
}
```

以上类都实现了 `DateFormatPresenterInterface` 接口，并将转换成相对应国家日期格式的 Carbon 的 `format()` 写在 `showDateFormat()` 内。

#### Presenter 工厂

由于每个语言的日期格式都是一个 presenter 物件，那势必遇到一个最基本的问题： `我们必须根据不同的语言去实例化不同的 Presenter 物件`，我们可能会在 Controller 中去 实例化。如下：

```php
/**
 * @param \Illuminate\Http\Request $request
 *
 * @return int
 */
public function index(Request $request)
{
    $locate = 'hk';
   switch ($locate){
       case 'uk':
           $presenter = new DateFormatPresenterUk();
           break;
       case 'tw':
           $presenter = new DateFormatPresenterTw();
           break;
       default:
           $presenter = new DateFormatPresenterUs();
   }
   return $presenter;
}
```

这种写法虽然可行，但是有如下问题：

* 违反了 SOLID 的开放封闭原则：若将来有新的语言需求，只能不断去修改 `index()` ，然后不断的新增 `elseif()` ，计算改用 `switch{ .. }` 也是一样

* 违反了 SOLID 的依赖反转原则：Controller 直接根据语言去实例化对应的 Class ，高层直接相依于底层，直接将实例化对象写死在代码里

* 无法单元测试：由于 Presenter 直接 New 在 Controller ，因此要测试时，无法对 Presenter 做 mock

##### 定义工厂

比较好的解决方式是使用 **Factory Pattern**

`app/Presenters/DateFormatPresenterFactory.php` 内容如下：

```php
<?php

namespace App\Presenters;

/**
 * Class DateFormatPresenterFactory
 *
 * @package \App\Presenters
 */
class DateFormatPresenterFactory
{
    /**
     * @param $locale
     *
     * @return \Illuminate\Foundation\Application|mixed
     */
    public static function bind($locale)
    {
        return app()->singleton(DateFormatPresenterInterface::class, 'App\Presenters\DateFormatPresenter' . ucwords($locale));
    }
}
```

使用 **Presenter Factory** 的 `create()` 去取代 new 建立物件。

这里当然可以在 `create()` 里去写 `if () { ... } else { ... }` 去建立 Presenter 物件，不过这样会违反 SOLID 的开放封闭原则，比较好的方式是改用 `App::bind()`
，直接根据 `$locale` 去 binding 相对应的 Class，这样无论再怎么新增语言与日期格式， Controller 与 Presenter Factory 都不用做任何修改，完全符合开放封闭原则。

##### 控制器调用

`app\Http\Controllers\UserController.php` 中的内容，如下：

```php
public function index(Request $request, DateFormatPresenterFactory $dataFormatPresenterFactory)
{
    $locate = 'uk';
    $presenter = $dataFormatPresenterFactory::bind($locate);

    dd($presenter->showDateFormat(Carbon::now()));
    return $presenter;
}
```

使用 `$dataFormatPresenterFactory::bind()` 切换 `app()` 的 Presenter 物件，如此 Controller 将开放封闭，将来有新的语言新增或者修改需求，也不用修改 Controller

##### Blade 调用

```html
<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <title>Users</title>
</head>
<body>
<div class="flex-center position-ref full-height">
    @inject('dateFormatPresenter','App\Presenters\DateFormatPresenterInterface')
    @foreach($users as $user)
        <div>
            <h2><?php print_r($dateFormatPresenter->showDateFormat($user->created_at)); ?></h2>
        </div>
    @endforeach
</div>
</body>
</html>
```

使用 `@inject()` 注入 Presenter ,让 View 也可以如 Controller 一样使用注入的物件

使用 Presenter 的 `showDateFormate()` 将日期转换成预计的格式

使用这种写法有几个优点

* 将 `依需求显示不同的格式` 的显示逻辑写在 Presenter ，解决写在 Blade 不容易维护的问题

* 可对显示逻辑做重构与物件导向

* 符合 SOLID 的开放闭合原则：将来若有新的语言，对于拓展是开放的，只要新增 Class 实现 `DateFormatPresenterInterface` 接口即可；对于修改是封闭的，
  Controller、FactoryInterface、Factory 与 View 都不用做任何修改

* 不单只有 PHP 可以使用 Service Container，连 Blade 也可以使用 Service Container，甚至搭配 Service Provider

* 可单独对 Presenter 的显示逻辑做单元测试

* 若使用了 Presenter 辅助 Blade ，在搭配 `@inject()` 注入到 View，View就会非常干净，可专心处理 `将资料binding到HTML`的职责

* 将来只有 Layout 改变才会动到 Blade ，若是显示逻辑改变都是修改 Presenter

### 最后

Presenter 使得显示逻辑从Blade 中解放，不仅更容易维护、更容易扩展、更容易重复使用且更容易测试
