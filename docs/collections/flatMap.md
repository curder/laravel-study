# flatMap 方法

遍历集合并将其中的每个值传递到给定的回调，可以通过回调修改每个值的内容再返回出来，从而形成一个新的被修改过内容的集合。


```php
collect([
  ['name' => 'Sally'],
  ['school' => 'Arkansas'],
  ['age' => 28],
])->flatMap(function ($values) {
  return array_map('strtoupper', $values);
});

// output
/**
=> Illuminate\Support\Collection {#1093
     all: [
       "name" => "SALLY",
       "school" => "ARKANSAS",
       "age" => "28",
     ],
   }
 */
```
