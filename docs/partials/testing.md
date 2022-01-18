# Testing 测试

## 测试命令定时执行

```php
// App\Console\Kernel
class Kernel extends ConsoleKernel
{
    use Illuminate\Console\Scheduling\Schedule;
    use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
    
    protected function schedule(Schedule $schedule)
    {
        $schedule->command('check:api-token')->dailyAt('10:00'); // 检查是否需要发送apiToken到期通知
    }
}

// Test
/** @test */
public function check_api_token_command_is_scheduled_at_10am(): void
{
    $schedule = app(Schedule::class);

    /** @var Event $event */
    $event = collect($schedule->events())
        ->filter(
            fn (Event $event) => Str::of($event->command)->containsAll(['check:api_token'])
        )->first();

    $this->assertInstanceOf(Event::class, $event);
    $this->assertEquals('0 10 * * *', $event->expression);
}
```


