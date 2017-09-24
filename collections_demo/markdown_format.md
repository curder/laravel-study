# collection格式化markdown数据列表

有如下数据：
```
$messages = [
    'Should be working now for all Providers.',
    'If you see one where spaces are in the title let me know.',
    'But there should not have blank in the key of config or .env file.'
];
```
格式化成Markdown的li格式数据，如下：

```
- Should be working now for all Providers. \n
- If you see one where spaces are in the title let me know. \n
- But there should not have blank in the key of config or .env file.
```


## 使用foreach循环解决

```
$messages = [
    'Should be working now for all Providers.',
    'If you see one where spaces are in the title let me know.',
    'But there should not have blank in the key of config or .env file.'
];

$comment = '- ' . array_shift($messages);
foreach ($messages as $message) {
    $comment .= "\n -  ${message}";
}
```

## 使用collection的[map](/collections/map.md)和[implode](/collections/implode.md)方法

```
$messages = [
    'Should be working now for all Providers.',
    'If you see one where spaces are in the title let me know.',
    'But there should not have blank in the key of config or .env file.'
];

$comment = collect($messages)->map(function($message){
    return '- ' . $message;
})->implode("\n");

dd($comment);
```
