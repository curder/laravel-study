# times 方法

`times` 方法是 Collection 类的静态方法，通过 `Collection::times()` 调用

通过回调在给定次数内创建一个新集合。

```php
use Illuminate\Support\Collection;

$collection = Collection::times(3, fn($value) => $value * 3 );
$collection->all();

// output
/**
Illuminate\Support\Collection {#1074
 all: [
   3,
   6,
   9,
 ],
}
*/
```

使用这个方法可以与工厂结合使用创建出 `Eloquent` 模型

```php
use App\Models\User;
use Illuminate\Support\Collection;

Collection::times(3, fn ($number) => User::factory()->create(['name' => $number . ' Cool Name']))->toArray();

// output
/**
[
 [
   "NAME" => "1 cOOL nAME",
   "EMAIL" => "UPTON.SAUL@EXAMPLE.COM",
   "EMAIL_VERIFIED_AT" => "2021-03-23t10:40:16.000000z",
   "UPDATED_AT" => "2021-03-23t10:40:16.000000z",
   "CREATED_AT" => "2021-03-23t10:40:16.000000z",
   "ID" => 26,
   "PROFILE_PHOTO_URL" => "HTTPS://UI-AVATARS.COM/API/?NAME=1+cOOL+nAME&COLOR=7f9cf5&BACKGROUND=ebf4ff",
 ],
 [
   "NAME" => "2 cOOL nAME",
   "EMAIL" => "OHANSEN@EXAMPLE.ORG",
   "EMAIL_VERIFIED_AT" => "2021-03-23t10:40:16.000000z",
   "UPDATED_AT" => "2021-03-23t10:40:16.000000z",
   "CREATED_AT" => "2021-03-23t10:40:16.000000z",
   "ID" => 27,
   "PROFILE_PHOTO_URL" => "HTTPS://UI-AVATARS.COM/API/?NAME=2+cOOL+nAME&COLOR=7f9cf5&BACKGROUND=ebf4ff",
 ],
 [
   "NAME" => "3 cOOL nAME",
   "EMAIL" => "ZBORER@EXAMPLE.NET",
   "EMAIL_VERIFIED_AT" => "2021-03-23t10:40:16.000000z",
   "UPDATED_AT" => "2021-03-23t10:40:16.000000z",
   "CREATED_AT" => "2021-03-23t10:40:16.000000z",
   "ID" => 28,
   "PROFILE_PHOTO_URL" => "HTTPS://UI-AVATARS.COM/API/?NAME=3+cOOL+nAME&COLOR=7f9cf5&BACKGROUND=ebf4ff",
 ],
] 
*/
```
