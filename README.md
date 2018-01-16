Laravel是一套简洁、优雅的PHP Web开发框架(PHP Web Framework)。它可以让你从面条一样杂乱的代码中解脱出来；它可以帮你构建一个完美的网络APP，而且每行代码都可以简洁、富于表达力。

在Laravel中已经具有了一套高级的PHP ActiveRecord实现 -- Eloquent ORM。它能方便的将“约束（constraints）”应用到关系的双方，这样你就具有了对数据的完全控制，而且享受到ActiveRecord的所有便利。Eloquent原生支持Fluent中查询构造器（query-builder）的所有方法。

以上信息来自[百度百科](https://baike.baidu.com/item/Laravel)

# 阅读方式

1. 通过访问地址：https://curder.gitbooks.io/laravel_study/content/ 直接阅读。

2. 本地下载

    * `npm 5.3.0`
    * `gitbook CLI version: 2.3.2` && `GitBook version: 3.2.2`

页面 GitHub 地址：https://www.github.com/curder/laravel_study

下载源代码到本地并执行相关命令启动本地阅览。

```
git clone git@github.com:curder/laravel_study.git && cd laravel_study
gitbook install && gitbook serve .
```
> 需要git命令下载源文件和gitbook命令升级插件等。


## Laravel模式

* [介绍](README.md)
* [Laravel5发送邮件使用Service隔离业务](send_mesages_use_service_partten.md)
* [如何使用Repository模式](how_to_use_repository_mode.md)
* [如何使用Service模式](how_to_use_service_mode.md)
* [如何使用Presenter模式](how_to_use_presenter_mode.md)

---

## Laravel模型

* [Laravel模型缓存](model/laravel-model-caching.md)
* [Laravel模型事件](model/laravel-model-event.md)
* [Laravel模型观察者](model/laravel-model-observers.md)

* [EloquentORM关联关系](related_relationship/README.md)
* [EloquentORM关联关系之一对一](related_relationship/hasOne.md)
* [EloquentORM关联关系之一对多](related_relationship/hasMany.md)
* [EloquentORM关联关系之远层一对多](related_relationship/hasManyThrough.md)
* [EloquentORM关联关系之多对多](related_relationship/morphToMany.md)
* [EloquentORM关联关系之多态关联](related_relationship/morphMany.md)
* [EloquentORM关联关系之多对多多态关联](related_relationship/belongsToMany.md)

---

## Laravel Collection使用
* [Laravel中Collection的基本使用](collections/README.md)
    * [all](/collections/all.md)
    * [avg](/collections/avg.md)
    * [chuck](/collections/chuck.md)
    * [collapse](/collections/collapse.md)
    * [combine](/collections/combine.md)
    * [contains](/collections/contains.md)
    * [containsStrict](/collections/containsStrict.md)
    * [count](/collections/count.md)
    * [diff](/collections/diff.md)
    * [diffAssoc](/collections/diffAssoc.md)
    * [diffKeys](/collections/diffKeys.md)
    * [each](/collections/each.md)
    * [every](/collections/every.md)
    * [except](/collections/except.md)
    * [filter](/collections/filter.md)
    * [first](/collections/first.md)
    * [flatMap](/collections/flatMap.md)
    * [flatten](/collections/flatten.md)
    * [flip](/collections/flip.md)
    * [forget](/collections/forget.md)
    * [forPage](/collections/forPage.md)
    * [get](/collections/get.md)
    * [groupBy](/collections/groupBy.md)
    * [has](/collections/has.md)
    * [implode](/collections/implode.md)
    * [intersect](/collections/intersect.md)
    * [intersectKey](/collections/intersectKey.md)
    * [isEmpty](/collections/isEmpty.md)
    * [isNotEmpty](/collections/isNotEmpty.md)
    * [keyBy](/collections/keyBy.md)
    * [keys](/collections/keys.md)
    * [last](/collections/last.md)
    * [map](/collections/map.md)
    * [mapWithKeys](/collections/mapWithKeys.md)
    * [max](/collections/max.md)
    * [median](/collections/median.md)
    * [merge](/collections/merge.md)
    * [min](/collections/min.md)
    * [mode](/collections/mode.md)
    * [nth](/collections/nth.md)
    * [only](/collections/only.md)
    * [partition](/collections/partition.md)
    * [pipe](/collections/pipe.md)
    * [pluck](/collections/pluck.md)
    * [pop](/collections/pop.md)
    * [prepend](/collections/prepend.md)
    * [pull](/collections/pull.md)
    * [push](/collections/push.md)
    * [put](/collections/put.md)
    * [random](/collections/random.md)
    * [reduce](/collections/reduce.md)
    * [reject](/collections/reject.md)
    * [reverse](/collections/reverse.md)
    * [search](/collections/search.md)
    * [shift](/collections/shift.md)
    * [shuffle](/collections/shuffle.md)
    * [slice](/collections/slice.md)
    * [sort](/collections/sort.md)
    * [sortBy](/collections/sortBy.md)
    * [sortByDesc](/collections/sortByDesc.md)
    * [splice](/collections/splice.md)
    * [split](/collections/split.md)
    * [sum](/collections/sum.md)
    * [take](/collections/take.md)
    * [tap](/collections/tap.md)
    * [times](/collections/times.md)
    * [toArray](/collections/toArray.md)
    * [toJson](/collections/toJson.md)
    * [transform](/collections/transform.md)
    * [union](/collections/union.md)
    * [unique](/collections/unique.md)
    * [uniqueStrict](/collections/uniqueStrict.md)
    * [values](/collections/values.md)
    * [when](/collections/when.md)
    * [where](/collections/where.md)
    * [whereStrict](/collections/whereStrict.md)
    * [whereIn](/collections/whereIn.md)
    * [whereInStrict](/collections/whereInStrict.md)
    * [whereNotIn](/collections/whereNotIn.md)
    * [whereNotInStrict](/collections/whereNotInStrict.md)
    * [zip](/collections/zip.md)

* [Laravel中Collection的实际使用](/collections_demo/README.md)
    * [collection中sum求和](/collections_demo/sum.md)
    * [collection格式化计算数据](/collections_demo/format.md)
    * [collection格式化计算数据计算github事件得分总和](/collections_demo/format_github_events_score.md)
    * [collection格式化markdown数据列表](/collections_demo/markdown_format.md)
    * [collection格式化计算两个数组的数据](/collections_demo/format_two_array.md)
    * [collection中reduce创建lookup数组](/collections_demo/reduce_create_lookup_array.md)

---

## 其他

* [Laravel上传大文件提示413 Request Entity Too Large错误](laravel_upload_413_request_entity_too_large_error.md)
* [使用Laravel开发自己的Package](packages/laravel-package-hello-world.md)
* [Laravel中涉及认证跳转地址的修改的地方](laravel_is_involved_in_the_modification_of_the_authentication_jump_address.md)
* [Laravel 5.\* 执行迁移文件报错：Specified key was too long error](specified_key_was_too_long_error.md)
* [Laravel测试](laravel_test.md)
* [TODO](todo_list.md)