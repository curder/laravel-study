## eachSpread 方法

迭代集合中的内容，**不改变原集合**的同时将其传递到回调函数中，通常用于二维数组的循环，在回调函数中给值命名。

```php
collect([
  ["banners", 45, "California"],
  ["apples", 20, "Florida"],
  ["coconuts", 60, "Texas"],
])->eachSpread(function ($product, $qty, $location) {
  dump("We have {$product} {$qty} in our {$location} store.");
});

// output
/**
"We have banners 45 in our California store."
"We have apples 20 in our Florida store."
"We have coconuts 60 in our Texas store."
=> Illuminate\Support\Collection {#1249
     all: [
       [
         "banners",
         45,
         "California",
       ],
       [
         "apples",
         20,
         "Florida",
       ],
       [
         "coconuts",
         60,
         "Texas",
       ],
     ],
   }
*/
```

### Condition

跟 [each](/collections/each.md) 方法的使用一致，也可以在回调函数中编写逻辑，当返回 `false` 后会停止循环。

```php
collect([
  ["banners", 45, "California"],
  ["apples", 20, "Florida"],
  ["coconuts", 60, "Texas"],
])->eachSpread(function ($product, $qty, $location) {
  if ($qty === 20) {
    return false;
  }
  dump("We have {$product} {$qty} in our {$location} store.");
});

// output
/**
"We have banners 45 in our California store."
=> Illuminate\Support\Collection {#1253
     all: [
       [
         "banners",
         45,
         "California",
       ],
       [
         "apples",
         20,
         "Florida",
       ],
       [
         "coconuts",
         60,
         "Texas",
       ],
     ],
   }
*/
```

> 可以看到当返回 `false` 时，循环终止。
