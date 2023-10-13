# values

> 返回键被重置的新集合

```php
collect([
  10 => ['product' => 'Desk', 'price' => 200],
  11 => ['product' => 'Desk', 'price' => 200],
])->values();

/**
[
    ["product" => "Desk", "price" => 200],
    ["product" => "Desk", "price" => 200]
]
*/
```

## 相关方法

- [value](value.md)
- [all](all.md)