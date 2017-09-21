# except方法

返回集合中除了指定键以外的所有项目。

```
$collection = collect(['product_id' => 1, 'price' => 100, 'discount' => false]);

$filtered = $collection->except(['price', 'discount']);

$filtered->all(); // ['product_id' => 1]
```





