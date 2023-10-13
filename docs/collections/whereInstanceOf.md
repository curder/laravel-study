# whereInstanceOf

该方法按给定的类类型过滤集合。

```php
class Article {}
class Post {}

collect([new Article(), new Article(), new Post()])
    ->whereInstanceOf(Post::class);

// [2 => Post]
```

## 相关方法

- [whereIn](whereIn.md)
- [whereNotIn](whereNotIn.md)