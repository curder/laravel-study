# replaceRecursive

此方法的工作方式类似于[`replace`](replace.md)，但它将递归到数组中并且对内部的值应用相同的替换。

```php
collect([
    'Taylor',
    'Abigail',
    [
        'James',
        'Victoria',
        'Finn'
    ]
])->replaceRecursive([
    'Charlie',
    2 => [1 => 'King']
]);
 
// ['Charlie', 'Abigail', ['James', 'King', 'Finn']]
```

## 相关方法

- [replace](replace.md)
