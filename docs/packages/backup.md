# spatie/laravel-backup

[Laravel Backup](https://github.com/spatie/laravel-backup) 允许创建应用程序的备份，包括数据库、源代码或用户上传的文件。

备份可以存储在配置的自定义文件系统上，比如 S3、七牛云或者 ftp 等。

当备份出现问题时，该扩展包还可以通过邮件等发送通知。

## 安装

通过 Composer 安装该软件包：

```bash
composer require spatie/laravel-backup
```

## 配置

使用下面的命令发布配置文件 `config/backup.php`

```bash
php artisan vendor:publish --provider="Spatie\Backup\BackupServiceProvider"
```

建议修改配置文件内容：

```php
<?php

 'backup' => [
        // ...
        'name' => env('APP_NAME', 'laravel-backup'), // [!code --]
        'name' => env('BACKUP_NAME', 'laravel-backup'), // [!code ++]
        'destination' => [
            // ...
            'disks' => [ // [!code --]
                'local', // [!code --]
            ], // [!code --]
            'disks' => explode(',', env('BACKUP_DISKS', 'local')), // [!code ++]
        ],
    ],
    'monitor_backups' => [
        [
            'name' => env('APP_NAME', 'laravel-backup'), // [!code --]
            'disks' => ['local'], // [!code --]
            'name' => env('BACKUP_NAME', 'laravel-backup'), // [!code ++]
            'disks' => explode(',', env('BACKUP_DISKS', 'local')), // [!code ++]
            'health_checks' => [
                \Spatie\Backup\Tasks\Monitor\HealthChecks\MaximumAgeInDays::class => 1,
                \Spatie\Backup\Tasks\Monitor\HealthChecks\MaximumStorageInMegabytes::class => 5000,
            ],
        ],
    ],
```

然后可以在 `.env` 配置文件中添加两个自定义环境变量 `BACKUP_NAME` 备份名称和 `BACKUP_DISKS` 需要备份到的磁盘。

## 使用

### 常用命令

- 备份所有文件
    ```bash
    php artisan backup:run
    ```

- 仅备份数据库
    ```bash
    php artisan backup:run --only-db
    ```

- 列出所有备份文件
    ```bash
    php artisan backup:list
    ```

- 清空旧备份文件
    ```bash
    php artisan backup:clean
    ```

### 通知

默认情况下，备份任务完成后会通过发送通知到 `your@example.com` 用户。

可以通过 `config/backup.php` 文件中的 `config('backup.notifications.mail')` 配置项来修改通知配置。

或者通过 `config/backup.php` 文件中的 `config('backup.notifications.notifications')` 配置项移除 `mail` 来关闭邮件通知。



### 备份到七牛云

默认数据的备份文件放在本地，可以配置一些其他存储方式，比如七牛云存储。

1. 安装驱动依赖
    ```bash
    composer require overtrue/laravel-filesystem-qiniu
    ```

2. 配置 `config/filesystems.php` 文件
    ```php
    <?php

    return [
        // ...
        'disks' => [
            // ...
            'qiniu-backup' => [ // [!code ++]
                'driver' => 'qiniu', // [!code ++]
                'access_key' => env('BACKUP_QINIU_ACCESS_KEY', ''), // [!code ++]
                'secret_key' => env('BACKUP_QINIU_SECRET_KEY', ''), // [!code ++]
                'bucket' => env('BACKUP_QINIU_BUCKET', ''), // [!code ++]
                'domain' => env('BACKUP_QINIU_DOMAIN', ''),  // [!code ++]
            ], // [!code ++]
        ]
        // ...
    ];
    ```

3. 修改 `config/backup.php` 文件中关于 `disks` 的配置

    ```php
    <?php
    return [
        'backup' => [
            // ...
            'destination' => [
                // ...
                'disks' => [ // [!code --]
                    'local', // [!code --]
                ], // [!code --]
                'disks' => explode(',', env('BACKUP_DISKS', 'local')), [ // [!code ++]
            ],
            // ...
        ],
        'monitor_backups' => [
            [
                // ...
                'disks' => ['local'],// [!code --]
                'disks' => explode(',', env('BACKUP_DISKS', 'local')), // [!code ++]
                // ...
            ],
            // ...
       ],
    ];
    ```

4. 本地 `.env` 文件新增环境变量
    ```dotenv
    # Backup
    BACKUP_QINIU_ACCESS_KEY=
    BACKUP_QINIU_SECRET_KEY=
    BACKUP_QINIU_BUCKET=my-backup
    BACKUP_QINIU_DOMAIN=https://backup.domain.com
    # support local、qiniu-backup
    BACKUP_DISKS=local,qiniu-backup
    ```

### [备份定时任务](https://spatie.be/docs/laravel-backup/v8/installation-and-setup#content-scheduling)
```php
<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    protected function schedule(Schedule $schedule): void
    {
        $schedule->command('backup:run --only-db')->daily()->at('02:05'); // 凌晨2点5分备份数据库// [!code ++]
        $schedule->command('backup:clean')->daily()->at('02:05'); // 凌晨2点5分清理旧的备份// [!code ++]
        $schedule->command('backup:monitor')->daily()->at('10:05'); // 早上10点05分检查数据库备份// [!code ++]
    }
    // ...
}
```

### [mysql-dump 命令路径](https://spatie.be/docs/laravel-backup/v8/installation-and-setup#content-dumping-the-database)

1. 在 `config/database.php` 中添加自定义配置
    ```php
    <?php

    use Illuminate\Support\Str;

    return [
        'connections' => [

            'mysql' => [
                // ...
                'dump' => [ // [!code ++]
                    'dump_binary_path' => env('DUMP_BINARY_PATH', '/usr/local/mysql/bin'), // [!code ++]
                ], // [!code ++]
            ],
        ],
    ];
    ```
2. 在本地环境文件 `.env` 中添加
```dotenv
# For Apple M1
DUMP_BINARY_PATH=/opt/homebrew/bin
```