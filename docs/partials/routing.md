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

## 路由回退：没有其他路由匹配时

如果想为未找到的路由指定额外的逻辑，而不是仅仅抛出默认的 `404` 页面，可以在路由文件的最后创建一个特殊的路由。

```php
Route::group(['middleware' => ['auth'], 'prefix' => 'admin', 'as' => 'admin.'], function () {
    Route::get('/home', 'HomeController@index');
    Route::resource('tasks', 'Admin\TasksController');
});

// Some more routes....
Route::fallback(function() {
    return 'Hm, why did you land here somehow?';
});
```

## 使用 RegExp 进行路由参数验证

可以直接在路由中验证参数，使用 `where` 参数。

一个非常常见的情况是通过语言区域设置为路由添加前缀。

```php
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\HomeController;

Route::group([
    'prefix' => '{locale}',
    'where' => ['locale' => '[a-zA-Z]{2}']
], function () {
    Route::get('/', [HomeController::class, 'index']);
    Route::get('article/{id}', [ArticleController::class, 'show']);
});
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


## 速率限制：全局和针对访客/用户

可以限制某些 URL 每分钟最多调用 60 次，使用 `throttle:60,1` ：

```php
Route::middleware('auth:api', 'throttle:60,1')->group(function () {
    Route::get('/user', function () {
        //
    });
});
```

而且，可以分别为公共用户和登录用户执行此操作：

```php
// 访客最多 10 个请求，经过身份验证的用户最多 60 个
Route::middleware('throttle:10|60,1')->group(function () {
    //
});
```

此外，可以有一个数据库字段 `users.rate_limit` 并限制特定用户的数量：

```php
Route::middleware('auth:api', 'throttle:rate_limit,1')->group(function () {
    Route::get('/user', function () {
        //
    });
});
```

## 向路由查询字符串参数

如果将附加参数传递给路由，则在数组中，这些键/值对将自动添加到生成的 URL 的查询字符串中。

```php
Route::get('user/{id}/profile', function ($id) {
    //
})->name('profile');

$url = route('profile', ['id' => 1, 'photos' => 'yes']); // Result: /user/1/profile?photos=yes
```


## 翻译资源动词

如果使用资源控制器，但想将 URL 动词更改为非英语以用于 SEO 目的，可以使用 `App\Providers\RouteServiceProvider` 中的 `Route::resourceVerbs()` 方法对其进行配置。

```php
public function boot()
{
    Route::resourceVerbs([
        'create' => 'crear',
        'edit' => 'editar',
    ]);

    // ...
}
```

## 自定义资源路由名称

使用资源控制器时，可以在 `routes/web.php` 中指定 `->names()` 参数，这样浏览器中的 URL 前缀和在整个 `Laravel` 项目中使用的路由名称前缀可能会有所不同。

```php
Route::resource('p', ProductController::class)->names('products');
```

所以上面的这段代码会生成像 `/p`、`/p/{id}`、`/p/{id}/edit` 等 URL。但可以在代码中通过 `route('products.index')`, `route('products.create')` 等生成 URL。

