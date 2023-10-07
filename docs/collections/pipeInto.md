# pipeInto

创建给定类的新实例，并将集合传递给构造函数。

```php
use Illuminate\Support\Collection;

class ResourceCollection
{
  /**
   * Create a new ResourceCollection instance.
   *
   * @return void
   */
  public function __construct(public Collection $items)
  {}
}

$collection = collect([1, 2, 3]);

$collection->pipeInto(ResourceCollection::class);

// [1, 2, 3]
```

## 相关方法

- [pipe](pipe.md)
- [pipeThrough](pipeThrough.md)