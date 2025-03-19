# toJson

将集合转换成 JSON 字符串。

通过 `json_encode` 函数将数组转换成 JSON

```php
$data = collect(['product' => 'apples', 'price' => 45])->toArray();

json_encode($data); // {"product": "apples", "price": 45}
```

可以直接调用 `toJson` 方法将集合转换成 JSON。

```php
collect(['product' => 'apples', 'price' => 45])->toJson();
 
// {"product": "apples", "price": 45}
```

当然，也可以在调用 `toJson` 时，传递对应的参数，比如：`JSON_PRETTY_PRINT` 参数。

```php
collect(['product' => 'apples', 'price' => 45])
    ->toJson(JSON_PRETTY_PRINT);

// {"product": "apples", "price": 45}
```

更多参数[参考JSON 常量](https://www.php.net/manual/zh/json.constants.php)

## 相关方法

- [toArray](toArray.md)
