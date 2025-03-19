# except

> 返回集合中除了指定键之外的所有项目

```php
collect(['product_id' => 1, 'price' => 100, 'discount' => false])
    ->except([
        'price',
        'discount',
        'name'
    ]); // ["product_id" => 1]
```

与之相反操作是 [only](only.md) 方法。

## 相关方法

- [only](only.md)
