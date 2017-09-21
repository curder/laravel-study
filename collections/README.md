# Laravel 的集合 Collection

- [简介](#introduction)
- [创建集合](#creating-collections)
- [可用的方法](available-methods)

<a name="introduction"></a>
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

<a name="creating-collections"></a>
### 创建集合

如上所述，辅助函数 `collect` 会为给定的数组返回一个新的 `Illuminate\Support\Collection` 实例。也就是说，创建一个集合就这么简单：

    $collection = collect([1, 2, 3]);

> {tip} 默认情况下， [Eloquent](/docs/{{version}}/eloquent) 查询的结果返回的内容都是 `Collection` 实例。

<a name="available-methods"></a>
## 可用的方法

这个文档接下来的内容，我们会探讨 `Collection` 类每个可用的方法。记住，所有方法都可以以方法链的形式优雅地操纵数组。而且，几乎所有的方法都会返回新的 `Collection` 实例，允许你在必要时保存集合的原始副本。

<style>
    #collection-method-list > p {
        column-count: 3; -moz-column-count: 3; -webkit-column-count: 3;
        column-gap: 2em; -moz-column-gap: 2em; -webkit-column-gap: 2em;
    }

    #collection-method-list a {
        display: block;
    }
</style>

<div id="collection-method-list" markdown="1">

[all](#method-all)
[average](#method-average)
[avg](#method-avg)
[chunk](#method-chunk)
[collapse](#method-collapse)
[combine](#method-combine)
[contains](#method-contains)
[containsStrict](#method-containsstrict)
[count](#method-count)
[diff](#method-diff)
[diffAssoc](#method-diffassoc)
[diffKeys](#method-diffkeys)
[each](#method-each)
[every](#method-every)
[except](#method-except)
[filter](#method-filter)
[first](#method-first)
[flatMap](#method-flatmap)
[flatten](#method-flatten)
[flip](#method-flip)
[forget](#method-forget)
[forPage](#method-forpage)
[get](#method-get)
[groupBy](#method-groupby)
[has](#method-has)
[implode](#method-implode)
[intersect](#method-intersect)
[intersectKey](#method-intersectkey)
[isEmpty](#method-isempty)
[isNotEmpty](#method-isnotempty)
[keyBy](#method-keyby)
[keys](#method-keys)
[last](#method-last)
[map](#method-map)
[mapWithKeys](#method-mapwithkeys)
[max](#method-max)
[median](#method-median)
[merge](#method-merge)
[min](#method-min)
[mode](#method-mode)
[nth](#method-nth)
[only](#method-only)
[partition](#method-partition)
[pipe](#method-pipe)
[pluck](#method-pluck)
[pop](#method-pop)
[prepend](#method-prepend)
[pull](#method-pull)
[push](#method-push)
[put](#method-put)
[random](#method-random)
[reduce](#method-reduce)
[reject](#method-reject)
[reverse](#method-reverse)
[search](#method-search)
[shift](#method-shift)
[shuffle](#method-shuffle)
[slice](#method-slice)
[sort](#method-sort)
[sortBy](#method-sortby)
[sortByDesc](#method-sortbydesc)
[splice](#method-splice)
[split](#method-split)
[sum](#method-sum)
[take](#method-take)
[tap](#method-tap)
[times](#method-times)
[toArray](#method-toarray)
[toJson](#method-tojson)
[transform](#method-transform)
[union](#method-union)
[unique](#method-unique)
[uniqueStrict](#method-uniquestrict)
[values](#method-values)
[when](#method-when)
[where](#method-where)
[whereStrict](#method-wherestrict)
[whereIn](#method-wherein)
[whereInStrict](#method-whereinstrict)
[whereNotIn](#method-wherenotin)
[whereNotInStrict](#method-wherenotinstrict)
[zip](#method-zip)

</div>



