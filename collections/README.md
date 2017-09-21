# Laravel 的集合 Collection

## 简介

`Illuminate\Support\Collection` 类提供了一个更具可读性的、更便于处理数组数据的封装，具体例子看下面的代码。

我们使用了 `collect` 函数从数组中创建新的集合实例，对其中的每个元素运行 `strtoupper` 函数之后再移除所有的空元素：

```
$collection = collect(['taylor', 'abigail', null])->map(function ($name) {
    return strtoupper($name);
})
->reject(function ($name) {
    return empty($name);
});
```

正如你看到的，`Collection` 类允许你链式调用其方法，以达到在底层数组上优雅地执行 map 和 reject 操作。一般来说，集合是不可改变的，这意味着每个 `Collection` 方法都会返回一个全新的 `Collection` 实例。

## 创建集合

如上所述，辅助函数 `collect` 会为给定的数组返回一个新的 `Illuminate\Support\Collection` 实例。也就是说，创建一个集合就这么简单：

```
$collection = collect([1, 2, 3]);
```

> 默认情况下， [Eloquent](https://laravel.com/docs/5.5/eloquent) 查询的结果返回的内容都是 `Collection` 实例。

## 可用的方法

接下来的内容，我们会探讨 `Collection` 类每个可用的方法。**记住，所有方法都可以以方法链的形式优雅地操纵数组。**而且，几乎所有的方法都会返回新的 `Collection` 实例，允许你在必要时保存集合的原始副本。

| 方法名 | 释义 |
| :--- | :--- |
| all（[详细](/collections/all.md)） | 返回该集合表示的底层**数组** |
| average（[详细](/collections/avg.md)） | `avg()`方法的别名 |
| avg（[详细](/collections/avg.md)） |  |
| chunk |  |
| collapse |  |
| combine |  |
| contains |  |
| containsStrict |  |
| count |  |
| diff |  |
| diffAssoc |  |
| diffKeys |  |
| each |  |
| every |  |
| except |  |
| filter |  |
| first |  |
| flatMap |  |
| flatten |  |
| flip |  |
| forget |  |
| forPage |  |
| get |  |
| groupBy |  |
| has |  |
| implode |  |
| intersect |  |
| intersectKey |  |
| isEmpty |  |
| isNotEmpty |  |
| keyBy |  |
| keys |  |
| last |  |
| map |  |
| mapWithKeys |  |
| max |  |
| median |  |
| merge |  |
| min |  |
| mode |  |
| nth |  |
| only |  |
| partition |  |
| pipe |  |
| pluck |  |
| pop |  |
| prepend |  |
| pull |  |
| push |  |
| put |  |
| random |  |
| reduce |  |
| reject |  |
| reverse |  |
| search |  |
| shift |  |
| shuffle |  |
| slice |  |
| sort |  |
| sortBy |  |
| sortByDesc |  |
| splice |  |
| split |  |
| sum |  |
| take |  |
| tap |  |
| times |  |
| toArray |  |
| toJson |  |
| transform |  |
| union |  |
| unique |  |
| uniqueStrict |  |
| values |  |
| when |  |
| where |  |
| whereStrict |  |
| whereIn |  |
| whereInStrict |  |
| whereNotIn |  |
| whereNotInStrict |  |
| zip |  |

## 在项目中单独使用

### 安装

Laravel中的Collection使用Composer管理，所以我们可以在项目中使用composer安装到非Laravel项目中，比如我们新建一个collections目录，通过下面使用命令安装

```
mkdir collections && cd collections
composer require illuminate/support
```

执行完上面的命令将得到所需要的package。

### 使用

```
<?php
// 引入package
require __DIR__ . '/vendor/autoload.php';
```

### 其他

如果在js中也需要使用类似的数组操作，可以参考 [ecrmnn/collect.js](https://github.com/ecrmnn/collect.js) 的相关操作。

