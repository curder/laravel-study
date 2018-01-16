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

