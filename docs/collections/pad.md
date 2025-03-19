# pad

> 将用给定的值填充数组，直到数组达到指定的大小，类似于 PHP 的 [`array_pad`](https://www.php.net/manual/zh/function.array-pad.php) 函数。

如果需要向左填充，可以通过指定负值。如果给定大小的绝对值小于或等于数组的长度，则不会进行填充。

```php
collect(['A', 'B', 'C'])->pad(5, 0);

// ['A', 'B', 'C', 0, 0]
```

## 向左填充

```php
collect(['A', 'B', 'C'])->pad(-5, 0);

// [0, 0, 'A', 'B', 'C']
```

## 长度小于当前集合长度

返回原集合。

```php
collect(['A', 'B', 'C'])->pad(-2, 0);
collect(['A', 'B', 'C']->pad(2, 0);

// ['A', 'B', 'C']
```

## 相关方法

- [array_fill](https://www.php.net/manual/zh/function.array-fill.php)
- [range](https://www.php.net/manual/zh/function.range.php)
