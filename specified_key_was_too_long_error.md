## Laravel 5.\* 执行迁移文件报错：Specified key was too long error

命令行执行迁移文件时，报错 `Specified key was too long`，如果我们仔细检查错误会发现是唯一索引太长了，报错信息如下：

    [Illuminate\Database\QueryException]
    SQLSTATE[42000]: Syntax error or access violation: 1071 Specified key was too long;
    max key length is 767 bytes (SQL: alter table `users` add unique `users_email_uniq
    ue`(`email`))



    [PDOException]
    SQLSTATE[42000]: Syntax error or access violation: 1071 Specified key was too long;
    max key length is 767 bytes

我们当然可以通过修改迁移文件来修改字段的长度，也可以通过修改迁移文件来解决这个问题。

```
 $table->string('email',30)->unique();
```

也可以使用更加通用的办法来完成。编辑 `AppServiceProvider.php` 文件的 `boot()` 方法。如下：

```
use Illuminate\Support\Facades\Schema;

public function boot()
{
    Schema::defaultStringLength(191);
}
```

相当于给予`varchar`默认的长度**191**。

修改数据库的字符集  
如图，新版的Laravel 5.4 使用了 `utf8mb4` 和 `utf8mb4_unicode_ci` ，这个字符集支持 **emoji**

![](/image/screenshot_1493026376620.png)

我们将他改成：

```
'charset' => 'utf8',
'collation' => 'utf8_general_ci',
```

> 建议在数据库迁移文件中使用第二个参数根据业务需求指定字段的长度，这样更加的切合实际和需求。



