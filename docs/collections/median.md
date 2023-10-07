# median

> 返回给定**键**的中间值。

```php
collect([10000, 20000, 30000])->median(); // 20000

collect([
    ['price' => 10000],
    ['price' => 20000],
    ['price' => 30000]
])->median('price'); // 20000
```