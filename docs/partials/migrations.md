# Migrations 迁移

## 迁移顺序

使用命令 `php artisan make:migration create_posts_table --table=posts` 可以快速创建迁移文件，创建的迁移文件名有一个特点，就是以时间命名的。

如果想更改数据库迁移的顺序，只需重命名文件的时间戳。

例如从 **`2018_08_04_070443_create_posts_table.php`** 到 **`2018_07_04_070443_create_posts_table.php`**（从 **`2018_08_04`** 更改为 **`2018_07_04`**）


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