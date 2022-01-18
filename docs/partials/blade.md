# Blade 模版

## `@foreach` 循环中的 `$loop` 变量

在 `foreach` 循环中，仅使用 `$loop` 变量检查当前条目是否是第一个/最后一个。

```php {2,6}
@foreach ($users as $user)
     @if ($loop->first)
        This is the first iteration.
     @endif

     @if ($loop->last)
        This is the last iteration.
     @endif

     <p>This is user {{ $user->id }}</p>
@endforeach
```

`$loop` 变量还包含各种其他有用的属性：

| 属性                 | 描述                 |
|--------------------|--------------------|
| `$loop->index`     | 当前循环迭代的索引（从 0 开始）。 |
| `$loop->iteration` | 当前循环迭代（从 1 开始）。    |
| `$loop->remaining` | 循环中剩余的迭代。          |
| `$loop->count`     | 正在迭代的数组中的项目总数。     |
| `$loop->first`     | 是否是循环的第一次迭代。       |
| `$loop->last`      | 是否是循环的最后一次迭代。      |
| `$loop->even`      | 是否是循环中的偶数迭代。       |
| `$loop->odd`       | 是否是循环中的奇数迭代。       |
| `$loop->depth`     | 当前循环的嵌套级别。         |
| `$loop->parent`    | 在嵌套循环中时，父循环变量。     |

[官方文档](https://laravel.com/docs/master/blade#the-loop-variable) 查看更多。                                                     
        
## 判断模版是否存在


可以在实际加载之前检查视图文件是否存在。

```php{1}
if (view()->exists('custom.page')) {
 // Load the view
}
```

甚至可以加载一组视图，并且只会实际加载第一个存在的视图。

```php
return view()->first(['custom.dashboard', 'dashboard'], $data);
```

## 自定义错误页面

如果想为某些 HTTP 代码创建一个特定的错误页面，例如 `500` 或 `403` - 只需在 `resources/views/errors/500.blade.php` 或 `resources/views/errors/403.blade.php` 等中创建一个将此代码作为文件名的 blade 文件。

当出现该错误代码，它将自动加载。

[官方文档](https://laravel.com/docs/master/errors#custom-http-error-pages) 查看更多。


## 没有控制器的视图

如果希望路由仅显示某个视图，不用创建 Controller 方法，只需使用 `Route::view()` 函数。

<CodeGroup>

  <CodeGroupItem title="view" active>

```php
Route::view('about', 'pages.about'); // 视图在 `resources/pages/about.blade.php`
```
  </CodeGroupItem>

  <CodeGroupItem title="normal">

```php
// 1. 路由定义
Route::get('about', [\App\Https\Controllers\PagesController::class, 'about']);

// 2. 控制器
class PagesController extends Controller
{
    public function about()
    {
        return view('pages.about'); // 视图在 `resources/pages/about.blade.php`
    }
} 
```
  </CodeGroupItem>

</CodeGroup>


## `@auth` 模版指令

使用 `@auth` 指令代替 `@if` 语句来检查登录用户。

### 典型方式

```php
@if(auth()->user())
// 用户已验证身份
@endif
```

### 简洁

```php
@auth
// 用户已验证身份
@endauth
```

### 与之相反的是 `@guest` 指令

```php
@guest
// 用户未验证
@endguest
```
                
## 父级 $loop 变量 

在 `Blade` 的 `@foreach` 指令中，甚至可以在两级循环中使用 `$loop` 变量来访问父变量。

```php
@foreach ($users as $user)
    @foreach ($user->posts as $post)
        @if ($loop->parent->first)
            // 父循环的第一次迭代。
        @endif
    @endforeach
@endforeach
```


## 自定义模版指令

### 普通自定义指令

如果想用新行替换 <br> 标签，将此指令添加到 `AppServiceProvider.php` 的 `boot()` 方法：

```php
public function boot()
{
    Blade::directive('br2nl', function ($string) {
        return "<?php echo preg_replace('/\<br(\s*)?\/?\>/i', \"\n\", $string); ?>";
    });
}
```

通过下面的模版语法使用：

```php
<textarea>@br2nl($post->body)</textarea>
```

### 使用 `Blade::if()` 方法创建新的模版指令。

例如，验证是否启用了特定的应用程序功能，在项目的 `AppServiceProvider.php` 的 `boot` 方法中注册。

```php
/**
 * Bootstrap any application services.
 * return void
 */
public function boot()
{
    Blade::if('enabled', fn ($value) => Setting::get($value) === true);
}
```

通过下面的模版语法使用：

```php
@enabled('regular-registration')
// 常规配置已启用
@elseenabled('beta-registration')
// 测试配置已启用
@else
// 注册被禁用
@endenabled

@unlessenabled('regular-registration')
// 该应用程序不接受常规注册
@endenabled
```
           
## `IncludeIf`, `IncludeWhen`, `IncludeFirst` 指令

如果不确定模版文件是否真的存在，可以使用这些条件命令：

### 当模版文件存在时加载

```php
@includeIf('partials.header')
```

### 当满足条件是加载

```php
@includeWhen(auth()->user()->role_id == 1, 'partials.header')
```
> 将仅为角色 ID 为 1 的用户加载对应模版 `partials.header`

### 加载第一个存在的文件

```php
@includeFirst('adminlte.header', 'default.header')
```
> 尝试加载 `adminlte.header`，如果不存在，将加载 `default.header`

## 使用 Blade-X 变量绑定来节省更多空间
              
### 使用 `@include`
```php
@include("components.post", ["title" => $post->title])
```
   
### 使用 `blade-x`

```html
<!--使用 Blade-X-->
<x-post link="{{ $post->title }}" />

<!--使用 Blade-X 绑定变量-->
<x-post :link="$post->title" />
```
                      
## 组件属性

```php
// button.blade.php 接收属性并添加默认值
@props(['rounded' => false])

<button {{ $attributes->class([
    'bg-red-100 text-red-800',
    'rounded' => $rounded
    ]) }}>
    {{ $slot }}
</button>

// view.blade.php
// 不传递 rounded 属性
<x-button>Submit</x-button>

// 传递 rounded 属性
<x-button rounded>Submit</x-button>
```
              
## 自动完成类型提示 

```php
@php
    /* @var \App\Models\User $user */
@endphp

<div>
    // 编辑器将添加自动提示
    {{ $user->email }}
</div>
```

## 组件语法提示

如果在组件参数前传递冒号 `:` ，就可以直接传递变量而不用 `{{ }}` 吗？

```php
<x-navbar title="{{ $title }}"/>

// 使用下面的语法替代
<x-navbar :title="$title"/>
```
   
## 自动高亮导航链接

当精确的 URL 匹配时自动高亮显示导航链接，或者传递路径或路由名称，带有请求和 CSS 类的模版组件使得显示活动/非活动状态变得简单。
                   
- 组件代码
```php
class NavLink extends Component
{
    public function __construct($href, $active = null)
    {
        $this->href = $href;
        $this->active = $active ?? $href;        
    }
    
    public function render(): View
    {
        $classes = ['font-medium', 'py-2', 'text-primary' => $this->isActive()];
        
        return view('components.nav-link', [
            'class' => Arr::toCssClasses($classes);
        ]);
    }
    
    protected function isActive(): bool
    {
        if (is_bool($this->active)) {
            return $this->active;
        }
        
        if (request()->is($this->active)) {
            return true;
        }
        
        if (request()->fullUrlIs($this->active)) {
            return true;
        }
        
        return request()->routeIs($this->active);
    }
}
```
          

```php
// resources/views/components/nav-link.blade.php
<a href="{{ $href }}" {{ $attributes->class($class) }}>
    {{ $slot }}
</a>
```

```php
// 在模版中使用
<x-nav-link :href="route('projects.index')">Projects</x-nav-link>
<x-nav-link :href="route('projects.index')" active="projects.*">Projects</x-nav-link>
<x-nav-link :href="route('projects.index')" active="projects/*">Projects</x-nav-link>
<x-nav-link :href="route('projects.index')" :active="$tab = 'projects'">Projects</x-nav-link>
```
                     
## `@each` 循环

<CodeGroup>

  <CodeGroupItem title="@foreach写法">

```php
// 1. 定义公共模版 resources/views/partials/item.blade.php
<div>
    <p>Name: {{ $item->name }}
    <p>Price: {{ $item->price }}
</div>

// 2. 使用
@foreach($item in $items)
    @include('partials.item', $item)
@endforeach
```
  </CodeGroupItem>

  <CodeGroupItem title="@each 优化写法" active>

```php {8}
// 1. 定义公共模版 resources/views/partials/item.blade.php
<div>
    <p>Name: {{ $item->name }}
    <p>Price: {{ $item->price }}
</div>

// 2. 使用
@each('partials.item', $items, 'item')
```
  </CodeGroupItem>

</CodeGroup>

## 整理模版的简单方法

<CodeGroup>

  <CodeGroupItem title="@if/loop 组合">

```php
// if/loop 组合
@if ($orders->count())
    @foreach($orders as $order)
        <div>
            {{ $order->id }}
        </div>
    @endforeach
@else
    <p>You haven't placed any orders yet.</p>
@endif
```

  </CodeGroupItem>

  <CodeGroupItem title="@forelse 选择" active>

```php
// forelse 选择
@forelse($orders as $order)
    <div>
        {{ $order->id }}
    </div>
@empty
    <p>You haven't placed any orders yet.</p>
@endforelse
```

  </CodeGroupItem>
</CodeGroup>

## 环境变量指令 `@env` `@production`

模版指令使其非常容易加载，例如当应用程序处于生产模式时，加载谷歌代码。

```php
@production
// 生产环境代码
@endproduction

@env('staging')
// 测试环境代码
@endenv

@env(['staging', 'production'])
// 测试环境和生产环境代码
@endenv
```