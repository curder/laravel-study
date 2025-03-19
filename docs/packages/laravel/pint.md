# laravel/pint

[Laravel Pint](https://laravel.com/docs/master/pint) 构建在 [PHP-CS-Fixer](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer) 之上，可以轻松确保代码风格保持干净和一致。

Pint 会自动随所有新的 Laravel 应用程序一起安装，因此您可以立即开始使用它。

默认情况下，Pint 不需要任何配置，并且会遵循 Laravel 固有的编码风格来修复代码中的代码风格问题。

## 安装

要开始使用此软件包，请使用 Composer 安装它

```bash
composer require laravel/pint --dev
```

## 运行 pint

安装后，它将直接运行，无需配置。所以可以运行命令：

```bash
./vendor/bin/pint
```

### 特定目录/文件

还可以在特定文件或目录上运行 Pint

```bash
./vendor/bin/pint app/Models  # 在特定目录下运行

./vendor/bin/pint app/Models/User.php  # 指定特定文件
```

### 查看详细信息

Pint 将显示其更新的所有文件的完整列表。可以通过在调用 Pint 时提供 `-v` 选项来查看有关 Pint 更改的更多详细信息。

```bash
./vendor/bin/pint -v
```

### 仅检查不修改文件

如果希望 Pint 简单地检查代码是否有样式错误而不实际更改文件，可以使用 `--test` 选项：

```bash
./vendor/bin/pint --test
```

### 仅修改未添加到Git版本库中的文件

如果希望 Pint 只修改根据 Git 未提交更改的文件，可以使用 `--dirty` 选项：

```bash
./vendor/bin/pint --dirty
```

## 自定义配置

如果希望自定义预设、规则或检查的文件夹，可以通过在项目的根目录中创建 `pint.json` 文件来实现。

```json
{
    "preset": "laravel"
}
```

此外，如果希望使用特定目录中的 `pint.json`，可以在调用 Pint 时提供 `--config` 选项：

```bash
pint --config vendor/my-company/coding-style/pint.json
```

### 预设

Pint 目前支持的预设有：`laravel`、`per`、`psr12` 和 `symfony`。

预设定义了一组可用于修复代码中的代码样式问题的规则。

默认情况下，Pint 使用 `laravel` 预设，它通过遵循 Laravel 固执己见的编码风格来修复问题。

但是，可以通过向 Pint 提供 `--preset` 选项来指定不同的预设：

```bash
pint --preset psr12
```

还可以在项目的 `pint.json` 文件中设置预设：

```json
{
    "preset": "psr12"
}
```

### 规则

规则是 Pint 用于修复代码中的代码样式问题的样式指南。

如上所述，预设是预定义的规则组，对于大多数 PHP 项目来说应该是完美的，因此通常不需要担心它们包含的单个规则。

但是，如果有需要的话也可以在 `pint.json` 文件中启用或禁用特定规则。

```json
{
    "preset": "laravel",
    "rules": {
        "ordered_imports": {
            "sort_algorithm": "length",
            "imports_order": [
                "const",
                "class",
                "function"
            ]
        }
    }
}
```

<!-- markdownlint-disable MD013 -->
Pint 构建在 [PHP-CS-Fixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer) 之上，因此可以使用它的任何规则来修复项目中的代码样式问题：[PHP-CS-Fixer 配置](https://mlocati.github.io/php-cs-fixer-configurator)。
<!-- markdownlint-enable MD013 -->

### 排除文件/文件夹

默认情况下，Pint 将检查项目中除供应商目录中的文件之外的所有 `.php` 文件。

如果希望排除更多文件夹，可以使用 `exclude` 配置选项来执行此操作：

```json
{
    "exclude": [
        "my-specific/folder"
    ]
}
```

如果希望排除包含给定名称模式的所有文件，可以使用 `notName` 配置选项来执行此操作

```json
{
    "notName": [
        "*-my-file.php"
    ]
}
```

如果想通过提供文件的确切路径来排除文件，可以使用 `notPath` 配置选项来执行此操作：

```json
{
    "notPath": [
        "path/to/excluded-file.php"
    ]
}
```
