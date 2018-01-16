## Laravel模型事件

Eloquent也支持模型事件——当模型被创建、更新或删除的时候触发相应事件，Eloquent目前支持八种事件类型：`creating`、`created`、`updating`、`updated`、`saving`、`saved`、`deleting`、`deleted`。

`deleting`和`deleted`很好理解，在删除模型时触发，`deleting`在删除操作前执行，`deleted`在删除完成后执行。

当创建模型时，依次执行`saving`、`creating`、`created`和`saved`，同理在更新模型时依次执行`saving`、`updating`、`updated`和`saved`。无论是使用批量赋值（`create`/`update`）还是直接调用`save`方法，都会触发对应事件（前提是注册了相应的模型事件）。

这里我们选择再当前`\App\Post`类的`boot`方法里面注册(当然，也可以选择在服务提供者`AppServiceProvider`的`boot`方法中注册)：

```php
<?php
namespace App;

use Illuminate\Database\Eloquent\Model;
class Post extends Model
{
    
    // 允许自动填充
    protected $guarded = ['id','updated_at','created_at'];

    protected static function boot()
    {
        Post::saving(function($post){
            echo 'saving event is fired<br>';
        });
        
        Post::creating(function($post){
            echo 'creating event is fired<br>';
        });
        
        Post::created(function($post){
            echo 'created event is fired<br>';
        });
        
        Post::saved(function($post){
            echo 'saved event is fired<br>';
        });
    }
}
```

然后在控制器中编写测试代码如下：

```php
public function index()
{
    $data = array(
        'title'=>'test model event',
        'content'=>'test content',
        'cat_id'=>1,
    );
    $post = Post::create($data);
    if(!$post->exists){
        echo '添加文章失败！';exit();
    }
    echo '<'.$post->title.'>保存成功！';
}
```

接下来在浏览中访问地址，页面输入如下：

```
saving event is fired
creating event is fired
created event is fired
saved event is fired
<test model event>保存成功！
```

> **注意:** 
如果`saving`/`creating`/`updating`/`deleting`事件返回`false`，则相应的创建/更新/删除操作会退出，不再往下执行，比如我们修改上述`creating`事件代码如下：

```php
Post::creating(function($post){
    echo 'creating event is fired<br>';
    if($post->cat_id==1)
        return false;
});
```

也就是当文章分类id等于1的时候，不再往下执行，在浏览器中再次访问地址，页面输出如下：

```
saving event is fired
creating event is fired
添加文章失败！
```

有了模型事件之后，我们就很方便地在模型创建、更新或删除的不同生命周期阶段添加相应的业务逻辑。