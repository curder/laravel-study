# 如何在 Laravel 中获取下一条和上一条记录

Laravel 没有内置支持来获取下一条和上一条记录，但在模型中添加几个辅助方法可以解决这个问题。

```php
$post = App\Models\Post::find(1);

$post->prev(); // 上一条
$post->next(); // 下一条
```

一旦实现了获取下一条和上一条记录的功能，可以直接在视图中访问它，或者从控制器传递下来。

接下来在模型中，通过创建两个辅助方法来添加下一条/上一条功能，如下所示：

```php
class Post extends Model
{
    /**
     * 获取当前记录之后的记录。
     *
     * 1. 使用 `id` 作为顺序（通常递增），使用 `orderBy` 获取 `asc` 顺序中的文章列表。
     * 2. `where()` 子句获取所有正在处理的记录之后的记录。
     * 3. first() 获取记录列表中下一个记录。
     */ 
    public function next()
    {
        return $this->orderBy('id')
            ->where('id', '>', $this->id)
            ->first();
    }

    public function prev()
    {
        return $this->orderByDesc('id')
            ->where('id', '<', $this->id)
            ->first();
    }
}
```

::: tip 温馨提示

- 如果在模型上存储了特定的顺序列，请使用该列而不是 `id` 。
- 如果没有下一个/上一个记录，`next()` 或 `prev()` 方法将返回 `null`，因此可以轻松检查是否存在下一个/上一个记录。
- 如果在遍历记录并使用 `next()` 或 `prev()` 方法时，将为每条记录触发一个额外的查询，导致查询 `n+1` 问题。
   :::
