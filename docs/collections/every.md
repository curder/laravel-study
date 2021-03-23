# every方法

可用于验证集合中每一个元素都通过给定的真实测试。

```
collect([1, 2, 3, 4])->every(function ($value, $key) {
    return $value > 2;
}); // false
```