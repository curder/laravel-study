# Testing 测试

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

<CodeGroup>

  <CodeGroupItem title="App\Console\Kernel.php">

```php
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

  </CodeGroupItem>
  <CodeGroupItem title="Tests\Integrations\Console\KernelTest.php">

```php
// Test
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

  </CodeGroupItem>
</CodeGroup>

其他的简单测试示例代码 [curder/laravel-console-command-test-demo](https://github.com/curder/laravel-console-command-test-demo) 。
