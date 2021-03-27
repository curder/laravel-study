# get

返回给定键的项目。如果该键不存在，则返回 `null`。

```php
collect(['name' => 'taylor', 'framework' => 'laravel'])->get('name');

// output
/**
=> "taylor"
 */
```

可以选择性地传递默认值作为第二个参数

```php
collect(['name' => 'taylor', 'framework' => 'laravel'])->get('foo', 'bar');

// output
/**
=> "bar"
 */
```

甚至可以将回调函数当作默认值。如果指定的键不存在，就会返回回调的结果

```php
collect(['name' => 'taylor', 'framework' => 'laravel'])->get(
  'foo',
  function () {
    // some logic
    return 'bar';
  }
);

// output
/**
=> "bar"
 */
```
