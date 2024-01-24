# sortBy

> 以给定的键对集合进行正序排序

`sortBy` 方法默认是正序排序，即数值越小排序越靠前。

```php
collect([
  ['product' => 'apples', 'price' => 9],
  ['product' => 'coconuts', 'price' => 3],
  ['product' => 'bananas', 'price' => 5],
])->sortBy('price');

// [
//    ["product" => "coconuts", "price" => 3],
//    ["product" => "bananas", "price" => 5],
//    ["product" => "apples", "price" => 9]
// ]
```

如果需要按照数值越大越靠前的倒序排序方式，可以再调用 [reverse](reverse.md) 方法，或者使用 [sortByDesc](sortByDesc.md) 方法。



## 使用回调

```php
collect([
  ['product' => 'apples', 'price' => 9, 'code' => 'A-30'],
  ['product' => 'coconuts', 'price' => 3, 'code' => 'A20'],
  ['product' => 'bananas', 'price' => 5, 'code' => 'A50'],
])->sortBy(fn ($item) => str_replace('-', '', $item['code']));

/*
[
    ["product" => "coconuts", "price" => 3, "code" => "A20"],
    ["product" => "apples", "price" => 9, "code" => "A-30"],
    ["product" => "bananas", "price" => 5, "code" => "A50"]
]
*/
```

### 通过数组进行排序
```php
use Illuminate\Support\Collection;

$fields = ['agent_number', 'sale_id', 'agent_extras->attachments', 'id', 'automatic_grouping'];

Collection::make([
  'agent_extras->IB_Campaign', 'id', 'sale_id', 'automatic_grouping', 'agent_extras->attachments', 'agent_number'
])->sortBy(
    fn ($item) => array_search($item, $fields)
);
```
## 相关方法

- [sort](sort.md)
- [sortDesc](sortDesc.md)
- [sortByDesc](sortByDesc.md)
