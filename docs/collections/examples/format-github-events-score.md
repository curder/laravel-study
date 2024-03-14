# 计算 GitHub 事件得分总和

首先，通过 API 接口地址 `https://api.github.com/users/GITHUB_USRE_NAME/events` 获取到个人事件数据，其中 `GITHUB_USRE_NAME` 为 GitHub 个人账号。

**计分规则如下：**

- 每个 `PushEvent` 计 **5** 分
- 每个 `CreateEvent` 计 **4** 分
- 每个 `IssueCommentEvent` 计 **3** 分
- 每个 `IssueCommentEvent` 计 **2** 分
- 除此之外的其它类型的事件计 **1** 分

计算当前用户的得分总和？

> GitHub 用户名以 `Curder` 为例。

## 使用 `foreach`

```php
$events = Http::get('https://api.github.com/users/curder/events')->json();
$eventTypes = []; // 事件类型
$score = 0; // 总得分
foreach ($events as $event) {
  $eventTypes[] = $event['type'];
}
foreach ($eventTypes as $eventType) {
  switch ($eventType) {
    case 'PushEvent':
      $score += 5;
      break;
    case 'CreateEvent':
      $score += 4;
      break;
    case 'IssueEvent':
      $score += 3;
      break;
    case 'IssueCommentEvent':
      $score += 2;
      break;
    default:
      $score += 1;
      break;
  }
}

dd($score); // 输出 132
```

## 使用 [pluck](../pluck.md)、[map](../map.md) 和 [sum](../sum.md) 方法

::: code-group
```php [PHP switch]
$score = Http::get('https://api.github.com/users/curder/events')
  ->collect()
  ->pluck('type')
  ->map(function (string $eventType) {
    switch ($eventType) {
      case 'PushEvent':
        return 5;
        break;
      case 'CreateEvent':
        return 4;
        break;
      case 'IssueEvent':
        return 3;
        break;
      case 'IssueCommentEvent':
        return 2;
        break;
      default:
        return 1;
        break;
    }
  })
  ->sum();
```

```php [PHP great than 8.0 match]
$score = Http::get('https://api.github.com/users/curder/events')
  ->collect()
  ->pluck('type')
  ->map(fn (string $eventType) => match ($eventType) { 
    'PushEvent' => 5,
    'CreateEvent' => 4,
    'IssueEvent' => 3,
    'IssueCommentEvent' => 2,
    default => 1,
  })
  ->sum();
```
:::

## 使用 [pluck](../pluck.md)、[map](../map.md)、[get](../get.md) 和 [sum](../sum.md) 方法

```php
$score = Http::get('https://api.github.com/users/curder/events')
        ->collect()
        ->pluck('type')
        ->map(fn (string $eventType) => collect([
            'PushEvent' => 5,
            'CreateEvent' => 4,
            'IssueEvent' => 3,
            'IssueCommentEvent' => 2,
        ])->get($eventType, 1))
        ->sum();
```

## 封装 GitHubScore 类

::: code-group
```php [获取总分]
$events = Http::get('https://api.github.com/users/curder/events')->collect();

echo GithubScore::make($events)->score(); // 输出 132
```

```php [封装 GithubScore 类]
use Illuminate\Support\Collection;

readonly class GithubScore
{
    private function __construct(private Collection $events) { }

    public static function make($events): self
    {
        return new self($events);
    }

    public function score(): int
    {
        return $this->events
            ->pluck('type')
            ->map($this->lookupEventScore(...))
            ->sum();
    }

    protected function lookupEventScore(string $eventType): int
    {
        return collect([
            'PushEvent' => 5,
            'CreateEvent' => 4,
            'IssueEvent' => 3,
            'IssueCommentEvent' => 2,
        ])->get($eventType, 1); // 如果类型不存在则默认等于1
    }
}
```
:::
