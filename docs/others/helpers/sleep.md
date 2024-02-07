# Sleep

Laravel 的 [Sleep 类](https://laravel.com/docs/master/helpers#sleep)是 PHP 原生 [sleep](https://www.php.net/manual/en/function.sleep) 和 [usleep](https://www.php.net/manual/en/function.usleep) 函数的轻量级包装器，提供了更好的可测试性，同时还公开了一个开发人员友好的 API 来处理时间：

## 基本使用

```php
use Illuminate\Support\Sleep;
 
$waiting = true;
 
while ($waiting) {
    Sleep::for(1)->second();
 
    $waiting = /* ... */;
}
```

Sleep 类提供了多种方法来使用不同的时间单位：

```php
<?php
use Illuminate\Support\Sleep;

// 暂停执行90秒
Sleep::for(1.5)->minutes();
 
// 暂停执行2秒
Sleep::for(2)->seconds();
 
// 暂停执行500毫秒
Sleep::for(500)->milliseconds();
 
// 暂停执行5000微秒
Sleep::for(5000)->microseconds();
 
// 暂停执行直到给定时间(1分钟)
Sleep::until(now()->addMinute());
 
// PHP本机 sleep 函数的别名
Sleep::sleep(2);
 
// PHP本机 usleep 函数的别名
Sleep::usleep(5000);
```

## `and` 方法

`and` 方法用于轻松组合时间单位。

```php
// 暂停执行1分中10微秒
Sleep::for(1)->second()->and(10)->milliseconds();
```

## 测试

当测试使用 Sleep 类或 PHP 的 sleep 函数的代码时，测试将暂停执行，这会使测试显着变慢。例如，假设在测试以下代码：

```php
$waiting = /* ... */;
 
$seconds = 1;
 
while ($waiting) {
    Sleep::for($seconds++)->seconds();
 
    $waiting = /* ... */;
}
```

通常，测试此代码至少需要一秒钟。

幸运的是，`Sleep` 类允许假装暂停，以便测试保持快速：

```php
it('waits until ready', function() {
    Sleep::fake(); //[!code ++]
    
    // ...
});
```
当伪造 Sleep 类时，实际的执行暂停被绕过，从而导致测试速度大大加快。