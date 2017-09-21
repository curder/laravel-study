# Laravel 的集合 Collection

- [简介](#introduction)

## 简介

<a name="introduction"></a>

`Illuminate\Support\Collection` 类提供了一个更具可读性的、更便于处理数组数据的封装，具体例子看下面的代码。

我们使用了 `collect` 函数从数组中创建新的集合实例，对其中的每个元素运行 `strtoupper` 函数之后再移除所有的空元素：

    $collection = collect(['taylor', 'abigail', null])->map(function ($name) {
        return strtoupper($name);
    })
    ->reject(function ($name) {
        return empty($name);
    });

正如你看到的，`Collection` 类允许你链式调用其方法，以达到在底层数组上优雅地执行 map 和 reject 操作。一般来说，集合是不可改变的，这意味着每个 `Collection` 方法都会返回一个全新的 `Collection` 实例。