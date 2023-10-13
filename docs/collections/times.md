# times

> 通过回调在给定次数内创建一个新集合

```php
collect()->times(3, fn($value) => $value * 3 );

// [3, 6, 9]
```

使用这个方法可以与工厂结合使用创建出 `Eloquent` 模型

```php
use App\Models\User;

collect()->times(3, fn ($number) => User::factory()->create(['name' => $number . ' Cool Name']));
```
