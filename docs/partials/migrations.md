# Migrations 迁移

## 创建迁移时使用空格

当输入 `make:migration` 命令时，不一定必须在各部分之间使用下划线 `_` 符号，例如 `create_transactions_table`。

可以将名称放在引号中，然后使用空格而不是下划线。

```php
// 能正常工作
php artisan make:migration create_transactions_table
 
// 这样也能正常工作
php artisan make:migration "create transactions table"
```

## 迁移顺序

使用命令 `php artisan make:migration create_posts_table --table=posts` 可以快速创建迁移文件，创建的迁移文件名有一个特点，就是以时间命名的。

如果想更改数据库迁移的顺序，只需重命名文件的时间戳。

例如从 **`2018_08_04_070443_create_posts_table.php`** 到 **`2018_07_04_070443_create_posts_table.php`**（从 **`2018_08_04`** 更改为 **`2018_07_04`**）

## 指定列的创建顺序

> 注意下下面的方法，**仅支持 `MySQL`**

如果要向现有表添加新列，则它不一定必须成为列表中的最后一个。

### `after()`

可以指定应在哪一列之后创建它：

```php
Schema::table('users', function (Blueprint $table) {
    $table->string('phone')->after('email');
});
```

也可以使用 `after()` 方法添加多个字段：

```php
Schema::table('users', function (Blueprint $table) {
    $table->after('remember_token', function ($table) {
        $table->string('card_brand')->nullable();
        $table->string('card_last_four', 4)->nullable();
    });
});
```

### `before()`

如果要向现有表添加新列，则它不一定必须成为列表中的最后一个。

可以指定应在哪一列之前创建它：

```php
Schema::table('users', function (Blueprint $table) {
    $table->string('phone')->before('created_at');
});
```

### `first()`

如果希望新增的列成为表中的第一列，可以使用 `first` 方法。

```php
Schema::table('users', function (Blueprint $table) {
    $table->string('uuid')->first();
});
```

## 具有时区的迁移字段

在迁移中不仅有 `timestamps()`，还有用于时区的 `timestampsTz()`。

```php
Schema::create('employees', function (Blueprint $table) {
    $table->increments('id');
    $table->string('name');
    $table->string('email');
    $table->timestampsTz();
});
```

此外，还有 `dateTimeTz()`、`timeTz()`、`timestampTz()`、`softDeletesTz()` 列。

## 默认时间戳

创建迁移时，可以使用带有选项 `useCurrent()` 和 `useCurrentOnUpdate()` 的 `timestamp()` 列类型，它将把 `CURRENT_TIMESTAMP` 设置为默认值。

```php
$table->timestamp('created_at')->useCurrent();
$table->timestamp('updated_at')->useCurrentOnUpdate();
```

## 更多数据库迁移列类型

有一些有趣的迁移列类型，以下是一些示例。

```php
$table->uuid('id');
$table->geometry('positions');
$table->ipAddress('visitor');
$table->macAddress('device');
$table->point('position');
```

请参阅[官方文档](https://laravel.com/docs/master/migrations#available-column-types)中的所有列类型。

## 迁移状态

如果想检查哪些迁移已执行或尚未执行，无需查看数据库 `migrations` 表，可以使用 `php artisan migrate:status` 命令。

```text
Migration name .............................................. Batch / Status
2014_10_12_000000_create_users_table ............................... [1] Ran
2014_10_12_100000_create_password_reset_tokens_table ............... [1] Ran
2019_08_19_000000_create_failed_jobs_table ......................... [1] Ran
2019_12_14_000001_create_personal_access_tokens_table .............. [1] Ran
```

## 对存在表进行迁移

如果对现有表进行迁移，并且希望生成 `Schema::table()`，请在末尾添加`_in_xxxxx_table` 或 `_to_xxxxx_table`，或指定 `--table`参数。

### 空迁移文件

::: code-group
```bash [迁移命令]
php artisan make:migration change_fields_products_table

# INFO  Migration [database/migrations/2023_11_16_025034_change_fields_products_table.php] created successfully.
```

```php [命令生成的迁移文件]
// database/migrations/2023_11_16_025034_change_fields_products_table.php
return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
```
:::

### 指定表

- 方式一：使用 `--table` 参数指定表则会生成预填充 `Schema::table('xxx', function() {})` 的类

    :::code-group
    ```bash [迁移命令]
    php artisan make:migration whatever_you_want --table=products

    # INFO  Migration [database/migrations/2023_11_16_025540_whatever_you_want.php] created successfully.
    ```

    ```php [执行命令后生成的迁移文件]
    // database/migrations/2023_11_16_025540_whatever_you_want.php
    return new class extends Migration
    {
        /**
        * Run the migrations.
        */
        public function up(): void
        {
            Schema::table('products', function (Blueprint $table) {
                //
            });
        }

        /**
        * Reverse the migrations.
        */
        public function down(): void
        {
            Schema::table('products', function (Blueprint $table) {
                //
            });
        }
    };
    ```
    :::

- 方式二：添加 `in_xxxxx_table` 语句

    ::: code-group
    ```bash [迁移命令]
    php artisan make:migration change_fields_in_products_table

    # INFO  Migration [database/migrations/2023_11_16_025304_change_fields_in_products_table.php] created successfully.
    ```

    ```php [执行命令后生成的迁移文件]
    // database/migrations/2023_11_16_025304_change_fields_in_products_table.php
    return new class extends Migration
    {
        /**
         * Run the migrations.
         */
        public function up(): void
        {
            Schema::table('products', function (Blueprint $table) {
                //
            });
        }

        /**
         * Reverse the migrations.
         */
        public function down(): void
        {
            Schema::table('products', function (Blueprint $table) {
                //
            });
        }
    };
    ```
    :::

  ## 运行迁移之前输出 SQL

    当输入 `php artisan migrate --pretend` 命令时，在终端中会列出待执行的 SQL 查询。

    如果需要的话，这是一种调试 SQL 的有趣方法。

    ```text
    php artisan migrate --pretend

    # 2023_11_16_025540_whatever_you_want ....................................
    # ⇂ alter table `products` add `description` varchar(255) null after `name`
    ```

  ## 添加列的描述

    可以在迁移中添加有关列的描述并提供有用的信息。

    如果数据库由开发人员以外的其他人管理，可以在执行任何操作之前查看表结构中的注释。

    ```php
    $table->unsignedInteger('interval')
        ->index()
        ->comment('This column is used for indexing.')
    ```

## 检查表是否存在

使用 `hasTable` 方法检查表是否存在：

```php
if (Schema::hasTable('users')) {
    // users 表存在
}
```

## 检查列是否存在

使用 `hasColumn` 方法检查列是否存在：

```php
if (Schema::hasColumn('users', 'email')) {
    // users 表存在并且表包含 `email` 字段
}
```

##

从 Laravel 9.6.0 开始添加了 `whenTableDoesntHaveColumn` 方法，仅当该列不存在时，才可以在数据库表中添加该列；

`whenTableHasColumn` 方法判断列存在，如果存在，则可以将其删除。

```php
return new class extends Migration {
    public function up()
    {
        // 仅当该列不存在时，才可以在数据库表中添加该列
        Schema::whenTableDoesntHaveColumn('users', 'name', function (Blueprint $table) {
            $table->string('name', 30);
        });
    }
 
    public function down()
    {
        // 判断列存在，如果存在，则可以将其删除。
        Schema::whenTableHasColumn('users', 'name', function (Blueprint $table) {
            $table->dropColumn('name');
        });
    }
}
```
