# lazy

> `lazy` 方法返回一个新的 LazyCollection 实例。

```php
$lazyCollection = collect([1, 2, 3, 4])->lazy();
 
get_class($lazyCollection); // Illuminate\Support\LazyCollection
 
$lazyCollection->all(); // [1, 2, 3, 4]
```

当需要对包含许多项目的巨大集合执行转换时使用 `lzay` 会有帮助。

```php
$count = $hugeCollection
    ->lazy()
    ->where('country', 'zh_CN')
    ->where('balance', '>', '100')
    ->count();
```
