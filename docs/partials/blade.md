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
        
## 判断模版是否存在


可以在实际加载之前检查视图文件是否存在。

```php{1}
if (view()->exists('custom.page')) {
 // Load the view
}
```

甚至可以加载一组视图，并且只会实际加载第一个存在的视图。

```php
return view()->first(['custom.dashboard', 'dashboard'], $data);
```

## 自定义错误页面

如果想为某些 HTTP 代码创建一个特定的错误页面，例如 `500` 或 `403` - 只需在 `resources/views/errors/500.blade.php` 或 `resources/views/errors/403.blade.php` 等中创建一个将此代码作为文件名的 blade 文件。

当出现该错误代码，它将自动加载。

[官方文档](https://laravel.com/docs/master/errors#custom-http-error-pages) 查看更多。


## 没有控制器的视图

如果希望路由仅显示某个视图，不用创建 Controller 方法，只需使用 `Route::view()` 函数。

<CodeGroup>

  <CodeGroupItem title="view" active>

```php
Route::view('about', 'pages.about'); // 视图在 `resources/pages/about.blade.php`
```
  </CodeGroupItem>

  <CodeGroupItem title="normal">

```php
// 1. 路由定义
Route::get('about', [\App\Https\Controllers\PagesController::class, 'about']);

// 2. 控制器
class PagesController extends Controller
{
    public function about()
    {
        return view('pages.about'); // 视图在 `resources/pages/about.blade.php`
    }
} 
```
  </CodeGroupItem>

</CodeGroup>


## `@auth` 模版指令

使用 `@auth` 指令代替 `@if` 语句来检查登录用户。

### 典型方式

```php
@if(auth()->user())
// 用户已验证身份
@endif
```

### 简洁

```php
@auth
// 用户已验证身份
@endauth
```

### 与之相反的是 `@guest` 指令

```php
@guest
// 用户未验证
@endguest
```
                
## 父级 $loop 变量 

在 `Blade` 的 `@foreach` 指令中，甚至可以在两级循环中使用 `$loop` 变量来访问父变量。

```php
@foreach ($users as $user)
    @foreach ($user->posts as $post)
        @if ($loop->parent->first)
            // 父循环的第一次迭代。
        @endif
    @endforeach
@endforeach
```


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
