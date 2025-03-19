# Livewire 缺少的测试断言

<!-- markdownlint-disable MD013 -->
[Livewire](https://livewire.laravel.com/docs/testing#all-available-testing-utilities) 提供了很多开箱即用的测试断言，但是一些需要测试视图属性、视图方法、表单方法或 Javascript 事件的时候就可以通过 [christophrumpel/missing-livewire-assertions](https://github.com/christophrumpel/missing-livewire-assertions)扩展进行测试。
<!-- markdownlint-enable MD013 -->

## 安装

通过 Composer 安装该软件包：

```bash
composer require christophrumpel/missing-livewire-assertions --dev
```

## 可用方法

安装完成后新增的断言会自动添加，因此可以在测试用例中立即使用它们。

- [assertPropertyWired](https://github.com/christophrumpel/missing-livewire-assertions/blob/production/src/CustomLivewireAssertionsMixin.php#L16)
- [assertPropertyNotWired](https://github.com/christophrumpel/missing-livewire-assertions/blob/production/src/CustomLivewireAssertionsMixin.php#L31)
- [assertPropertyEntangled](https://github.com/christophrumpel/missing-livewire-assertions/blob/production/src/CustomLivewireAssertionsMixin.php#L46)
- [assertPropertyNotEntangled](https://github.com/christophrumpel/missing-livewire-assertions/blob/production/src/CustomLivewireAssertionsMixin.php#L70)
- [assertMethodWired](https://github.com/christophrumpel/missing-livewire-assertions/blob/production/src/CustomLivewireAssertionsMixin.php#L94)
- [assertMethodNotWired](https://github.com/christophrumpel/missing-livewire-assertions/blob/production/src/CustomLivewireAssertionsMixin.php#L109)
- [assertMethodWiredToForm](https://github.com/christophrumpel/missing-livewire-assertions/blob/production/src/CustomLivewireAssertionsMixin.php#L124)
- [assertMethodNotWiredToForm](https://github.com/christophrumpel/missing-livewire-assertions/blob/production/src/CustomLivewireAssertionsMixin.php#L139)
- [assertMethodWiredToEvent](https://github.com/christophrumpel/missing-livewire-assertions/blob/production/src/CustomLivewireAssertionsMixin.php#L154)
- [assertMethodNotWiredToEvent](https://github.com/christophrumpel/missing-livewire-assertions/blob/production/src/CustomLivewireAssertionsMixin.php#L169)
- [assertMethodWiredToEventWithoutModifiers](https://github.com/christophrumpel/missing-livewire-assertions/blob/production/src/CustomLivewireAssertionsMixin.php#L184)
- [assertContainsLivewireComponent](https://github.com/christophrumpel/missing-livewire-assertions/blob/production/src/CustomLivewireAssertionsMixin.php#L214)
- [assertDoesNotContainLivewireComponent](https://github.com/christophrumpel/missing-livewire-assertions/blob/production/src/CustomLivewireAssertionsMixin.php#L235)
- [assertContainsBladeComponent](https://github.com/christophrumpel/missing-livewire-assertions/blob/production/src/CustomLivewireAssertionsMixin.php#L256)
- [assertDoesNotContainBladeComponent](https://github.com/christophrumpel/missing-livewire-assertions/blob/production/src/CustomLivewireAssertionsMixin.php#L274)
- [assertSeeBefore](https://github.com/christophrumpel/missing-livewire-assertions/blob/production/src/CustomLivewireAssertionsMixin.php#L292)
- [assertDoNotSeeBefore](https://github.com/christophrumpel/missing-livewire-assertions/blob/production/src/CustomLivewireAssertionsMixin.php#L308)
- [assertFileDownloadedContains](https://github.com/christophrumpel/missing-livewire-assertions/blob/production/src/CustomLivewireAssertionsMixin.php#L324)
- [assertFileDownloadedNotContains](https://github.com/christophrumpel/missing-livewire-assertions/blob/production/src/CustomLivewireAssertionsMixin.php#L341)

## 检查 HTML

### 属性是否使用

```php
Livewire::test(FeedbackForm::class)
    ->assertPropertyWired('email');
```

测试用例在组件的视图文件中查找像 `wire:model="email"` 的字符串。

<!-- markdownlint-disable MD013 -->
它还检测诸如 `wire:model.live="email"`、`wire:model.lazy="email"`、`wire:model.debounce="email"`、`wire:model.lazy.10s="email"` 或 `wire:model.debounce.500ms="email"` 的字符串。
<!-- markdownlint-enable MD013 -->

### 方法是否使用

```php
Livewire::test(FeedbackForm::class)
    ->assertMethodWired('submit');
```

它会在组件的视图文件中查找类似 `wire:click="submit"` 或者 `wire:click.prevent="submit"` 的字符串。

### 魔术动作是否使用

```php
Livewire::test(FeedbackForm::class)
    ->assertMethodWired('$toggle(\'sortAsc\')');
```

<!-- markdownlint-disable MD013 -->
它会查找像 `wire:click="$refresh"`、`wire:click="$toggle('sortAsc')`、`$dispatch('post-created')` 类似的字符串，以及所有其它的[魔术动作](https://livewire.laravel.com/docs/actions#magic-actions)。
<!-- markdownlint-enable MD013 -->

> **注意：** 测试魔法动作时，必须转义单引号，如上所示。

### 方法在表单中使用

```php
Livewire::test(FeedbackForm::class)
    ->assertMethodWiredToForm('upload');
```

它会在组件的视图文件中查找类似 `wire:submit="upload"` 或者 `wire:submit.prevent="upload"` 的字符串。

### 所有 js 事件

```php
Livewire::test(FeedbackForm::class)
    ->assertMethodWiredToEvent('setValue', 'change');
```

它会在组件的视图文件中查找像 `wire:change="setValue"` 或 `wire:change.debounce.150ms="setValue"` 这样的字符串。

### 不匹配修饰符的 js 事件

通过 `assertMethodWiredToEventWithoutModifiers` 方法还可以在没有任何附加修饰符的情况下检查操作：

```bash
Livewire::test(FeedbackForm::class)
    ->assertMethodWiredToEventWithoutModifiers('setValue', 'change');
```

上面测试用例将匹配 `wire:change="setValue"` 而不匹配 `wire:change.debounce.150ms="setValue"`。

如果需要匹配仅仅修饰符的 js 事件，可以使用 `assertMethodWiredToEventWithModifiers` 方法：

```php
Livewire::test(FeedbackForm::class)
    ->assertMethodWiredToEventWithoutModifiers('setValue', 'change.debounce.150ms');
```

### 是否包含 Blade 组件

```php
use App\View\Components\Button;

Livewire::test(FeedbackForm::class)
    ->assertContainsBladeComponent(Button::class)
    ->assertContainsBladeComponent('button');
```

上面测试用例将匹配 `<x-button` 字符串。

### 字符串出现在另一字符串前

```php
Livewire::test(FeedbackForm::class)
    ->assertSeeBefore('first string', 'second string');
```
