## 初窥Laravel模型观察者

如果想在一个模型中监听多个事件，那么你可以把它写成一个类，类中的方法名称即是你想要监听的事件名称。

阅读之前建议看下[Laravel模型事件](/model/laravel-model-event.md)模型的事件观察者是模型的高级应用，我们不局限于将模型事件书写在模型中，可以使用模型观察者将相应事件独立出来。

创建观察者类，类所在目录：`app\Observers`下，命名为：`PostObservers`

## 数据准备

命令行执行如下命令：

```
laravel new laravel-model-observers
cd laravel-model-observers
php artisan make:model Post -m
touch database/database.sqlite
```
> 上面的命令会创建一个Laravel项目并创建一个Post模型文件和对应的迁移文件与数据库配置文件。

修改项目本地环境文件`.env`文件中的数据库连接

```
DB_CONNECTION=sqlite
```

修改数据库迁移文件`database\migrations\****_**_**_******_create_posts_table.php`中的 `up()`方法

```
public function up()
{
    Schema::create('posts', function (Blueprint $table) {
        $table->increments('id');
        $table->string('title');
        $table->text('body');
        $table->softDeletes();
        $table->timestamps();
    });
}
```

修改好迁移文件之后，执行迁移

```
php artisan migrate
```

## 模型内容

```
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use SoftDeletes;
    protected $fillable = [
        'title', 'body',
    ];

    public static function boot()
    {
        parent::boot();
        static::observe(new \App\Observers\PostObserver());
    }
}
```

> 使用类的`boot()`静态方法注册模型观察者类。

## 观察者类

```
<?php
namespace App\Observers;

class PostObserver
{
    // 新增模型数据触发
    public function creating($post) {
        echo "creating event is fired\n";
    }

    // 新增模型数据触发
    public function created($post) {
        echo "created event is fired\n";
    }
    
    // 编辑模型数据触发
    public function updating($post) {
        echo "updating event is fired\n";
    }
    
    // 编辑模型数据触发
    public function updated($post) {
        echo "updated event is fired\n";
    }

    // 新增、编辑模型数据触发
    public function saving($post) {
        echo "saving event is fired\n";
    }
    
    // 新增、编辑模型数据触发
    public function saved($post) {
        echo "saved event is fired\n";
    }
    
    // 删除模型数据触发
    public function deleting($post) {
        echo "deleting event is fired\n";
    }

    // 删除模型数据触发
    public function deleted($post) {
        echo "deleted event is fired\n";
    }

    // 监听数据即将从软删除状态恢复的事件。
    public function restoring($post)
    {
        echo "restoring event is fired\n";
    }

    // 监听数据从软删除状态恢复后的事件。
    public function restored($post)
    {
        echo "restored event is fired\n";
    }
}
```

>**注意:** 如果 `saving`/`creating`/`updating`/`deleting`/`restoring` 事件逻辑中返回`false`，则相应的创建/更新/删除操作会退出，不再往下执行。
> 其中`restoring`和`restored`事件需要模型 `use Illuminate\Database\Eloquent\SoftDeletes;`才能正常使用。


## 在Tinker中测试

### 增

```
☁  laravel-model-observers [master] ⚡ tinker
Psy Shell v0.8.17 (PHP 7.1.13 — cli) by Justin Hileman
>>> App\Post::create(['title'=>'title', 'body'=>'Body']);
saving event is fired
creating event is fired
created event is fired
saved event is fired
=> App\Post {#753
     title: "title",
     body: "Body",
     updated_at: "2018-01-16 08:30:08",
     created_at: "2018-01-16 08:30:08",
     id: 1,
   }
>>>
```

> 通过执行上面的代码我们可以看到，执行模型`create()`方法，会依次触发`saving`、`creating`、`created` 和 `saved` 事件。


### 删

```
☁ laravel-model-observers [master] ⚡ tinker
Psy Shell v0.8.17 (PHP 7.1.13 — cli) by Justin Hileman
>>> App\Post::destroy(1)
deleting event is fired
deleted event is fired
=> 1
```

> 通过执行上面的删除代码，我们可以看到会依次触发`deleting`和`deleted`事件。


```
>>> $post = Post::find(1)
=> App\Post {#770
     id: "1",
     title: "title",
     body: "Body",
     deleted_at: null,
     created_at: "2018-01-16 09:26:50",
     updated_at: "2018-01-16 09:26:50",
   }
>>> $post->restore();
restoring event is fired
saving event is fired
updating event is fired
updated event is fired
saved event is fired
restored event is fired
```

> 通过执行上面的恢复删除代码，可以依次触发了`restoring`、`saving`、`updating`、`updated`、`saved`和`restored`事件中的代码


### 改

```
☁  laravel-model-observers [master] ⚡ tinker
Psy Shell v0.8.17 (PHP 7.1.13 — cli) by Justin Hileman
>>> $post = App\Post::first();
=> App\Post {#752
     id: "2",
     title: "title",
     body: "Body",
     created_at: "2018-01-16 08:31:30",
     updated_at: "2018-01-16 08:31:30",
   }
>>> $post->title = 'New Title'
=> "New Title"
>>> $post->save();
saving event is fired
updating event is fired
updated event is fired
saved event is fired
=> true
```

> 通过执行上面的代码，我们可以看到会依次触发`saving` `updating` `updated` 和 `saved` 事件。