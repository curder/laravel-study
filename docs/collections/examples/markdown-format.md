# 格式化 Markdown 数据列表

有如下数据：

```php
$messages = [
  'Should be working now for all Providers.',
  'If you see one where spaces are in the title let me know.',
  'But there should not have blank in the key of config or .env file.',
];
```

格式化成 `markdown` 的 `li` 格式数据，如下：

```markdown
- Should be working now for all Providers. \n
- If you see one where spaces are in the title let me know. \n
- But there should not have blank in the key of config or .env file.
```

## 使用 foreach 方法 {#use-foreach-method}

```php
$messages = [
  'Should be working now for all Providers.',
  'If you see one where spaces are in the title let me know.',
  'But there should not have blank in the key of config or .env file.',
];

$comment = ' - ' . array_shift($messages);
foreach ($messages as $message) {
  $comment .= "\n -  ${message}";
}

dd($comment);

/**
"""
 - Should be working now for all Providers.\n
 -  If you see one where spaces are in the title let me know.\n
 -  But there should not have blank in the key of config or .env file.
"""
 */
```

## 使用 [map](../map.md) 和 [implode](../implode.md) 方法 {#use-map-and-implode-method}

```php
$messages = [
  'Should be working now for all Providers.',
  'If you see one where spaces are in the title let me know.',
  'But there should not have blank in the key of config or .env file.',
];

$comment = collect($messages)
  ->map(fn ($message) => '- ' . $message)
  ->implode("\n");

dd($comment);

/**
"""
- Should be working now for all Providers.\n
- If you see one where spaces are in the title let me know.\n
- But there should not have blank in the key of config or .env file.
"""
 */
```
