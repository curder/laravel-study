# collection格式化计算数据计算github事件得分总和

首先，通过 https://api.github.com/users/YOUR_USRE_NAME/events 获取到个人事件json。

假如：一个 `PushEvent`计 5 分，一个 `CreateEvent` 计 4 分，一个`IssueCommentEvent`计 3 分，一个 `IssueCommentEvent`计 2 分，除此之外的其它类型的事件计 1 分，计算当前用户的时间得分总和。



## 声明两个变量，并使用foreach解决问题

```
$events = json_decode(file_get_contents('https://api.github.com/users/YOUR_USRE_NAME/events'), true);
$eventTypes = []; // 事件类型
$score = 0; // 总得分
foreach ($events as $event) {
    $eventTypes[] = $event['type'];
}
foreach($eventTypes as $eventType) {
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
```

## 使用collection中的[pluck](/collections/pluck.md)、[map](/collections/map.md)和[sum](/collections/sum.md)方法

```
$events = collect(json_decode(file_get_contents('https://api.github.com/users/YOUR_USRE_NAME/events'), true));
$score = $events->pluck('type')->map(function($eventType) {
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
})->sum();
```

## 使用collection中的pluck、map和get方法

```
$events = collect(json_decode(file_get_contents('https://api.github.com/users/YOUR_USRE_NAME/events'), true));
$score = $events->pluck('type')->map(function($eventType) {
   return collect([
       'PushEvent'=> 5,
       'CreateEvent'=> 4,
       'IssueEvent'=> 3,
       'IssueCommentEvent'=> 2
   ])->get($eventType, 1); // 如果不存在则默认等于1
})->sum();
```

## 封装githubScore类

```
$events = collect(json_decode(file_get_contents('https://api.github.com/users/YOUR_USRE_NAME/events'), true));

class GithubScore {
    private $events;

    private function __construct($events){
        $this->events = $events;
    }

    public static function score($events) {
        return (new static($events))->scoreEvents();
    }

    private function scoreEvents() {
        return $this->events->pluck('type')->map(function($eventType){
            return $this->lookupEventScore($eventType, 1);
        })->sum();
    }

    public function lookupEventScore($eventType, $default_value) {
       return collect([
           'PushEvent'=> 5,
           'CreateEvent'=> 4,
           'IssueEvent'=> 3,
           'IssueCommentEvent'=> 2
       ])->get($eventType, $default_value); // 如果不存在则默认等于1
    }
}

dd(GithubScore::score($events));
```
