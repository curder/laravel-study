# pop 方法

移除并返回集合中的最后一个项目。

```php
$collection = collect([1, 2, 3, 4, 5]);

dump($collection->pop());
$collection->all();

/**
5

=> [
     1,
     2,
     3,
     4,
   ]
 */
```
