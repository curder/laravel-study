# Paths

Laravel 提供了一些路径函数用于快速生成路径。

## `app_path()`

`app_path()` 函数返回应用程序目录 `app` 的完整路径。

还可以使用该 `app_path()` 函数生成相对于应用程序目录的文件的完整路径：

```php
app_path();

app_path('Http/Controllers/Controller.php');
```

## `base_path()`

`base_path()` 函数返回应用程序的完整路径。

也可以使用该 `base_path()` 函数生成相对于项目根目录的给定文件的完整路径：

```php
base_path();

base_path('vendor/bin');
```

## `config_path()`

`config_path()` 函数返回应用程序目录 `config` 的全路径。

也可以使用 `config_path()` 函数生成相对于应用程序配置目录的文件的完整路径：

```php
config_path();

config_path('app.php');
```

## `database_path()`

`database_path()` 函数返回应用程序目录 `database` 的全路径。

也可以使用 `database_path()` 函数生成相对于应用程序 `database` 的完整路径：

```php
database_path();

database_path('factories/UserFactory.php');
```

## `lang_path()`

`lang_path()` 函数返回应用程序目录 `resources/lang` 的全路径。

```php
lang_path();

lang_path('en/messages.php');
```

## `mix()`

该函数返回[版本化 Mix 文件](https://laravel.com/docs/master/mix)的路径：

```php
mix('css/app.css');

mix('js/app.js');
```

## `public_path()`

`public_path()` 函数返回应用程序目录 `public` 的全路径。

```php
public_path();

public_path('css/app.css');
```

## `resource_path()`

`resource_path()` 函数返回应用程序目录 `resources` 的全路径。

```php
resource_path();

resource_path('views/welcome.blade.php');
```

## `storage_path()`

`storage_path()` 函数返回应用程序目录 `storage` 的全路径。

```php
storage_path();

storage_path('logs/laravel.log');
```
