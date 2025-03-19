# flip

> 将集合中的键和对应的数值进行互换

```php
collect(['name' => 'taylor', 'framework' => 'laravel'])->flip();

// ["taylor" => "name", "laravel" => "framework"]
```

值得注意的是集合的值必须是字符串或者整型，否则会抛出警告。
