# forPage方法

返回给定页码上显示的项目的新集合。这个方法接受页码作为其第一个参数和每页显示的项目数作为其第二个参数。

```
$collection = collect([1, 2, 3, 4, 5, 6, 7, 8, 9]);

$chunk = $collection->forPage(2, 3);

$chunk->all(); // [4, 5, 6]
```