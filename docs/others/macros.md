# 自定义逻辑 Macros

Laravel 从 4.2 版本开始就有了宏的概念，本文将展示如何创建它们。

在 Laravel 代码库，会发现无数对名为 `\Illuminate\Support\Traits\Macroable` 宏的引用，这个特性允许实时扩展类的公共接口。



## 什么是宏

简单来说，Laravel Macro 是一种用 Laravel 类中不存在的代码向 Laravel 内部组件添加一些缺失功能的方法。

为了实现 Laravel 宏，Laravel 提供了一个名为 Macroable 的 PHP 特性。

可以检查位于 [`Illuminate\Http\Response`](https://github.com/laravel/framework/blob/master/src/Illuminate/Http/Response.php) 的 Laravel Response 类，它实现了 Macroable 特征，这意味着可以使用宏扩展 Response 类。

## 可宏化的类

以下 Laravel 类允许使用 [`Illuminate\Support\Traits\Macroable`](https://github.com/laravel/framework/blob/master/src/Illuminate/Macroable/Traits/Macroable.php) 特征创建宏。以下是一些最常用的创建宏的类：

- [`Illuminate\Auth\RequestGuard`](https://github.com/laravel/framework/blob/master/src/Illuminate/Auth/RequestGuard.php)
- [`Illuminate\Auth\SessionGuard`](https://github.com/laravel/framework/blob/master/src/Illuminate/Auth/SessionGuard.php)
- [`Illuminate\Cache\Repository`](https://github.com/laravel/framework/blob/master/src/Illuminate/Cache/Repository.php)
- [`Illuminate\Console\Command`](https://github.com/laravel/framework/blob/master/src/Illuminate/Console/Command.php)
- [`Illuminate\Console\Scheduling\Event`](https://github.com/laravel/framework/blob/master/src/Illuminate/Console/Scheduling/Event.php)
- [`Illuminate\Cookie\CookieJar`](https://github.com/laravel/framework/blob/master/src/Illuminate/Cookie/CookieJar.php)
- [`Illuminate\Database\Eloquent\FactoryBuilder`](https://github.com/laravel/framework/blob/master/src/Illuminate/Database/Eloquent/FactoryBuilder.php)
- [`Illuminate\Database\Eloquent\Relations\Relation`](https://github.com/laravel/framework/blob/master/src/Illuminate/Database/Eloquent/Relations/Realtion.php)
- [`Illuminate\Database\Grammar`](https://github.com/laravel/framework/blob/master/src/Illuminate/Database/Grammar.php)
- [`Illuminate\Database\Query\Builder`](https://github.com/laravel/framework/blob/master/src/Illuminate/Database/Query/Builder.php)
- [`Illuminate\Database\Schema\Blueprint`](https://github.com/laravel/framework/blob/master/src/Illuminate/Database/Schema/Blueprint.php)
- [`Illuminate\Filesystem\Filesystem`](https://github.com/laravel/framework/blob/master/src/Illuminate/Filesystem/Filesystem.php)
- [`Illuminate\Foundation\Testing\TestResponse`](https://github.com/laravel/framework/blob/master/src/Illuminate/Foundation/Testing/TestResponse.php)
- [`Illuminate\Http\JsonResponse`](https://github.com/laravel/framework/blob/master/src/Illuminate/Http/JsonResponse.php)
- [`Illuminate\Http\RedirectResponse`](https://github.com/laravel/framework/blob/master/src/Illuminate/Http/RedirectResponse.php)
- [`Illuminate\Http\Request`](https://github.com/laravel/framework/blob/master/src/Illuminate/Http/Request.php)
- [`Illuminate\Http\Response`](https://github.com/laravel/framework/blob/master/src/Illuminate/Http/Response.php)
- [`Illuminate\Http\UploadedFile`](https://github.com/laravel/framework/blob/master/src/Illuminate/Http/UploadedFile.php)
- [`Illuminate\Mail\Mailer`](https://github.com/laravel/framework/blob/master/src/Illuminate/Mail/Mailer.php)
- [`Illuminate\Routing\PendingResourceRegistration`](https://github.com/laravel/framework/blob/master/src/Illuminate/Routing/PendingResourceRegistration.php)
- [`Illuminate\Routing\Redirector`](https://github.com/laravel/framework/blob/master/src/Illuminate/Routing/Redirector.php)
- [`Illuminate\Routing\ResponseFactory`](https://github.com/laravel/framework/blob/master/src/Illuminate/Routing/ResponseFactory.php)
- [`Illuminate\Routing\Route`](https://github.com/laravel/framework/blob/master/src/Illuminate/Routing/Route.php)
- [`Illuminate\Routing\Router`](https://github.com/laravel/framework/blob/master/src/Illuminate/Routing/Router.php)
- [`Illuminate\Routing\UrlGenerator`](https://github.com/laravel/framework/blob/master/src/Illuminate/Routing/UrlGenerator.php)
- [`Illuminate\Support\Arr`](https://github.com/laravel/framework/blob/master/src/Illuminate/Support/Arr.php)
- [`Illuminate\Support\Collection`](https://github.com/laravel/framework/blob/master/src/Illuminate/Support/Collection.php)
- [`Illuminate\Support\LazyCollection`](https://github.com/laravel/framework/blob/master/src/Illuminate/Support/LazyCollection.php)
- [`Illuminate\Support\Str`](https://github.com/laravel/framework/blob/master/src/Illuminate/Support/Str.php)
- [`Illuminate\Support\Testing\Fakes\NotificationFake`](https://github.com/laravel/framework/blob/master/src/Illuminate/Support/Testing/Fakes/NotificationFake.php)
- [`Illuminate\Translation\Translator`](https://github.com/laravel/framework/blob/master/src/Illuminate/Translation/Translator.php)
- [`Illuminate\Validation\Rule`](https://github.com/laravel/framework/blob/master/src/Illuminate/Validation/Rule.php)
- [`Illuminate\View\Factory`](https://github.com/laravel/framework/blob/master/src/Illuminate/View/Factory.php)
- [`Illuminate\View\View`](https://github.com/laravel/framework/blob/master/src/Illuminate/View/View.php)
- [`Illuminate\Validation\Rules\File`](https://github.com/laravel/framework/blob/master/src/Illuminate/Validation/Rules/File.php)
- [`Illuminate\Support\Carbon`](https://github.com/laravel/framework/blob/master/src/Illuminate/Support/Carbon.php)

## 自定义宏

在创建 Laravel 宏之前，必须确保目标类使用 Macroable 特征。

在这里，将在 `Illuminate\Support\Str` 类上创建一个宏，它将检查名为 `isLength` 的给定字符串的长度。

可以在 `AppServiceProvider` 类的 `boot()` 方法中定义该宏。

```php
<?php

namespace App\Providers;

use Illuminate\Support\Str; //[!code ++]
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Str::macro('isLength', function ($str, $length) { //[!code ++]
            return static::length($str) == $length; //[!code ++]
        }); //[!code ++]
    }
}
```

在 `AppServiceProvider` 的 `boot` 方法中，我们在 `Str` 类上定义了一个 `isLength` 宏，它只是将第一个参数的长度与第二个参数的长度进行比较。

宏可以有许多决定的参数。需要注意的是，在自定义的宏中调用了 `static::length`，因为宏仍然可以完全访问原始类上的方法。

现在可以在应用程序中的任何位置使用该宏：

```php
use Illuminate\Support\Str;

Str::isLength('This is a Laravel Macro', 23); // true
```

> `Macroable` 特征的内部机制允许从静态和实例上下文中调用宏。


向 `Str` 类添加另一个宏，它将把给定的字符附加到给定的字符串中。


```php
Str::macro('appendTo', function ($str, $char) {
    return $char.$str;
});
```

现在可以像下面这样调用上面的宏：

```php
use Illuminate\Support\Str;

dd(Str::appendTo('LaraShout', '@')); // @LaraShout
```


## 创建多个宏

可以使用 `AppServiceProvider` 将两个宏添加到 Str 类中。

随着应用程序逻辑的增长，`AppServiceProvider` 将开始变得混乱。

从 Laravel 5.5 开始，可以定义基于类的宏，这将使代码不再那么混乱。

将继续前面的示例，并将两个宏移至一个新类中。

将创建一个名为 `StrMixin` 的新类并将其存储在 `app/Mixins` 文件夹中。添加以下代码：

```php
<?php

namespace App\Mixins;

class StrMixin
{
    /**
     * @return \Closure
     */
    public function isLength()
    {
        return function($str, $length) {
            return static::length($str) == $length;
        };
    }

    /**
     * @return \Closure
     */
    public function appendTo()
    {
        return function($str, $char) {
            return $char.$str;
        };
    }
}
```


现在在 `AppServiceProvider` 中，可以删除以前的宏声明。

可以使用 `mixin()` 方法来初始化给定类的所有宏。

进行修改后 `AppServiceProvider` 将如下所示：

```php
<?php

namespace App\Providers;

use App\Mixins\StrMixin; //[!code ++]
use Illuminate\Support\Str;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Str::mixin(new StrMixin); //[!code ++]
    }
}
```

现在，如果在 `Str` 类上测试 `isLength()` 和 `appendTo()` 方法，将得到相同的结果。

## 一些示例

### `Model`

::: code-group 
```php [定义]
<?php

use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;

class AppServiceProvider extends ServiceProvider
{
    // ...

    public function boot()
    {
        // Define the 'whereLike' macro
        Builder::macro('whereLike', function ($attributes, string $searchTerm) {
            $this->where(function (Builder $query) use ($attributes, $searchTerm) {
                foreach (Arr::wrap($attributes) as $attribute) {
                    $query->when(
                        // Check if the attribute is not an expression and contains a dot (indicating a related model)
                        !($attribute instanceof \Illuminate\Contracts\Database\Query\Expression) &&
                        str_contains((string) $attribute, '.'),
                        function (Builder $query) use ($attribute, $searchTerm) {
                            // Split the attribute into a relation and related attribute
                            [$relation, $relatedAttribute] = explode('.', (string) $attribute);

                            // Perform a 'LIKE' search on the related model's attribute
                            $query->orWhereHas($relation, function (Builder $query) use ($relatedAttribute, $searchTerm) {
                                $query->where($relatedAttribute, 'LIKE', "%{$searchTerm}%");
                            });
                        },
                        function (Builder $query) use ($attribute, $searchTerm) {
                            // Perform a 'LIKE' search on the current model's attribute
                            // also attribute can be an expression
                            $query->orWhere($attribute, 'LIKE', "%{$searchTerm}%");
                        }
                    );
                }
            });
        });
    }
    //...
}

```

```php [使用]
Post::query()
    ->whereLike([
        'title',
        // search in the current model's 'title' attribute
        'description',
        // search in the current model's 'description' attribute
        'user.name',
        // search in the related model's 'name' attribute
        'user.email',
        // search in the related model's 'email' attribute
        DB::raw('DATE_FORMAT(created_at, "%d/%m/%Y")'),
        // search in the formatted 'created_at' attribute
        DB::raw('CONCAT(user.first_name, " ", user.last_name)'),
        // search in the concatenated 'first_name' and 'last_name' attributes
    ], request()->search)
        // search for the request's 'search' query parameter
    ->with('user')
    ->get();
```
:::

- 原始地址：[@MrPunyapal twitter](https://twitter.com/MrPunyapal/status/1717939956616941926)
- Gist 地址：[mr-punyapal/LaravelWhereLikeMacro.php](https://gist.github.com/mr-punyapal/31433fdd415518f8510385b86178ff1f)

### `Http`

```php
use Illuminate\Support\Facades\Http;

Http::macro('api-local', function() {
    return Http::withHeaders([
        'X-Header' => 'Value',
    ])->baseUrl('https://example.com');
});
```

### `Str`

```php
use Illuminate\Support\Str;

Str::macro('slugify', function($value) {
    return Str::slug($value);
});
```

### `Response`

```php
use Illuminate\Support\Facades\Response;

Response::macro('api', function($data) {
    return response()->json($data); 
})
```

### `Validation`

注意 `Validator` 使用是 **`extend`** 方法来自定义宏，并不是 `micro` 方法。

```php
use Carbon\Carbon;
use Illuminate\Support\Facades\Validator;

Validator::extend('adult', function($attribute, $value) {
    return Caron::parse($value)->age >= 18;
});
```

### `Cache`

```php
use Illuminate\Support\Facades\Cache;

Cache::macro('rememberForeverJson', function($key, $callback) {
    return Cache::rememberForever($key, function() use ($callback) {
        return json_decode($callback());
    }); 
});
```

### `View`

```php
use Illuminate\Support\Facades\Blade;

Blade::macro('datetime', function($expression) {
    return "<?php echo with[$expression]->format('Y-m-d H:i:s'); ?>";
});
```

### `Event`

```php
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Event;

Event::macro('logAndDispatch', function($event) {
    Log::info("Event: {$event} dispatched");
    event($event);
});
```

### `Form`

```php
Form::macro('customInput', function($name, $value) {
    return "<input type='text' name='{$name}' value='{$value}' />";
});
```

### `File`

通过 `File` 提供的宏，可以方便的自定义文件类型验证规则。

::: code-group
```php [定义]
// AppServiceProvider.php
use Illuminate\Validation\Rules\File;

File::macro('document', fn() => File::types(['pdf', 'rtf', 'doc', 'docx']));
```

```php [使用]
// UploadController.php
use Illuminate\Validation\Rules\File;

public function store($request)
{
  $request->validate([
    'file' => [File::document()->max(20 * 1024)], 
  ]);
  
  // ...
}
```


```php [测试]
/**
 * @throws ReflectionException
 */
it('has custom types when using document macro', function () {

    $file = (new \Illuminate\Validation\Rules\File())->document();

    $types = ['pdf', 'rtf', 'doc', 'docx'];
    $allowedMimetypes = (new ReflectionClass($file))->getProperty('allowedMimetypes')->getValue($file);

    expect($allowedMimetypes)->toEqual($types);
});
```
:::

### `Carbon`

创建了一个名为 `toUserTimezone` 的宏，它将 Carbon 实例格式化为用户的时区或软件默认的时区。`$this` 关键字指的是调用该宏的 Carbon 实例。

::: code-group

```php [定义]
// AppServiceProvider.php
use Illuminate\Support\Carbon;

Carbon::macro('toUserTimezone', fn (): Carbon => $this->tz(auth()->user()?->timezone ?? config('app.timezone')));
```

```php [使用]
<?php
$date = Carbon::now()->toUserTimezone();
```

```php [测试]
it('converts carbon date to default timezone', function () {
    // Set default timezone in config
    config()->set('app.timezone', 'PRC');

    // Create a Carbon instance
    $date = Carbon::now('UTC');

    // Apply macro
    $defaultDate = $date->toUserTimezone();

    // Check if timezone is converted correctly
    expect($defaultDate->timezoneName)
        ->toEqual('PRC');
});

it('converts carbon date to user timezone', function () {
    // Create user and login
    Auth::login($user = User::factory()->make(['timezone' => 'America/Los_Angeles']));

    // Create a Carbon instance
    $date = Carbon::now('UTC');

    // Apply macro
    $userDate = $date->toUserTimezone();

    // Check if timezone is converted correctly
    expect($userDate->timezoneName)
        ->toBe($user->timezone)
        ->toEqual('America/Los_Angeles');
});
```
:::