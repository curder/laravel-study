# prepend

将给定的值添加到集合的开头。

```php
$collection = collect([1, 2, 3, 4, 5]);

$collection->prepend(0)->dump();
$collection->all();

/**
array:6 [
  0 => 0
  1 => 1
  2 => 2
  3 => 3
  4 => 4
  5 => 5
]

=> [
     0,
     1,
     2,
     3,
     4,
     5,
   ]
 */
```

也可以传递第二个参数来设置前置项的键

```php
$collection = collect(['one' => 1, 'two' => 2]);

$collection->prepend(0, 'zero')->dump();
$collection->all(); // ['zero' => 0, 'one' => 1, 'two' => 2]

/**
array:3 [
  "zero" => 0
  "one" => 1
  "two" => 2
]

=> [
     "zero" => 0,
     "one" => 1,
     "two" => 2,
   ]
 */
```
