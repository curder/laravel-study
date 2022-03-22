# Routing 路由

## 路由分组 group

在路由中，可以在组内创建组，将某个中间件仅分配给 "父" 组中的某些 URL。

```php
Route::group(['prefix' => 'account', 'as' => 'account.'], function() {
    Route::get('login', 'AccountController@login'); // /account/login
    Route::get('register', 'AccountController@register'); // /account/register
    
    Route::group(['middleware' => 'auth'], function() {
        Route::get('edit', 'AccountController@edit'); // account/edit
    });
});
```

## 通配符子域

可以通过动态子域名创建路由组，并将其值传递给每个路由。

```php
Route::domain('{username}.workspace.com')->group(function () {
    Route::get('user/{id}', function ($username, $id) {
        //
    });
});
```

## Laravel UI 包 route 方法

如果使用 [Laravel UI](https://github.com/laravel/ui) 包，可能想知道 `Auth::routes();` 背后的实际路由是什么？ 可以检查文件 `/vendor/laravel/ui/src/AuthRouteMethods.php`。

```php
public function auth()
{
    return function ($options = []) {
        // Authentication Routes...
        $this->get('login', 'Auth\LoginController@showLoginForm')->name('login');
        $this->post('login', 'Auth\LoginController@login');
        $this->post('logout', 'Auth\LoginController@logout')->name('logout');
        // Registration Routes...
        if ($options['register'] ?? true) {
            $this->get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
            $this->post('register', 'Auth\RegisterController@register');
        }
        // Password Reset Routes...
        if ($options['reset'] ?? true) {
            $this->resetPassword();
        }
        // Password Confirmation Routes...
        if ($options['confirm'] ?? class_exists($this->prependGroupNamespace('Auth\ConfirmPasswordController'))) {
            $this->confirmPassword();
        }
        // Email Verification Routes...
        if ($options['verify'] ?? false) {
            $this->emailVerification();
        }
    };
}
```

该函数的默认用法很简单：

```php
Auth::routes(); // 默认没有参数
```

但是可以提供参数来启用或禁用某些路由：

```php
Auth::routes([
    'login'    => true,
    'logout'   => true,
    'register' => true,
    'reset'    => true,  // 启用重置密码
    'confirm'  => false, // 启用密码确认
    'verify'   => false, // 启用邮箱验证
]);
```


## 路由模型绑定

可以像 `Route::get('api/users/{user}', function (App\Models\User $user) { ... }` 之类的路由模型绑定，但不仅可以通过 id 字段。

如果希望 `{user}` 成为用户名字段，将其放入模型中：

```php
public function getRouteKeyName() {
    return 'username';
}
```

## 从路由文件快速导航到控制器

这个特性在 Laravel 8 之前是可选的，在 Laravel 8 中成为标准的主要路由语法。

更早时的路由定义：

```php
Route::get('page', 'PageController@action');
```

可以将 Controller 指定为一个类：

```php
Route::get('page', [\App\Http\Controllers\PageController::class, 'action']);
```

然后能够在 **PhpStorm** 中单击 `PageController`，并直接导航到控制器文件，而不是手动搜索它。

或者，为了使其更短，将其添加到路由定义文件的顶部：

```php
use App\Http\Controllers\PageController;

Route::get('page', [PageController::class, 'action']);
```

## 限速

使用场景，发送短信验证码接口每分钟允许请求一次。

```php
// 定义规则，每个用户或IP每分钟允许发送1个请求
// 在 `App\Providers\RouteServiceProvider::configureRateLimiting()` 方法中定义
RateLimiter::for('reset-password', function (Request $request) {
    return Limit::perMinute(1)->by(
        optional($request->user())->id ?: $request->ip()
        );
});

// 在定义路由时使用
Route::get('reset-password', function() {
    //
})->middleware(['throttle:reset-password']);
```

更多官方文档[查看这里](https://laravel.com/docs/8.x/routing#rate-limiting)。
