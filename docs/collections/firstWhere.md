# firstWhere

> 返回给定键值对的第一个元素

::: code-group
```php [常规操作]
collect([
  ['product' => 'apples', 'price' => 50],
  ['product' => 'pears', 'price' => 50],
  ['product' => 'banners', 'price' => 50],
  ['product' => 'coconuts', 'price' => 80],
])->firstWhere('price', 50); // ["product" => "apples", "price" => 50]

collect([
  ['product' => 'apples', 'price' => null],
  ['product' => 'pears', 'price' => null],
  ['product' => 'banners', 'price' => 50],
  ['product' => 'coconuts', 'price' => 80],
])->firstWhere('price'); // ["product" => "banners", "price" => 50]
```

```php [使用运算符]
collect([
  ['product' => 'apples', 'price' => 50],
  ['product' => 'pears', 'price' => 50],
  ['product' => 'banners', 'price' => 50],
  ['product' => 'coconuts', 'price' => 80],
])->firstWhere('price', '>=', 70); // ["product" => "coconuts", "price" => 80]
```
:::

## 相关方法

- [filter](filter.md)
- [first](first.md)