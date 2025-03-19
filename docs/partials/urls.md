# URL 生成

## `defaults`

可以使用 `URL::defaults()` 方法为路由参数提供默认值。

```php
// 路由定义
use App\Http\Middleware\ApplyDefaultRouteValues;

Route::prefix('/{account}')
    ->middleware([ApplyDefaultRouteValues::class])
    ->group(function () {
        Route::get('/accounts', function () {
            dd('Accounts');
        });
    });

// 中间件定义
use Illuminate\Support\Facades\URL;

class ApplyDefaultRouteValues
{
    public function handle(Request $request, Closure $next)g
    {
        URL::defaults([
            'account' => $request->user()->account,
        ]);

        return $next($request);
    }
}

// account 有默认值的情况下不需要提供
<a href="{{ route('users.index')}}">Users</a>
```

更多官方文档[查看这里](https://laravel.com/docs/master/urls#default-values)。
