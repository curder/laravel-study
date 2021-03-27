# whereInstanceOf

该方法按给定的类类型过滤集合。

```php
class Article {}
class Post {}

collect([new Article(), new Article(), new Post()])
    ->whereInstanceOf(Post::class);

// output
/**
=> Illuminate\Support\Collection {#1214
     all: [
       2 => Post {#1217},
     ],
   }
 */
```
