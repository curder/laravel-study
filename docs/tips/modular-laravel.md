# Laravel 模块化开发

在 Laravel 中使用[模块化开发](https://laracasts.com/series/modular-laravel)，可以将项目每个不同的功能分配到单独的包中，这将使得后续得项目维护变得相对容易一些。

针对这个问题，也可以使用开源社区提供的解决方案 [nwidart/laravel-modules](https://github.com/nwidart/laravel-modules)。

这篇文章将一步一步在本地构建一个模块 `modules/module` 的开发步骤和注意事项。

## 初始化

在项目的根目录下新建目录 `modules/module`，然后使用 composer 命令初始化模块：

```php
mkdir -p modules/module
cd modules/module 

composer init --name=modules/module --description="A module for Laravel" --author="Curder <q.curder@gmail.com>" --license=MIT
```

执行命令后，会生成一个 `composer.json` 文件，内容如下：

```json
{
    "name": "modules/module",
    "description": "A module for Laravel",
    "license": "MIT",
    "autoload": {
        "psr-4": {
            "Modules\\Module\\": "src/"
        }
    },
    "authors": [
        {
            "name": "Curder",
            "email": "q.curder@gmail.com"
        }
    ],
    "require": {}
}
```

回到项目目录，修改项目 `composer.json` 内容，引入自定义 `modules/module` 模块：

```json
{
    // ...
    "require": {
        "php": "^8.2",
        "laravel/framework": "^11.0",
        "modules/module": "dev-master" // [!code ++]
    },
    // ...
    "repositories": [ // [!code ++]
        {"type": "path", "url": "./modules/module"} // [!code ++]
    ], // [!code ++]
  // ...
}
```

修改完毕后，通过下面的命令更新 composer：

```bash
composer update modules/module
```

## 自定义配置

### 服务提供者

新建一个自定义服务提供者 `Modules\Module\ServiceProvider`，内容如下：

```php
// modules/module/src/ServiceProvider.php
<?php
namespace Modules\Module;

use Illuminate\Support\ServiceProvider as BaseServiceProvider;

class ServiceProvider extends BaseServiceProvider
{
    public function boot()
    {
        // ...   
    }
}
```

### 配置包发现

修改 `modules/module` 模块 `composer.json` 文件，添加 `extra` 字段，内容如下：

```json
{
  "name": "modules/module",
  "description": "A module for Laravel",
  // ...
  "extra": { // [!code ++]
    "laravel": { // [!code ++]
      "providers": [ // [!code ++]
        "Modules\\Module\\ServiceProvider" // [!code ++]
      ] // [!code ++]
    } // [!code ++]
  } // [!code ++]
  //...
}
```

## 资源

下面是对模块的配置、路由、数据库迁移文件、语言文件、视图、组件和测试等的说明。

需要将对应的代码写到模块服务提供者 `ServiceProvider.php` 文件的 `boot` 方法内。

### 配置

使用 `mergeConfigFrom` 方法可以将模块的默认配置合并到 `config/module.php` 文件中。

```php
public function boot(): void
{
    $this->mergeConfigFrom(__DIR__.'/../config/module.php', 'module');
}
```

如果需要将模块的配置文件发布到应用程序的 `config`目录的话可以使用 `publishes` 方法。

```php
public function boot(): void
{
    $this->publishes([
        __DIR__.'/../config/module.php' => config_path('module.php'),
    ]);
}
```

### 路由

使用 `loadRoutesFrom` 方法可以将模块的路由文件加载到应用程序中。

```php
public function boot(): void
{
    $this->loadRoutesFrom(__DIR__.'/../routes/api.php');
}
```

### 数据库迁移文件

如果模块包含数据库迁移文件，可以使用 `loadMigrationsFrom` 方法将这些文件加载到应用程序中。

```php
public function boot()
{
    $this->loadMigrationsFrom(__DIR__ . '/../database/migrations');
}
```

### 语言文件

如果模块包含语言文件，可以使用 `loadTranslationsFrom` 方法将这些文件加载到应用程序中。

```php
public function boot(): void
{
    $this->loadTranslationsFrom(__DIR__.'/../lang', 'module');
}
```

在模块代码逻辑中可以通过 `__('module::CONFIG_NAME')` 来使用语言文件中的内容。

发布模块语言文件可以使用 `publishes` 方法。

```php
public function boot(): void
{
    $this->loadTranslationsFrom(__DIR__.'/../lang', 'module');
    $this->publishes([ // [!code ++]
        __DIR__.'/../lang' => $this->app->langPath('vendor/module'), // [!code ++]
    ]); // [!code ++]
}
```

### 视图

如果模块包含视图文件，可以使用 `loadViewsFrom` 方法将这些文件加载到应用程序中。

```php
public function boot(): void
{
    $this->loadViewsFrom(__DIR__.'/../resources/views', 'module');
}
```

在代码控制器中可以通过 `view('module::VIEW_NAME')` 来使用视图文件。

### 视图组件

如果模块包含视图组件，可以使用 `Blade::component()` 方法将这些组件加载到应用程序中。

```php
<?php
namespace Modules\Module;

use Illuminate\Support\Facades\Blade;
use Modules\Module\View\Components\Example;

public function boot()
{
    Blade::component('example', Example::class);
}
```

在视图中可以通过 `<x-example />` 来使用视图组件。

或者可以使用 `componentNamespace` 方法按照约定自动加载组件类，这样就不需要手动调用 `Blade::component()` 方法了。

```php
use Illuminate\Support\Facades\Blade;
 
public function boot(): void
{
    Blade::componentNamespace('Modules\\Module\\Views\\Components', 'module');
}
```

后续注册的视图组件可以使用模块命名空间语法：`module::`。

```php
<x-module::calendar />
<x-module::color-picker />
```

### 测试

#### 配置 phpunit.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<phpunit xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:noNamespaceSchemaLocation="vendor/phpunit/phpunit/phpunit.xsd"
         bootstrap="vendor/autoload.php"
         colors="true"
>
    <testsuites>
        <!-- ... -->
        <testsuite name="Modules"> // [!code ++]
            <directory suffix="Test.php">./modules/module/tests</directory> // [!code ++]
        </testsuite> // [!code ++]
    </testsuites>
    <!-- ... -->
</phpunit>
```

如果在 `modules` 目录下存在多个模块的话，可以使用 `<directory suffix="Test.php">./modules/*/tests</directory>`  的方式来匹配所有的模块下的测试。

#### Feature 测试

在模块的 Feature 测试中，需要在 Pest 中添加一下引用才能正确使用：

```php
// tests/Pest.php 
<?php
use Illuminate\Foundation\Testing\LazilyRefreshDatabase;

uses(TestCase::class, RefreshDatabase::class)->in('Feature');
uses(TestCase::class, LazilyRefreshDatabase::class)->in(__DIR__.'/../modules/module/tests/Feature'); // [!code ++]
/*
```

## Laravel Idea

Laravel Idea 是一个基于 Laravel 的项目，它可以在编写 Laravel 代码时提供很多帮助。

<!-- markdownlint-disable MD013 -->
对于非常规的 Laravel 项目，需要简单设置，使用快捷键 `command + ,` 打开项目设置，找到 `语言和设置` --> `Laravel Idea` --> `Module System` --> 选择 `Directory modules as composer.json packages` 即可。
<!-- markdownlint-enable MD013 -->

这样使用快捷键 `Command + Shift + ,` 就可以在新建 Laravel 类时选择对应的模块进行创建，这或许能增加开发效率。
