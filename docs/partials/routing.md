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
