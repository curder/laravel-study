# chuck

> 将集合拆分为多个指定大小的集合组。

## 一些示例

::: code-group
```php [元素个数被整除]
collect([1, 2, 3, 4, 5, 6, 7, 8])->chunk(4); // [!code focus]
/**
=> Illuminate\Support\Collection {#1089
     all: [
       Illuminate\Support\Collection {#1091
         all: [1, 2, 3, 4],
       },
       Illuminate\Support\Collection {#1090
         all: [5, 6, 7, 8],
       },
     ],
   }
*/
```

```php [元素个数无法被整除]
collect([1, 2, 3, 4, 5, 6, 7, 8])->chunk(3); // [!code focus]
/**
=> Illuminate\Support\Collection {#1088
     all: [
       Illuminate\Support\Collection {#1091
         all: [1, 2, 3],
       },
       Illuminate\Support\Collection {#1090
         all: [4, 5, 6],
       },
       Illuminate\Support\Collection {#1089
         all: [7, 8], // [!code focus]
       },
     ],
   }
*/
```
:::

## 相关方法

- [splice](splice.md)
- [slice](slice.md)
