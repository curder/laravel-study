# URLs

## `actions()`

`actions()` 函数为给定的控制器操作生成一个 URL。

```php
use App\Http\Controllers\HomeController;
 
action([HomeController::class, 'index']);
```

可以将路由参数数组作为第二个参数传递给该方法：

```php
action([UserController::class, 'profile'], ['id' => 1]);
```

## `asset()`

`asset()` 函数生成一个指向应用程序资源（如图像或 JavaScript 文件）的 URL。

```php
asset('img/photo.jpg');
```

## `route()`
`route()` 函数为给定的[命名路由](https://laravel.com/docs/master/routing#named-routes)生成一个 URL。

```php
route('route.name');

# 路由参数
route('route.name', ['id' => 1]);

# 相对路径
route('route.name', ['id' => 1], absolute: false);
```

## `secure_route()`

`secure_route()` 函数为给定的[命名路由](https://laravel.com/docs/master/routing#named-routes) 生成一个 HTTPS 的 URL。

```php
secure_asset('img/photo.jpg');
```

## `secure_url()`

`secure_url()` 函数生成一个安全 URL，该 URL 指向应用程序的资源。

```php
secure_url('user/profile'); // https://localhost.test/user/profile

secure_url('user/profile', ['id' => 1]); // https://localhost.test/user/profile/1
```

## `to_route()`

`to_route()` 函数为给定的[命名路由](https://laravel.com/docs/master/routing#named-routes)生成[重定向 HTTP 响应](https://laravel.com/docs/master/responses#redirects)。

```php
to_route('users.show', parameters: ['user' => 1]);
```

如有必要，可以将应分配给重定向的 HTTP 状态代码和任何其他响应标头作为第三个和第四个参数传递给 `to_route` 方法：

```php
to_route('users.show', parameters: ['user' => 1], status: 302, headers: ['X-Framework' => 'Laravel']);
```

## `url()`

`url()` 函数生成给定路径的 URL。

```php
url('user/profile'); // http://localhost.test/user/profile

url('user/profile', ['id' => 1]); // http://localhost.test/user/profile/1
```

如果未提供路径参数，则返回一个 `Illuminate\Routing\UrlGenerator` 实例：

```php
# 当前路径
url()->current();

# 完整路径
url()->full();

# 上一个页面
url()->previous();
```