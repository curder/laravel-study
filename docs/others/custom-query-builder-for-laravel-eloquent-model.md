# 自定义模型查询构建器

在 Laravel 中，经常会遇到包含太多业务逻辑的模型。此时可以构建自己的查询生成器类，以使模型更加精简。

比如下面的模型逻辑：

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    // ...
    public function scopePublished(Builder $query): Builder
    {
        return $query->whereNotNull('published_at')
            ->where('published_at', '<=', now()->toDateTimeString());
    }

    public function scopeOrderByMostRecent(Builder $query, string $column = 'published_at'): Builder
    {
        return $query->orderByDesc($column);
    }
}
```

使用模型对数据进行查询比如：

```php
\App\Models\Post::published()->orderByMostRecent()->get();
```

当模型的查询越来越多的时候，可以通过自定义查询构建器类来重构它，使模型变得简洁。

## 自定义模型构建器类

模型构建器类需要继承自 `\Illuminate\Database\Eloquent\Builder` 类。

```php
<?php

namespace App\Models\Builders;

use Illuminate\Database\Eloquent\Builder;

class PostBuilder extends Builder
{
    //
}
```

然后将模型中的 `scope` 查询语法糖方法迁移到自定义构建器中：

```php
<?php

namespace App\Models\Builders;

use Illuminate\Database\Eloquent\Builder;

class PostBuilder extends Builder
{
    public function published(): Builder
    {
        return $this->whereNotNull('published_at')
            ->where('published_at', '<=', now()->toDateTimeString());
    }

    public function orderByMostRecent(string $column = 'published_at'): Builder
    {
        return $this->orderByDesc($column);
    }
}
```

并在模型中使用自定义的构建器类：

```php
<?php

namespace App\Models;

use App\Models\Builders\PostBuilder;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    // ...
    public function newEloquentBuilder($query): PostBuilder
    {
        return new PostBuilder($query);
    }
}
```


## 相关链接

- [GitHub - Custom query builderfor laravel eloquent model](https://github.com/curder/custom-query-builder-for-laravel-eloquent-model)