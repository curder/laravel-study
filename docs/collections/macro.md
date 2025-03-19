# macro

> 静态 `macro` 方法允许在运行时向 Collection 类添加自定义方法。

```php
use Illuminate\Support\Collection;

Collection::macro('toUpper', fn () => 
    $this->map(fn (string $value) => Str::upper($value))
);

collect(['first', 'second'])->toUpper(); // ['FIRST', 'SECOND']
```

## 添加自定义参数

如果需要，也可以给自定义方法添加参数。

```php
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Lang;
 
Collection::macro('toLocale', function (string $locale) {
    return $this->map(function (string $value) use ($locale) {
        return Lang::get($value, [], $locale);
    });
});
 
collect(['first', 'second'])->toLocale('es');
```

## 相关方法

- [make](make.md)
