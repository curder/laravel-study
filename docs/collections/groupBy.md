# groupBy

**不改变原集合**，根据给定的键对集合内的项目进行分组。

```php
collect([
  'key0' => ['product' => 'apples', 'price' => 10],
  'key1' => ['product' => 'apples', 'price' => 10],
  'key2' => ['product' => 'apples', 'price' => 20],
  'key3' => ['product' => 'apples', 'price' => 30],
  'key4' => ['product' => 'coconuts', 'price' => 40],
  'key5' => ['product' => 'coconuts', 'price' => 50],
])->groupBy('product');

// output
/*
=> Illuminate\Support\Collection {#1254
     all: [
       "apples" => Illuminate\Support\Collection {#1256
         all: [
           [
             "product" => "apples",
             "price" => 10,
           ],
           [
             "product" => "apples",
             "price" => 10,
           ],
           [
             "product" => "apples",
             "price" => 20,
           ],
           [
             "product" => "apples",
             "price" => 30,
           ],
         ],
       },
       "coconuts" => Illuminate\Support\Collection {#1255
         all: [
           [
             "product" => "coconuts",
             "price" => 40,
           ],
           [
             "product" => "coconuts",
             "price" => 50,
           ],
         ],
       },
     ],
   }
*/
```

默认情况下 `key` 将会被重置，通过传入第二个参数 `true` 保留 `key`。

```php
collect([
  'key0' => ['product' => 'apples', 'price' => 10],
  'key1' => ['product' => 'apples', 'price' => 10],
  'key2' => ['product' => 'apples', 'price' => 20],
  'key3' => ['product' => 'apples', 'price' => 30],
  'key4' => ['product' => 'coconuts', 'price' => 40],
  'key5' => ['product' => 'coconuts', 'price' => 50],
])->groupBy('product', true); // 添加 true 参数，保留key

// output
/**
=> Illuminate\Support\Collection {#1257
     all: [
       "apples" => Illuminate\Support\Collection {#1259
         all: [
           "key0" => [
             "product" => "apples",
             "price" => 10,
           ],
           "key1" => [
             "product" => "apples",
             "price" => 10,
           ],
           "key2" => [
             "product" => "apples",
             "price" => 20,
           ],
           "key3" => [
             "product" => "apples",
             "price" => 30,
           ],
         ],
       },
       "coconuts" => Illuminate\Support\Collection {#1258
         all: [
           "key4" => [
             "product" => "coconuts",
             "price" => 40,
           ],
           "key5" => [
             "product" => "coconuts",
             "price" => 50,
           ],
         ],
       },
     ],
   }
 */
```

除了传入一个字符串的「键」，还可以传入一个回调。该回调应该返回用来分组的键的值。

```php
// 下面的示例如果使用 `code` 字段来分组的话得到的结果不是预期，可以通过回调函数稍作处理。
collect([
  ['code' => '123VG', 'name' => 'string1'],
  ['code' => '123-VG', 'name' => 'string2'],
  ['code' => '123 VG', 'name' => 'string3'],
])->groupBy(function ($element) {
  return str_replace(['-', ' '], [], $element['code']);
});

// output
/**
=> Illuminate\Support\Collection {#1242
     all: [
       "123VG" => Illuminate\Support\Collection {#1243
         all: [
           [
             "code" => "123VG",
             "name" => "string1",
           ],
           [
             "code" => "123-VG",
             "name" => "string2",
           ],
           [
             "code" => "123 VG",
             "name" => "string3",
           ],
         ],
       },
     ],
   }
 */
```

## 不改变原集合

```php
$collection = collect([
  ['code' => '123VG', 'name' => 'string1'],
  ['code' => '123-VG', 'name' => 'string2'],
  ['code' => '123 VG', 'name' => 'string3'],
]);

$newCollection = $collection->groupBy(function ($element) {
  return str_replace(['-', ' '], [], $element['code']);
});

$collection->dump();
$newCollection->dd();

// output
/**
array:3 [
  0 => array:2 [
    "code" => "123VG"
    "name" => "string1"
  ]
  1 => array:2 [
    "code" => "123-VG"
    "name" => "string2"
  ]
  2 => array:2 [
    "code" => "123 VG"
    "name" => "string3"
  ]
]
array:1 [
  "123VG" => Illuminate\Support\Collection {#1257
    #items: array:3 [
      0 => array:2 [
        "code" => "123VG"
        "name" => "string1"
      ]
      1 => array:2 [
        "code" => "123-VG"
        "name" => "string2"
      ]
      2 => array:2 [
        "code" => "123 VG"
        "name" => "string3"
      ]
    ]
  }
]
 */
```
