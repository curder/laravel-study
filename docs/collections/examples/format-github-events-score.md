# 计算 GitHub 事件得分总和

首先，通过 API 接口地址 https://api.github.com/users/YOUR_USRE_NAME/events 获取到个人事件数据，其中 `YOUR_USER_NAME` 为 GitHub 个人账号。

假如：一个 `PushEvent` 计 5 分，一个 `CreateEvent` 计 4 分，一个`IssueCommentEvent`计 3 分，一个 `IssueCommentEvent` 计 2 分，除此之外的其它类型的事件计 1 分，计算当前用户的得分总和。

> GitHub 用户名以 `Curder` 为例。

## 用 foreach 方法

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

dd($score);

/**
134
 */
```

## 使用 [pluck](../pluck.md)、[map](../map.md) 和 [sum](../sum.md) 方法

<CodeGroup>
  <CodeGroupItem title="PHP < 8.0  switch" active>

```php
$events = collect(
  Http::get('https://api.github.com/users/curder/events')->json()
);

$score = $events
  ->pluck('type')
  ->map(function ($eventType) {
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

/**
=> 134
 */
```
  </CodeGroupItem>

  <CodeGroupItem title="PHP > 8.0  match">

```php
$events = collect(
  Http::get('https://api.github.com/users/curder/events')->json()
);

$score = $events
  ->pluck('type')
  ->map(fn ($eventType) => match ($eventType) { 
    'PushEvent' => 5,
    'CreateEvent' => 4,
    'IssueEvent' => 3,
    'IssueCommentEvent' => 2,
    default => 1,
  })
  ->sum();
```

  </CodeGroupItem>

</CodeGroup>

## 使用 [pluck](../pluck.md)、[map](../map.md)、[get](../get.md) 和 [sum](../sum.md) 方法

```php
$events = collect(
  Http::get('https://api.github.com/users/curder/events')->json()
);

$score = $events
  ->pluck('type')
  ->map(function ($eventType) {
    return collect([
      'PushEvent' => 5,
      'CreateEvent' => 4,
      'IssueEvent' => 3,
      'IssueCommentEvent' => 2,
    ])->get($eventType, 1); // 如果不存在则默认等于1
  })
  ->sum();

/**
=> 134
 */
```

## 封装 GitHubScore 类

```php
$events = collect(
  Http::get('https://api.github.com/users/curder/events')->json()
);

class GithubScore
{
  private $events;

  private function __construct($events)
  {
    $this->events = $events;
  }

  public static function score($events)
  {
    return (new static($events))->scoreEvents();
  }

  private function scoreEvents()
  {
    return $this->events
      ->pluck('type')
      ->map(function ($eventType) {
        return $this->lookupEventScore($eventType, 1);
      })
      ->sum();
  }

  public function lookupEventScore($eventType, $default_value)
  {
    return collect([
      'PushEvent' => 5,
      'CreateEvent' => 4,
      'IssueEvent' => 3,
      'IssueCommentEvent' => 2,
    ])->get($eventType, $default_value); // 如果不存在则默认等于1
  }
}

GithubScore::score($events);

/**
=> 134
 */
```
