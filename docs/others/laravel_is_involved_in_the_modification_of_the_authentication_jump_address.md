# Laravel中涉及认证跳转地址的修改的地方


登录后跳转：

在`app\Http\Auth\LoginController.php`中修改
```
protected $redirectTo = '/home';
```

已登录，访问登录接口时跳转：

修改`app\Http\Middleware\RedirectIfAuthenticated.php`中的`handle()`方法：

```
 public function handle($request, Closure $next, $guard = null)
 {
   if (Auth::guard($guard)->check()) {
       return redirect('/home');
   }
   
   return $next($request);
 }
```


未登录访问需要登录页面时的跳转

修改`app\Http\Exceptions\Handler.php`中的`unauthenticated()`方法：

```
protected function unauthenticated($request, AuthenticationException $exception)
{
    if ($request->expectsJson()) {
        return response()->json(['error' => 'Unauthenticated.'], 401);
    }
    return redirect()->guest(route('login'));
}
```