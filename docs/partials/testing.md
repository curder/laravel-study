# Testing 测试

## 中间件

这里以一个路由中间件作为示例。[源代码查看](https://github.com/curder/laravel-testing-demo/tree/middleware)

::: code-group

```php [测试]
<?php
// tests/Unit/Http/Middleware/RedirectMiddlewareTest.php

use App\Models\Redirect;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\RedirectMiddleware;
use Symfony\Component\HttpFoundation\Response;

// 测试中间件逻辑是否正确
it('the middleware is in isolation', function () {
    $response = (new RedirectMiddleware())->handle(
        createRequest('get', '/'),
        fn () => new Response()
    );
    expect($response->isRedirect(url('/new-homepage')))->toBeFalse(); // 未配置跳转时，访问页面不会跳转

    Redirect::factory()->create([
        'from' => '/',
        'to' => '/new-homepage',
    ]);

    $response = (new RedirectMiddleware())->handle(
        createRequest('get', '/'),
        fn () => new Response()
    );
    expect($response->isRedirect(url('/new-homepage')))->toBeTrue(); // 正确配置了跳转时，访问页面会跳转
});

// 测试中间件能正常工作
it('will preform the right redirects', function () {
    Route::get('my-test-router', fn () => 'ok')->middleware(RedirectMiddleware::class);
    $this->get('/my-test-router')->assertOk();

    Redirect::factory()->create([
        'from' => '/my-test-router',
        'to' => '/new-homepage',
    ]);
    $this->get('/my-test-router')->assertRedirect('/new-homepage');
});

function createRequest($method, $uri): \Illuminate\Http\Request
{
    $symfony_request = \Symfony\Component\HttpFoundation\Request::create(
        $uri,
        $method,
    );

    return \Illuminate\Http\Request::createFromBase($symfony_request);
}
```

```php {20-28} [定义]
<?php
// app\Http\Middleware\RedirectMiddleware.php

namespace App\Http\Middleware;

use App\Models\Redirect;
use Closure;
use Illuminate\Http\Request;

class RedirectMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $path = parse_url($request->fullUrl(), PHP_URL_PATH) ?? '/';

        $redirect = Redirect::query()->where('from', $path)->first();

        if (! $redirect) {
            return $next($request);
        }

        return response()->redirectTo($redirect->to);
    }
}
```

```php [模型文件]
<?php
// app/Models/Redirect.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Redirect extends Model
{
    use HasFactory;
}
```

```php [迁移文件]
<?php
// database/migrations/2022_03_23_121330_create_redirects_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRedirectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('redirects', function (Blueprint $table) {
            $table->id();
            $table->string('from');
            $table->string('to');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('redirects');
    }
}
```

```php [Factory工厂文件]
<?php
// database/factories/RedirectFactory.php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class RedirectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition(): array
    {
        return [
            'from' => parse_url($this->faker->unique()->url(), PHP_URL_PATH),
            'to' => parse_url($this->faker->unique()->url(), PHP_URL_PATH),
        ];
    }
}
```
:::


## 测试是否将正确的数据传递给视图

需要测试是否将正确的数据传递给视图？可以在响应中使用 `viewData` 方法。

```php
/** @test */
public function it_has_the_correct_value()
{
    // ...
    $response = $this->get('/some-route');
    $this->assertEquals('John Doe', $response->viewData('name'));
}

/** @test */
public function it_contains_a_given_record()
{
    // ...
    $response = $this->get('/some-route');
    $this->assertTrue($response->viewData('users')->contains($userA));
}

/** @test */
public function it_returns_the_correct_amount_of_records()
{
    // ...
    $response = $this->get('/some-route');
    $this->assertCount(10, $response->viewData('users'));
}
```

## 测试命令定时执行

断言定时任务一定会按照指定的规则执行。

::: code-group
```php [App\Console\Kernel.php]
// App\Console\Kernel
<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Support\Str;

class Kernel extends ConsoleKernel
{
    use Illuminate\Console\Scheduling\Schedule;
    use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
    
    protected function schedule(Schedule $schedule)
    {
        $schedule->command('check:api-token')->dailyAt('10:00'); // 检查是否需要发送apiToken到期通知
    }
}
```

```php
// Tests\Integrations\Console\KernelTest.php
<?php
namespace Tests\Integrations\Console;

use Tests\TestCase;
use Illuminate\Support\Str;
use Illuminate\Console\Scheduling\Event;
use Illuminate\Console\Scheduling\Schedule;

class KernelTest extends TestCase
{
    /** @test */
    public function check_api_token_command_is_scheduled_at_10am(): void
    {
        $schedule = app(Schedule::class);

        /** @var Event $event */
        $event = collect($schedule->events())
            ->filter(
                fn (Event $event) =>  Str::containsAll($event->command, ['check:api_token']),
            )->first();

        $this->assertInstanceOf(Event::class, $event);
        $this->assertEquals('0 10 * * *', $event->expression);
    }
}
```
:::

其他的简单测试示例代码 [curder/laravel-console-command-test-demo](https://github.com/curder/laravel-console-command-test-demo) 。
