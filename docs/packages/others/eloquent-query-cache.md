# Eloquent 查询缓存

使用 [renoki-co/laravel-eloquent-query-cache](https://github.com/renoki-co/laravel-eloquent-query-cache) 可以使得模型查询时添加缓存变得轻而易举。

## 安装

使用下面的命令将扩展包安装到项目中：

::: code-group
```bash [Laravel 11]
# using adapt laravel 11
composer config repositories.rennokki/laravel-eluquent-query-cache github https://github.com/curder/laravel-eloquent-query-cache.git

composer require rennokki/laravel-eloquent-query-cache:dev-adapt-laravel-11
```

```bash [Laravel 9 & 10]
composer require rennokki/laravel-eloquent-query-cache
```
:::

在模型文件中通过使用 `\Rennokki\QueryCache\Traits\QueryCacheable` trait 来应用它。

```php
use Rennokki\QueryCache\Traits\QueryCacheable;

class Post extends Model
{
    use QueryCacheable;
    
    public int|\DateTime $cacheFor = -1;
}
```


## 自定义配置


### 缓存时间 `$cacheFor`

指定查询缓存的有效时间，单位秒。**不要指定值或将其设置为 `null` 会禁用缓存。**

```php
public int|\DateTime $cacheFor = -1; // -1 为永久有效
```

也可以通过编写 `valueForValue()` 方法来自定义缓存有效时间的返回值。

```php
public function cacheForValue(): int|DateTime
{
    return -1;
}
```


### 缓存标签 `$cacheTags`

查询缓存的标签。当需要仅刷新特定标签的缓存可以对其设置对应标签。

```php
public ?array $cacheTags = ['posts'];
```

也可以通过 `cacheTagsValue()` 方法来自定义缓存标签。

```php
public function cacheTagsValue(): array
{
    return [];
}
```

### 缓存前缀 `$cachePrefix`

设置定义的缓存前缀。

```php
public string $cachePrefix = 'posts_';
```

也可以通过 `cachePrefixValue()` 方法来自定义缓存前缀。

```php
public function cachePrefixValue(): string
{
    return class_basename(static::class);
}
```

### 缓存驱动 `$cacheDriver`

指定缓存驱动，比如`redis`，具体可以[查看这里](https://laravel.com/docs/master/cache#driver-prerequisites)。

```php
public string $cacheDriver = 'redis';
```

也可以通过 `cacheDriverValue()` 方法来自定义缓存驱动。

```php
public function cacheDriverValue(): string
{
    return 'redis';
}
```

### 缓存键规则 `$cacheUsePlainKey`

自定义明文的缓存键，而不是使用使用 sha256 函数生成。

```php
public bool $cacheUsePlainKey = false;
```

也可以通过 `cacheUsePlainKeyValue()` 方法来自定义明文的缓存键。

```php
public function cacheUsePlainKeyValue(): bool
{
    return false;
}
```


### 自动更新缓存

```php
protected static bool $flushCacheOnUpdate = true;
```