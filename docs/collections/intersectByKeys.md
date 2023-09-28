# intersectByKeys

> 删除原集合中不存在于给定集合中的任何键。

```php [PHP]
collect([
  'serial' => 'UX301',
  'type' => 'screen',
  'year' => 2009,
])->intersectByKeys([
  'reference' => 'UX404',
  'type' => 'tab',
  'year' => 2011,
]); // ["type" => "screen", "year" => 2009]
```

## 相关方法

- [intersect](intersect.md)
- [union](union.md)
- [diff](diff.md)