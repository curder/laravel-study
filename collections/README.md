# Laravel 的集合 Collection

## 简介

`Illuminate\Support\Collection` 类提供了一个更具可读性的、更便于处理数组数据的封装，具体例子看下面的代码。

我们使用了 `collect` 函数从数组中创建新的集合实例，对其中的每个元素运行 `strtoupper` 函数之后再移除所有的空元素：

    $collection = collect(['taylor', 'abigail', null])->map(function ($name) {
        return strtoupper($name);
    })
    ->reject(function ($name) {
        return empty($name);
    });

正如你看到的，`Collection` 类允许你链式调用其方法，以达到在底层数组上优雅地执行 map 和 reject 操作。一般来说，集合是不可改变的，这意味着每个 `Collection` 方法都会返回一个全新的 `Collection` 实例。

### 创建集合

如上所述，辅助函数 `collect` 会为给定的数组返回一个新的 `Illuminate\Support\Collection` 实例。也就是说，创建一个集合就这么简单：

    $collection = collect([1, 2, 3]);

> 默认情况下， [Eloquent](https://laravel.com/docs/5.5/eloquent) 查询的结果返回的内容都是 `Collection` 实例。

## 可用的方法

这个文档接下来的内容，我们会探讨 `Collection` 类每个可用的方法。记住，所有方法都可以以方法链的形式优雅地操纵数组。而且，几乎所有的方法都会返回新的 `Collection` 实例，允许你在必要时保存集合的原始副本。



