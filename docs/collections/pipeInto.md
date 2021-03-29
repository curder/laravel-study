# pipeInto

创建给定类的新实例，并将集合传递给构造函数。

```php
use Illuminate\Support\Collection;

class ResourceCollection
{
  /**
   * The Collection instance.
   */
  public $collection;

  /**
   * Create a new ResourceCollection instance.
   *
   * @param  Collection  $collection
   * @return void
   */
  public function __construct(Collection $collection)
  {
    $this->collection = $collection;
  }
}

$collection = collect([1, 2, 3]);

$collection->pipeInto(ResourceCollection::class);

/**
=> ResourceCollection {#1098
     +collection: Illuminate\Support\Collection {#1099
       all: [
         1,
         2,
         3,
       ],
     },
   }
 */
```
