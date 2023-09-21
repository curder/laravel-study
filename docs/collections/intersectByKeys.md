# intersectByKeys

删除原集合中不存在于给定数组或集合中的任何键。

::: code-group
```php [PHP]
collect([
  'serial' => 'UX301',
  'type' => 'screen',
  'year' => 2009,
])->intersectByKeys([
  'reference' => 'UX404',
  'type' => 'tab',
  'year' => 2011,
]);
```

```php [Result]
/**
=> Illuminate\Support\Collection {#1089
     all: [
       "type" => "screen",
       "year" => 2009,
     ],
   }
 */
```
:::
