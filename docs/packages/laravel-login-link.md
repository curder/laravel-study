# 快速登录 spatie/laravel-login-link

在开发和测试中经常需要快速切换角色的用户，可以借助 [
spaite/laravel-login-link](https://github.com/spatie/laravel-login-link) 来实现。

这个扩展包通过提供一个将呈现登录链接的组件来解决该问题。单击链接后，可以登录指定用户。

> **注意：** 它适用于本地开发或测试阶段，不应该在任何线上可访问的环境中使用。

## 安装

通过 Composer 安装该软件包：

```bash
composer require spatie/laravel-login-link
```

### 自定义配置

安装软件包后，如果需要发布配置文件，可以使用下面的命令：

::: code-group

```bash [发布命令]
php artisan vendor:publish --tag="login-link-config"
```

```php [配置文件 login-link.php]
use Spatie\LoginLink\Http\Controllers\LoginLinkController;

return [
    // 登录链接仅在这些环境中有效，一般可以设置为本地local、测试stage
    'allowed_environments' => ['local'],

    // 当尝试登录不存在的用户时，该包将自动创建用户模型
    'automatically_create_missing_users' => true,

    // 用于登录的用户模型，如果设置为null，则使用默认的auth配置中的值，默认为 App\Models\User
    'user_model' => null,

    // 单击登录链接后，将用户重定向到此路由。如果设置为 null，将重定向到/
    'redirect_route_name' => null,

    // 该包将注册一个指向该控制器的路由，也可以通过自定义控制器类来更精细的控制登录逻辑
    'login_link_controller' => LoginLinkController::class,

    // 该中间件将应用在用户通过链接登录的路由上。
    'middleware' => ['web'],
];
```

:::

### 自定义视图

可以通过运行下面的命令来发布自定义登录链接的视图：

```bash
php artisan vendor:publish --tag="login-link-views"
```

## 用法

通过使用 `x-login-link` 组件添加到对应的视图中即可，一般是登录页面：

```php
@env('local')
    <x-login-link />
@endenv
```

> 建议仅在 `local` 环境中渲染它

### 自定义登录跳转

默认情况下，它将重定向到配置文件中 `redirect_route_name` 配置的值，如果设置为 `null`，则重定向到 `/`。

如果需要自定义跳转，可以在组件中添加 `redirect-url` 属性：

```php
<x-login-link redirect-url="{{ route('dashboard') }}" />
```

### 自定义用户

该包将登录表中的第一个用户。可以通过传递 `email` 属性来自定义它。

使用指定邮件地址的用户进行登录：

```php
<x-login-link email="admin@example.com" />
```

指定用户主键（一般情况是 `id`）：

```php
<x-login-link key="123" />
```

指定需要登录的用户的属性：

```php
<x-login-link :user-attributes="['role' => 'admin']" />
```

### 自定义登录链接

默认情况下，该包将显示 `Developer Login` 作为登录链接的文本。可以通过传递 `label` 属性来自定义它。

```php
<x-login-link label="Click here to log in" />
```

默认情况下，登录链接将具有 Tailwind 类 `underline` 。要自定义它，可以将任何 css 类传递给 `class` 属性。

这些类将覆盖 `underline` 默认值。

```php
<x-login-link class="underline text-red-500" />
```

### 自定义守卫

默认情况下，该包将使用默认的 `web` 守卫防护。可以通过 `guard` 参数指定另一个守卫。

```php
<x-login-link guard="admin" />
```

### 自动创建新用户

如果需要登录的用户不存在，该包将使用用户模型的工厂来创建用户，并登录该新用户。

如果不希望出现此行为，请在配置文件中将 `automatically_create_missing_users` 设置为 `false`

### 与 `Vue` 和 `InertiaJS` 一起使用

该包有一个内置组件来支持 `Vue` 和 `InertiaJS`，但是需要进行些许配置，编辑 `HandleInertiaRequests` 中间件。

```php
public function share(Request $request): array
{
    return array_merge(parent::share($request), [
        'environment' => app()->environment(), // [!code focus]
        // ...
    ]);
}
```

因此，如果需要仅在本地环境中显示该按钮，可以类似下面的方式使用该组件：

```php
import LoginLink from '@/../../vendor/spatie/laravel-login-link/resources/js/login-link.vue';

<LoginLink 
    v-if="$page.props.environment == 'local'" 
    label="Login as user@example.com"
    class="pb-3 text-red-500"
    :redirect-url="route('dashboard')"
/>
```
