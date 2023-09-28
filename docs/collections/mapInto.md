# mapInto

> 遍历集合，通过将值传递给构造函数来创建给定类的新实例。

```php
class Covert
{
  public function __construct(private int|float $amount)
  {
  // 
  }

  public function toCentimeters()
  {
    return $this->amount * 2.54;
  }
}

$collection = collect([1, 2, 3, 4]);

$collection
  ->mapInto(Covert::class)
  ->map(fn ($covert) => $covert->toCentimeters())
  ->dump();
// [2.54, 5.08, 7.62, 10.16]  
```

## 相关方法

- [map](map.md)