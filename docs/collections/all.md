# all

该方法返回该集合表示的底层**数组**。

```php
collect([1, 2, 3, 4])->all(); // [1, 2, 3, 4]
```

上面 `all` 方法的调用类似于 `toArray`

```php
collect([1, 2, 3, 4])->toArray(); // [1, 2, 3, 4]
```

## 与 toArray 的区别

`all` 方法与 `toArray` 方法的区别在于嵌套集合在调用方法后生成的结果不同。

::: code-group
```php [all]
// 使用 all 方法只会将集合中首层的元素格式化为数组
collect([collect([1, 2, 3, 4]), collect([1, 2, 3, 4])])->all();

/**
[
 Illuminate\Support\Collection {#1092
   all: [1, 2, 3, 4],
 },
 Illuminate\Support\Collection {#1091
   all: [1, 2, 3, 4],
 },
]
*/
```


```php [toArray]
// 使用 toArray 方法会将所有层级的集合都格式化为数组
collect([collect([1, 2, 3, 4]), collect([1, 2, 3, 4])])->toArray();

/**
[
 [1, 2, 3, 4],
 [1, 2, 3, 4],
]
*/
```
:::
