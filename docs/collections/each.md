# each

迭代集合中的内容，**不改变原集合**的同时将其传递到回调函数中。

```php
collect([1, 2])->each(fn (int $value) => dump("The current value is ${value}"));

// "The current value is 1"
// "The current value is 2"
```

> 不要尝试在回调函数中直接调用 `return` 改变集合，因为 `each` 方法不会改变原集合。
>
> 如果需要执行改变原数组的话可以使用 [map](map.md) 方法。例如：
>
> ```php
> collect([1, 2])->each(fn ($value) => "The current value is ${value}");
> ```

## 中断迭代

如果要中断对内容的迭代，那就从回调中返回 `false`，如下示例：

```php
collect([1, 2, 3, 4])->each(function ($value) {
  if ($value > 2) {
    return false;
  }

  dump("The current value is ${value}");
});

// "The current value is 1"
// "The current value is 2"
```

> 当触发条件返回 `false` 后的循环停止了。

## 获取二维数组

```php
collect([
  ["banners", 45, "California"],
  ["apples", 20, "Florida"],
  ["coconuts", 60, "Texas"],
])->each(function ($value) {
  dump("We have {$value[1]} {$value[0]} in our {$value[2]} store.");
});

// "We have 45 banners in our California store."
// "We have 20 apples in our Florida store."
// "We have 60 coconuts in our Texas store."
```

> 在循环的回调函数中通过下标获取对应值的方式不是很优雅，可能过一段时间就忘了对应的值是什么。
>
> 有没有更加优雅的方式优化这个问题呢？可以使用 [eachSpread](eachSpread.md) 方法。

```php
collect([
  ["banners", 45, "California"],
  ["apples", 20, "Florida"],
  ["coconuts", 60, "Texas"],
])->eachSpread(function ($product, $qty, $location) {
  dump("We have {$product} {$qty} in our {$location} store.");
});

// "We have banners 45 in our California store."
// "We have apples 20 in our Florida store."
// "We have coconuts 60 in our Texas store."
```

> 可以看到通过调用 [eachSpread](eachSpread.md) 方法，在回调函数中有更明确的变量可供使用，变得更加有寓意话。

## 相关方法

- [map](map.md)
- [mapSpread](mapSpread.md)
- [eachSpread](eachSpread.md)
