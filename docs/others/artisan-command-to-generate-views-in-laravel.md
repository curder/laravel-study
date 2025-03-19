# 生成视图的 Artisan 命令

Laravel 默认自带各种命令，可以为应用程序生成样板代码。

例如，可以使用 Artisan 命令生成控制器、模型、数据库迁移文件等。

但是，截止到 Laravel 10.x 之前还没有生成视图的命令。

随着 Laravel 10.x 的发布，这种情况发生了变化。

在这个版本中，现在可以使用 `make:view` 命令生成视图。

## 生成视图

```bash
php artisan make:view about-us
```

执行完上面的命令后，会在项目中生成一个新的视图文件 `resources/views/about-us.blade.php`。

如果需要生成嵌套目录的视图文件，可以使用 `.` 或者 `/` 分割它们。比如生成一个 `resources/views/posts/index.blade.php` 的视图文件，可以使用下面的命令：

```bash
php artisan make:view posts.index
# Also can use below
php artisan make:view posts/index
```

## 选项

如果需要在生成视图的同时生成一个测试文件，可以传入 `--test` 选项。
- `--test`
    ```bash
    php artisan make:view about-us --test
    ```
    > 额外生成 `tests/Feature/View/AboutUsTest.php` 的 PHPUnit 测试文件

- `--pest`
    ```bash
    php artisan make:view about-us --pest
    ```
    > 额外生成 `tests/Feature/View/AboutUsTest.php` 的 Pest 测试文件
