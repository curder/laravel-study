# where

通过给定的键值过滤集合。

```php
collect([
  ['product' => 'apples', 'price' => 50],
  ['product' => 'pears', 'price' => 50],
  ['product' => 'bananas', 'price' => 70],
  ['product' => 'coconuts', 'price' => 80],
])->where('price', '50');

/*
[
    ["product" => "apples", "price" => 50],
    ["product" => "pears", "price" => 50],
]
*/
```

还可以编写简单的表达式来过滤集合，比如：`=`，`!=`，`>`，`<`，`>=`，`<=` 等。

```php
collect([
  ['product' => 'apples', 'price' => 50],
  ['product' => 'pears', 'price' => 50],
  ['product' => 'bananas', 'price' => 70],
  ['product' => 'coconuts', 'price' => 80],
])->where('price', '>', '50');

/*
[
    ["product" => "bananas", "price" => 70],
    ["product" => "coconuts", "price" => 80],
]
*/
```

> 比较数值的时候，`where` 方法使用「宽松」比较，意味着具有整数值的字符串将被认为等于相同值的整数。
>
> 使用 [whereStrict](whereStrict.md) 方法来进行「严格」比较过滤。

## 相关方法

- [whereStrict](whereStrict.md)
- [filter](filter.md)
- [reject](reject.md)
