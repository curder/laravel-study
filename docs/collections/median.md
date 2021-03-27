# median 方法

方法返回给定**键**的中间值。

```php
collect([10000, 20000, 30000])->median();

// output
/**
=> 20000
 */
```

```php
collect([['price' => 10000], ['price' => 20000], ['price' => 30000]])->median(
  'price'
);

// output 
/**
=> 20000
 */
```
