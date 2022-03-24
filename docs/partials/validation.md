# Validation 验证

## `dimensions` 图片验证

在验证上传的图像时，可以指定上传图片所需的尺寸。

```php
[
    'photo' => 'dimensions:max_width=4096,max_height=4096'
],
```

## 自定义验证错误消息 

可以自定义每个字段、规则和语言的验证错误消息 - 只需创建具有适当数组结构的特定语言文件 `resources/lang/xx/validation.php`。

```php
// 规则
[
    'email' => ['required']
], 

// 错误信息
'custom' => [
     'email' => [
        'required' => '请提供邮箱地址！',
     ],
],
```

## 用 `now` 或 `yesterday` 验证日期

可以通过之前/之后的规则验证日期，并将各种字符串作为参数传递。

例如：`tomorrw`、`now`、`yesterday`。示例：`'start_date' => 'after:now'`。

```php
$rules = [
    'start_date' => 'after:tomorrow',
    'end_date' => 'after:start_date'
];
```


## `mac_address`

Laravel 8.77 版本之后，添加 `mac_address` 规则验证数据是否为正确的 mac 地址。

```php {4,10}
Validator::make([
  'device_mac' => '04:98:77:44:0f:e6',
], [
  'device_mac' => 'mac_address',
])->passes();

Validator::make([
  'device_mac' => 'invalid-mac-address',
], [
  'device_mac' => 'mac_address',
])->passes();
```

更多详情查看: [Added rule to validate MAC address (#40098)](https://github.com/laravel/framework/pull/40098)

## 有条件的验证规则

如果验证规则取决于某些条件，可以通过将 `withValidator()` 添加到 `FormRequest` 类来修改规则，并在那里指定自定义逻辑。

例如，如果只想为某些用户角色添加验证规则。

```php
use Illuminate\Validation\Validator;

class CategoryStoreRequest extends FormRequest
{
    // ...
    
    public function withValidator(Validator $validator)
    {
        if (auth()->user()->isSuperAdmin()) {
            $validator->addRules([
                'some_secret_password' => 'required'
            ]);
        }
    }
}
```

## `prepareForValidation` 验证前

如果想在默认 Laravel 验证之前修改某些字段，或者换句话说，“准备”该字段，在 `FormRequest` 类中有一个方法 `prepareForValidation()`：

```php
protected function prepareForValidation()
{
    $this->merge([
        'slug' => Illuminate\Support\Str::slug($this->slug),
    ]);
}
```

## 更改默认验证消息

如果想更改特定字段和特定验证规则的默认验证错误消息，只需将 `messages()` 方法添加到您的 `FormRequest` 类中。

```php
class UserStoreRequest extends FormRequest
{
    public function rules()
    {
        return [
            'name' => 'required',
        ];
    }
    
    public function messages()
    {
        return [
            'name.required' => '请输入您的名字',
        ];
    }
}
```

## 在第一次验证失败时停止

默认情况下，`Laravel` 验证错误将在列表中返回，检查所有验证规则。

但是，如果您希望进程在第一个错误后停止，请使用名为 `bail` 的验证规则：

```php
$request->validate([
    'title' => 'bail|required|unique:posts|max:255',
    'body' => 'required',
]);
```

如果需要在 `FormRequest` 类中的第一个错误上停止验证，可以将 `stopOnFirstFailure` 属性设置为 `true`：

```php
protected $stopOnFirstFailure = true;
```

[Stopping on first validation failure](https://laravel.com/docs/9.x/validation#stopping-on-first-validation-failure)

## 在不使用 `validate()` 或 `FormRequest` 的情况下抛出 422 状态码

如果不使用 `validate()` 或 `FormRequest`，但仍需要抛出具有相同 `422` 状态码和错误结构的错误，则可以手动抛出 `ValidationException::withMessages()` 。

```php
if (!$user || !Hash::check($request->password, $user->password)) {
    throw ValidationException::withMessages([
        'email' => ['The provided credentials are incorrect.'],
    ]);
}
```

## 规则条件

如果规则是动态的并且取决于其他条件，可以即时创建该规则数组

```php
public function store(Request $request)
{
    $validationArray = [
        'title' => 'required',
        'company' => 'required',
        'logo' => 'file|max:2048',
        'location' => 'required',
        'apply_link' => 'required|url',
        'content' => 'required',
        'payment_method_id' => 'required'
    ];

    if (!Auth::check()) {
        $validationArray = array_merge($validationArray, [
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed|min:5',
            'name' => 'required'
        ]);
    }
    //
}
```

## 使用 `Rule::when()` 可以有条件地应用验证规则

可以有条件地在 `laravel` 中应用验证规则。在此示例中，仅在用户可以实际投票帖子时验证投票的价值。

```php
use Illuminate\Validation\Rule;

public function rules()
{
    return [
        'vote' => Rule::when($user->can('vote', $post), ['required', 'int', 'between:1,5']),
    ]
}
```

## `unique` 不考虑应用于模型的 `SoftDeletes` 全局范围

奇怪的是，默认情况下 `Rule::unique` 不考虑应用于模型的 `SoftDeletes` 全局范围。但是 `withoutTrashed()` 方法是可用的：

```php
Rule::unique('users', 'email')->withoutTrashed();
```

## `Validator::sometimes()` 方法允许我们定义何时应用验证规则

Laravel `Validator::sometimes()` 方法允许我们根据提供的输入定义何时应用验证规则。

例如：该片段显示了如果购买的商品数量不足，如何禁止使用优惠券。

```php
$data = [
    'coupon' => 'PIZZA_PARTY',
    'items' => [
        [
            'id' => 1,
            'quantity' => 2
        ],
        [
            'id' => 2,
            'quantity' => 2,
        ],
    ],
];

$validator = Validator::make($data, [
    'coupon' => 'exists:coupons,name',
    'items' => 'required|array',
    'items.*.id' => 'required|int',
    'items.*.quantity' => 'required|int',
]);

$validator->sometimes('coupon', 'prohibited', function (Fluent $data) {
    return collect($data->items)->sum('quantity') < 5;
});

// throws a ValidationException as the quantity provided is not enough
$validator->validate();
```

## 数组元素验证

如果想验证提交的数组的元素，请在带有“*”的规则中使用点表示法

```php
// say you have this array
// array in request 'user_info'
$request->validated()->user_info = [
    [
        'name' => 'Qasim',
        'age' => 26,
    ],
    [
        'name' => 'Ahmed',
        'age' => 23,
    ],
];

// Rule
$rules = [
    'user_info.*.name' => ['required', 'alpha'],
    'user_info.*.age' => ['required', 'numeric'],
];
```

## `Password::defaults` 方法

在验证用户提供的密码时，可以使用 `Password::defaults` 方法强制执行特定规则。

它包括要求字母、数字、符号等的选项。

```php
class AppServiceProvider
{
    public function boot(): void
    {
        Password::defaults(function () {
            return Password::min(12)
                ->letters()
                ->numbers()
                ->symbols()
                ->mixedCase()
                ->uncompromised();
        })
    }
}

request()->validate([
    ['password' => ['required', Password::defaults()]]
])
```
