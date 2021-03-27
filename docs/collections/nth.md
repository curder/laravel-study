# nth

**不改变原集合**，创建由每隔`n`个元素组成一个新集合。

```php
collect([1, 2, 3, 4])->nth(1);

// output
/**
=> Illuminate\Support\Collection {#1211
     all: [
       1,
       2,
       3,
       4,
     ],
   }
 */
```
> 可以看到集合全部都输出了。


```php
collect([1, 2, 3, 4])->nth(2);

// output
/**
=> Illuminate\Support\Collection {#1211
     all: [
       1,
       3,
     ],
   }
 */
```
> 可以看到，返回的集合为原集合的键能被 **2** 整除的值。

        
## 自定义偏移量

默认不传递第二个参数的时候偏移量默认为 0，也可以选择传入一个偏移位置作为第二个参数。

```php
collect([1, 2, 3, 4])->nth(2, 1);

// output
/**
=> Illuminate\Support\Collection {#1213
     all: [
       2,
       4,
     ],
   }
 */
```

### 不改变原集合

```php
$collection = collect([1, 2, 3, 4]);
$newCollection = $collection->nth(2, 1);

$newCollection->dump();
$collection->dd();

// output
/**
array:2 [
  0 => 2
  1 => 4
]
array:4 [
  0 => 1
  1 => 2
  2 => 3
  3 => 4
]
 */
```
