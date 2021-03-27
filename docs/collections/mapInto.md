# mapInto 方法

遍历集合，通过将值传递给构造函数来创建给定类的新实例。


```php
$collection = collect([1, 2, 3, 4]);

$collection
  ->mapInto(Coverter::class)
  ->dump()
  ->map(function ($coverter) {
    return $coverter->toCentimeters();
  })
  ->dump();
  
$collection->dump();

class Coverter
{
  private $amount;
  public function __construct($amount)
  {
    $this->amount = $amount;
  }

  public function toCentimeters()
  {
    return $this->amount * 2.54;
  }
}

// output
/**
array:4 [
  0 => Coverter {#1105
    -amount: 1
  }
  1 => Coverter {#1104
    -amount: 2
  }
  2 => Coverter {#1103
    -amount: 3
  }
  3 => Coverter {#1102
    -amount: 4
  }
]

array:4 [
  0 => 2.54
  1 => 5.08
  2 => 7.62
  3 => 10.16
]

array:4 [
  0 => 1
  1 => 2
  2 => 3
  3 => 4
] 
 */
```

