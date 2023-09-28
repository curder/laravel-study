# mapSpread

迭代集合的项目，将每个嵌套的项目值传递到给定的闭包中。 闭包可以自由修改并返回它，从而形成一个新的修改后的集合。

```php
collect([1, 2, 3, 4, 5, 6, 7, 8])
  ->chunk(2) // 将集合拆成多个指定大小的小集合
  ->mapSpread(fn ($a, $b) => [$a => $b]);

// [[1 => 2], [3 => 4], [5 => 6], [7 => 8]]
```

值得注意的是，一定要保证对应的值有数据，否则将跟产生预期不符合的错误。

```php
collect([1, 2, 3, 4, 5, 6, 7])
  ->chunk(3)
  ->mapSpread(function ($a, $b, $c) {
    return $a * $b - $c;
  });

// output
/**
 * TypeError: Too few arguments to function {closure}(), 2 passed in ../xx/../vendor/laravel/framework/src/Illuminate./Traits/EnumeratesValues.php
 * on line 316 and exactly 3 expected
 */
```

## 改变原集合

```php
$collection = collect([1, 2, 3, 4, 5, 6, 7, 8, 9])->chunk(3);
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

$newCollection = $collection->mapSpread(fn ($a, $b, $c) => $a * $b - $c); // [-1, 14, 47]

$collection; // [[1, 2, 3, 0], [4, 5, 6, 1], [7, 8, 9, 2]]
```
