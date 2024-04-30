# 自定义 Eloquent 模型集合

在 Laravel 查询数据的过程中，需要将查询后的数据进行一些处理，可以通过自定义模型集合的方式重构。

比如下面的代码逻辑：

```php
use App\Models\Posts;

Post::query()
    ->where('published_at', '<=', now()->toDateTimeString())
    ->orderBy('published_at', 'desc')
    ->get()
    ->keyBy('id')
    ->map(function ($post) {
        return $post->title;
    });
```

建议将 `where` 查询和 `orderBy` 排序重构到 Eloquent 模型中，使代码更加清晰。

```php
// 重构之前
Post::query()
    ->where('published_at', '<=', now()->toDateTimeString())
    ->orderBy('published_at', 'desc')
    ->get()

// 重构后
Post::query()->published()->orderByMostRecent()->get();
```

然后需要在模型中定义一些方法，方便在其他查询中公用它们：

```php
class Post extends Model
{
    // ...
    public function scopePublished(Builder $query): Builder
    {
        return $query->whereNotNull('published_at')
            ->where('published_at', '<=', now()->toDateTimeString());
    }

    public function scopeOrderByMostRecent(Builder $query): Builder
    {
        return $query->orderByDesc('published_at');
    }
}
```

经过上面的重构，我们的查询语句变得更加清晰，但是发现在进行查询数据后，还使用了 `keyBy()` 和 `map()` 的集合方法。

```php
use App\Models\Posts;

Post::query()
    ->published()
    ->orderByMostRecent()
    ->get()
    ->keyBy('id')
    ->map(function ($post) {
        return $post->title;
    });
```

可以通过新建一个自定义的模型集合类来完成。

```php
<?php

namespace App\Models\Collections;

use App\Models\Post;
use Carbon\Carbon;
use Illuminate\Support\Collection;

class PostCollection extends Collection
{
    public function toDropdown(string $key = 'id', string $value = 'name'): static
    {
        return $this->keyBy($key)
            ->map(
                fn(Post $post) => $post->getAttribute($value)
            );
    }
}
```

然后在模型中指定这个自定义的集合，而不是使用默认的。

```php
use App\Models\Collections\PostCollection;

class Post extends Model
{
    // ...
    public function newCollection(array $models = [])
    {
        return PostCollection::make($models);
    }
}
```

此时，查询语句可以重构成这样：

```php
Post::query()->published()->orderByMostRecent()->get()->toDropdown();
```


## 相关链接

- [GitHub - Custom collection for laravel eloquent model](https://github.com/curder/custom-collection-for-laravel-eloquent-model)