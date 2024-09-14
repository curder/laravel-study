# Laravel 11 中为中间件设置别名

由于 Laravel 11 移除了 `Kernel` 类，该如何为中间件设置别名呢？

## 中间件别名

打开 `bootstrap/app.php`，会注意到一个 `withMiddleware` 方法调用。 默认情况下，它看起来是这样的：

```php
->withMiddleware(function (Middleware $middleware) {
    //       
})
```

在 `withMiddleware` 回调中，调用传入的 `Middleware` 对象上的 `alias` 方法。

```php
->withMiddleware(function (Middleware $middleware) {
    $middleware->alias([ // [!code ++]
        'subscribed' => RedirectIfNotSubscribed::class // [!code ++]
    ]); // [!code ++]
})
```

由于这是一个数组，可以根据需要添加任意数量的别名。

## 使用别名

现在可以在路由或控制器中的任何地方使用该别名。


```php
Route::get('/protected', ProtectedController::class)
    ->middleware(['auth', 'subscribed']) // [!code ++]
    ->name('protected');
```