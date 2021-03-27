# flatten 方法

将多维集合转为一维。

```php
collect(['name' => 'taylor', 'languages' => ['php', 'javascript']])->flatten();

// output
/**
=> Illuminate\Support\Collection {#1079
     all: [
       "taylor",
       "php",
       "javascript",
     ],
   }
 */
```

还可以选择性地传入「深度」参数：

```php
collect([
  'Apple' => [['name' => 'iPhone 6S', 'brand' => 'Apple']],
  'Samsung' => [['name' => 'Galaxy S7', 'brand' => 'Samsung']],
])->flatten(1);

// output
/**
=> Illuminate\Support\Collection {#1093
     all: [
       [
         "name" => "iPhone 6S",
         "brand" => "Apple",
       ],
       [
         "name" => "Galaxy S7",
         "brand" => "Samsung",
       ],
     ],
   }
 */
```

在这个例子里，调用 flatten 方法时不传入深度参数的话也会将嵌套数组转成一维的，然后返回 `['iPhone 6S', 'Apple', 'Galaxy S7', 'Samsung']`，传入深度参数能限制设置返回数组的层数。

有时候我们需要对数据进行分组可以使用 [groupBy](/collections/groupBy.md) 方法。
