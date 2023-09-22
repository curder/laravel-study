# flatMap

遍历集合并将其中的每个值传递到给定的回调，可以通过回调修改每个值的内容再返回出来，从而形成一个新的被修改过内容的集合。


```php
collect([
  ['name' => 'Sally'],
  ['school' => 'Arkansas'],
  ['age' => 28],
])->flatMap(
    fn ($values) => array_map('strtoupper', $values)
); // ["name" => "SALLY", "school" => "ARKANSAS", "age" => "28"]
```

## 相关方法

- [map](map.md)