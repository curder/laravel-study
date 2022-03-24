# last

返回集合中通过给定真实测试的最后一个元素，**不是一个新集合**。

不传入参数调用 `last` 方法来获取集合中最后一个元素。如果集合是空的，返回 `null`。
```php
collect([1, 2, 3, 4])->last();

// output
/**
=> 4
 */
```

## 使用回调

从集合右往左遍历，满足条件元素被返回。

```php
collect([1, 2, 3, 4])->last(fn ($element) => $element < 2);

// output
/**
=> 1
 */
```

## 使用默认值
   
`last` 方法允许传递一个默认值，当通过回调函数遍历集合没有返回值时，默认值将会被返回。

```php
collect([1, 2, 3, 4])->last(fn ($element) => $element < 1, 1000);
collect([])->last(null, 1000);

// output
/**
=> 1000
 */
```

> 如果需要返回第一个元素可以使用[first()](./first.md)方法。
