# Laravel 添加全局函数

在开发中常常需要在模型、模版或者其他地方使用相同的逻辑，此时可以考虑封装一些自定义函数。

## 创建文件

比如在 `app/Supports` 目录下创建 `helpers.php` 文件。内容如下：

```php
<?php
/**
 * Limit the number of characters in a string.
 *
 * @param  string  $value
 * @param  int  $limit
 * @param  string  $end
 * @return string
 */
function limit(string $value, int $limit = 200, string $end = ''): string
{
    if (mb_strlen($value) <= $limit) {
        return $value;
    }

    return rtrim(mb_substr($value, 0, $limit)).$end;
}
```

## 注册文件

接下来需要在项目的 `composer.json` 中加载这个文件，在 `autoload` 配置下添加 `files` 并执行对应要加载的文件：

```json
{
    "autoload": {
        "psr-4": {
            "App\\": "app/",
            "Database\\Factories\\": "database/factories/",
            "Database\\Seeders\\": "database/seeders/"
        },
        "files": [
            "app/Supports/helpers.php"
        ]
    }
}
```

## 执行自动加载

配置完毕后执行 `composer dump-autoload` 命令，加载配置文件。

最后，可以在项目中使用 `app/Supports/helpers.php` 文件中定义的函数。 
