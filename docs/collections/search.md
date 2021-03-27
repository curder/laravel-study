# search 方法

搜索给定的值并返回它的键。如果找不到，则返回 `false`。

```php
collect([2, 4, 6, 8])->search(4); // 1
```

搜索使用「宽松」比较完成，这意味着具有整数值的字符串会被认为等于相同值的整数。

要使用「严格」比较，就传入 `true` 作为该方法的第二个参数：

```php
$collection = collect([2, 4, 6, 8]);

$collection->search('4', true); // false
```

另外，可以通过回调来搜索第一个通过真实测试的项目：

```php
$collection = collect([2, 4, 6, 8]);

$collection->search(function ($item, $key) {
    return $item > 5;
}); // 2
```
