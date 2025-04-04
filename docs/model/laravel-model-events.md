# 模型事件

Eloquent支持模型事件 —— 当模型被创建、更新或删除的时候触发相应事件。

目前使用Laravel版本是5.5，Eloquent目前支持10种事件类型：`creating`、`created`、`updating`、`updated`、`saving`、`saved`、`deleting`、`deleted`、`restoring`和`restored`。

`deleting`和`deleted`很好理解，在删除模型时触发；`deleting`在删除操作前执行，`deleted`在删除完成后执行。

当创建模型时，依次执行`saving`、`creating`、`created`和`saved`，同理在更新模型时依次执行`saving`、`updating`、`updated`和`saved`。

当恢复软删除的数据时，将依次触发`restoring`、`saving`、`updating`、`saved`和`restored`事件。

无论是使用批量赋值（`create`/`update`）还是直接调用`save`方法，都会触发对应事件（前提是注册了相应的模型事件）。

这里我们选择在当前 `\App\Models\Post` 模型类的 `boot` 方法里面注册(当然，也可以选择在服务提供者 `AppServiceProvider` 的 `boot` 方法中注册)。

## 数据准备

命令行执行如下命令：

```bash
laravel new model-events
cd model-events
php artisan make:model Post -m
touch database/database.sqlite
```

> 上面的命令会创建一个Laravel项目并创建一个Post模型文件和对应的迁移文件与数据库配置文件。

修改项目本地环境文件`.env`文件中的数据库连接

```dotenv
DB_CONNECTION=sqlite
```

修改数据库迁移文件`database\migrations\****_**_**_******_create_posts_table.php`中的 `up()`方法

```php
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

```bash
php artisan migrate
```

## 模型内容

我们使用上面提到的 10 种模型事件进行测试。

```php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
  use SoftDeletes;
  
  protected $fillable = ['title', 'body'];

  protected static function boot()
  {
    // 新增模型数据触发
    static::creating(function ($post) {
      echo "creating event is fired\n";
    });

    // 新增模型数据触发
    static::created(function ($post) {
      echo "created event is fired\n";
    });

    // 编辑模型数据触发
    static::updating(function ($post) {
      echo "updating event is fired\n";
    });

    // 编辑模型数据触发
    static::updated(function ($post) {
      echo "updated event is fired\n";
    });

    // 新增、编辑模型数据触发
    static::saving(function ($post) {
      echo "saving event is fired\n";
    });

    // 新增、编辑模型数据触发
    static::saved(function ($post) {
      echo "saved event is fired\n";
    });

    // 删除模型数据触发
    static::deleting(function ($post) {
      echo "deleting event is fired\n";
    });

    // 删除模型数据触发
    static::deleted(function ($post) {
      echo "deleted event is fired\n";
    });

    static::restoring(function ($post) {
      echo "restoring event is fired\n";
    });

    static::restored(function () {
      echo "restored event is fired\n";
    });
  }
}
```

> 其中 `restoring` 和 `restored` 事件需要模型 `use Illuminate\Database\Eloquent\SoftDeletes;` 才能正常使用。

## 对数据的增删改操作

### 增加

```php
use App\Models\Post;

Post::create(['title'=>'title','body'=>'body']);

/**
saving event is fired
creating event is fired
created event is fired
saved event is fired
 */
```
> 通过执行上面的代码我们可以看到，执行模型 `create()` 方法，会依次触发 `saving` 、 `creating` 、 `created` 和 `saved` 事件。

### 删除

* **软删除**

```php
use App\Models\Post;

$post = Post::latest()->first();
App\Models\Post::destroy(1);

/**
deleting event is fired
deleted event is fired  
 */
```

> 通过执行上面的删除代码，我们可以看到会依次触发 `deleting` 和 `deleted` 事件。

* **恢复删除**

```php
use App\Models\Post;

$post = Post::latest()->first();
$post->find(1)->restore();

/**
restoring event is fired
saving event is fired
updating event is fired
updated event is fired
saved event is fired
restored event is fired
 */
```

> 通过执行上面的恢复删除代码，可以依次触发了`restoring`、`saving`、`updating`、`updated`、`saved`和`restored`事件中的代码

### 更新

```php
use App\Models\Post;

$post = App\Post::latest()->first();
$post->title = 'title Update';
$post->save();

/**
saving event is fired
updating event is fired
updated event is fired
saved event is fired
 */
```

> 通过执行上面的代码，我们可以看到会依次触发`saving` 、`updating` 、`updated` 和 `saved` 事件。

## 事件模型的退出

> **注意:**
如果 `saving` 、 `creating` 、 `updating` 、 `deleting` 、 `restoring` 事件逻辑中返回 `false` ，则相应的创建/更新/删除操作会退出，不再往下执行。

```php
static::creating(function($post){
  echo 'creating event is fired<br>';
  if ($post->title == 'title') return false;
});
```

```php
use App\Models\Post;

Post::create(['title'=>'title','body'=>'body']);

/**
saving event is fired
creating event is fired
 */
```

有了模型事件之后，我们就很方便地在模型创建、更新或删除的不同生命周期阶段添加相应的业务逻辑。
