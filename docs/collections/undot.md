# undot

> 使用"点"表示法的单维集合扩展为多维集合

```php
collect([
    'name.first_name' => 'Marie',
    'name.last_name' => 'Valentine',
    'address.line_1' => '2992 Eagle Drive',
    'address.line_2' => '',
    'address.suburb' => 'Detroit',
    'address.state' => 'MI',
    'address.postcode' => '48219'
])->undot();

/*
[
    "name" => [
        "first_name" => "Marie",
        "last_name" => "Valentine"
    ],
    "address" => [
        "line_1" => "2992 Eagle Drive",
        "line_2" => "",
        "suburb" => "Detroit",
        "state" => "MI",
        "postcode" => "48219"
    ]
] 
 */
```
