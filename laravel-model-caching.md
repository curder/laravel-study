# Laravel 模型缓存

本文原文来自[laravel-news](https://laravel-news.com/laravel-model-caching)，代码在[github](https://github.com/curder/laravel-model-caching)。

之前可能已经在控制器中缓存了一些模型数据，但是我会告诉你一个laravel模型缓存技术，它使用活动记录模型更精细一些。

使用模型上的唯一缓存键，可以缓存模型（或相关模型）更新时自动更新（以及缓存失效）的模型上的属性和关联。

一个好处是访问缓存的数据比在控制器中缓存数据更具可移植性，因为它在模型上而不是在单个控制器方法中。

假设现在有一个有许多评论模型的文章模型。

给出以下的**laravel blade**模板，你可以像在你的`/articles`路径上那样检索评论计数：

```
<h3>$article->comments->count() {{ str_plural('Comment', $article->comments->count())</h3>
```

可以在控制器中缓存评论计数，但是当有多个需要缓存的一次性查询和数据时，控制器会变得非常难看。

使用控制器，访问缓存的数据也不是很方便。

我们可以构建一个模板，只有在文章更新时才能访问数据库，任何有权访问模型的代码都可以获取缓存的值：

```
<h3>$article->cached_comments_count {{ str_plural('Comment', $article->cached_comments_count)</h3>
```

使用模型访问器，我们将根据文章上次更新的时间缓存评论计数。

那么当新评论被添加或删除时，我们如何更新文章的`updated_at`列呢？

答案是配置`touch`方式。

## Touching 模型

使用模型的`touch()`方法，我们可以更新文章的`updated_at`列：

```
$ php artisan tinker

>>> $article = \App\Article::first();
=> App\Article {#746
     id: 1,
     title: "Hello World",
     body: "The Body",
     created_at: "2018-01-11 05:16:51",
     updated_at: "2018-01-11 05:51:07",
   }
>>> $article->updated_at->timestamp
=> 1515649867
>>> $article->touch();
=> true
>>> $article->updated_at->timestamp
=> 1515650910
```

我们可以使用更新后的时间戳来使缓存无效，但是当我们添加或删除评论时，我们如何触摸文章的`updated_at`字段？

恰恰恰巧，Eloquent模型有一个名为`$touches`的属性。以下是我们的评论模型可能的样子：

```
<?php

namespace App;

use App\Article;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $guarded = [];

    protected $touches = ['article'];

    public function article()
    {
        return $this->belongsTo(Article::class);
    }
}
```

`$touches`属性是一个包含关联的数组，当评论被创建，保存或删除时，该关联将会被“触及”。

## 缓存属性

让我们回到`$article->cached_comments_count`访问器。在`app\article`模型中实现可能如下所示：

```
public function getCachedCommentsCountAttribute()
{
    return \Cache::remember($this->cacheKey() . ':comments_count', 15, function () {
        return $this->comments->count();
    });
}
```

我们使用唯一的`cachekey()`方法将模型缓存15分钟，并简单地返回闭包内的注释计数。

> 请注意，我们也可以使用`\Cache::rememberforever()`方法，并依靠我们的缓存机制的垃圾收集来删除旧key。我已经设置了一个计时器，以便缓存将在大部分时间点击，每十五分钟一次新的缓存。

`cachekey()`方法需要使模型唯一，并在模型更新时使缓存失效。这是我的快捷键实现：

```
public function cacheKey()
{
    return sprintf(
        "%s/%s-%s",
        $this->getTable(),
        $this->getKey(),
        $this->updated_at->timestamp
    );
}
```

模型的`cachekey()`方法的示例输出可能会返回以下字符串表示形式：

```
articles/1-1515650910
```

关键是表的名称，模型ID和当前`updated_at`时间戳。一旦我们触摸模型，时间戳将被更新，我们的模型缓存将被适当地失效。

完整的`Article`模型内容如下：

```
<?php

namespace App;

use App\Comment;
use Illuminate\Support\Facades\Cache;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    public function cacheKey()
    {
        return sprintf(
            "%s/%s-%s",
            $this->getTable(),
            $this->getKey(),
            $this->updated_at->timestamp
        );
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function getCachedCommentsCountAttribute()
    {
        return Cache::remember($this->cacheKey() . ':comments_count', 15, function () {
            return $this->comments->count();
        });
    }
}
```

和相关的评论模型：

```
<?php

namespace App;

use App\Article;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $guarded = [];

    protected $touches = ['article'];

    public function article()
    {
        return $this->belongsTo(Article::class);
    }
}
```

## 下一步是什么？

我已经告诉你如何缓存一个简单的评论计数，但是如何缓存所有的评论？

```
public function getCachedCommentsAttribute()
{
    return Cache::remember($this->cacheKey() . ':comments', 15, function () {
        return $this->comments;
    });
}
```
您也可以选择将注释转换为数组，而不是序列化模型，只允许简单的数组访问前端数据：

```
public function getCachedCommentsAttribute()
{
    return Cache::remember($this->cacheKey() . ':comments', 15, function () {
        return $this->comments->toArray();
    });
}
```

最后，我在文章模型中定义了`cachekey()`方法，但是您希望通过一个叫做 ProvidesModelCachekey 的 trait 来定义这个方法，您可以在多个模型上使用这个方法，或者在我们所有模型扩展的基本模型上定义方法。

您甚至可能希望为实现`cachekey()`方法的模型使用合同（接口）。