# Blade 模版

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
