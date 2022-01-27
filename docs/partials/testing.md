# Testing 测试

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
