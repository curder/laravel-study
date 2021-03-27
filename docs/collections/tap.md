# tap方法

将集合传递给回调，在特定点「tap」集合。此举能对集合中的项目执行某些操作，而不影响集合本身。

```php
collect([1, 2, 3])
  ->reverse()
  ->tap(function ($collection) { // 这里的 collection 是拷贝而来，不是引用
    $collection->each(function($item) {
    	dump('In Tap: ' . $item);
    });
  })->dd();

/**
"In Tap: 3"
"In Tap: 2"
"In Tap: 1"
 
array:3 [
  2 => 3
  1 => 2
  0 => 1
] 
 */
```
