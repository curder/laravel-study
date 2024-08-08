# Strings

Laravel 包含各种用于操作字符串值的函数。 其中许多函数由框架本身使用，也可以在自己的应用程序中自由使用它们。

## `Str::after()`

`Str::after()` 方法返回字符串中给定值之后的所有内容。如果字符串中不存在该值，则将返回整个字符串：

```php
use Illuminate\Support\Str;

Str::after('This is my name', 'This is'); // ' my name'
```

## `Str::afterLast()`

`Str::afterLast()` 方法返回字符串中最后一个给定值之后的所有内容。如果字符串中不存在该值，则将返回整个字符串：

```php
use Illuminate\Support\Str;

Str::afterLast('App\Http\Controllers\Controller', '\\'); // 'Controller'
```

## `Str::apa()`

`Str::apa()` 方法按照 [APA 指南](https://apastyle.apa.org/style-grammar-guidelines/capitalization/title-case) 将给定字符串转换为标题大小写。

```php
use Illuminate\Support\Str;

Str::apa('Creating A Project'); // 'Creating a Project'
```

## `Str::ascii()`

`Str::ascii()` 方法将尝试将字符串转写为 ASCII 值：

```php
use Illuminate\Support\Str;

Str::ascii('û'); // 'u'
```

## `Str::before()`

`Str::before()` 方法返回字符串中给定值之前的所有内容。如果字符串中不存在该值，则将返回整个字符串：

```php
use Illuminate\Support\Str;

Str::before('This is my name', 'my name'); // 'This is '
```

## `Str::beforeLast()`

`Str::beforeLast()` 方法返回字符串中最后一个给定值之前的所有内容。如果字符串中不存在该值，则将返回整个字符串：

```php
use Illuminate\Support\Str;

Str::beforeLast('This is my name', 'is'); // 'This '
```

## `Str::between()`

`Str::between()` 方法返回字符串中两个给定值之间的所有内容。如果字符串中不存在这两个值，则将返回空字符串：

```php
use Illuminate\Support\Str;

Str::between('This is my name', 'This', 'name'); // ' is my '
```

## `Str::betweenFirst()`

`Str::betweenFirst()` 方法返回两个值之间字符串的最小可能部分。如果字符串中不存在这两个值，则将返回空字符串：

```php
use Illuminate\Support\Str;

Str::betweenFirst('[a] bc [d]', '[', ']'); // 'a'
```

## `Str::camel()`

`Str::camel()` 方法将字符串转换为驼峰大小写格式。

```php
use Illuminate\Support\Str;
 
Str::camel('foo_bar'); // 'fooBar'
```

## `Str::charAt()`

`Str::charAt()` 方法返回字符串中指定位置的字符：

```php
use Illuminate\Support\Str;

Str::charAt('This is my name.', 6); // 's'
```

## `Str::contains()`

`Str::contains()` 方法区分大小写检查给定的字符串是否包含在调用该方法的原始字符串中。

- 查询字符串
    ```php
    use Illuminate\Support\Str;

    Str::contains('This is my name', 'my'); // true
    ```

- 查询数组
    ```php
    use Illuminate\Support\Str;

    Str::contains('This is my name', ['my', 'foo']); // true
    ```

## `Str::containsAll()`

`Str::containsAll()` 方法检查给定的字符串是否包含在调用该方法的原始字符串中的所有值。

```php
use Illuminate\Support\Str;

Str::containsAll('This is my name', ['my', 'name']); // true
```

## `Str::endsWith()`

`Str::endsWith()` 方法检查给定的字符串是否以调用该方法的原始字符串的最后一个字符串结尾。

```php
use Illuminate\Support\Str;

Str::endsWith('This is my name', 'name'); // true
```

还可以传递一个值数组来确定给定字符串是否以数组中的任何值结尾：

```php
use Illuminate\Support\Str;

Str::endsWith('This is my name', ['name', 'foo']); // true

Str::endsWith('This is my name', ['this', 'foo']); // false
```

## `Str::excerpt()`

`Str::excerpt()` 方法从给定字符串中提取与该字符串中短语的第一个实例匹配的摘录：

```php
use Illuminate\Support\Str;

Str::excerpt('This is my name', 'my', [
    'radius' => 3
]);
// '...is my na...'
```

该 radius 选项默认为 100，允许定义截断字符串每一侧应出现的字符数。

此外也可以使用 `omission` 参数来定义将前置和附加到截断字符串的字符串：

```php
use Illuminate\Support\Str;

$excerpt = Str::excerpt('This is my name', 'name', [
    'radius' => 3,
    'omission' => '(...) '
]);
// '(...) my name'
```

## `Str::finish()`

`Str::finish()` 方法将给定的字符串与调用该方法的原始字符串的最后一个字符串连接起来。

```php
use Illuminate\Support\Str;

Str::finish('this/string', '/'); // this/string/

Str::finish('this/string/', '/'); // this/string/
```

> 跟它功能相反的是 [Str::start()](#str-start)。

## `Str::fromBase64()`

`Str::fromBase64()` 方法将给定的 Base64 编码字符串解码为普通字符串。

```php
use Illuminate\Support\Str;

Str::fromBase64('TGFyYXZlbA==');

// Laravel
```

如果需要将字符串转换为 Base64 编码，可以使用 [Str::toBase64()](#str-tobase64) 方法。


## `Str::headline()`

`Str::headline()` 方法会将由大小写、连字符或下划线分隔的字符串转换为空格分隔的字符串，每个单词的第一个字母大写。

```php
use Illuminate\Support\Str;

Str::headline('steve_jobs'); // Steve Jobs

Str::headline('EmailNotificationSent'); // Email Notification Sent
```

## `Str::inlineMarkdown()`

`Str::inlineMarkdown()` 方法将解析并转换 Markdown 格式的字符串为 HTML。

该方法与 [`markdown`](#str-markdown)  方法不同的是，它不会将所有生成的 HTML 包装在块级元素中。

```php
use Illuminate\Support\Str;

Str::inlineMarkdown('**Laravel**'); // <strong>Laravel</strong>
```

## `Str::is()`

`Str::is()` 方法用于检查给定的字符串是否与给定的模式匹配。

```php
use Illuminate\Support\Str;

Str::is('foo*', 'foobar'); // true
Str::is('baz*', 'foobar'); // false
```

## `Str::isAscii()`

`Str::isAscii()` 方法用于检查给定的字符串是否只包含 [ASCII 字符](https://ninecents.github.io/utils/ASCII%E7%A0%81%E5%AF%B9%E7%85%A7%E8%A1%A8.html)。

```php
use Illuminate\Support\Str;

Str::isAscii('Taylor'); // true
Str::isAscii('ü'); // false
```

## `Str::isJson()`

`Str::isJson()` 方法用于检查给定的字符串是否是有效的 JSON。

```php
use Illuminate\Support\Str;

Str::isJson('[1,2,3]'); // true

Str::isJson('{"first": "John", "last": "Doe"}'); // true

Str::isJson('{first: "John", last: "Doe"}'); // false
```

## `Str::isUrl()`

`Str::isUrl()` 方法用于检查给定的字符串是否是有效的 URL。

```php
use Illuminate\Support\Str;

Str::isUrl('https://example.com'); // true

Str::isUrl('laravel'); // false
```

## `Str::isUlid()`

`Str::isUlid()` 方法用于检查给定的字符串是否是有效的 ULID。

```php
use Illuminate\Support\Str;

Str::isUlid('01gd6r360bp37zj17nxb55yv40'); // true
 
Str::isUlid('laravel'); // false
```

如果需要生成 ulid 都可以使用 [`Str::ulid()`](#str-ulid) 方法进行生成。

## `Str::isUuid()`

`Str::isUuid()` 方法用于检查给定的字符串是否是有效的 UUID。

```php
use Illuminate\Support\Str;

Str::isUuid('fd1bf028-635b-4a1a-ada9-4b331465cf0f'); // true

Str::isUuid('laravel'); // false
```

如果需要生成 uuid 都可以使用 [`Str::uuid()`](#str-uuid) 方法进行生成。

## `Str::kebab()`

`Str::kebab()` 方法用于将给定的字符串转换为 kebab 格式。

```php
use Illuminate\Support\Str;

Str::kebab('fooBar'); // foo-bar
```

## `Str::lcfirst()`

`Str::lcfirst()` 方法用于将给定的字符串的第一个字符转换为小写。

```php
use Illuminate\Support\Str;

Str::lcfirst('Foo Bar'); // foo Bar
```

## `Str::length()`

`Str::length()` 方法用于获取给定字符串的长度。

```php
use Illuminate\Support\Str;

Str::length('Laravel'); // 7
```

## `Str::limit()`

`Str::limit()` 方法用于限制给定字符串的长度。

```php
use Illuminate\Support\Str;

Str::limit('The quick brown fox jumps over the lazy dog', 20);
// The quick brown fox...
```

可以将第三个参数传递给该方法来更改将附加到截断字符串末尾的字符串：

```php
use Illuminate\Support\Str;

Str::limit('The quick brown fox jumps over the lazy dog', 20, ' (...)');
// The quick brown fox (...)
```

## `Str::lower()`

`Str::lower()` 方法用于将给定字符串转换为小写。

```php
use Illuminate\Support\Str;

Str::lower('LARAVEL'); // laravel
```

## `Str::markdown()`

`Str::markdown()` 方法用于将给定的字符串转换为 Markdown 格式。

```php
use Illuminate\Support\Str;

Str::markdown('**Laravel**'); // <p><strong>Laravel</strong></p>

Str::markdown('# Hello <b>world</b>', [
    'html_input' => 'strip',
]);
// <h1>Hello world</h1>
```

> 该方法与 [inlineMarkdown](#str-inlinemarkdown) 方法不同的是，它会将所有生成的 HTML 包装在块级元素中。

markdown 方法的第二个参数支持一些选项，比如: `html_input`、`allow_unsafe_links`、`max_nesting_level`等，更多自定义选项可以[查看源代码](https://github.com/thephpleague/commonmark/blob/2.4/src/Environment/Environment.php#L429)。


## `Str::mask()`

`Str::mask()` 方法用于重复字符屏蔽字符串的一部分，并且可用于混淆字符串片段，例如电子邮件地址和电话号码。

```php
use Illuminate\Support\Str;

$string = 'curder@example.com';

Str::mask($string, '*', 3); // cur***************

Str::mask($string, '*', Str::length(Str::before($string, '@')));
// curder************
```

也可以提供一个负数作为 `mask` 方法的第三个参数，这将指示该方法在距字符串末尾的给定距离处开始屏蔽：
```php
use Illuminate\Support\Str;

Str::mask('curder@example.com', '*', -15, 3); // cur***@example.com
```

## `Str::orderedUuid()`

`Str::orderedUuid()` 方法用于生成一个有序的 UUID。

使用此方法生成的每个 UUID 将排序在之前使用该方法生成的 UUID 之后：

```php
use Illuminate\Support\Str;

(string) Str::orderedUuid();
```

## `Str::padBoth()`

`Str::padBoth()` 方法用于使用另一个字符串填充字符串的两侧，直到达到指定的长度。

```php
use Illuminate\Support\Str;

Str::padBoth('James', 10, '_'); // '__James___'

Str::padBoth('James', 10); // '  James   '
```

> 它是 PHP 的 [`str_pad`](https://www.php.net/manual/en/function.str-pad.php) 函数的封装。

## `Str::padLeft`

`Str::padLeft()` 方法用于使用另一个字符串填充字符串的左侧，直到达到指定的长度。

```php
use Illuminate\Support\Str;
 
Str::padLeft('James', 10, '-='); // '-=-=-James'
Str::padLeft('James', 10); // '     James'
```

## `Str::padRight()`

`Str::padRight()` 方法用于使用另一个字符串填充字符串的右侧，直到达到指定的长度。

```php
use Illuminate\Support\Str;

Str::padRight('James', 10, '-'); // 'James-----'

Str::padRight('James', 10); // 'James     '
```

## `Str::password()`

`Str::password()` 方法用于生成一个随机的密码。密码将由字母、数字、符号和空格的组合组成。默认情况下，密码长度为 32 个字符：

```php
use Illuminate\Support\Str;

Str::password(); // 'MU^Y(;%f()^FCK>BzT10-OXFr5R0Dsot'

Str::password(12); // 'ZUv8:mGJYj9T'
```

## `Str::plural()`

`Str::plural()` 方法用于获取指定字符串的复数形式。

```php
use Illuminate\Support\Str;

Str::plural('car'); // cars

Str::plural('child'); // children
```

可以提供一个整数作为函数的第二个参数来检索字符串的单数或复数形式：

```php
use Illuminate\Support\Str;

Str::plural('child', 2); // children

Str::plural('child', 1); // child
```

## `Str::pluralStudly()`

`Str::pluralStudly()` 方法将采用大写字母格式的单数字符串转换为其复数形式。

```php
use Illuminate\Support\Str;

Str::pluralStudly('VerifiedHuman'); // VerifiedHumans

Str::pluralStudly('UserFeedback'); // UserFeedback
```

可以提供一个整数作为函数的第二个参数来检索字符串的单数或复数形式：

```php
use Illuminate\Support\Str;

Str::pluralStudly('VerifiedHuman', 2); // VerifiedHumans

Str::pluralStudly('VerifiedHuman', 1); // VerifiedHuman
```

## `Str::position()`

`Str::position()` 方法用于确定字符串中指定字符串的起始位置。

如果给定字符串中不存在子字符串，则返回 `false`：

```php
use Illuminate\Support\Str;

Str::position('Hello, World!', 'Hello'); // 0

Str::position('Hello, World!', 'W'); // 7
```

## `Str::random()`

`Str::random()` 方法用于生成一个随机的字符串。该函数使用了 PHP 的 [random_bytes 函数](https://www.php.net/manual/zh/function.random-bytes.php)。

```php
use Illuminate\Support\Str;

Str::random(); // RYfqnrf80GxmgFBv

Str::random(40); // p4YUaQIFIuv2UNuOqaGIqiD7CQO2CA5Kx27OG8qY
```

## `Str::remove()`

`Str::remove()` 方法用于从字符串中移除指定的字符串。

也可以将 `false` 传递给第三个参数，用来在删除字符串时忽略大小写。

```php
use Illuminate\Support\Str;

$string = 'Peter Piper picked a peck of pickled peppers.';

Str::remove('e', $string); 
// Ptr Pipr pickd a pck of pickld ppprs.
```

## `Str::repeat()`

`Str::repeat()` 方法用于重复一个字符串若干次。

```php
use Illuminate\Support\Str;

Str::repeat('a', 5); // aaaaa
```

## `Str::replace()`

`Str::replace()` 方法用于在字符串中替换指定的字符串。

```php
use Illuminate\Support\Str;

$string = 'Laravel 10.x';

Str::replace('10.x', 'master', $string); // Laravel master
```

该方法还接受一个 `caseSensitive` 参数用于配置替换时是否区分大小写。默认情况下，该 `replace` 方法区分大小写：

```php
use Illuminate\Support\Str;

$string = 'Laravel 10.x';

Str::replace('10.X', 'master', $string, caseSensitive: false); // Laravel master
```

## `Str::replaceArray()`

`Str::replaceArray()` 方法使用数组顺序替换字符串中的给定值。

```php
use Illuminate\Support\Str;
 
$string = 'The event will take place between ? and ?';
 
Str::replaceArray('?', ['8:30', '9:00'], $string);
// The event will take place between 8:30 and 9:00
```


## `Str::replaceFirst()`

`Str::replaceFirst()` 方法用于在字符串中替换第一个匹配到的字符串。

```php
use Illuminate\Support\Str;

$string = 'The quick brown fox jumps over the lazy dog';

Str::replaceFirst('The', 'A', $string); 
// a quick brown fox jumps over the lazy dog
```

## `Str::replaceLast()`

`Str::replaceLast()` 方法用于在字符串中替换最后一个匹配到的字符串。

```php
use Illuminate\Support\Str;

$string = 'The quick brown fox jumps over the lazy dog';

Str::replaceLast('the', 'a', $string);
// The quick brown fox jumps over a lazy dog
```

## `Str::replaceMatches()`

`Str::replaceMatches()` 方法用于在字符串中替换所有匹配到的字符串。

```php
use Illuminate\Support\Str;

Str::replaceMatches(
    pattern: '/[^A-Za-z0-9]++/',
    replace: '',
    subject: '(+1) 501-555-1000'
)
// '15015551000'
```

`replaceMatches()` 方法还接受一个闭包，该闭包将被与给定模式匹配的字符串的每个部分调用，从而允许您在闭包内执行替换逻辑并返回替换的值：


```php
use Illuminate\Support\Str;

Str::replaceMatches(
    '/\d/', 
    fn (array $matches) => '['.$matches[0].']',
    '123'
);

// '[1][2][3]'
```

## `Str::replaceStart()`

`Str::replaceStart()` 方法用于在字符串中替换开头部分。

```php
use Illuminate\Support\Str;
 
Str::replaceStart('Hello', 'Laravel', 'Hello World'); // Laravel World
 
Str::replaceStart('World', 'Laravel', 'Hello World'); // Hello World
```

## `Str::replaceEnd()`

`Str::replaceEnd()` 方法用于在字符串中替换结尾部分。

```php
use Illuminate\Support\Str;

Str::replaceEnd('World', 'Laravel', 'Hello World'); // Hello Laravel

Str::replaceEnd('Hello', 'Laravel', 'Hello World'); // Hello World
```

## `Str::reverse()`

`Str::reverse()` 方法用于反转字符串。

```php
use Illuminate\Support\Str;

Str::reverse('Hello World'); // dlroW olleH
```

## `Str::singular()`

`Str::singular()` 方法用于将字符串转换为单数形式。

```php
use Illuminate\Support\Str;
 
Str::singular('cars'); // car
 
Str::singular('children'); // child
```

它正好与 [`Str::plural()`](#str-plural) 的功能相反。


## `Str::slug()`

`Str::slug()` 方法用于生成 URL 友好的字符串。

```php
use Illuminate\Support\Str;

Str::slug('Laravel Framework', '-'); // laravel-framework
```


## `Str::snake()`

`Str::snake()` 方法用于将字符串转换为蛇形命名。

```php
use Illuminate\Support\Str;

Str::snake('fooBar'); // foo_bar

Str::snake('fooBar', '-'); // foo-bar
```

## `Str::squish()`

`Str::squish()` 方法从字符串中删除所有无关的空格，包括单词之间的无关空格。

```php
use Illuminate\Support\Str;

Str::squish(' laravel  framework '); // laravel framework
```

## `Str::start()`

`Str::start()` 方法用于在字符串中替换开头部分。

如果给定值尚未以该值开头，该方法会将给定值的单个实例添加到字符串中。

```php
use Illuminate\Support\Str;

Str::start('this/string', '/'); // /this/string

Str::start('/this/string', '/'); // /this/string
```

> 跟它功能相反的是 [Str::finish()](#str-finish)。


## `Str::startsWith()`

`Str::startsWith()` 方法用于检查字符串是否以给定值开头。

```php
use Illuminate\Support\Str;

Str::startsWith('This is my name', 'This'); // true
```

如果传递可能值的数组，并且字符串以任何给定值开头，则该 `startsWith` 方法将返回：`true`， 否则返回 `false`。

```php
use Illuminate\Support\Str;

Str::startsWith('This is my name', ['This', 'That', 'There']); // true
```

## `Str::studly()`

`Str::studly()` 方法用于将字符串转换为 `StudlyCaps` 命名。

```php
use Illuminate\Support\Str;

Str::studly('foo_bar'); // FooBar
```


## `Str::substr()`

`Str::substr()` 方法用于从字符串中获取子字符串。

```php
use Illuminate\Support\Str;

Str::substr('The Laravel Framework', 4, 7); // Laravel
```

## `Str::substrCount()`



`Str::substrCount()` 方法用于计算指定字符串在原字符串中出现的次数。

```php
use Illuminate\Support\Str;
 
$string = 'If you like ice cream, you will like snow cones';
Str::substrCount($string, 'like'); // 2
```

## `Str::substrReplace()`

`Str::substrReplace()` 方法替换字符串一部分中的文本，从第三个参数指定的位置开始，替换第四个参数指定的字符数。

传递 `0` 给该方法的第四个参数将在指定位置插入字符串，而不替换字符串中的任何现有字符。

```php
use Illuminate\Support\Str;
 
Str::substrReplace('1300', ':', 2); // 13:
 
Str::substrReplace('1300', ':', 2, 0); // 13:00
```

## `Str::swap()`

`Str::swap()` 方法使用 PHP [strtr 函数](https://www.php.net/manual/zh/function.strtr.php)替换给定字符串中的多个值。

```php
use Illuminate\Support\Str;

$string = Str::swap([
    'Tacos' => 'Burritos',
    'great' => 'fantastic',
], 'Tacos are great!');

// Burritos are fantastic!
```

## `Str::take()`

`Str::take()` 方法用于从字符串中获取指定数量的字符。

```php
use Illuminate\Support\Str;

Str::take('Build something amazing!', 5); // Build
```

## `Str::title()`

`Str::title()` 方法用于将字符串中的单词首字母大写。

```php
use Illuminate\Support\Str;

Str::title('a nice title uses the correct case');

// A Nice Title Uses The Correct Case
```

## `Str::toBase64()`

`Str::toBase64()` 方法用于将字符串转换为 Base64 编码。

```php
use Illuminate\Support\Str;

Str::toBase64('Laravel');

// TGFyYXZlbA==
```

如果需要将 Base64 编码转换回原始字符串，可以使用 [Str::fromBase64()](#str-frombase64) 方法。

## `Str::ucfirst()`

`Str::ucfirst()` 方法用于将字符串中的第一个字母转换为大写。

```php
use Illuminate\Support\Str;

Str::ucfirst('foo bar'); // Foo bar
```

## `Str::ucsplit()`

`Str::ucsplit()` 方法将给定的字符串按大写字符拆分为数组。

```php
use Illuminate\Support\Str;
 
Str::ucsplit('FooBar'); // [0 => 'Foo', 1 => 'Bar']
```

## `Str::upper()`

`Str::upper()` 方法用于将字符串转换为大写。

```php
use Illuminate\Support\Str;

Str::upper('laravel'); // LARAVEL
```

## `Str::ulid()`

`Str::ulid()` 方法用于生成一个 ULID。

```php
use Illuminate\Support\Str;
 
return (string) Str::ulid(); // 01HPXVX7J7YRA6N2E5DS5GN8V3
```

## `Str::unwrap()`

`Str::unwrap()` 方法从给定字符串的开头和结尾删除指定的字符串。

```php
use Illuminate\Support\Str;

Str::unwrap('-Laravel-', '-'); // Laravel

Str::unwrap('{framework: "Laravel"}', '{', '}'); // framework: "Laravel"
```

## `Str::uuid()`

`Str::uuid()` 方法用于生成一个 UUID。

```php
use Illuminate\Support\Str;

return (string) Str::uuid();
```

## `Str::wordCount()`

`Str::wordCount()` 方法用于计算字符串中的单词数量。

```php
use Illuminate\Support\Str;

Str::wordCount('Hello, world!'); // 2
```

## `Str::wordWrap()`

`Str::wordWrap()` 方法将字符串包装为给定数量的字符。

```php
use Illuminate\Support\Str;

$text = "The quick brown fox jumped over the lazy dog."
Str::wordWrap($text, characters: 20, break: "<br />\n");
/*
The quick brown fox<br />
jumped over the lazy<br />
dog.
*/
```

## `Str::words()`

`Str::words()` 方法限制字符串中的单词数。

可以通过其第三个参数将附加字符串传递给此方法，以指定应将哪个字符串附加到截断字符串的末尾：

```php
use Illuminate\Support\Str;

Str::words('Perfectly balanced, as all things should be.', 3, ' >>>');
// Perfectly balanced, as >>>
```

## `Str::wrap()`

`Str::wrap()` 方法将给定的字符串包装为另一个字符串。

```php
use Illuminate\Support\Str;

Str::wrap('Laravel', '"');
// "Laravel"

Str::wrap('is', before: 'This ', after: ' Laravel!');
// This is Laravel!
```

## `Str::chopStart()`

[Laravel v11.13.0](https://github.com/laravel/framework/pull/51910) 时，`Str::chopStart()` 方法从字符串的开头删除指定的字符串。

```php
$version = 'v1.2.32-beta';

Str::of($version)
  	->chopStart('v'); // "1.2.32-beta"
```


## `Str::chopEnd()`

[Laravel v11.13.0](https://github.com/laravel/framework/pull/51910) 时，`Str::chopEnd()` 方法从字符串的末尾删除指定的字符串。

```php
$version = 'v1.2.32-beta';

Str::of($version)
  	->chopStart('v') // "1.2.32-beta"
	->chopEnd('-beta'); // "1.2.32"
```

## `Str::deduplicate()`

[Laravel v11.20.0](https://github.com/laravel/framework/pull/52350) 时，`Str::deduplicate()` 方法从字符串中删除重复的字符。

```php
<?php
use Illuminate\Support\Str;

Str::dedupulicate('random  double  spaces'); // 'random double spaces'
Str::dedupulicate('/some//odd/path//', '/'); // '/some/odd/path/'
Str::dedupulicate('zondaaaa', 'a');          // 'zonda'
```