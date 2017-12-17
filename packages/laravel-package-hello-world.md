# 使用Laravel开发自己的Package

`Service Provider`最主要的功能就是让我们写package，本文以一个简单的 `Hello World` 的功能，介绍一下package的开发流程。

包含`route`、`controller`与`view`，然后会打包成package传到github与packagist，最后在其他的laravel项目中直接使用 `composer require vendor/package` 下载执行我们上传的package。

## Version

* Laravel 5.5
* php 7.1.12

## 建立项目

```
composer create-project laravel/laravel MyPackage --prefer-dist
```

建立一个开发package的项目。

## 建立目录

在项目根目录下串建立`packages`目录，关于该package的源代码都会放在它里面。

在`packages`目录下建立`vendor/package/src`子目录，本package会建立`curder/helloworld/src`。

![](/assets/package-helloworld-source-code-path.jpg)

## 设定PSR-4命名空间

由于目前Laravel预设的`root namespace`是在`app`目录下，并且无法法得知我们新加的`packages/curder/helloworld/src`目录，必须在`MyPackage`项目的`composer.json`加入对应新的`root namespace`。

```
{
    "name": "laravel/laravel",
    "description": "The Laravel Framework.",
    "keywords": ["framework", "laravel"],

    ...

   "autoload": {
        "classmap": [
            "database/seeds",
            "database/factories"
        ],
        "psr-4": {
            "App\\": "app/",
            "Curder\\HelloWord\\": "packages/curder/helloworld/src/"
        }
    },

    ...
}
```

注意我们添加的行：`"Curder\\HelloWorld\\": "packages/curder/helloworld/src/"`的命名空间和路径的映射关系。

修改完上面的设定后，需要执行下面的composer命令更新一下自动加载。

```
composer dump-autoload
```

## 建立Service Provider

使用下面的命令建立`Service Provider`

```
php artisan make:provider HelloWorldServiceProvider
```

产生`HelloWorldServiceProvider.php`默认在`app/Providers`目录下，因为我们是要写package，所以将此文件移到`packages/curder/helloworld/src`目录下。

因为文件的目录已经移动，需要重新修改一些它的namespace。

```
<?php

namespace Curder\HelloWorld;

use Illuminate\Support\ServiceProvider;

class HelloWorldServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
```

注意文件的命名空间是：`Curder\HelloWorld`，使用命令生成的Provider默认会建立`boot()`和`register()`。

## 注册ServiceProvider

在`config/app.php`中註冊`HelloWorldServiceProvider`。

```
return [
    ...

    'providers' => [

        ...

        /*
         * Package Service Providers...
         */

        Curder\HelloWord\HelloWorldServiceProvider::class,

        /*
         * Application Service Providers...
         */

        ...
    ],

    ...
];
```

注册刚刚建立的`HelloWorldServiceProvider`。

## 建立Router

把路由文件放到`src/routes/`下，并命名为`web.php`，内容如下：

```
<?php

$namespace = 'Curder\HelloWorld\Http\Controllers';

Route::group([
    'namespace' => $namespace,
    'prefix' => 'helloworld',
], function () {
    Route::get('/', 'HelloWorldController@index');
});
```

## 建立View

把视图文件建立在`src/resources/views`下，将其命名为`welcome.blade.php`。

```
<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <style>
        html, body {
            background-color: #fff;
            color: #636b6f;
            font-family: 'Raleway', sans-serif;
            font-weight: 100;
            height: 100vh;
            margin: 0;
        }

        .full-height {
            height: 100vh;
        }

        .flex-center {
            align-items: center;
            display: flex;
            justify-content: center;
        }

        .position-ref {
            position: relative;
        }

        .top-right {
            position: absolute;
            right: 10px;
            top: 18px;
        }

        .content {
            text-align: center;
        }

        .title {
            font-size: 84px;
        }

        .links > a {
            color: #636b6f;
            padding: 0 25px;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: .1rem;
            text-decoration: none;
            text-transform: uppercase;
        }

        .m-b-md {
            margin-bottom: 30px;
        }
    </style>
</head>
<body>
<div class="flex-center position-ref full-height">
    @if (Route::has('login'))
        <div class="top-right links">
            @auth
                <a href="{{ url('/home') }}">Home</a>
            @else
                <a href="{{ route('login') }}">Login</a>
                <a href="{{ route('register') }}">Register</a>
            @endauth
        </div>
    @endif

    <div class="content">
        <div class="title m-b-md">
            {{ $message }}
        </div>

        <div class="links">
            <a href="https://laravel.com/docs">Documentation</a>
            <a href="https://laracasts.com">Laracasts</a>
            <a href="https://laravel-news.com">News</a>
            <a href="https://forge.laravel.com">Forge</a>
            <a href="https://github.com/laravel/laravel">GitHub</a>
        </div>
    </div>
</div>
</body>
</html>
```

## 创建Migration

将数据库迁移文件创建在`src/publishable/databases/migrations/`下，我们按照当前日期将其命名为：`2017_12_17_000000_create_package_demo_table.php`，内容如下：

```
<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePackageDemoTable extends Migration
{
    /**
    * Run the migrations.
    *
    * @return void
    */
    public function up()
    {
        Schema::create('package_demo', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('checklist_id');
            $table->boolean('is_published');
            $table->boolean('is_archived');
            $table->timestamps();
        });
    }

    /**
    * Reverse the migrations.
    *
    * @return void
    */
    public function down()
    {
        Schema::dropIfExists('package_demo');
    }
}
```

## 创建配置文件

将配置文件创建在`src/publishable/config/`下，我们将其命名为`helloworld.php`，内容如下：

```
<?php

return [
    "message" => "Hello World",
];
```

> 配置文件的文件名不允许随意定义，不要与Laravel已有的配置文件文件名冲突，后期再项目的其他地方需要引用。

## 建立Controller

根据上面路由的定义，把控制器文件放到`src/Http/Controllers`下。

```
<?php

namespace Curder\HelloWorld\Http\Controllers;

use App\Http\Controllers\Controller;

class HelloWorldController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $message = config("helloworld.message");
        return view('HelloWorld::welcome', compact('message'));
    }
}
```

## 修改Service Provider

```
<?php

namespace Curder\HelloWorld;

use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class HelloWorldServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);

        $this->loadRoutesFrom(__DIR__ . '/routes/web.php' .
            '');
        $this->loadViewsFrom(__DIR__ . '/resources/views', 'HelloWorld');
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->registerPublishables();
    }

    private function registerPublishables()
    {
        $basePath = __DIR__;

        $arrPublishable = [
            'migrations' => [
                "$basePath/publishable/databases/migrations" => database_path('migrations'),
            ],
            'config' => [
                "$basePath/publishable/config/helloworld.php" => config_path('helloworld.php'),
            ],
        ];

        foreach ($arrPublishable as $group => $paths) {
            $this->publishes($paths, $group);
        }
    }
}
```

## 执行发布命令

```
php artisan vendor:publish
```

执行完上面的命令后，就能看到如下的界面

![](/assets/package-helloworld-publish-config-and-database-migration.png)

输入`Curder\HelloWorld\HelloWorldServiceProvider`的内容进行发布。

> 另外对于已经发布的内容如果需要覆盖，在上面的发布命令中加入 `--force` 参数。但是在执行这个命令之前请确保对修改过的数据已有备份。


## 访问效果

![](/assets/package-helloworld-browser.png)


