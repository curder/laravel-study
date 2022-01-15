# Blade 模版

## `@foreach` 循环中的 `$loop` 变量

在 `foreach` 循环中，仅使用 `$loop` 变量检查当前条目是否是第一个/最后一个。

```php {2,6}
@foreach ($users as $user)
     @if ($loop->first)
        This is the first iteration.
     @endif

     @if ($loop->last)
        This is the last iteration.
     @endif

     <p>This is user {{ $user->id }}</p>
@endforeach
```

`$loop` 变量还包含各种其他有用的属性：

| 属性                 | 描述                 |
|--------------------|--------------------|
| `$loop->index`     | 当前循环迭代的索引（从 0 开始）。 |
| `$loop->iteration` | 当前循环迭代（从 1 开始）。    |
| `$loop->remaining` | 循环中剩余的迭代。          |
| `$loop->count`     | 正在迭代的数组中的项目总数。     |
| `$loop->first`     | 是否是循环的第一次迭代。       |
| `$loop->last`      | 是否是循环的最后一次迭代。      |
| `$loop->even`      | 是否是循环中的偶数迭代。       |
| `$loop->odd`       | 是否是循环中的奇数迭代。       |
| `$loop->depth`     | 当前循环的嵌套级别。         |
| `$loop->parent`    | 在嵌套循环中时，父循环变量。     |

[官方文档](https://laravel.com/docs/master/blade#the-loop-variable) 查看更多。                                                     

## 自定义模版指令

使用 `Blade::if()` 方法轻松创建新的 `if` 模版指令。

例如，验证是否启用了特定的应用程序功能。

在项目的 `AppServiceProvider.php` 的 `boot` 方法中注册。

```php
/**
 * Bootstrap any application services.
 * return void
 */
public function boot()
{
    Blade::if('enabled', fn ($value) => Setting::get($value) === true);
}
```

通过下面的模版语法使用：

```html
@enabled('regular-registration')
<!-- 常规配置已启用 -->
@elseenabled('beta-registration')
<!-- 测试配置已启用 -->
@else
<!-- 注册被禁用 -->
@endenabled

@unlessenabled('regular-registration')
<!-- 该应用程序不接受常规注册 -->
@endenabled
```
