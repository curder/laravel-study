# Stringable

字符串提供了更流畅、面向对象的接口来处理字符串值，允许使用比传统字符串操作更可读的语法将多个字符串操作链接在一起。

## `after()`

`after()` 方法返回字符串中给定值之后的所有内容。

如果字符串中不存在该值，则将返回整个字符串：

```php
use Illuminate\Support\Str;

Str::of('This is my name')->after('This is');
 
// ' my name'
```

## `afterLast()`

`afterLast()` 方法返回字符串中最后一个给定值之后的所有内容。

如果字符串中不存在该值，则将返回整个字符串：

```php
use Illuminate\Support\Str;

Str::of('App\Http\Controllers\Controller')->afterLast('\\');

// 'Controller'
```

## `apa()`

`apa()` 方法将字符串转换为标题大小写。

```php
use Illuminate\Support\Str;

Str::of('a nice title uses the correct case')->apa();

// A Nice Title Uses the Correct Case
```

## `append()`

`append()` 方法将给定的值附加到字符串的末尾。

```php
use Illuminate\Support\Str;

Str::of('Taylor')->append(' Otwell');

// 'Taylor Otwell'
```

## `ascii()`

`ascii()` 方法将字符串转换为 ASCII 字符串。

```php
use Illuminate\Support\Str;
 
Str::of('ü')->ascii();
 
// 'u'
```

## `basename()`

`basename()` 方法返回路径中的最后一个部分。

```php
use Illuminate\Support\Str;

Str::of('/foo/bar/baz')->basename();

// 'baz'
```

如果需要也可以提供一个删除的"文件扩展"：

```php
use Illuminate\Support\Str;

Str::of('/foo/bar/baz.jpg')->basename('.jpg');

// 'baz'
```

## `before()`

`before()` 方法返回字符串中给定值之前的所有内容。

```php
use Illuminate\Support\Str;

Str::of('This is my name')->before('my name');

// 'This is '
```

## `beforeLast()`

`beforeLast()` 方法返回字符串中最后一个给定值之前的所有内容。

```php
use Illuminate\Support\Str;

Str::of('This is my name')->beforeLast('is');

// 'This '
```

## `between()`

`between()` 方法返回字符串中两个给定值之间的所有内容。

```php
use Illuminate\Support\Str;

Str::of('This is my name')->between('This', 'name');

// ' is my '
```

## `betweenFirst()`

`betweenFirst()` 方法返回两个值之间字符串的最小可能部分。

```php
use Illuminate\Support\Str;

Str::of('[a] bc [d]')->betweenFirst('[', ']');

// 'a'
```

## `camel()`

`camel()` 方法将字符串转换为驼峰命名法。

```php
use Illuminate\Support\Str;

Str::of('foo_bar')->camel();

// 'fooBar'
```

## `charAt()`

`charAt()` 方法返回字符串中指定位置的字符。如果索引越界，则返回 `false`：

```php
use Illuminate\Support\Str;

Str::of('This is my name.')->charAt(6);

// 's'
```

## `classBasename()`


`classBasename()` 方法返回给定类的类名，并删除该类的命名空间：

```php
use Illuminate\Support\Str;

Str::of('Foo\Bar\Baz')->classBasename();

// 'Baz'
```

## `contains()`

`contains()` 方法检查字符串是否包含给定的子字符串。

```php
use Illuminate\Support\Str;

Str::of('This is my name')->contains('my');

// true
```

还可以传递一个值数组来确定给定字符串是否包含数组中的任何值：

```php
use Illuminate\Support\Str;

Str::of('This is my name')->contains(['my', 'foo']);

// true
```

## `containsAll()`

`containsAll()` 方法检查字符串是否包含给定的所有子字符串。

```php
use Illuminate\Support\Str;

Str::of('This is my name')->containsAll(['my', 'name']);

// true
```

## `dirname()`

`dirname()` 方法返回给定字符串的父目录部分。

```php
use Illuminate\Support\Str;

Str::of('/foo/bar/baz')->dirname();

// '/foo/bar'
```

如有必要，您可以指定要从字符串中删除的目录级别：

```php
use Illuminate\Support\Str;

Str::of('/foo/bar/baz')->dirname(2);

// '/foo'
```

## `excerpt()`

`excerpt()` 方法从字符串中提取与该字符串中短语的第一个实例匹配的摘录：

```php
use Illuminate\Support\Str;

$excerpt = Str::of('This is my name')->excerpt('my', [
    'radius' => 3
]);

// '...is my na...'
```

该 `radius` 选项默认为 `100`，允许定义截断字符串每一侧应出现的字符数。

此外也可以使用 `omission` 选项来更改将前置和附加到截断字符串的字符串：

```php
use Illuminate\Support\Str;

Str::of('This is my name')->excerpt('name', [
    'radius' => 3,
    'omission' => '(...) '
]);

// '(...) my name'
```

## `endsWith()`

`endsWith()` 方法确定给定字符串是否以给定值结尾：

```php
use Illuminate\Support\Str;

Str::of('This is my name')->endsWith('name');

// true
```

还可以传递一个值数组来确定给定字符串是否以数组中的任何值结尾：

```php
use Illuminate\Support\Str;

Str::of('This is my name')->endsWith(['name', 'foo']);

// true

Str::of('This is my name')->endsWith(['this', 'foo']);

// false
```

## `exactly`

`exactly()` 方法确定给定字符串是否与另一个字符串完全匹配：

```php
use Illuminate\Support\Str;

Str::of('Laravel')->exactly('Laravel');

// true
```

## `explode()`

`explode()` 方法按给定的分隔符分割字符串并返回包含分割字符串的每个部分的集合：

```php
use Illuminate\Support\Str;

Str::of('foo bar baz')->explode(' ');

// collect(['foo', 'bar', 'baz'])
```

## `finish()`

`finish()` 方法将给定值附加到字符串的末尾：

```php
use Illuminate\Support\Str;

Str::of('this/string')->finish('/');

// this/string/

Str::of('this/string/')->finish('/');

// this/string/
```

> 跟它功能相反的是 [start()](#start)。

## `fromBase64()`

`fromBase64()` 方法将 Base64 编码的字符串解码为原始字符串：

```php
use Illuminate\Support\Str;

Str::of('TGFyYXZlbA==')->fromBase64();

// Laravel
```

如果需要将字符串转换为 Base64 编码，可以使用 [toBase64()](#tobase64) 方法。

## `headline()`

`headline()` 方法会将由大小写、连字符或下划线分隔的字符串转换为空格分隔的字符串，每个单词的第一个字母大写：

```php
use Illuminate\Support\Str;

Str::of('taylor_otwell')->headline();

// Taylor Otwell

Str::of('EmailNotificationSent')->headline();

// Email Notification Sent
```

## `inlineMarkdown()`

`inlineMarkdown()` 方法将解析生成的内联 HTML，与 [`markdown`](#markdon) 方法不同的是，它不会将所有生成的 HTML 包装在块级元素中：

```php
use Illuminate\Support\Str;

Str::of('**Laravel**')->inlineMarkdown();

// <strong>Laravel</strong>
```

## `is()`

`is()` 方法确定给定字符串是否与给定模式匹配。


```php
use Illuminate\Support\Str;

Str::of('foobar')->is('foo*');

// true

Str::of('foobar')->is('baz*');

// false
```

> 星号可以用作通配符值。


##  `isAscii()`

`isAscii()` 方法确定给定字符串是否仅包含 ASCII 字符：

```php
use Illuminate\Support\Str;

Str::of('Taylor')->isAscii();

// true

Str::of('ü')->isAscii();

// false
```

## `isEmpty()`

`isEmpty()` 方法确定给定字符串是否为空：

```php
use Illuminate\Support\Str;

Str::of('  ')->trim()->isEmpty();

// true

Str::of('Laravel')->trim()->isEmpty();

// false
```

## `isNotEmpty()`

`isNotEmpty()` 方法确定给定字符串是否不为空：

```php
use Illuminate\Support\Str;

Str::of('  ')->trim()->isNotEmpty();

// false

Str::of('Laravel')->trim()->isNotEmpty();

// true
```

## `isJson()`

`isJson()` 方法确定给定字符串是否为有效的 JSON：

```php
use Illuminate\Support\Str;

Str::of('[1,2,3]')->isJson();

// true

Str::of('{"first": "John", "last": "Doe"}')->isJson();

// true

Str::of('{first: "John", last: "Doe"}')->isJson();

// false
```

## `isUlid()`

`isUlid()` 方法确定给定字符串是否为有效的 ULID：

```php
use Illuminate\Support\Str;

Str::of('01gd6r360bp37zj17nxb55yv40')->isUlid();

// true

Str::of('Taylor')->isUlid();

// false
```

## `isUrl()`

`isUrl()` 方法确定给定字符串是否为有效的 URL：

```php
use Illuminate\Support\Str;

$result = Str::of('https://example.com')->isUrl();

// true

$result = Str::of('Taylor')->isUrl();

// false
```

## `isUuid()`

`isUuid()` 方法确定给定字符串是否为有效的 UUID：

```php
use Illuminate\Support\Str;

Str::of('121f365a-5d00-4d67-863b-764a6ae95927')->isUuid();

// true

Str::of('Curder')->isUuid();

// false
```

## `kebab()`

`kebab()` 方法将字符串转换为 `kebab-case`：

```php
use Illuminate\Support\Str;

Str::of('fooBar')->kebab();

// foo-bar
```

## `lcfirst()`

`lcfirst()` 方法将字符串的第一个字符转换为小写：

```php
use Illuminate\Support\Str;

Str::of('Foo Bar')->lcfirst();

// foo Bar
```

## `length()`

`length()` 方法返回字符串的长度：

```php
use Illuminate\Support\Str;

Str::of('Laravel')->length();

// 7
```

## `limit()`

`limit()` 方法将给定字符串截断为指定长度：

```php
use Illuminate\Support\Str;

Str::of('The quick brown fox jumps over the lazy dog')->limit(20);

// The quick brown fox...
```

还可以传递第二个参数来更改将附加到截断字符串末尾的字符串：

```php
use Illuminate\Support\Str;

Str::of('The quick brown fox jumps over the lazy dog')->limit(20, ' (...)');

// The quick brown fox (...)
```

## `lower()`

`lower()` 方法将字符串转换为小写：

```php
use Illuminate\Support\Str;

$result = Str::of('LARAVEL')->lower();

// 'laravel'
```

## `ltrim()`

`ltrim()` 方法从字符串的开头删除给定的字符：

```php
use Illuminate\Support\Str;

Str::of('  Laravel  ')->ltrim();

// 'Laravel  '

Str::of('/Laravel/')->ltrim('/');

// 'Laravel/'
```

## `markdown()`

`markdown()` 方法将 GitHub 风格的 Markdown 转换为 HTML：

```php
use Illuminate\Support\Str;

Str::of('# Laravel')->markdown();

// <h1>Laravel</h1>

Str::of('# Taylor <b>Otwell</b>')->markdown([
    'html_input' => 'strip',
]);

// <h1>Taylor Otwell</h1>
```

## `mask()`

`mask()` 方法用重复字符屏蔽字符串的一部分，并且可用于混淆字符串片段，例如电子邮件地址和电话号码：

```php
use Illuminate\Support\Str;

Str::of('taylor@example.com')->mask('*', 3);

// tay***************
```

如果需要，可以提供负数作为该 `mask` 方法的第三个或第四个参数，这将指示该方法在距字符串末尾的给定距离处开始屏蔽：

```php
use Illuminate\Support\Str;

Str::of('taylor@example.com')->mask('*', -15, 3);

// tay***@example.com

Str::of('taylor@example.com')->mask('*', 4, -4);

// tayl**********.com
```

## `match()`

`match()` 方法将返回与给定正则表达式模式匹配的字符串部分：

```php
use Illuminate\Support\Str;

Str::of('foo bar')->match('/bar/');

// 'bar'

Str::of('foo bar')->match('/foo (.*)/');

// 'bar'
```

## `matchAll()`

`matchAll()` 方法将返回一个集合，其中包含与给定正则表达式模式匹配的字符串部分：

```php
use Illuminate\Support\Str;

Str::of('bar foo bar')->matchAll('/bar/');

// collect(['bar', 'bar'])
```

如果在表达式中指定匹配组，Laravel 将返回该组匹配的集合：

```php
use Illuminate\Support\Str;

Str::of('bar fun bar fly')->matchAll('/f(\w*)/');

// collect(['un', 'ly']);
```

如果没有找到匹配项，将返回一个空集合。

## `isMatch()`

`isMatch()` 方法将检查字符串是否与给定的正则表达式模式匹配。

如果字符串与给定的正则表达式匹配，方法将返回：`true`。

```php
use Illuminate\Support\Str;

Str::of('foo bar')->isMatch('/foo (.*)/');

// true

Str::of('laravel')->isMatch('/foo (.*)/');

// false
```

## `newLine()`

`newLine()` 方法将“行尾”字符附加到字符串：

```php
use Illuminate\Support\Str;

Str::of('Laravel')->newLine()->append('Framework');

// 'Laravel
//  Framework'
```

## `padBoth()`

`padBoth()` 方法将使用给定的字符填充字符串，直到达到指定的长度，它是 PHP [str_pad函数](https://www.php.net/manual/zh/function.str-pad.php) 的封装。

```php
use Illuminate\Support\Str;

Str::of('James')->padBoth(10, '_');

// '__James___'

Str::of('James')->padBoth(10);

// '  James   '
```

## `padLeft()`

`padLeft()` 方法将使用给定的字符填充字符串的左侧，直到达到指定的长度，它是 PHP [str_pad函数](https://www.php.net/manual/zh/function.str-pad.php) 的封装。

```php
use Illuminate\Support\Str;

Str::of('James')->padLeft(10, '-=');

// '-=-=-James'

Str::of('James')->padLeft(10);

// '     James'
```

## `padRight()`

`padRight()` 方法将使用给定的字符填充字符串的右侧，直到达到指定的长度，它是 PHP [str_pad函数](https://www.php.net/manual/zh/function.str-pad.php) 的封装。

```php
use Illuminate\Support\Str;

Str::of('James')->padRight(10, '-');

// 'James-----'

Str::of('James')->padRight(10);

// 'James     '
```

## `pipe()`

`pipe()` 方法允许您通过将字符串的当前值传递给给定的回调函数来转换字符串：

```php
use Illuminate\Support\Str;
use Illuminate\Support\Stringable;

Str::of('Laravel')->pipe('md5')->prepend('Checksum: ');

// 'Checksum: a5c95b86291ea299fcbe64458ed12702'

Str::of('foo')->pipe(fn (Stringable $str) => 'bar');

// 'bar'
```

## `plural()`

`plural()` 方法将返回字符串的复数形式。

```php
use Illuminate\Support\Str;

Str::of('car')->plural();

// cars
 
Str::of('child')->plural();

// children
```

也可以提供一个整数作为函数的第二个参数来检索字符串的单数或复数形式：

```php
use Illuminate\Support\Str;

Str::of('child')->plural(2);

// children

Str::of('child')->plural(1);

// child
```

## `position()`

`position()` 方法返回字符串中指定子字符串的第一个位置。

如果字符串中不存在子字符串，则返回：`false`。

```php

use Illuminate\Support\Str;

Str::of('Hello, World!')->position('Hello');

// 0

Str::of('Hello, World!')->position('W');

// 7
```

## `prepend()`

`prepend()` 方法将给定的子字符串添加到字符串的开头。


```php
use Illuminate\Support\Str;

Str::of('Framework')->prepend('Laravel ');

// Laravel Framework
```

## `remove()`

`remove()` 方法从字符串中删除给定的子字符串。

```php
use Illuminate\Support\Str;

Str::of('Arkansas is quite beautiful!')->remove('quite');

// Arkansas is beautiful!
```

还可以将 `false` 作为第二个参数传递，以在删除字符串时忽略大小写。


## `repeat()`

`repeat()` 方法将返回字符串的重复形式。

```php
use Illuminate\Support\Str;

Str::of('a')->repeat(5);

// aaaaa
```

## `replace()`

`replace()` 方法替换字符串中的给定字符串：

```php
use Illuminate\Support\Str;
 
$replaced = Str::of('Laravel 10.x')->replace('10.x', 'master');
 
// Laravel master
```

`replace()` 方法还接受一个 `caseSensitive` 参数。默认情况下，`replace()` 方法区分大小写：

```php
Str::of('macOS 14.x')->replace(
    'macOS', 'iOS', caseSensitive: false
);

// iOS 14.x
```

## `replaceArray()`

`replaceArray()` 方法使用数组顺序替换字符串中的给定值：

````php
use Illuminate\Support\Str;

$string = 'The event will take place between ? and ?';

Str::of($string)->replaceArray('?', ['8:30', '9:00']);

// The event will take place between 8:30 and 9:00
````

## `replaceFirst()`

`replaceFirst()` 方法替换字符串中第一次出现的给定值：

```php
use Illuminate\Support\Str;

Str::of('the quick brown fox jumps over the lazy dog')->replaceFirst('the', 'a');

// a quick brown fox jumps over the lazy dog
```

## `replaceLast()`

`replaceLast()` 方法替换字符串中最后一次出现的给定值：

```php
use Illuminate\Support\Str;

Str::of('the quick brown fox jumps over the lazy dog')->replaceLast('the', 'a');

// the quick brown fox jumps over a lazy dog
```


## `replaceMatches()`

`replaceMatches()` 方法用给定的替换字符串替换与模式匹配的字符串的所有部分：

```php
use Illuminate\Support\Str;

Str::of('(+1) 501-555-1000')->replaceMatches('/[^A-Za-z0-9]++/', '')

// '15015551000'
```


`replaceMatches` 方法还接受一个闭包，该闭包将被与给定模式匹配的字符串的每个部分调用，从而允许在闭包内执行替换逻辑并返回替换的值：

```php
use Illuminate\Support\Str;

Str::of('123')->replaceMatches('/\d/', fn (array $matches) => '['.$matches[0].']');

// '[1][2][3]'
```

## `replaceStart()`

`replaceStart()` 方法仅当给定值出现在字符串开头时，该方法才会替换第一次出现的给定值：

```php
use Illuminate\Support\Str;

Str::of('Hello World')->replaceStart('Hello', 'Laravel');

// Laravel World

Str::of('Hello World')->replaceStart('World', 'Laravel');

// Hello World
```

## `replaceEnd()`

`replaceEnd()` 方法仅当给定值出现在字符串结尾时，该方法才会替换最后一次出现的给定值：

```php
use Illuminate\Support\Str;

Str::of('Hello World')->replaceEnd('World', 'Laravel');

// Hello Laravel

Str::of('Hello World')->replaceEnd('Hello', 'Laravel');

// Hello World
```

## `rtrim()`

`rtrim()` 方法从字符串的右侧删除给定值：

```php
use Illuminate\Support\Str;

Str::of('  Laravel  ')->rtrim();

// '  Laravel'

Str::of('/Laravel/')->rtrim('/');

// '/Laravel'
```

## `scan()`

`scan()` 方法方法根据 PHP 函数 [sscanf](https://www.php.net/manual/zh/function.sscanf.php) 支持的格式将字符串中的输入解析为集合：

```php
use Illuminate\Support\Str;

Str::of('filename.jpg')->scan('%[^.].%s');

// collect(['filename', 'jpg'])
```

## `singular()`

`singular()` 方法将字符串的复数形式转换为其单数形式：

```php
use Illuminate\Support\Str;

Str::of('cars')->singular();

// car

Str::of('children')->singular();

// child
```

## `slug()`

`slug()` 方法将字符串转换为 URL 友好的格式：

```php
use Illuminate\Support\Str;

Str::of('Laravel Framework')->slug('-');

// laravel-framework
```

## `snake()`

`snake()` 方法将字符串转换为 `snake_case` 格式：

```php
use Illuminate\Support\Str;

Str::of('fooBar')->snake();

// foo_bar
```

## `split()`

`split()` 方法使用正则表达式将字符串拆分为集合：

```php
use Illuminate\Support\Str;

Str::of('one, two, three')->split('/[\s,]+/');

// collect(["one", "two", "three"])
```

## `squish()`

`squish()` 方法删除字符串前后的空格，包括单词之间的无关空格：

```php
use Illuminate\Support\Str;

Str::of('    hello     world    ')->squish();

// hello world 
```

## `start()`

如果给定值尚未以该值开头，`start()` 方法会将给定值的单个实例添加到字符串中：

```php
use Illuminate\Support\Str;

Str::of('this/string')->start('/');

// /this/string

Str::of('/this/string')->start('/');

// /this/string
```

## `startsWith()`

`startsWith()` 方法检查字符串是否以给定值开头：

```php
use Illuminate\Support\Str;

Str::of('This is my name')->startsWith('This');

// true
```

## `stripTags()`

`stripTags()` 方法从字符串中删除 HTML 和 PHP 标记：

```php
use Illuminate\Support\Str;

$string = '<a href="https://laravel.com">Taylor <b>Otwell</b></a>';

Str::of($string)->stripTags();

// Taylor Otwell

Str::of($string)->stripTags('<b>');

// Taylor <b>Otwell</b>
```

## `studly()`

`studly()` 方法将字符串转换为 `StudlyCaps` 格式：

```php
use Illuminate\Support\Str;

Str::of('foo_bar')->studly();

// FooBar
```

## `substr()`

`substr()` 方法返回由给定 `start` 和 `length` 参数指定的字符串部分：

```php
use Illuminate\Support\Str;

Str::of('Laravel Framework')->substr(8);

// Framework

Str::of('Laravel Framework')->substr(8, 5);

// Frame
```

## `substrReplace()`

`substrReplace()` 方法替换字符串一部分中的文本，从第二个参数指定的位置开始，替换第三个参数指定的字符数。

传递 `0` 给该方法的第三个参数将在指定位置插入字符串，而不替换字符串中的任何现有字符：

```php
use Illuminate\Support\Str;

Str::of('1300')->substrReplace(':', 2);

// 13:

Str::of('The Framework')->substrReplace(' Laravel', 3, 0);

// The Laravel Framework
```

## `swap()`

`swap()` 方法方法使用 PHP 的 [strtr函数](https://www.php.net/manual/zh/function.strtr.php) 替换字符串中的多个值：

```php
use Illuminate\Support\Str;

Str::of('Tacos are great!')
    ->swap([
        'Tacos' => 'Burritos',
        'great' => 'fantastic',
    ]);

// Burritos are fantastic!
```

## `take()`

`take()` 方法返回字符串中指定数量的字符：

```php
use Illuminate\Support\Str;

Str::of('Build something amazing!')->take(5);

// Build
```

## `tap()`

`tap()` 方法将字符串传递给给定的闭包，允许检查字符串并与字符串交互，同时不影响字符串本身。

无论闭包返回什么，该 `tap()` 方法都会返回原始字符串：

```php
use Illuminate\Support\Str;
use Illuminate\Support\Stringable;

$string = Str::of('Laravel')
    ->append(' Framework')
    ->tap(function (Stringable $string) {
        dump('String after append: '.$string);
    })
    ->upper();

// LARAVEL FRAMEWORK
```

## `test()`

`test()` 方法使用正则表达式测试字符串：

```php
use Illuminate\Support\Str;

Str::of('Laravel Framework')->test('/Laravel/');

// true
```

## `title()`

`title()` 方法将字符串转换为标题大小写：

```php
use Illuminate\Support\Str;

Str::of('a nice title uses the correct case')->title();

// A Nice Title Uses The Correct Case
```

## `toBase64()`

`toBase64()` 方法将字符串转换为 Base64 编码：

```php
use Illuminate\Support\Str;

Str::of('Laravel')->toBase64();

// TGFyYXZlbA==
```

如果需要将 Base64 编码转换回原始字符串，可以使用 [`fromBase64()`](#frombase64) 方法。

## `trim()`

`trim()` 方法修剪给定的字符串：

```php
use Illuminate\Support\Str;

Str::of('  Laravel  ')->trim();

// 'Laravel'

Str::of('/Laravel/')->trim('/');

// 'Laravel'
```

## `ucfirst()`

`ucfirst()` 方法将字符串的第一个字符转换为大写：

```php
use Illuminate\Support\Str;

Str::of('foo bar')->ucfirst();

// Foo bar
```

## `ucsplit()`

`ucsplit()` 方法将给定的字符串按大写字符拆分为一个集合：

```php
use Illuminate\Support\Str;

Str::of('Foo Bar')->ucsplit();

// collect(['Foo', 'Bar'])
```

## `unwrap()`

`unwrap()` 方法从给定字符串的开头和结尾删除指定的字符串：

```php
use Illuminate\Support\Str;

Str::of('-Laravel-')->unwrap('-');

// Laravel

Str::of('{framework: "Laravel"}')->unwrap('{', '}');

// framework: "Laravel"
```

## `upper()`

`upper()` 方法将字符串转换为大写：

```php
use Illuminate\Support\Str;

Str::of('laravel')->upper();

// LARAVEL
```

## `when()`

`when()` 方法检查给定的条件，如果条件为真，则执行给定的闭包：

```php
use Illuminate\Support\Str;
use Illuminate\Support\Stringable;

Str::of('Taylor')
        ->when(true, fn (Stringable $string) => $string->append(' Otwell'));

// 'Taylor Otwell'
```

如有必要，可以将另一个闭包作为第三个参数传递给该 `when` 方法。如果条件参数的计算结果为 `false`时执行此闭包。

## `whenContains()`

`whenContains()` 方法检查给定的字符串是否包含给定的子字符串，如果包含，则执行给定的闭包：
```php
use Illuminate\Support\Str;
use Illuminate\Support\Stringable;
 
Str::of('tony stark')
        ->whenContains('tony', fn (Stringable $string) => $string->title());
 
// 'Tony Stark'
```

也可以将另一个闭包作为第三个参数传递给 `when()` 方法。如果字符串不包含给定值，则将执行此闭包。

也还可以传递一个值数组来确定给定字符串是否包含数组中的任何值：

```php
use Illuminate\Support\Str;
use Illuminate\Support\Stringable;

Str::of('tony stark')
        ->whenContains(['tony', 'hulk'], fn (Stringable $string) => $string->title());

// Tony Stark
```

## `whenContainsAll()`

`whenContainsAll()` 方法检查给定的字符串是否包含给定的子字符串数组中的所有值，如果包含，则执行给定的闭包：

```php
use Illuminate\Support\Str;
use Illuminate\Support\Stringable;

Str::of('tony stark')
        ->whenContainsAll(['tony', 'stark'], fn (Stringable $string) => $string->title());

// 'Tony Stark'
```

如有必要，可以将另一个闭包作为第三个参数传递给该 `when` 方法。如果条件参数的计算结果为 `false`，则将执行此闭包。

## `whenEmpty()`

`whenEmpty()` 方法检查给定的字符串是否为空，如果为空，则执行给定的闭包：

```php
use Illuminate\Support\Str;
use Illuminate\Support\Stringable;

Str::of('  ')
        ->whenEmpty(fn (Stringable $string) => $string->trim()->prepend('Laravel'));

// 'Laravel'
```

## `whenNotEmpty()`

`whenNotEmpty()` 方法检查给定的字符串是否不为空，如果不为空，则执行给定的闭包：

```php
use Illuminate\Support\Str;
use Illuminate\Support\Stringable;

Str::of('Framework')
        ->whenNotEmpty(fn (Stringable $string) => $string->prepend('Laravel '));

// 'Laravel Framework'
```

## `whenStartsWith()`

`whenStartsWith()` 方法检查给定的字符串是否以给定的子字符串开头，如果以给定的子字符串开头，则执行给定的闭包：

```php
use Illuminate\Support\Str;
use Illuminate\Support\Stringable;

Str::of('disney world')
    ->whenStartsWith('disney', fn (Stringable $string) => $string->title());

// 'Disney World'
```

## `whenEndsWith()`

`whenEndsWith()` 方法检查给定的字符串是否以给定的子字符串结尾，如果以给定的子字符串结尾，则执行给定的闭包：

```php
use Illuminate\Support\Str;
use Illuminate\Support\Stringable;

Str::of('disney world')
        ->whenEndsWith('world', fn (Stringable $string) => $string->title());

// 'Disney World'
```

## `whenExactly()`

`whenExactly()` 方法检查给定的字符串是否与给定的子字符串完全匹配，如果完全匹配，则执行给定的闭包：

```php
use Illuminate\Support\Str;
use Illuminate\Support\Stringable;

Str::of('laravel')
        ->whenExactly('laravel', fn (Stringable $string) => $string->title());

// 'Laravel'
```

## `whenNotExactly()`

`whenNotExactly()` 方法检查给定的字符串是否与给定的子字符串完全匹配，如果不完全匹配，则执行给定的闭包：

```php
use Illuminate\Support\Str;
use Illuminate\Support\Stringable;

Str::of('framework')
        ->whenNotExactly('laravel', fn (Stringable $string) => $string->title());

// 'Framework'
```

## `whenIs()`

`whenIs()` 方法检查给定的字符串是否与给定的子字符串完全匹配，如果完全匹配，则执行给定的闭包：

```php
use Illuminate\Support\Str;
use Illuminate\Support\Stringable;
 
Str::of('foo/bar')
        ->whenIs('foo/*', fn (Stringable $string) => $string->append('/baz'));
 
// 'foo/bar/baz'
```

> 星号可以用作通配符值。

## `whenIsAscii()`

`whenIsAscii()` 方法检查给定的字符串是否是 ASCII 编码，如果是，则执行给定的闭包：

```php
use Illuminate\Support\Str;
use Illuminate\Support\Stringable;

Str::of('laravel')
        ->whenIsAscii(fn (Stringable $string) => $string->title());

// 'Laravel'
```

## `whenIsUlid()`

`whenIsUlid()` 方法检查给定的字符串是否是 ULID 编码，如果是，则执行给定的闭包：

```php
use Illuminate\Support\Str;
 
Str::of('01HQ03ATCZVYS8H1DDXBH7RVSK')
    ->whenIsUlid(fn (Stringable $string) => $string->substr(0, 8));
 
// '01HQ03AT'
```

## `whenIsUuid()`

`whenIsUuid()` 方法检查给定的字符串是否是 UUID 编码，如果是，则执行给定的闭包：

```php
use Illuminate\Support\Str;
use Illuminate\Support\Stringable;

Str::of('80eed2f1-cf28-46de-b597-a492b38414da')
        ->whenIsUuid(fn (Stringable $string) => $string->substr(0, 8));

// '80eed2f1'
```

## `whenTest()`

`whenTest()` 方法检查给定的字符串是否与给定的正则表达式匹配，如果匹配，则执行给定的闭包：

```php
use Illuminate\Support\Str;
use Illuminate\Support\Stringable;
 
Str::of('laravel framework')
        ->whenTest('/laravel/', fn (Stringable $string) => $string->title());
 
// 'Laravel Framework'
```

## `wordCount()`

`wordCount()` 方法返回字符串中的单词数：

```php
use Illuminate\Support\Str;

Str::of('Hello, world!')->wordCount();

// 2
```


## `words()`

`words()` 方法限制字符串中的单词数。

也可以指定一个附加字符串，将其附加到截断的字符串中：

```php
use Illuminate\Support\Str;

Str::of('Perfectly balanced, as all things should be.')
        ->words(3, ' >>>');

// Perfectly balanced, as >>>
```


