# Collection 集合

`Illuminate\Support\Collection` 类提供了一个更具可读性的、更便于处理数组数据的封装，具体例子看下面的代码。

我们使用了 `collect` 函数从数组中创建新的集合实例，对其中的每个元素运行 `strtoupper` 函数之后再移除所有的空元素：

```php
collect(['taylor', 'abigail', null])
  ->map(fn ($name) => strtoupper($name))
  ->reject(fn ($name) => empty($name));
```

正如你看到的，`Collection` 类允许你链式调用其方法，以达到在底层数组上优雅地执行 `map` 和 `reject` 操作。一般来说，集合是不可改变的，这意味着每个 `Collection` 方法都会返回一个全新的 `Collection` 实例。

## 创建集合

如上所述，辅助函数 `collect` 会为给定的数组返回一个新的 `Illuminate\Support\Collection` 实例。也就是说，创建一个集合就这么简单：

```php
collect([1, 2, 3]);
```

> 默认情况下， [Eloquent](https://laravel.com/docs/master/eloquent) 查询的结果返回的内容都是 `Collection` 实例。

## 可用的方法

接下来的内容，我们会探讨 `Collection` 类每个可用的方法。**记住，所有方法都可以以方法链的形式优雅地操纵数组。**而且，几乎所有的方法都会返回新的 `Collection` 实例，允许在必要时保存集合的原始副本。

| 方法名                                     | 简单说明                                                                              |
|:----------------------------------------|:----------------------------------------------------------------------------------|
| [all](all.md)                           | 返回该集合表示的底层**数组**                                                                  |
| [average](avg.md)                       | 方法`avg()`的别名                                                                      |
| [avg](avg.md)                           | 返回给定键的**平均值**                                                                     |
| [chunk](chunk.md)                       | 将集合拆分为多个指定大小的集合组                                                                  |
| [chunkWhile](chunkWhile.md)             | 根据给定的回调将集合分成多个较小的集合                                                               | 
| [collapse](collapse.md)                 | 将数组集合折叠成单个集合                                                                      |
| [collect](collect.md)                   | `collect` 方法返回一个包含当前集合中的项目的**新的 `Collection` 实例**                                 |
| [combine](combine.md)                   | 将一个集合的值作为**键**，再将另一个数组或者集合的值作为**值**合并成一个集合                                        |
| [concat](concat.md)                     | 将给定数组或集合的值附加到另一个集合的末尾                                                             |
| [contains](contains.md)                 | 判断集合是否包含给定的项目                                                                     |
| [containsOneItem](containsOneItem.md)   | 判断集合是否包含单个项目                                                                      |
| [containsStrict](containsStrict.md)     | 使用「严格模式」来判断集合中是否包含给定的项目                                                           |
| [count](count.md)                       | 返回该集合内的项目总数                                                                       |
| [countBy](countBy.md)                   | 计算集合中值的出现次数                                                                       | 
| [crossJoin](crossJoin.md)               | 返回集合中所有可能排列的笛卡尔积                                                                  |
| [dd](dd.md)                             | 打印集合的元素并终止脚本的执行                                                                   |
| [diff](diff.md)                         | 基于值求差集                                                                            |
| [diffAssoc](diffAssoc.md)               | 基于键值对求差集                                                                          |
| [diffAssocUsing](diffAssocUsing.md)     | 使用回调获取集合中键和值不存在的项目                                                                |
| [diffKeys](diffKeys.md)                 | 基于键求差集                                                                            |
| [diffKeysUsing](diffKeysUsing.md)       | 使用回调获取集合中键不存在于给定项中的项                                                              |
| [diffUsing](diffUsing.md)               | 获取集合中不存在给定项目的项目                                                                   |
| [doesntContain](doesntContain.md)       | 判断集合是否不包含给定的项目                                                                    |
| [dump](dump.md)                         | 打印集合的元素                                                                           |
| [duplicates](duplicates.md)             | 从集合中检索并返回重复值                                                                      |
| [duplicatesStrict](duplicatesStrict.md) | 使用严格模式从集合中检索并返回重复值                                                                |
| [each](each.md)                         | 迭代集合中的内容，同时将其传递到回调函数中                                                             |
| [eachSpread](eachSpread.md)             | 迭代集合中的内容，同时将其传递到回调函数中                                                             |
| [every](every.md)                       | 可用于验证集合中每一个元素都通过回调测试                                                              |
| [except](except.md)                     | 返回集合中除了指定键以外的所有项目                                                                 |
| [filter](filter.md)                     | 使用给定的回调函数过滤集合的内容，只留下那些通过给定值为真的集合项                                                 |
| [first](first.md)                       | 返回集合中第一个元素                                                                        |
| [firstOrFail](firstOrFail.md)           | 返回集合中第一个元素，如果没有匹配到则回抛出 ItemNotFoundException 错误                                   |
| [firstWhere](firstWhere.md)             | 返回给定键值对的第一个元素                                                                     |
| [flatMap](flatMap.md)                   | 遍历集合并将其中的每个值传递到给定的回调                                                              |
| [flatten](flatten.md)                   | 将多维集合转为一维                                                                         |
| [flip](flip.md)                         | 将集合中的键和对应的数值进行互换                                                                  |
| [forget](forget.md)                     | **改变原集合**，通过给定的键来移除掉集合中对应的项                                                       |
| [forPage](forPage.md)                   | 返回给定页码上显示的项目的新集合                                                                  |
| [get](get.md)                           | 获取一维数组给定键的集合项                                                                     |
| [groupBy](groupBy.md)                   | 根据给定的键对集合内的项目进行分组                                                                 |
| [has](has.md)                           | 判断集合中是否存在给定的键                                                                     |
| [hasAny](hasAny.md)                     | 确定集合中是否存在任何指定的键                                                                   |
| [implode](implode.md)                   | 合并集合中的项目                                                                          |
| [intersect](intersect.md)               | 两个集合的交集                                                                           |
| [intersectByKeys](intersectByKeys.md)   | 删除原集合中不存在于给定数组或集合中的任何键                                                            |
| [isEmpty](isEmpty.md)                   | 判断集合是否为空                                                                          |
| [isNotEmpty](isNotEmpty.md)             | 判断集合是否不为空                                                                         |
| [join](join.md)                         | 将集合的值与字符串连接起来                                                                     |
| [keyBy](keyBy.md)                       | 以给定的键作为集合的键                                                                       |
| [keys](keys.md)                         | 返回集合的所有键                                                                          |
| [last](last.md)                         | 返回集合中通过给定真实测试的最后一个元素                                                              |
| [lazy](lazy.md)                         | TODO                                                                              |
| [macro](macro.md)                       | TODO                                                                              |
| [make](make.md)                         | TODO                                                                              |
| [map](map.md)                           | 遍历集合并将每一个值传入给定的回调                                                                 |
| [mapInto](mapInto.md)                   | 遍历集合，通过将值传递给构造函数来创建给定类的新实例                                                        |
| [mapSpread](mapSpread.md)               | **改变原集合**，迭代集合的项目，将每个嵌套的项目值传递到给定的闭包中。 闭包可以自由修改并返回它，从而形成一个新的修改后的集合。                |
| [mapToDirectory](mapToDictionary.md)    | 通过给定的闭包对集合的项目进行分组。该闭包应返回一个包含单个键/值对的关联数组，从而形成一个新的分组值数组                             |
| [mapToGroup](mapToGroup.md)             | 通过给定的闭包对集合的项目进行分组。 该闭包应返回一个包含单个键/值对的关联数组，从而形成一个新的分组值集合                            |
| [mapWithKeys](mapWithKeys.md)           | 遍历集合并将每个值传入给定的回调                                                                  |
| [max](max.md)                           | 返回给定**键**的最大值                                                                     |
| [median](median.md)                     | 方法返回给定**键**的中间值                                                                   |
| [merge](merge.md)                       | 将给定数组或集合合并到原集合                                                                    |
| [mergeRecursive](mergeRecursive.md)     | 将给定的数组或集合与原始集合递归合并                                                                |
| [min](min.md)                           | 返回给定键的最小值                                                                         |
| [mode](mode.md)                         | 返回给定**键**的[众数值](https://baike.baidu.com/item/%E4%BC%97%E6%95%B0/44796 "百度百科-众数值") |
| [nth](nth.md)                           | 创建由每隔`n`个元素组成一个新集合                                                                |
| [only](only.md)                         | 返回集合中给定键的所有项目                                                                     |
| [pad](pad.md)                           | TODO                                                                              |
| [partition](partition.md)               | 配合`list()`方法区分回调函数满足和不满足的数据                                                       |
| [pipe](pipe.md)                         | 将集合传给给定的回调并返回结果                                                                   |
| [pipeInto](pipeInto.md)                 | 创建给定类的新实例，并将集合传递给构造函数                                                             |
| [pipeThrough](pipeThrough.md)           | TODO                                                                              |
| [pluck](pluck.md)                       | 获取集合中给定键对应的所有值                                                                    |
| [pop](pop.md)                           | **改变原集合**，移除并返回集合中的最后一个项目                                                         |
| [prepend](prepend.md)                   | **改变原集合**，将给定的值添加到集合的开头                                                           |
| [pull](pull.md)                         | **改变原集合**，把给定键对应的值从集合中移除并返回                                                       |
| [push](push.md)                         | **改变原集合**，把给定值添加到集合的末尾                                                            |
| [put](put.md)                           | **改变原集合**，在集合内设置给定的键值对                                                            |
| [random](random.md)                     | 从集合中返回一个随机项                                                                       |
| [reduce](reduce.md)                     | 将每次迭代的结果传递给下一次迭代直到集合减少为单个值                                                        |
| [reduceSpread](reduceSpread.md)         | TODO                                                                              |
| [reject](reject.md)                     | 使用指定的回调过滤集合                                                                       |
| [replace](replace.md)                   | TODO                                                                              |
| [replaceRecursive](replaceRecursive.md) | TODO                                                                              |
| [reverse](reverse.md)                   | 倒转集合中项目的顺序                                                                        |
| [search](search.md)                     | 搜索给定的值并返回它的键                                                                      |
| [shift](shift.md)                       | **改变原集合**，移除并返回集合的第一个项目                                                           |
| [shuffle](shuffle.md)                   | 随机排序集合中的项目                                                                        |
| [skip](skip.md)                         | 返回一个新的集合，其中给定数量的元素从集合的开头删除                                                        |
| [skipUntil](skipUntil.md)               | 跳过集合中的项目，直到给定的回调返回 `true` ，然后将集合中的其余项目作为新集合实例返回                                   |
| [skipWhile](skipWhile.md)               | 跳过集合中的项目，同时给定的回调返回 `true` ，然后将集合中的其余项目作为新集合返回                                     |
| [slice](slice.md)                       | 返回集合中给定值后面的部分                                                                     |
| [sliding](sliding.md)                   | TODO                                                                              |
| [sole](sole.md)                         | TODO                                                                              |
| [some](contains.md)                     | [contains](contains.md) 方法的别名                                                     |
| [sort](sort.md)                         | 保留原数组的键，对集合进行排序                                                                   |
| [sortBy](sortBy.md)                     | 以给定的键对集合进行正序排序                                                                    |
| [sortByDesc](sortByDesc.md)             | 与 [sortBy](sortBy.md) 一样，以相反的顺序来对集合进行排序                                           |
| [sortDesc](sortDesc.md)                 | TODO                                                                              |
| [sortKeys](sortKeys.md)                 | TODO                                                                              |
| [sortKeysDesc](sortKeysDesc.md)         | TODO                                                                              |
| [sortKeysUsing](sortKeysUsing.md)       | TODO                                                                              |
| [splice](splice.md)                     | 删除并返回从给定值后的内容，原集合也会受到影响                                                           |
| [split](split.md)                       | 将集合按给定的值拆分                                                                        |
| [splitIn](splitIn.md)                   | 将集合分为给定数量的组                                                                       |
| [sum](sum.md)                           | 返回集合内所有项目的总和                                                                      |
| [take](take.md)                         | 返回给定数量项目的新集合                                                                      |
| [takeUntil](takeUntil.md)               | 将返回集合中的项目，直到给定的回调返回 `true`                                                        |
| [takeWhile](takeWhile.md)               | 返回集合中的项目，直到给定的回调返回 `false`                                                        |
| [tap](tap.md)                           | 将集合传递给回调，在特定点「tap」集合                                                              |
| [times](times.md)                       | 通过回调在给定次数内创建一个新的集合                                                                |
| [toArray](toArray.md)                   | 将集合转换成 PHP 数组                                                                     |
| [toJson](toJson.md)                     | 将集合转换成 JSON 字符串                                                                   |
| [transform](transform.md)               | **改变原集合**，迭代集合并对集合内的每个项目调用给定的回调                                                   |
| [undot](undot.md)                       | TODO                                                                              |
| [union](union.md)                       | 将给定的数组添加到集合中，**求并集**                                                              |
| [unique](unique.md)                     | 返回集合中所有唯一的项目                                                                      |
| [uniqueStrict](uniqueStrict.md)         | 使用严格模式返回集合中所有唯一的项目                                                                |
| [unless](unless.md)                     | 除非方法的第一个参数的计算结果为true，否则该方法将执行给定的回调                                                |
| [unlessEmpty](whenNotEmpty.md)          | [whenNotEmpty](whenNotEmpty.md) 方法的别名                                             |
| [unlessNotEmpty](whenEmpty.md)          | [whenEmpty](whenEmpty.md) 方法别名                                                    |
| [unwrap](unwrap.md)                     | 静态 unwrap 方法在适用时从给定值返回集合的基础项                                                      |
| [value](value.md)                       | TODO                                                                              |
| [values](values.md)                     | 返回键被重置为连续编号的新集合                                                                   |
| [when](when.md)                         | 当传入的第一个参数为 true 的时，将执行给定的回调                                                       |
| [whenEmpty](whenEmpty.md)               | 当集合为空时，`whenEmpty` 方法将执行给定的回调                                                     |
| [whenNotEmpty](whenNotEmpty.md)         | 当集合不为空时，`whenNotEmpty` 方法将执行给定的回调                                                 |
| [where](where.md)                       | 通过给定的键值过滤集合                                                                       |
| [whereStrict](whereStrict.md)           | 使用严格模式通过给定的键值过滤集合                                                                 |
| [whereBetween](whereBetween.md)         | 通过确定指定的项目值是否在给定范围内来过滤集合                                                           |
| [whereIn](whereIn.md)                   | 通过给定的键值数组来过滤集合                                                                    |
| [whereInStrict](whereInStrict.md)       | 使用严格模式通过给定的键值数组来过滤集合                                                              |
| [whereInstanceOf](whereInstanceOf.md)   | 按给定的类类型过滤集合                                                                       |
| [whereNotBetween](whereNotBetween.md)   | 通过确定指定的项目值不存在给定范围内来过滤集合                                                           |
| [whereNotIn](whereNotIn.md)             | 集合中不包含的给定键值对进行匹配                                                                  |
| [whereNotInStrict](whereNotInStrict.md) | 使用严格模式通过集合中不包含的给定键值对进行匹配                                                          |
| [whereNotNull](whereNotNull.md)         | TODO                                                                              |
| [whereNull](whereNull.md)               | TODO                                                                              |
| [wrap](wrap.md)                         | 静态 wrap 方法在适用时将给定值包装在集合中                                                          |
| [zip](zip.md)                           | 将给定数组的值与相应索引处的原集合的值合并在一起                                                          |

## 其它项目使用

### 安装

Laravel 中的 Collection 使用 Composer 管理，所以可以在项目中使用 composer 安装到非 Laravel 项目中，通过下面使用命令安装它。

```bash
composer require illuminate/support
```

执行完上面的命令将得到所需要的拓展包。

### 使用

```php
<?php
// 引入 package
require __DIR__ . '/vendor/autoload.php';

// 简单使用
collect([1, 2, 3]); // Illuminate\Support\Collection {#1070 all: [1, 2, 3]}
```

## 在JS中使用集合操作

如果在 JavaScript 中也需要使用类似的数组操作，具体可以可以参考 [ecrmnn/collect.js](https://github.com/ecrmnn/collect.js)。
